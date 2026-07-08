import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { rateLimit } from "@/lib/rate-limit";
import { getWeekOf } from "@/lib/utils";
import { buildPreviewPlan, type PreviewPrefs } from "@/lib/preview-plan";
import { sendPreviewLeadEmail } from "@/lib/nurture";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Captures anonymous onboarding completions as nurture leads.
// Inserts the same anonymous meal_plans row shape the old free-plan flow
// used, so the existing daily nurture cron picks the lead up for
// day-3/7/14 follow-ups with zero new infrastructure.
export async function POST(req: NextRequest) {
  const limited = rateLimit(req, "leads", 5, 60_000);
  if (limited) return limited;

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const rawPrefs = (body.preferences ?? {}) as Record<string, unknown>;
  const prefs: PreviewPrefs = {
    household_size: typeof rawPrefs.household_size === "number" ? rawPrefs.household_size : undefined,
    has_kids: typeof rawPrefs.has_kids === "boolean" ? rawPrefs.has_kids : undefined,
    weekly_budget: typeof rawPrefs.weekly_budget === "string" ? rawPrefs.weekly_budget : undefined,
    nutrition_goal: typeof rawPrefs.nutrition_goal === "string" ? rawPrefs.nutrition_goal : undefined,
    dietary_restrictions: Array.isArray(rawPrefs.dietary_restrictions)
      ? rawPrefs.dietary_restrictions.filter((v): v is string => typeof v === "string").slice(0, 10)
      : undefined,
    allergies: Array.isArray(rawPrefs.allergies)
      ? rawPrefs.allergies.filter((v): v is string => typeof v === "string").slice(0, 10)
      : undefined,
    cuisine_preferences: Array.isArray(rawPrefs.cuisine_preferences)
      ? rawPrefs.cuisine_preferences.filter((v): v is string => typeof v === "string").slice(0, 12)
      : undefined,
    max_cook_time: typeof rawPrefs.max_cook_time === "number" ? rawPrefs.max_cook_time : undefined,
    meals_per_day: typeof rawPrefs.meals_per_day === "number" ? rawPrefs.meals_per_day : undefined,
    include_snacks: typeof rawPrefs.include_snacks === "boolean" ? rawPrefs.include_snacks : undefined,
  };

  const admin = createAdminClient();

  // Existing subscribers/accounts don't need nurture
  const { data: existingUser } = await admin
    .from("users")
    .select("id")
    .eq("email", email)
    .maybeSingle();
  if (existingUser) {
    return NextResponse.json({ ok: true });
  }

  // One lead row per email — don't reset the nurture clock on repeat visits
  const { data: existingLead } = await admin
    .from("meal_plans")
    .select("id")
    .is("user_id", null)
    .eq("plan_data->>nurture_email", email)
    .limit(1)
    .maybeSingle();
  if (existingLead) {
    return NextResponse.json({ ok: true });
  }

  const { weekSummary } = buildPreviewPlan(prefs);

  const { error: insertError } = await admin.from("meal_plans").insert({
    week_of: getWeekOf(),
    status: "ready",
    regeneration_count: 0,
    plan_data: {
      source: "preview_lead",
      nurture_email: email,
      nurture_sent: [] as string[],
      meals: weekSummary,
    },
  });
  if (insertError) {
    console.error("Lead insert failed:", insertError);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }

  try {
    await sendPreviewLeadEmail(email, weekSummary);
  } catch (err) {
    // Lead is stored; the nurture cron still covers them
    console.error("Preview lead email failed:", err);
  }

  return NextResponse.json({ ok: true });
}
