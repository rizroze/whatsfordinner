import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  NON_DEFAULT_LOCALES,
  isValidLocale,
  getLocaleConfig,
} from "@/lib/i18n/locales";
import { I18nProvider, type Locale } from "@/lib/i18n/context";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};

  const config = getLocaleConfig(locale);

  return {
    openGraph: {
      locale: config.hreflang,
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  // Only non-default locales use this layout; English uses the unprefixed routes
  if (
    !isValidLocale(locale) ||
    !(NON_DEFAULT_LOCALES as readonly string[]).includes(locale)
  ) {
    notFound();
  }

  const config = getLocaleConfig(locale);

  // Load the locale dict server-side so the static HTML for /es, /ja, … is
  // fully translated (crawlers previously saw English until hydration).
  const dict = (await import(`@/lib/i18n/translations/${locale}.json`)).default;

  return (
    <I18nProvider initialLocale={locale as Locale} initialDict={dict}>
      <div dir={config.dir} lang={locale} className="min-h-screen bg-[#FFFBF5]">
        {children}
      </div>
    </I18nProvider>
  );
}
