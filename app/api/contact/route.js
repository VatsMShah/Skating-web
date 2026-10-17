import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory sliding window rate limiter
// IP -> Array of submission timestamps
const ipSubmissionTracker = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_SUBMISSIONS_PER_WINDOW = 3; // Max 3 submissions per IP per 10 minutes

function checkRateLimit(ip) {
  if (!ip || ip === "unknown") return true;

  const now = Date.now();
  const timestamps = ipSubmissionTracker.get(ip) || [];

  // Filter out timestamps older than the window
  const recentTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    ipSubmissionTracker.set(ip, recentTimestamps);
    return false; // Rate limit exceeded
  }

  recentTimestamps.push(now);
  ipSubmissionTracker.set(ip, recentTimestamps);

  // Periodically clean up entries older than the window to prevent memory leaks
  if (ipSubmissionTracker.size > 1000) {
    for (const [key, times] of ipSubmissionTracker.entries()) {
      const valid = times.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (valid.length === 0) {
        ipSubmissionTracker.delete(key);
      } else {
        ipSubmissionTracker.set(key, valid);
      }
    }
  }

  return true;
}

export async function POST(request) {
  try {
    // 1. IP Rate Limiting Guard (Layer 3)
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(clientIp)) {
      console.warn(`[Security] Rate limit exceeded for IP: ${clientIp}`);
      return NextResponse.json(
        {
          success: false,
          error: "Too many submissions from your network. Please wait 10 minutes before submitting another inquiry.",
        },
        { status: 429 }
      );
    }

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
        website_hp: formData.get("website_hp"),
        formLoadedAt: formData.get("formLoadedAt"),
      };
    }

    const { name, phone, email, center, message, website_hp, formLoadedAt } = submission;

    // 2. Honeypot Anti-Bot Guard (Layer 1)
    if (website_hp && typeof website_hp === "string" && website_hp.trim() !== "") {
      console.warn("[Security] Bot trapped by honeypot field. Discarding submission.");
      // Return fake success to prevent bot adaptation
      return NextResponse.json({
        success: true,
        message: "Inquiry received.",
      });
    }

    // 3. Time-Elapsed Speed Trap Guard (Layer 2)
    if (formLoadedAt) {
      const elapsed = Date.now() - Number(formLoadedAt);
      if (!isNaN(elapsed) && elapsed < 2500) {
        console.warn(`[Security] Bot trapped by speed trap: submitted in ${elapsed}ms.`);
        return NextResponse.json(
          {
            success: false,
            error: "Submission was too fast. Please take a few moments to review your details.",
          },
          { status: 400 }
        );
      }
    }

    // 4. Mandatory Fields Validation: Name, Phone, and Email are ALL mandatory
    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "Name, phone number, and email address are all required." },
        { status: 400 }
      );
    }

    // 5. Strict Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 6. Strict Phone Format Validation (must have at least 10 digits)
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit phone number." },
        { status: 400 }
      );
    }

    console.log("-----------------------------------------");
    console.log("New D.R.S.A Contact Form Submission:");
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email || "N/A"}`);
    console.log(`Center: ${center || "N/A"}`);
    console.log(`Message: ${message || "N/A"}`);
    console.log(`Routing to: ${recipientEmail}`);
    console.log("-----------------------------------------");

    const resendApiKey = process.env.RESEND_API_KEY
      ? process.env.RESEND_API_KEY.replace(/["'\s]/g, "").trim()
      : "";

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

    // 1. If RESEND_API_KEY is configured, dispatch directly via Resend HTTPS API (Built for Vercel)
    if (resendApiKey) {
      console.log("Dispatching email via Resend API...");
      let resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "DRSA Academy <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email || undefined,
          subject: `New D.R.S.A Skating Inquiry: ${name} (${center ? center.split(",")[0] : "General"})`,
          text: plainTextBody,
          html: htmlBody,
        }),
      });

      let resendData = await resendRes.json();

      // In Resend free onboarding mode without domain, it only allows sending to the account owner email
      if (
        !resendRes.ok &&
        resendData.message &&
        resendData.message.includes("You can only send testing emails to your own email address")
      ) {
        const match = resendData.message.match(/\(([^)]+)\)/);
        const ownerEmail = match ? match[1].trim() : "vatsalshah892@gmail.com";
        console.warn(`Resend onboarding mode: routing inquiry to registered account owner (${ownerEmail})`);

        resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "DRSA Academy <onboarding@resend.dev>",
            to: [ownerEmail],
            reply_to: email || undefined,
            subject: `New D.R.S.A Skating Inquiry: ${name} (${center ? center.split(",")[0] : "General"})`,
            text: plainTextBody,
            html: htmlBody,
          }),
        });

        resendData = await resendRes.json();
      }

      if (!resendRes.ok) {
        console.error("Resend API error:", resendData);
        throw new Error(resendData.message || "Failed to dispatch email via Resend API");
      }

      console.log("Email successfully sent via Resend:", resendData.id);
      return NextResponse.json({
        success: true,
        message: "Inquiry submitted and emailed successfully.",
        messageId: resendData.id,
      });
    }

    // 2. Otherwise fallback to Nodemailer Gmail SMTP
    const isPlaceholder =
      !gmailAppPassword ||
      gmailAppPassword.includes("your_") ||
      gmailAppPassword === "your_16_character_app_password";

    if (!gmailUser || isPlaceholder) {
      console.warn(
        "Notice: Neither RESEND_API_KEY nor GMAIL_APP_PASSWORD are configured. The inquiry details were logged above."
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Email credentials pending: Please add RESEND_API_KEY or GMAIL_APP_PASSWORD to environment variables.",
          submission,
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

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
