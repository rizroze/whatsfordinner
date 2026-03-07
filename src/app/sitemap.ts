import type { MetadataRoute } from "next";
import { getAllMealPlanPages } from "@/data/meal-plans";

const BASE = "https://whatsfordinner.fit";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = [
    { slug: "platejoy-alternative", date: "2026-02-15" },
    { slug: "yummly-alternative", date: "2026-02-15" },
    { slug: "ai-meal-planner", date: "2026-02-20" },
    { slug: "meal-plan-with-grocery-list", date: "2026-02-20" },
    { slug: "meal-planning-for-two", date: "2026-02-25" },
    { slug: "hellofresh-alternative-cheap", date: "2026-02-25" },
  ];

  const mealPlanPages = getAllMealPlanPages();

  return [
    { url: BASE, lastModified: new Date("2026-03-07"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: new Date("2026-03-07"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/meal-plans`, lastModified: new Date("2026-03-07"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/onboarding`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/login`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/signup`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/privacy`, lastModified: new Date("2026-01-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: new Date("2026-01-01"), changeFrequency: "yearly", priority: 0.3 },
    ...blogPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...mealPlanPages.map((page) => ({
      url: `${BASE}/meal-plans/${page.slug}`,
      lastModified: new Date(page.dateModified),
      changeFrequency: "monthly" as const,
      priority: page.type === "combo" ? 0.7 : 0.8,
    })),
  ];
}
