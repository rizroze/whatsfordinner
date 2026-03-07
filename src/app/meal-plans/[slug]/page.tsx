import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllMealPlanPages, getMealPlanBySlug } from "@/data/meal-plans";
import { MealPlanTemplate } from "@/components/meal-plans/MealPlanTemplate";

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

  return {
    title: data.title,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url,
      siteName: "What's For Dinner",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.metaDescription,
    },
  };
}

export default async function MealPlanPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getMealPlanBySlug(slug);
  if (!data) notFound();
  return <MealPlanTemplate data={data} />;
}
