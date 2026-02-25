import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 py-32 sm:py-40 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 tracking-tight leading-[1.1]">
          You&apos;ll never have to
          <br />
          ask again.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-stone-600 max-w-xl mx-auto leading-relaxed">
          Personalized weekly meal plans and grocery lists, delivered to your
          inbox. Try a free 1-day plan — no credit card required.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Link
            href="/onboarding"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-full shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
          >
            Get Your Free Meal Plan
          </Link>

          <p className="text-sm text-stone-500">
            No account needed. Then $4.99/mo to keep it going.
          </p>
        </div>
      </div>
    </section>
  );
}
