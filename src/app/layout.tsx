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
    default: "What's For Dinner — Your Week of Meals, Planned in 30 Seconds",
    template: "%s | What's For Dinner",
  },
  description:
    "Personalized meal plans, recipes, and a grocery list, delivered to your inbox every Sunday. Tell us what your family likes. We handle the rest.",
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
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whatsfordinner.fit",
    title: "What's For Dinner — Your Week of Meals, Planned in 30 Seconds",
    description:
      "Personalized meal plans, recipes, and a grocery list, delivered to your inbox every Sunday. From $7.99/month, cancel anytime.",
    siteName: "What's For Dinner",
    images: [
      {
        url: "/api/og?title=What%27s+For+Dinner%3F&description=Personalized+meal+plans%2C+recipes%2C+and+a+grocery+list+%E2%80%94+planned+in+30+seconds.",
        width: 1200,
        height: 630,
        alt: "What's For Dinner — AI Meal Planner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What's For Dinner — Your Week of Meals, Planned in 30 Seconds",
    description:
      "Personalized meal plans, recipes, and a grocery list, delivered to your inbox every Sunday. From $7.99/month, cancel anytime.",
    images: ["/api/og?title=What%27s+For+Dinner%3F&description=Personalized+meal+plans%2C+recipes%2C+and+a+grocery+list+%E2%80%94+planned+in+30+seconds."],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "What's For Dinner",
      url: "https://whatsfordinner.fit",
      description:
        "What's For Dinner is an AI-powered meal planner that generates personalized weekly meal plans with full recipes and a consolidated grocery list. It supports every major dietary need including keto, vegan, vegetarian, gluten-free, dairy-free, halal, and paleo. Plans are ready in 30 seconds, adjusted to household size, and delivered to your inbox every Sunday.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      name: "What's For Dinner",
      url: "https://whatsfordinner.fit",
      description:
        "Personalized meal plans, recipes, and a grocery list, delivered to your inbox every Sunday. Your week of meals, planned in 30 seconds.",
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
        "Personalized meal plans, recipes, and a grocery list. Planned in 30 seconds, delivered to your inbox every Sunday.",
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
        <link
          rel="alternate"
          type="application/rss+xml"
          title="What's For Dinner Blog"
          href="/blog/feed.xml"
        />
        <link
          rel="author"
          type="text/plain"
          href="/llms.txt"
        />
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
