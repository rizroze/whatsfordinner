import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const limited = rateLimit(req, "feedback", 3, 60 * 60 * 1000); // 3 per hour
  if (limited) return limited;

  try {
    const { message, email } = await req.json();

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json({ error: "Message must be at least 5 characters." }, { status: 400 });
    }

    if (message.length > 2000) {
      return NextResponse.json({ error: "Message too long (max 2000 characters)." }, { status: 400 });
    }

    const feedbackEmail = process.env.FEEDBACK_EMAIL;
    if (!feedbackEmail) {
      console.error("FEEDBACK_EMAIL env var not set");
      return NextResponse.json({ error: "Feedback system not configured." }, { status: 500 });
    }

    await resend.emails.send({
      from: "What's For Dinner <noreply@send.whatsfordinner.fit>",
      to: feedbackEmail,
      subject: "Feedback from whatsfordinner.fit",
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1c1917; font-size: 18px; margin-bottom: 16px;">New Feedback</h2>
          <div style="background: #f5f5f0; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <p style="color: #44403c; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
          ${email ? `<p style="color: #a8a29e; font-size: 12px;">From: ${email.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>` : ""}
          <p style="color: #a8a29e; font-size: 12px;">Sent from feedback form</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    console.error("Feedback send failed");
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
