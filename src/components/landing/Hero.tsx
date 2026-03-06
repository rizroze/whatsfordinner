"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n/context";


export function Hero({ isSignedIn }: { isSignedIn?: boolean }) {
  const { t } = useT();

  return (
    <section className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 py-24 sm:py-40 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-stone-900 tracking-tight leading-[1.1]">
          {t("landing.hero.title")}
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-2xl font-semibold text-orange-500">
          {t("landing.hero.subtitle")}
        </p>

        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-stone-600 max-w-md mx-auto leading-relaxed">
          {t("landing.hero.description")}
          <br />
          <span className="text-orange-500 font-medium">{t("landing.hero.noCreditCard")}</span>
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4">
          <Link
            href={isSignedIn ? "/dashboard" : "/onboarding"}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
          >
            {isSignedIn ? t("landing.hero.ctaLoggedIn") : t("landing.hero.cta")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          {!isSignedIn && (
            <p className="text-xs sm:text-sm text-stone-500">
              {t("landing.hero.subtext")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
