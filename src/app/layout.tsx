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
