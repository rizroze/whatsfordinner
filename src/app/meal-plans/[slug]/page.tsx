import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllMealPlanPages, getMealPlanBySlug } from "@/data/meal-plans";
import { MealPlanTemplate } from "@/components/meal-plans/MealPlanTemplate";
import {
  NON_DEFAULT_LOCALES,
  getLocaleConfig,
} from "@/lib/i18n/locales";
import { getSlugForLocale } from "@/data/meal-plans/translations";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllMealPlanPages().map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getMealPlanBySlug(slug);
  if (!data) return {};

  const url = `https://whatsfordinner.fit/meal-plans/${slug}`;

  // Build hreflang alternates for all locales
  const languages: Record<string, string> = {
    en: url,
    "x-default": url,
  };
  for (const loc of NON_DEFAULT_LOCALES) {
    const config = getLocaleConfig(loc);
    const locSlug = getSlugForLocale(slug, loc);
    languages[config.hreflang] =
      `https://whatsfordinner.fit/${loc}/meal-plans/${locSlug}`;
  }

  return {
    title: data.title,
    description: data.metaDescription,
    alternates: { canonical: url, languages },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url,
      siteName: "What's For Dinner",
      type: "article",
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(data.title)}&description=${encodeURIComponent(data.metaDescription)}`,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.metaDescription,
      images: [`/api/og?title=${encodeURIComponent(data.title)}&description=${encodeURIComponent(data.metaDescription)}`],
    },
  };
}

export default async function MealPlanPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getMealPlanBySlug(slug);
  if (!data) notFound();
  return <MealPlanTemplate data={data} />;
}
