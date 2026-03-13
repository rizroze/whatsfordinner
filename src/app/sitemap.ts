import type { MetadataRoute } from "next";
import { getAllMealPlanPages } from "@/data/meal-plans";
import { NON_DEFAULT_LOCALES } from "@/lib/i18n/locales";
import { getSlugForLocale } from "@/data/meal-plans/translations";

const BASE = "https://whatsfordinner.fit";

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];

  const mealPlanPages = getAllMealPlanPages();

  // English meal plan entries (no hreflang alternates — already in page <head> metadata)
  const englishMealPlanEntries: MetadataRoute.Sitemap = mealPlanPages.map(
    (page) => ({
      url: `${BASE}/meal-plans/${page.slug}`,
      lastModified: new Date(page.dateModified),
      changeFrequency: "monthly" as const,
      priority: page.type === "combo" ? 0.7 : 0.8,
    })
  );

  // Localized meal plan entries
  const localizedEntries: MetadataRoute.Sitemap = mealPlanPages.flatMap(
    (page) =>
      NON_DEFAULT_LOCALES.map((locale) => {
        const localizedSlug = getSlugForLocale(page.slug, locale);
        return {
          url: `${BASE}/${locale}/meal-plans/${localizedSlug}`,
          lastModified: new Date(page.dateModified),
          changeFrequency: "monthly" as const,
          priority: page.type === "combo" ? 0.6 : 0.7,
        };
      })
  );

  // Hub pages for each locale
  const hubEntries: MetadataRoute.Sitemap = NON_DEFAULT_LOCALES.map(
    (locale) => ({
      url: `${BASE}/${locale}/meal-plans`,
      lastModified: new Date("2026-03-08"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );

  return [
    {
      url: BASE,
      lastModified: new Date("2026-03-07"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date("2026-03-07"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/meal-plans`,
      lastModified: new Date("2026-03-07"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/onboarding`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.8,
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
    ...blogPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...hubEntries,
    ...englishMealPlanEntries,
    ...localizedEntries,
  ];
}
