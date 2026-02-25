import { NextRequest, NextResponse } from "next/server";
import { generateMealPlan } from "@/lib/anthropic";
import { sendMealPlanEmail } from "@/lib/resend";
import { getWeekOf } from "@/lib/utils";
import { createAdminClient } from "@/lib/supabase/admin";
import type { UserProfile } from "@/types/meal-plan";

const BLOCK_MSG = "You've already received your free plan. Subscribe for just $4.99/mo to get a fresh plan every week!";

// --- Layer 1: In-memory caches (fast, survives within serverless warm period) ---
const usedFingerprints = new Set<string>();
const ipLimits = new Map<string, { count: number; resetAt: number }>();

setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of ipLimits) {
    if (now > entry.resetAt) ipLimits.delete(key);
  }
}, 600_000);

function checkIpLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipLimits.get(ip);
  if (!entry || now > entry.resetAt) {
    ipLimits.set(ip, { count: 1, resetAt: now + 86_400_000 });
    return true;
  }
  if (entry.count >= 1) return false;
  entry.count++;
  return true;
}

// --- Layer 2: Supabase persistent store (survives deploys) ---
async function checkFingerprint(
  fingerprint: string,
  ip: string
): Promise<{ allowed: boolean; reason?: string }> {
  try {
    const db = createAdminClient();

    // Fingerprint ever used? (permanent block per device)
    const { data: existing } = await db
      .from("free_generations")
      .select("id")
      .eq("fingerprint", fingerprint)
      .limit(1);

    if (existing && existing.length > 0) {
      return { allowed: false, reason: "device" };
    }

    // IP used in last 24h?
    const oneDayAgo = new Date(Date.now() - 86_400_000).toISOString();
    const { data: ipRecent } = await db
      .from("free_generations")
      .select("id")
      .eq("ip_address", ip)
      .gte("created_at", oneDayAgo)
      .limit(1);

    if (ipRecent && ipRecent.length > 0) {
      return { allowed: false, reason: "network" };
    }

    return { allowed: true };
  } catch (err) {
    console.error("Supabase free_generations check failed:", err);
    // Fail closed — if DB is down, block the request
    return { allowed: false, reason: "service" };
  }
}

async function recordFingerprint(fingerprint: string, ip: string) {
  try {
    const db = createAdminClient();
    await db.from("free_generations").insert({ fingerprint, ip_address: ip });
  } catch (err) {
    console.error("Failed to record fingerprint:", err);
  }
}

// Allow up to 120s for Claude to generate the plan
export const maxDuration = 120;

export async function POST(req: NextRequest) {
  try {
    // Dev mode: return mock plan without burning tokens (skip all guards)
    if (process.env.NODE_ENV === "development" && process.env.USE_MOCK_PLAN === "1") {
      const weekOf = getWeekOf();
      const { MOCK_PLAN } = await import("@/lib/mock-plan");
      return NextResponse.json({ plan: { ...MOCK_PLAN, weekOf }, weekOf });
    }

    // --- Bot detection: User-Agent ---
    const ua = req.headers.get("user-agent") || "";
    if (!ua || /curl|wget|python|httpie|postman|insomnia|bot|spider|crawl/i.test(ua)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 403 });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const body = await req.json();
    const fingerprint = body._fingerprint;
    const startedAt = body._t; // Timestamp when onboarding started
    const honeypot = body._email; // Invisible field — bots fill it, humans don't

    // --- Bot detection: Honeypot ---
    if (honeypot) {
      // Bot filled the invisible field — reject silently
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // --- Bot detection: Timing ---
    // Real user takes at least 15 seconds to complete 5-step onboarding
    if (startedAt && Date.now() - startedAt < 15_000) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // --- Guard: Fingerprint required + valid ---
    if (!fingerprint || typeof fingerprint !== "string" || fingerprint.length < 32) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // --- Guard: In-memory fingerprint (fastest check) ---
    if (usedFingerprints.has(fingerprint)) {
      return NextResponse.json({ error: BLOCK_MSG }, { status: 403 });
    }

    // --- Guard: In-memory IP ---
    if (!checkIpLimit(ip)) {
      return NextResponse.json(
        { error: "A free plan was already generated from this network. " + BLOCK_MSG },
        { status: 429 }
      );
    }

    // --- Guard: Supabase persistent (survives everything) ---
    const dbCheck = await checkFingerprint(fingerprint, ip);
    if (!dbCheck.allowed) {
      usedFingerprints.add(fingerprint);
      return NextResponse.json({ error: BLOCK_MSG }, { status: 403 });
    }

    // Build profile
    const profile: UserProfile = {
      id: "free",
      user_id: "free",
      household_size: body.household_size ?? 2,
      has_kids: body.has_kids ?? false,
      kids_ages: body.kids_ages ?? [],
      weekly_budget: body.weekly_budget ?? "moderate",
      age_range: body.age_range ?? "",
      nutrition_goal: body.nutrition_goal ?? "",
      dietary_restrictions: body.dietary_restrictions ?? [],
      allergies: body.allergies ?? [],
      personal_note: body.personal_note ?? "",
      cuisine_preferences: body.cuisine_preferences ?? [],
      cooking_skill: body.cooking_skill ?? "intermediate",
      max_cook_time: body.max_cook_time ?? 45,
      meals_per_day: body.meals_per_day ?? 3,
      include_snacks: body.include_snacks ?? false,
      servings_per_meal: body.servings_per_meal ?? 2,
      delivery_email: null,
      delivery_day: "sunday",
      timezone: body.timezone ?? "America/New_York",
      onboarding_completed: false,
    };

    const weekOf = getWeekOf();

    // Free plan = 1 day only (cheaper, faster, and teases the full 7-day subscription)
    const plan = await generateMealPlan(profile, weekOf, { days: 1 });

    // Only record fingerprint AFTER successful generation
    // (so failed attempts don't burn the user's free try)
    await recordFingerprint(fingerprint, ip);
    usedFingerprints.add(fingerprint);

    // Send free plan via email if they provided one (non-blocking)
    const deliveryEmail = body.delivery_email?.trim();
    if (deliveryEmail && deliveryEmail.includes("@")) {
      sendMealPlanEmail(deliveryEmail, weekOf, plan).catch((err) =>
        console.error("Free plan email failed:", err)
      );
    }

    return NextResponse.json({ plan, weekOf });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Free plan generation error:", message);

    // User-friendly error for truncation
    const userMessage = message.includes("truncated")
      ? "Your plan has too many options for a free plan. Try selecting fewer cuisines or turning off snacks."
      : "Something went wrong generating your plan. Please try again.";

    return NextResponse.json(
      { error: userMessage },
      { status: 500 }
    );
  }
}
