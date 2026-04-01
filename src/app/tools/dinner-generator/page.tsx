"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Meal data                                                         */
/* ------------------------------------------------------------------ */

type Difficulty = "Easy" | "Medium" | "Advanced";
type Cuisine =
  | "Italian"
  | "Mexican"
  | "Chinese"
  | "Japanese"
  | "Indian"
  | "Thai"
  | "American"
  | "Mediterranean"
  | "Korean"
  | "French"
  | "Middle Eastern"
  | "Vietnamese";
type DietaryTag = "Vegetarian" | "Vegan" | "Gluten-Free" | "Dairy-Free" | "High-Protein" | "Low-Carb";

interface Meal {
  name: string;
  cuisine: Cuisine;
  cookTime: number; // minutes
  difficulty: Difficulty;
  tags: DietaryTag[];
  description: string;
}

const MEALS: Meal[] = [
  { name: "Spaghetti Carbonara", cuisine: "Italian", cookTime: 25, difficulty: "Medium", tags: ["High-Protein"], description: "Creamy egg-and-cheese sauce tossed with crispy pancetta and al dente pasta." },
  { name: "Chicken Tikka Masala", cuisine: "Indian", cookTime: 40, difficulty: "Medium", tags: ["Gluten-Free", "High-Protein"], description: "Tender chicken pieces in a rich, spiced tomato-cream sauce served with basmati rice." },
  { name: "Beef Tacos", cuisine: "Mexican", cookTime: 20, difficulty: "Easy", tags: ["High-Protein"], description: "Seasoned ground beef in warm corn tortillas with fresh salsa, cheese, and lime." },
  { name: "Pad Thai", cuisine: "Thai", cookTime: 25, difficulty: "Medium", tags: ["Gluten-Free"], description: "Stir-fried rice noodles with shrimp, peanuts, bean sprouts, and tangy tamarind sauce." },
  { name: "Veggie Stir-Fry", cuisine: "Chinese", cookTime: 15, difficulty: "Easy", tags: ["Vegan", "Gluten-Free", "Low-Carb"], description: "Crispy vegetables tossed in a savory garlic-ginger sauce over steamed rice." },
  { name: "Margherita Pizza", cuisine: "Italian", cookTime: 30, difficulty: "Medium", tags: ["Vegetarian"], description: "Classic thin-crust pizza with San Marzano tomatoes, fresh mozzarella, and basil." },
  { name: "Chicken Burrito Bowl", cuisine: "Mexican", cookTime: 25, difficulty: "Easy", tags: ["Gluten-Free", "High-Protein"], description: "Grilled chicken over cilantro-lime rice with black beans, corn, and guacamole." },
  { name: "Miso Ramen", cuisine: "Japanese", cookTime: 35, difficulty: "Medium", tags: [], description: "Rich miso broth with ramen noodles, soft-boiled egg, corn, and sliced pork belly." },
  { name: "Greek Salad with Grilled Chicken", cuisine: "Mediterranean", cookTime: 20, difficulty: "Easy", tags: ["Gluten-Free", "High-Protein", "Low-Carb"], description: "Juicy grilled chicken over crisp greens with feta, olives, cucumber, and lemon dressing." },
  { name: "Butter Chicken", cuisine: "Indian", cookTime: 35, difficulty: "Medium", tags: ["Gluten-Free"], description: "Succulent chicken in a velvety butter-tomato sauce with warm spices and naan." },
  { name: "Teriyaki Salmon", cuisine: "Japanese", cookTime: 20, difficulty: "Easy", tags: ["Gluten-Free", "High-Protein", "Dairy-Free"], description: "Glazed salmon fillet with sweet teriyaki sauce, served with steamed broccoli and rice." },
  { name: "Shakshuka", cuisine: "Middle Eastern", cookTime: 25, difficulty: "Easy", tags: ["Vegetarian", "Gluten-Free", "Low-Carb"], description: "Eggs poached in a spiced tomato-pepper sauce with crusty bread for dipping." },
  { name: "Bibimbap", cuisine: "Korean", cookTime: 30, difficulty: "Medium", tags: ["Gluten-Free"], description: "Rice topped with sauteed vegetables, beef, a fried egg, and spicy gochujang sauce." },
  { name: "Caprese Pasta", cuisine: "Italian", cookTime: 20, difficulty: "Easy", tags: ["Vegetarian"], description: "Penne tossed with cherry tomatoes, fresh mozzarella, basil, and olive oil." },
  { name: "Fish Tacos", cuisine: "Mexican", cookTime: 20, difficulty: "Easy", tags: ["High-Protein"], description: "Crispy battered fish in soft tortillas with mango salsa and chipotle crema." },
  { name: "Green Curry", cuisine: "Thai", cookTime: 30, difficulty: "Medium", tags: ["Gluten-Free", "Dairy-Free"], description: "Fragrant coconut curry with vegetables and your choice of protein over jasmine rice." },
  { name: "Falafel Wrap", cuisine: "Middle Eastern", cookTime: 30, difficulty: "Medium", tags: ["Vegan", "Dairy-Free"], description: "Crispy chickpea falafel in warm pita with tahini sauce, pickles, and fresh veggies." },
  { name: "Chicken Parmesan", cuisine: "Italian", cookTime: 35, difficulty: "Medium", tags: ["High-Protein"], description: "Breaded chicken cutlet topped with marinara and melted mozzarella, served over spaghetti." },
  { name: "Pho", cuisine: "Vietnamese", cookTime: 45, difficulty: "Medium", tags: ["Gluten-Free", "Dairy-Free"], description: "Aromatic beef broth with rice noodles, thinly sliced beef, herbs, and lime." },
  { name: "Black Bean Enchiladas", cuisine: "Mexican", cookTime: 35, difficulty: "Easy", tags: ["Vegetarian"], description: "Corn tortillas stuffed with seasoned black beans and cheese, smothered in red sauce." },
  { name: "Kung Pao Chicken", cuisine: "Chinese", cookTime: 25, difficulty: "Medium", tags: ["Dairy-Free", "High-Protein"], description: "Spicy stir-fried chicken with peanuts, chili peppers, and Sichuan peppercorns." },
  { name: "Mushroom Risotto", cuisine: "Italian", cookTime: 40, difficulty: "Advanced", tags: ["Vegetarian", "Gluten-Free"], description: "Creamy Arborio rice slowly cooked with wild mushrooms, parmesan, and white wine." },
  { name: "Kimchi Fried Rice", cuisine: "Korean", cookTime: 15, difficulty: "Easy", tags: ["Dairy-Free"], description: "Quick fried rice with tangy kimchi, vegetables, and a crispy fried egg on top." },
  { name: "Lemon Herb Chicken", cuisine: "Mediterranean", cookTime: 30, difficulty: "Easy", tags: ["Gluten-Free", "High-Protein", "Dairy-Free", "Low-Carb"], description: "Juicy roasted chicken thighs with lemon, garlic, oregano, and roasted vegetables." },
  { name: "Vegetable Pad See Ew", cuisine: "Thai", cookTime: 20, difficulty: "Easy", tags: ["Vegan", "Dairy-Free"], description: "Wide rice noodles stir-fried with broccoli, carrots, and sweet soy sauce." },
  { name: "Quesadillas", cuisine: "Mexican", cookTime: 15, difficulty: "Easy", tags: ["Vegetarian"], description: "Crispy flour tortillas stuffed with melted cheese, peppers, and onions." },
  { name: "Chicken Shawarma", cuisine: "Middle Eastern", cookTime: 30, difficulty: "Medium", tags: ["Dairy-Free", "High-Protein"], description: "Warm-spiced chicken served in flatbread with pickled turnips and garlic sauce." },
  { name: "Cacio e Pepe", cuisine: "Italian", cookTime: 15, difficulty: "Medium", tags: ["Vegetarian"], description: "Simple yet elegant pasta with pecorino cheese and freshly cracked black pepper." },
  { name: "Banh Mi Sandwich", cuisine: "Vietnamese", cookTime: 20, difficulty: "Easy", tags: ["Dairy-Free"], description: "Crusty baguette filled with marinated pork, pickled daikon, cilantro, and jalapenos." },
  { name: "Chana Masala", cuisine: "Indian", cookTime: 30, difficulty: "Easy", tags: ["Vegan", "Gluten-Free", "Dairy-Free", "High-Protein"], description: "Spiced chickpea curry in a tomato-onion sauce served with rice or warm naan." },
  { name: "Salmon Poke Bowl", cuisine: "Japanese", cookTime: 15, difficulty: "Easy", tags: ["Gluten-Free", "High-Protein", "Dairy-Free"], description: "Fresh cubed salmon over sushi rice with avocado, edamame, and sesame dressing." },
  { name: "French Onion Soup", cuisine: "French", cookTime: 50, difficulty: "Medium", tags: [], description: "Caramelized onions in rich beef broth topped with crusty bread and melted Gruyere." },
  { name: "Veggie Burgers", cuisine: "American", cookTime: 25, difficulty: "Easy", tags: ["Vegetarian"], description: "Hearty black bean patties with avocado, lettuce, tomato, and special sauce." },
  { name: "Mapo Tofu", cuisine: "Chinese", cookTime: 20, difficulty: "Medium", tags: ["Dairy-Free"], description: "Silky tofu in a fiery, numbing Sichuan sauce with ground pork and scallions." },
  { name: "Shrimp Scampi", cuisine: "Italian", cookTime: 20, difficulty: "Easy", tags: ["Dairy-Free"], description: "Plump shrimp sauteed in garlic butter and white wine, tossed with linguine." },
  { name: "Chicken Fajitas", cuisine: "Mexican", cookTime: 25, difficulty: "Easy", tags: ["Gluten-Free", "High-Protein", "Dairy-Free"], description: "Sizzling strips of chicken with peppers and onions, served with warm tortillas." },
  { name: "Tom Yum Soup", cuisine: "Thai", cookTime: 25, difficulty: "Medium", tags: ["Gluten-Free", "Dairy-Free", "Low-Carb"], description: "Hot and sour Thai soup with shrimp, mushrooms, lemongrass, and galangal." },
  { name: "Eggplant Parmesan", cuisine: "Italian", cookTime: 45, difficulty: "Medium", tags: ["Vegetarian"], description: "Breaded and baked eggplant slices layered with marinara and melted cheese." },
  { name: "Japchae", cuisine: "Korean", cookTime: 30, difficulty: "Medium", tags: ["Dairy-Free"], description: "Sweet potato glass noodles stir-fried with vegetables, beef, and sesame oil." },
  { name: "BBQ Chicken Sliders", cuisine: "American", cookTime: 25, difficulty: "Easy", tags: ["High-Protein"], description: "Tender pulled chicken tossed in smoky BBQ sauce on mini brioche buns with coleslaw." },
  { name: "Palak Paneer", cuisine: "Indian", cookTime: 30, difficulty: "Medium", tags: ["Vegetarian", "Gluten-Free"], description: "Creamy spinach curry studded with cubes of soft paneer cheese and warm spices." },
  { name: "Croque Monsieur", cuisine: "French", cookTime: 20, difficulty: "Easy", tags: [], description: "Grilled ham-and-cheese sandwich with creamy bechamel and melted Gruyere on top." },
  { name: "Dan Dan Noodles", cuisine: "Chinese", cookTime: 20, difficulty: "Medium", tags: ["Dairy-Free"], description: "Spicy Sichuan noodles with chili oil, ground pork, and crushed peanuts." },
  { name: "Hummus Bowl", cuisine: "Middle Eastern", cookTime: 15, difficulty: "Easy", tags: ["Vegan", "Gluten-Free", "Dairy-Free", "High-Protein"], description: "Creamy hummus topped with roasted chickpeas, veggies, olive oil, and warm pita." },
  { name: "Stuffed Bell Peppers", cuisine: "American", cookTime: 40, difficulty: "Easy", tags: ["Gluten-Free", "High-Protein"], description: "Bell peppers stuffed with seasoned ground turkey, rice, tomatoes, and melted cheese." },
  { name: "Spring Rolls", cuisine: "Vietnamese", cookTime: 20, difficulty: "Easy", tags: ["Vegan", "Gluten-Free", "Dairy-Free"], description: "Fresh rice paper rolls with vermicelli, herbs, vegetables, and peanut dipping sauce." },
  { name: "Chicken Souvlaki", cuisine: "Mediterranean", cookTime: 25, difficulty: "Easy", tags: ["Gluten-Free", "High-Protein", "Dairy-Free"], description: "Marinated chicken skewers with tzatziki, tomatoes, and red onion on warm pita." },
  { name: "Ratatouille", cuisine: "French", cookTime: 45, difficulty: "Medium", tags: ["Vegan", "Gluten-Free", "Dairy-Free", "Low-Carb"], description: "Beautifully layered summer vegetables slow-roasted with herbs de Provence." },
  { name: "Tteokbokki", cuisine: "Korean", cookTime: 20, difficulty: "Easy", tags: ["Vegan", "Dairy-Free"], description: "Chewy rice cakes in a sweet-and-spicy gochujang sauce with fish cakes and scallions." },
  { name: "Classic Cheeseburger", cuisine: "American", cookTime: 20, difficulty: "Easy", tags: ["High-Protein"], description: "Juicy beef patty with cheddar, lettuce, tomato, pickles, and special sauce on a toasted bun." },
  { name: "Thai Basil Chicken", cuisine: "Thai", cookTime: 15, difficulty: "Easy", tags: ["Gluten-Free", "Dairy-Free", "High-Protein"], description: "Stir-fried ground chicken with holy basil, chili, and garlic over jasmine rice." },
  { name: "Pasta Primavera", cuisine: "Italian", cookTime: 25, difficulty: "Easy", tags: ["Vegetarian"], description: "Penne with seasonal vegetables in a light garlic-olive oil sauce with parmesan." },
  { name: "Chicken Caesar Wrap", cuisine: "American", cookTime: 15, difficulty: "Easy", tags: ["High-Protein"], description: "Grilled chicken, romaine, parmesan, and Caesar dressing wrapped in a flour tortilla." },
  { name: "Aloo Gobi", cuisine: "Indian", cookTime: 30, difficulty: "Easy", tags: ["Vegan", "Gluten-Free", "Dairy-Free"], description: "Cauliflower and potatoes cooked with turmeric, cumin, and fresh cilantro." },
  { name: "Beef Bulgogi", cuisine: "Korean", cookTime: 25, difficulty: "Medium", tags: ["Dairy-Free", "High-Protein"], description: "Thinly sliced marinated beef grilled to perfection, served with rice and pickled radish." },
];

const CUISINE_TO_SLUG: Partial<Record<Cuisine, string>> = {
  Italian: "italian",
  Mexican: "mexican",
  Chinese: "chinese",
  Japanese: "japanese",
  Indian: "indian",
  Thai: "thai",
  American: "american",
  Mediterranean: "mediterranean",
  Korean: "korean",
  French: "french",
};

type DietFilter = "any" | "vegetarian" | "vegan" | "gluten-free";
type TimeFilter = "any" | "15" | "30" | "60";

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function DinnerGeneratorPage() {
  const [result, setResult] = useState<Meal | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [slotDisplay, setSlotDisplay] = useState<string | null>(null);
  const [history, setHistory] = useState<Meal[]>([]);

  // Filters
  const [diet, setDiet] = useState<DietFilter>("any");
  const [maxTime, setMaxTime] = useState<TimeFilter>("any");
  const [cuisineFilter, setCuisineFilter] = useState<Cuisine | "any">("any");

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getFilteredMeals = useCallback(() => {
    return MEALS.filter((m) => {
      if (diet === "vegetarian" && !m.tags.includes("Vegetarian") && !m.tags.includes("Vegan")) return false;
      if (diet === "vegan" && !m.tags.includes("Vegan")) return false;
      if (diet === "gluten-free" && !m.tags.includes("Gluten-Free")) return false;
      if (maxTime !== "any" && m.cookTime > parseInt(maxTime)) return false;
      if (cuisineFilter !== "any" && m.cuisine !== cuisineFilter) return false;
      return true;
    });
  }, [diet, maxTime, cuisineFilter]);

  const spin = useCallback(() => {
    const pool = getFilteredMeals();
    if (pool.length === 0) return;

    setSpinning(true);
    setResult(null);

    let tick = 0;
    const totalTicks = 18;

    intervalRef.current = setInterval(() => {
      const randomMeal = pool[Math.floor(Math.random() * pool.length)];
      setSlotDisplay(randomMeal.name);
      tick++;

      if (tick >= totalTicks) {
        if (intervalRef.current) clearInterval(intervalRef.current);

        const winner = pool[Math.floor(Math.random() * pool.length)];
        setSlotDisplay(null);
        setResult(winner);
        setSpinning(false);
        setHistory((prev) => [winner, ...prev].slice(0, 3));
      }
    }, 80 + tick * 8);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [getFilteredMeals]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const filteredCount = getFilteredMeals().length;
  const cuisineMealPlanSlug = result ? CUISINE_TO_SLUG[result.cuisine] : null;

  const allCuisines: Cuisine[] = [
    "Italian", "Mexican", "Chinese", "Japanese", "Indian", "Thai",
    "American", "Mediterranean", "Korean", "French", "Middle Eastern", "Vietnamese",
  ];

  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <nav className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-orange-600 transition-colors"
        >
          <span className="text-lg">🍴</span>
          <span className="font-medium">What&apos;s For Dinner</span>
        </Link>
        <Link
          href="/tools"
          className="text-sm text-stone-500 hover:text-orange-600 transition-colors font-medium"
        >
          All Tools
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 pb-24">
        {/* Hero */}
        <div className="text-center pt-8 pb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            What Should I Cook Tonight?
          </h1>
          <p className="mt-3 text-stone-500 text-lg max-w-md mx-auto">
            Can&apos;t decide? Let us pick for you. Hit the button and get a dinner idea in seconds.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <select
            value={diet}
            onChange={(e) => setDiet(e.target.value as DietFilter)}
            className="px-4 py-2 rounded-full border border-stone-200 bg-white text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200"
          >
            <option value="any">Any Diet</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>

          <select
            value={maxTime}
            onChange={(e) => setMaxTime(e.target.value as TimeFilter)}
            className="px-4 py-2 rounded-full border border-stone-200 bg-white text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200"
          >
            <option value="any">Any Cook Time</option>
            <option value="15">Under 15 min</option>
            <option value="30">Under 30 min</option>
            <option value="60">Under 60 min</option>
          </select>

          <select
            value={cuisineFilter}
            onChange={(e) => setCuisineFilter(e.target.value as Cuisine | "any")}
            className="px-4 py-2 rounded-full border border-stone-200 bg-white text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200"
          >
            <option value="any">Any Cuisine</option>
            {allCuisines.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Spin Button */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <button
            onClick={spin}
            disabled={spinning || filteredCount === 0}
            className="px-10 py-4 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-lg font-bold rounded-full shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200 min-w-[280px]"
          >
            {spinning ? "Picking..." : result ? "Spin Again" : "What's For Dinner?"}
          </button>
          {filteredCount === 0 && (
            <p className="text-sm text-red-500">No meals match your filters. Try broadening your selection.</p>
          )}
          {filteredCount > 0 && !spinning && !result && (
            <p className="text-sm text-stone-400">{filteredCount} meals to choose from</p>
          )}
        </div>

        {/* Slot machine display */}
        {spinning && slotDisplay && (
          <div className="text-center mb-8">
            <div className="inline-block bg-white rounded-2xl border border-stone-200 shadow-sm px-8 py-5 min-w-[280px]">
              <p
                className="text-xl font-bold text-stone-800 transition-opacity duration-75"
                key={slotDisplay}
              >
                {slotDisplay}
              </p>
            </div>
          </div>
        )}

        {/* Result card */}
        {result && !spinning && (
          <div className="bg-white rounded-2xl border border-orange-200 shadow-lg overflow-hidden mb-8 animate-[fadeSlideUp_0.4s_ease-out]">
            {/* Card header */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-5 border-b border-orange-100">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">{result.name}</h2>
                  <p className="text-orange-600 font-medium mt-1">{result.cuisine} Cuisine</p>
                </div>
                <span className="text-4xl shrink-0" aria-hidden="true">
                  {result.cuisine === "Italian" ? "🍝" :
                   result.cuisine === "Mexican" ? "🌮" :
                   result.cuisine === "Chinese" ? "🥡" :
                   result.cuisine === "Japanese" ? "🍣" :
                   result.cuisine === "Indian" ? "🍛" :
                   result.cuisine === "Thai" ? "🍜" :
                   result.cuisine === "American" ? "🍔" :
                   result.cuisine === "Mediterranean" ? "🥗" :
                   result.cuisine === "Korean" ? "🍚" :
                   result.cuisine === "French" ? "🥖" :
                   result.cuisine === "Middle Eastern" ? "🧆" :
                   result.cuisine === "Vietnamese" ? "🍲" : "🍽️"}
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="px-6 py-5">
              <p className="text-stone-600 leading-relaxed mb-5">{result.description}</p>

              <div className="flex flex-wrap gap-4 mb-5">
                <div className="flex items-center gap-2 text-sm text-stone-600">
                  <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{result.cookTime} min</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-600">
                  <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>{result.difficulty}</span>
                </div>
              </div>

              {result.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {result.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Conversion CTA */}
            <div className="border-t border-orange-100 bg-orange-50/50 px-6 py-5">
              <p className="text-sm text-stone-700 font-medium mb-3">
                Want a full week of meals like this? Get your free meal plan with recipes and a grocery list.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/onboarding"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Get Your Free Meal Plan
                </Link>
                {cuisineMealPlanSlug && (
                  <Link
                    href={`/meal-plans/${cuisineMealPlanSlug}`}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-white border border-stone-200 hover:border-orange-300 text-stone-700 text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    Browse {result.cuisine} Meal Plans
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        {/* History */}
        {history.length > 1 && (
          <div className="mb-12">
            <h3 className="text-sm font-medium text-stone-400 uppercase tracking-wide mb-3">Previous Suggestions</h3>
            <div className="space-y-2">
              {history.slice(1).map((meal, i) => (
                <div
                  key={`${meal.name}-${i}`}
                  className="flex items-center justify-between bg-white rounded-xl border border-stone-100 px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-stone-800 text-sm">{meal.name}</p>
                    <p className="text-xs text-stone-400">{meal.cuisine} &middot; {meal.cookTime} min &middot; {meal.difficulty}</p>
                  </div>
                  {meal.tags.length > 0 && (
                    <span className="text-xs text-orange-600 font-medium hidden sm:block">
                      {meal.tags[0]}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom conversion section */}
        <div className="text-center py-10 border-t border-stone-100">
          <p className="text-stone-400 text-sm">
            Tired of deciding every night?{" "}
            <Link href="/onboarding" className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200">
              Let AI plan your whole week
            </Link>
          </p>
          <p className="text-xs text-stone-400 mt-3">
            Personalized meal plans with recipes and a grocery list. Free to try.
          </p>
        </div>

        {/* FAQ for SEO */}
        <div className="mt-12 space-y-6">
          <h2 className="text-xl font-bold text-stone-900">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="group bg-white rounded-xl border border-stone-100 px-5 py-4">
              <summary className="font-medium text-stone-800 cursor-pointer list-none flex items-center justify-between">
                What should I cook tonight?
                <svg className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 text-stone-600 text-sm leading-relaxed">
                Use our free dinner generator above to get a random meal idea based on your dietary preferences and time constraints. You can filter by cuisine, cook time, and dietary needs to find the perfect dinner. If you want a full week planned out, try our free AI meal planner that generates personalized meal plans with recipes and a grocery list.
              </p>
            </details>

            <details className="group bg-white rounded-xl border border-stone-100 px-5 py-4">
              <summary className="font-medium text-stone-800 cursor-pointer list-none flex items-center justify-between">
                How do I decide what to eat for dinner?
                <svg className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 text-stone-600 text-sm leading-relaxed">
                Decision fatigue is real. Start by narrowing down: what cuisine sounds good? How much time do you have? Any dietary restrictions? Our dinner generator does this for you - set your filters and let it pick. For long-term relief from the daily &quot;what&apos;s for dinner&quot; question, a weekly meal plan eliminates the decision entirely.
              </p>
            </details>

            <details className="group bg-white rounded-xl border border-stone-100 px-5 py-4">
              <summary className="font-medium text-stone-800 cursor-pointer list-none flex items-center justify-between">
                What is a quick dinner to make tonight?
                <svg className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 text-stone-600 text-sm leading-relaxed">
                Set the &quot;Under 15 min&quot; filter above and hit the button. Quick winners include kimchi fried rice (15 min), quesadillas (15 min), cacio e pepe (15 min), veggie stir-fry (15 min), and salmon poke bowls (15 min). All are real meals you can make with common ingredients.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
