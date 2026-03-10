import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ToastProvider } from "@/components/ui/Toast";
import { I18nProvider } from "@/lib/i18n/context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whatsfordinner.fit"),
  title: {
    default: "What's For Dinner — Weekly Meal Plans, Recipes & Grocery Lists",
    template: "%s | What's For Dinner",
  },
  description:
    "You spend 3+ hours a week deciding what to eat. We do it in 30 seconds — meal plans, recipes, and a grocery list, personalized to your family. Try free, no credit card.",
  keywords: [
    "meal planner",
    "weekly meal plan",
    "meal planning app",
    "grocery list generator",
    "dinner planner",
    "what to cook for dinner",
    "personalized meal plans",
    "family meal planner",
    "budget meal planning",
    "healthy meal plan",
  ],
  authors: [{ name: "What's For Dinner" }],
  creator: "What's For Dinner",
  publisher: "What's For Dinner",
  alternates: {
    canonical: "https://whatsfordinner.fit",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whatsfordinner.fit",
    title: "What's For Dinner — Meal Plans That End the Dinner Stress",
    description:
      "You spend 3+ hours a week deciding what to eat. We do it in 30 seconds — meal plans, recipes, and a grocery list. Try free.",
    siteName: "What's For Dinner",
  },
  twitter: {
    card: "summary_large_image",
    title: "What's For Dinner — Meal Plans That End the Dinner Stress",
    description:
      "You spend 3+ hours a week deciding what to eat. We do it in 30 seconds — meal plans, recipes, and a grocery list. Try free.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "What's For Dinner",
      url: "https://whatsfordinner.fit",
      description:
        "Stop wasting 3+ hours a week deciding what to eat. We plan your meals, recipes, and grocery list in 30 seconds.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://whatsfordinner.fit/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "What's For Dinner",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Web",
      url: "https://whatsfordinner.fit",
      description:
        "End the dinner stress. Personalized meal plans, recipes, and grocery lists — planned in 30 seconds, delivered to your inbox weekly.",
      offers: [
        {
          "@type": "Offer",
          name: "Monthly Plan",
          price: "7.99",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Yearly Plan",
          price: "59.99",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does it work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tell us what you eat, what you avoid, and your budget. In 30 seconds, you get a 3-day meal plan with recipes and a grocery list — free, no credit card. If it clicks, subscribe and we send you a full week, every week.",
          },
        },
        {
          "@type": "Question",
          name: "Is the free plan really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Completely. No credit card, no trial that auto-charges. You get a real 3-day plan with real recipes and a real grocery list. We think once you try it, you won't want to go back to winging it.",
          },
        },
        {
          "@type": "Question",
          name: "Can I customize for allergies and dietary restrictions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Down to the ingredient. Vegetarian, vegan, gluten-free, keto, nut allergies, shellfish — whatever it is, every meal is built around it. Your plan won't just avoid things, it'll be good despite them.",
          },
        },
        {
          "@type": "Question",
          name: "What if I don't like the plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hit regenerate. New plan, same preferences, zero guilt. You get 2 regenerations per week. We'd rather you love every meal than settle.",
          },
        },
        {
          "@type": "Question",
          name: "Can I cancel anytime?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "One click from your dashboard. No phone calls, no retention emails, no guilt trip. You keep access through the end of your billing period.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of meals are included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Real food you'd actually make — 15-minute weeknight dinners, weekend projects, breakfasts that aren't just cereal. Common ingredients you can find anywhere. Nothing that requires a specialty store run.",
          },
        },
        {
          "@type": "Question",
          name: "Is this just for one person?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Works for one, works for six. You set your household size and we adjust everything — portions, grocery quantities, the whole plan. Couples, families, solo cooks — all covered.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <I18nProvider>
          <ToastProvider>{children}</ToastProvider>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
