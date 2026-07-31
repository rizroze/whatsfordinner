"use client";

import { useT } from "@/lib/i18n/context";

/**
 * Three verifiable facts about the product, not customer quotes.
 *
 * This section used to carry three invented testimonials ("Sarah, family of
 * 3"). With a handful of real users, attributed quotes — and especially star
 * ratings on top of them — are fabricated endorsements, which is both a trust
 * problem and, for a paid product, a legal one. Usage counters aren't a clean
 * substitute either: /api/stats seeds mealsPlanned with +100 and multiplies
 * plans by an estimated 15, so it isn't a number worth building a claim on.
 *
 * Every figure here is checkable against the codebase: 250 entries in the
 * recipe library, 11 non-English locales in lib/i18n/locales.ts, and the
 * generation time the hero already promises. Swap these for real quotes the
 * moment real customers say something worth quoting.
 */

interface ProofProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

function ProofItem({ value, label, icon }: ProofProps) {
  return (
    <div className="text-center px-2">
      <div className="flex justify-center text-orange-500 mb-2.5">{icon}</div>
      <p className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
        {value}
      </p>
      <p className="mt-1.5 text-xs sm:text-sm text-stone-500 leading-relaxed">
        {label}
      </p>
    </div>
  );
}

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function SocialProof() {
  const { t } = useT();

  const items: ProofProps[] = [
    {
      value: t("landing.social.proofRecipesValue"),
      label: t("landing.social.proofRecipesLabel"),
      icon: (
        <svg {...iconProps}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M8 7h8" />
          <path d="M8 11h6" />
        </svg>
      ),
    },
    {
      value: t("landing.social.proofLanguagesValue"),
      label: t("landing.social.proofLanguagesLabel"),
      icon: (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      value: t("landing.social.proofSpeedValue"),
      label: t("landing.social.proofSpeedLabel"),
      icon: (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 sm:py-20 border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Three stacked items ate most of a phone screen for content people
            skim. Same swipeable-row pattern as the hero widget's chip rows:
            one card at a time, the next one peeking to signal the swipe, full
            grid restored at sm:. Bleed lives on the wrapper so the fade sits
            flush at the edge instead of scrolling away with the cards. */}
        <div className="relative -mx-6 px-6 sm:mx-0 sm:px-0">
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 sm:grid sm:grid-cols-3 sm:gap-12 sm:overflow-visible">
            {items.map((item, i) => (
              <div key={i} className="w-[85%] shrink-0 snap-center sm:w-auto sm:shrink">
                <ProofItem {...item} />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#FFFBF5] to-transparent sm:hidden" />
        </div>
      </div>
    </section>
  );
}
