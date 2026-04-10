import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  NON_DEFAULT_LOCALES,
  isValidLocale,
  getLocaleConfig,
} from "@/lib/i18n/locales";

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

  return (
    <div dir={config.dir} lang={locale} className="min-h-screen bg-[#FFFBF5]">
      {children}
    </div>
  );
}
