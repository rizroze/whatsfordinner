import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { z } from "zod";

const profileSchema = z.object({
  household_size: z.number().int().min(1).max(20).optional(),
  has_kids: z.boolean().optional(),
  kids_ages: z.array(z.string().max(20)).max(10).optional(),
  weekly_budget: z.enum(["budget", "moderate", "premium"]).optional(),
  dietary_restrictions: z.array(z.string().max(50)).max(20).optional(),
  allergies: z.array(z.string().max(50)).max(20).optional(),
  cuisine_preferences: z.array(z.string().max(50)).max(20).optional(),
  cooking_skill: z.enum(["beginner", "intermediate", "advanced"]).optional(),
  max_cook_time: z.number().int().min(5).max(240).optional(),
  meals_per_day: z.number().int().min(1).max(6).optional(),
  include_snacks: z.boolean().optional(),
  servings_per_meal: z.number().int().min(1).max(20).optional(),
  delivery_email: z.string().email().max(254).optional().nullable(),
  delivery_day: z.string().max(20).optional(),
  timezone: z.string().max(100).optional(),
  onboarding_completed: z.boolean().optional(),
  personal_note: z.string().max(500).optional(),
  nutrition_goal: z.string().max(50).optional(),
  age_range: z.string().max(50).optional(),
}).strict();

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = createAdminClient();

    const { data: profile, error } = await admin
      .from("profiles")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Profile fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch profile" },
        { status: 500 }
      );
    }

    return NextResponse.json({ profile: profile ?? null });
  } catch (error) {
    console.error("Profile GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const rawBody = await req.json();
    const parsed = profileSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid profile data", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const admin = createAdminClient();
    const profileData: Record<string, unknown> = {
      user_id: user.id,
      updated_at: new Date().toISOString(),
      ...parsed.data,
    };

    const { data: profile, error } = await admin
      .from("profiles")
      .upsert(profileData, { onConflict: "user_id" })
      .select()
      .single();

    if (error) {
      console.error("Profile upsert error:", error);
      return NextResponse.json(
        { error: "Failed to update profile" },
        { status: 500 }
      );
    }

    return NextResponse.json({ profile });
  } catch (error) {
    console.error("Profile PUT error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
