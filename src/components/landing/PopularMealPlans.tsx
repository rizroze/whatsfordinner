"use client";

import Link from "next/link";
import { useT, type Locale } from "@/lib/i18n/context";
import { getLocalePath, getMealPlansPath } from "@/lib/i18n/locales";
import esSlugs from "@/data/meal-plans/translations/slugs/es.json";
import frSlugs from "@/data/meal-plans/translations/slugs/fr.json";
import deSlugs from "@/data/meal-plans/translations/slugs/de.json";
import ptSlugs from "@/data/meal-plans/translations/slugs/pt.json";
import jaSlugs from "@/data/meal-plans/translations/slugs/ja.json";
import koSlugs from "@/data/meal-plans/translations/slugs/ko.json";
import zhSlugs from "@/data/meal-plans/translations/slugs/zh.json";
import arSlugs from "@/data/meal-plans/translations/slugs/ar.json";
import trSlugs from "@/data/meal-plans/translations/slugs/tr.json";
import hiSlugs from "@/data/meal-plans/translations/slugs/hi.json";

// Client-safe slug maps (the shared translations/index.ts helper uses
// fs.readFileSync and can't be bundled into client components)
const SLUG_MAPS: Partial<Record<Locale, Record<string, string>>> = {
  es: esSlugs,
  fr: frSlugs,
  de: deSlugs,
  pt: ptSlugs,
  ja: jaSlugs,
  ko: koSlugs,
  zh: zhSlugs,
  ar: arSlugs,
  tr: trSlugs,
  hi: hiSlugs,
};

function slugForLocale(englishSlug: string, locale: Locale): string {
  if (locale === "en") return englishSlug;
  return SLUG_MAPS[locale]?.[englishSlug] ?? englishSlug;
}

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
  const { t, locale } = useT();
  const mealPlansPath = getMealPlansPath(locale);

  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          {t("landing.popularPlans.title")}
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg max-w-xl mx-auto">
          {t("landing.popularPlans.subtitle")}
        </p>

        {/* Single column on phones: two columns at 390px forced multi-word
            labels ("1,500 Calorie Plan") onto three lines while short ones
            stayed on one, so row heights came out ragged. */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
          {POPULAR_PLANS.map((plan) => (
            <Link
              key={plan.slug}
              href={getLocalePath(
                locale,
                `${mealPlansPath}/${slugForLocale(plan.slug, locale)}`
              )}
              className="group flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-white border border-stone-100 hover:border-orange-200 hover:shadow-md transition-all duration-200"
            >
              <span className="text-2xl leading-none shrink-0">{plan.emoji}</span>
              <span className="text-sm font-medium text-stone-700 group-hover:text-orange-600 transition-colors">
                {t(plan.labelKey)}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={getLocalePath(locale, mealPlansPath)}
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
