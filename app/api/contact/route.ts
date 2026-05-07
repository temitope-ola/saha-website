import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { pathway, name, email, company, phone, message, website, role } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Build the email body
    const lines = [
      `**New contact form submission**`,
      ``,
      `**Pathway:** ${pathway || "Not specified"}`,
      `**Name:** ${name}`,
      `**Email:** ${email}`,
      company ? `**Company:** ${company}` : null,
      phone ? `**Phone:** ${phone}` : null,
      website ? `**Website:** ${website}` : null,
      role ? `**Role:** ${role}` : null,
      ``,
      `**Message:**`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const htmlBody = lines
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Saha Website <onboarding@resend.dev>",
        to: ["hello@sahaholding.ch"],
        reply_to: email,
        subject: `[Saha] ${pathway || "Contact"} — ${name}`,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
