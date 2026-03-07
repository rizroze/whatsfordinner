import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { getMealPlanBySlug } from "@/data/meal-plans";
import type { MealPlanPageData } from "@/data/meal-plans/types";

const mealTypeStyles: Record<string, string> = {
  breakfast: "bg-orange-50 text-orange-600",
  lunch: "bg-blue-50 text-blue-600",
  dinner: "bg-purple-50 text-purple-600",
  snack: "bg-lime-50 text-lime-600",
};

const typeLabels: Record<string, string> = {
  diet: "Diet",
  cuisine: "Cuisine",
  combo: "Diet + Cuisine",
};

function FAQSchema({ faqs }: { faqs: MealPlanPageData["faqs"] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MealPlanTemplate({ data }: { data: MealPlanPageData }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://whatsfordinner.fit" },
          { name: "Meal Plans", url: "https://whatsfordinner.fit/meal-plans" },
          { name: data.h1, url: `https://whatsfordinner.fit/meal-plans/${data.slug}` },
        ]}
      />
      <FAQSchema faqs={data.faqs} />

      <article className="py-10 sm:py-16">
        {/* Breadcrumb nav */}
        <nav className="flex items-center gap-1.5 text-xs text-stone-400 mb-6">
          <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/meal-plans" className="hover:text-orange-500 transition-colors">Meal Plans</Link>
          <span>/</span>
          <span className="text-stone-600">{data.h1}</span>
        </nav>

        {/* Category badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-50 rounded-full mb-4">
          {typeLabels[data.type]}
        </span>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
          {data.h1}
        </h1>

        {/* Intro */}
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-10">
          {data.intro}
        </p>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: "1", title: "Set your preferences", desc: "Tell us your diet, household size, budget, and allergies." },
              { step: "2", title: "Get your plan", desc: "Receive a personalized meal plan with recipes and grocery list." },
              { step: "3", title: "Cook & enjoy", desc: "Follow simple recipes. No stress, no waste." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-stone-100 bg-white p-5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold mb-3">
                  {s.step}
                </span>
                <h3 className="text-sm font-semibold text-stone-800 mb-1">{s.title}</h3>
                <p className="text-xs text-stone-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Value Props */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-6">Why Choose This Plan</h2>
          <div className="space-y-4">
            {data.valueProps.map((vp) => (
              <div key={vp.heading} className="rounded-xl border border-stone-100 bg-white p-5">
                <h3 className="text-sm font-semibold text-stone-800 mb-1">{vp.heading}</h3>
                <p className="text-sm text-stone-500">{vp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Meals */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-6">Sample Meals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.sampleMeals.map((meal) => (
              <div key={meal.name} className="rounded-xl border border-stone-100 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${mealTypeStyles[meal.mealType] ?? "bg-stone-50 text-stone-500"}`}>
                    {meal.mealType}
                  </span>
                  <span className="text-[10px] text-stone-400">{meal.prepTime}</span>
                </div>
                <h3 className="text-sm font-semibold text-stone-800 mb-1">{meal.name}</h3>
                <p className="text-xs text-stone-500 mb-2">{meal.description}</p>
                <div className="flex flex-wrap gap-1">
                  {meal.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-stone-400 bg-stone-50 rounded-full px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {data.faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-stone-100 bg-white group">
                <summary className="px-5 py-4 text-sm font-medium text-stone-800 cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-300 transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-stone-500 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Pages */}
        {data.relatedSlugs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-stone-800 mb-6">Related Meal Plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {data.relatedSlugs.map((slug) => {
                const related = getMealPlanBySlug(slug);
                if (!related) return null;
                return (
                  <Link
                    key={slug}
                    href={`/meal-plans/${slug}`}
                    className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all"
                  >
                    <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
                      {typeLabels[related.type]}
                    </span>
                    <h3 className="text-sm font-medium text-stone-800 mt-1">{related.h1}</h3>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

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
      </article>
    </>
  );
}
