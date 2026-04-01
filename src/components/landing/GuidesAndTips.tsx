"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/context";

const FEATURED_POSTS = [
  { slug: "best-meal-planning-apps", titleKey: "landing.guides.apps", emoji: "📱" },
  { slug: "yummly-alternative", titleKey: "landing.guides.yummly", emoji: "🔄" },
  { slug: "meal-plan-with-grocery-list", titleKey: "landing.guides.groceryList", emoji: "🛒" },
  { slug: "eating-healthy-on-a-budget", titleKey: "landing.guides.budget", emoji: "🥦" },
  { slug: "meal-planning-vs-doordash", titleKey: "landing.guides.vsDoordash", emoji: "⚖️" },
  { slug: "meal-planning-for-beginners", titleKey: "landing.guides.beginners", emoji: "📋" },
];

export function GuidesAndTips() {
  const { t } = useT();

  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          {t("landing.guides.title")}
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg max-w-xl mx-auto">
          {t("landing.guides.subtitle")}
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-3 px-5 py-4 rounded-2xl bg-white border border-stone-100 hover:border-orange-200 hover:shadow-md transition-all duration-200"
            >
              <span className="text-xl shrink-0 mt-0.5">{post.emoji}</span>
              <span className="text-sm font-medium text-stone-700 group-hover:text-orange-600 transition-colors leading-snug">
                {t(post.titleKey)}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
          >
            {t("landing.guides.readMore")}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
