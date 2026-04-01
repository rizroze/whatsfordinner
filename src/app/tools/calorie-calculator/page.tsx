"use client";

import { useState } from "react";
import Link from "next/link";

type Gender = "male" | "female";
type UnitSystem = "imperial" | "metric";
type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "veryActive";

const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

const activityLabels: Record<ActivityLevel, { label: string; desc: string }> = {
  sedentary: {
    label: "Sedentary",
    desc: "Little or no exercise, desk job",
  },
  light: {
    label: "Lightly Active",
    desc: "Light exercise 1-3 days/week",
  },
  moderate: {
    label: "Moderately Active",
    desc: "Moderate exercise 3-5 days/week",
  },
  active: {
    label: "Active",
    desc: "Hard exercise 6-7 days/week",
  },
  veryActive: {
    label: "Very Active",
    desc: "Intense exercise daily or physical job",
  },
};

const caloriePlanPages = [
  { calories: 1200, slug: "1200-calorie-meal-plan", label: "1,200 cal" },
  { calories: 1500, slug: "1500-calorie-meal-plan", label: "1,500 cal" },
  { calories: 1800, slug: "1800-calorie-meal-plan", label: "1,800 cal" },
  { calories: 2000, slug: "2000-calorie-meal-plan", label: "2,000 cal" },
  { calories: 2500, slug: "2500-calorie-meal-plan", label: "2,500 cal" },
  { calories: 3000, slug: "3000-calorie-meal-plan", label: "3,000 cal" },
];

function findClosestPlan(targetCalories: number) {
  let closest = caloriePlanPages[0];
  let minDiff = Math.abs(targetCalories - closest.calories);
  for (const plan of caloriePlanPages) {
    const diff = Math.abs(targetCalories - plan.calories);
    if (diff < minDiff) {
      minDiff = diff;
      closest = plan;
    }
  }
  return closest;
}

function calculateBMR(
  gender: Gender,
  weightKg: number,
  heightCm: number,
  age: number,
): number {
  // Mifflin-St Jeor
  if (gender === "male") {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  }
  return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
}

function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}

function ftInToCm(ft: number, inches: number): number {
  return (ft * 12 + inches) * 2.54;
}

interface Results {
  bmr: number;
  tdee: number;
  deficit: number;
  surplus: number;
}

export default function CalorieCalculatorPage() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState("");

  function handleCalculate() {
    setError("");
    const ageNum = parseInt(age);
    if (!ageNum || ageNum < 15 || ageNum > 120) {
      setError("Please enter an age between 15 and 120.");
      return;
    }

    let weightKgVal: number;
    let heightCmVal: number;

    if (units === "imperial") {
      const wLbs = parseFloat(weightLbs);
      const hFt = parseInt(heightFt);
      const hIn = parseInt(heightIn) || 0;
      if (!wLbs || wLbs < 50 || wLbs > 700) {
        setError("Please enter a weight between 50 and 700 lbs.");
        return;
      }
      if (isNaN(hFt) || hFt < 3 || hFt > 8) {
        setError("Please enter a height between 3 and 8 feet.");
        return;
      }
      weightKgVal = lbsToKg(wLbs);
      heightCmVal = ftInToCm(hFt, hIn);
    } else {
      const wKg = parseFloat(weightKg);
      const hCm = parseFloat(heightCm);
      if (!wKg || wKg < 25 || wKg > 320) {
        setError("Please enter a weight between 25 and 320 kg.");
        return;
      }
      if (!hCm || hCm < 100 || hCm > 250) {
        setError("Please enter a height between 100 and 250 cm.");
        return;
      }
      weightKgVal = wKg;
      heightCmVal = hCm;
    }

    const bmr = calculateBMR(gender, weightKgVal, heightCmVal, ageNum);
    const tdee = bmr * activityMultipliers[activity];

    setResults({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      deficit: Math.round(tdee - 500),
      surplus: Math.round(tdee + 300),
    });
  }

  const closestPlan = results ? findClosestPlan(results.tdee) : null;
  const deficitPlan = results ? findClosestPlan(results.deficit) : null;

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFFBF5" }}>
      {/* Nav */}
      <nav className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-stone-800 font-semibold text-sm hover:text-orange-600 transition-colors duration-200"
        >
          <span
            className="inline-flex items-center justify-center w-8 h-8 bg-orange-500 rounded-xl text-white text-lg leading-none"
            style={{ filter: "brightness(0) invert(1)" }}
          >
            🍴
          </span>
          What&apos;s For Dinner
        </Link>
        <Link
          href="/tools"
          className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
        >
          All Tools
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-8 pb-12 text-center">
        <p className="text-orange-500 font-medium text-sm mb-3">Free Tool</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
          Calorie Calculator
        </h1>
        <p className="text-stone-500 text-lg max-w-2xl mx-auto">
          Find your daily calorie target for weight loss, maintenance, or muscle
          gain using the Mifflin-St Jeor equation.
        </p>
      </section>

      {/* Calculator Card */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 sm:p-8">
          {/* Top row: Unit toggle + Gender */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-xs font-medium text-stone-500 mb-1.5">Units</label>
              <div className="flex gap-1 bg-stone-100 rounded-full p-0.5">
                <button
                  onClick={() => setUnits("imperial")}
                  className={`flex-1 py-2 px-3 rounded-full text-xs font-medium transition-all duration-200 ${
                    units === "imperial"
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  Imperial
                </button>
                <button
                  onClick={() => setUnits("metric")}
                  className={`flex-1 py-2 px-3 rounded-full text-xs font-medium transition-all duration-200 ${
                    units === "metric"
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  Metric
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-500 mb-1.5">Gender</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setGender("male")}
                  className={`flex-1 py-2 rounded-xl text-xs font-medium border transition-all duration-200 ${
                    gender === "male"
                      ? "border-orange-400 bg-orange-50 text-orange-700"
                      : "border-stone-200 text-stone-500 hover:border-stone-300"
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`flex-1 py-2 rounded-xl text-xs font-medium border transition-all duration-200 ${
                    gender === "female"
                      ? "border-orange-400 bg-orange-50 text-orange-700"
                      : "border-stone-200 text-stone-500 hover:border-stone-300"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>
          </div>

          {/* Stats row: Age + Weight + Height */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div>
              <label htmlFor="age" className="block text-xs font-medium text-stone-500 mb-1.5">Age</label>
              <input
                id="age"
                type="number"
                inputMode="numeric"
                placeholder="25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-stone-900 text-sm placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="weight" className="block text-xs font-medium text-stone-500 mb-1.5">
                Weight ({units === "imperial" ? "lbs" : "kg"})
              </label>
              {units === "imperial" ? (
                <input
                  id="weight"
                  type="number"
                  inputMode="decimal"
                  placeholder="160"
                  value={weightLbs}
                  onChange={(e) => setWeightLbs(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-stone-900 text-sm placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200"
                />
              ) : (
                <input
                  id="weight"
                  type="number"
                  inputMode="decimal"
                  placeholder="73"
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-stone-900 text-sm placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200"
                />
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-500 mb-1.5">
                Height ({units === "imperial" ? "ft/in" : "cm"})
              </label>
              {units === "imperial" ? (
                <div className="flex gap-1.5">
                  <div className="flex-1 relative">
                    <input
                      type="number"
                      inputMode="numeric"
                      placeholder="5"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-stone-900 text-sm placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 pr-8"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 text-xs">ft</span>
                  </div>
                  <div className="flex-1 relative">
                    <input
                      type="number"
                      inputMode="numeric"
                      placeholder="10"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-stone-900 text-sm placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 pr-8"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 text-xs">in</span>
                  </div>
                </div>
              ) : (
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder="178"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-stone-900 text-sm placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200"
                />
              )}
            </div>
          </div>

          {/* Activity Level - horizontal wrap */}
          <div className="mb-5">
            <label className="block text-xs font-medium text-stone-500 mb-1.5">Activity Level</label>
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(activityLabels) as ActivityLevel[]).map((level) => (
                <button
                  key={level}
                  onClick={() => setActivity(level)}
                  className={`px-3 py-2 rounded-xl border transition-all duration-200 text-xs ${
                    activity === level
                      ? "border-orange-400 bg-orange-50 text-orange-700 font-medium"
                      : "border-stone-200 text-stone-500 hover:border-stone-300"
                  }`}
                  title={activityLabels[level].desc}
                >
                  {activityLabels[level].label}
                </button>
              ))}
            </div>
            <p className="text-xs text-stone-400 mt-1.5">{activityLabels[activity].desc}</p>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-xs mb-3 text-center">{error}</p>
          )}

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-medium py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-sm"
          >
            Calculate My Calories
          </button>
        </div>

        {/* Results */}
        {results && (
          <div className="mt-8 space-y-6">
            {/* Results Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 text-center">
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-1">
                  Weight Loss
                </p>
                <p className="text-3xl font-bold text-orange-500">
                  {results.deficit.toLocaleString()}
                </p>
                <p className="text-sm text-stone-500 mt-1">cal/day</p>
                <p className="text-xs text-stone-400 mt-2">-500 cal deficit</p>
              </div>
              <div className="bg-white rounded-2xl border-2 border-orange-400 shadow-sm p-6 text-center relative">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-medium px-3 py-0.5 rounded-full">
                  Maintenance
                </span>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-1 mt-1">
                  TDEE
                </p>
                <p className="text-3xl font-bold text-stone-900">
                  {results.tdee.toLocaleString()}
                </p>
                <p className="text-sm text-stone-500 mt-1">cal/day</p>
                <p className="text-xs text-stone-400 mt-2">
                  BMR: {results.bmr.toLocaleString()} cal
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 text-center">
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-1">
                  Muscle Gain
                </p>
                <p className="text-3xl font-bold text-green-600">
                  {results.surplus.toLocaleString()}
                </p>
                <p className="text-sm text-stone-500 mt-1">cal/day</p>
                <p className="text-xs text-stone-400 mt-2">+300 cal surplus</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-sm text-orange-700 font-medium mb-2">
                Now you know your target. Let us do the hard part.
              </p>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Get a personalized meal plan for{" "}
                {results.deficit.toLocaleString()} - {results.tdee.toLocaleString()} calories
              </h3>
              <p className="text-stone-500 text-sm mb-5 max-w-md mx-auto">
                We generate a full week of meals with recipes and a grocery list
                matched to your calorie target, dietary preferences, and budget.
              </p>
              <Link
                href="/onboarding"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-medium py-3 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-sm"
              >
                Get Your Free Meal Plan
              </Link>
            </div>

            {/* Related Calorie Plans */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 sm:p-8">
              <h3 className="text-lg font-bold text-stone-900 mb-1">
                Browse meal plans near your calorie target
              </h3>
              <p className="text-sm text-stone-400 mb-5">
                Pre-made plans with recipes and grocery lists for popular calorie
                targets.
              </p>
              <div className="flex flex-wrap gap-2">
                {caloriePlanPages.map((plan) => {
                  const isClosest =
                    closestPlan?.slug === plan.slug ||
                    deficitPlan?.slug === plan.slug;
                  return (
                    <Link
                      key={plan.slug}
                      href={`/meal-plans/${plan.slug}`}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                        isClosest
                          ? "border-orange-400 bg-orange-50 text-orange-700 hover:bg-orange-100"
                          : "border-stone-200 text-stone-600 hover:border-stone-300 hover:text-stone-800"
                      }`}
                    >
                      {plan.label}
                      {isClosest && (
                        <span className="ml-1.5 text-xs text-orange-500">
                          &#8592; closest
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Why Calorie Counting Alone Isn't Enough */}
      <section
        className="border-t border-stone-100 py-16"
        style={{ backgroundColor: "#FFFBF5" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">
            Why calorie counting alone isn&apos;t enough
          </h2>
          <div className="space-y-6 text-stone-600 text-[15px] leading-relaxed">
            <p>
              Knowing your daily calorie target is a great first step. But most
              people who only count calories quit within 2 weeks. The problem is
              not the math. It is the execution.
            </p>
            <p>
              Counting calories means logging every meal, weighing portions,
              looking up nutrition data, and making real-time decisions about
              what to eat. That is a lot of daily friction. Willpower runs out.
              The app stays closed. Takeout wins.
            </p>
            <p>
              A better approach: start with a meal plan already built to your
              calorie target. Every meal, every recipe, every ingredient is
              pre-calculated. You follow the plan, hit your numbers, and never
              open a food log.
            </p>
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-stone-800 mb-2">
                    Calorie Counting
                  </p>
                  <ul className="space-y-1.5 text-stone-500">
                    <li>Log every meal manually</li>
                    <li>Decide what to eat 3x/day</li>
                    <li>Research recipes yourself</li>
                    <li>Build your own grocery list</li>
                    <li>Easy to undercount by 300+</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-orange-600 mb-2">
                    Planned Meals
                  </p>
                  <ul className="space-y-1.5 text-stone-600">
                    <li>Calories pre-calculated</li>
                    <li>Zero daily decisions</li>
                    <li>Recipes included</li>
                    <li>Grocery list done for you</li>
                    <li>Hit your target every day</li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
              Your TDEE is {results ? results.tdee.toLocaleString() : "your number"} calories.
              We can build a week of meals with recipes and a grocery list that
              hits that target. It takes 30 seconds to set up and arrives in your
              inbox every Sunday.
            </p>
            <div className="text-center pt-2">
              <Link
                href="/onboarding"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-medium py-3 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-sm"
              >
                Try It Free — No Credit Card
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t border-stone-100" style={{ backgroundColor: "#FFFBF5" }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
                <h3 className="text-sm font-semibold text-stone-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-100 py-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold text-stone-800">
            What&apos;s For Dinner
          </span>
          <nav className="flex items-center gap-6">
            <Link
              href="/tools"
              className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
            >
              Free Tools
            </Link>
            <Link
              href="/blog"
              className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href="/meal-plans"
              className="text-sm text-stone-400 hover:text-orange-600 transition-colors duration-200"
            >
              Meal Plans
            </Link>
          </nav>
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} What&apos;s For Dinner
          </p>
        </div>
      </footer>
    </main>
  );
}

const faqItems = [
  {
    question: "How many calories should I eat a day?",
    answer:
      "It depends on your age, gender, height, weight, and activity level. Most adults need between 1,600 and 3,000 calories per day. Use the calculator above to find your personal number. For weight loss, subtract 500 calories from your maintenance level to lose about 1 pound per week.",
  },
  {
    question: "What is TDEE?",
    answer:
      "TDEE stands for Total Daily Energy Expenditure. It is the total number of calories your body burns in a day, including your basal metabolic rate (BMR) plus calories burned through physical activity and digestion. Your TDEE is the number you need to eat at to maintain your current weight.",
  },
  {
    question: "How to calculate calories for weight loss?",
    answer:
      "First, calculate your TDEE using the calculator above. Then subtract 500 calories to create a safe deficit that leads to about 1 pound of weight loss per week. A 500-calorie daily deficit equals roughly 3,500 calories per week. Do not go below 1,200 calories (women) or 1,500 calories (men) without medical supervision.",
  },
  {
    question: "Is 1,500 calories enough?",
    answer:
      "For many women and smaller or sedentary adults, 1,500 calories can be a healthy target for gradual weight loss. For taller, more active, or male-bodied individuals, 1,500 may be too low and could slow your metabolism. The right number depends on your personal stats, which is why using a TDEE calculator is important before setting a calorie goal.",
  },
];
