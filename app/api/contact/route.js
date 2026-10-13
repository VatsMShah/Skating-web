import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    let submission = {};
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      submission = await request.json();
    } else {
      const formData = await request.formData();
      submission = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        center: formData.get("center"),
        message: formData.get("message"),
      };
    }

    const { name, phone, email, center, message } = submission;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const recipientEmail = (process.env.CONTACT_RECIPIENT_EMAIL || "vatsshah982@gmail.com")
      .replace(/["']/g, "")
      .trim();
    const gmailUser = process.env.GMAIL_USER
      ? process.env.GMAIL_USER.replace(/["']/g, "").trim()
      : "";
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD
      ? process.env.GMAIL_APP_PASSWORD.replace(/["'\s]/g, "").trim()
      : "";

    console.log("-----------------------------------------");
    console.log("New D.R.S.A Contact Form Submission:");
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email || "N/A"}`);
    console.log(`Center: ${center || "N/A"}`);
    console.log(`Message: ${message || "N/A"}`);
    console.log(`Routing to: ${recipientEmail}`);
    console.log("-----------------------------------------");

    const isPlaceholder =
      !gmailAppPassword ||
      gmailAppPassword.includes("your_") ||
      gmailAppPassword === "your_16_character_app_password";

    if (!gmailUser || isPlaceholder) {
      console.warn(
        "Notice: GMAIL_USER and GMAIL_APP_PASSWORD are not yet configured with a valid Google App Password in .env.local. The inquiry details were logged above."
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Email credentials pending: Please add your 16-character Google App Password in .env.local (GMAIL_APP_PASSWORD). Details have been logged to the server.",
          submission,
        },
        { status: 503 }
      );
    }

    // Configure Nodemailer transporter for Gmail SMTP with secure SSL
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const plainTextBody = `
NEW INQUIRY - DEHIYA ROLLER SKATING ACADEMY (D.R.S.A)
===================================================

Student / Parent Name : ${name}
Phone / WhatsApp       : ${phone}
Email Address          : ${email || "Not provided"}
Preferred Center       : ${center || "Not selected"}

Inquiry Message:
${message || "No custom message provided."}

Submitted At: ${timestamp}
Direct WhatsApp Link: https://wa.me/91${phone.replace(/\D/g, "")}
`;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .header { background: #0A1931; padding: 28px 24px; text-align: center; border-bottom: 4px solid #F59E0B; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 0.05em; text-transform: uppercase; }
    .header p { color: #FBBF24; margin: 6px 0 0; font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; background: #FEF3C7; color: #0A1931; font-weight: 700; font-size: 11px; padding: 4px 12px; border-radius: 999px; border: 1px solid #F59E0B; margin-bottom: 18px; text-transform: uppercase; letter-spacing: 0.05em; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 22px; }
    .table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
    .table td.label { font-weight: 600; color: #64748b; width: 38%; background: #f8fafc; text-transform: uppercase; font-size: 11px; letter-spacing: 0.04em; }
    .table td.val { font-weight: 600; color: #0f172a; }
    .message-box { background: #f8fafc; border-left: 4px solid #F59E0B; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 24px; }
    .btn-container { text-align: center; margin: 24px 0 12px; }
    .btn { display: inline-block; background: #25D366; color: #ffffff !important; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.04em; }
    .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Dehiya Roller Skating Academy</h1>
      <p>New Student Inquiry Received</p>
    </div>
    <div class="content">
      <span class="badge">Website Form Submission</span>
      
      <table class="table">
        <tr>
          <td class="label">Full Name</td>
          <td class="val">${name}</td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp</td>
          <td class="val">
            <a href="tel:${phone}" style="color: #0A1931; text-decoration: none;">${phone}</a>
          </td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="val">
            ${email ? `<a href="mailto:${email}" style="color: #0A1931;">${email}</a>` : '<span style="color:#94a3b8;">Not provided</span>'}
          </td>
        </tr>
        <tr>
          <td class="label">Preferred Center</td>
          <td class="val" style="color: #D97706;">${center || "Not specified"}</td>
        </tr>
        <tr>
          <td class="label">Submission Time</td>
          <td class="val" style="font-size: 12px; color: #64748b;">${timestamp}</td>
        </tr>
      </table>

      <div style="font-weight: 700; font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.05em;">Message / Inquiry Details:</div>
      <div class="message-box">
        ${message ? message.replace(/\n/g, "<br>") : "<em>No additional details provided.</em>"}
      </div>

      <div class="btn-container">
        <a href="https://wa.me/91${phone.replace(/\D/g, "")}" class="btn" target="_blank">Chat with Lead on WhatsApp</a>
      </div>
    </div>
    <div class="footer">
      Automated inquiry notification from Dehiya Roller Skating Academy website (D.R.S.A).
    </div>
  </div>
</body>
</html>
`;

    const info = await transporter.sendMail({
      from: `"D.R.S.A Website Inquiries" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email || gmailUser,
      subject: `New D.R.S.A Skating Inquiry: ${name} (${center ? center.split(",")[0] : "General"})`,
      text: plainTextBody,
      html: htmlBody,
    });

    console.log("Email successfully sent:", info.messageId);

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted and emailed successfully.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    let errorMsg = error.message || "An unexpected error occurred while processing your request.";
    if (errorMsg.includes("EAUTH") || errorMsg.includes("Username and Password not accepted")) {
      errorMsg =
        "Gmail authentication failed. Please verify that GMAIL_USER and the 16-character Google App Password in .env.local are correct (requires 2-Step Verification enabled).";
    }
    return NextResponse.json(
      {
        success: false,
        error: errorMsg,
      },
      { status: 500 }
    );
  }
}
