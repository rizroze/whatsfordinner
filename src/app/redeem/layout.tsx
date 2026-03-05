import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You've Been Gifted Free Meal Plans | What's For Dinner",
  description:
    "A friend gifted you 1 month of personalized weekly meal plans and grocery lists. Claim your gift — no credit card required.",
};

export default function RedeemLayout({ children }: { children: React.ReactNode }) {
  return children;
}
