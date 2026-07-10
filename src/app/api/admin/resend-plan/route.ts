import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin } from "@/lib/admin-auth";
import { rateLimit } from "@/lib/rate-limit";
import { generateMealPlan } from "@/lib/anthropic";
import { sendMealPlanEmail } from "@/lib/resend";
import { getWeekOf } from "@/lib/utils";
import type { MealPlanData, UserProfile } from "@/types/meal-plan";

// POST /api/admin/resend-plan — ensure the given user has a meal plan for
// the current week and email it to them. If a plan already exists for the
// week (generated but never successfully delivered — the exact incident
// this endpoint was built for), it resends that same plan instead of
// burning a fresh Claude generation. Only generates a new one if none exists.
export async function POST(req: NextRequest) {
  const limited = rateLimit(req, "admin-resend-plan", 10, 60_000);
  if (limited) return limited;

  const adminId = await requireAdmin();
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  let body: { userId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const userId = body.userId;
  if (!userId || typeof userId !== "string") {
    return NextResponse.json({ error: "userId is required." }, { status: 400 });
  }

  const admin = createAdminClient();
  const weekOf = getWeekOf();

  const { data: user, error: userError } = await admin
    .from("users")
    .select("id, email")
    .eq("id", userId)
    .single();
  if (userError || !user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  const { data: profile, error: profileError } = await admin
    .from("profiles")
    .select("*")
    .eq("user_id", userId)
    .single();
  if (profileError || !profile) {
    return NextResponse.json({ error: "Profile not found." }, { status: 404 });
  }

  try {
    let planRecord = null as { id: string; plan_data: MealPlanData | null } | null;

    const { data: existingPlan } = await admin
      .from("meal_plans")
      .select("id, plan_data")
      .eq("user_id", userId)
      .eq("week_of", weekOf)
      .maybeSingle();

    let planData: MealPlanData;
    let mode: "resent" | "generated";

    if (existingPlan?.plan_data) {
      planData = existingPlan.plan_data as MealPlanData;
      planRecord = existingPlan;
      mode = "resent";
    } else {
      const [{ data: feedback }, { data: pantryRows }] = await Promise.all([
        admin.from("meal_feedback").select("meal_name, rating").eq("user_id", userId),
        admin.from("pantry_items").select("name").eq("user_id", userId),
      ]);
      const pantryItems = (pantryRows ?? []).map((r: { name: string }) => r.name);

      planData = await generateMealPlan(
        profile as unknown as UserProfile,
        weekOf,
        { feedback: feedback ?? [], pantryItems }
      );
      mode = "generated";

      if (existingPlan) {
        await admin
          .from("meal_plans")
          .update({ plan_data: planData as unknown as Record<string, unknown>, status: "ready", updated_at: new Date().toISOString() })
          .eq("id", existingPlan.id);
        planRecord = { id: existingPlan.id, plan_data: planData };
      } else {
        const { data: inserted, error: insertError } = await admin
          .from("meal_plans")
          .insert({
            user_id: userId,
            week_of: weekOf,
            status: "ready",
            regeneration_count: 0,
            plan_data: planData as unknown as Record<string, unknown>,
          })
          .select("id, plan_data")
          .single();
        if (insertError || !inserted) {
          throw new Error(`Failed to save plan: ${insertError?.message}`);
        }
        planRecord = inserted as { id: string; plan_data: MealPlanData | null };
      }
    }

    const { count: previousPlanCount } = await admin
      .from("meal_plans")
      .select("id", { count: "exact", head: true })
      .eq("user_id", userId)
      .in("status", ["sent", "ready"]);

    const deliveryEmail = profile.delivery_email || user.email;

    await sendMealPlanEmail(
      deliveryEmail,
      weekOf,
      planData,
      previousPlanCount || 0,
      userId
    );

    await admin
      .from("meal_plans")
      .update({ status: "sent", sent_at: new Date().toISOString(), updated_at: new Date().toISOString() })
      .eq("id", planRecord!.id);

    return NextResponse.json({ success: true, mode, email: deliveryEmail, weekOf });
  } catch (error) {
    console.error("Admin resend-plan error:", error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
