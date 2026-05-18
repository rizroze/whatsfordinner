import { getAllMealPlanPages } from "@/data/meal-plans";
import { getAllRecipes } from "@/data/recipes";
import { NON_DEFAULT_LOCALES } from "@/lib/i18n/locales";
import { getSlugForLocale } from "@/data/meal-plans/translations";
import {
  getRecipeSlugForLocale,
  getAllTranslatedRecipeSlugs,
} from "@/data/recipes/translations";
import {
  getTranslatedBlogSlugs,
  getBlogSlugForLocale,
} from "@/data/blog/translations/content";

// Route Handler instead of Next.js metadata sitemap.ts — gives us explicit control
// over response headers. sitemap.ts adds `vary: rsc, next-router-state-tree, ...`
// headers which cause Vercel's edge to maintain separate cache variants per RSC
// header combination; Google's sitemap crawler may hit a cold/wrong variant.
export const dynamic = "force-static";

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

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function url(
  loc: string,
  lastmod: string,
  changefreq: string,
  priority: number
) {
  return `<url><loc>${escapeXml(loc)}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority.toFixed(1)}</priority></url>`;
}

function toDate(d: string | Date) {
  return new Date(d).toISOString().split("T")[0];
}

export async function GET() {
  const mealPlanPages = getAllMealPlanPages();
  const recipes = getAllRecipes();
  const translatedBlogSlugs = getTranslatedBlogSlugs();

  const entries: string[] = [];

  // Static pages
  entries.push(url(BASE, "2026-03-18", "weekly", 1.0));
  entries.push(url(`${BASE}/blog`, "2026-03-18", "weekly", 0.9));
  entries.push(url(`${BASE}/meal-plans`, "2026-03-18", "weekly", 0.9));
  entries.push(url(`${BASE}/pricing`, "2026-03-18", "monthly", 0.9));
  entries.push(url(`${BASE}/tools`, "2026-04-01", "monthly", 0.8));
  entries.push(url(`${BASE}/tools/calorie-calculator`, "2026-04-01", "monthly", 0.8));
  entries.push(url(`${BASE}/tools/dinner-generator`, "2026-04-01", "monthly", 0.8));
  entries.push(url(`${BASE}/tools/what-to-cook`, "2026-04-13", "monthly", 0.8));
  entries.push(url(`${BASE}/recipes`, "2026-04-13", "weekly", 0.9));
  entries.push(url(`${BASE}/privacy`, "2026-01-01", "yearly", 0.3));
  entries.push(url(`${BASE}/terms`, "2026-01-01", "yearly", 0.3));

  // Blog posts
  for (const post of blogPosts) {
    entries.push(url(`${BASE}/blog/${post.slug}`, post.date, "monthly", 0.8));
  }

  // English meal plan pages
  for (const page of mealPlanPages) {
    entries.push(
      url(
        `${BASE}/meal-plans/${page.slug}`,
        toDate(page.dateModified),
        "monthly",
        page.type === "combo" ? 0.7 : 0.8
      )
    );
  }

  // English recipe pages
  for (const recipe of recipes) {
    entries.push(
      url(
        `${BASE}/recipes/${recipe.slug}`,
        toDate(recipe.dateModified),
        "monthly",
        0.8
      )
    );
  }

  // Localized pages
  for (const locale of NON_DEFAULT_LOCALES) {
    entries.push(
      url(`${BASE}/${locale}/meal-plans`, "2026-03-08", "weekly", 0.8)
    );

    for (const page of mealPlanPages) {
      entries.push(
        url(
          `${BASE}/${locale}/meal-plans/${getSlugForLocale(page.slug, locale)}`,
          toDate(page.dateModified),
          "monthly",
          page.type === "combo" ? 0.6 : 0.7
        )
      );
    }

    for (const englishSlug of translatedBlogSlugs) {
      entries.push(
        url(
          `${BASE}/${locale}/blog/${getBlogSlugForLocale(englishSlug, locale)}`,
          "2026-04-01",
          "monthly",
          0.7
        )
      );
    }

    const translatedSlugs = new Set(getAllTranslatedRecipeSlugs(locale));
    for (const recipe of recipes) {
      const localizedSlug = getRecipeSlugForLocale(recipe.slug, locale);
      if (!translatedSlugs.has(localizedSlug)) continue;
      entries.push(
        url(
          `${BASE}/${locale}/recipes/${localizedSlug}`,
          toDate(recipe.dateModified),
          "monthly",
          0.7
        )
      );
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join("")}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
