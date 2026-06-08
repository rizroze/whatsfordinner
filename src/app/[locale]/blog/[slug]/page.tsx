import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  NON_DEFAULT_LOCALES,
  isValidLocale,
  getLocaleConfig,
} from "@/lib/i18n/locales";
import {
  getBlogSlugForLocale,
  getEnglishBlogSlug,
  getTranslatedBlogContent,
  getTranslatedBlogSlugs,
} from "@/data/blog/translations/content";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const englishSlugs = getTranslatedBlogSlugs();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of NON_DEFAULT_LOCALES) {
    for (const englishSlug of englishSlugs) {
      params.push({
        locale,
        slug: getBlogSlugForLocale(englishSlug, locale),
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};

  const englishSlug = getEnglishBlogSlug(slug, locale);
  const content = getTranslatedBlogContent(englishSlug, locale);
  if (!content) return {};

  const url = `https://whatsfordinner.fit/${locale}/blog/${slug}`;

  // Build hreflang alternates for all locales
  const languages: Record<string, string> = {
    en: `https://whatsfordinner.fit/blog/${englishSlug}`,
    "x-default": `https://whatsfordinner.fit/blog/${englishSlug}`,
  };
  for (const loc of NON_DEFAULT_LOCALES) {
    const locConfig = getLocaleConfig(loc);
    const locSlug = getBlogSlugForLocale(englishSlug, loc);
    languages[locConfig.hreflang] =
      `https://whatsfordinner.fit/${loc}/blog/${locSlug}`;
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url,
      siteName: "What's For Dinner",
      type: "article",
      locale: getLocaleConfig(locale).hreflang,
      images: [{ url: `/api/og?title=${encodeURIComponent(content.title)}&description=${encodeURIComponent(content.description)}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [`/api/og?title=${encodeURIComponent(content.title)}&description=${encodeURIComponent(content.description)}`],
    },
  };
}

export default async function LocaleBlogPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale) || locale === "en") notFound();

  const englishSlug = getEnglishBlogSlug(slug, locale);
  const content = getTranslatedBlogContent(englishSlug, locale);
  if (!content) notFound();

  const localeConfig = getLocaleConfig(locale);

  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: content.title,
            description: content.description,
            url: `https://whatsfordinner.fit/${locale}/blog/${slug}`,
            inLanguage: localeConfig.hreflang,
            author: {
              "@type": "Organization",
              name: "What's For Dinner",
              url: "https://whatsfordinner.fit",
            },
            publisher: {
              "@type": "Organization",
              name: "What's For Dinner",
              url: "https://whatsfordinner.fit",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://whatsfordinner.fit/${locale}/blog/${slug}`,
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      {content.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: content.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "What's For Dinner",
                item: "https://whatsfordinner.fit",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://whatsfordinner.fit/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: content.title,
                item: `https://whatsfordinner.fit/${locale}/blog/${slug}`,
              },
            ],
          }),
        }}
      />

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
            {content.ctaText}
          </Link>
        </nav>

        {/* Content */}
        <main className="max-w-2xl mx-auto px-6 pb-28 sm:pb-20">
          <article className="blog-article" dir={localeConfig.dir}>
            {/* Language badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-orange-700 bg-orange-50 rounded-full border border-orange-100">
                {localeConfig.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight mb-6">
              {content.title}
            </h1>

            {/* Intro */}
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              {content.description}
            </p>

            {/* Read full article link */}
            <div className="mb-12 p-5 bg-white rounded-2xl border border-stone-100 shadow-sm">
              <p className="text-sm text-stone-500 mb-3">
                {localeConfig.dir === "rtl" ? "\u{1F4D6}" : "\u{1F4D6}"}{" "}
                {content.readMoreText}
              </p>
              <Link
                href={`/blog/${englishSlug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
              >
                /blog/{englishSlug}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={localeConfig.dir === "rtl" ? "rotate-180" : ""}
                >
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* FAQ Section */}
            {content.faqs.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-stone-900 mb-6">
                  FAQ
                </h2>
                <div className="space-y-6">
                  {content.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="p-5 bg-white rounded-2xl border border-stone-100 shadow-sm"
                    >
                      <h3 className="text-base font-semibold text-stone-800 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="text-center py-10 px-6 bg-white rounded-2xl border border-orange-100 shadow-sm">
              <p className="text-lg font-semibold text-stone-800 mb-4">
                What&apos;s For Dinner
              </p>
              <p className="text-sm text-stone-500 mb-6 max-w-md mx-auto">
                {content.description.slice(0, 120)}...
              </p>
              <Link
                href="/onboarding"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-colors shadow-sm"
              >
                {content.ctaText}
              </Link>
            </div>
          </article>
        </main>

        {/* Sticky mobile CTA */}
        <div className="blog-sticky-cta">
          <Link
            href="/onboarding"
            className="flex items-center justify-center w-full py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-colors shadow-md"
          >
            {content.ctaText}
          </Link>
        </div>

        {/* Footer */}
        <footer className="border-t border-stone-100 py-12">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-sm font-semibold text-stone-800 tracking-tight">
              What&apos;s For Dinner?
            </div>
            <nav className="flex items-center gap-6">
              <Link
                href="/blog"
                className="text-sm text-stone-400 hover:text-orange-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/meal-plans"
                className="text-sm text-stone-400 hover:text-orange-600 transition-colors"
              >
                Meal Plans
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-stone-400 hover:text-orange-600 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-stone-400 hover:text-orange-600 transition-colors"
              >
                Terms
              </Link>
            </nav>
            <p className="text-xs text-stone-400">
              &copy; {new Date().getFullYear()} What&apos;s For Dinner
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
