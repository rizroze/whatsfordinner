import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up — Start Your Free Meal Plan",
  description: "Create a free account to get personalized weekly meal plans and grocery lists. No credit card required.",
  robots: { index: false, follow: false },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
