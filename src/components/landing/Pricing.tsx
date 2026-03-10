"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

import { useT } from "@/lib/i18n/context";

function Check() {
  return (
    <svg
      width="15"
      height="15"
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
  );
}

export function Pricing({ isSignedIn }: { isSignedIn?: boolean }) {
  const { t } = useT();

  const monthlyFeatures = [
    t("landing.pricing.features.sevenDayPlans"),
    t("landing.pricing.features.groceryLists"),
    t("landing.pricing.features.regenerations"),
    t("landing.pricing.features.emailDelivery"),
    t("landing.pricing.features.cancelAnytime"),
  ];

  const yearlyFeatures = [
    t("landing.pricing.features.sevenDayPlans"),
    t("landing.pricing.features.groceryLists"),
    t("landing.pricing.features.regenerations"),
    t("landing.pricing.features.emailDelivery"),
    t("landing.pricing.features.swapMeals"),
    t("landing.pricing.features.learnsYourTaste"),
    t("landing.pricing.features.bestValue"),
    t("landing.pricing.features.inviteFriends"),
    t("landing.pricing.features.prioritySupport"),
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

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {/* Monthly */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide">
                {t("landing.pricing.monthly")}
              </h3>
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-4xl font-extrabold text-stone-900 tracking-tight">$7.99</span>
              <span className="text-stone-400 text-sm">{t("landing.pricing.perMonth")}</span>
            </div>
            <p className="mt-1 text-xs text-stone-400">
              {t("landing.pricing.billedMonthly")}
            </p>

            <ul className="mt-5 space-y-2.5 flex-1">
              {monthlyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-[13px] text-stone-500">
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>

            <Button asChild variant="ghost" className="mt-6 w-full">
              <Link href={isSignedIn ? "/dashboard" : "/onboarding"}>
                {isSignedIn ? t("landing.hero.ctaLoggedIn") : t("landing.pricing.tryFreeFirst")}
              </Link>
            </Button>
          </div>

          {/* Yearly */}
          <div className="bg-white rounded-2xl border border-orange-300 shadow-md ring-1 ring-orange-100 p-6 flex flex-col relative">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide">
                {t("landing.pricing.yearly")}
              </h3>
              <span className="bg-orange-500 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                {t("landing.pricing.save50")}
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-4xl font-extrabold text-stone-900 tracking-tight">$5</span>
              <span className="text-stone-400 text-sm">{t("landing.pricing.perMonth")}</span>
            </div>
            <p className="mt-1 text-xs text-stone-400">
              {t("landing.pricing.billedYearly")}
            </p>

            <ul className="mt-5 space-y-2.5 flex-1">
              {yearlyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-[13px] text-stone-500">
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>

            <Button asChild variant="primary" className="mt-6 w-full">
              <Link href={isSignedIn ? "/dashboard" : "/onboarding"}>
                {isSignedIn ? t("landing.hero.ctaLoggedIn") : t("landing.pricing.tryFreeFirst")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
