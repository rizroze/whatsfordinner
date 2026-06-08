import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllMealPlanPages } from "@/data/meal-plans";
import { MealPlanTemplate } from "@/components/meal-plans/MealPlanTemplate";
import {
  NON_DEFAULT_LOCALES,
  isValidLocale,
  getLocaleConfig,
} from "@/lib/i18n/locales";
import {
  getTranslatedMealPlan,
  getSlugForLocale,
  getEnglishSlug,
} from "@/data/meal-plans/translations";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const allPages = getAllMealPlanPages();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of NON_DEFAULT_LOCALES) {
    for (const page of allPages) {
      params.push({
        locale,
        slug: getSlugForLocale(page.slug, locale),
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};

  const englishSlug = getEnglishSlug(slug, locale);
  const data = getTranslatedMealPlan(englishSlug, locale);
  if (!data) return {};

  const url = `https://whatsfordinner.fit/${locale}/meal-plans/${slug}`;

  // Build hreflang alternates for all locales
  const languages: Record<string, string> = {
    en: `https://whatsfordinner.fit/meal-plans/${englishSlug}`,
    "x-default": `https://whatsfordinner.fit/meal-plans/${englishSlug}`,
  };
  for (const loc of NON_DEFAULT_LOCALES) {
    const locConfig = getLocaleConfig(loc);
    const locSlug = getSlugForLocale(englishSlug, loc);
    languages[locConfig.hreflang] =
      `https://whatsfordinner.fit/${loc}/meal-plans/${locSlug}`;
  }

  return {
    title: data.title,
    description: data.metaDescription,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url,
      siteName: "What's For Dinner",
      type: "article",
      locale: getLocaleConfig(locale).hreflang,
      images: [{ url: `/api/og?title=${encodeURIComponent(data.title)}&description=${encodeURIComponent(data.metaDescription)}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.metaDescription,
      images: [`/api/og?title=${encodeURIComponent(data.title)}&description=${encodeURIComponent(data.metaDescription)}`],
    },
  };
}

export default async function LocaleMealPlanPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale) || locale === "en") notFound();

  const englishSlug = getEnglishSlug(slug, locale);
  const data = getTranslatedMealPlan(englishSlug, locale);
  if (!data) notFound();

  return <MealPlanTemplate data={data} locale={locale} />;
}
