"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/context";
import { getLocalePath, getRecipesPath } from "@/lib/i18n/locales";

const tools = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-orange-500"
      >
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    title: "Calorie Calculator",
    description:
      "Find your daily calorie target based on your age, activity level, and goals.",
    href: "/tools/calorie-calculator",
    cta: "Calculate Now",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-orange-500"
      >
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Random Meal",
    description:
      "Spin the wheel. Get a random meal idea filtered by cuisine, diet, and time.",
    href: "/tools/dinner-generator",
    cta: "Pick a Random Meal",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-orange-500"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r="0.5" fill="currentColor" />
      </svg>
    ),
    title: "What Should I Cook?",
    description:
      "Take a quick 4-question quiz and get a personalized dinner pick.",
    href: "/tools/what-to-cook",
    cta: "Take the Quiz",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-orange-500"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8" />
        <path d="M8 11h6" />
      </svg>
    ),
    title: "Recipe Library",
    description:
      "Browse 800+ recipes. Filter by meal type, diet, and tags.",
    href: "__RECIPES__",
    cta: "Browse Recipes",
  },
];

export function FreeTools() {
  const { locale } = useT();
  const recipesHref = getLocalePath(locale, getRecipesPath(locale));

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-stone-900">
          Free Planning Tools
        </h2>
        <p className="text-stone-500 mt-2">
          No signup needed. Use them right now.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tools.map((tool) => {
          const href = tool.href === "__RECIPES__" ? recipesHref : tool.href;
          return (
            <Link
              key={tool.href}
              href={href}
              className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
            >
              <div className="mb-4">{tool.icon}</div>
              <h3 className="text-lg font-semibold text-stone-900 mb-1">
                {tool.title}
              </h3>
              <p className="text-sm text-stone-500 mb-5 flex-1">
                {tool.description}
              </p>
              <span className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-orange-500 rounded-full w-fit">
                {tool.cta} &rarr;
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
