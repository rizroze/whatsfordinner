import type { FullRecipe } from "./types";

export const snackRecipes: FullRecipe[] = [
  {
    slug: "crispy-tofu-stir-fry",
    name: "Crispy Tofu Stir-Fry",
    emoji: "\u{1F96C}",
    description:
      "Golden crispy tofu cubes tossed in a garlicky soy-ginger sauce with snap peas and bell peppers. A satisfying plant-based snack or light meal.",
    cuisine: "Asian Fusion",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 2,
    ingredients: [
      { name: "extra-firm tofu, drained and cubed", amount: "14", unit: "oz" },
      { name: "cornstarch", amount: "2", unit: "tbsp" },
      { name: "soy sauce", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "rice vinegar", amount: "1", unit: "tbsp", group: "For the sauce" },
      { name: "sesame oil", amount: "1", unit: "tsp", group: "For the sauce" },
      { name: "brown sugar", amount: "1", unit: "tsp", group: "For the sauce" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp" },
      { name: "snap peas", amount: "1", unit: "cup" },
      { name: "red bell pepper, sliced", amount: "1/2", unit: "medium" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "sesame seeds", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Press the tofu: wrap in paper towels, place a heavy object on top, and let it drain for at least 10 minutes. Cut into 3/4-inch cubes.",
        tip: "Well-pressed tofu is the key to crispiness. The drier it is, the crispier it gets.",
      },
      {
        step: 2,
        instruction:
          "Toss the tofu cubes in cornstarch until evenly coated. Shake off excess.",
      },
      {
        step: 3,
        instruction:
          "Heat vegetable oil in a large non-stick skillet over medium-high heat. Add the tofu in a single layer and cook for 3-4 minutes per side (don't move it) until golden and crispy on all sides. Remove to a plate.",
      },
      {
        step: 4,
        instruction:
          "In the same skillet, add the snap peas and bell pepper. Stir-fry for 2 minutes. Add garlic and ginger, cook 30 seconds.",
      },
      {
        step: 5,
        instruction:
          "Mix the sauce ingredients together. Return the tofu to the skillet, pour in the sauce, and toss for 1 minute until everything is coated and glossy. Sprinkle with sesame seeds.",
      },
    ],
    nutrition: { calories: 280, protein: 18, carbs: 16, fat: 18, fiber: 4 },
    tags: ["vegan", "dairy-free", "high-protein", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["zucchini-noodle-primavera", "bibimbap", "pad-thai"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "spicy-tuna-crispy-rice",
    name: "Spicy Tuna Crispy Rice",
    emoji: "\u{1F363}",
    description:
      "Seared sushi rice cakes topped with spicy tuna tartare, avocado, and a drizzle of sriracha mayo. A viral restaurant appetizer you can easily make at home.",
    cuisine: "Japanese Fusion",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 10,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "sushi-grade ahi tuna", amount: "8", unit: "oz", group: "For the tuna" },
      { name: "soy sauce", amount: "1", unit: "tbsp", group: "For the tuna" },
      { name: "sesame oil", amount: "1", unit: "tsp", group: "For the tuna" },
      { name: "sriracha", amount: "1", unit: "tsp", group: "For the tuna" },
      { name: "cooked sushi rice, cooled", amount: "2", unit: "cups", group: "For the rice cakes" },
      { name: "rice vinegar", amount: "1", unit: "tbsp", group: "For the rice cakes" },
      { name: "ripe avocado, thinly sliced", amount: "1/2", unit: "medium" },
      { name: "mayonnaise", amount: "1", unit: "tbsp", group: "For the sriracha mayo" },
      { name: "sriracha", amount: "1", unit: "tsp", group: "For the sriracha mayo" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "sesame seeds", amount: "1", unit: "tsp" },
      { name: "green onion, thinly sliced", amount: "1", unit: "stalk" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Dice the tuna into 1/4-inch cubes. Toss gently with soy sauce, sesame oil, and sriracha. Refrigerate while you prepare the rice cakes.",
        tip: "Only use sushi-grade tuna from a trusted source. The fish is served raw.",
      },
      {
        step: 2,
        instruction:
          "Mix the cooled sushi rice with rice vinegar. Wet your hands and shape the rice into 8 small rectangular cakes, about 2x3 inches and 1/2-inch thick. Press firmly so they hold together.",
      },
      {
        step: 3,
        instruction:
          "Heat vegetable oil in a non-stick skillet over medium-high heat. Sear the rice cakes for 2-3 minutes per side until golden and crispy on the outside.",
      },
      {
        step: 4,
        instruction:
          "Mix the mayonnaise and sriracha for the sriracha mayo.",
      },
      {
        step: 5,
        instruction:
          "Top each crispy rice cake with a slice of avocado, a spoonful of spicy tuna, a drizzle of sriracha mayo, sesame seeds, and sliced green onion. Serve immediately.",
      },
    ],
    nutrition: { calories: 320, protein: 20, carbs: 32, fat: 12, fiber: 3 },
    tags: ["high-protein", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["salmon-poke-bowl", "vietnamese-spring-rolls", "shrimp-lettuce-wraps"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "loaded-quesadillas",
    name: "Loaded Quesadillas",
    emoji: "\u{1FAD4}",
    description:
      "Crispy tortillas loaded with three kinds of cheese, caramelized onions, roasted jalape\u00f1os, and a touch of cumin. Cut into wedges for the perfect shareable snack.",
    cuisine: "Mexican",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    totalTime: 22,
    servings: 2,
    ingredients: [
      { name: "large flour tortillas (10-inch)", amount: "2", unit: "whole" },
      { name: "shredded cheddar cheese", amount: "1/2", unit: "cup" },
      { name: "shredded Monterey Jack cheese", amount: "1/2", unit: "cup" },
      { name: "cream cheese, softened", amount: "2", unit: "tbsp" },
      { name: "yellow onion, thinly sliced", amount: "1/2", unit: "medium" },
      { name: "jalape\u00f1o pepper, seeded and sliced", amount: "1", unit: "medium" },
      { name: "ground cumin", amount: "1/4", unit: "tsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "sour cream", amount: "2", unit: "tbsp" },
      { name: "salsa", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat olive oil in a skillet over medium heat. Cook the sliced onion and jalape\u00f1o for 5-6 minutes until the onion is caramelized and the jalape\u00f1o is softened. Remove to a plate.",
      },
      {
        step: 2,
        instruction:
          "Spread a thin layer of cream cheese on one half of each tortilla. Top with the cheddar and Monterey Jack, caramelized onion mixture, and a pinch of cumin.",
      },
      {
        step: 3,
        instruction:
          "Fold the tortillas in half. Cook in a dry skillet over medium heat for 2-3 minutes per side until the tortilla is golden and crispy and the cheese is melted.",
        tip: "A dry skillet (no oil) gives the best even browning on the tortilla.",
      },
      {
        step: 4,
        instruction:
          "Cut each quesadilla into 3 wedges. Serve with sour cream and salsa for dipping.",
      },
    ],
    nutrition: { calories: 380, protein: 16, carbs: 28, fat: 24, fiber: 2 },
    tags: ["quick", "vegetarian", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-quesadilla", "breakfast-burrito", "guacamole-with-chips"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "zucchini-noodle-primavera",
    name: "Zucchini Noodle Primavera",
    emoji: "\u{1F966}",
    description:
      "Spiralized zucchini noodles tossed with sauteed spring vegetables, cherry tomatoes, garlic, and a light lemon-Parmesan sauce. A fresh, low-carb alternative to pasta.",
    cuisine: "Italian",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 8,
    totalTime: 23,
    servings: 2,
    ingredients: [
      { name: "medium zucchini, spiralized", amount: "3", unit: "medium" },
      { name: "cherry tomatoes, halved", amount: "1", unit: "cup" },
      { name: "yellow squash, diced", amount: "1", unit: "small" },
      { name: "asparagus, cut into 1-inch pieces", amount: "6", unit: "spears" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "Parmesan cheese, grated", amount: "1/4", unit: "cup" },
      { name: "lemon juice", amount: "1", unit: "tbsp" },
      { name: "lemon zest", amount: "1", unit: "tsp" },
      { name: "red pepper flakes", amount: "1/4", unit: "tsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "fresh basil", amount: "4", unit: "leaves" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Spiralize the zucchini (or use a julienne peeler). Lay the noodles on paper towels and sprinkle lightly with salt to draw out moisture. Let sit 5 minutes, then pat dry.",
        tip: "Removing excess moisture prevents the dish from getting watery. This step makes all the difference.",
      },
      {
        step: 2,
        instruction:
          "Heat 1 tbsp olive oil in a large skillet over medium-high heat. Saute the asparagus and yellow squash for 3 minutes. Add cherry tomatoes and cook 1 minute more. Remove vegetables to a plate.",
      },
      {
        step: 3,
        instruction:
          "Add remaining olive oil and garlic to the skillet. Cook 30 seconds, then add the zucchini noodles. Toss for 2 minutes until just tender (don't overcook).",
      },
      {
        step: 4,
        instruction:
          "Return the vegetables to the skillet. Add lemon juice, lemon zest, red pepper flakes, and Parmesan. Toss to combine.",
      },
      {
        step: 5,
        instruction:
          "Plate immediately, garnish with fresh basil and extra Parmesan.",
      },
    ],
    nutrition: { calories: 200, protein: 10, carbs: 16, fat: 12, fiber: 5 },
    tags: ["low-carb", "vegetarian", "gluten-free", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["ratatouille", "caprese-salad-burrata", "crispy-tofu-stir-fry"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "hummus-with-pita",
    name: "Hummus with Pita",
    emoji: "\u{1F95C}",
    description:
      "Ultra-smooth homemade hummus with a generous pool of olive oil and a sprinkle of paprika, served with warm toasted pita wedges. Miles ahead of store-bought.",
    cuisine: "Middle Eastern",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 5,
    totalTime: 15,
    servings: 4,
    ingredients: [
      { name: "canned chickpeas, drained and rinsed", amount: "15", unit: "oz" },
      { name: "tahini", amount: "1/4", unit: "cup" },
      { name: "lemon juice", amount: "3", unit: "tbsp" },
      { name: "garlic clove", amount: "1", unit: "clove" },
      { name: "ice water", amount: "3", unit: "tbsp" },
      { name: "extra virgin olive oil", amount: "2", unit: "tbsp" },
      { name: "ground cumin", amount: "1/2", unit: "tsp" },
      { name: "salt", amount: "3/4", unit: "tsp" },
      { name: "smoked paprika", amount: "1/4", unit: "tsp" },
      { name: "pita bread", amount: "4", unit: "rounds" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Add the tahini and lemon juice to a food processor. Process for 1 minute until thick and pale. This step whips air into the tahini for a smoother result.",
      },
      {
        step: 2,
        instruction:
          "Add the garlic, cumin, and salt. Process for 30 seconds. Add the chickpeas and process for 1 minute.",
      },
      {
        step: 3,
        instruction:
          "With the processor running, drizzle in the ice water. Continue processing for 2-3 minutes until the hummus is completely smooth and creamy.",
        tip: "The ice water is what makes it ultra-smooth. Don't skip it. Process longer than you think you need to.",
      },
      {
        step: 4,
        instruction:
          "Cut the pita into wedges and toast in a 375F oven for 5 minutes until crispy and lightly golden.",
      },
      {
        step: 5,
        instruction:
          "Spread the hummus on a plate using the back of a spoon to create a swirl. Drizzle generously with olive oil and sprinkle with smoked paprika. Serve with warm pita wedges.",
      },
    ],
    nutrition: { calories: 280, protein: 10, carbs: 32, fat: 14, fiber: 6 },
    tags: ["vegan", "mediterranean", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["falafel-bowl", "bruschetta", "guacamole-with-chips"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "trail-mix-energy-bites",
    name: "Trail Mix Energy Bites",
    emoji: "\u{1F36A}",
    description:
      "No-bake energy bites packed with oats, peanut butter, honey, chocolate chips, and dried cranberries. Perfect for meal prep and on-the-go snacking.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 0,
    totalTime: 15,
    servings: 12,
    ingredients: [
      { name: "rolled oats", amount: "1", unit: "cup" },
      { name: "creamy peanut butter", amount: "1/2", unit: "cup" },
      { name: "honey", amount: "1/3", unit: "cup" },
      { name: "mini chocolate chips", amount: "1/4", unit: "cup" },
      { name: "dried cranberries", amount: "1/4", unit: "cup" },
      { name: "ground flaxseed", amount: "2", unit: "tbsp" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "pinch of salt", amount: "1", unit: "pinch" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Combine all ingredients in a large bowl and stir until evenly mixed. The mixture should be sticky enough to hold together when pressed.",
      },
      {
        step: 2,
        instruction:
          "Refrigerate for 15-20 minutes so the mixture firms up and is easier to roll.",
      },
      {
        step: 3,
        instruction:
          "Roll into 12 balls (about 1 tablespoon each). Use slightly wet hands to prevent sticking.",
      },
      {
        step: 4,
        instruction:
          "Store in an airtight container in the refrigerator for up to 1 week, or freeze for up to 3 months.",
        tip: "These taste best cold from the fridge. They soften at room temperature.",
      },
    ],
    nutrition: { calories: 120, protein: 4, carbs: 16, fat: 5, fiber: 2 },
    tags: ["meal-prep", "vegetarian", "quick", "budget", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["overnight-oats", "greek-yogurt-parfait", "banana-pancakes"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "bruschetta",
    name: "Bruschetta",
    emoji: "\u{1F345}",
    description:
      "Toasted ciabatta rubbed with raw garlic and topped with a bright mix of diced tomatoes, fresh basil, balsamic vinegar, and the best olive oil you have.",
    cuisine: "Italian",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 5,
    totalTime: 15,
    servings: 4,
    ingredients: [
      { name: "ripe Roma tomatoes, diced", amount: "4", unit: "medium" },
      { name: "fresh basil, chiffonade", amount: "8", unit: "leaves" },
      { name: "extra virgin olive oil", amount: "2", unit: "tbsp" },
      { name: "balsamic vinegar", amount: "1", unit: "tbsp" },
      { name: "garlic cloves", amount: "2", unit: "cloves" },
      { name: "ciabatta or baguette, sliced 1/2-inch thick", amount: "8", unit: "slices" },
      { name: "flaky sea salt", amount: "1/4", unit: "tsp" },
      { name: "freshly cracked black pepper", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Combine the diced tomatoes, basil, 1 tbsp olive oil, balsamic vinegar, salt, and pepper in a bowl. Let it marinate for at least 10 minutes at room temperature.",
        tip: "Use the best tomatoes you can find. In winter, grape tomatoes often have better flavor than out-of-season full-size ones.",
      },
      {
        step: 2,
        instruction:
          "Toast or grill the bread slices until golden on both sides.",
      },
      {
        step: 3,
        instruction:
          "Cut one garlic clove in half. Rub the cut side over the warm toast (the rough surface acts like a grater).",
      },
      {
        step: 4,
        instruction:
          "Drizzle the toasts with remaining olive oil. Spoon the tomato mixture generously onto each slice. Serve immediately.",
      },
    ],
    nutrition: { calories: 180, protein: 5, carbs: 24, fat: 8, fiber: 2 },
    tags: ["vegan", "quick", "mediterranean", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["caprese-salad-burrata", "hummus-with-pita", "avocado-toast"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "guacamole-with-chips",
    name: "Guacamole with Chips",
    emoji: "\u{1F951}",
    description:
      "Chunky, vibrant guacamole made with ripe avocados, fresh lime, cilantro, red onion, and a kick of jalape\u00f1o. Served with warm tortilla chips.",
    cuisine: "Mexican",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    servings: 4,
    ingredients: [
      { name: "ripe avocados", amount: "3", unit: "medium" },
      { name: "lime juice", amount: "2", unit: "tbsp" },
      { name: "red onion, finely diced", amount: "1/4", unit: "small" },
      { name: "jalape\u00f1o, seeded and minced", amount: "1", unit: "small" },
      { name: "fresh cilantro, chopped", amount: "3", unit: "tbsp" },
      { name: "Roma tomato, seeded and diced", amount: "1", unit: "medium" },
      { name: "garlic clove, minced", amount: "1", unit: "clove" },
      { name: "salt", amount: "3/4", unit: "tsp" },
      { name: "tortilla chips", amount: "6", unit: "oz" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Halve the avocados and remove the pits. Scoop the flesh into a bowl.",
      },
      {
        step: 2,
        instruction:
          "Add the lime juice and salt. Mash with a fork to your desired consistency (chunky is traditional).",
        tip: "Add the lime and salt first before the other ingredients. The acid prevents browning and the salt draws out flavor.",
      },
      {
        step: 3,
        instruction:
          "Fold in the red onion, jalape\u00f1o, cilantro, tomato, and garlic. Stir gently to combine without mashing everything into paste.",
      },
      {
        step: 4,
        instruction:
          "Taste and adjust salt and lime. Serve immediately with tortilla chips.",
      },
    ],
    nutrition: { calories: 280, protein: 4, carbs: 28, fat: 18, fiber: 8 },
    tags: ["vegan", "gluten-free", "quick", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["loaded-quesadillas", "hummus-with-pita", "shrimp-tacos-chipotle-crema"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
];
