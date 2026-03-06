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
import { Footer } from "@/components/landing/Footer";
import { LanguagePicker } from "@/components/ui/LanguagePicker";
import { useT } from "@/lib/i18n/context";
import { createClient } from "@/lib/supabase/client";

export default function Home() {
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
          <Button asChild variant="primary" size="icon" className="rounded-xl shrink-0">
            <Link href="/">
              <span className="text-2xl leading-none" style={{ filter: "brightness(0) invert(1)" }}>🍴</span>
            </Link>
          </Button>
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

      <Hero />
      <SocialProof />
      <HowItWorks />
      <PlanPreview />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
