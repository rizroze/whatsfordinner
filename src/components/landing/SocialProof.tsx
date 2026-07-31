"use client";

import { useT } from "@/lib/i18n/context";

interface TestimonialProps {
  quote: string;
  author: string;
}

function Testimonial({ quote, author }: TestimonialProps) {
  return (
    <div className="text-center px-2">
      <p className="text-sm sm:text-base text-stone-700 leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-2 text-xs text-stone-400 font-medium">— {author}</p>
    </div>
  );
}

export function SocialProof() {
  const { t } = useT();

  const testimonials: TestimonialProps[] = [
    { quote: t("landing.social.quote1"), author: t("landing.social.quote1Author") },
    { quote: t("landing.social.quote2"), author: t("landing.social.quote2Author") },
    { quote: t("landing.social.quote3"), author: t("landing.social.quote3Author") },
  ];

  return (
    <section className="py-10 sm:py-20 border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Three stacked quotes ate most of a phone screen for content people
            skim. Same swipeable-row pattern as the hero widget's chip rows:
            one card at a time, the next one peeking to signal the swipe, full
            grid restored at sm:. Bleed lives on the wrapper so the fade sits
            flush at the edge instead of scrolling away with the cards. */}
        <div className="relative -mx-6 px-6 sm:mx-0 sm:px-0">
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 sm:grid sm:grid-cols-3 sm:gap-12 sm:overflow-visible">
            {testimonials.map((t, i) => (
              <div key={i} className="w-[85%] shrink-0 snap-center sm:w-auto sm:shrink">
                <Testimonial {...t} />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#FFFBF5] to-transparent sm:hidden" />
        </div>
      </div>
    </section>
  );
}
