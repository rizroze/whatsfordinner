"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";

function Check({ className = "text-green-500" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Dash() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className="shrink-0 text-stone-300"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

const features = [
  "7-day personalized meal plans",
  "Recipes with step-by-step instructions",
  "Organized grocery list",
  "Email delivery every week",
  "Swap individual meals",
  "Cancel anytime",
];

const comparisonRows = [
  { feature: "Meal plan days", free: "3 days", paid: "7 days" },
  { feature: "Recipes included", free: true, paid: true },
  { feature: "Grocery list", free: true, paid: true },
  { feature: "Saved to account", free: false, paid: true },
  { feature: "New plan every week", free: false, paid: true },
  { feature: "Swap individual meals", free: false, paid: true },
  { feature: "Email delivery", free: false, paid: true },
  { feature: "Personalized to you", free: true, paid: true },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes! You can generate a free 3-day meal plan with recipes and a grocery list, no credit card required. It's a great way to see how personalized your plans really are before subscribing.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. There are no contracts or commitments. You can cancel your subscription at any time from your dashboard, and you'll keep access until the end of your billing period.",
  },
  {
    q: "What's included in every plan?",
    a: "Every meal plan includes personalized daily meals (breakfast, lunch, dinner, and snacks if you want them), full recipes with step-by-step instructions, and an organized grocery list. Plans are tailored to your dietary preferences, allergies, and household size.",
  },
  {
    q: "How does the yearly plan work?",
    a: "The yearly plan is billed once at $59.99 per year, which works out to about $5 per month — a 37% savings compared to the monthly plan. You get all the same features, just at a lower price.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. If you're not satisfied within the first 30 days, reach out to us and we'll issue a full refund. No questions asked.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-sm font-semibold text-stone-800 hover:text-orange-600 transition-colors"
          >
            What&apos;s For Dinner
          </Link>
          <span className="text-stone-300">/</span>
          <span className="text-sm text-stone-400">Pricing</span>
        </div>
        <Link
          href="/onboarding"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-colors"
        >
          Get Your Free Meal Plan
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-12 sm:pt-20 pb-12 sm:pb-16 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          Simple pricing. No surprises.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-stone-500 max-w-lg mx-auto leading-relaxed">
          Your week of meals, planned in 30 seconds. Cancel anytime.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-3xl mx-auto px-6 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Monthly */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide">
                Monthly
              </h3>
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-4xl font-extrabold text-stone-900 tracking-tight">
                $7.99
              </span>
              <span className="text-stone-400 text-sm">/month</span>
            </div>
            <p className="mt-1 text-xs text-stone-400">Billed monthly</p>

            <ul className="mt-5 space-y-2.5 flex-1">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-[13px] text-stone-600"
                >
                  <Check className="text-orange-500 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/signup?plan=monthly"
              className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              Subscribe Now — $7.99/mo
            </Link>
            <Link
              href="/onboarding"
              className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-stone-700 bg-white border border-stone-200 hover:border-orange-300 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              Try a Free 3-Day Plan
            </Link>
          </div>

          {/* Yearly */}
          <div className="bg-white rounded-2xl border border-orange-300 shadow-md ring-1 ring-orange-100 p-6 flex flex-col relative">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide">
                Yearly
              </h3>
              <span className="bg-orange-500 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                Save 37%
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-4xl font-extrabold text-stone-900 tracking-tight">
                $5
              </span>
              <span className="text-stone-400 text-sm">/month</span>
            </div>
            <p className="mt-1 text-xs text-stone-400">
              $59.99 billed yearly
            </p>

            <ul className="mt-5 space-y-2.5 flex-1">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-[13px] text-stone-600"
                >
                  <Check className="text-orange-500 mt-0.5" />
                  {f}
                </li>
              ))}
              <li className="flex items-start gap-2 text-[13px] text-orange-600 font-medium">
                <Check className="text-orange-500 mt-0.5" />
                Best value
              </li>
            </ul>

            <Link
              href="/signup?plan=yearly"
              className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg shadow-orange-500/20 transition-all duration-200"
            >
              Subscribe Now — $5/mo
            </Link>
            <Link
              href="/onboarding"
              className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-stone-700 bg-white border border-stone-200 hover:border-orange-300 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              Try a Free 3-Day Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-t border-stone-100 bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 text-center tracking-tight">
            Free vs. Paid
          </h2>
          <p className="mt-3 text-stone-500 text-center text-sm sm:text-base max-w-md mx-auto">
            Try the free plan first. Upgrade when you&apos;re ready for the full experience.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-3 pr-4 font-semibold text-stone-700">
                    Feature
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-stone-700 w-28">
                    Free
                  </th>
                  <th className="text-center py-3 pl-4 font-semibold text-orange-600 w-28">
                    Paid
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-stone-100 last:border-0"
                  >
                    <td className="py-3 pr-4 text-stone-600">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <span className="inline-flex justify-center">
                            <Check className="text-green-500" />
                          </span>
                        ) : (
                          <span className="inline-flex justify-center">
                            <Dash />
                          </span>
                        )
                      ) : (
                        <span className="text-stone-500">{row.free}</span>
                      )}
                    </td>
                    <td className="py-3 pl-4 text-center">
                      {typeof row.paid === "boolean" ? (
                        row.paid ? (
                          <span className="inline-flex justify-center">
                            <Check className="text-green-500" />
                          </span>
                        ) : (
                          <span className="inline-flex justify-center">
                            <Dash />
                          </span>
                        )
                      ) : (
                        <span className="font-medium text-stone-700">
                          {row.paid}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 text-center tracking-tight">
            Frequently asked questions
          </h2>

          <div className="mt-10 space-y-2">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-stone-200 overflow-hidden"
                open={openFaq === i}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) {
                    setOpenFaq(i);
                  } else if (openFaq === i) {
                    setOpenFaq(null);
                  }
                }}
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none text-sm font-semibold text-stone-800 hover:text-orange-600 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-stone-400 group-open:rotate-180 transition-transform duration-200"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-stone-500 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-orange-500 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Your first plan is free
          </h2>
          <p className="mt-3 text-orange-100 text-sm sm:text-base max-w-md mx-auto">
            Get a personalized 3-day meal plan with recipes and a grocery list. No credit card required.
          </p>
          <Link
            href="/onboarding"
            className="mt-8 inline-flex items-center px-8 py-3.5 text-base font-semibold text-orange-600 bg-white hover:bg-orange-50 rounded-full shadow-lg transition-all duration-200"
          >
            Start Your Free Plan
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-100 py-12 bg-[#FFFBF5]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-sm font-semibold text-stone-800 tracking-tight">
            What&apos;s For Dinner?
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-stone-400 hover:text-orange-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/meal-plans"
              className="text-sm text-stone-400 hover:text-orange-600 transition-colors"
            >
              Meal Plans
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-stone-400 hover:text-orange-600 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-stone-400 hover:text-orange-600 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/feedback"
              className="text-sm text-stone-400 hover:text-orange-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} What&apos;s For Dinner
          </p>
        </div>
      </footer>
    </div>
  );
}
