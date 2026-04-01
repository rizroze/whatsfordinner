import Link from "next/link";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <nav className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-sm font-semibold text-stone-800 hover:text-orange-600 transition-colors"
          >
            What&apos;s For Dinner
          </Link>
          <span className="text-stone-300">/</span>
          <Link
            href="/blog"
            className="text-sm text-stone-400 hover:text-orange-500 transition-colors"
          >
            Blog
          </Link>
        </div>
        <Link
          href="/onboarding"
          className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-colors"
        >
          Get Your Free Meal Plan
        </Link>
      </nav>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 pb-28 sm:pb-20">{children}</main>

      {/* Sticky mobile CTA */}
      <div className="blog-sticky-cta">
        <Link
          href="/onboarding"
          className="flex items-center justify-center w-full py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-colors shadow-md"
        >
          Get your free meal plan
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-100 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-sm font-semibold text-stone-800 tracking-tight">
            What&apos;s For Dinner?
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/blog" className="text-sm text-stone-400 hover:text-orange-600 transition-colors">
              Blog
            </Link>
            <Link href="/meal-plans" className="text-sm text-stone-400 hover:text-orange-600 transition-colors">
              Meal Plans
            </Link>
            <Link href="/privacy" className="text-sm text-stone-400 hover:text-orange-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-stone-400 hover:text-orange-600 transition-colors">
              Terms
            </Link>
            <Link
              href="/feedback"
              className="text-sm text-stone-400 hover:text-orange-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} What&apos;s For Dinner
          </p>
        </div>
      </footer>
    </div>
  );
}
