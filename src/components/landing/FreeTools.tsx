import Link from "next/link";

const tools = [
  {
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
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    title: "Calorie Calculator",
    description:
      "Find your daily calorie target based on your age, activity level, and goals.",
    href: "/tools/calorie-calculator",
    cta: "Calculate Now",
  },
  {
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
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Dinner Generator",
    description:
      "Not sure what to cook tonight? We'll pick a dinner idea for you.",
    href: "/tools/dinner-generator",
    cta: "Get a Dinner Idea",
  },
];

export function FreeTools() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-stone-900">
          Free Planning Tools
        </h2>
        <p className="text-stone-500 mt-2">
          No signup needed. Use them right now.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
          >
            <div className="mb-4">{tool.icon}</div>
            <h3 className="text-lg font-semibold text-stone-900 mb-1">
              {tool.title}
            </h3>
            <p className="text-sm text-stone-500 mb-5 flex-1">
              {tool.description}
            </p>
            <span className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-orange-500 rounded-full w-fit">
              {tool.cta} &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
