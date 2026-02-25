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
  title: "What's For Dinner — Weekly Meal Plans Delivered to Your Inbox",
  description:
    "Personalized weekly meal plans and grocery lists, powered by AI. Subscribe once, eat well forever. $4.99/month.",
  openGraph: {
    title: "What's For Dinner — Weekly Meal Plans Delivered to Your Inbox",
    description:
      "Personalized weekly meal plans and grocery lists, powered by AI. Subscribe once, eat well forever.",
    siteName: "What's For Dinner",
  },
  twitter: {
    card: "summary_large_image",
    title: "What's For Dinner — Weekly Meal Plans Delivered to Your Inbox",
    description:
      "Personalized weekly meal plans and grocery lists, powered by AI. Subscribe once, eat well forever.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <I18nProvider>
          <ToastProvider>{children}</ToastProvider>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
