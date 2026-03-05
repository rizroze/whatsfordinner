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
    default: "What's For Dinner — Personalized Weekly Meal Plans & Grocery Lists",
    template: "%s | What's For Dinner",
  },
  description:
    "Get personalized weekly meal plans and grocery lists delivered to your inbox. Try a free 3-day plan — no credit card required. From $4.99/month.",
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
    title: "What's For Dinner — Personalized Weekly Meal Plans",
    description:
      "Personalized weekly meal plans and grocery lists delivered to your inbox. Try a free 3-day plan — no credit card required.",
    siteName: "What's For Dinner",
  },
  twitter: {
    card: "summary_large_image",
    title: "What's For Dinner — Personalized Weekly Meal Plans",
    description:
      "Personalized weekly meal plans and grocery lists delivered to your inbox. Try a free 3-day plan — no credit card required.",
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
        "Personalized weekly meal plans and grocery lists delivered to your inbox.",
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
        "AI-powered meal planning service that delivers personalized weekly meal plans and grocery lists to your inbox.",
      offers: [
        {
          "@type": "Offer",
          name: "Monthly Plan",
          price: "4.99",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Yearly Plan",
          price: "29.99",
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
            text: "Fill out a quick profile with your dietary preferences, household size, and budget. You'll get a free 3-day meal plan immediately — no credit card required. Love it? Subscribe for full 7-day plans every week.",
          },
        },
        {
          "@type": "Question",
          name: "Is the free plan really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! You get a complete 3-day meal plan with recipes and a grocery list — completely free, no credit card needed. Subscribe to unlock full 7-day plans delivered weekly.",
          },
        },
        {
          "@type": "Question",
          name: "Can I customize for allergies and dietary restrictions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. You can specify any allergies, intolerances, or dietary preferences (vegetarian, vegan, gluten-free, keto, etc.) during onboarding. Every meal plan is tailored to your needs.",
          },
        },
        {
          "@type": "Question",
          name: "What if I don't like the plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get up to 2 regenerations per week. If a plan doesn't feel right, just hit regenerate from your dashboard and we'll create a new one based on the same preferences.",
          },
        },
        {
          "@type": "Question",
          name: "Can I cancel anytime?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, no contracts or commitments. Cancel anytime from your dashboard and you'll retain access through the end of your billing period.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of meals are included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A wide variety of home-cooked meals — from quick 20-minute weeknight dinners to more involved weekend recipes. All plans include breakfast, lunch, and dinner with realistic prep times and common ingredients.",
          },
        },
        {
          "@type": "Question",
          name: "Is this just for one person?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nope. During setup, you tell us your household size and we adjust portions and grocery quantities accordingly. Works for individuals, couples, or families.",
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
