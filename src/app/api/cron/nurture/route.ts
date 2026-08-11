import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendNurtureEmail, sendReferralReminderEmail, sendTrialEndingEmail } from "@/lib/nurture";
import type { NurtureEmailType, NurtureMealSummary } from "@/lib/nurture";
import { getTrialDays } from "@/lib/trial";
import crypto from "crypto";

export const maxDuration = 60;

const CRON_SECRET = process.env.CRON_SECRET?.trim();

// Debugging sessions have repeatedly left behind zenblocker+<alias>@gmail.com
// test leads (verify*, debugpoll*, finalcheck*, pinpoint*, etc.) that later
// surface as real nurture email floods once they cross the day3/day7/day14
// thresholds. These addresses never represent real customers — hard-block
// them here so a forgotten cleanup can never trigger a send again.
function isTestAlias(email: string): boolean {
  return email.toLowerCase().startsWith("zenblocker+");
}

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
        if (isTestAlias(email)) {
          console.log(`Nurture cron: skipping test alias ${email}`);
          continue;
        }
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

        // Conversion means paid, not signed-up. The paywall sits at the end of
        // the funnel, so a lead with an account is still a free user and still
        // belongs in nurture. Checking at send time also means anyone who pays
        // between runs gets dropped here rather than emailed.
        const { data: leadUser } = await admin
          .from("users")
          .select("id, subscription_status")
          .eq("email", email.toLowerCase())
          .maybeSingle();
        if (leadUser?.subscription_status === "active") {
          const cleanedPlanData: Record<string, unknown> = { ...planData };
          delete cleanedPlanData.nurture_email;
          await admin
            .from("meal_plans")
            .update({ plan_data: cleanedPlanData })
            .eq("id", plan.id);
          console.log(`Nurture cron: ${email.replace(/(.{2}).*@/, "$1***@")} subscribed — removed from nurture`);
          continue;
        }

        // Free account-holders can opt out from inside the app, which only sets
        // this flag — it never touches the lead row.
        if (leadUser) {
          const { data: leadProfile } = await admin
            .from("profiles")
            .select("email_opted_out")
            .eq("user_id", leadUser.id)
            .maybeSingle();
          if (leadProfile?.email_opted_out) {
            console.log(`Nurture cron: ${email.replace(/(.{2}).*@/, "$1***@")} opted out — skipping`);
            continue;
          }
        }

        try {
          const meals = (planData.meals as NurtureMealSummary[] | undefined) ?? undefined;
          await sendNurtureEmail(email, emailType, meals, Boolean(leadUser));

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

          // Check if user has unused referral codes. Keyed on referrer_user_id:
          // that's the column generateReferralCodes has always written, and it
          // excludes admin-issued codes, which have no referrer.
          const { data: codes } = await admin
            .from("promo_codes")
            .select("code")
            .eq("referrer_user_id", userId)
            .eq("type", "referral")
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

    // ── Part 3: Trial ending reminders (14-36h before the charge) ──
    //
    // Gated on the trial env flag so this never queries the trial columns
    // before migration 012 is applied — the whole trial funnel switches on
    // as one unit. Window math at daily 14:00 UTC cadence: every trial gets
    // exactly one reminder, 14-36h out, and trial_reminder_sent_at makes a
    // re-run (or a manual cron invocation) unable to double-send.
    let trialRemindersSent = 0;
    if (getTrialDays() !== null) {
      const windowEnd = new Date(now.getTime() + 36 * 60 * 60 * 1000);
      const { data: endingTrials, error: trialQueryError } = await admin
        .from("users")
        .select("id, email, plan_interval, trial_ends_at")
        .eq("subscription_status", "active")
        .is("trial_reminder_sent_at", null)
        .gt("trial_ends_at", now.toISOString())
        .lte("trial_ends_at", windowEnd.toISOString());

      if (trialQueryError) {
        console.error("Trial reminder query failed (migration 012 applied?):", trialQueryError);
        errors++;
      } else {
        for (const trialUser of endingTrials ?? []) {
          if (isTestAlias(trialUser.email)) continue;
          try {
            await sendTrialEndingEmail(
              trialUser.email,
              trialUser.trial_ends_at as string,
              (trialUser.plan_interval as "monthly" | "yearly" | null) ?? null
            );
            await admin
              .from("users")
              .update({ trial_reminder_sent_at: now.toISOString() })
              .eq("id", trialUser.id);
            trialRemindersSent++;
          } catch (err) {
            console.error(
              `Trial ending email failed for ${trialUser.email.replace(/(.{2}).*@/, "$1***@")}:`,
              err
            );
            errors++;
          }
        }
      }
    }

    const result = {
      sent,
      referralsSent,
      trialRemindersSent,
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
