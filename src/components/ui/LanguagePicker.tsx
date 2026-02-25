"use client";

import { useState, useRef, useEffect } from "react";
import { useT, LANGUAGES, type Locale } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

// Short display labels for the dropdown
const LANG_FLAGS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  fr: "FR",
  de: "DE",
  pt: "PT",
  ja: "JA",
  ko: "KO",
  zh: "ZH",
  ar: "AR",
  tr: "TR",
  hi: "HI",
};

export function LanguagePicker() {
  const { locale, setLocale } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full",
          "text-xs font-medium text-stone-500 hover:text-stone-700",
          "border border-stone-200 hover:border-orange-300 bg-white",
          "transition-all duration-200"
        )}
        aria-label="Change language"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        {LANG_FLAGS[locale]}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-stone-200 rounded-xl shadow-lg py-1 z-50 min-w-[140px] max-h-[280px] overflow-y-auto">
          {(Object.entries(LANGUAGES) as [Locale, string][]).map(([code, name]) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setLocale(code);
                setOpen(false);
              }}
              className={cn(
                "w-full text-left px-3 py-1.5 text-xs transition-colors",
                code === locale
                  ? "bg-orange-50 text-orange-700 font-medium"
                  : "text-stone-600 hover:bg-stone-50"
              )}
            >
              <span className="font-medium mr-2">{LANG_FLAGS[code]}</span>
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
