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

function buildMealRow(m: { type: string; name: string; calories?: number; prepTime?: number; cookTime?: number; servings?: number }): string {
  const badge = mealTypeBadge[m.type] || mealTypeBadge.dinner;
  const totalTime = (m.prepTime || 0) + (m.cookTime || 0);
  const meta = [
    totalTime > 0 ? `${totalTime} min` : "",
    m.calories ? `${m.calories} cal` : "",
    m.servings ? `${m.servings} servings` : "",
  ].filter(Boolean).join(" &middot; ");

  return `
    <div style="background:#FFFBF5;border:1px solid #F5F5F0;border-radius:12px;padding:12px 14px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;">
        <span style="display:inline-block;background:${badge.bg};color:${badge.color};font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:2px 8px;border-radius:9999px;">${escapeHtml(m.type)}</span>
        <span style="margin-left:10px;font-size:14px;font-weight:600;color:#1C1917;">${escapeHtml(m.name)}</span>
      </div>
      ${meta ? `<p style="margin:4px 0 0 0;font-size:12px;color:#A8A29E;padding-left:2px;">${meta}</p>` : ""}
    </div>`;
}

function buildDaysSummary(plan: MealPlanData): string {
  return plan.days
    .map((day) => {
      const totalCal = day.totalCalories || day.meals.reduce((s, m) => s + (m.calories || 0), 0);
      const meals = day.meals.map((m) => buildMealRow(m)).join("");
      return `
        <div style="margin-bottom:20px;">
          <div style="display:flex;align-items:center;margin-bottom:10px;">
            <h3 style="margin:0;color:#1C1917;font-size:16px;font-weight:700;">${day.day}</h3>
            <span style="margin-left:10px;background:#F5F5F0;color:#78716C;font-size:12px;font-weight:500;padding:2px 10px;border-radius:9999px;">${totalCal} cal</span>
          </div>
          ${meals}
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

function buildSubscriberEmail(weekOf: string, plan: MealPlanData, weekNumber: number, unsubscribeUrl: string): string {
  const appUrl = getAppUrl();
  const weekLabel = formatWeekOf(weekOf);
  const { totalMeals, totalCalories, totalCookTime, groceryCount } = computeStats(plan);
  const daysSummary = buildDaysSummary(plan);
  const hero = getHeroContent(weekNumber);

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:32px 24px;">

        <!-- Header -->
        <div style="text-align:center;margin-bottom:16px;">
          <p style="margin:0 0 2px;font-size:13px;font-weight:600;color:#1C1917;">What's For Dinner</p>
          <p style="margin:0;color:#78716C;font-size:13px;">Week of ${weekLabel}</p>
        </div>

        <!-- Hero -->
        <div style="background:linear-gradient(135deg,#FFF7ED 0%,#FFEDD5 100%);border-radius:16px;padding:28px 24px;margin-bottom:24px;">
          <h1 style="margin:0 0 8px;font-size:26px;font-weight:800;color:#1C1917;line-height:1.25;">
            ${hero.headline}
          </h1>
          <p style="margin:0 0 12px;font-size:14px;color:#57534E;line-height:1.5;">
            ${hero.subtext}
          </p>
          <p style="margin:0 0 16px;font-size:13px;color:#78716C;">
            ${hero.savedLine}
          </p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <span style="display:inline-block;background:rgba(249,115,22,0.1);color:#EA580C;font-size:12px;font-weight:600;padding:4px 12px;border-radius:9999px;">${totalMeals} meals</span>
            <span style="display:inline-block;background:rgba(249,115,22,0.1);color:#EA580C;font-size:12px;font-weight:600;padding:4px 12px;border-radius:9999px;">${groceryCount} grocery items</span>
            <span style="display:inline-block;background:rgba(249,115,22,0.1);color:#EA580C;font-size:12px;font-weight:600;padding:4px 12px;border-radius:9999px;">${totalCalories.toLocaleString()} cal</span>
            <span style="display:inline-block;background:rgba(249,115,22,0.1);color:#EA580C;font-size:12px;font-weight:600;padding:4px 12px;border-radius:9999px;">Est. ${plan.estimatedWeeklyCost}</span>
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

        <!-- Grocery summary -->
        <div style="margin-top:20px;background:#FFF7ED;border-radius:12px;padding:16px;text-align:center;">
          <p style="margin:0 0 2px;font-size:15px;font-weight:700;color:#1C1917;">Grocery List</p>
          <p style="margin:0 0 12px;font-size:13px;color:#57534E;">${groceryCount} items &middot; Est. ${plan.estimatedWeeklyCost}</p>
          <a href="${appUrl}/plan/${weekOf}" style="display:inline-block;background:#1C1917;color:#FFFFFF;text-decoration:none;padding:8px 24px;border-radius:9999px;font-weight:600;font-size:13px;">
            View & Print List
          </a>
        </div>

        <!-- CTA -->
        <div style="text-align:center;margin-top:28px;">
          <a href="${appUrl}/plan/${weekOf}" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:14px 36px;border-radius:9999px;font-weight:700;font-size:16px;">
            View Full Plan & Recipes
          </a>
          <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;">Includes step-by-step recipes & printable grocery list</p>
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
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:32px 24px;">

        <!-- Header -->
        <div style="text-align:center;margin-bottom:16px;">
          <p style="margin:0 0 2px;font-size:13px;font-weight:600;color:#1C1917;">What's For Dinner</p>
          <p style="margin:0;color:#78716C;font-size:13px;">Your free ${days}-day plan &middot; ${weekLabel}</p>
        </div>

        <!-- Hero -->
        <div style="background:linear-gradient(135deg,#FFF7ED 0%,#FFEDD5 100%);border-radius:16px;padding:28px 24px;margin-bottom:24px;">
          <h1 style="margin:0 0 8px;font-size:26px;font-weight:800;color:#1C1917;line-height:1.25;">
            just saved <span style="color:#F97316;">${minutesSaved} minutes</span><br>
            not thinking about what to eat
          </h1>
          <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.5;">
            That's just ${days} days. Subscribe and save <strong style="color:#1C1917;">${hoursSavedYearly}+ hours/yr</strong> across <strong style="color:#1C1917;">${mealsPerYear.toLocaleString()} meals</strong>.
          </p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <span style="display:inline-block;background:rgba(249,115,22,0.1);color:#EA580C;font-size:12px;font-weight:600;padding:4px 12px;border-radius:9999px;">${totalMeals} meals</span>
            <span style="display:inline-block;background:rgba(249,115,22,0.1);color:#EA580C;font-size:12px;font-weight:600;padding:4px 12px;border-radius:9999px;">${groceryCount} grocery items</span>
            <span style="display:inline-block;background:rgba(249,115,22,0.1);color:#EA580C;font-size:12px;font-weight:600;padding:4px 12px;border-radius:9999px;">${totalCalories.toLocaleString()} cal</span>
            <span style="display:inline-block;background:rgba(249,115,22,0.1);color:#EA580C;font-size:12px;font-weight:600;padding:4px 12px;border-radius:9999px;">Est. ${plan.estimatedWeeklyCost}</span>
          </div>
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
