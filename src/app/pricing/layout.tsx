import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — What's For Dinner",
  description:
    "Simple pricing for personalized weekly meal plans with recipes and a grocery list. $7.99/month or $5/month billed yearly. Cancel anytime.",
  alternates: {
    canonical: "https://whatsfordinner.fit/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
