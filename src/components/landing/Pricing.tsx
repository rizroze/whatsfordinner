"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

import { useT } from "@/lib/i18n/context";

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  const { t } = useT();

  const features = [
    t("landing.pricing.features.sevenDayPlans"),
    t("landing.pricing.features.groceryLists"),
    t("landing.pricing.features.regenerations"),
    t("landing.pricing.features.emailDelivery"),
    t("landing.pricing.features.dietarySupport"),
  ];

  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          {t("landing.pricing.title")}
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg max-w-xl mx-auto">
          {t("landing.pricing.subtitle")}
        </p>

        {/* Single pricing card */}
        <div className="mt-12 max-w-lg mx-auto bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
          {/* Plan toggle */}
          <div className="grid grid-cols-2 gap-0 border-b border-stone-100">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn(
                "py-4 px-6 text-center transition-colors relative",
                !yearly
                  ? "bg-white text-stone-900"
                  : "bg-stone-50 text-stone-400 hover:text-stone-500"
              )}
            >
              <span className="text-sm font-semibold">{t("landing.pricing.monthly")}</span>
              {!yearly && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500 rounded-full" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn(
                "py-4 px-6 text-center transition-colors relative",
                yearly
                  ? "bg-white text-stone-900"
                  : "bg-stone-50 text-stone-400 hover:text-stone-500"
              )}
            >
              <span className="text-sm font-semibold">{t("landing.pricing.yearly")}</span>
              <span className="ml-2 text-[11px] font-semibold text-orange-500">
                {t("landing.pricing.save50")}
              </span>
              {yearly && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500 rounded-full" />
              )}
            </button>
          </div>

          {/* Price + CTA */}
          <div className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-extrabold text-stone-900 tracking-tight">
                    {yearly ? "$2.50" : "$4.99"}
                  </span>
                  <span className="text-stone-400 text-sm font-medium">{t("landing.pricing.perMonth")}</span>
                </div>
                {yearly && (
                  <p className="mt-1 text-sm text-stone-400">
                    {t("landing.pricing.billedYearly")}
                  </p>
                )}
              </div>
              <Button asChild variant="primary" className="shrink-0">
                <Link href="/onboarding">
                  {t("landing.pricing.tryFreeFirst")}
                </Link>
              </Button>
            </div>

            {/* Features */}
            <div className="mt-6 pt-6 border-t border-stone-100">
              <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-4">
                {t("landing.pricing.features.firstWeekFree")}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-stone-600">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
