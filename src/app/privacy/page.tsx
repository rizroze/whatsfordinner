import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | What's For Dinner",
  description:
    "Privacy Policy for What's For Dinner — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <nav className="max-w-3xl mx-auto px-6 py-6">
        <Link
          href="/"
          className="text-sm text-stone-500 hover:text-orange-500 transition-colors"
        >
          &larr; Back to home
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pb-20">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-stone-400 mb-10">
          Last updated: March 2026
        </p>

        <div className="prose prose-stone prose-sm max-w-none space-y-6 text-stone-600 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-stone-800 [&_h2]:mt-8 [&_h2]:mb-3">
          <p>
            What&apos;s For Dinner (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
            explains what information we collect, how we use it, and your rights
            regarding your data when you use our website and services
            (collectively, the &ldquo;Service&rdquo;).
          </p>

          <h2>1. Information We Collect</h2>

          <h3 className="text-base font-semibold text-stone-700 mt-4 mb-2">
            Information you provide
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Account information:</strong> Email address and password
              (or Google OAuth credentials) when you create an account.
            </li>
            <li>
              <strong>Meal preferences:</strong> Dietary restrictions, allergies,
              household size, budget range, cooking skill level, cuisine
              preferences, and preferred cooking time — provided during
              onboarding.
            </li>
            <li>
              <strong>Payment information:</strong> Billing details processed
              securely through Lemon Squeezy. We do not store your credit card
              number, CVV, or full billing details on our servers.
            </li>
            <li>
              <strong>Communications:</strong> Any emails or messages you send to
              our support address.
            </li>
          </ul>

          <h3 className="text-base font-semibold text-stone-700 mt-4 mb-2">
            Information collected automatically
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Usage data:</strong> Pages visited, features used, and
              general interaction patterns, collected via Vercel Analytics
              (privacy-focused, no personal data tracking).
            </li>
            <li>
              <strong>Device information:</strong> Browser type, operating
              system, and screen size for responsive design optimization.
            </li>
            <li>
              <strong>Device fingerprint:</strong> A non-identifying hash used
              solely to enforce free plan limits (one free plan per device). This
              fingerprint cannot be used to identify you personally.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Generate meal plans:</strong> Your preferences are sent to
              our AI provider to create personalized weekly meal plans tailored
              to your dietary needs, budget, and household.
            </li>
            <li>
              <strong>Deliver plans by email:</strong> Your email address is used
              to send weekly meal plans and important account updates (such as
              subscription confirmations and billing notifications).
            </li>
            <li>
              <strong>Process payments:</strong> Billing information is shared
              with Lemon Squeezy to process subscription payments.
            </li>
            <li>
              <strong>Improve the Service:</strong> Aggregated, anonymized usage
              data helps us understand how people use the Service and where to
              make improvements.
            </li>
            <li>
              <strong>Prevent abuse:</strong> Device fingerprints and rate
              limiting help prevent misuse of free plan features.
            </li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information with third
            parties for marketing purposes. We will never send you unsolicited
            promotional emails beyond what is directly related to the Service.
          </p>

          <h2>3. Third-Party Services</h2>
          <p>
            We use the following third-party services to operate the Service.
            Each processes only the minimum data necessary:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Supabase</strong> (database and authentication) — stores
              your account, preferences, and generated meal plans. Hosted on AWS
              with encryption at rest.
            </li>
            <li>
              <strong>Lemon Squeezy</strong> (payment processing) — handles
              subscription billing, invoicing, and tax compliance. See{" "}
              <a
                href="https://www.lemonsqueezy.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600"
              >
                Lemon Squeezy&apos;s Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Anthropic (Claude AI)</strong> — processes your meal
              preferences to generate personalized plans. Preferences are sent as
              structured prompts; no personal identifiers (name, email) are
              included in AI requests.
            </li>
            <li>
              <strong>Resend</strong> (email delivery) — sends your weekly meal
              plans and transactional emails. See{" "}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600"
              >
                Resend&apos;s Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Vercel</strong> (hosting and analytics) — hosts the
              website and provides privacy-focused analytics without cookies or
              personal data collection. See{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600"
              >
                Vercel&apos;s Privacy Policy
              </a>
              .
            </li>
          </ul>

          <h2>4. Cookies and Local Storage</h2>
          <p>
            We use essential cookies for authentication and language preferences.
            We also use browser local storage to cache your free meal plan for
            immediate display. No third-party tracking cookies are used. We do
            not use advertising cookies or retargeting pixels.
          </p>

          <h2>5. Data Retention</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Active accounts:</strong> Your data is retained for as long
              as your account is active and you have a subscription.
            </li>
            <li>
              <strong>Cancelled subscriptions:</strong> Account data is retained
              for 90 days after cancellation in case you resubscribe, then
              automatically deleted.
            </li>
            <li>
              <strong>Meal plan history:</strong> Past meal plans are retained
              for the duration of your subscription. Up to 5 previous weeks are
              accessible from your dashboard.
            </li>
            <li>
              <strong>Deletion requests:</strong> Upon request, all your data is
              permanently deleted within 30 days.
            </li>
          </ul>

          <h2>6. Data Security</h2>
          <p>
            We take reasonable measures to protect your information, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All data transmitted between your browser and our servers is
              encrypted using TLS (HTTPS).
            </li>
            <li>
              Database access is restricted through row-level security policies
              — you can only access your own data.
            </li>
            <li>
              Payment processing is handled entirely by Lemon Squeezy; we never
              see or store your full payment details.
            </li>
            <li>
              Authentication tokens are stored securely using HTTP-only cookies.
            </li>
          </ul>

          <h2>7. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Access your data:</strong> View your preferences, meal plan
              history, and account information from your dashboard.
            </li>
            <li>
              <strong>Update your data:</strong> Modify your meal preferences,
              email address, or other account details at any time.
            </li>
            <li>
              <strong>Delete your data:</strong> Request complete deletion of
              your account and all associated data by emailing us.
            </li>
            <li>
              <strong>Export your data:</strong> Request a copy of your personal
              data in a portable format.
            </li>
            <li>
              <strong>Withdraw consent:</strong> Unsubscribe from email
              communications at any time (note: transactional emails related to
              your subscription may still be sent).
            </li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a
              href="/feedback"
              className="text-orange-500 hover:text-orange-600"
            >
              our contact form
            </a>
            . We will respond within 30 days.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            The Service is not directed to children under 18. We do not
            knowingly collect personal information from children. If you believe
            a child has provided us with personal information, please contact us
            and we will promptly delete it.
          </p>

          <h2>9. International Data Transfers</h2>
          <p>
            Your data may be processed and stored in the United States through
            our hosting and service providers. By using the Service, you consent
            to the transfer of your information to the United States and other
            jurisdictions where our service providers operate.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will notify you via email or by posting a
            prominent notice on the Service at least 30 days before changes take
            effect. The &ldquo;Last updated&rdquo; date at the top of this page
            indicates the most recent revision.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions or concerns about this Privacy Policy? Email us at{" "}
            <a
              href="/feedback"
              className="text-orange-500 hover:text-orange-600"
            >
              our contact form
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
