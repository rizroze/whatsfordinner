import type { Metadata } from "next";
import Link from "next/link";
import { getAllMealPlanPages } from "@/data/meal-plans";

export const metadata: Metadata = {
  title: "Meal Plans for Every Diet and Cuisine",
  description: "Browse personalized weekly meal plans for every diet (keto, vegan, halal, gluten-free) and cuisine (Italian, Thai, Indian, and more). Free 3-day plan included.",
  alternates: { canonical: "https://whatsfordinner.fit/meal-plans" },
  openGraph: {
    title: "Meal Plans for Every Diet and Cuisine",
    description: "Browse personalized weekly meal plans for every diet and cuisine. Free 3-day plan included.",
    url: "https://whatsfordinner.fit/meal-plans",
    siteName: "What's For Dinner",
    type: "website",
  },
};

const typeLabels: Record<string, string> = {
  diet: "Diet",
  cuisine: "Cuisine",
  combo: "Diet + Cuisine",
};

export default function MealPlansIndex() {
  const all = getAllMealPlanPages();
  const diets = all.filter((p) => p.type === "diet");
  const cuisines = all.filter((p) => p.type === "cuisine");
  const combos = all.filter((p) => p.type === "combo");

  return (
    <div className="py-10 sm:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-3">
        Personalized Meal Plans for Every Diet and Cuisine
      </h1>
      <p className="text-base sm:text-lg text-stone-500 mb-12 max-w-xl">
        AI-powered weekly meal plans with recipes and grocery lists, tailored to your dietary needs and favorite flavors. Try free.
      </p>

      {/* Diets */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-stone-800 mb-5">By Diet</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {diets.map((page) => (
            <Link
              key={page.slug}
              href={`/meal-plans/${page.slug}`}
              className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all"
            >
              <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
                {typeLabels[page.type]}
              </span>
              <h3 className="text-sm font-medium text-stone-800 mt-1">{page.h1}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Cuisines */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-stone-800 mb-5">By Cuisine</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {cuisines.map((page) => (
            <Link
              key={page.slug}
              href={`/meal-plans/${page.slug}`}
              className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all"
            >
              <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
                {typeLabels[page.type]}
              </span>
              <h3 className="text-sm font-medium text-stone-800 mt-1">{page.h1}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Combos */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-stone-800 mb-5">Popular Combinations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {combos.map((page) => (
            <Link
              key={page.slug}
              href={`/meal-plans/${page.slug}`}
              className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all"
            >
              <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
                {typeLabels[page.type]}
              </span>
              <h3 className="text-sm font-medium text-stone-800 mt-1">{page.h1}</h3>
            </Link>
          ))}
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
