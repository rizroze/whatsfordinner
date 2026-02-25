import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import crypto from "crypto";

const WEBHOOK_SECRET = process.env.LEMONSQUEEZY_WEBHOOK_SECRET?.trim();
const STORE_ID = parseInt(process.env.LEMONSQUEEZY_STORE_ID?.trim() ?? "0");

function verifySignature(body: string, signature: string): boolean {
  if (!WEBHOOK_SECRET) return false;
  const hmac = crypto.createHmac("sha256", WEBHOOK_SECRET);
  const digest = hmac.update(body).digest("hex");
  try {
    return crypto.timingSafeEqual(
      Buffer.from(digest),
      Buffer.from(signature),
    );
  } catch {
    return false;
  }
}

interface WebhookEvent {
  meta: {
    event_name: string;
    custom_data?: {
      supabase_user_id?: string;
    };
  };
  data: {
    id: string;
    type: string;
    attributes: {
      store_id: number;
      customer_id: number;
      status: string;
      first_subscription_item?: {
        id: number;
      };
      urls?: {
        customer_portal?: string;
      };
    };
  };
}

export async function POST(req: NextRequest) {
  if (!WEBHOOK_SECRET) {
    console.error("LEMONSQUEEZY_WEBHOOK_SECRET is not configured");
    return NextResponse.json(
      { error: "Webhook not configured" },
      { status: 500 },
    );
  }

  const body = await req.text();
  const signature = req.headers.get("x-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing signature" },
      { status: 400 },
    );
  }

  if (!verifySignature(body, signature)) {
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 401 },
    );
  }

  const event: WebhookEvent = JSON.parse(body);

  // Verify store ID matches our store
  if (STORE_ID && event.data.attributes.store_id !== STORE_ID) {
    console.error("Store ID mismatch:", event.data.attributes.store_id);
    return NextResponse.json(
      { error: "Invalid store" },
      { status: 403 },
    );
  }

  const eventName = event.meta.event_name;
  const userId = event.meta.custom_data?.supabase_user_id;
  const admin = createAdminClient();

  try {
    switch (eventName) {
      case "subscription_created": {
        if (!userId) {
          console.error("No supabase_user_id in subscription_created");
          break;
        }

        const { error } = await admin
          .from("users")
          .update({
            lemon_customer_id: String(event.data.attributes.customer_id),
            lemon_subscription_id: event.data.id,
            subscription_status: "active",
          })
          .eq("id", userId);

        if (error) {
          console.error("Failed to activate subscription:", error);
        }
        break;
      }

      case "subscription_updated": {
        const status = mapStatus(event.data.attributes.status);

        const { error } = await admin
          .from("users")
          .update({ subscription_status: status })
          .eq("lemon_subscription_id", event.data.id);

        if (error) {
          console.error("Failed to update subscription:", error);
        }
        break;
      }

      case "subscription_cancelled":
      case "subscription_expired": {
        const { error } = await admin
          .from("users")
          .update({ subscription_status: "cancelled" })
          .eq("lemon_subscription_id", event.data.id);

        if (error) {
          console.error("Failed to cancel subscription:", error);
        }
        break;
      }

      case "subscription_payment_failed": {
        const { error } = await admin
          .from("users")
          .update({ subscription_status: "past_due" })
          .eq("lemon_subscription_id", event.data.id);

        if (error) {
          console.error("Failed to mark past_due:", error);
        }
        break;
      }

      case "subscription_resumed": {
        const { error } = await admin
          .from("users")
          .update({ subscription_status: "active" })
          .eq("lemon_subscription_id", event.data.id);

        if (error) {
          console.error("Failed to resume subscription:", error);
        }
        break;
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 },
    );
  }
}

function mapStatus(
  lsStatus: string,
): "active" | "inactive" | "past_due" | "cancelled" {
  switch (lsStatus) {
    case "active":
    case "on_trial":
      return "active";
    case "past_due":
      return "past_due";
    case "cancelled":
    case "expired":
      return "cancelled";
    case "paused":
    default:
      return "inactive";
  }
}
