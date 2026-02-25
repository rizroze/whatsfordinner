import { Resend } from "resend";
import type { MealPlanData } from "@/types/meal-plan";
import { formatWeekOf, getAppUrl } from "@/lib/utils";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

function buildMealPlanEmail(weekOf: string, plan: MealPlanData): string {
  const appUrl = getAppUrl();
  const weekLabel = formatWeekOf(weekOf);

  const daysSummary = plan.days
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

  const groceryCount = plan.groceryList.reduce((sum, cat) => sum + cat.items.length, 0);

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:32px 24px;">
        <div style="text-align:center;margin-bottom:32px;">
          <h1 style="margin:0;font-size:24px;color:#1C1917;">Your Meal Plan is Ready</h1>
          <p style="margin:8px 0 0;color:#57534E;font-size:15px;">Week of ${weekLabel}</p>
        </div>

        <div style="background:#FFFFFF;border-radius:16px;padding:24px;border:1px solid #E7E5E4;">
          ${daysSummary}
        </div>

        <div style="margin-top:24px;background:#FFF7ED;border-radius:12px;padding:16px;text-align:center;">
          <p style="margin:0 0 4px;font-size:14px;color:#57534E;">${groceryCount} items on your grocery list</p>
          <p style="margin:0;font-size:13px;color:#A8A29E;">Estimated cost: ${plan.estimatedWeeklyCost}</p>
        </div>

        <div style="text-align:center;margin-top:28px;">
          <a href="${appUrl}/plan/${weekOf}" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:600;font-size:15px;">
            View Full Plan & Recipes
          </a>
        </div>

        <div style="text-align:center;margin-top:32px;padding-top:20px;border-top:1px solid #E7E5E4;">
          <p style="margin:0;font-size:12px;color:#A8A29E;">
            <a href="${appUrl}/dashboard" style="color:#F97316;text-decoration:none;">Manage preferences</a>
             &middot;
            <a href="${appUrl}/dashboard" style="color:#F97316;text-decoration:none;">Regenerate plan</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function sendMealPlanEmail(
  to: string,
  weekOf: string,
  plan: MealPlanData
): Promise<void> {
  const html = buildMealPlanEmail(weekOf, plan);

  await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject: `Your meal plan for the week of ${formatWeekOf(weekOf)}`,
    html,
  });
}
