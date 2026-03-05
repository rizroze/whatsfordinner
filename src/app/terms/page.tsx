import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | What's For Dinner",
  description:
    "Terms of Service for What's For Dinner — AI-powered weekly meal plans delivered to your inbox.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-stone-400 mb-10">
          Last updated: March 2026
        </p>

        <div className="prose prose-stone prose-sm max-w-none space-y-6 text-stone-600 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-stone-800 [&_h2]:mt-8 [&_h2]:mb-3">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
            What&apos;s For Dinner website, application, and services
            (collectively, the &ldquo;Service&rdquo;) operated by What&apos;s
            For Dinner (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
            By accessing or using the Service, you agree to these Terms.
          </p>

          <h2>1. The Service</h2>
          <p>
            What&apos;s For Dinner provides AI-generated personalized weekly
            meal plans and grocery lists delivered via email and accessible
            through a web dashboard. Meal plans are generated using artificial
            intelligence and are intended as suggestions — not medical,
            nutritional, or dietary advice.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old to create an account or subscribe.
            By using the Service, you represent that you are at least 18 years
            of age and have the legal capacity to enter into these Terms.
          </p>

          <h2>3. Account Registration</h2>
          <p>
            To access paid features, you must create an account with a valid
            email address. You are responsible for maintaining the
            confidentiality of your account credentials and for all activity
            under your account. You agree to notify us immediately of any
            unauthorized use.
          </p>

          <h2>4. Free Plan</h2>
          <p>
            You can generate one free 3-day meal plan without creating an
            account. No credit card is required. Free plans are limited to one
            per user and are intended for evaluation purposes.
          </p>

          <h2>5. Subscriptions and Billing</h2>
          <p>
            Paid subscriptions are billed monthly ($4.99/month) or annually
            ($29.99/year) through our payment processor, Lemon Squeezy. By
            subscribing, you authorize recurring charges at the selected
            interval until you cancel.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Billing cycle:</strong> Subscriptions renew automatically
              at the end of each billing period (monthly or annually).
            </li>
            <li>
              <strong>Price changes:</strong> We may change subscription prices
              with at least 30 days&apos; notice. Existing subscribers will be
              notified via email before any price increase takes effect.
            </li>
            <li>
              <strong>Taxes:</strong> Prices may be subject to applicable taxes
              depending on your jurisdiction, as determined by Lemon Squeezy.
            </li>
          </ul>

          <h2>6. Cancellation and Refunds</h2>
          <p>
            You may cancel your subscription at any time from your dashboard or
            through the Lemon Squeezy customer portal. Upon cancellation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Your access continues through the end of the current billing
              period.
            </li>
            <li>
              No partial refunds are issued for unused portions of a billing
              period.
            </li>
            <li>
              Annual subscribers may request a full refund within 14 days of
              their initial purchase if they have not generated a meal plan.
            </li>
          </ul>
          <p>
            If you believe you were charged in error, contact us at{" "}
            <a
              href="mailto:hello@whatsfordinner.fit"
              className="text-orange-500 hover:text-orange-600"
            >
              hello@whatsfordinner.fit
            </a>{" "}
            and we will review your case promptly.
          </p>

          <h2>7. Plan Regeneration</h2>
          <p>
            Subscribers can regenerate their weekly meal plan up to 2 times per
            week. Unused regenerations do not carry over to subsequent weeks.
          </p>

          <h2>8. Acceptable Use</h2>
          <p>
            You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Circumvent free plan limits through multiple accounts, device
              manipulation, or other means.
            </li>
            <li>
              Use automated tools, scripts, or bots to access the Service.
            </li>
            <li>
              Redistribute, resell, or commercially republish generated meal
              plans without our written permission.
            </li>
            <li>
              Interfere with or disrupt the Service, servers, or networks.
            </li>
            <li>
              Use the Service for any unlawful purpose.
            </li>
          </ul>

          <h2>9. Intellectual Property</h2>
          <p>
            The Service, including its design, branding, code, and AI-generated
            content templates, is owned by What&apos;s For Dinner and protected
            by applicable intellectual property laws. You retain the right to
            use meal plans generated for you for personal, non-commercial
            purposes.
          </p>

          <h2>10. AI-Generated Content Disclaimer</h2>
          <p>
            Meal plans and recipes are generated by artificial intelligence.
            While we strive for accuracy, AI-generated content may occasionally
            contain errors, including incorrect ingredient quantities, cooking
            times, or nutritional information. You should:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Use your own judgment when following generated recipes.
            </li>
            <li>
              Verify ingredients against known food allergies and intolerances.
            </li>
            <li>
              Consult a healthcare professional for specific dietary or medical
              advice.
            </li>
          </ul>

          <h2>11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, What&apos;s For Dinner and
            its affiliates shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits
            or revenues, arising from your use of the Service. Our total
            liability for any claim arising from or related to the Service is
            limited to the amount you paid us in the 12 months preceding the
            claim.
          </p>

          <h2>12. Disclaimer of Warranties</h2>
          <p>
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; without warranties of any kind, whether express or
            implied, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement. We do not guarantee that the Service will be
            uninterrupted, error-free, or free of harmful components.
          </p>

          <h2>13. Account Termination</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate
            these Terms, including but not limited to: circumventing free plan
            limits, automated scraping, or using the Service for commercial
            redistribution. We will attempt to provide reasonable notice before
            termination except in cases of severe abuse.
          </p>

          <h2>14. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. If we make material
            changes, we will notify you via email or by posting a notice on the
            Service at least 30 days before the changes take effect. Your
            continued use of the Service after changes become effective
            constitutes acceptance of the updated Terms.
          </p>

          <h2>15. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws
            of the United States. Any disputes arising from these Terms or your
            use of the Service shall be resolved through good-faith negotiation,
            and if necessary, in the courts of competent jurisdiction.
          </p>

          <h2>16. Contact</h2>
          <p>
            Questions about these Terms? Email us at{" "}
            <a
              href="mailto:hello@whatsfordinner.fit"
              className="text-orange-500 hover:text-orange-600"
            >
              hello@whatsfordinner.fit
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
