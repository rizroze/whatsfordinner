import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBF5] px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-orange-500 mb-4">404</p>
        <h1 className="text-2xl font-bold text-stone-900 mb-2">
          Page not found
        </h1>
        <p className="text-stone-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-stone-700 bg-white border border-stone-200 hover:border-stone-300 rounded-full shadow-sm transition-colors"
          >
            Read the Blog
          </Link>
          <Link
            href="/meal-plans"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-stone-700 bg-white border border-stone-200 hover:border-stone-300 rounded-full shadow-sm transition-colors"
          >
            Browse Meal Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
