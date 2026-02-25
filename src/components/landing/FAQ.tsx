"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does it work?",
    answer:
      "Fill out a quick profile with your dietary preferences, household size, and budget. You'll get a free 1-day meal plan immediately — no credit card required. Love it? Subscribe for full 7-day plans every week.",
  },
  {
    question: "Is the free plan really free?",
    answer:
      "Yes! You get a complete 1-day meal plan with recipes and a grocery list — completely free, no credit card needed. Subscribe to unlock full 7-day plans delivered weekly.",
  },
  {
    question: "Can I customize for allergies and dietary restrictions?",
    answer:
      "Absolutely. You can specify any allergies, intolerances, or dietary preferences (vegetarian, vegan, gluten-free, keto, etc.) during onboarding. Every meal plan is tailored to your needs.",
  },
  {
    question: "What if I don't like the plan?",
    answer:
      "You get up to 2 regenerations per week. If a plan doesn't feel right, just hit regenerate from your dashboard and we'll create a new one based on the same preferences.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, no contracts or commitments. Cancel anytime from your dashboard and you'll retain access through the end of your billing period.",
  },
  {
    question: "What kind of meals are included?",
    answer:
      "A wide variety of home-cooked meals — from quick 20-minute weeknight dinners to more involved weekend recipes. All plans include breakfast, lunch, and dinner with realistic prep times and common ingredients.",
  },
  {
    question: "Is this just for one person?",
    answer:
      "Nope. During setup, you tell us your household size and we adjust portions and grocery quantities accordingly. Works for individuals, couples, or families.",
  },
];

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-stone-100 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-lg px-1"
      >
        <span className="text-base font-medium text-stone-900 pr-4 group-hover:text-orange-600 transition-colors">
          {question}
        </span>
        <span className="shrink-0 text-stone-400 group-hover:text-orange-500 transition-colors">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              "transition-transform duration-200",
              open && "rotate-45"
            )}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          open ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-sm text-stone-500 leading-relaxed px-1">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          Questions & Answers
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg">
          Everything you need to know before getting started.
        </p>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
