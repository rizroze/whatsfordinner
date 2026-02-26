import { Resend } from "resend";
import type { MealPlanData } from "@/types/meal-plan";
import { formatWeekOf, getAppUrl } from "@/lib/utils";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

// --- Shared helpers ---

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
      const meals = day.meals
        .map((m) => `<li style="margin:2px 0;color:#57534E;">${m.type}: <strong style="color:#1C1917;">${m.name}</strong> (${m.calories} cal)</li>`)
        .join("");
      return `
        <div style="margin-bottom:16px;">
          <h3 style="margin:0 0 6px;color:#1C1917;font-size:15px;">${day.day}</h3>
          <ul style="margin:0;padding-left:20px;font-size:14px;">${meals}</ul>
        </div>`;
    })
    .join("");
}

// --- Subscriber email ---

function buildSubscriberEmail(weekOf: string, plan: MealPlanData): string {
  const appUrl = getAppUrl();
  const weekLabel = formatWeekOf(weekOf);
  const { totalMeals, totalCalories, totalCookTime, groceryCount } = computeStats(plan);
  const daysSummary = buildDaysSummary(plan);

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:32px 24px;">

        <div style="text-align:center;margin-bottom:8px;">
          <p style="margin:0;color:#57534E;font-size:14px;">Week of ${weekLabel}</p>
        </div>

        <!-- Hero -->
        <div style="background:linear-gradient(135deg,#FFF7ED 0%,#FFEDD5 100%);border-radius:16px;padding:28px 24px;margin-bottom:24px;">
          <p style="margin:0 0 4px;font-size:12px;color:#78716C;">
            planned ${totalMeals} meals &middot; ${groceryCount} grocery items &middot; ${totalCalories.toLocaleString()} cal
          </p>
          <p style="margin:0 0 16px;font-size:12px;color:#EA580C;">
            ${totalCookTime} min total cook time &middot; Est. ${plan.estimatedWeeklyCost}
          </p>
          <h1 style="margin:0;font-size:28px;font-weight:800;color:#1C1917;line-height:1.2;">
            just saved <span style="color:#F97316;">150+ hours/yr</span><br>
            not thinking about what to eat
          </h1>
          <p style="margin:12px 0 0;font-size:13px;color:#78716C;">
            That's <strong style="color:#1C1917;">$2,340/yr saved</strong> vs. meal kits &middot; yours for just $2.50/mo on the yearly plan
          </p>
        </div>

        <!-- Meals -->
        <div style="background:#FFFFFF;border-radius:16px;padding:24px;border:1px solid #E7E5E4;">
          ${daysSummary}
        </div>

        <!-- Grocery summary -->
        <div style="margin-top:20px;background:#FFF7ED;border-radius:12px;padding:14px;text-align:center;">
          <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#1C1917;">Grocery List</p>
          <p style="margin:0;font-size:13px;color:#57534E;">${groceryCount} items &middot; Est. ${plan.estimatedWeeklyCost}</p>
        </div>

        <!-- CTA -->
        <div style="text-align:center;margin-top:28px;">
          <a href="${appUrl}/plan/${weekOf}" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:600;font-size:15px;">
            View Full Plan & Recipes
          </a>
          <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;">Includes recipes, instructions & printable grocery list</p>
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

  // Time saved: ~25 min/day not thinking about meals
  const minutesSaved = days * 25;
  // Yearly projection if they subscribed
  const hoursSavedYearly = 150;
  const mealsPerYear = Math.round(totalMeals / days * 365);

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:32px 24px;">

        <div style="text-align:center;margin-bottom:8px;">
          <p style="margin:0;color:#57534E;font-size:14px;">Your free ${days}-day plan &middot; ${weekLabel}</p>
        </div>

        <!-- Hero -->
        <div style="background:linear-gradient(135deg,#FFF7ED 0%,#FFEDD5 100%);border-radius:16px;padding:28px 24px;margin-bottom:24px;">
          <p style="margin:0 0 4px;font-size:12px;color:#78716C;">
            planned ${totalMeals} meals &middot; ${groceryCount} grocery items &middot; ${totalCalories.toLocaleString()} cal
          </p>
          <p style="margin:0 0 16px;font-size:12px;color:#EA580C;">
            ${totalCookTime} min total cook time &middot; Est. ${plan.estimatedWeeklyCost}
          </p>
          <h1 style="margin:0;font-size:28px;font-weight:800;color:#1C1917;line-height:1.2;">
            just saved <span style="color:#F97316;">${minutesSaved} minutes</span><br>
            not thinking about what to eat
          </h1>
          <p style="margin:14px 0 0;font-size:13px;color:#78716C;">
            That's just ${days} days. Subscribe and save <strong style="color:#1C1917;">${hoursSavedYearly}+ hours/yr</strong> across <strong style="color:#1C1917;">${mealsPerYear.toLocaleString()} meals</strong> &mdash; for $2.50/mo
          </p>
        </div>

        <!-- Meals -->
        <div style="background:#FFFFFF;border-radius:16px;padding:24px;border:1px solid #E7E5E4;">
          ${daysSummary}
        </div>

        <!-- Grocery summary -->
        <div style="margin-top:20px;background:#FFF7ED;border-radius:12px;padding:14px;text-align:center;">
          <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#1C1917;">Grocery List</p>
          <p style="margin:0;font-size:13px;color:#57534E;">${groceryCount} items &middot; Est. ${plan.estimatedWeeklyCost}</p>
        </div>

        <!-- CTA -->
        <div style="text-align:center;margin-top:28px;">
          <a href="${appUrl}/preview?weekOf=${weekOf}" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:600;font-size:15px;">
            View Full Plan & Recipes
          </a>
          <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;">Includes recipes, instructions & printable grocery list</p>
        </div>

        <!-- Upgrade nudge -->
        <div style="background:#FFFFFF;border:2px solid #F97316;border-radius:16px;padding:24px;text-align:center;margin-top:24px;">
          <p style="margin:0 0 4px;font-size:16px;font-weight:700;color:#1C1917;">
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
        </div>
      </div>
    </body>
    </html>
  `;
}

// --- Exports ---

export async function sendMealPlanEmail(
  to: string,
  weekOf: string,
  plan: MealPlanData
): Promise<void> {
  const html = buildSubscriberEmail(weekOf, plan);

  await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject: `Your meal plan for the week of ${formatWeekOf(weekOf)}`,
    html,
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
