export const SUPPORTED_LOCALES = [
  "en",
  "es",
  "fr",
  "de",
  "pt",
  "ja",
  "ko",
  "zh",
  "ar",
  "tr",
  "hi",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const NON_DEFAULT_LOCALES = SUPPORTED_LOCALES.filter(
  (l) => l !== DEFAULT_LOCALE
) as Locale[];

type LocaleConfig = {
  name: string;
  dir: "ltr" | "rtl";
  hreflang: string;
  pathSegments: {
    "meal-plans": string;
    blog: string;
    recipes: string;
  };
};

export const LOCALE_CONFIG: Record<Locale, LocaleConfig> = {
  en: {
    name: "English",
    dir: "ltr",
    hreflang: "en",
    pathSegments: { "meal-plans": "meal-plans", blog: "blog", recipes: "recipes" },
  },
  es: {
    name: "Espa\u00f1ol",
    dir: "ltr",
    hreflang: "es",
    // NOTE: values must match the real App Router segments (/[locale]/recipes/…,
    // /[locale]/meal-plans/…). Localized segments were never implemented as routes —
    // using them here shipped canonicals/hreflang/footer links that 404'd for months.
    pathSegments: { "meal-plans": "meal-plans", blog: "blog", recipes: "recipes" },
  },
  fr: {
    name: "Fran\u00e7ais",
    dir: "ltr",
    hreflang: "fr",
    pathSegments: { "meal-plans": "meal-plans", blog: "blog", recipes: "recipes" },
  },
  de: {
    name: "Deutsch",
    dir: "ltr",
    hreflang: "de",
    pathSegments: { "meal-plans": "meal-plans", blog: "blog", recipes: "recipes" },
  },
  pt: {
    name: "Portugu\u00eas",
    dir: "ltr",
    hreflang: "pt",
    pathSegments: { "meal-plans": "meal-plans", blog: "blog", recipes: "recipes" },
  },
  ja: {
    name: "\u65e5\u672c\u8a9e",
    dir: "ltr",
    hreflang: "ja",
    pathSegments: { "meal-plans": "meal-plans", blog: "blog", recipes: "recipes" },
  },
  ko: {
    name: "\ud55c\uad6d\uc5b4",
    dir: "ltr",
    hreflang: "ko",
    pathSegments: { "meal-plans": "meal-plans", blog: "blog", recipes: "recipes" },
  },
  zh: {
    name: "\u4e2d\u6587",
    dir: "ltr",
    hreflang: "zh",
    pathSegments: { "meal-plans": "meal-plans", blog: "blog", recipes: "recipes" },
  },
  ar: {
    name: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
    dir: "rtl",
    hreflang: "ar",
    pathSegments: { "meal-plans": "meal-plans", blog: "blog", recipes: "recipes" },
  },
  tr: {
    name: "T\u00fcrk\u00e7e",
    dir: "ltr",
    hreflang: "tr",
    pathSegments: { "meal-plans": "meal-plans", blog: "blog", recipes: "recipes" },
  },
  hi: {
    name: "\u0939\u093f\u0928\u094d\u0926\u0940",
    dir: "ltr",
    hreflang: "hi",
    pathSegments: { "meal-plans": "meal-plans", blog: "blog", recipes: "recipes" },
  },
};

export function isValidLocale(locale: string): locale is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}

export function getLocaleConfig(locale: string): LocaleConfig {
  if (!isValidLocale(locale)) {
    return LOCALE_CONFIG[DEFAULT_LOCALE];
  }
  return LOCALE_CONFIG[locale];
}

export function getMealPlansPath(locale: string): string {
  return getLocaleConfig(locale).pathSegments["meal-plans"];
}

export function getRecipesPath(locale: string): string {
  return getLocaleConfig(locale).pathSegments.recipes;
}

export function getLocalePath(locale: string, path: string): string {
  const validLocale = isValidLocale(locale) ? locale : DEFAULT_LOCALE;
  const prefix = validLocale === DEFAULT_LOCALE ? "" : `/${validLocale}`;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${prefix}${normalizedPath}`;
}
