import { NextResponse } from "next/server";
import { Resend } from "resend";



export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in env.");
      return NextResponse.json(
        { ok: false, error: "Server configuration error." },
        { status: 500 },
      );
    }
    const resend = new Resend(apiKey);
    const body = await req.json();

    const name = (body.name || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const projectType = (body.projectType || "").toString().trim();
    const message = (body.message || "").toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "ASK Studios <noreply@example.com>";

    if (!toEmail) {
      console.error("CONTACT_TO_EMAIL is not set in env.");
      return NextResponse.json(
        { ok: false, error: "Server email configuration error." },
        { status: 500 },
      );
    }

    const subject = `New contact form submission from ${name}`;
    const plainText = [
      `Name: ${name}`,
      `Email: ${email}`,
      projectType ? `Project type: ${projectType}` : "",
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      text: plainText,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in /api/contact", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
