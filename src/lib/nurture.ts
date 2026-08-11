import { Resend } from "resend";
import { getAppUrl } from "@/lib/utils";
import { generateEmailUnsubscribeUrl } from "@/lib/unsubscribe";
import { getTrialDays } from "@/lib/trial";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function wrapEmail(content: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light only"><style>a{text-decoration:none !important;}h1,h2,h3,p,td,span{text-decoration:none !important;}</style></head>
<body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
  <div style="max-width:520px;margin:0 auto;padding:40px 24px;">
    <!-- Header -->
    <div style="text-align:center;margin-bottom:24px;">
      <p style="margin:0;font-size:13px;font-weight:600;color:#1C1917;text-decoration:none;">What's For Dinner</p>
    </div>
    ${content}
  </div>
</body>
</html>`;
}

function buildFooter(email: string): string {
  const unsubUrl = generateEmailUnsubscribeUrl(email);
  return `
    <div style="text-align:center;margin-top:32px;padding-top:20px;border-top:1px solid #E7E5E4;">
      <p style="margin:0;font-size:11px;color:#D6D3D1;text-decoration:none;">
        What's For Dinner &middot; whatsfordinner.fit
      </p>
      <p style="margin:6px 0 0;font-size:11px;">
        <a href="${unsubUrl}" style="color:#D6D3D1;text-decoration:underline;">Unsubscribe</a>
      </p>
    </div>`;
}

// ── Upgrade CTA target ──

// Email HTML is static, so the link cannot branch on auth state at click time —
// the sender knows who the recipient is, so the choice is made at send time.
// Middleware bounces authenticated users off /signup to /dashboard and drops the
// ?plan intent with them, so anyone who already has an account must be pointed
// straight at checkout. Same split as src/app/pricing/page.tsx.
function upgradeUrl(plan: "monthly" | "yearly", hasAccount: boolean): string {
  const appUrl = getAppUrl();
  return hasAccount ? `${appUrl}/checkout?plan=${plan}` : `${appUrl}/signup?plan=${plan}`;
}

// CTA label for upgrade buttons: trial-first when the trial flag is on,
// the given price-forward fallback otherwise. Evaluated at send time, so
// flipping NEXT_PUBLIC_TRIAL_DAYS changes future emails without a deploy
// of anything email-specific.
function upgradeCtaLabel(fallback: string): string {
  const days = getTrialDays();
  return days ? `Start my ${days}-day free trial` : fallback;
}

// ── Meal type badge colors ──

function mealBadge(type: string): string {
  const colors: Record<string, { bg: string; text: string }> = {
    breakfast: { bg: "#FFF7ED", text: "#C2410C" },
    lunch: { bg: "#EFF6FF", text: "#1D4ED8" },
    dinner: { bg: "#FAF5FF", text: "#7E22CE" },
    snack: { bg: "#F0FDF4", text: "#15803D" },
  };
  const c = colors[type] || colors.dinner;
  return `<span style="display:inline-block;background:${c.bg};color:${c.text};font-size:10px;font-weight:700;padding:2px 8px;border-radius:9999px;text-transform:uppercase;text-decoration:none;">${escapeHtml(type)}</span>`;
}

// ── Meal summary type (stored in plan_data.meals) ──

export interface NurtureMealSummary {
  day: string;
  meals: Array<{
    name: string;
    type: string;
    calories: number;
    cookTime: number;
    emoji: string;
  }>;
}

// ── Helper: render a single meal row ──

// Emoji glyphs render with their own native color regardless of surrounding
// CSS — `color:` has no effect on them — so this circle is safe to reuse
// anywhere without worrying about it clashing with faded/muted text nearby.
function emojiCircle(emoji: string, size = 44): string {
  return `
    <table cellpadding="0" cellspacing="0" style="width:${size}px;">
      <tr><td align="center" valign="middle" style="width:${size}px;height:${size}px;background:#FFFFFF;border:1px solid #F5F5F4;border-radius:9999px;font-size:${Math.round(size * 0.45)}px;line-height:${size}px;text-align:center;">${emoji}</td></tr>
    </table>`;
}

function mealRow(meal: { name: string; type: string; calories: number; cookTime: number; emoji: string }, isLast = false): string {
  const spacerStyle = isLast ? "padding:0;" : "padding:0 0 8px;";
  return `
    <tr>
      <td style="${spacerStyle}">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#FFFBF5;border:1px solid #F5F5F4;border-radius:16px;">
          <tr>
            <td style="padding:12px;width:44px;vertical-align:middle;">
              ${emojiCircle(meal.emoji)}
            </td>
            <td style="padding:12px 12px 12px 0;vertical-align:middle;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <p style="margin:0 0 3px;font-size:15px;font-weight:600;color:#1C1917;text-decoration:none;">${escapeHtml(meal.name)}</p>
                    <p style="margin:0;font-size:12px;color:#A8A29E;text-decoration:none;">${meal.cookTime} min &middot; ${meal.calories} cal</p>
                  </td>
                  <td style="vertical-align:middle;text-align:right;width:1px;white-space:nowrap;">
                    ${mealBadge(meal.type)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

// ── Day 3: Show Day 1 meals — "Don't forget to cook these" ──

export function buildNurtureDay3Email(
  email: string,
  meals?: NurtureMealSummary[],
  hasAccount = false
): { subject: string; html: string } {
  // Get Day 1 meals if available
  const day1 = meals?.[0];
  const hasMeals = day1 && day1.meals.length > 0;

  const mealSection = hasMeals
    ? `
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#A8A29E;text-transform:uppercase;letter-spacing:0.05em;text-decoration:none;">${escapeHtml(day1.day)}'s meals</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
        ${day1.meals.map((m, i) => mealRow(m, i === day1.meals.length - 1)).join("")}
      </table>`
    : `
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        You previewed your personalized meal plan earlier this week. How'd it go?
      </p>`;

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <div style="text-align:center;margin:0 0 12px;">
        <img src="${getAppUrl()}/characters/email/pasta.png" width="88" height="66" alt="" style="display:inline-block;width:88px;height:66px;">
      </div>
      <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;text-align:center;">
        Don't forget to cook these
      </h1>
      ${mealSection}
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        ${hasMeals ? "Loved your plan?" : "If you loved it,"} Imagine having <strong style="color:#1C1917;">every single day planned like this</strong> &mdash; breakfast, lunch, and dinner with recipes, a grocery list, and calorie counts.
      </p>
      <div style="text-align:center;">
        <a href="${upgradeUrl("monthly", hasAccount)}" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          ${upgradeCtaLabel("Get 7 days every week &mdash; $7.99/mo")}
        </a>
      </div>
    </div>
    ${buildFooter(email)}`);

  return { subject: hasMeals ? `Don't forget: ${day1.meals[0].name}` : "Don't forget to cook these", html };
}

// ── Day 7: Show last day's full meals — "Your plan has expired" ──

export function buildNurtureDay7Email(
  email: string,
  meals?: NurtureMealSummary[],
  hasAccount = false
): { subject: string; html: string } {
  const hasMeals = meals && meals.length > 0;

  // Get the last day with all its meals
  const lastDay = hasMeals ? meals[meals.length - 1] : null;

  const mealSection = lastDay
    ? `
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#A8A29E;text-transform:uppercase;letter-spacing:0.05em;text-decoration:none;">${escapeHtml(lastDay.day)} &mdash; your whole day, planned</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
        ${lastDay.meals.map((m, i) => mealRow(m, i === lastDay.meals.length - 1)).join("")}
      </table>`
    : `
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        It's been a week since you previewed your meal plan. Right now, you're back to &ldquo;what's for dinner?&rdquo; tonight.
      </p>`;

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <div style="text-align:center;margin:0 0 12px;">
        <img src="${getAppUrl()}/characters/email/pasta.png" width="88" height="66" alt="" style="display:inline-block;width:88px;height:66px;">
      </div>
      <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;text-align:center;">
        Your plan has expired
      </h1>
      ${mealSection}
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        That was <strong style="color:#1C1917;">one day</strong>. Breakfast, lunch, and dinner &mdash; decided for you. Subscribers get this <strong style="color:#1C1917;">every day, every week</strong>. Fresh plan every Sunday, recipes included, grocery list ready.
      </p>
      <div style="text-align:center;">
        <a href="${upgradeUrl("yearly", hasAccount)}" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          ${upgradeCtaLabel("Go weekly &mdash; $5/mo ($59.99/yr)")}
        </a>
        <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;text-decoration:none;">That's less than a single takeout coffee.</p>
      </div>
    </div>
    ${buildFooter(email)}`);

  return { subject: "Your meal plan has expired", html };
}

// ── Day 14: Show their plan + blurred 4th day + feature highlights ──

export function buildNurtureDay14Email(
  email: string,
  meals?: NurtureMealSummary[],
  hasAccount = false
): { subject: string; html: string } {
  const hasMeals = meals && meals.length > 0;

  // Build plan rows: Day 1 = all meals, Day 2-3 = dinner only, then blurred teaser
  let planRows = "";
  if (hasMeals) {
    // Day 1: show all meals (breakfast, lunch, dinner)
    const day1 = meals[0];
    planRows += `
      <tr>
        <td style="padding:6px 0 2px;">
          <span style="display:inline-block;background:#F5F5F4;color:#57534E;font-size:11px;font-weight:700;padding:2px 8px;border-radius:9999px;text-decoration:none;">${escapeHtml(day1.day)}</span>
        </td>
      </tr>`;
    day1.meals.forEach((m, i) => {
      planRows += `
      <tr>
        <td style="padding:6px 0 6px 16px;${i < day1.meals.length - 1 ? "border-bottom:1px solid #FAFAF9;" : "border-bottom:1px solid #F5F5F4;"}">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="vertical-align:middle;width:36px;padding-right:10px;">
                ${emojiCircle(m.emoji, 36)}
              </td>
              <td style="vertical-align:middle;">
                <p style="margin:0;font-size:14px;font-weight:600;color:#1C1917;text-decoration:none;">${escapeHtml(m.name)}</p>
                <p style="margin:2px 0 0;font-size:11px;color:#A8A29E;text-decoration:none;">${m.cookTime} min &middot; ${m.calories} cal</p>
              </td>
              <td style="vertical-align:middle;text-align:right;width:1px;white-space:nowrap;">
                ${mealBadge(m.type)}
              </td>
            </tr>
          </table>
        </td>
      </tr>`;
    });

    // Day 2-3: dinner only. Capped at 3 real days total (this loop only runs
    // for i=1,2) so the fixed "+N more days" line below stays accurate —
    // letting this run to meals.length showed every remaining day as real,
    // unlocked content, which then contradicted the hardcoded "still locked"
    // teaser rows for those same days right after.
    for (let i = 1; i < Math.min(3, meals.length); i++) {
      const day = meals[i];
      const dinner = day.meals.find((m) => m.type === "dinner") || day.meals[day.meals.length - 1];
      planRows += `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #F5F5F4;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="vertical-align:middle;width:1px;white-space:nowrap;padding-right:10px;">
                <span style="display:inline-block;background:#F5F5F4;color:#57534E;font-size:11px;font-weight:700;padding:2px 8px;border-radius:9999px;text-decoration:none;">${escapeHtml(day.day)}</span>
              </td>
              <td style="vertical-align:middle;width:36px;padding-right:10px;">
                ${emojiCircle(dinner.emoji, 36)}
              </td>
              <td style="vertical-align:middle;">
                <p style="margin:0;font-size:14px;font-weight:600;color:#1C1917;text-decoration:none;">${escapeHtml(dinner.name)}</p>
                <p style="margin:2px 0 0;font-size:11px;color:#A8A29E;text-decoration:none;">${dinner.cookTime} min &middot; ${dinner.calories} cal</p>
              </td>
              <td style="vertical-align:top;text-align:right;width:1px;white-space:nowrap;">
                ${mealBadge(dinner.type)}
                <p style="margin:3px 0 0;font-size:10px;color:#A8A29E;text-decoration:none;">+ breakfast, lunch</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;
    }

  }

  // 3 real days shown above (day1 full + 2 dinner-only), so whatever's left
  // in the real week is what's still locked — computed, not hardcoded, so
  // this can't drift out of sync with the loop above again.
  const lockedDayCount = hasMeals ? Math.max(0, meals.length - 3) : 0;

  const planSection = hasMeals
    ? `
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#A8A29E;text-transform:uppercase;letter-spacing:0.05em;text-decoration:none;">Your plan</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 8px;">
        ${planRows}
      </table>
      <p style="margin:0 0 20px;font-size:13px;font-weight:600;color:#F97316;text-align:center;text-decoration:none;">
        + ${lockedDayCount} more days with a subscription
      </p>`
    : `
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        Two weeks ago you tried a 3-day plan. Imagine getting that &mdash; but for the whole week.
      </p>`;

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <div style="text-align:center;margin:0 0 12px;">
        <img src="${getAppUrl()}/characters/email/bag.png" width="66" height="88" alt="" style="display:inline-block;width:66px;height:88px;">
      </div>
      <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;text-align:center;">
        What you're missing every week
      </h1>
      ${planSection}
      <div style="text-align:center;">
        <a href="${upgradeUrl("yearly", hasAccount)}" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          ${upgradeCtaLabel("Get your weekly plan &mdash; $5/mo")}
        </a>
        <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;text-decoration:none;">Save 37% with yearly ($59.99/yr)</p>
      </div>
    </div>
    <!-- Punchline outside card -->
    <p style="margin:24px 0 0;font-size:14px;color:#57534E;line-height:1.6;text-align:center;">
      Every meal comes with step-by-step recipes, a grocery list sorted by aisle, and calorie counts. All personalized to you &mdash; delivered every Sunday before you even think about it.
    </p>
    ${buildFooter(email)}`);

  return { subject: "What you're missing every week", html };
}

// ── Weekly inspiration emails (Day 21+, rotating themes) ──

const WEEKLY_THEMES = [
  {
    subject: "3 meals you can make in under 30 minutes",
    title: "Quick wins for busy nights",
    intro: "Short on time? These crowd favorites come together fast &mdash; no shortcuts on flavor.",
    meals: [
      { name: "Garlic Butter Shrimp with Rice", time: "20 min", tag: "Seafood", emoji: "🍤" },
      { name: "Black Bean Quesadillas", time: "15 min", tag: "Vegetarian", emoji: "🫓" },
      { name: "Lemon Herb Chicken Thighs", time: "25 min", tag: "High Protein", emoji: "🍗" },
    ],
  },
  {
    subject: "3 meals under $3 per serving",
    title: "Eat well, spend less",
    intro: "Proof that budget-friendly doesn't mean boring. These cost less than a coffee per plate.",
    meals: [
      { name: "Chickpea Coconut Curry", time: "25 min", tag: "Vegan", emoji: "🍛" },
      { name: "Egg Fried Rice with Veggies", time: "15 min", tag: "Budget", emoji: "🍚" },
      { name: "Baked Pasta with Spinach", time: "30 min", tag: "Family", emoji: "🍝" },
    ],
  },
  {
    subject: "3 one-pot meals for zero cleanup",
    title: "Cook once, wash once",
    intro: "Everything goes in one pot. Dinner's done and cleanup takes two minutes.",
    meals: [
      { name: "One-Pot Chicken Alfredo", time: "25 min", tag: "Comfort", emoji: "🍝" },
      { name: "Tomato Basil Soup with Grilled Cheese Dippers", time: "20 min", tag: "Classic", emoji: "🍲" },
      { name: "Thai Peanut Noodles", time: "20 min", tag: "Asian", emoji: "🍜" },
    ],
  },
  {
    subject: "3 high-protein meals that actually taste good",
    title: "Protein without the boredom",
    intro: "Skip the plain chicken and broccoli. These pack 30g+ protein and real flavor.",
    meals: [
      { name: "Turkey Taco Bowls", time: "20 min", tag: "30g protein", emoji: "🌮" },
      { name: "Salmon with Roasted Sweet Potato", time: "30 min", tag: "35g protein", emoji: "🐟" },
      { name: "Greek Chicken Grain Bowl", time: "25 min", tag: "32g protein", emoji: "🥙" },
    ],
  },
  {
    subject: "3 meals your kids will actually eat",
    title: "Family-tested, parent-approved",
    intro: "No more cooking two separate dinners. These are simple enough for picky eaters and satisfying for adults.",
    meals: [
      { name: "Homemade Chicken Tenders", time: "25 min", tag: "Kid Fave", emoji: "🍗" },
      { name: "Mini Pizza Bagels with Hidden Veggies", time: "15 min", tag: "Sneaky", emoji: "🍕" },
      { name: "Teriyaki Beef Stir-Fry", time: "20 min", tag: "Sweet", emoji: "🥢" },
    ],
  },
  {
    subject: "3 meals that are better than takeout",
    title: "Skip the delivery app tonight",
    intro: "Save $15&ndash;25 per meal and eat better. These taste like restaurant food made at home.",
    meals: [
      { name: "Crispy Orange Chicken", time: "30 min", tag: "Chinese", emoji: "🍊" },
      { name: "Smash Burgers with Special Sauce", time: "20 min", tag: "American", emoji: "🍔" },
      { name: "Creamy Tuscan Chicken Pasta", time: "25 min", tag: "Italian", emoji: "🍝" },
    ],
  },
  {
    subject: "3 healthy meals that don't taste healthy",
    title: "Clean eating, zero sadness",
    intro: "Nutritious food shouldn't feel like punishment. These are genuinely delicious.",
    meals: [
      { name: "Cauliflower Mac &amp; Cheese", time: "25 min", tag: "Comfort", emoji: "🥦" },
      { name: "Honey Garlic Salmon", time: "20 min", tag: "Omega-3", emoji: "🐟" },
      { name: "Stuffed Bell Peppers", time: "35 min", tag: "Balanced", emoji: "🫑" },
    ],
  },
  {
    subject: "3 meals perfect for meal prep",
    title: "Cook Sunday, eat all week",
    intro: "Make once, portion out, reheat all week. Your future self will thank you.",
    meals: [
      { name: "Chicken Burrito Bowls", time: "30 min", tag: "Prep Fave", emoji: "🌯" },
      { name: "Beef &amp; Broccoli", time: "25 min", tag: "Reheats Well", emoji: "🥦" },
      { name: "Mediterranean Quinoa Salad", time: "20 min", tag: "No Reheat", emoji: "🥗" },
    ],
  },
];

function buildWeeklyInspirationEmail(
  email: string,
  weekIndex: number,
  hasAccount = false
): { subject: string; html: string } {
  const theme = WEEKLY_THEMES[weekIndex % WEEKLY_THEMES.length];

  const mealRows = theme.meals
    .map(
      (meal, i) => `
        <tr>
          <td style="${i < theme.meals.length - 1 ? "padding:0 0 8px;" : "padding:0;"}">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FFFBF5;border:1px solid #F5F5F4;border-radius:16px;">
              <tr>
                <td style="padding:12px;width:44px;vertical-align:middle;">
                  ${emojiCircle(meal.emoji)}
                </td>
                <td style="padding:12px 12px 12px 0;vertical-align:middle;">
                  <p style="margin:0 0 3px;font-size:15px;font-weight:600;color:#1C1917;text-decoration:none;">${escapeHtml(meal.name)}</p>
                  <p style="margin:0;font-size:12px;color:#A8A29E;text-decoration:none;">${escapeHtml(meal.time)} &middot; ${escapeHtml(meal.tag)}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>`
    )
    .join("");

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <div style="text-align:center;margin:0 0 12px;">
        <img src="${getAppUrl()}/characters/email/bag.png" width="66" height="88" alt="" style="display:inline-block;width:66px;height:88px;">
      </div>
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;text-align:center;">
        ${escapeHtml(theme.title)}
      </h1>
      <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.6;text-align:center;">
        ${theme.intro}
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
        ${mealRows}
      </table>

      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        Want a full week of meals like these &mdash; with recipes, grocery list, and calorie counts &mdash; personalized to <em>your</em> preferences?
      </p>
      <div style="text-align:center;">
        <a href="${upgradeUrl("yearly", hasAccount)}" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          ${upgradeCtaLabel("Get your weekly plan &mdash; $5/mo")}
        </a>
        <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;text-decoration:none;">Cancel anytime. Plans start instantly.</p>
      </div>
    </div>
    ${buildFooter(email)}`);

  return { subject: theme.subject, html };
}

// ── Referral reminder email (for subscribers, a week after first plan) ──

export function buildReferralReminderEmail(
  email: string,
  referralCodes: string[]
): { subject: string; html: string } {
  const appUrl = getAppUrl();
  const count = referralCodes.length;
  const isSingle = count === 1;

  const codeRows = referralCodes
    .map(
      (code, i) => `
        <tr>
          <td style="${i < count - 1 ? "padding:0 0 8px;" : "padding:0;"}">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FFFBF5;border:1px solid #F5F5F4;border-radius:16px;">
              <tr>
                <td style="padding:12px;width:44px;vertical-align:middle;">
                  ${emojiCircle("&#127873;")}
                </td>
                <td style="padding:12px 12px 12px 0;vertical-align:middle;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="vertical-align:middle;">
                        <p style="margin:0 0 3px;font-size:15px;font-weight:700;color:#1C1917;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;text-decoration:none;">${escapeHtml(code)}</p>
                        <p style="margin:0;font-size:12px;color:#A8A29E;text-decoration:none;">1 month free &middot; one friend</p>
                      </td>
                      <td style="vertical-align:middle;text-align:right;width:1px;white-space:nowrap;">
                        <a href="${appUrl}/redeem?code=${encodeURIComponent(code)}" style="display:inline-block;background:#FFF7ED;color:#C2410C;font-size:11px;font-weight:700;padding:5px 12px;border-radius:9999px;text-decoration:none;">Share link</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>`
    )
    .join("");

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <div style="text-align:center;margin:0 0 12px;">
        <img src="${appUrl}/characters/email/envelope.png" width="88" height="86" alt="" style="display:inline-block;width:88px;height:86px;">
      </div>
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;text-align:center;">
        ${isSingle ? "You have an invite to give away" : `You have ${count} invites to give away`}
      </h1>
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;text-align:center;">
        Thanks for cooking with us. ${isSingle ? "Here's a code for someone" : `Here are ${count} codes for the people`} who'd rather stop asking &ldquo;what's for dinner?&rdquo; too.
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
        ${codeRows}
      </table>

      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        ${isSingle ? "Your code gives a friend" : "Each code gives a friend"} a <strong style="color:#1C1917;">free month</strong> of weekly meal plans &mdash; with recipes and a grocery list, personalized to how they actually eat. Send them the share link and they're set.
      </p>
      <div style="text-align:center;">
        <a href="${appUrl}/dashboard" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          ${isSingle ? "Grab my invite link" : "Grab my invite links"}
        </a>
        <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;text-decoration:none;">
          ${isSingle ? "Your code lives on your dashboard too." : "Your codes live on your dashboard too."}
        </p>
      </div>
    </div>
    ${buildFooter(email)}`);

  return {
    subject: isSingle
      ? "You have a free month to give away"
      : `You have ${count} free months to give away`,
    html,
  };
}

// ── Welcome: sent immediately when anyone finishes onboarding ──
//
// Fires for anonymous visitors and signed-in free users alike. Distinct from
// sendWelcomeEmail in lib/resend.ts, which confirms a completed payment.

export function buildPreviewLeadEmail(
  email: string,
  meals: NurtureMealSummary[],
  hasAccount = false
): { subject: string; html: string } {
  const day1 = meals[0];
  const day2 = meals[1];
  const hasMeals = day1 && day1.meals.length > 0;

  const day1Section = hasMeals
    ? `
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#16A34A;text-transform:uppercase;letter-spacing:0.05em;text-decoration:none;">Day 1 &mdash; unlocked</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
        ${day1.meals.map((m, i) => mealRow(m, i === day1.meals.length - 1)).join("")}
      </table>`
    : "";

  const lockedSection = day2
    ? `
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#A8A29E;text-transform:uppercase;letter-spacing:0.05em;text-decoration:none;">Day 2 &mdash; locked</p>
      <p style="margin:0 0 4px;font-size:14px;color:#A8A29E;text-decoration:none;">
        ${day2.meals.map((m) => escapeHtml(m.name)).join(" &middot; ")}
      </p>
      <p style="margin:0 0 20px;font-size:12px;color:#D6D3D1;text-decoration:none;">
        + ${meals.length - 2} more days, full recipes, and your grocery list
      </p>`
    : "";

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <div style="text-align:center;margin:0 0 12px;">
        <img src="${getAppUrl()}/characters/email/envelope.png" width="88" height="86" alt="" style="display:inline-block;width:88px;height:86px;">
      </div>
      <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;text-align:center;">
        Welcome to What&#39;s For Dinner. Here&#39;s your day 1.
      </h1>
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;text-align:center;">
        Built from the preferences you just set &mdash; saved here so you don&#39;t lose it.
      </p>
      ${day1Section}
      ${lockedSection}
      <div style="text-align:center;">
        <a href="${upgradeUrl("monthly", hasAccount)}" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          ${upgradeCtaLabel("Unlock my full week &mdash; $7.99/mo")}
        </a>
      </div>
      <p style="margin:14px 0 0;text-align:center;font-size:12px;color:#A8A29E;text-decoration:none;">
        Cancel anytime &middot; New plan every Sunday &middot; Grocery list included
      </p>
    </div>
    ${buildFooter(email)}`);

  const dinner = hasMeals
    ? day1.meals.find((m) => m.type === "dinner") ?? day1.meals[0]
    : null;
  return {
    subject: dinner
      ? `Welcome to What's For Dinner — day 1: ${dinner.name}`
      : "Welcome to What's For Dinner — your day 1 is ready",
    html,
  };
}

export async function sendPreviewLeadEmail(
  to: string,
  meals: NurtureMealSummary[],
  hasAccount = false
): Promise<void> {
  const { subject, html } = buildPreviewLeadEmail(to, meals, hasAccount);
  const unsubUrl = generateEmailUnsubscribeUrl(to);

  // Resend's SDK resolves normally (does not throw) on API-level failures —
  // it returns { data: null, error } instead of rejecting. Without this
  // check, quota/validation/suppression failures were silently swallowed.
  const { error } = await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject,
    html,
    headers: {
      "List-Unsubscribe": `<${unsubUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
  if (error) {
    throw new Error(`Resend send failed (preview lead email): ${JSON.stringify(error)}`);
  }
}

// ── Trial ending reminder: sent once, 14-36h before the card is charged ──
//
// A billing notice, not marketing: it goes out regardless of email_opted_out,
// because the alternative is a surprise charge — worse for the user and for
// chargeback rates than one unrequested email. The cancel path is stated
// plainly for the same reason; a trial user who cancels informed is a future
// prospect, one who feels tricked is a chargeback.

export function buildTrialEndingEmail(
  email: string,
  trialEndsAt: string,
  planInterval: "monthly" | "yearly" | null
): { subject: string; html: string } {
  const endDate = new Date(trialEndsAt).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const priceLine =
    planInterval === "yearly" ? "$59.99/year" : "$7.99/month";

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <div style="text-align:center;margin:0 0 12px;">
        <img src="${getAppUrl()}/characters/email/envelope.png" width="88" height="86" alt="" style="display:inline-block;width:88px;height:86px;">
      </div>
      <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;text-align:center;">
        Your free trial ends tomorrow
      </h1>
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;text-align:center;">
        On <strong style="color:#1C1917;">${escapeHtml(endDate)}</strong> your subscription starts at <strong style="color:#1C1917;">${priceLine}</strong>. Nothing to do &mdash; your meal plans, recipes, and grocery list keep arriving every Sunday.
      </p>
      <div style="text-align:center;">
        <a href="${getAppUrl()}/dashboard" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Go to my dashboard
        </a>
      </div>
      <p style="margin:14px 0 0;text-align:center;font-size:12px;color:#A8A29E;text-decoration:none;">
        Not for you? Cancel from your dashboard before then and you won&#39;t be charged.
      </p>
    </div>
    ${buildFooter(email)}`);

  return { subject: "Your free trial ends tomorrow", html };
}

export async function sendTrialEndingEmail(
  to: string,
  trialEndsAt: string,
  planInterval: "monthly" | "yearly" | null
): Promise<void> {
  const { subject, html } = buildTrialEndingEmail(to, trialEndsAt, planInterval);
  const unsubUrl = generateEmailUnsubscribeUrl(to);

  const { error } = await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject,
    html,
    headers: {
      "List-Unsubscribe": `<${unsubUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
  if (error) {
    throw new Error(`Resend send failed (trial ending email): ${JSON.stringify(error)}`);
  }
}

// ── Email type definitions ──

export type NurtureEmailType = "day3" | "day7" | "day14" | `weekly_${number}`;

export async function sendNurtureEmail(
  to: string,
  type: NurtureEmailType,
  meals?: NurtureMealSummary[],
  hasAccount = false
): Promise<void> {
  let subject: string;
  let html: string;

  if (type === "day3") {
    ({ subject, html } = buildNurtureDay3Email(to, meals, hasAccount));
  } else if (type === "day7") {
    ({ subject, html } = buildNurtureDay7Email(to, meals, hasAccount));
  } else if (type === "day14") {
    ({ subject, html } = buildNurtureDay14Email(to, meals, hasAccount));
  } else if (type.startsWith("weekly_")) {
    const weekIndex = parseInt(type.split("_")[1], 10);
    ({ subject, html } = buildWeeklyInspirationEmail(to, weekIndex, hasAccount));
  } else {
    return;
  }

  const unsubUrl = generateEmailUnsubscribeUrl(to);

  const { error } = await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject,
    html,
    headers: {
      "List-Unsubscribe": `<${unsubUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
  if (error) {
    throw new Error(`Resend send failed (nurture ${type} email): ${JSON.stringify(error)}`);
  }
}

export async function sendReferralReminderEmail(
  to: string,
  referralCodes: string[]
): Promise<void> {
  const { subject, html } = buildReferralReminderEmail(to, referralCodes);

  const { error } = await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject,
    html,
  });
  if (error) {
    throw new Error(`Resend send failed (referral reminder email): ${JSON.stringify(error)}`);
  }
}
