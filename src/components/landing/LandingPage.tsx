"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PlanPreview } from "@/components/landing/PlanPreview";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FreeTools } from "@/components/landing/FreeTools";
import { PopularMealPlans } from "@/components/landing/PopularMealPlans";
import { GuidesAndTips } from "@/components/landing/GuidesAndTips";
import { Footer } from "@/components/landing/Footer";
import { ExitIntentPopup } from "@/components/landing/ExitIntentPopup";
import { LanguagePicker } from "@/components/ui/LanguagePicker";
import { useT } from "@/lib/i18n/context";
import { createClient } from "@/lib/supabase/client";

export function LandingPage() {
  const { t } = useT();
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setIsSignedIn(!!user);
    });
  }, []);

  return (
    <main>
      {/* Site header */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="shrink-0 inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full">
            <img src="/logo-white.svg" alt="What's For Dinner" className="w-7 h-7" />
          </Link>
          <LanguagePicker />
        </div>
        <div className="flex items-center gap-4">
          {isSignedIn ? (
            <Link
              href="/dashboard"
              className="text-sm text-stone-500 hover:text-orange-600 transition-colors font-medium"
            >
              {t("dashboard.title")}
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-sm text-stone-500 hover:text-orange-600 transition-colors font-medium"
            >
              {t("common.signIn")}
            </Link>
          )}
          {!isSignedIn && (
            <Button asChild size="sm" className="whitespace-nowrap">
              <Link href="/onboarding">
                {t("common.tryFree")}
              </Link>
            </Button>
          )}
        </div>
      </nav>

      <Hero isSignedIn={isSignedIn === true} />
      <SocialProof />
      <HowItWorks />
      <PlanPreview isSignedIn={isSignedIn === true} />
      <Pricing isSignedIn={isSignedIn === true} />
      <FAQ />
      <FreeTools />
      <PopularMealPlans />
      <GuidesAndTips />
      <Footer />
      <ExitIntentPopup isSignedIn={isSignedIn === true} />
    </main>
  );
}
