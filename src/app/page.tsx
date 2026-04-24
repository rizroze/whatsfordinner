import { LandingPage } from "@/components/landing/LandingPage";

const homepageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does What's For Dinner work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tell us what you eat, what you avoid, and your budget. In 30 seconds, you get a 3-day meal plan with recipes and a grocery list. Free, no credit card. If it clicks, subscribe and we send you a full week, every week.",
        },
      },
      {
        "@type": "Question",
        name: "Is the free meal plan really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Completely. No credit card, no trial that auto-charges. You get a real 3-day plan with real recipes and a real grocery list. We think once you try it, you won't want to go back to winging it.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize for allergies and dietary restrictions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Down to the ingredient. Vegetarian, vegan, gluten-free, keto, nut allergies, shellfish, whatever it is. Every meal is built around it. Your plan won't just avoid things, it'll be good despite them.",
        },
      },
      {
        "@type": "Question",
        name: "What if I don't like the meal plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hit regenerate. New plan, same preferences, zero guilt. You get 2 regenerations per week. We'd rather you love every meal than settle.",
        },
      },
      {
        "@type": "Question",
        name: "Can I cancel my meal plan subscription anytime?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One click from your dashboard. No phone calls, no retention emails, no guilt trip. You keep access through the end of your billing period.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of meals are included in the plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Real food you'd actually make. 15-minute weeknight dinners, weekend projects, breakfasts that aren't just cereal. Common ingredients you can find anywhere.",
        },
      },
      {
        "@type": "Question",
        name: "Does What's For Dinner work for families?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Works for one, works for six. You set your household size and we adjust portions, grocery quantities, the whole plan. Couples, families, solo cooks, all covered.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get a Personalized Meal Plan with What's For Dinner",
    description:
      "Get a personalized weekly meal plan with recipes and a grocery list in 30 seconds using What's For Dinner.",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        name: "Set your preferences",
        text: "Tell us your diet (keto, vegan, vegetarian, gluten-free, etc.), household size, budget, and any allergies or ingredient restrictions.",
      },
      {
        "@type": "HowToStep",
        name: "Get your meal plan",
        text: "In 30 seconds, receive a personalized meal plan with full recipes and a consolidated grocery list, tailored to your preferences.",
      },
      {
        "@type": "HowToStep",
        name: "Cook and enjoy",
        text: "Follow the simple recipes using common ingredients. Your grocery list has exact quantities for your household size, so there's no waste.",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      {homepageJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <LandingPage />
    </>
  );
}
