import { Resend } from "resend";
import type { MealPlanData } from "@/types/meal-plan";
import { formatWeekOf, getAppUrl } from "@/lib/utils";
import { generateUnsubscribeUrl } from "@/lib/unsubscribe";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

// --- Shared helpers ---

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

const mealTypeBadge: Record<string, { bg: string; color: string }> = {
  breakfast: { bg: "#FFF7ED", color: "#EA580C" },
  lunch: { bg: "#EFF6FF", color: "#2563EB" },
  dinner: { bg: "#FAF5FF", color: "#9333EA" },
  snack: { bg: "#F7FEE7", color: "#65A30D" },
};

function computeStats(plan: MealPlanData) {
  const totalMeals = plan.days.reduce((sum, d) => sum + d.meals.length, 0);
  const totalCalories = plan.days.reduce((sum, d) => sum + (d.totalCalories || d.meals.reduce((s, m) => s + (m.calories || 0), 0)), 0);
  const totalCookTime = plan.days.reduce((sum, d) => sum + d.meals.reduce((s, m) => s + (m.cookTime || 0) + (m.prepTime || 0), 0), 0);
  const groceryCount = plan.groceryList.reduce((sum, cat) => sum + cat.items.length, 0);
  return { totalMeals, totalCalories, totalCookTime, groceryCount };
}

function buildDaysSummary(plan: MealPlanData): string {
  return plan.days
    .map((day) => {
      const totalCal = day.totalCalories || day.meals.reduce((s, m) => s + (m.calories || 0), 0);
      const mealRows = day.meals
        .map((m) => {
          const badge = mealTypeBadge[m.type] || mealTypeBadge.dinner;
          const time = (m.prepTime || 0) + (m.cookTime || 0);
          return `<tr>
            <td style="padding:6px 0;vertical-align:top;white-space:nowrap;width:1px;"><span style="display:inline-block;background:${badge.bg};color:${badge.color};font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;padding:2px 7px;border-radius:99px;">${escapeHtml(m.type)}</span></td>
            <td style="padding:6px 0 6px 8px;vertical-align:top;"><span style="font-size:14px;font-weight:600;color:#1C1917;">${escapeHtml(m.name)}</span>${time || m.calories ? `<br><span style="font-size:11px;color:#A8A29E;">${[time ? `${time} min` : "", m.calories ? `${m.calories} cal` : ""].filter(Boolean).join(" · ")}</span>` : ""}</td>
          </tr>`;
        })
        .join("");
      return `
        <div style="margin-bottom:16px;${day !== plan.days[0] ? "padding-top:12px;border-top:1px solid #F5F5F0;" : ""}">
          <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#1C1917;">${day.day} <span style="font-weight:500;color:#A8A29E;font-size:12px;">${totalCal} cal</span></p>
          <table cellpadding="0" cellspacing="0" border="0" width="100%">${mealRows}</table>
        </div>`;
    })
    .join("");
}

function getHeroContent(weekNumber: number): { headline: string; subtext: string; savedLine: string } {
  // ~2.5 hours saved per week (planning + grocery list + decision fatigue)
  const hoursSaved = Math.round(weekNumber * 2.5);

  if (weekNumber <= 1) {
    return {
      headline: `just saved <span style="color:#F97316;">2.5 hours</span><br>not thinking about what to eat`,
      subtext: "Your first weekly meal plan is here. No more staring at the fridge wondering what to cook.",
      savedLine: `That's 2.5 hours back this week &mdash; and <strong style="color:#1C1917;">130+ hours/yr</strong> if you stick with it.`,
    };
  }
  if (weekNumber === 2) {
    return {
      headline: `you've saved <span style="color:#F97316;">${hoursSaved} hours</span><br>not thinking about what to eat`,
      subtext: "Week 2 &mdash; you're on a roll. Another week planned and ready.",
      savedLine: `That's ${weekNumber * 21} meals you didn't have to think about.`,
    };
  }
  if (weekNumber <= 4) {
    return {
      headline: `you've saved <span style="color:#F97316;">${hoursSaved} hours</span><br>not thinking about what to eat`,
      subtext: `Week ${weekNumber} &mdash; it's becoming a habit. Your future self thanks you.`,
      savedLine: `${hoursSaved} hours back. ${weekNumber * 21} meals planned. Keep going.`,
    };
  }
  if (weekNumber <= 12) {
    return {
      headline: `you've saved <span style="color:#F97316;">${hoursSaved} hours</span><br>not thinking about what to eat`,
      subtext: `${weekNumber} weeks of stress-free dinners. Imagine going back to winging it.`,
      savedLine: `${hoursSaved} hours back. ${weekNumber * 21}+ meals planned. Yours for just $2.50/mo.`,
    };
  }
  // Long-term subscribers
  const monthsApprox = Math.round(weekNumber / 4);
  return {
    headline: `you've saved <span style="color:#F97316;">${hoursSaved}+ hours</span><br>not thinking about what to eat`,
    subtext: `${monthsApprox} months strong. Here's your next week.`,
    savedLine: `${hoursSaved}+ hours back. ${weekNumber * 21}+ meals planned. You're never going back.`,
  };
}

// --- Subscriber email ---

function buildStatsPills(totalMeals: number, groceryCount: number, totalCalories: number, estimatedCost: string): string {
  const pill = (text: string) =>
    `<td style="padding:0 3px 6px 3px;"><span style="display:inline-block;background:#FDECD4;color:#EA580C;font-size:12px;font-weight:600;padding:4px 12px;border-radius:9999px;white-space:nowrap;">${text}</span></td>`;
  return `
    <table cellpadding="0" cellspacing="0" border="0"><tr>
      ${pill(`${totalMeals} meals`)}
      ${pill(`${groceryCount} grocery items`)}
      ${pill(`${totalCalories.toLocaleString()} cal`)}
      ${pill(`Est. ${estimatedCost}`)}
    </tr></table>`;
}

function buildSubscriberEmail(weekOf: string, plan: MealPlanData, weekNumber: number, unsubscribeUrl: string): string {
  const appUrl = getAppUrl();
  const weekLabel = formatWeekOf(weekOf);
  const { totalMeals, totalCalories, totalCookTime, groceryCount } = computeStats(plan);
  const daysSummary = buildDaysSummary(plan);
  const hero = getHeroContent(weekNumber);
  const statsPills = buildStatsPills(totalMeals, groceryCount, totalCalories, plan.estimatedWeeklyCost ?? "");

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light only"><style>:root{color-scheme:light only;}body{background:#FFFBF5!important;}[data-ogsc] h1,[data-ogsc] p,[data-ogsc] span,[data-ogsc] td{color:inherit!important;}</style></head>
    <body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:32px 24px;">

        <!-- Header -->
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:16px;"><tr>
          <td style="vertical-align:middle;width:32px;">
            <img src="${appUrl}/favicon.png" width="32" height="32" alt="What's For Dinner" style="display:block;border-radius:8px;" />
          </td>
          <td style="vertical-align:middle;padding-left:10px;">
            <p style="margin:0;font-size:13px;font-weight:600;color:#1C1917;">What's For Dinner</p>
            <p style="margin:0;color:#78716C;font-size:12px;">Week of ${weekLabel}</p>
          </td>
        </tr></table>

        <!-- Hero -->
        <div style="background:#FFF7ED;border-radius:16px;padding:28px 24px;margin-bottom:24px;">
          <h1 style="margin:0 0 8px;font-size:26px;font-weight:800;color:#1C1917;line-height:1.25;">
            ${hero.headline}
          </h1>
          <p style="margin:0 0 12px;font-size:14px;color:#57534E;line-height:1.5;">
            ${hero.subtext}
          </p>
          <p style="margin:0 0 16px;font-size:13px;color:#78716C;">
            ${hero.savedLine}
          </p>
          ${statsPills}

          <!-- CTA — above meals so it's never clipped -->
          <div style="margin-top:20px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
              <td style="padding-right:6px;"><a href="${appUrl}/plan/${weekOf}" style="display:block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 0;border-radius:9999px;font-weight:700;font-size:14px;text-align:center;">View Recipes & Grocery List</a></td>
            </tr></table>
          </div>
        </div>

        <!-- Meals intro -->
        <p style="margin:0 0 12px;font-size:15px;font-weight:600;color:#1C1917;">
          ${weekNumber <= 1 ? "Here's your first week &mdash; enjoy!" : "Fresh meals for the week, enjoy!"}
        </p>

        <!-- Meals -->
        <div style="background:#FFFFFF;border-radius:16px;padding:20px;border:1px solid #E7E5E4;">
          ${daysSummary}
        </div>

        <!-- Footer -->
        <div style="text-align:center;margin-top:32px;padding-top:20px;border-top:1px solid #E7E5E4;">
          <p style="margin:0;font-size:12px;color:#A8A29E;">
            <a href="${appUrl}/dashboard" style="color:#F97316;text-decoration:none;">Manage preferences</a>
             &middot;
            <a href="${appUrl}/dashboard" style="color:#F97316;text-decoration:none;">Regenerate plan</a>
          </p>
          <p style="margin:8px 0 0;font-size:11px;color:#D6D3D1;">
            What's For Dinner &middot; whatsfordinner.fit
          </p>
          <p style="margin:6px 0 0;font-size:11px;color:#D6D3D1;">
            <a href="${unsubscribeUrl}" style="color:#D6D3D1;text-decoration:underline;">Unsubscribe</a> from weekly emails
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// --- Free user email (conversion-focused) ---

function buildFreeEmail(weekOf: string, plan: MealPlanData): string {
  const appUrl = getAppUrl();
  const weekLabel = formatWeekOf(weekOf);
  const { totalMeals, totalCalories, totalCookTime, groceryCount } = computeStats(plan);
  const daysSummary = buildDaysSummary(plan);
  const days = plan.days.length;

  const minutesSaved = days * 25;
  const hoursSavedYearly = 150;
  const mealsPerYear = Math.round(totalMeals / days * 365);

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light only"><style>:root{color-scheme:light only;}</style></head>
    <body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:32px 24px;">

        <!-- Header -->
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:16px;"><tr>
          <td style="vertical-align:middle;width:32px;">
            <img src="${appUrl}/favicon.png" width="32" height="32" alt="What's For Dinner" style="display:block;border-radius:8px;" />
          </td>
          <td style="vertical-align:middle;padding-left:10px;">
            <p style="margin:0;font-size:13px;font-weight:600;color:#1C1917;">What's For Dinner</p>
            <p style="margin:0;color:#78716C;font-size:12px;">Your free ${days}-day plan &middot; ${weekLabel}</p>
          </td>
        </tr></table>

        <!-- Hero -->
        <div style="background:#FFF7ED;border-radius:16px;padding:28px 24px;margin-bottom:24px;">
          <h1 style="margin:0 0 8px;font-size:26px;font-weight:800;color:#1C1917;line-height:1.25;">
            just saved <span style="color:#F97316;">${minutesSaved} minutes</span><br>
            not thinking about what to eat
          </h1>
          <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.5;">
            That's just ${days} days. Subscribe and save <strong style="color:#1C1917;">${hoursSavedYearly}+ hours/yr</strong> across <strong style="color:#1C1917;">${mealsPerYear.toLocaleString()} meals</strong>.
          </p>
          ${buildStatsPills(totalMeals, groceryCount, totalCalories, plan.estimatedWeeklyCost ?? "")}
        </div>

        <!-- Meals intro -->
        <p style="margin:0 0 12px;font-size:15px;font-weight:600;color:#1C1917;">
          Here's your ${days}-day plan &mdash; enjoy!
        </p>

        <!-- Meals -->
        <div style="background:#FFFFFF;border-radius:16px;padding:20px;border:1px solid #E7E5E4;">
          ${daysSummary}
        </div>

        <!-- Grocery summary -->
        <div style="margin-top:20px;background:#FFF7ED;border-radius:12px;padding:16px;text-align:center;">
          <p style="margin:0 0 2px;font-size:15px;font-weight:700;color:#1C1917;">Grocery List</p>
          <p style="margin:0;font-size:13px;color:#57534E;">${groceryCount} items &middot; Est. ${plan.estimatedWeeklyCost}</p>
        </div>

        <!-- CTA -->
        <div style="text-align:center;margin-top:28px;">
          <a href="${appUrl}/preview?weekOf=${weekOf}" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:14px 36px;border-radius:9999px;font-weight:700;font-size:16px;">
            View Full Plan & Recipes
          </a>
          <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;">Includes step-by-step recipes & printable grocery list</p>
        </div>

        <!-- Upgrade nudge -->
        <div style="background:#FFFFFF;border:2px solid #F97316;border-radius:16px;padding:24px;text-align:center;margin-top:24px;">
          <p style="margin:0 0 4px;font-size:17px;font-weight:700;color:#1C1917;">
            Imagine this every week.
          </p>
          <p style="margin:0 0 16px;font-size:14px;color:#57534E;">
            Full 7-day plans &middot; every Sunday in your inbox &middot; $4.99/mo
          </p>
          <a href="${appUrl}/signup?plan=yearly" style="display:inline-block;background:#1C1917;color:#FFFFFF;text-decoration:none;padding:10px 28px;border-radius:9999px;font-weight:600;font-size:14px;">
            Subscribe &mdash; $2.50/mo yearly
          </a>
        </div>

        <!-- Footer -->
        <div style="text-align:center;margin-top:32px;padding-top:20px;border-top:1px solid #E7E5E4;">
          <p style="margin:0;font-size:11px;color:#D6D3D1;">
            What's For Dinner &middot; whatsfordinner.fit
          </p>
          <p style="margin:6px 0 0;font-size:11px;color:#D6D3D1;">
            This is a one-time email for your free plan. No spam, ever.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// --- Subject lines ---

function getSubjectLine(weekOf: string, weekNumber: number): string {
  const weekLabel = formatWeekOf(weekOf);
  if (weekNumber <= 1) return `Your first meal plan is here — week of ${weekLabel}`;
  if (weekNumber === 2) return `Week 2 — your meal plan for ${weekLabel}`;
  if (weekNumber <= 4) return `Week ${weekNumber} — meal plan for ${weekLabel}`;
  if (weekNumber <= 12) return `Your meal plan for ${weekLabel}`;
  // Long-term: keep it simple, occasionally celebrate milestones
  if (weekNumber % 10 === 0) return `${weekNumber} weeks strong — meal plan for ${weekLabel}`;
  return `Your meal plan for ${weekLabel}`;
}

// --- Welcome email (new subscribers, sent before first plan) ---

function buildWelcomeEmail(firstName: string): string {
  const appUrl = getAppUrl();
  const name = firstName ? `${firstName}` : "there";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light only"><style>:root{color-scheme:light only;}</style></head>
<body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
  <div style="max-width:520px;margin:0 auto;padding:40px 24px;">

    <!-- Header -->
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:24px;"><tr>
      <td style="vertical-align:middle;width:32px;">
        <img src="${appUrl}/favicon.png" width="32" height="32" alt="What's For Dinner" style="display:block;border-radius:8px;" />
      </td>
      <td style="vertical-align:middle;padding-left:10px;">
        <p style="margin:0;font-size:13px;font-weight:600;color:#1C1917;">What's For Dinner</p>
      </td>
    </tr></table>

    <!-- Main card -->
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;">
        Hey ${name}, you're in.
      </h1>
      <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.6;">
        Your first 7-day meal plan is being generated right now. It'll be ready in your dashboard in under a minute &mdash; and you'll get an email the moment it's done.
      </p>
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        Every Sunday from here on, a fresh plan drops in your inbox. Recipes, grocery list, calories &mdash; the whole thing. No more "what's for dinner?" spirals.
      </p>

      <!-- What's in your plan -->
      <div style="background:#FFF7ED;border-radius:12px;padding:16px 20px;margin-bottom:20px;">
        <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#1C1917;">Every week you get:</p>
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr><td style="padding:3px 0;font-size:13px;color:#57534E;">7 days of meals, tailored to your preferences</td></tr>
          <tr><td style="padding:3px 0;font-size:13px;color:#57534E;">Full recipes with step-by-step instructions</td></tr>
          <tr><td style="padding:3px 0;font-size:13px;color:#57534E;">One consolidated grocery list</td></tr>
          <tr><td style="padding:3px 0;font-size:13px;color:#57534E;">Calorie counts &amp; cook times on every meal</td></tr>
        </table>
      </div>

      <div style="text-align:center;">
        <a href="${appUrl}/dashboard" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Go to Dashboard
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align:center;margin-top:28px;">
      <p style="margin:0;font-size:11px;color:#D6D3D1;">What's For Dinner &middot; whatsfordinner.fit</p>
    </div>
  </div>
</body>
</html>`;
}

export async function sendWelcomeEmail(to: string, firstName?: string): Promise<void> {
  const html = buildWelcomeEmail(firstName ?? "");
  await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject: "You're in — your first meal plan is generating",
    html,
  });
}

// --- Exports ---

export async function sendMealPlanEmail(
  to: string,
  weekOf: string,
  plan: MealPlanData,
  weekNumber: number = 1,
  userId?: string
): Promise<void> {
  const unsubscribeUrl = userId
    ? generateUnsubscribeUrl(userId, to)
    : `${getAppUrl()}/dashboard`;
  const html = buildSubscriberEmail(weekOf, plan, weekNumber, unsubscribeUrl);

  await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject: getSubjectLine(weekOf, weekNumber),
    html,
    headers: {
      "List-Unsubscribe": `<${unsubscribeUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
}

export async function sendFreePlanEmail(
  to: string,
  weekOf: string,
  plan: MealPlanData
): Promise<void> {
  const html = buildFreeEmail(weekOf, plan);

  await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject: `Your free meal plan is ready!`,
    html,
  });
}
