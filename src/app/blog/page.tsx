import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Meal Planning Tips, Guides & Comparisons",
  description:
    "Meal planning tips, AI-powered cooking guides, and alternatives to popular meal planning services. Learn how to eat better every week.",
  alternates: {
    canonical: "https://whatsfordinner.fit/blog",
  },
  openGraph: {
    title: "Blog — Meal Planning Tips, Guides & Comparisons",
    description:
      "Meal planning tips, AI-powered cooking guides, and alternatives to popular meal planning services.",
    siteName: "What's For Dinner",
  },
};

const posts = [
  {
    slug: "platejoy-alternative",
    title: "The Best PlateJoy Alternative in 2026",
    description:
      "PlateJoy shut down in July 2025. Here's the best replacement for personalized meal plans with grocery lists.",
    category: "Alternatives",
  },
  {
    slug: "yummly-alternative",
    title: "The Best Yummly Alternative in 2026",
    description:
      "Yummly closed in December 2024. Here's where to get AI-powered meal planning now.",
    category: "Alternatives",
  },
  {
    slug: "ai-meal-planner",
    title: "AI Meal Planner: How It Works and Why It's Better",
    description:
      "How AI meal planners create personalized weekly plans and why they're replacing traditional apps.",
    category: "Guides",
  },
  {
    slug: "meal-plan-with-grocery-list",
    title: "Meal Plan with Grocery List: The Complete Solution",
    description:
      "Why a consolidated grocery list is the secret to actually following through on your meal plan.",
    category: "Guides",
  },
  {
    slug: "meal-planning-for-two",
    title: "Meal Planning for Two: No More Waste",
    description:
      "Perfectly portioned plans for couples and roommates. No more throwing away half the groceries.",
    category: "For Couples",
  },
  {
    slug: "hellofresh-alternative-cheap",
    title: "The Best Cheap Alternative to HelloFresh",
    description:
      "Same convenience, 90% less cost. Why you don't need a meal kit to eat well every week.",
    category: "Alternatives",
  },
];

export default function BlogIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-900 mb-2 mt-8">Blog</h1>
      <p className="text-stone-500 mb-10">
        Tips, guides, and comparisons to help you eat better every week.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-2xl border border-stone-100 shadow-md hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col gap-3"
          >
            <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full self-start">
              {post.category}
            </span>
            <h2 className="text-lg font-semibold text-stone-900">
              {post.title}
            </h2>
            <p className="text-sm text-stone-500 flex-1">{post.description}</p>
            <span className="text-sm text-orange-500 font-medium">
              Read more &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
