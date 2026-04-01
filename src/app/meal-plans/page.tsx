import type { Metadata } from "next";
import Link from "next/link";
import { getAllMealPlanPages } from "@/data/meal-plans";
import { NON_DEFAULT_LOCALES, getLocaleConfig } from "@/lib/i18n/locales";

const hubLanguages: Record<string, string> = {
  en: "https://whatsfordinner.fit/meal-plans",
  "x-default": "https://whatsfordinner.fit/meal-plans",
};
for (const loc of NON_DEFAULT_LOCALES) {
  hubLanguages[getLocaleConfig(loc).hreflang] =
    `https://whatsfordinner.fit/${loc}/meal-plans`;
}

export const metadata: Metadata = {
  title: "Meal Plans for Every Diet and Cuisine",
  description: "Browse personalized weekly meal plans for every diet (keto, vegan, halal, gluten-free) and cuisine (Italian, Thai, Indian, and more). Free 3-day plan included.",
  alternates: { canonical: "https://whatsfordinner.fit/meal-plans", languages: hubLanguages },
  openGraph: {
    title: "Meal Plans for Every Diet and Cuisine",
    description: "Browse personalized weekly meal plans for every diet and cuisine. Free 3-day plan included.",
    url: "https://whatsfordinner.fit/meal-plans",
    siteName: "What's For Dinner",
    type: "website",
  },
};

const SLUG_EMOJI: Record<string, string> = {
  // Diets
  vegetarian: "🥬", vegan: "🌱", "gluten-free": "🌾", "dairy-free": "🥛", keto: "🥑",
  "low-carb": "🥩", pescatarian: "🐟", halal: "☪️", kosher: "✡️", "no-meat-fridays": "🙏",
  "whole30-meal-plan": "🔄", "paleo-meal-plan": "🦴", "fodmap-meal-plan": "🫄",
  "dash-diet-meal-plan": "❤️", "carnivore-meal-plan": "🥓", "aip-meal-plan": "🛡️",
  "plant-based-meal-plan": "🌿", "intermittent-fasting-meal-plan": "⏰",
  // Cuisines
  american: "🇺🇸", italian: "🇮🇹", mexican: "🇲🇽", asian: "🥢", mediterranean: "🫒",
  indian: "🍛", thai: "🍜", japanese: "🍱", french: "🇫🇷", "middle-eastern": "🧆",
  korean: "🇰🇷", southern: "🍗",
  // Health
  "ibs-meal-plan": "🫃", "pcos-meal-plan": "💜", "gerd-meal-plan": "🫁",
  "gut-health-meal-plan": "🦠", "high-cholesterol-meal-plan": "🫀", "hypothyroid-meal-plan": "🦋",
  // Goals
  "meal-plan-for-weight-loss": "⚖️", "meal-plan-for-muscle-gain": "💪",
  "meal-plan-for-pregnancy": "🤰", "meal-plan-for-beginners": "👋",
  "meal-plan-for-picky-eaters": "🫣", "meal-plan-on-a-budget": "💵",
  "meal-plan-for-diabetes": "🩸", "meal-plan-for-heart-health": "❤️‍🩹",
  "high-protein-meal-plan": "🏋️", "anti-inflammatory-meal-plan": "🧊",
  // Households
  "meal-plan-for-one": "🧑", "meal-plan-for-two": "👫", "meal-plan-for-family-of-4": "👨‍👩‍👧‍👦",
  "meal-plan-for-family-of-6": "👨‍👩‍👧‍👦", "meal-plan-for-college-students": "🎓",
  "quick-30-minute-meal-plan": "⚡",
  // Calories
  "1200-calorie-meal-plan": "🔥", "1500-calorie-meal-plan": "🔥", "1800-calorie-meal-plan": "🔥",
  "2000-calorie-meal-plan": "🔥", "2500-calorie-meal-plan": "💥", "3000-calorie-meal-plan": "💥",
  // Durations
  "3-day-meal-plan": "3️⃣", "5-day-meal-plan": "5️⃣", "7-day-meal-plan": "7️⃣",
  "14-day-meal-plan": "📅", "21-day-meal-plan": "📅", "30-day-meal-plan": "🗓️",
  // Methods
  "meal-prep-meal-plan": "📦", "slow-cooker-meal-plan": "🫕", "air-fryer-meal-plan": "🌀",
  "one-pot-meal-plan": "🍲", "no-cook-meal-plan": "🥗", "under-50-dollar-meal-plan": "💲",
  "instant-pot-meal-plan": "⏲️", "sheet-pan-meal-plan": "🍳", "freezer-meal-plan": "🧊",
  "5-ingredient-meal-plan": "🖐️", "under-20-minute-meal-plan": "⚡",
  "batch-cooking-meal-plan": "🫙", "one-pan-keto-meal-plan": "🍳",
  "instant-pot-family-meal-plan": "⏲️",
  // Seasonal & Occasions
  "summer-meal-plan": "☀️", "winter-meal-plan": "❄️", "spring-meal-plan": "🌸",
  "fall-meal-plan": "🍂", "meal-plan-for-ramadan": "🌙", "meal-plan-for-lent": "✝️",
  "back-to-school-meal-plan": "🎒", "thanksgiving-meal-plan": "🦃",
  "christmas-meal-plan": "🎄", "new-years-healthy-meal-plan": "🎆",
  "super-bowl-meal-plan": "🏈", "bbq-summer-meal-plan": "🔥",
  "meal-plan-for-entertaining": "🥂", "camping-meal-plan": "⛺", "road-trip-meal-plan": "🚗",
  "keto-meal-plan-for-weight-loss": "🥑", "vegan-meal-plan-for-muscle-gain": "🌱",
  "gluten-free-meal-plan-for-beginners": "🌾", "mediterranean-meal-plan-for-heart-health": "🫒",
  "low-carb-meal-plan-for-diabetes": "🥩",
  // Gen Z
  "meal-plan-for-first-apartment": "🏠", "meal-plan-for-roommates": "🤝",
  "meal-plan-no-cooking-experience": "🔰", "meal-plan-for-busy-students": "📚",
  "tiktok-recipes-meal-plan": "📱", "meal-plan-for-gym-beginners": "🏋️",
  "high-protein-budget-meal-plan": "💪", "meal-plan-to-stop-ordering-takeout": "🚫",
  "dorm-room-meal-plan": "🛏️", "meal-plan-for-broke-college-kids": "🪙",
  "post-graduation-meal-plan": "🎓", "meal-plan-for-night-shift": "🌙",
  "meal-plan-for-remote-workers": "💻", "5-dollar-meal-plan": "💵",
  "microwave-meal-plan": "📡", "meal-plan-for-depression": "🤗",
  "meal-plan-for-adhd": "🧠", "social-media-detox-meal-plan": "📵",
  "meal-plan-for-broke-20-somethings": "🪙", "meal-plan-for-picky-adults": "🫣",
  "meal-plan-no-oven": "🚫", "date-night-meal-plan": "💕",
  "meal-plan-for-gamers": "🎮", "meal-plan-for-content-creators": "📸",
  "meal-plan-for-minimalists": "🪷", "anti-diet-meal-plan": "✌️",
  "meal-plan-for-shift-workers": "🔄", "lazy-meal-plan": "😴",
  // Budget
  "under-30-dollar-meal-plan": "💲", "under-75-dollar-meal-plan": "💵",
  "under-100-dollar-family-meal-plan": "💰", "meal-plan-for-couples": "💑",
  "meal-plan-for-athletes": "🏃", "meal-plan-for-new-parents": "👶",
  // Lifestyle
  "meal-plan-for-toddlers": "👶", "meal-plan-for-seniors": "👴",
  "postpartum-meal-plan": "🤱", "anti-inflammatory-mediterranean": "🫒",
  "high-protein-vegetarian": "💪",
  // Combos
  "vegan-thai": "🍜", "vegan-indian": "🍛", "vegan-mediterranean": "🫒",
  "keto-mediterranean": "🥑", "keto-asian": "🥢", "keto-mexican": "🌮",
  "vegetarian-italian": "🍝", "vegetarian-indian": "🍛", "vegetarian-mediterranean": "🫒",
  "gluten-free-asian": "🥢", "gluten-free-italian": "🍝", "gluten-free-mexican": "🌮",
  "halal-mediterranean": "🧆", "halal-indian": "🍛", "halal-middle-eastern": "🧆",
  "pescatarian-japanese": "🍣", "pescatarian-mediterranean": "🐟",
  "dairy-free-thai": "🍜", "dairy-free-mexican": "🌮", "low-carb-southern": "🍗",
  "vegan-japanese-meal-plan": "🍱", "keto-indian-meal-plan": "🍛",
  "gluten-free-korean-meal-plan": "🇰🇷", "vegetarian-mexican-meal-plan": "🌮",
  "halal-asian-meal-plan": "🥢", "paleo-mediterranean-meal-plan": "🫒",
  "low-carb-italian-meal-plan": "🍝", "dairy-free-indian-meal-plan": "🍛",
  "pescatarian-korean-meal-plan": "🇰🇷", "vegan-soul-food-meal-plan": "🍗",
};

const sections = [
  { key: "diet", heading: "By Diet", label: "Diet" },
  { key: "cuisine", heading: "By Cuisine", label: "Cuisine" },
  { key: "health", heading: "Health Conditions", label: "Health" },
  { key: "goal", heading: "By Goal", label: "Goal" },
  { key: "method", heading: "Cooking Methods", label: "Method" },
  { key: "genz", heading: "Gen Z & Young Adults", label: "Life" },
  { key: "lifestyle", heading: "Life Stages", label: "Lifestyle" },
  { key: "budget", heading: "Budget & Lifestyle", label: "Budget" },
  { key: "practical", heading: "Practical Guides", label: "Practical" },
  { key: "occasion", heading: "Seasonal & Occasions", label: "Occasion" },
  { key: "seasonal", heading: "Seasonal Specials", label: "Seasonal" },
  { key: "household", heading: "By Household Size", label: "Household" },
  { key: "calorie", heading: "By Calories", label: "Calories" },
  { key: "duration", heading: "By Duration", label: "Duration" },
  { key: "combo", heading: "Popular Combinations", label: "Combo" },
] as const;

export default function MealPlansIndex() {
  const all = getAllMealPlanPages();

  const grouped = sections
    .map((s) => ({
      ...s,
      pages: all.filter((p) => p.type === s.key),
    }))
    .filter((s) => s.pages.length > 0);

  return (
    <div className="py-10 sm:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-3">
        Personalized Meal Plans for Every Diet, Cuisine &amp; Lifestyle
      </h1>
      <p className="text-base sm:text-lg text-stone-500 mb-12 max-w-xl">
        AI-powered weekly meal plans with recipes and grocery lists, tailored to your dietary needs, favorite flavors, and life stage. Try free.
      </p>

      {grouped.map((section) => (
        <section key={section.key} className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-5">{section.heading}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {section.pages.map((page) => (
              <Link
                key={page.slug}
                href={`/meal-plans/${page.slug}`}
                className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all"
              >
                <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
                  {SLUG_EMOJI[page.slug] && <span className="mr-0.5 not-italic">{SLUG_EMOJI[page.slug]}</span>}
                  {section.label}
                </span>
                <h3 className="text-sm font-medium text-stone-800 mt-1">{page.h1}</h3>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* Related reading */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-stone-800 mb-5">Learn More</h2>

        <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">Getting Started</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <Link href="/blog/meal-planning-for-beginners" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Guide</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Meal Planning for Beginners</h3>
          </Link>
          <Link href="/blog/best-meal-planning-apps" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Roundup</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Best Meal Planning Apps 2026</h3>
          </Link>
          <Link href="/blog/weekly-meal-plan" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Guide</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Plan Your Entire Week in 10 Minutes</h3>
          </Link>
        </div>

        <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">Save Money</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <Link href="/blog/eating-healthy-on-a-budget" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Guide</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Eating Healthy on a Budget</h3>
          </Link>
          <Link href="/blog/cheap-meals-for-one" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Gen Z</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">15 Dinners Under $3/Serving</h3>
          </Link>
          <Link href="/blog/best-budget-meal-plans" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Budget</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Best Budget Meal Plans 2026</h3>
          </Link>
        </div>

        <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">Life Situations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Link href="/blog/meal-planning-for-families" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Family</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Meal Planning for Families</h3>
          </Link>
          <Link href="/blog/meal-planning-for-college" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Gen Z</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Meal Planning for College Students</h3>
          </Link>
        </div>

        <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">vs Alternatives</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/blog/yummly-alternative" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Trending</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Best Yummly Alternative (2026)</h3>
          </Link>
          <Link href="/blog/meal-planning-vs-doordash" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Comparison</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Meal Planning vs. DoorDash</h3>
          </Link>
          <Link href="/blog/best-meal-kit-alternatives" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Comparison</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">5 Cheap Alternatives to Meal Kits</h3>
          </Link>
        </div>

        <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3 mt-6">Planning Essentials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/blog/meal-plan-with-grocery-list" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Guide</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">Meal Plan with Grocery List: The Complete Solution</h3>
          </Link>
          <Link href="/blog/how-to-stop-ordering-takeout" className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all">
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">Gen Z</span>
            <h3 className="text-sm font-medium text-stone-800 mt-1">How to Stop Ordering Takeout</h3>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-orange-500 p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Your first week is free
        </h2>
        <p className="text-orange-100 text-sm sm:text-base mb-6 max-w-md mx-auto">
          Get a personalized 3-day meal plan with recipes and a grocery list. No credit card required.
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-orange-600 bg-white hover:bg-orange-50 rounded-full shadow-md transition-colors"
        >
          Start Your Free Plan
        </Link>
      </section>
    </div>
  );
}
