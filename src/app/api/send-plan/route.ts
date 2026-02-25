import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendMealPlanEmail } from "@/lib/resend";
import type { MealPlanData } from "@/types/meal-plan";

const CRON_SECRET = process.env.CRON_SECRET;

export async function POST(req: NextRequest) {
  try {
    // Verify caller: either CRON_SECRET or authenticated user
    const authHeader = req.headers.get("authorization");
    const isCron =
      CRON_SECRET && authHeader === `Bearer ${CRON_SECRET}`;

    let userId: string | null = null;

    if (!isCron) {
      const supabase = await createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      userId = user.id;
    }

    const { planId } = (await req.json()) as { planId: string };

    if (!planId) {
      return NextResponse.json(
        { error: "planId is required" },
        { status: 400 }
      );
    }

    const admin = createAdminClient();

    // Fetch the plan record
    const { data: plan, error: planError } = await admin
      .from("meal_plans")
      .select("*")
      .eq("id", planId)
      .single();

    if (planError || !plan) {
      return NextResponse.json(
        { error: "Plan not found" },
        { status: 404 }
      );
    }

    // If called by authenticated user, verify they own this plan
    if (userId && plan.user_id !== userId) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (!plan.plan_data) {
      return NextResponse.json(
        { error: "Plan has no data to send" },
        { status: 400 }
      );
    }

    // Fetch user and profile to get delivery email
    const { data: dbUser } = await admin
      .from("users")
      .select("email")
      .eq("id", plan.user_id)
      .single();

    const { data: profile } = await admin
      .from("profiles")
      .select("delivery_email")
      .eq("user_id", plan.user_id)
      .single();

    const deliveryEmail =
      profile?.delivery_email || dbUser?.email;

    if (!deliveryEmail) {
      return NextResponse.json(
        { error: "No email address available" },
        { status: 400 }
      );
    }

    // Send the email
    await sendMealPlanEmail(
      deliveryEmail,
      plan.week_of,
      plan.plan_data as unknown as MealPlanData
    );

    // Update plan status
    const { error: updateError } = await admin
      .from("meal_plans")
      .update({
        status: "sent",
        sent_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", planId);

    if (updateError) {
      console.error("Failed to update plan status after send:", updateError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send plan error:", error);
    return NextResponse.json(
      { error: "Failed to send plan" },
      { status: 500 }
    );
  }
}
