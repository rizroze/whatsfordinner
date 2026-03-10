import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { createAdminClient } from "@/lib/supabase/admin";

// Resend uses svix for webhook signatures
// Set RESEND_WEBHOOK_SECRET in Vercel env vars (from Resend dashboard → Webhooks)
const WEBHOOK_SECRET = process.env.RESEND_WEBHOOK_SECRET;

interface ResendEmailEvent {
  type: string;
  data: {
    email_id: string;
    from: string;
    to: string[];
    subject?: string;
    created_at: string;
    [key: string]: unknown;
  };
}

export async function POST(req: NextRequest) {
  if (!WEBHOOK_SECRET) {
    console.error("[resend-webhook] RESEND_WEBHOOK_SECRET not set");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const body = await req.text();
  const svixId = req.headers.get("svix-id") ?? "";
  const svixTimestamp = req.headers.get("svix-timestamp") ?? "";
  const svixSignature = req.headers.get("svix-signature") ?? "";

  let event: ResendEmailEvent;
  try {
    const wh = new Webhook(WEBHOOK_SECRET);
    event = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as ResendEmailEvent;
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const email = event.data.to?.[0];
  if (!email) return NextResponse.json({ ok: true });

  const maskedEmail = email.replace(/(.{2}).*@/, "$1***@");

  switch (event.type) {
    case "email.bounced":
    case "email.complained": {
      // Protect sender reputation: opt out this address immediately
      console.error(`[resend-webhook] ${event.type} for ${maskedEmail}`);
      try {
        const admin = createAdminClient();
        // Mark opted out on profile (if they have an account)
        await admin
          .from("profiles")
          .update({ email_opted_out: true })
          .eq("delivery_email", email);
        // Also clear nurture_email from any free plan rows
        const { data: rows } = await admin
          .from("meal_plans")
          .select("id, plan_data")
          .is("user_id", null)
          .not("plan_data->nurture_email", "is", null);
        for (const row of rows ?? []) {
          const pd = row.plan_data as Record<string, unknown>;
          if (pd?.nurture_email === email) {
            await admin
              .from("meal_plans")
              .update({ plan_data: { ...pd, nurture_email: null } })
              .eq("id", row.id);
          }
        }
      } catch (err) {
        console.error("[resend-webhook] opt-out update failed:", err);
      }
      break;
    }

    case "email.opened":
      console.log(`[resend-webhook] opened — ${maskedEmail} — "${event.data.subject ?? ""}"`);
      break;

    case "email.clicked":
      console.log(`[resend-webhook] clicked — ${maskedEmail} — "${event.data.subject ?? ""}"`);
      break;

    case "email.delivered":
      // No action needed
      break;

    default:
      console.log(`[resend-webhook] unhandled event: ${event.type}`);
  }

  return NextResponse.json({ ok: true });
}
