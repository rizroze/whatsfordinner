"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useT();

  return (
    <footer className="border-t border-stone-100 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm font-semibold text-stone-800 tracking-tight">
          {t("landing.footer.brand")}
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/blog"
            className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
          >
            {t("landing.footer.blog")}
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
            href="mailto:hello@whatsfordinner.fit"
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
