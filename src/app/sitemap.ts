import type { MetadataRoute } from "next";
import { getAllMealPlanPages } from "@/data/meal-plans";
import { getAllRecipes } from "@/data/recipes";
import { NON_DEFAULT_LOCALES } from "@/lib/i18n/locales";
import { getSlugForLocale } from "@/data/meal-plans/translations";
import { getRecipeSlugForLocale } from "@/data/recipes/translations";
import {
  getTranslatedBlogSlugs,
  getBlogSlugForLocale,
} from "@/data/blog/translations/content";

const BASE = "https://whatsfordinner.fit";

const blogPosts = [
  { slug: "platejoy-alternative", date: "2026-02-15" },
  { slug: "yummly-alternative", date: "2026-02-15" },
  { slug: "ai-meal-planner", date: "2026-02-20" },
  { slug: "meal-plan-with-grocery-list", date: "2026-02-20" },
  { slug: "meal-planning-for-two", date: "2026-02-25" },
  { slug: "hellofresh-alternative-cheap", date: "2026-02-25" },
  { slug: "eat-this-much-alternative", date: "2026-03-07" },
  { slug: "mealime-alternative", date: "2026-03-07" },
  { slug: "emeals-alternative", date: "2026-03-07" },
  { slug: "plan-to-eat-alternative", date: "2026-03-07" },
  { slug: "prepear-alternative", date: "2026-03-07" },
  { slug: "paprika-alternative", date: "2026-03-07" },
  { slug: "budget-bytes-alternative", date: "2026-03-07" },
  { slug: "cooklist-alternative", date: "2026-03-07" },
  { slug: "best-meal-planning-apps", date: "2026-03-07" },
  { slug: "meal-planning-for-beginners", date: "2026-03-07" },
  { slug: "how-to-meal-prep", date: "2026-03-07" },
  { slug: "save-money-groceries-meal-planning", date: "2026-03-07" },
  { slug: "weekly-meal-plan", date: "2026-03-13" },
  { slug: "best-meal-kit-alternatives", date: "2026-03-13" },
  { slug: "meal-planning-for-families", date: "2026-03-13" },
  { slug: "meal-planning-in-your-20s", date: "2026-03-13" },
  { slug: "cheap-meals-for-one", date: "2026-03-13" },
  { slug: "how-to-stop-ordering-takeout", date: "2026-03-13" },
  { slug: "factor-alternative", date: "2026-03-13" },
  { slug: "home-chef-alternative", date: "2026-03-13" },
  { slug: "everyplate-alternative", date: "2026-03-13" },
  { slug: "dinnerly-alternative", date: "2026-03-13" },
  { slug: "hungryroot-alternative", date: "2026-03-13" },
  { slug: "eating-well-when-youre-struggling", date: "2026-03-13" },
  { slug: "adhd-meal-planning", date: "2026-03-13" },
  { slug: "eating-healthy-on-a-budget", date: "2026-03-13" },
  { slug: "easy-meal-prep-for-beginners", date: "2026-03-13" },
  { slug: "upgrade-your-ramen", date: "2026-03-13" },
  { slug: "first-grocery-shopping-list", date: "2026-03-13" },
  { slug: "doordash-vs-cooking", date: "2026-03-13" },
  { slug: "meal-planning-for-college", date: "2026-03-13" },
  { slug: "food-budget-in-your-20s", date: "2026-03-13" },
  { slug: "best-meal-delivery-alternatives", date: "2026-03-13" },
  { slug: "best-grocery-list-apps", date: "2026-03-13" },
  { slug: "best-budget-meal-plans", date: "2026-03-13" },
  { slug: "what-to-cook-when-you-have-nothing", date: "2026-03-13" },
  { slug: "cooking-for-one-without-wasting-food", date: "2026-03-13" },
  { slug: "i-hate-cooking", date: "2026-03-13" },
  { slug: "groceries-keep-going-bad", date: "2026-03-13" },
  { slug: "cooking-for-your-partner", date: "2026-03-13" },
  { slug: "splitting-groceries-with-roommates", date: "2026-03-13" },
  { slug: "meal-planning-after-moving-out", date: "2026-03-13" },
  { slug: "meal-kits-vs-meal-planning", date: "2026-03-13" },
  { slug: "ai-vs-traditional-meal-planning", date: "2026-03-13" },
  { slug: "meal-planning-vs-doordash", date: "2026-03-13" },
  { slug: "meal-planning-vs-meal-prep", date: "2026-03-13" },
  { slug: "5-ingredient-meals", date: "2026-03-18" },
  { slug: "30-minute-dinners", date: "2026-03-18" },
  { slug: "dinner-ideas-tonight", date: "2026-03-18" },
  { slug: "grocery-list-template", date: "2026-03-18" },
  { slug: "healthy-meal-plan-for-the-week", date: "2026-03-18" },
  { slug: "high-protein-meals-on-a-budget", date: "2026-03-18" },
  { slug: "how-to-start-meal-planning", date: "2026-03-18" },
  { slug: "meal-prep-for-weight-loss", date: "2026-03-18" },
  { slug: "best-meal-planners-2026", date: "2026-04-13" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mealPlanPages = getAllMealPlanPages();
  const recipes = getAllRecipes();
  const translatedBlogSlugs = getTranslatedBlogSlugs();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/meal-plans`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/pricing`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/onboarding`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/tools`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/tools/calorie-calculator`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/tools/dinner-generator`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/tools/what-to-cook`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/recipes`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/login`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE}/signup`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Blog posts
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // English meal plan pages
  const mealPlanEntries: MetadataRoute.Sitemap = mealPlanPages.map((page) => ({
    url: `${BASE}/meal-plans/${page.slug}`,
    lastModified: new Date(page.dateModified),
    changeFrequency: "monthly",
    priority: page.type === "combo" ? 0.7 : 0.8,
  }));

  // English recipe pages
  const recipeEntries: MetadataRoute.Sitemap = recipes.map((recipe) => ({
    url: `${BASE}/recipes/${recipe.slug}`,
    lastModified: new Date(recipe.dateModified),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Localized pages (all locales)
  const localizedEntries: MetadataRoute.Sitemap = NON_DEFAULT_LOCALES.flatMap(
    (locale) => {
      const hub = {
        url: `${BASE}/${locale}/meal-plans`,
        lastModified: new Date("2026-03-08"),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      };

      const mealPlans = mealPlanPages.map((page) => ({
        url: `${BASE}/${locale}/meal-plans/${getSlugForLocale(page.slug, locale)}`,
        lastModified: new Date(page.dateModified),
        changeFrequency: "monthly" as const,
        priority: page.type === "combo" ? 0.6 : 0.7,
      }));

      const blogs = translatedBlogSlugs.map((englishSlug) => ({
        url: `${BASE}/${locale}/blog/${getBlogSlugForLocale(englishSlug, locale)}`,
        lastModified: new Date("2026-04-01"),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));

      const localizedRecipes = recipes.map((recipe) => ({
        url: `${BASE}/${locale}/recipes/${getRecipeSlugForLocale(recipe.slug, locale)}`,
        lastModified: new Date(recipe.dateModified),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));

      return [hub, ...mealPlans, ...blogs, ...localizedRecipes];
    }
  );

  return [
    ...staticPages,
    ...blogEntries,
    ...mealPlanEntries,
    ...recipeEntries,
    ...localizedEntries,
  ];
}
