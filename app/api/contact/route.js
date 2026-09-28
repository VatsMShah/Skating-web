import { NextResponse } from "next/server";

/*
  Plain form handler for the contact page (app/contact/page.jsx submits
  here with a native <form method="POST">, no client JS required).

  The original site used a Formidable Forms schema with these exact
  fields (name, email, phone, message) whose only configured
  notification emailed the submission to the site admin. This route
  doesn't send anything yet — wire in a real email provider
  (Resend, Postmark, SendGrid, etc.) or a service like Formspree
  where marked below.
*/
export async function POST(request) {
  const formData = await request.formData();
  const submission = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  // TODO: send `submission` via your email provider of choice, e.g.:
  // await resend.emails.send({ to: "you@yourdomain.com", ... submission });
  console.log("Contact form submission:", submission);

  return NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
}
