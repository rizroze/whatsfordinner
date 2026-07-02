import { Resend } from "resend";
import { getAppUrl } from "@/lib/utils";
import { generateEmailUnsubscribeUrl } from "@/lib/unsubscribe";

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
  }>;
}

// ── Helper: render a single meal row ──

function mealRow(meal: { name: string; type: string; calories: number; cookTime: number }, isLast = false): string {
  const borderStyle = isLast ? "" : "border-bottom:1px solid #F5F5F4;";
  return `
    <tr>
      <td style="padding:10px 0;${borderStyle}">
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
    </tr>`;
}

// ── Day 3: Show Day 1 meals — "Don't forget to cook these" ──

export function buildNurtureDay3Email(email: string, meals?: NurtureMealSummary[]): { subject: string; html: string } {
  const appUrl = getAppUrl();

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
      <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;">
        Don't forget to cook these
      </h1>
      ${mealSection}
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        ${hasMeals ? "Loved your plan?" : "If you loved it,"} Imagine having <strong style="color:#1C1917;">every single day planned like this</strong> &mdash; breakfast, lunch, and dinner with recipes, a grocery list, and calorie counts.
      </p>
      <div style="text-align:center;">
        <a href="${appUrl}/signup?plan=monthly" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Get 7 days every week &mdash; $7.99/mo
        </a>
      </div>
    </div>
    ${buildFooter(email)}`);

  return { subject: hasMeals ? `Don't forget: ${day1.meals[0].name}` : "Don't forget to cook these", html };
}

// ── Day 7: Show last day's full meals — "Your plan has expired" ──

export function buildNurtureDay7Email(email: string, meals?: NurtureMealSummary[]): { subject: string; html: string } {
  const appUrl = getAppUrl();

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
      <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;">
        Your plan has expired
      </h1>
      ${mealSection}
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        That was <strong style="color:#1C1917;">one day</strong>. Breakfast, lunch, and dinner &mdash; decided for you. Subscribers get this <strong style="color:#1C1917;">every day, every week</strong>. Fresh plan every Sunday, recipes included, grocery list ready.
      </p>
      <div style="text-align:center;">
        <a href="${appUrl}/signup?plan=yearly" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Go weekly &mdash; $5/mo ($59.99/yr)
        </a>
        <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;text-decoration:none;">That's less than a single takeout coffee.</p>
      </div>
    </div>
    ${buildFooter(email)}`);

  return { subject: "Your meal plan has expired", html };
}

// ── Day 14: Show their plan + blurred 4th day + feature highlights ──

export function buildNurtureDay14Email(email: string, meals?: NurtureMealSummary[]): { subject: string; html: string } {
  const appUrl = getAppUrl();

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

    // Day 2-3: dinner only
    for (let i = 1; i < meals.length; i++) {
      const day = meals[i];
      const dinner = day.meals.find((m) => m.type === "dinner") || day.meals[day.meals.length - 1];
      planRows += `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #F5F5F4;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="vertical-align:middle;width:1px;white-space:nowrap;padding-right:12px;">
                <span style="display:inline-block;background:#F5F5F4;color:#57534E;font-size:11px;font-weight:700;padding:2px 8px;border-radius:9999px;text-decoration:none;">${escapeHtml(day.day)}</span>
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

    // Blurred teaser rows
    planRows += `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #F5F5F4;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="vertical-align:middle;width:1px;white-space:nowrap;padding-right:12px;">
                <span style="display:inline-block;background:#F5F5F4;color:#E7E5E4;font-size:11px;font-weight:700;padding:2px 8px;border-radius:9999px;text-decoration:none;">Thursday</span>
              </td>
              <td style="vertical-align:middle;">
                <p style="margin:0;font-size:14px;font-weight:600;color:#E7E5E4;text-decoration:none;">Honey Glazed Chicken Bowl</p>
                <p style="margin:2px 0 0;font-size:11px;color:#F5F5F4;text-decoration:none;">30 min &middot; 490 cal</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="vertical-align:middle;width:1px;white-space:nowrap;padding-right:12px;">
                <span style="display:inline-block;background:#FAFAF9;color:#F5F5F4;font-size:11px;font-weight:700;padding:2px 8px;border-radius:9999px;text-decoration:none;">Friday</span>
              </td>
              <td style="vertical-align:middle;">
                <p style="margin:0;font-size:14px;font-weight:600;color:#F5F5F4;text-decoration:none;">Crispy Tofu Stir-Fry</p>
                <p style="margin:2px 0 0;font-size:11px;color:#FAFAF9;text-decoration:none;">25 min &middot; 420 cal</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>`;
  }

  const planSection = hasMeals
    ? `
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#A8A29E;text-transform:uppercase;letter-spacing:0.05em;text-decoration:none;">Your plan</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 8px;">
        ${planRows}
      </table>
      <p style="margin:0 0 20px;font-size:13px;font-weight:600;color:#F97316;text-align:center;text-decoration:none;">
        + 4 more days with a subscription
      </p>`
    : `
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        Two weeks ago you tried a 3-day plan. Imagine getting that &mdash; but for the whole week.
      </p>`;

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;">
        What you're missing every week
      </h1>
      ${planSection}
      <div style="text-align:center;">
        <a href="${appUrl}/signup?plan=yearly" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Get your weekly plan &mdash; $5/mo
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
      { name: "Garlic Butter Shrimp with Rice", time: "20 min", tag: "Seafood" },
      { name: "Black Bean Quesadillas", time: "15 min", tag: "Vegetarian" },
      { name: "Lemon Herb Chicken Thighs", time: "25 min", tag: "High Protein" },
    ],
  },
  {
    subject: "3 meals under $3 per serving",
    title: "Eat well, spend less",
    intro: "Proof that budget-friendly doesn't mean boring. These cost less than a coffee per plate.",
    meals: [
      { name: "Chickpea Coconut Curry", time: "25 min", tag: "Vegan" },
      { name: "Egg Fried Rice with Veggies", time: "15 min", tag: "Budget" },
      { name: "Baked Pasta with Spinach", time: "30 min", tag: "Family" },
    ],
  },
  {
    subject: "3 one-pot meals for zero cleanup",
    title: "Cook once, wash once",
    intro: "Everything goes in one pot. Dinner's done and cleanup takes two minutes.",
    meals: [
      { name: "One-Pot Chicken Alfredo", time: "25 min", tag: "Comfort" },
      { name: "Tomato Basil Soup with Grilled Cheese Dippers", time: "20 min", tag: "Classic" },
      { name: "Thai Peanut Noodles", time: "20 min", tag: "Asian" },
    ],
  },
  {
    subject: "3 high-protein meals that actually taste good",
    title: "Protein without the boredom",
    intro: "Skip the plain chicken and broccoli. These pack 30g+ protein and real flavor.",
    meals: [
      { name: "Turkey Taco Bowls", time: "20 min", tag: "30g protein" },
      { name: "Salmon with Roasted Sweet Potato", time: "30 min", tag: "35g protein" },
      { name: "Greek Chicken Grain Bowl", time: "25 min", tag: "32g protein" },
    ],
  },
  {
    subject: "3 meals your kids will actually eat",
    title: "Family-tested, parent-approved",
    intro: "No more cooking two separate dinners. These are simple enough for picky eaters and satisfying for adults.",
    meals: [
      { name: "Homemade Chicken Tenders", time: "25 min", tag: "Kid Fave" },
      { name: "Mini Pizza Bagels with Hidden Veggies", time: "15 min", tag: "Sneaky" },
      { name: "Teriyaki Beef Stir-Fry", time: "20 min", tag: "Sweet" },
    ],
  },
  {
    subject: "3 meals that are better than takeout",
    title: "Skip the delivery app tonight",
    intro: "Save $15&ndash;25 per meal and eat better. These taste like restaurant food made at home.",
    meals: [
      { name: "Crispy Orange Chicken", time: "30 min", tag: "Chinese" },
      { name: "Smash Burgers with Special Sauce", time: "20 min", tag: "American" },
      { name: "Creamy Tuscan Chicken Pasta", time: "25 min", tag: "Italian" },
    ],
  },
  {
    subject: "3 healthy meals that don't taste healthy",
    title: "Clean eating, zero sadness",
    intro: "Nutritious food shouldn't feel like punishment. These are genuinely delicious.",
    meals: [
      { name: "Cauliflower Mac &amp; Cheese", time: "25 min", tag: "Comfort" },
      { name: "Honey Garlic Salmon", time: "20 min", tag: "Omega-3" },
      { name: "Stuffed Bell Peppers", time: "35 min", tag: "Balanced" },
    ],
  },
  {
    subject: "3 meals perfect for meal prep",
    title: "Cook Sunday, eat all week",
    intro: "Make once, portion out, reheat all week. Your future self will thank you.",
    meals: [
      { name: "Chicken Burrito Bowls", time: "30 min", tag: "Prep Fave" },
      { name: "Beef &amp; Broccoli", time: "25 min", tag: "Reheats Well" },
      { name: "Mediterranean Quinoa Salad", time: "20 min", tag: "No Reheat" },
    ],
  },
];

function buildWeeklyInspirationEmail(
  email: string,
  weekIndex: number
): { subject: string; html: string } {
  const appUrl = getAppUrl();
  const theme = WEEKLY_THEMES[weekIndex % WEEKLY_THEMES.length];

  const mealRows = theme.meals
    .map(
      (meal, i) => `
        <tr>
          <td style="padding:10px 0;${i < theme.meals.length - 1 ? "border-bottom:1px solid #F5F5F4;" : ""}">
            <p style="margin:0 0 2px;font-size:15px;font-weight:600;color:#1C1917;text-decoration:none;">${escapeHtml(meal.name)}</p>
            <p style="margin:0;font-size:12px;color:#A8A29E;text-decoration:none;">${escapeHtml(meal.time)} &middot; ${escapeHtml(meal.tag)}</p>
          </td>
        </tr>`
    )
    .join("");

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;">
        ${escapeHtml(theme.title)}
      </h1>
      <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.6;">
        ${theme.intro}
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
        ${mealRows}
      </table>

      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        Want a full week of meals like these &mdash; with recipes, grocery list, and calorie counts &mdash; personalized to <em>your</em> preferences?
      </p>
      <div style="text-align:center;">
        <a href="${appUrl}/signup?plan=yearly" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Get your weekly plan &mdash; $5/mo
        </a>
        <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;text-decoration:none;">Cancel anytime. Plans start instantly.</p>
      </div>
    </div>
    ${buildFooter(email)}`);

  return { subject: theme.subject, html };
}

// ── Referral reminder email (for subscribers, 2 weeks after first plan) ──

export function buildReferralReminderEmail(
  email: string,
  referralCodes: string[]
): { subject: string; html: string } {
  const appUrl = getAppUrl();

  const codeRows = referralCodes
    .map(
      (code) => `
        <tr>
          <td style="padding:8px 12px;background:#FFF7ED;border-radius:8px;margin-bottom:4px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:15px;font-weight:700;color:#C2410C;font-family:monospace;text-decoration:none;">${escapeHtml(code)}</td>
                <td style="text-align:right;">
                  <a href="${appUrl}/redeem?code=${encodeURIComponent(code)}" style="font-size:12px;color:#F97316;text-decoration:none;font-weight:600;">Share link</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="height:6px;"></td></tr>`
    )
    .join("");

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;">
        Give your friends free meal plans
      </h1>
      <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.6;">
        You just got your second weekly plan. If it's been saving you time, share the love &mdash; you have <strong style="color:#1C1917;">${referralCodes.length} referral code${referralCodes.length === 1 ? "" : "s"}</strong> to give away.
      </p>
      <p style="margin:0 0 12px;font-size:13px;font-weight:600;color:#1C1917;text-decoration:none;">Your codes:</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
        ${codeRows}
      </table>
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        Each code gives a friend a <strong style="color:#1C1917;">free year</strong> of weekly meal plans with recipes and a grocery list. Just send them the share link.
      </p>
    </div>
    ${buildFooter(email)}`);

  return { subject: "You have referral codes to share", html };
}

// ── Preview lead: sent immediately when an anonymous visitor finishes onboarding ──

export function buildPreviewLeadEmail(
  email: string,
  meals: NurtureMealSummary[]
): { subject: string; html: string } {
  const appUrl = getAppUrl();
  const monday = meals[0];
  const tuesday = meals[1];
  const hasMeals = monday && monday.meals.length > 0;

  const mondaySection = hasMeals
    ? `
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#16A34A;text-transform:uppercase;letter-spacing:0.05em;text-decoration:none;">Monday &mdash; unlocked</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
        ${monday.meals.map((m, i) => mealRow(m, i === monday.meals.length - 1)).join("")}
      </table>`
    : "";

  const lockedSection = tuesday
    ? `
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#A8A29E;text-transform:uppercase;letter-spacing:0.05em;text-decoration:none;">Tuesday &mdash; locked</p>
      <p style="margin:0 0 4px;font-size:14px;color:#A8A29E;text-decoration:none;">
        ${tuesday.meals.map((m) => escapeHtml(m.name)).join(" &middot; ")}
      </p>
      <p style="margin:0 0 20px;font-size:12px;color:#D6D3D1;text-decoration:none;">
        + ${meals.length - 2} more days, full recipes, and your grocery list
      </p>`
    : "";

  const html = wrapEmail(`
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;text-decoration:none;">
        Monday is planned. Here&#39;s your menu.
      </h1>
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        Built from the preferences you just set &mdash; saved here so you don&#39;t lose it.
      </p>
      ${mondaySection}
      ${lockedSection}
      <div style="text-align:center;">
        <a href="${appUrl}/signup?plan=monthly" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Unlock my full week &mdash; $7.99/mo
        </a>
      </div>
      <p style="margin:14px 0 0;text-align:center;font-size:12px;color:#A8A29E;text-decoration:none;">
        Cancel anytime &middot; New plan every Sunday &middot; Grocery list included
      </p>
    </div>
    ${buildFooter(email)}`);

  const dinner = hasMeals
    ? monday.meals.find((m) => m.type === "dinner") ?? monday.meals[0]
    : null;
  return {
    subject: dinner ? `Your Monday menu: ${dinner.name}` : "Your meal plan preview is saved",
    html,
  };
}

export async function sendPreviewLeadEmail(
  to: string,
  meals: NurtureMealSummary[]
): Promise<void> {
  const { subject, html } = buildPreviewLeadEmail(to, meals);
  const unsubUrl = generateEmailUnsubscribeUrl(to);

  await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject,
    html,
    headers: {
      "List-Unsubscribe": `<${unsubUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
}

// ── Email type definitions ──

export type NurtureEmailType = "day3" | "day7" | "day14" | `weekly_${number}`;

export async function sendNurtureEmail(
  to: string,
  type: NurtureEmailType,
  meals?: NurtureMealSummary[]
): Promise<void> {
  let subject: string;
  let html: string;

  if (type === "day3") {
    ({ subject, html } = buildNurtureDay3Email(to, meals));
  } else if (type === "day7") {
    ({ subject, html } = buildNurtureDay7Email(to, meals));
  } else if (type === "day14") {
    ({ subject, html } = buildNurtureDay14Email(to, meals));
  } else if (type.startsWith("weekly_")) {
    const weekIndex = parseInt(type.split("_")[1], 10);
    ({ subject, html } = buildWeeklyInspirationEmail(to, weekIndex));
  } else {
    return;
  }

  const unsubUrl = generateEmailUnsubscribeUrl(to);

  await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject,
    html,
    headers: {
      "List-Unsubscribe": `<${unsubUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
}

export async function sendReferralReminderEmail(
  to: string,
  referralCodes: string[]
): Promise<void> {
  const { subject, html } = buildReferralReminderEmail(to, referralCodes);

  await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject,
    html,
  });
}
