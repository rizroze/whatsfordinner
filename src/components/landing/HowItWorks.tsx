const steps = [
  {
    number: 1,
    title: "Tell us your preferences",
    description:
      "Set your dietary needs, budget, household size, and any allergies. We remember so you don't have to.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-orange-500"
      >
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "We plan your week",
    description:
      "AI generates a personalized meal plan with recipes and a consolidated grocery list, delivered by email.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-orange-500"
      >
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Cook & enjoy",
    description:
      "Follow simple, clear recipes. No stress, no waste, no wondering what's for dinner.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-orange-500"
      >
        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z" />
        <line x1="6" y1="17" x2="18" y2="17" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          How It Works
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg max-w-xl mx-auto">
          Three simple steps to stress-free dinners, every week.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Number circle */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-5">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
