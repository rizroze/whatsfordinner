"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n/context";
import { getTrialDays } from "@/lib/trial";

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
  const { t } = useT();
  const trialDays = getTrialDays();

  const faqs = [
    { question: t("landing.faq.q1"), answer: t("landing.faq.a1") },
    { question: t("landing.faq.q2"), answer: trialDays ? t("landing.faq.a2Trial", { days: trialDays }) : t("landing.faq.a2") },
    { question: t("landing.faq.q3"), answer: t("landing.faq.a3") },
    { question: t("landing.faq.q4"), answer: t("landing.faq.a4") },
    { question: t("landing.faq.q5"), answer: t("landing.faq.a5") },
    { question: t("landing.faq.q6"), answer: t("landing.faq.a6") },
    { question: t("landing.faq.q7"), answer: t("landing.faq.a7") },
  ];

  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          {t("landing.faq.title")}
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg">
          {t("landing.faq.subtitle")}
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
