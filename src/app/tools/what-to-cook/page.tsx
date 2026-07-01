"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Mood = "comforting" | "light" | "spicy" | "wildcard";
type DietaryNeed =
  | "none"
  | "vegetarian"
  | "gluten-free"
  | "dairy-free"
  | "low-carb";
type ServingsRange = "1" | "2" | "3-5" | "6+";

interface Recipe {
  name: string;
  description: string;
  cookTime: number;
  cuisine: string;
  mood: Mood[];
  dietaryTags: DietaryNeed[];
  servings: ServingsRange[];
}

const CUISINE_EMOJI: Record<string, string> = {
  American: "\uD83C\uDDFA\uD83C\uDDF8",
  Italian: "\uD83C\uDDEE\uD83C\uDDF9",
  Mexican: "\uD83C\uDDF2\uD83C\uDDFD",
  Indian: "\uD83C\uDDEE\uD83C\uDDF3",
  Japanese: "\uD83C\uDDEF\uD83C\uDDF5",
  Thai: "\uD83C\uDDF9\uD83C\uDDED",
  Korean: "\uD83C\uDDF0\uD83C\uDDF7",
  Chinese: "\uD83C\uDDE8\uD83C\uDDF3",
  Vietnamese: "\uD83C\uDDFB\uD83C\uDDF3",
  French: "\uD83C\uDDEB\uD83C\uDDF7",
  Mediterranean: "\uD83C\uDDEC\uD83C\uDDF7",
  "Middle Eastern": "\uD83E\uDED2",
  Caribbean: "\uD83C\uDDF1\uD83C\uDDE8",
  British: "\uD83C\uDDEC\uD83C\uDDE7",
};

const MEAL_EMOJI: Record<string, string> = {
  "Grilled Cheese & Tomato Soup": "\uD83E\uDDC0",
  "Loaded Quesadillas": "\uD83C\uDF2F",
  "Cacio e Pepe": "\uD83C\uDF5D",
  "Spaghetti Carbonara": "\uD83C\uDF5D",
  "One-Pot Mac and Cheese": "\uD83E\uDDC0",
  "Butter Chicken": "\uD83C\uDF5B",
  "Chicken Pot Pie Soup": "\uD83C\uDF72",
  "Beef Stew": "\uD83E\uDD69",
  "Mushroom Risotto": "\uD83C\uDF44",
  "Homemade Lasagna": "\uD83C\uDF5D",
  "Salmon Poke Bowl": "\uD83C\uDF63",
  "Caprese Salad with Burrata": "\uD83E\uDD57",
  "Vietnamese Spring Rolls": "\uD83E\uDD6A",
  "Greek Chicken Salad": "\uD83E\uDD57",
  "Shrimp Lettuce Wraps": "\uD83E\uDD90",
  "Zucchini Noodle Primavera": "\uD83E\uDD52",
  "Miso Glazed Salmon": "\uD83C\uDF63",
  Ratatouille: "\uD83C\uDF46",
  "Herb-Crusted Baked Cod": "\uD83D\uDC1F",
  "Thai Basil Chicken": "\uD83C\uDF36\uFE0F",
  "Kimchi Fried Rice": "\uD83C\uDF5A",
  "Spicy Tuna Crispy Rice": "\uD83C\uDF63",
  "Chicken Tikka Masala": "\uD83C\uDF5B",
  "Kung Pao Chicken": "\uD83E\uDD5C",
  "Shrimp Tacos with Chipotle Crema": "\uD83C\uDF2E",
  "Dan Dan Noodles": "\uD83C\uDF5C",
  "Jerk Chicken": "\uD83C\uDF57",
  "Green Curry": "\uD83C\uDF5B",
  "Birria Tacos": "\uD83C\uDF2E",
  Shakshuka: "\uD83C\uDF73",
  Bibimbap: "\uD83C\uDF5A",
  "Fish and Chips": "\uD83D\uDC1F",
  "Chicken Shawarma Plate": "\uD83E\uDD59",
  "Pad Thai": "\uD83C\uDF5C",
  "Stuffed Bell Peppers": "\uD83E\uDED1",
  "Falafel Bowl": "\uD83E\uDDC6",
  "Japanese Curry Rice": "\uD83C\uDF5B",
  "Crispy Tofu Stir-Fry": "\uD83E\uDD6C",
  "Beef Bulgogi": "\uD83E\uDD69",
};

/* ------------------------------------------------------------------ */
/*  Recipe data (~40 recipes)                                          */
/* ------------------------------------------------------------------ */

const RECIPES: Recipe[] = [
  // COMFORTING — Quick (15 min)
  {
    name: "Grilled Cheese & Tomato Soup",
    description:
      "Buttery, golden grilled cheese sandwiches dunked into a warm, creamy tomato soup. The ultimate comfort combo that takes minutes to make.",
    cookTime: 15,
    cuisine: "American",
    mood: ["comforting"],
    dietaryTags: ["none", "vegetarian"],
    servings: ["1", "2", "3-5"],
  },
  {
    name: "Loaded Quesadillas",
    description:
      "Crispy flour tortillas stuffed with melted cheese, black beans, corn, and a drizzle of hot sauce. Ready before you can pick a movie.",
    cookTime: 15,
    cuisine: "Mexican",
    mood: ["comforting"],
    dietaryTags: ["none", "vegetarian"],
    servings: ["1", "2", "3-5"],
  },
  {
    name: "Cacio e Pepe",
    description:
      "Simple, elegant Roman pasta with just pecorino cheese and black pepper. Creamy without any cream. Five ingredients, fifteen minutes.",
    cookTime: 15,
    cuisine: "Italian",
    mood: ["comforting"],
    dietaryTags: ["none", "vegetarian"],
    servings: ["1", "2"],
  },
  // COMFORTING — Medium (30 min)
  {
    name: "Spaghetti Carbonara",
    description:
      "Silky egg-and-cheese sauce clings to every strand of pasta, studded with crispy pancetta. Rich, satisfying, and impossibly creamy without any cream.",
    cookTime: 25,
    cuisine: "Italian",
    mood: ["comforting"],
    dietaryTags: ["none"],
    servings: ["1", "2", "3-5"],
  },
  {
    name: "One-Pot Mac and Cheese",
    description:
      "Ultra-creamy stovetop mac and cheese made in a single pot. Sharp cheddar, a touch of mustard, and buttery breadcrumb topping.",
    cookTime: 25,
    cuisine: "American",
    mood: ["comforting"],
    dietaryTags: ["none", "vegetarian"],
    servings: ["2", "3-5", "6+"],
  },
  {
    name: "Butter Chicken",
    description:
      "Tender chicken simmered in a velvety butter-tomato sauce with warm spices. Served with fluffy basmati rice or warm naan.",
    cookTime: 35,
    cuisine: "Indian",
    mood: ["comforting"],
    dietaryTags: ["none", "gluten-free"],
    servings: ["2", "3-5", "6+"],
  },
  {
    name: "Chicken Pot Pie Soup",
    description:
      "All the flavors of chicken pot pie in a cozy, creamy soup. Topped with puff pastry croutons for that golden, flaky finish.",
    cookTime: 35,
    cuisine: "American",
    mood: ["comforting"],
    dietaryTags: ["none"],
    servings: ["3-5", "6+"],
  },
  // COMFORTING — Long (45+ min)
  {
    name: "Beef Stew",
    description:
      "Fork-tender beef chunks in a rich, wine-braised gravy with carrots, potatoes, and herbs. The kind of meal that fills the house with warmth.",
    cookTime: 90,
    cuisine: "French",
    mood: ["comforting"],
    dietaryTags: ["none", "gluten-free", "dairy-free"],
    servings: ["3-5", "6+"],
  },
  {
    name: "Mushroom Risotto",
    description:
      "Creamy Arborio rice slow-stirred with earthy wild mushrooms, parmesan, and a splash of white wine. Worth every minute of stirring.",
    cookTime: 40,
    cuisine: "Italian",
    mood: ["comforting"],
    dietaryTags: ["none", "vegetarian", "gluten-free"],
    servings: ["2", "3-5"],
  },
  {
    name: "Homemade Lasagna",
    description:
      "Layers of pasta, rich meat sauce, ricotta, and melted mozzarella baked until bubbly and golden. A labor of love that feeds a crowd.",
    cookTime: 75,
    cuisine: "Italian",
    mood: ["comforting"],
    dietaryTags: ["none"],
    servings: ["3-5", "6+"],
  },
  // LIGHT — Quick (15 min)
  {
    name: "Salmon Poke Bowl",
    description:
      "Fresh cubed salmon over sushi rice with avocado, edamame, cucumber, and a sesame-soy dressing. Light, bright, and satisfying.",
    cookTime: 15,
    cuisine: "Japanese",
    mood: ["light"],
    dietaryTags: ["none", "gluten-free", "dairy-free"],
    servings: ["1", "2"],
  },
  {
    name: "Caprese Salad with Burrata",
    description:
      "Creamy burrata over ripe tomatoes, fresh basil, and a drizzle of balsamic glaze. Simple enough to feel fancy.",
    cookTime: 10,
    cuisine: "Italian",
    mood: ["light"],
    dietaryTags: ["none", "vegetarian", "gluten-free", "low-carb"],
    servings: ["1", "2"],
  },
  {
    name: "Vietnamese Spring Rolls",
    description:
      "Fresh rice paper rolls filled with vermicelli, herbs, shrimp, and crunchy vegetables. Served with a sweet peanut dipping sauce.",
    cookTime: 15,
    cuisine: "Vietnamese",
    mood: ["light"],
    dietaryTags: ["none", "gluten-free", "dairy-free"],
    servings: ["1", "2", "3-5"],
  },
  // LIGHT — Medium (30 min)
  {
    name: "Greek Chicken Salad",
    description:
      "Grilled lemon-herb chicken over crisp greens with feta, kalamata olives, cucumber, and a bright lemon vinaigrette.",
    cookTime: 25,
    cuisine: "Mediterranean",
    mood: ["light"],
    dietaryTags: ["none", "gluten-free", "low-carb"],
    servings: ["1", "2", "3-5"],
  },
  {
    name: "Shrimp Lettuce Wraps",
    description:
      "Juicy garlic-lime shrimp tucked into crisp butter lettuce cups with mango salsa and a drizzle of sriracha mayo.",
    cookTime: 20,
    cuisine: "Thai",
    mood: ["light"],
    dietaryTags: ["none", "gluten-free", "dairy-free", "low-carb"],
    servings: ["1", "2", "3-5"],
  },
  {
    name: "Zucchini Noodle Primavera",
    description:
      "Spiralized zucchini tossed with seasonal vegetables, cherry tomatoes, garlic, and a light olive oil sauce. All the flavor, none of the heaviness.",
    cookTime: 20,
    cuisine: "Italian",
    mood: ["light"],
    dietaryTags: ["none", "vegetarian", "gluten-free", "dairy-free", "low-carb"],
    servings: ["1", "2"],
  },
  {
    name: "Miso Glazed Salmon",
    description:
      "Flaky salmon with a sweet-savory miso glaze, served alongside steamed bok choy and jasmine rice. Elegant enough for date night.",
    cookTime: 25,
    cuisine: "Japanese",
    mood: ["light"],
    dietaryTags: ["none", "dairy-free"],
    servings: ["1", "2"],
  },
  // LIGHT — Long (45+ min)
  {
    name: "Ratatouille",
    description:
      "Beautifully layered summer vegetables slow-roasted with herbs de Provence. Light, colorful, and deeply flavorful.",
    cookTime: 50,
    cuisine: "French",
    mood: ["light"],
    dietaryTags: ["none", "vegetarian", "gluten-free", "dairy-free", "low-carb"],
    servings: ["2", "3-5", "6+"],
  },
  {
    name: "Herb-Crusted Baked Cod",
    description:
      "Flaky cod fillets baked with a lemon-herb panko crust, served over roasted asparagus and baby potatoes.",
    cookTime: 45,
    cuisine: "Mediterranean",
    mood: ["light"],
    dietaryTags: ["none", "dairy-free"],
    servings: ["2", "3-5"],
  },
  // SPICY — Quick (15 min)
  {
    name: "Thai Basil Chicken",
    description:
      "Stir-fried ground chicken with holy basil, chili, garlic, and fish sauce over jasmine rice. Fast, fiery, and addictive.",
    cookTime: 15,
    cuisine: "Thai",
    mood: ["spicy"],
    dietaryTags: ["none", "gluten-free", "dairy-free"],
    servings: ["1", "2"],
  },
  {
    name: "Kimchi Fried Rice",
    description:
      "Quick fried rice with tangy kimchi, gochujang, vegetables, and a crispy fried egg on top. Spicy, sour, and deeply satisfying.",
    cookTime: 15,
    cuisine: "Korean",
    mood: ["spicy"],
    dietaryTags: ["none", "dairy-free"],
    servings: ["1", "2"],
  },
  {
    name: "Spicy Tuna Crispy Rice",
    description:
      "Crispy seared rice cakes topped with seasoned spicy tuna, sriracha mayo, and scallions. Restaurant-quality in 15 minutes.",
    cookTime: 15,
    cuisine: "Japanese",
    mood: ["spicy"],
    dietaryTags: ["none", "dairy-free"],
    servings: ["1", "2"],
  },
  // SPICY — Medium (30 min)
  {
    name: "Chicken Tikka Masala",
    description:
      "Tender marinated chicken in a rich, spiced tomato-cream sauce. Pair with basmati rice and warm naan for a deeply satisfying meal.",
    cookTime: 35,
    cuisine: "Indian",
    mood: ["spicy", "comforting"],
    dietaryTags: ["none", "gluten-free"],
    servings: ["2", "3-5", "6+"],
  },
  {
    name: "Kung Pao Chicken",
    description:
      "Spicy stir-fried chicken with roasted peanuts, chili peppers, and the signature tingle of Sichuan peppercorns.",
    cookTime: 25,
    cuisine: "Chinese",
    mood: ["spicy"],
    dietaryTags: ["none", "dairy-free"],
    servings: ["2", "3-5"],
  },
  {
    name: "Shrimp Tacos with Chipotle Crema",
    description:
      "Blackened shrimp in warm corn tortillas with crunchy slaw and a smoky chipotle crema. Spicy, fresh, and totally addictive.",
    cookTime: 25,
    cuisine: "Mexican",
    mood: ["spicy"],
    dietaryTags: ["none", "gluten-free"],
    servings: ["2", "3-5"],
  },
  {
    name: "Dan Dan Noodles",
    description:
      "Spicy Sichuan noodles swimming in chili oil with ground pork, crushed peanuts, and preserved vegetables. Numbing, warming, incredible.",
    cookTime: 20,
    cuisine: "Chinese",
    mood: ["spicy", "comforting"],
    dietaryTags: ["none", "dairy-free"],
    servings: ["1", "2"],
  },
  {
    name: "Jerk Chicken",
    description:
      "Chicken marinated in a fiery blend of scotch bonnet peppers, allspice, and thyme. Grilled until charred and served with rice and peas.",
    cookTime: 35,
    cuisine: "Caribbean",
    mood: ["spicy"],
    dietaryTags: ["none", "gluten-free", "dairy-free"],
    servings: ["2", "3-5", "6+"],
  },
  // SPICY — Long (45+ min)
  {
    name: "Green Curry",
    description:
      "Fragrant Thai coconut curry loaded with vegetables and your choice of protein. The slow simmer builds layers of heat and flavor.",
    cookTime: 45,
    cuisine: "Thai",
    mood: ["spicy"],
    dietaryTags: ["none", "gluten-free", "dairy-free"],
    servings: ["2", "3-5", "6+"],
  },
  {
    name: "Birria Tacos",
    description:
      "Slow-braised, chili-marinated beef tucked into crispy, consomme-dipped tortillas. Messy, spicy, and absolutely worth the wait.",
    cookTime: 120,
    cuisine: "Mexican",
    mood: ["spicy", "comforting"],
    dietaryTags: ["none", "gluten-free", "dairy-free"],
    servings: ["3-5", "6+"],
  },
  // WILDCARD (Surprise me)
  {
    name: "Shakshuka",
    description:
      "Eggs poached in a smoky, spiced tomato-pepper sauce. Serve it with crusty bread and eat it straight from the skillet.",
    cookTime: 25,
    cuisine: "Middle Eastern",
    mood: ["wildcard", "comforting"],
    dietaryTags: ["none", "vegetarian", "gluten-free", "low-carb"],
    servings: ["1", "2", "3-5"],
  },
  {
    name: "Bibimbap",
    description:
      "A beautiful bowl of rice topped with sauteed vegetables, seasoned beef, a fried egg, and fiery gochujang. Mix it all together and dig in.",
    cookTime: 30,
    cuisine: "Korean",
    mood: ["wildcard", "spicy"],
    dietaryTags: ["none", "gluten-free", "dairy-free"],
    servings: ["1", "2"],
  },
  {
    name: "Fish and Chips",
    description:
      "Crispy beer-battered cod with golden, fluffy chips and tangy tartar sauce. A British classic that never gets old.",
    cookTime: 35,
    cuisine: "British",
    mood: ["wildcard", "comforting"],
    dietaryTags: ["none", "dairy-free"],
    servings: ["1", "2", "3-5"],
  },
  {
    name: "Chicken Shawarma Plate",
    description:
      "Warm-spiced, juicy chicken carved and served with fluffy rice, hummus, pickled turnips, and garlic sauce. A feast on a plate.",
    cookTime: 35,
    cuisine: "Middle Eastern",
    mood: ["wildcard", "spicy"],
    dietaryTags: ["none", "dairy-free"],
    servings: ["2", "3-5", "6+"],
  },
  {
    name: "Pad Thai",
    description:
      "Stir-fried rice noodles with shrimp, peanuts, bean sprouts, and a tangy tamarind sauce. Sweet, sour, salty, and a little spicy.",
    cookTime: 25,
    cuisine: "Thai",
    mood: ["wildcard", "light"],
    dietaryTags: ["none", "gluten-free", "dairy-free"],
    servings: ["1", "2"],
  },
  {
    name: "Stuffed Bell Peppers",
    description:
      "Colorful bell peppers filled with seasoned ground turkey, rice, tomatoes, and melted cheese. A wholesome dinner the whole family loves.",
    cookTime: 45,
    cuisine: "American",
    mood: ["wildcard", "comforting"],
    dietaryTags: ["none", "gluten-free"],
    servings: ["2", "3-5", "6+"],
  },
  {
    name: "Falafel Bowl",
    description:
      "Crispy homemade falafel over fluffy couscous with hummus, pickled onions, tahini, and a bright herb salad.",
    cookTime: 35,
    cuisine: "Middle Eastern",
    mood: ["wildcard", "light"],
    dietaryTags: ["none", "vegetarian", "dairy-free"],
    servings: ["1", "2", "3-5"],
  },
  {
    name: "Japanese Curry Rice",
    description:
      "Thick, savory Japanese curry with tender potatoes, carrots, and chicken over steamed rice. Cozy, sweet, and deeply satisfying.",
    cookTime: 45,
    cuisine: "Japanese",
    mood: ["wildcard", "comforting"],
    dietaryTags: ["none", "dairy-free"],
    servings: ["2", "3-5", "6+"],
  },
  {
    name: "Crispy Tofu Stir-Fry",
    description:
      "Golden, crispy tofu tossed with colorful vegetables in a savory garlic-ginger sauce. Plant-based and packed with flavor.",
    cookTime: 25,
    cuisine: "Chinese",
    mood: ["wildcard", "light"],
    dietaryTags: ["none", "vegetarian", "dairy-free", "gluten-free"],
    servings: ["1", "2", "3-5"],
  },
  {
    name: "Beef Bulgogi",
    description:
      "Thinly sliced marinated beef, sweet and savory, grilled to caramelized perfection. Served with rice, pickled radish, and lettuce wraps.",
    cookTime: 30,
    cuisine: "Korean",
    mood: ["wildcard"],
    dietaryTags: ["none", "dairy-free", "gluten-free"],
    servings: ["2", "3-5"],
  },
];

/* ------------------------------------------------------------------ */
/*  Quiz steps                                                         */
/* ------------------------------------------------------------------ */

interface QuizStep {
  question: string;
  options: { label: string; value: string }[];
}

const STEPS: QuizStep[] = [
  {
    question: "How much time do you have?",
    options: [
      { label: "15 minutes", value: "15" },
      { label: "30 minutes", value: "30" },
      { label: "45+ minutes", value: "45" },
      { label: "I've got all day", value: "all" },
    ],
  },
  {
    question: "What sounds good right now?",
    options: [
      { label: "Something comforting", value: "comforting" },
      { label: "Something light & fresh", value: "light" },
      { label: "Something spicy", value: "spicy" },
      { label: "Surprise me", value: "wildcard" },
    ],
  },
  {
    question: "Any dietary needs?",
    options: [
      { label: "No restrictions", value: "none" },
      { label: "Vegetarian", value: "vegetarian" },
      { label: "Gluten-free", value: "gluten-free" },
      { label: "Dairy-free", value: "dairy-free" },
      { label: "Low-carb", value: "low-carb" },
    ],
  },
  {
    question: "Cooking for how many?",
    options: [
      { label: "Just me", value: "1" },
      { label: "Two", value: "2" },
      { label: "Family (3-5)", value: "3-5" },
      { label: "Crowd (6+)", value: "6+" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function WhatToCookPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Recipe | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const pickRecipe = useCallback(
    (finalAnswers: string[]) => {
      const [time, mood, diet, servings] = finalAnswers;

      // Filter by time
      const maxTime =
        time === "15"
          ? 15
          : time === "30"
            ? 30
            : time === "45"
              ? 60
              : Infinity;

      const filtered = RECIPES.filter((r) => {
        // Time check
        if (r.cookTime > maxTime) return false;

        // Mood check — "wildcard" matches everything
        if (mood !== "wildcard" && !r.mood.includes(mood as Mood)) return false;

        // Dietary check — "none" matches everything
        if (diet !== "none" && !r.dietaryTags.includes(diet as DietaryNeed))
          return false;

        // Servings check
        if (!r.servings.includes(servings as ServingsRange)) return false;

        return true;
      });

      // If no exact matches, relax constraints progressively
      if (filtered.length === 0) {
        // Try without servings constraint
        const relaxed = RECIPES.filter((r) => {
          if (r.cookTime > maxTime) return false;
          if (mood !== "wildcard" && !r.mood.includes(mood as Mood))
            return false;
          if (diet !== "none" && !r.dietaryTags.includes(diet as DietaryNeed))
            return false;
          return true;
        });
        if (relaxed.length > 0) {
          return relaxed[Math.floor(Math.random() * relaxed.length)];
        }

        // Try with just time and diet
        const minimal = RECIPES.filter((r) => {
          if (r.cookTime > maxTime) return false;
          if (diet !== "none" && !r.dietaryTags.includes(diet as DietaryNeed))
            return false;
          return true;
        });
        if (minimal.length > 0) {
          return minimal[Math.floor(Math.random() * minimal.length)];
        }

        // Last resort: random recipe
        return RECIPES[Math.floor(Math.random() * RECIPES.length)];
      }

      return filtered[Math.floor(Math.random() * filtered.length)];
    },
    []
  );

  const handleSelect = useCallback(
    (value: string) => {
      if (transitioning) return;

      const newAnswers = [...answers, value];

      if (currentStep < STEPS.length - 1) {
        // Transition to next step
        setTransitioning(true);
        setTimeout(() => {
          setAnswers(newAnswers);
          setCurrentStep((s) => s + 1);
          setTransitioning(false);
        }, 200);
      } else {
        // Final step — show result
        setTransitioning(true);
        setTimeout(() => {
          setAnswers(newAnswers);
          setResult(pickRecipe(newAnswers));
          setTransitioning(false);
        }, 200);
      }
    },
    [answers, currentStep, transitioning, pickRecipe]
  );

  const handleTryAgain = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      // Re-pick with same answers
      setResult(pickRecipe(answers));
      setTransitioning(false);
    }, 200);
  }, [answers, pickRecipe]);

  const handleStartOver = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentStep(0);
      setAnswers([]);
      setResult(null);
      setTransitioning(false);
    }, 200);
  }, []);

  const step = STEPS[currentStep];

  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <nav className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-orange-600 transition-colors"
        >
          <img src="/logo-orange.svg" alt="" className="w-6 h-6" />
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
            Answer 4 quick questions and we&apos;ll pick the perfect dinner for
            you.
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-10">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                result
                  ? "bg-orange-500"
                  : i < currentStep
                    ? "bg-orange-500"
                    : i === currentStep
                      ? "bg-orange-400 scale-125"
                      : "bg-stone-200"
              }`}
            />
          ))}
        </div>

        {/* Quiz area */}
        {!result ? (
          <div
            className={`transition-all duration-200 ease-out ${
              transitioning
                ? "opacity-0 translate-y-3"
                : "opacity-100 translate-y-0"
            }`}
          >
            {/* Question */}
            <h2 className="text-2xl font-bold text-stone-900 text-center mb-8">
              {step.question}
            </h2>

            {/* Options */}
            <div className="grid gap-3 max-w-md mx-auto">
              {step.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className="w-full text-left px-6 py-4 bg-white rounded-2xl border-2 border-stone-200 text-stone-800 font-medium text-lg hover:border-orange-300 hover:bg-orange-50 active:scale-[0.98] transition-all duration-200 min-h-[56px]"
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Step counter */}
            <p className="text-center text-sm text-stone-400 mt-6">
              Question {currentStep + 1} of {STEPS.length}
            </p>
          </div>
        ) : (
          /* Result card */
          <div
            className={`transition-all duration-300 ease-out ${
              transitioning
                ? "opacity-0 translate-y-3"
                : "opacity-100 translate-y-0"
            }`}
          >
            {/* Celebration text */}
            <p className="text-center text-stone-500 text-sm font-medium uppercase tracking-wide mb-4">
              Tonight, you should make...
            </p>

            <div className="bg-white rounded-2xl border-2 border-orange-200 shadow-lg overflow-hidden">
              {/* Orange accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-orange-400 to-amber-400" />

              {/* Card content */}
              <div className="px-6 sm:px-8 py-8">
                {/* Big emoji + flag */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-5xl sm:text-6xl leading-none">
                    {MEAL_EMOJI[result.name] ?? "\uD83C\uDF7D\uFE0F"}
                  </span>
                  <span className="text-2xl leading-none">
                    {CUISINE_EMOJI[result.cuisine] ?? ""}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                  {result.name}
                </h2>
                <p className="text-orange-600 font-medium text-sm mb-5">
                  {result.cuisine} Cuisine
                </p>

                <p className="text-stone-600 leading-relaxed text-base mb-6">
                  {result.description}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <svg
                      className="w-4 h-4 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{result.cookTime} min</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <svg
                      className="w-4 h-4 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      Serves{" "}
                      {result.servings
                        .map((s) =>
                          s === "1"
                            ? "1"
                            : s === "2"
                              ? "2"
                              : s === "3-5"
                                ? "3-5"
                                : "6+"
                        )
                        .join(", ")}
                    </span>
                  </div>
                </div>

                {/* Dietary tags */}
                {result.dietaryTags.filter((t) => t !== "none").length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {result.dietaryTags
                      .filter((t) => t !== "none")
                      .map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100 capitalize"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="border-t border-stone-100 px-6 sm:px-8 py-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleTryAgain}
                  className="flex-1 px-6 py-3 bg-white border-2 border-stone-200 hover:border-orange-300 text-stone-700 font-medium rounded-full transition-all duration-200 active:scale-[0.98] min-h-[48px]"
                >
                  Not feeling it? Try again
                </button>
                <button
                  onClick={handleStartOver}
                  className="flex-1 px-6 py-3 bg-white border-2 border-stone-200 hover:border-orange-300 text-stone-700 font-medium rounded-full transition-all duration-200 active:scale-[0.98] min-h-[48px]"
                >
                  Start over
                </button>
              </div>
            </div>

            {/* Conversion CTA */}
            <div className="mt-8 text-center bg-white rounded-2xl border border-stone-200 p-6 sm:p-8">
              <p className="text-stone-800 font-semibold text-lg mb-2">
                Want a full week of meals like this?
              </p>
              <p className="text-stone-500 text-sm mb-5">
                Get a personalized meal plan with recipes and a grocery list.
                Free personalized preview, no credit card required.
              </p>
              <Link
                href="/onboarding"
                className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200 min-h-[48px]"
              >
                Preview Your Meal Plan
              </Link>
            </div>
          </div>
        )}

        {/* Bottom text */}
        <div className="text-center py-10 border-t border-stone-100 mt-12">
          <p className="text-stone-400 text-sm">
            Tired of deciding every night?{" "}
            <Link
              href="/onboarding"
              className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Let AI plan your whole week
            </Link>
          </p>
          <p className="text-xs text-stone-400 mt-3">
            Personalized meal plans with recipes and a grocery list. Free to
            try.
          </p>
        </div>

        {/* FAQ for SEO */}
        <div className="mt-8 space-y-6">
          <h2 className="text-xl font-bold text-stone-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="group bg-white rounded-xl border border-stone-100 px-5 py-4">
              <summary className="font-medium text-stone-800 cursor-pointer list-none flex items-center justify-between">
                What should I cook tonight?
                <svg
                  className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-stone-600 text-sm leading-relaxed">
                Take our quick 4-question quiz above to get a personalized
                dinner recommendation based on your available time, mood,
                dietary needs, and group size. If you want a full week planned
                out, try our free AI meal planner that generates personalized
                meal plans with recipes and a grocery list.
              </p>
            </details>

            <details className="group bg-white rounded-xl border border-stone-100 px-5 py-4">
              <summary className="font-medium text-stone-800 cursor-pointer list-none flex items-center justify-between">
                How does the dinner quiz work?
                <svg
                  className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-stone-600 text-sm leading-relaxed">
                The quiz asks you four simple questions: how much time you have,
                what type of food sounds good, any dietary restrictions, and how
                many people you are cooking for. Based on your answers, it
                matches you with a dinner idea from our curated recipe database.
                Everything runs instantly in your browser with no signup
                required.
              </p>
            </details>

            <details className="group bg-white rounded-xl border border-stone-100 px-5 py-4">
              <summary className="font-medium text-stone-800 cursor-pointer list-none flex items-center justify-between">
                What if I do not like the suggestion?
                <svg
                  className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-stone-600 text-sm leading-relaxed">
                Hit the &quot;Not feeling it? Try again&quot; button to get
                another recommendation based on your same preferences. You can
                also start over from scratch to change your answers. The quiz
                pulls from over 40 recipes, so there is always something new to
                try.
              </p>
            </details>
          </div>
        </div>
      </div>
    </main>
  );
}
