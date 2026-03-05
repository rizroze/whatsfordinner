import type { MetadataRoute } from "next";

const BASE = "https://whatsfordinner.fit";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = [
    "platejoy-alternative",
    "yummly-alternative",
    "ai-meal-planner",
    "meal-plan-with-grocery-list",
    "meal-planning-for-two",
    "hellofresh-alternative-cheap",
  ];

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/onboarding`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/login`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/signup`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...blogPosts.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
