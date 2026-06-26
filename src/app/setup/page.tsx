"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

// Runs after email confirmation when coming from the onboarding → preview → signup flow.
// Reads saved preferences from localStorage, writes them to the DB profile,
// then sends the user to /pricing so checkout has their supabase_user_id.
export default function SetupPage() {
  const router = useRouter();
  const ranRef = useRef(false);

  useEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    async function run() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/signup?redirect=/setup");
        return;
      }

      const raw = localStorage.getItem("wfd_preferences");
      if (raw) {
        try {
          const prefs = JSON.parse(raw);
          await fetch("/api/profile", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...prefs,
              delivery_email: prefs.delivery_email || user.email,
              servings_per_meal: prefs.household_size ?? 2,
              onboarding_completed: true,
            }),
          });
          localStorage.removeItem("wfd_preferences");
        } catch {
          // If save fails, continue anyway — dashboard will prompt them to complete onboarding
        }
      }

      router.replace("/pricing");
    }

    run();
  }, [router]);

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex flex-col items-center justify-center gap-4">
      <div className="w-6 h-6 border-2 border-orange-300 border-t-orange-500 rounded-full animate-spin" />
      <p className="text-sm text-stone-400">Setting up your account...</p>
    </div>
  );
}
