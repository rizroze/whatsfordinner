import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  verifyUnsubscribeToken,
  verifyEmailUnsubscribeToken,
} from "@/lib/unsubscribe";

function htmlResponse(title: string, message: string, status = 200) {
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title} - What's For Dinner</title>
</head>
<body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
  <div style="max-width:480px;margin:0 auto;padding:60px 24px;text-align:center;">
    <p style="margin:0 0 8px;font-size:14px;font-weight:600;color:#1C1917;">What's For Dinner</p>
    <div style="background:#FFFFFF;border-radius:16px;padding:32px 24px;border:1px solid #E7E5E4;margin-top:16px;">
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;">${title}</h1>
      <p style="margin:0;font-size:14px;color:#57534E;line-height:1.6;">${message}</p>
    </div>
    <p style="margin:20px 0 0;font-size:11px;color:#D6D3D1;">whatsfordinner.fit</p>
  </div>
</body>
</html>`;
  return new NextResponse(html, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  const type = req.nextUrl.searchParams.get("type");

  if (!token) {
    return htmlResponse("Invalid Link", "This unsubscribe link is invalid or expired.", 400);
  }

  const admin = createAdminClient();

  // Email-only unsubscribe (free/nurture users without accounts)
  if (type === "email") {
    const email = verifyEmailUnsubscribeToken(token);
    if (!email) {
      return htmlResponse("Invalid Link", "This unsubscribe link is invalid or expired.", 400);
    }

    // Null out nurture_email in any meal_plans rows for this email
    // This prevents the nurture cron from sending more emails
    try {
      await admin
        .from("meal_plans")
        .update({ plan_data: null })
        .is("user_id", null)
        .filter("plan_data->>nurture_email", "eq", email);
    } catch (err) {
      console.error("Failed to clear nurture data for email:", err);
    }

    return htmlResponse(
      "You've been unsubscribed",
      "You won't receive any more emails from us. If you ever want a meal plan again, just visit whatsfordinner.fit."
    );
  }

  // Account-based unsubscribe (subscribers)
  const payload = verifyUnsubscribeToken(token);
  if (!payload) {
    return htmlResponse("Invalid Link", "This unsubscribe link is invalid or expired.", 400);
  }

  try {
    await admin
      .from("profiles")
      .update({
        email_opted_out: true,
        updated_at: new Date().toISOString(),
      })
      .eq("user_id", payload.userId);
  } catch (err) {
    console.error("Unsubscribe DB error:", err);
    return htmlResponse("Something went wrong", "Please try again or manage your preferences from the dashboard.", 500);
  }

  return htmlResponse(
    "You've been unsubscribed",
    "You won't receive weekly meal plan emails anymore. You can re-enable emails anytime from your dashboard."
  );
}

// RFC 8058: List-Unsubscribe-Post support
export async function POST(req: NextRequest) {
  return GET(req);
}
