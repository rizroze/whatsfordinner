"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/context";
import { getLocalePath, getMealPlansPath, getRecipesPath } from "@/lib/i18n/locales";
import { FoodCharacter } from "@/components/ui/FoodCharacter";

export function Footer() {
  const { t, locale } = useT();

  return (
    <footer className="border-t border-stone-100 pt-12 pb-12">
      {/* The crew signing off on their bench — a closing beat above the links. */}
      <FoodCharacter name="bench" className="w-full max-w-3xl mx-auto px-6 mb-10" />

      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm font-semibold text-stone-800 tracking-tight">
          {t("landing.footer.brand")}
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href={getLocalePath(locale, "blog")}
            className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
          >
            {t("landing.footer.blog")}
          </Link>
          <Link
            href={getLocalePath(locale, getMealPlansPath(locale))}
            className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
          >
            {t("landing.footer.mealPlans")}
          </Link>
          <Link
            href={getLocalePath(locale, getRecipesPath(locale))}
            className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
          >
            {t("landing.footer.recipes")}
          </Link>
          <Link
            href="/tools"
            className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
          >
            {t("landing.footer.freeTools")}
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
          >
            {t("landing.footer.privacy")}
          </Link>
          <Link
            href="/terms"
            className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
          >
            {t("landing.footer.terms")}
          </Link>
          <Link
            href="/feedback"
            className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
          >
            {t("landing.footer.contact")}
          </Link>
        </nav>

        <p className="text-xs text-stone-400">
          {t("landing.footer.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
