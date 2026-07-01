import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function MealPlansLocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  return (
    <>
      {/* Header */}
      <nav className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold text-stone-800 hover:text-orange-600 transition-colors"
        >
          What&apos;s For Dinner
        </Link>
        <Link
          href={`/onboarding?lang=${locale}`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-colors"
        >
          Free Preview
        </Link>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pb-20">{children}</main>

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
            <Link href={`/${locale}/meal-plans`} className="text-sm text-stone-400 hover:text-orange-600 transition-colors">
              Meal Plans
            </Link>
            <Link href="/privacy" className="text-sm text-stone-400 hover:text-orange-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-stone-400 hover:text-orange-600 transition-colors">
              Terms
            </Link>
          </nav>
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} What&apos;s For Dinner
          </p>
        </div>
      </footer>
    </>
  );
}
