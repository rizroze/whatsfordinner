import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-100 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm font-semibold text-stone-800 tracking-tight">
          What&apos;s For Dinner
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
          >
            Terms
          </Link>
          <Link
            href="mailto:hello@whatsfordinner.fit"
            className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        <p className="text-xs text-stone-400">
          &copy; {year} What&apos;s For Dinner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
