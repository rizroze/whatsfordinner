"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const features = [
  "Try a free 1-day plan, no credit card needed",
  "Fresh 7-day meal plans every week, made just for your family",
  "Grocery lists you can actually shop from",
  "Don't love a meal? Regenerate up to 2x/week",
  "Plans delivered straight to your inbox every Sunday",
  "Works around allergies, diets, picky eaters — all of it",
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          Simple Pricing
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg max-w-xl mx-auto">
          Try a free 1-day plan. Then subscribe for the full week.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center mt-10 gap-3">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              !yearly ? "text-stone-900" : "text-stone-400"
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            onClick={() => setYearly(!yearly)}
            className={cn(
              "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2",
              yearly ? "bg-orange-500" : "bg-stone-300"
            )}
          >
            <span
              className={cn(
                "pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out",
                yearly ? "translate-x-5" : "translate-x-0"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              yearly ? "text-stone-900" : "text-stone-400"
            )}
          >
            Yearly
          </span>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Monthly Card */}
          <div
            className={cn(
              "bg-white rounded-2xl border p-8 transition-all duration-200",
              !yearly
                ? "border-orange-300 shadow-md ring-1 ring-orange-100"
                : "border-stone-200 shadow-sm"
            )}
          >
            <h3 className="text-lg font-semibold text-stone-900">Monthly</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-stone-900">$4.99</span>
              <span className="text-stone-500 text-sm">/month</span>
            </div>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-stone-600">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500 shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/onboarding"
              className={cn(
                "mt-8 w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2",
                !yearly
                  ? "bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow-md"
                  : "bg-stone-100 hover:bg-stone-200 text-stone-700"
              )}
            >
              Try Free First
            </Link>
          </div>

          {/* Yearly Card */}
          <div
            className={cn(
              "bg-white rounded-2xl border p-8 transition-all duration-200 relative",
              yearly
                ? "border-orange-300 shadow-md ring-1 ring-orange-100"
                : "border-stone-200 shadow-sm"
            )}
          >
            {/* Save badge */}
            <span className="absolute -top-3 right-6 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              Save 50%
            </span>

            <h3 className="text-lg font-semibold text-stone-900">Yearly</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-stone-900">$29.99</span>
              <span className="text-stone-500 text-sm">/year</span>
            </div>
            <p className="mt-1 text-sm text-orange-600 font-medium">
              $2.50/mo
            </p>

            <ul className="mt-7 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-stone-600">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500 shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/onboarding"
              className={cn(
                "mt-8 w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2",
                yearly
                  ? "bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow-md"
                  : "bg-stone-100 hover:bg-stone-200 text-stone-700"
              )}
            >
              Try Free First
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
