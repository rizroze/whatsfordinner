import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendNurtureEmail } from "@/lib/nurture";
import crypto from "crypto";

const CRON_SECRET = process.env.CRON_SECRET?.trim();

function verifyCronSecret(authHeader: string | null): boolean {
  if (!CRON_SECRET || !authHeader) return false;
  const expected = `Bearer ${CRON_SECRET}`;
  if (authHeader.length !== expected.length) return false;
  try {
    return crypto.timingSafeEqual(Buffer.from(authHeader), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function GET(req: NextRequest) {
  if (!verifyCronSecret(req.headers.get("authorization"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();
  const now = new Date();

  let sent = 0;
  let errors = 0;

  try {
    // Find free meal_plans with nurture_email in plan_data (user_id is null)
    const { data: plans, error: fetchError } = await admin
      .from("meal_plans")
      .select("id, created_at, plan_data")
      .is("user_id", null)
      .not("plan_data", "is", null);

    if (fetchError) {
      console.error("Nurture cron: failed to fetch plans:", fetchError);
      return NextResponse.json({ error: "Failed to fetch plans" }, { status: 500 });
    }

    if (!plans || plans.length === 0) {
      return NextResponse.json({ sent: 0, errors: 0, checked: 0 });
    }

    for (const plan of plans) {
      const planData = plan.plan_data as Record<string, unknown> | null;
      if (!planData || !planData.nurture_email) continue;

      const email = planData.nurture_email as string;
      const nurtureSent = (planData.nurture_sent as string[]) || [];
      const createdAt = new Date(plan.created_at);
      const daysSinceCreated = Math.floor(
        (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
      );

      let emailType: "day3" | "day7" | null = null;

      if (daysSinceCreated >= 3 && daysSinceCreated < 7 && !nurtureSent.includes("day3")) {
        emailType = "day3";
      } else if (daysSinceCreated >= 7 && !nurtureSent.includes("day7")) {
        emailType = "day7";
      }

      if (!emailType) continue;

      try {
        await sendNurtureEmail(email, emailType);

        // Update nurture_sent array
        const updatedSent = [...nurtureSent, emailType];
        const updatedPlanData: Record<string, unknown> = {
          ...planData,
          nurture_sent: updatedSent,
        };

        // If day7 sent, clear nurture_email to stop future processing
        if (emailType === "day7") {
          updatedPlanData.nurture_email = null;
        }

        await admin
          .from("meal_plans")
          .update({ plan_data: updatedPlanData })
          .eq("id", plan.id);

        sent++;
      } catch (err) {
        console.error(`Nurture email failed for ${email}:`, err);
        errors++;
      }
    }

    return NextResponse.json({ sent, errors, checked: plans.length });
  } catch (error) {
    console.error("Nurture cron error:", error);
    return NextResponse.json({ error: "Nurture cron failed" }, { status: 500 });
  }
}
