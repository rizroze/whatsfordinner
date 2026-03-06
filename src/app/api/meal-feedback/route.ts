import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { rateLimit } from "@/lib/rate-limit";
import { z } from "zod";

const feedbackSchema = z.object({
  meal_name: z.string().min(1).max(200),
  rating: z.enum(["liked", "disliked"]),
});

/**
 * GET — fetch all feedback for the current user
 */
export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = createAdminClient();
    const { data: feedback } = await admin
      .from("meal_feedback")
      .select("meal_name, rating")
      .eq("user_id", user.id);

    return NextResponse.json({ feedback: feedback ?? [] });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * POST — toggle feedback for a meal.
 * If same rating exists, remove it (un-toggle). If different, update it.
 */
export async function POST(req: NextRequest) {
  try {
    const limited = rateLimit(req, "meal-feedback", 30, 60_000);
    if (limited) return limited;

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = feedbackSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { meal_name, rating } = parsed.data;
    const admin = createAdminClient();

    // Check existing feedback
    const { data: existing } = await admin
      .from("meal_feedback")
      .select("id, rating")
      .eq("user_id", user.id)
      .eq("meal_name", meal_name)
      .single();

    if (existing) {
      if (existing.rating === rating) {
        // Same rating — remove (un-toggle)
        await admin.from("meal_feedback").delete().eq("id", existing.id);
        return NextResponse.json({ feedback: null });
      } else {
        // Different rating — update
        await admin
          .from("meal_feedback")
          .update({ rating })
          .eq("id", existing.id);
        return NextResponse.json({ feedback: { meal_name, rating } });
      }
    }

    // New feedback
    await admin.from("meal_feedback").insert({
      user_id: user.id,
      meal_name,
      rating,
    });

    return NextResponse.json({ feedback: { meal_name, rating } });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
