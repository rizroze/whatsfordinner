"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/context";

const SAMPLE_DAYS_DATA = [
  {
    dayKey: "sampleMon",
    meals: [
      { typeKey: "breakfast", name: "Greek Yogurt Parfait", time: "5 min", cal: "320" },
      { typeKey: "lunch", name: "Chicken Caesar Wrap", time: "15 min", cal: "480" },
      { typeKey: "dinner", name: "One-Pan Lemon Herb Salmon", time: "25 min", cal: "520" },
    ],
  },
  {
    dayKey: "sampleTue",
    meals: [
      { typeKey: "breakfast", name: "Overnight Oats with Berries", time: "5 min", cal: "350" },
      { typeKey: "lunch", name: "Mediterranean Grain Bowl", time: "10 min", cal: "450" },
      { typeKey: "dinner", name: "Beef & Broccoli Stir-Fry", time: "20 min", cal: "560" },
    ],
  },
  {
    dayKey: "sampleWed",
    meals: [
      { typeKey: "breakfast", name: "Avocado Toast with Eggs", time: "10 min", cal: "380" },
      { typeKey: "lunch", name: "Tomato Basil Soup + Grilled Cheese", time: "20 min", cal: "510" },
      { typeKey: "dinner", name: "Creamy Tuscan Chicken Pasta", time: "30 min", cal: "580" },
    ],
  },
];

const GROCERY_KEYS = [
  "grocery1", "grocery2", "grocery3", "grocery4", "grocery5", "grocery6",
  "grocery7", "grocery8", "grocery9", "grocery10", "grocery11", "grocery12",
];

const MEAL_COLORS: Record<string, string> = {
  breakfast: "bg-amber-50 text-amber-700",
  lunch: "bg-sky-50 text-sky-700",
  dinner: "bg-violet-50 text-violet-700",
};

export function PlanPreview({ isSignedIn }: { isSignedIn?: boolean }) {
  const { t } = useT();

  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          {t("landing.preview.title")}
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg max-w-xl mx-auto">
          {t("landing.preview.subtitle")}
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Meal plan cards */}
          <div className="lg:col-span-2 space-y-4">
            {SAMPLE_DAYS_DATA.map((day) => (
              <div
                key={day.dayKey}
                className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 sm:p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-stone-900">{t(`landing.preview.${day.dayKey}`)}</h3>
                  <span className="text-xs text-orange-500 font-medium">
                    {t("landing.preview.recipesLink")} &rarr;
                  </span>
                </div>
                <div className="space-y-2">
                  {day.meals.map((meal) => (
                    <div
                      key={meal.name}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-medium shrink-0 ${MEAL_COLORS[meal.typeKey] ?? ""}`}
                      >
                        {t(`mealTypes.${meal.typeKey}`)}
                      </span>
                      <span className="text-stone-800 font-medium flex-1 min-w-0 truncate">
                        {meal.name}
                      </span>
                      <span className="text-stone-400 text-xs shrink-0 hidden sm:inline">
                        {meal.time}
                      </span>
                      <span className="text-stone-400 text-xs shrink-0 hidden sm:inline">
                        {meal.cal} {t("plan.cal")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Blurred teaser for remaining days */}
            <div className="relative">
              <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 sm:p-5 select-none" style={{ filter: "blur(4px)" }}>
                <h3 className="text-sm font-semibold text-stone-900 mb-3">Thursday</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700">Breakfast</span>
                    <span className="text-stone-800 font-medium">Banana Protein Smoothie</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-sky-50 text-sky-700">Lunch</span>
                    <span className="text-stone-800 font-medium">Asian Chicken Salad</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href={isSignedIn ? "/dashboard" : "/onboarding"}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                >
                  {isSignedIn ? t("landing.hero.ctaLoggedIn") : t("landing.preview.unlock")}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Grocery list sidebar */}
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 sm:p-5 h-fit">
            <div className="flex items-center gap-2 mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <h3 className="text-sm font-semibold text-stone-900">
                {t("landing.preview.groceryTitle")}
              </h3>
              <span className="ml-auto text-xs text-stone-400">{GROCERY_KEYS.length} {t("plan.items")}</span>
            </div>
            <ul className="space-y-1.5">
              {GROCERY_KEYS.map((key) => (
                <li key={key} className="flex items-center gap-2 text-sm text-stone-600">
                  <div className="w-3.5 h-3.5 rounded border border-stone-300 shrink-0" />
                  {t(`landing.preview.${key}`)}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-stone-100 text-center">
              <p className="text-xs text-stone-400">{t("landing.preview.groceryNote")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
