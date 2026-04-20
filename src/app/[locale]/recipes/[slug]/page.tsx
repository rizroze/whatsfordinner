import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllRecipes } from "@/data/recipes";
import { RecipePage } from "@/components/recipes/RecipePage";
import { RecipeJsonLd } from "@/components/recipes/RecipeJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import {
  NON_DEFAULT_LOCALES,
  isValidLocale,
  getLocaleConfig,
  getRecipesPath,
} from "@/lib/i18n/locales";
import {
  getTranslatedRecipe,
  getRecipeSlugForLocale,
  getEnglishRecipeSlug,
} from "@/data/recipes/translations";

export const revalidate = 86400; // ISR: revalidate once per day

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const allRecipes = getAllRecipes();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of NON_DEFAULT_LOCALES) {
    for (const recipe of allRecipes) {
      params.push({
        locale,
        slug: getRecipeSlugForLocale(recipe.slug, locale),
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

  const englishSlug = getEnglishRecipeSlug(slug, locale);
  const recipe = getTranslatedRecipe(englishSlug, locale);
  if (!recipe) return {};

  const recipesPath = getRecipesPath(locale);
  const url = `https://whatsfordinner.fit/${locale}/${recipesPath}/${slug}`;

  // Build hreflang alternates for all locales
  const languages: Record<string, string> = {
    en: `https://whatsfordinner.fit/recipes/${englishSlug}`,
    "x-default": `https://whatsfordinner.fit/recipes/${englishSlug}`,
  };
  for (const loc of NON_DEFAULT_LOCALES) {
    const locConfig = getLocaleConfig(loc);
    const locSlug = getRecipeSlugForLocale(englishSlug, loc);
    const locRecipesPath = getRecipesPath(loc);
    languages[locConfig.hreflang] =
      `https://whatsfordinner.fit/${loc}/${locRecipesPath}/${locSlug}`;
  }

  const title = `${recipe.name} | What's For Dinner`;
  const description = recipe.description;
  const imageUrl = `https://whatsfordinner.fit/api/og/recipe/${englishSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "What's For Dinner",
      type: "article",
      locale: getLocaleConfig(locale).hreflang,
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

export default async function LocaleRecipePage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale) || locale === "en") notFound();

  const englishSlug = getEnglishRecipeSlug(slug, locale);
  const recipe = getTranslatedRecipe(englishSlug, locale);
  if (!recipe) notFound();

  // Resolve related recipes with translated names
  const allRecipes = getAllRecipes();
  const relatedRecipes = recipe.relatedSlugs
    .map((rs) => {
      const translated = getTranslatedRecipe(rs, locale);
      if (!translated) return null;
      return {
        slug: getRecipeSlugForLocale(rs, locale),
        name: translated.name,
        emoji: translated.emoji,
        cuisine: translated.cuisine,
        prepTime: translated.prepTime,
        mealType: translated.mealType,
      };
    })
    .filter(Boolean) as {
    slug: string;
    name: string;
    emoji: string;
    cuisine: string;
    prepTime: number;
    mealType: string;
  }[];

  const recipesPath = getRecipesPath(locale);
  const url = `https://whatsfordinner.fit/${locale}/${recipesPath}/${slug}`;

  return (
    <>
      <RecipeJsonLd recipe={recipe} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `https://whatsfordinner.fit/${locale}` },
          {
            name: recipe.name,
            url,
          },
        ]}
      />
      <RecipePage
        recipe={recipe}
        locale={locale}
        relatedRecipes={relatedRecipes}
      />
    </>
  );
}
