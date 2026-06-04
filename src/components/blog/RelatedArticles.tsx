"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ARTICLES = [
  {
    slug: "best-meal-planning-apps",
    title: "Best Meal Planning Apps in 2026",
    desc: "Every app tested and ranked — free options, AI planners, and what actually works.",
  },
  {
    slug: "weekly-meal-plan",
    title: "Weekly Meal Plan: Plan Your Whole Week in 10 Minutes",
    desc: "A simple system that actually sticks, with a grocery list built in.",
  },
  {
    slug: "eating-healthy-on-a-budget",
    title: "Eating Healthy on a Budget: The $50/Week Plan",
    desc: "Real food, real meals, without spending Whole Foods money.",
  },
  {
    slug: "meal-planning-for-beginners",
    title: "Meal Planning for Beginners: 5-Step Guide",
    desc: "Start this week. Save 2.5 hours and $50–100 per week.",
  },
  {
    slug: "adhd-meal-planning",
    title: "ADHD Meal Planning: A System That Actually Works",
    desc: "Low-decision meals and flexible structure — no guilt when plans change.",
  },
  {
    slug: "i-hate-cooking",
    title: "I Hate Cooking (But I Still Need to Eat)",
    desc: "A system for people who genuinely dislike being in the kitchen.",
  },
  {
    slug: "30-minute-dinners",
    title: "20 Easy 30-Minute Dinners That Don't Taste Like Shortcuts",
    desc: "Real flavor, actually done in 30 minutes. One-pan, pasta, stir-fry.",
  },
  {
    slug: "cheap-meals-for-one",
    title: "Cheap Meals for One: 15 Dinners Under $3/Serving",
    desc: "Eating alone doesn't mean eating sad.",
  },
  {
    slug: "meal-planning-for-families",
    title: "Meal Planning for Families: Feed 4 for Under $100/Week",
    desc: "Balanced meals kids will actually eat, one grocery trip.",
  },
  {
    slug: "how-to-stop-ordering-takeout",
    title: "How to Stop Ordering Takeout Every Night",
    desc: "The system that saves $200+/month and actually sticks.",
  },
  {
    slug: "high-protein-meals-on-a-budget",
    title: "High-Protein Meals on a Budget: 15 Dinners Under $4",
    desc: "Hit 30g+ protein per meal without expensive salmon.",
  },
  {
    slug: "dinner-ideas-tonight",
    title: "What Should I Make for Dinner? 20 Ideas Based on What You Have",
    desc: "It's 6pm. Here are meals organized by what's in your fridge.",
  },
  {
    slug: "meal-planning-in-your-20s",
    title: "Meal Planning in Your 20s: Stop Spending $300/Month on DoorDash",
    desc: "Simple system, $50–75/week groceries, zero cooking skills needed.",
  },
  {
    slug: "cooking-for-one-without-wasting-food",
    title: "Cooking for One Without Wasting Half Your Groceries",
    desc: "Recipes serve 4. Your produce goes bad by Wednesday. Here's the fix.",
  },
  {
    slug: "eating-well-when-youre-struggling",
    title: "How to Eat Well When You're Going Through It",
    desc: "Low-effort meals that take care of you when you can't take care of yourself.",
  },
];

export function RelatedArticles() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop() ?? "";

  const others = ARTICLES.filter((a) => a.slug !== currentSlug);

  // Pick 3 deterministically based on current slug position
  const startIndex = ARTICLES.findIndex((a) => a.slug === currentSlug);
  const offset = startIndex === -1 ? 0 : startIndex % others.length;
  const picks = [
    others[offset % others.length],
    others[(offset + 1) % others.length],
    others[(offset + 2) % others.length],
  ];

  return (
    <section className="mt-16 pt-10 border-t border-stone-100">
      <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-6">
        Keep reading
      </h2>
      <div className="space-y-4">
        {picks.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex items-start justify-between gap-4 py-4 border-b border-stone-100 last:border-0 hover:border-stone-200 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-stone-800 group-hover:text-orange-600 transition-colors leading-snug mb-1">
                {article.title}
              </p>
              <p className="text-xs text-stone-400 leading-relaxed line-clamp-2">
                {article.desc}
              </p>
            </div>
            <span className="flex-shrink-0 text-stone-300 group-hover:text-orange-400 transition-colors mt-0.5">
              →
            </span>
          </Link>
        ))}
      </div>
      <Link
        href="/blog"
        className="inline-block mt-6 text-xs font-medium text-orange-500 hover:text-orange-600 transition-colors"
      >
        View all articles →
      </Link>
    </section>
  );
}
