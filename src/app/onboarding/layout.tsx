import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Meal Plan — Set Your Preferences",
  description: "Tell us about your household, diet, and cooking style. Get a personalized 3-day meal plan with grocery list in under 2 minutes.",
  robots: { index: false, follow: false },
};

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
