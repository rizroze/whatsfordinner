import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Meal Planning Tools | What's For Dinner",
  description:
    "Free meal planning tools: calculate your daily calorie target and get instant dinner ideas. No signup required.",
  keywords: [
    "free meal planning tools",
    "calorie calculator",
    "dinner ideas generator",
  ],
  alternates: {
    canonical: "https://whatsfordinner.fit/tools",
  },
  openGraph: {
    title: "Free Meal Planning Tools | What's For Dinner",
    description:
      "Free meal planning tools: calculate your daily calorie target and get instant dinner ideas.",
    url: "https://whatsfordinner.fit/tools",
    siteName: "What's For Dinner",
    images: [{ url: `/api/og?title=Free%20Meal%20Planning%20Tools%20%E2%80%94%20Calorie%20Calculator%20%26%20More&description=Free%20tools%3A%20calorie%20calculator%2C%20random%20meal%20generator%2C%20dinner%20idea%20quiz.%20No%20signup%20needed.`, width: 1200, height: 630 }],
    type: "website",
  },
};

const tools = [
  {
    title: "Calorie Calculator",
    description:
      "Find your daily calorie target based on your age, weight, height, and activity level. Get personalized recommendations for weight loss, maintenance, or muscle gain.",
    href: "/tools/calorie-calculator",
    emoji: "\uD83D\uDD25",
  },
  {
    title: "Random Meal",
    description:
      "Spin the wheel and get a random meal idea. Filter by cuisine, dietary needs, and cooking time.",
    href: "/tools/dinner-generator",
    emoji: "\uD83C\uDFB2",
  },
  {
    title: "What Should I Cook Tonight?",
    description:
      "Take a fun 4-question quiz to get a personalized dinner recommendation based on your mood, time, dietary needs, and group size.",
    href: "/tools/what-to-cook",
    emoji: "\uD83E\uDD14",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-8 text-center">
        <Link
          href="/"
          className="inline-block text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200 mb-8"
        >
          &larr; Back to home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          Free Meal Planning Tools
        </h1>
        <p className="mt-3 text-stone-500 text-lg max-w-xl mx-auto">
          Helpful tools to make cooking easier. No signup required.
        </p>
      </div>

      {/* Tool cards */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block rounded-2xl border border-stone-200 bg-white p-8 transition-all duration-200 hover:border-orange-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="text-4xl">{tool.emoji}</span>
              <h2 className="mt-4 text-xl font-semibold text-stone-900 group-hover:text-orange-600 transition-colors duration-200">
                {tool.title}
              </h2>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                {tool.description}
              </p>
              <span className="inline-block mt-5 text-sm font-medium text-white bg-orange-500 rounded-full px-5 py-2.5 group-hover:bg-orange-600 transition-colors duration-200">
                Try it free
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-stone-500 text-sm">
            Want a full personalized meal plan with recipes and a grocery list?
          </p>
          <Link
            href="/onboarding"
            className="inline-block mt-3 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors duration-200"
          >
            Get your free 3-day plan &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
