import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

// Very basic email format check — good enough to catch typos before we
// waste an SMTP call, not meant to be a full RFC 5322 validator.
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Verifies the invisible reCAPTCHA token with Google before we trust the
// submission. Requires RECAPTCHA_SECRET_KEY in your environment — the
// *secret* key from the reCAPTCHA admin console, never the site key.
async function verifyCaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error("Missing RECAPTCHA_SECRET_KEY environment variable");
  }

  const params = new URLSearchParams({
    secret,
    response: token,
  });

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  const data = await res.json();
  console.log("recaptcha response:", data); // temporary — remove after debugging

  return data.success === true;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, source, captchaToken } = await request.json();

    // --- Validation ---
    if (!name || !email || !message || !source) {
      return NextResponse.json(
        { error: "Name, email, and message are all required." },
        { status: 400 },
      );
    }

    if (typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters." },
        { status: 400 },
      );
    }

    if (typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long (max 5000 characters)." },
        { status: 400 },
      );
    }

    // --- Captcha verification ---
    // Runs before we ever touch SMTP, so bots that skip the widget and hit
    // this endpoint directly get rejected here instead of costing an email send.
    if (!captchaToken || typeof captchaToken !== "string") {
      return NextResponse.json(
        { error: "Captcha verification is missing. Please try again." },
        { status: 400 },
      );
    }

    const isHuman = await verifyCaptcha(captchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: "Captcha verification failed. Please try again." },
        { status: 400 },
      );
    }

    // --- Transporter (Gmail SMTP) ---
    // Requires GMAIL_USER + GMAIL_APP_PASSWORD in your environment.
    // GMAIL_APP_PASSWORD is a 16-character Google "App Password", NOT your
    // normal Gmail password. See setup notes below.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // --- Send the email ---
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || process.env.GMAIL_USER,
      replyTo: email, // lets you hit "Reply" and answer the visitor directly
      subject: `New message from ${name} at Onetone Website`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New message from your ${source} </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while sending your message. Please try again later.",
      },
      { status: 500 },
    );
  }
}
