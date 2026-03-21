import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendNurtureEmail, sendReferralReminderEmail } from "@/lib/nurture";
import type { NurtureEmailType } from "@/lib/nurture";
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
  let referralsSent = 0;

  try {
    // ── Part 1: Free user nurture + weekly inspiration ──

    const { data: plans, error: fetchError } = await admin
      .from("meal_plans")
      .select("id, created_at, plan_data")
      .is("user_id", null)
      .not("plan_data", "is", null);

    if (fetchError) {
      console.error("Nurture cron: failed to fetch plans:", fetchError);
      return NextResponse.json({ error: "Failed to fetch plans" }, { status: 500 });
    }

    console.log(`Nurture cron: found ${plans?.length ?? 0} free plan rows`);

    if (plans && plans.length > 0) {
      let withEmail = 0;
      let skippedNoEmail = 0;

      for (const plan of plans) {
        const planData = plan.plan_data as Record<string, unknown> | null;
        if (!planData || !planData.nurture_email) {
          skippedNoEmail++;
          continue;
        }
        withEmail++;

        const email = planData.nurture_email as string;
        const nurtureSent = (planData.nurture_sent as string[]) || [];
        const createdAt = new Date(plan.created_at);
        const daysSinceCreated = Math.floor(
          (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
        );

        let emailType: NurtureEmailType | null = null;

        // Day 3: first check-in
        if (daysSinceCreated >= 3 && daysSinceCreated < 7 && !nurtureSent.includes("day3")) {
          emailType = "day3";
        }
        // Day 7: urgency push
        else if (daysSinceCreated >= 7 && daysSinceCreated < 14 && !nurtureSent.includes("day7")) {
          emailType = "day7";
        }
        // Day 14: show what they're missing
        else if (daysSinceCreated >= 14 && daysSinceCreated < 21 && !nurtureSent.includes("day14")) {
          emailType = "day14";
        }
        // Day 21+: weekly inspiration, every 7 days
        else if (daysSinceCreated >= 21) {
          // Calculate which week we're in (week 0 = day 21-27, week 1 = day 28-34, ...)
          const weekIndex = Math.floor((daysSinceCreated - 21) / 7);
          const weekKey = `weekly_${weekIndex}`;
          if (!nurtureSent.includes(weekKey)) {
            emailType = weekKey as NurtureEmailType;
          }
        }

        if (!emailType) {
          console.log(`Nurture cron: ${email.replace(/(.{2}).*@/, "$1***@")} — ${daysSinceCreated} days old, already sent: [${nurtureSent.join(",")}], no email due`);
          continue;
        }
        console.log(`Nurture cron: sending ${emailType} to ${email.replace(/(.{2}).*@/, "$1***@")} (${daysSinceCreated} days old)`);

        try {
          await sendNurtureEmail(email, emailType);

          const updatedSent = [...nurtureSent, emailType];
          const updatedPlanData: Record<string, unknown> = {
            ...planData,
            nurture_sent: updatedSent,
          };

          await admin
            .from("meal_plans")
            .update({ plan_data: updatedPlanData })
            .eq("id", plan.id);

          sent++;
        } catch (err) {
          console.error(`Nurture email failed for ${email.replace(/(.{2}).*@/, "$1***@")}:`, err);
          errors++;
        }
      }
    }

    // ── Part 2: Referral reminder for subscribers (1 week after first plan) ──

    // Find subscribers whose first plan was ~7 days ago (they've just received their second plan)
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const sixDaysAgo = new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000);

    const { data: subscriberPlans, error: subError } = await admin
      .from("meal_plans")
      .select("user_id, created_at")
      .not("user_id", "is", null)
      .gte("created_at", sevenDaysAgo.toISOString())
      .lt("created_at", sixDaysAgo.toISOString())
      .order("created_at", { ascending: true });

    if (!subError && subscriberPlans && subscriberPlans.length > 0) {
      // Dedupe by user_id — only care about users whose first plan falls in this window
      const seenUsers = new Set<string>();

      for (const sp of subscriberPlans) {
        const userId = sp.user_id as string;
        if (seenUsers.has(userId)) continue;
        seenUsers.add(userId);

        try {
          // Check if this is their earliest plan (i.e., this is genuinely 2 weeks after first plan)
          const { data: earliest } = await admin
            .from("meal_plans")
            .select("created_at")
            .eq("user_id", userId)
            .order("created_at", { ascending: true })
            .limit(1)
            .single();

          if (!earliest) continue;
          const firstPlanDate = new Date(earliest.created_at);
          const daysSinceFirst = Math.floor(
            (now.getTime() - firstPlanDate.getTime()) / (1000 * 60 * 60 * 24)
          );

          // Only send if first plan was 7-8 days ago (one-day window)
          if (daysSinceFirst < 7 || daysSinceFirst > 8) continue;

          // Check if user has unused referral codes
          const { data: codes } = await admin
            .from("promo_codes")
            .select("code")
            .eq("created_by", userId)
            .lt("current_uses", 1);

          if (!codes || codes.length === 0) continue;

          // Get user email from profile
          const { data: profile } = await admin
            .from("profiles")
            .select("email_opted_out")
            .eq("user_id", userId)
            .single();

          if (profile?.email_opted_out) continue;

          // Get email from auth
          const { data: authUser } = await admin.auth.admin.getUserById(userId);
          if (!authUser?.user?.email) continue;

          await sendReferralReminderEmail(
            authUser.user.email,
            codes.map((c: { code: string }) => c.code)
          );
          referralsSent++;
        } catch (err) {
          console.error(`Referral reminder failed for user ${userId.slice(0, 8)}...:`, err);
          errors++;
        }
      }
    }

    const result = {
      sent,
      referralsSent,
      errors,
      checked: plans?.length ?? 0,
    };
    console.log("Nurture cron result:", JSON.stringify(result));
    return NextResponse.json(result);
  } catch (error) {
    console.error("Nurture cron error:", error);
    return NextResponse.json({ error: "Nurture cron failed" }, { status: 500 });
  }
}
