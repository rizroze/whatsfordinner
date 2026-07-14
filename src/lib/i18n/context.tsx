"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import en from "./translations/en.json";

// Supported languages
export const LANGUAGES = {
  en: "English",
  es: "Espanol",
  fr: "Francais",
  de: "Deutsch",
  pt: "Portugues",
  ja: "Japanese",
  ko: "Korean",
  zh: "Chinese",
  ar: "Arabic",
  tr: "Turkce",
  hi: "Hindi",
} as const;

export type Locale = keyof typeof LANGUAGES;

type TranslationDict = Record<string, string>;

// Flatten nested JSON to dot-notation keys
// { "landing": { "hero": { "title": "..." } } } → { "landing.hero.title": "..." }
function flatten(obj: Record<string, unknown>, prefix = ""): TranslationDict {
  const result: TranslationDict = {};
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const val = obj[key];
    if (typeof val === "string") {
      result[fullKey] = val;
    } else if (typeof val === "object" && val !== null) {
      Object.assign(result, flatten(val as Record<string, unknown>, fullKey));
    }
  }
  return result;
}

const enFlat = flatten(en);

// Lazy-loaded translation cache
const translationCache: Partial<Record<Locale, TranslationDict>> = { en: enFlat };

async function loadTranslation(locale: Locale): Promise<TranslationDict> {
  if (translationCache[locale]) return translationCache[locale]!;

  try {
    // Dynamic import for code splitting — only loads the language you need
    const mod = await import(`./translations/${locale}.json`);
    const flat = flatten(mod.default);
    translationCache[locale] = flat;
    return flat;
  } catch {
    console.warn(`Translation for "${locale}" not found, falling back to English`);
    return enFlat;
  }
}

function detectLocale(): Locale {
  if (typeof window !== "undefined") {
    // Check URL path for locale prefix (e.g., /tr/, /es/)
    const pathSegment = window.location.pathname.split("/").filter(Boolean)[0];
    if (pathSegment && pathSegment in LANGUAGES && pathSegment !== "en") {
      const pathLocale = pathSegment as Locale;
      localStorage.setItem("wfd_lang", pathLocale);
      return pathLocale;
    }

    // Root path "/" is always English — don't fall through to localStorage
    if (window.location.pathname === "/") {
      return "en";
    }

    // Check URL param (from translated pSEO pages like /onboarding?lang=tr)
    const urlLang = new URLSearchParams(window.location.search).get("lang") as Locale;
    if (urlLang && urlLang in LANGUAGES) {
      localStorage.setItem("wfd_lang", urlLang);
      return urlLang;
    }

    // Check localStorage (user's explicit choice — for non-locale pages like /onboarding)
    const saved = localStorage.getItem("wfd_lang") as Locale;
    if (saved && saved in LANGUAGES) return saved;
  }

  // Auto-detect from browser
  if (typeof navigator !== "undefined") {
    const browserLang = navigator.language.split("-")[0] as Locale;
    if (browserLang in LANGUAGES) return browserLang;
  }

  return "en";
}

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  ready: boolean;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
  ready: false,
});

interface I18nProviderProps {
  children: ReactNode;
  /** Server-provided locale + nested dict: makes the FIRST render (including
   *  SSR/SSG HTML) fully localized instead of English-until-hydration.
   *  The [locale] layout nests a seeded provider around its subtree. */
  initialLocale?: Locale;
  initialDict?: Record<string, unknown>;
}

export function I18nProvider({ children, initialLocale, initialDict }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? "en");
  const [dict, setDict] = useState<TranslationDict>(() => {
    if (initialLocale && initialDict) {
      const flat = flatten(initialDict);
      translationCache[initialLocale] = flat;
      return flat;
    }
    return enFlat;
  });
  const [ready, setReady] = useState(!!initialLocale);
  const pathname = usePathname();

  // Detect locale on mount and when pathname changes (e.g. navigating /tr → /es)
  useEffect(() => {
    const detected = detectLocale();
    if (detected !== locale || !ready) {
      setLocaleState(detected);
      loadTranslation(detected).then((d) => {
        setDict(d);
        setReady(true);
      });
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("wfd_lang", newLocale);
    loadTranslation(newLocale).then(setDict);

    // Set html lang attribute for accessibility
    document.documentElement.lang = newLocale;
    // Set RTL for Arabic
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
  }, []);

  // Translation function with variable interpolation
  const t = useCallback(
    (key: string, vars?: Record<string, string | number>): string => {
      let text = dict[key] || enFlat[key] || key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          text = text.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
        }
      }
      return text;
    },
    [dict]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, ready }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useT() {
  return useContext(I18nContext);
}
