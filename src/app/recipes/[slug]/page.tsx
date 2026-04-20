import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllRecipes, getRecipeBySlug } from "@/data/recipes";
import { RecipePage } from "@/components/recipes/RecipePage";
import {
  NON_DEFAULT_LOCALES,
  getLocaleConfig,
  getRecipesPath,
} from "@/lib/i18n/locales";
import { getRecipeSlugForLocale } from "@/data/recipes/translations";

export const revalidate = 86400;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllRecipes().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return {};

  const url = `https://whatsfordinner.fit/recipes/${slug}`;

  // Build hreflang alternates for all locales
  const languages: Record<string, string> = {
    en: url,
    "x-default": url,
  };
  for (const loc of NON_DEFAULT_LOCALES) {
    const config = getLocaleConfig(loc);
    const locSlug = getRecipeSlugForLocale(slug, loc);
    const recipesPath = getRecipesPath(loc);
    languages[config.hreflang] =
      `https://whatsfordinner.fit/${loc}/${recipesPath}/${locSlug}`;
  }

  const title = `${recipe.name} Recipe | What's For Dinner`;
  const description = recipe.description;
  const imageUrl = `https://whatsfordinner.fit/api/og/recipe/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      title,
      description,
      url,
      siteName: "What's For Dinner",
      type: "article",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: recipe.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function RecipeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  // Resolve related recipes (subset of fields for the card)
  const allRecipes = getAllRecipes();
  const relatedRecipes = recipe.relatedSlugs
    .map((rs) => allRecipes.find((r) => r.slug === rs))
    .filter(Boolean)
    .map((r) => ({
      slug: r!.slug,
      name: r!.name,
      emoji: r!.emoji,
      cuisine: r!.cuisine,
      prepTime: r!.prepTime,
      mealType: r!.mealType,
    }));

  return <RecipePage recipe={recipe} relatedRecipes={relatedRecipes} />;
}
