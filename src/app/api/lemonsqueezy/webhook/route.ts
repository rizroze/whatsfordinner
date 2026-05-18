import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { generateMealPlan } from "@/lib/anthropic";
import { sendMealPlanEmail, sendWelcomeEmail } from "@/lib/resend";
import { getWeekOf } from "@/lib/utils";
import type { UserProfile, MealPlanData } from "@/types/meal-plan";
import crypto from "crypto";

export const maxDuration = 120;

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
      user_email: string;
      first_subscription_item?: {
        id: number;
      };
      urls?: {
        customer_portal?: string;
      };
    };
  };
}

// Generates the first plan for a new subscriber and sends welcome + plan emails.
// Only runs if the user has completed onboarding (profile exists).
// If they haven't finished onboarding yet, the dashboard auto-gen will handle it.
async function triggerInitialPlanForNewSubscriber(userId: string, userEmail: string) {
  const admin = createAdminClient();

  try {
    const { data: profile } = await admin
      .from("profiles")
      .select("*")
      .eq("user_id", userId)
      .eq("onboarding_completed", true)
      .single();

    if (!profile) {
      console.log(`New subscriber ${userId} hasn't completed onboarding — dashboard will handle first plan`);
      return;
    }

    const weekOf = getWeekOf();

    const { data: existing } = await admin
      .from("meal_plans")
      .select("id")
      .eq("user_id", userId)
      .eq("week_of", weekOf)
      .single();

    if (existing) {
      console.log(`New subscriber ${userId} already has a plan for week ${weekOf}`);
      return;
    }

    const deliveryEmail = profile.delivery_email || userEmail;

    // Fetch user metadata for first name
    const { data: authData } = await admin.auth.admin.getUserById(userId);
    const meta = authData.user?.user_metadata ?? {};
    const firstName = (meta.full_name ?? meta.name ?? "").split(" ")[0];

    // Send welcome email immediately — arrives while the plan is generating
    if (!profile.email_opted_out) {
      void sendWelcomeEmail(deliveryEmail, firstName).catch((e) => {
        console.error("Failed to send welcome email:", e);
      });
    }

    // Create plan record
    const { data: planRecord, error: insertError } = await admin
      .from("meal_plans")
      .insert({
        user_id: userId,
        week_of: weekOf,
        status: "generating",
        regeneration_count: 0,
      })
      .select()
      .single();

    if (insertError || !planRecord) {
      console.error(`Failed to create plan record for new subscriber ${userId}:`, insertError);
      return;
    }

    const [{ data: feedback }, { data: pantryRows }] = await Promise.all([
      admin.from("meal_feedback").select("meal_name, rating").eq("user_id", userId),
      admin.from("pantry_items").select("name").eq("user_id", userId),
    ]);
    const pantryItems = (pantryRows ?? []).map((r: { name: string }) => r.name);

    let planData;
    try {
      planData = await generateMealPlan(profile as unknown as UserProfile, weekOf, {
        days: 7,
        feedback: feedback ?? [],
        pantryItems,
      });
    } catch {
      try {
        planData = await generateMealPlan(profile as unknown as UserProfile, weekOf, {
          days: 7,
          feedback: feedback ?? [],
          pantryItems,
        });
      } catch (retryErr) {
        console.error(`Plan generation failed for new subscriber ${userId}:`, retryErr);
        await admin
          .from("meal_plans")
          .update({ status: "failed", updated_at: new Date().toISOString() })
          .eq("id", planRecord.id);
        return;
      }
    }

    await admin
      .from("meal_plans")
      .update({
        plan_data: planData as unknown as Record<string, unknown>,
        status: "ready",
        updated_at: new Date().toISOString(),
      })
      .eq("id", planRecord.id);

    if (!profile.email_opted_out) {
      try {
        await sendMealPlanEmail(
          deliveryEmail,
          weekOf,
          planData as MealPlanData,
          1,
          userId,
        );
        await admin
          .from("meal_plans")
          .update({
            status: "sent",
            sent_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("id", planRecord.id);
      } catch (emailErr) {
        console.error(`Failed to send initial meal plan email for ${userId}:`, emailErr);
      }
    }

    console.log(`Initial plan generated and sent for new subscriber ${userId}`);
  } catch (err) {
    console.error(`triggerInitialPlanForNewSubscriber failed for ${userId}:`, err);
  }
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
        // Resolve user ID: prefer custom_data, fall back to email lookup
        let resolvedUserId = userId;
        if (!resolvedUserId) {
          const customerEmail = event.data.attributes.user_email;
          if (customerEmail) {
            const { data: userByEmail } = await admin
              .from("users")
              .select("id")
              .eq("email", customerEmail)
              .single();
            if (userByEmail) {
              resolvedUserId = userByEmail.id;
              console.log("Resolved user by email fallback:", customerEmail);
            }
          }
        }

        if (!resolvedUserId) {
          console.error("subscription_created: could not resolve user. No supabase_user_id and email lookup failed.", {
            customer_email: event.data.attributes.user_email,
            customer_id: event.data.attributes.customer_id,
          });
          break;
        }

        // Detect monthly vs yearly from variant
        const variantMonthly = process.env.LEMONSQUEEZY_VARIANT_MONTHLY;
        const variantYearly = process.env.LEMONSQUEEZY_VARIANT_YEARLY;
        const itemId = event.data.attributes.first_subscription_item?.id;
        let planInterval: "monthly" | "yearly" | null = null;
        if (itemId && variantMonthly && String(itemId) === variantMonthly) planInterval = "monthly";
        if (itemId && variantYearly && String(itemId) === variantYearly) planInterval = "yearly";

        const subscriptionData = {
          lemon_customer_id: String(event.data.attributes.customer_id),
          lemon_subscription_id: event.data.id,
          subscription_status: "active",
          subscription_source: "lemonsqueezy",
          plan_interval: planInterval,
        };

        const { data: updateResult, error } = await admin
          .from("users")
          .update(subscriptionData)
          .eq("id", resolvedUserId)
          .select("id");

        if (error) {
          console.error("Failed to activate subscription:", error);
        } else if (!updateResult || updateResult.length === 0) {
          // User row doesn't exist yet (race condition with auth trigger)
          console.warn("subscription_created: user row not found, retrying with upsert.", {
            userId: resolvedUserId,
          });
          const { error: upsertError } = await admin
            .from("users")
            .upsert({
              id: resolvedUserId,
              email: event.data.attributes.user_email,
              ...subscriptionData,
            });
          if (upsertError) {
            console.error("Failed to upsert subscription:", upsertError);
          }
        }

        // After responding, generate the first meal plan and send welcome + plan emails
        after(() => triggerInitialPlanForNewSubscriber(
          resolvedUserId!,
          event.data.attributes.user_email,
        ));

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
