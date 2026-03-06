"use client";

import { useT } from "@/lib/i18n/context";

interface PlanStatusPageProps {
  status: "not_found" | "generating" | "failed";
}

export function PlanStatusPage({ status }: PlanStatusPageProps) {
  const { t } = useT();

  const title =
    status === "not_found"
      ? t("plan.notFound")
      : status === "generating"
        ? t("plan.stillGenerating")
        : t("plan.failedTitle");

  const desc =
    status === "not_found"
      ? t("plan.notFoundDesc")
      : status === "generating"
        ? t("plan.generatingDesc")
        : t("plan.failedDesc");

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <header className="border-b border-stone-100 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <a
            href="/dashboard"
            className="text-sm text-stone-400 hover:text-orange-500 transition-colors duration-200"
          >
            &larr; {t("plan.backToDashboard")}
          </a>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-xl font-semibold text-stone-700 mb-2">
          {title}
        </h2>
        <p className="text-sm text-stone-500">
          {desc}
        </p>
      </main>
    </div>
  );
}
