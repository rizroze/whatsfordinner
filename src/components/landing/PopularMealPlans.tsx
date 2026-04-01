"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/context";

const POPULAR_PLANS = [
  { slug: "keto", labelKey: "landing.popularPlans.keto", emoji: "🥑" },
  { slug: "mediterranean", labelKey: "landing.popularPlans.mediterranean", emoji: "🫒" },
  { slug: "vegetarian", labelKey: "landing.popularPlans.vegetarian", emoji: "🥗" },
  { slug: "1500-calorie-meal-plan", labelKey: "landing.popularPlans.cal1500", emoji: "🔥" },
  { slug: "1200-calorie-meal-plan", labelKey: "landing.popularPlans.cal1200", emoji: "🔥" },
  { slug: "meal-plan-on-a-budget", labelKey: "landing.popularPlans.budget", emoji: "💰" },
  { slug: "high-protein-meal-plan", labelKey: "landing.popularPlans.highProtein", emoji: "💪" },
  { slug: "gluten-free", labelKey: "landing.popularPlans.glutenFree", emoji: "🌾" },
  { slug: "meal-plan-for-family-of-4", labelKey: "landing.popularPlans.family", emoji: "👨‍👩‍👧‍👦" },
];

export function PopularMealPlans() {
  const { t } = useT();

  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          {t("landing.popularPlans.title")}
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg max-w-xl mx-auto">
          {t("landing.popularPlans.subtitle")}
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {POPULAR_PLANS.map((plan) => (
            <Link
              key={plan.slug}
              href={`/meal-plans/${plan.slug}`}
              className="group flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-stone-100 hover:border-orange-200 hover:shadow-md transition-all duration-200"
            >
              <span className="text-2xl shrink-0">{plan.emoji}</span>
              <span className="text-sm font-medium text-stone-700 group-hover:text-orange-600 transition-colors">
                {t(plan.labelKey)}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/meal-plans"
            className="inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
          >
            {t("landing.popularPlans.seeAll")}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
