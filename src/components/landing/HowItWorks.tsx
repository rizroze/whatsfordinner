"use client";

import { useT } from "@/lib/i18n/context";
import { FoodCharacter } from "@/components/ui/FoodCharacter";

export function HowItWorks() {
  const { t } = useT();

  const steps = [
    {
      number: 1,
      title: t("landing.howItWorks.step1Title"),
      description: t("landing.howItWorks.step1Desc"),
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-orange-500"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      number: 2,
      title: t("landing.howItWorks.step2Title"),
      description: t("landing.howItWorks.step2Desc"),
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-orange-500"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      number: 3,
      title: t("landing.howItWorks.step3Title"),
      description: t("landing.howItWorks.step3Desc"),
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-orange-500"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          {t("landing.howItWorks.title")}
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg max-w-xl mx-auto">
          {t("landing.howItWorks.subtitle")}
        </p>

        {/* The crew doing the shopping — this section is literally about
            gathering the week's groceries, so the cart art belongs here. */}
        {/* Tight margins on purpose: the render carries its own transparent
            glow padding, so normal section spacing reads as a dead gap. */}
        <FoodCharacter name="cart" className="mt-2 w-full max-w-2xl mx-auto" />

        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Number + Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 text-sm font-bold shrink-0">
                  {step.number}
                </div>
                <div className="shrink-0">{step.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
