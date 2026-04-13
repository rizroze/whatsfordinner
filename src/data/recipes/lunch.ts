import type { FullRecipe } from "./types";

export const lunchRecipes: FullRecipe[] = [
  {
    slug: "salmon-poke-bowl",
    name: "Salmon Poke Bowl",
    emoji: "\u{1F363}",
    description:
      "Fresh cubed salmon marinated in soy sauce and sesame oil, served over sushi rice with avocado, edamame, cucumber, and a drizzle of spicy mayo.",
    cuisine: "Hawaiian",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 20,
    totalTime: 40,
    servings: 2,
    ingredients: [
      { name: "sushi-grade salmon", amount: "10", unit: "oz", group: "For the poke" },
      { name: "soy sauce", amount: "2", unit: "tbsp", group: "For the poke" },
      { name: "sesame oil", amount: "1", unit: "tsp", group: "For the poke" },
      { name: "rice vinegar", amount: "1", unit: "tsp", group: "For the poke" },
      { name: "sushi rice", amount: "1", unit: "cup", group: "For the bowl" },
      { name: "ripe avocado", amount: "1", unit: "medium", group: "For the bowl" },
      { name: "Persian cucumber", amount: "1", unit: "medium", group: "For the bowl" },
      { name: "shelled edamame", amount: "1/2", unit: "cup", group: "For the bowl" },
      { name: "mayonnaise", amount: "2", unit: "tbsp", group: "For the spicy mayo" },
      { name: "sriracha", amount: "1", unit: "tsp", group: "For the spicy mayo" },
      { name: "sesame seeds", amount: "1", unit: "tbsp" },
      { name: "green onions, sliced", amount: "2", unit: "stalks" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cook sushi rice according to package directions. Let it cool to room temperature.",
      },
      {
        step: 2,
        instruction:
          "Cut the salmon into 1/2-inch cubes. Toss with soy sauce, sesame oil, and rice vinegar. Refrigerate for 10 minutes.",
        tip: "Only use sushi-grade salmon from a trusted fishmonger. The fish is served raw.",
      },
      {
        step: 3,
        instruction:
          "Slice the avocado and dice the cucumber. Mix the mayonnaise and sriracha together for the spicy mayo.",
      },
      {
        step: 4,
        instruction:
          "Divide the rice between two bowls. Arrange the marinated salmon, avocado, cucumber, and edamame on top.",
      },
      {
        step: 5,
        instruction:
          "Drizzle with spicy mayo, sprinkle with sesame seeds and sliced green onions. Serve immediately.",
      },
    ],
    nutrition: { calories: 520, protein: 34, carbs: 52, fat: 20, fiber: 7 },
    tags: ["high-protein", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["bibimbap", "miso-glazed-salmon", "spicy-tuna-crispy-rice"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "caprese-salad-burrata",
    name: "Caprese Salad with Burrata",
    emoji: "\u{1F345}",
    description:
      "A luxurious take on the Italian classic. Creamy burrata replaces mozzarella, paired with ripe heirloom tomatoes, fresh basil, and a quality balsamic glaze.",
    cuisine: "Italian",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    servings: 2,
    ingredients: [
      { name: "burrata cheese", amount: "8", unit: "oz" },
      { name: "heirloom tomatoes", amount: "2", unit: "large" },
      { name: "fresh basil leaves", amount: "10", unit: "leaves" },
      { name: "extra virgin olive oil", amount: "2", unit: "tbsp" },
      { name: "balsamic glaze", amount: "1", unit: "tbsp" },
      { name: "flaky sea salt", amount: "1/4", unit: "tsp" },
      { name: "freshly cracked black pepper", amount: "1/4", unit: "tsp" },
      { name: "crusty bread", amount: "4", unit: "slices" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Slice the tomatoes into 1/4-inch thick rounds. Arrange on a serving plate in a single layer.",
      },
      {
        step: 2,
        instruction:
          "Place the burrata in the center of the tomatoes. Tear it open gently so the creamy interior spills out.",
        tip: "Let the burrata sit at room temperature for 15 minutes before serving for the best flavor and texture.",
      },
      {
        step: 3,
        instruction:
          "Tuck fresh basil leaves between and around the tomatoes.",
      },
      {
        step: 4,
        instruction:
          "Drizzle generously with olive oil and balsamic glaze. Season with flaky salt and cracked pepper. Serve with crusty bread.",
      },
    ],
    nutrition: { calories: 380, protein: 18, carbs: 22, fat: 26, fiber: 3 },
    tags: ["quick", "vegetarian", "mediterranean"],
    youtubeVideoId: null,
    relatedSlugs: ["caesar-salad", "bruschetta", "greek-chicken-salad"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "vietnamese-spring-rolls",
    name: "Vietnamese Spring Rolls",
    emoji: "\u{1F960}",
    description:
      "Fresh rice paper rolls filled with shrimp, rice vermicelli, crisp vegetables, and herbs. Served with a savory peanut dipping sauce.",
    cuisine: "Vietnamese",
    mealType: "lunch",
    difficulty: "Medium",
    prepTime: 30,
    cookTime: 5,
    totalTime: 35,
    servings: 4,
    ingredients: [
      { name: "rice paper wrappers (8-inch)", amount: "12", unit: "sheets", group: "For the rolls" },
      { name: "cooked shrimp, halved lengthwise", amount: "12", unit: "large", group: "For the rolls" },
      { name: "rice vermicelli noodles", amount: "4", unit: "oz", group: "For the rolls" },
      { name: "butter lettuce leaves", amount: "6", unit: "leaves", group: "For the rolls" },
      { name: "carrots, julienned", amount: "1", unit: "cup", group: "For the rolls" },
      { name: "cucumber, julienned", amount: "1", unit: "cup", group: "For the rolls" },
      { name: "fresh mint leaves", amount: "1/4", unit: "cup", group: "For the rolls" },
      { name: "fresh cilantro sprigs", amount: "1/4", unit: "cup", group: "For the rolls" },
      { name: "smooth peanut butter", amount: "3", unit: "tbsp", group: "For the peanut sauce" },
      { name: "hoisin sauce", amount: "2", unit: "tbsp", group: "For the peanut sauce" },
      { name: "warm water", amount: "2", unit: "tbsp", group: "For the peanut sauce" },
      { name: "sriracha", amount: "1", unit: "tsp", group: "For the peanut sauce" },
      { name: "lime juice", amount: "1", unit: "tbsp", group: "For the peanut sauce" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cook the rice vermicelli according to package directions. Drain, rinse with cold water, and set aside.",
      },
      {
        step: 2,
        instruction:
          "Prepare the peanut sauce by whisking together peanut butter, hoisin, warm water, sriracha, and lime juice until smooth. Set aside.",
      },
      {
        step: 3,
        instruction:
          "Fill a large shallow dish with warm water. Dip one rice paper wrapper at a time for about 10-15 seconds until pliable (not fully soft).",
        tip: "The wrapper will continue to soften after you remove it. If it's too soft when you dip it, it'll tear when rolling.",
      },
      {
        step: 4,
        instruction:
          "Lay the wrapper flat. Place a lettuce leaf, a small handful of noodles, carrots, cucumber, mint, and cilantro on the lower third. Add 2 shrimp halves, cut-side up.",
      },
      {
        step: 5,
        instruction:
          "Fold the bottom edge over the filling, tuck in the sides, and roll tightly like a burrito. The wrapper will stick to itself.",
      },
      {
        step: 6,
        instruction:
          "Repeat with remaining wrappers and filling. Serve with the peanut dipping sauce.",
      },
    ],
    nutrition: { calories: 280, protein: 16, carbs: 38, fat: 8, fiber: 3 },
    tags: ["dairy-free", "gluten-free", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["pad-thai", "shrimp-lettuce-wraps", "shrimp-tacos-chipotle-crema"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "greek-chicken-salad",
    name: "Greek Chicken Salad",
    emoji: "\u{1F957}",
    description:
      "Grilled lemon-herb chicken over crisp romaine with cucumbers, tomatoes, kalamata olives, red onion, and crumbled feta, tossed in a bright oregano vinaigrette.",
    cuisine: "Greek",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 2,
    ingredients: [
      { name: "boneless skinless chicken breasts", amount: "2", unit: "medium", group: "For the chicken" },
      { name: "olive oil", amount: "1", unit: "tbsp", group: "For the chicken" },
      { name: "lemon juice", amount: "2", unit: "tbsp", group: "For the chicken" },
      { name: "dried oregano", amount: "1", unit: "tsp", group: "For the chicken" },
      { name: "romaine lettuce, chopped", amount: "4", unit: "cups", group: "For the salad" },
      { name: "cherry tomatoes, halved", amount: "1", unit: "cup", group: "For the salad" },
      { name: "cucumber, diced", amount: "1", unit: "medium", group: "For the salad" },
      { name: "kalamata olives", amount: "1/4", unit: "cup", group: "For the salad" },
      { name: "red onion, thinly sliced", amount: "1/4", unit: "small", group: "For the salad" },
      { name: "crumbled feta cheese", amount: "2", unit: "oz", group: "For the salad" },
      { name: "extra virgin olive oil", amount: "2", unit: "tbsp", group: "For the dressing" },
      { name: "red wine vinegar", amount: "1", unit: "tbsp", group: "For the dressing" },
      { name: "salt and pepper", amount: "1", unit: "to taste" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Season the chicken with olive oil, half the lemon juice, oregano, salt, and pepper. Let it marinate for at least 10 minutes.",
      },
      {
        step: 2,
        instruction:
          "Heat a grill pan or skillet over medium-high heat. Cook the chicken for 5-6 minutes per side until the internal temperature reaches 165F. Let rest for 5 minutes, then slice.",
        tip: "Pound the chicken to an even thickness before cooking for more even results.",
      },
      {
        step: 3,
        instruction:
          "In a small bowl, whisk together the olive oil, red wine vinegar, remaining lemon juice, salt, and pepper for the dressing.",
      },
      {
        step: 4,
        instruction:
          "In a large bowl, combine the romaine, tomatoes, cucumber, olives, and red onion. Toss with the dressing.",
      },
      {
        step: 5,
        instruction:
          "Divide the salad between plates, top with sliced chicken and crumbled feta. Serve immediately.",
      },
    ],
    nutrition: { calories: 420, protein: 38, carbs: 14, fat: 24, fiber: 4 },
    tags: ["high-protein", "low-carb", "mediterranean", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["caesar-salad", "falafel-bowl", "chicken-shawarma-plate"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "shrimp-lettuce-wraps",
    name: "Shrimp Lettuce Wraps",
    emoji: "\u{1F990}",
    description:
      "Garlic-chili shrimp nestled in crisp butter lettuce cups with pickled carrots, sliced radishes, and a tangy lime dressing. Light, crunchy, and incredibly fresh.",
    cuisine: "Asian Fusion",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 5,
    totalTime: 20,
    servings: 2,
    ingredients: [
      { name: "large shrimp, peeled and deveined", amount: "12", unit: "oz" },
      { name: "butter lettuce leaves", amount: "8", unit: "large leaves" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "soy sauce", amount: "1", unit: "tbsp" },
      { name: "sesame oil", amount: "1", unit: "tsp" },
      { name: "chili garlic sauce", amount: "1", unit: "tsp" },
      { name: "lime juice", amount: "2", unit: "tbsp" },
      { name: "carrots, shredded", amount: "1/2", unit: "cup" },
      { name: "radishes, thinly sliced", amount: "3", unit: "medium" },
      { name: "fresh cilantro", amount: "2", unit: "tbsp" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Pat the shrimp dry with paper towels. Season lightly with salt.",
      },
      {
        step: 2,
        instruction:
          "Heat vegetable oil in a skillet over high heat. Add the shrimp in a single layer and cook for 1-2 minutes per side until pink and curled.",
      },
      {
        step: 3,
        instruction:
          "Add garlic, soy sauce, sesame oil, and chili garlic sauce. Toss for 30 seconds to coat. Remove from heat.",
      },
      {
        step: 4,
        instruction:
          "Arrange butter lettuce leaves on a plate. Fill each with shrimp, shredded carrots, and sliced radishes.",
      },
      {
        step: 5,
        instruction:
          "Squeeze lime juice over the wraps and garnish with fresh cilantro. Serve immediately.",
      },
    ],
    nutrition: { calories: 240, protein: 30, carbs: 10, fat: 9, fiber: 3 },
    tags: ["low-carb", "high-protein", "gluten-free", "quick", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["vietnamese-spring-rolls", "pad-thai", "thai-basil-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "falafel-bowl",
    name: "Falafel Bowl",
    emoji: "\u{1F9C6}",
    description:
      "Crispy baked falafel served over fluffy couscous with hummus, pickled red onion, cucumber-tomato salad, and a creamy tahini sauce.",
    cuisine: "Middle Eastern",
    mealType: "lunch",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 25,
    totalTime: 45,
    servings: 4,
    ingredients: [
      { name: "canned chickpeas, drained and rinsed", amount: "15", unit: "oz", group: "For the falafel" },
      { name: "fresh parsley", amount: "1/2", unit: "cup", group: "For the falafel" },
      { name: "fresh cilantro", amount: "1/4", unit: "cup", group: "For the falafel" },
      { name: "garlic cloves", amount: "3", unit: "cloves", group: "For the falafel" },
      { name: "ground cumin", amount: "1", unit: "tsp", group: "For the falafel" },
      { name: "all-purpose flour", amount: "2", unit: "tbsp", group: "For the falafel" },
      { name: "olive oil", amount: "2", unit: "tbsp", group: "For the falafel" },
      { name: "couscous", amount: "1", unit: "cup", group: "For the bowl" },
      { name: "store-bought hummus", amount: "1/2", unit: "cup", group: "For the bowl" },
      { name: "cherry tomatoes, quartered", amount: "1", unit: "cup", group: "For the bowl" },
      { name: "cucumber, diced", amount: "1", unit: "medium", group: "For the bowl" },
      { name: "tahini", amount: "3", unit: "tbsp", group: "For the tahini sauce" },
      { name: "lemon juice", amount: "2", unit: "tbsp", group: "For the tahini sauce" },
      { name: "water", amount: "2", unit: "tbsp", group: "For the tahini sauce" },
      { name: "salt", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Line a baking sheet with parchment paper and brush with olive oil.",
      },
      {
        step: 2,
        instruction:
          "Add chickpeas, parsley, cilantro, garlic, cumin, flour, and 1/2 tsp salt to a food processor. Pulse 10-12 times until combined but still slightly chunky (not a paste).",
        tip: "If the mixture is too wet, add another tablespoon of flour. It should hold together when pressed.",
      },
      {
        step: 3,
        instruction:
          "Form the mixture into 12 small patties. Place on the baking sheet and brush tops with olive oil. Bake for 25 minutes, flipping halfway, until golden and crispy.",
      },
      {
        step: 4,
        instruction:
          "While falafel bake, cook the couscous according to package directions. Fluff with a fork.",
      },
      {
        step: 5,
        instruction:
          "Make the tahini sauce by whisking together tahini, lemon juice, water, and a pinch of salt until smooth and pourable.",
      },
      {
        step: 6,
        instruction:
          "Assemble bowls with couscous as the base, topped with falafel, hummus, tomato-cucumber salad, and a generous drizzle of tahini sauce.",
      },
    ],
    nutrition: { calories: 440, protein: 16, carbs: 56, fat: 18, fiber: 10 },
    tags: ["vegan", "mediterranean", "meal-prep", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-shawarma-plate", "shakshuka", "hummus-with-pita"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-shawarma-plate",
    name: "Chicken Shawarma Plate",
    emoji: "\u{1F357}",
    description:
      "Warmly spiced chicken thighs roasted until charred and juicy, served with garlic sauce, pickled turnips, tabbouleh, and warm pita bread.",
    cuisine: "Middle Eastern",
    mealType: "lunch",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken thighs", amount: "1.5", unit: "lbs", group: "For the chicken" },
      { name: "olive oil", amount: "2", unit: "tbsp", group: "For the chicken" },
      { name: "ground cumin", amount: "1", unit: "tsp", group: "For the chicken" },
      { name: "ground coriander", amount: "1", unit: "tsp", group: "For the chicken" },
      { name: "smoked paprika", amount: "1", unit: "tsp", group: "For the chicken" },
      { name: "ground turmeric", amount: "1/2", unit: "tsp", group: "For the chicken" },
      { name: "ground cinnamon", amount: "1/4", unit: "tsp", group: "For the chicken" },
      { name: "plain Greek yogurt", amount: "1/2", unit: "cup", group: "For the garlic sauce" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves", group: "For the garlic sauce" },
      { name: "lemon juice", amount: "1", unit: "tbsp", group: "For the garlic sauce" },
      { name: "pita bread", amount: "4", unit: "rounds" },
      { name: "cherry tomatoes, diced", amount: "1", unit: "cup" },
      { name: "English cucumber, diced", amount: "1/2", unit: "medium" },
      { name: "salt", amount: "1.5", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mix olive oil, cumin, coriander, paprika, turmeric, cinnamon, and 1 tsp salt in a bowl. Coat the chicken thighs thoroughly and let marinate for at least 15 minutes (or up to overnight).",
      },
      {
        step: 2,
        instruction:
          "Preheat oven to 425F. Spread the chicken on a sheet pan in a single layer. Roast for 20-25 minutes until charred at the edges and cooked through (165F internal).",
      },
      {
        step: 3,
        instruction:
          "While chicken roasts, make the garlic sauce by combining yogurt, minced garlic, lemon juice, and a pinch of salt.",
      },
      {
        step: 4,
        instruction:
          "Toss the diced tomatoes and cucumber with a drizzle of olive oil, lemon juice, and salt for a quick side salad.",
      },
      {
        step: 5,
        instruction:
          "Slice the chicken against the grain. Warm the pita bread. Serve the chicken with garlic sauce, the tomato-cucumber salad, and warm pita.",
        tip: "For the best char, broil the chicken for the last 2-3 minutes.",
      },
    ],
    nutrition: { calories: 460, protein: 40, carbs: 32, fat: 18, fiber: 3 },
    tags: ["high-protein", "mediterranean", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["falafel-bowl", "greek-chicken-salad", "beef-bulgogi"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "bibimbap",
    name: "Bibimbap",
    emoji: "\u{1F35C}",
    description:
      "A vibrant Korean rice bowl topped with seasoned vegetables, a fried egg, and gochujang sauce. Mix everything together just before eating for the full experience.",
    cuisine: "Korean",
    mealType: "lunch",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 20,
    totalTime: 40,
    servings: 2,
    ingredients: [
      { name: "short-grain white rice", amount: "1", unit: "cup" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "fresh spinach", amount: "2", unit: "cups" },
      { name: "carrots, julienned", amount: "1", unit: "medium" },
      { name: "zucchini, julienned", amount: "1", unit: "small" },
      { name: "bean sprouts", amount: "1", unit: "cup" },
      { name: "shiitake mushrooms, sliced", amount: "4", unit: "oz" },
      { name: "sesame oil", amount: "2", unit: "tbsp" },
      { name: "soy sauce", amount: "1", unit: "tbsp" },
      { name: "gochujang (Korean chili paste)", amount: "2", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "sesame seeds", amount: "1", unit: "tbsp" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cook the rice according to package directions. Keep warm.",
      },
      {
        step: 2,
        instruction:
          "Blanch the spinach in boiling water for 30 seconds, drain, squeeze dry, and toss with 1 tsp sesame oil and 1 tsp soy sauce.",
      },
      {
        step: 3,
        instruction:
          "Saute each vegetable separately in a hot skillet with a little sesame oil: carrots for 2 minutes, zucchini for 2 minutes, mushrooms with garlic for 3 minutes, bean sprouts for 1 minute. Season each lightly with salt.",
        tip: "Cooking vegetables separately preserves their distinct flavors and textures.",
      },
      {
        step: 4,
        instruction:
          "Fry the eggs sunny-side up in vegetable oil over medium heat until the whites are set but yolks are runny (about 3 minutes).",
      },
      {
        step: 5,
        instruction:
          "Divide rice between two bowls. Arrange each vegetable in a section around the bowl. Place a fried egg on top.",
      },
      {
        step: 6,
        instruction:
          "Add a spoonful of gochujang and sprinkle with sesame seeds. Mix everything together vigorously before eating.",
      },
    ],
    nutrition: { calories: 480, protein: 16, carbs: 64, fat: 18, fiber: 6 },
    tags: ["vegetarian", "dairy-free", "spicy"],
    youtubeVideoId: null,
    relatedSlugs: ["kimchi-fried-rice", "beef-bulgogi", "japanese-curry-rice"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "kimchi-fried-rice",
    name: "Kimchi Fried Rice",
    emoji: "\u{1F35A}",
    description:
      "A quick and deeply savory fried rice loaded with tangy kimchi, topped with a crispy fried egg and drizzled with sesame oil. Best made with day-old rice.",
    cuisine: "Korean",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    servings: 2,
    ingredients: [
      { name: "day-old cooked white rice", amount: "3", unit: "cups" },
      { name: "kimchi, roughly chopped", amount: "1", unit: "cup" },
      { name: "kimchi juice", amount: "2", unit: "tbsp" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "soy sauce", amount: "1", unit: "tbsp" },
      { name: "sesame oil", amount: "1", unit: "tsp" },
      { name: "gochujang", amount: "1", unit: "tsp" },
      { name: "green onions, sliced", amount: "3", unit: "stalks" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
      { name: "sesame seeds", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat vegetable oil in a large skillet or wok over high heat. Add the chopped kimchi and stir-fry for 2-3 minutes until slightly caramelized.",
      },
      {
        step: 2,
        instruction:
          "Add the rice and break up any clumps. Stir-fry for 3-4 minutes until the rice is hot and starting to crisp at the edges.",
        tip: "Day-old rice works best because it's drier. Fresh rice will be too moist and won't get crispy.",
      },
      {
        step: 3,
        instruction:
          "Add soy sauce, kimchi juice, and gochujang. Toss everything together until evenly coated. Push rice to the side.",
      },
      {
        step: 4,
        instruction:
          "In a separate small skillet, fry the eggs sunny-side up until the whites are crispy but the yolk is still runny.",
      },
      {
        step: 5,
        instruction:
          "Divide the fried rice between two bowls. Top each with a fried egg, sliced green onions, sesame seeds, and a drizzle of sesame oil.",
      },
    ],
    nutrition: { calories: 420, protein: 14, carbs: 62, fat: 14, fiber: 3 },
    tags: ["quick", "dairy-free", "budget", "spicy"],
    youtubeVideoId: null,
    relatedSlugs: ["bibimbap", "pad-thai", "kung-pao-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "pad-thai",
    name: "Pad Thai",
    emoji: "\u{1F35C}",
    description:
      "Thailand's iconic stir-fried rice noodles with shrimp, scrambled egg, bean sprouts, and crushed peanuts in a sweet-sour tamarind sauce.",
    cuisine: "Thai",
    mealType: "lunch",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 2,
    ingredients: [
      { name: "flat rice noodles (pad thai noodles)", amount: "8", unit: "oz" },
      { name: "large shrimp, peeled", amount: "8", unit: "oz" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "tamarind paste", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "fish sauce", amount: "2", unit: "tbsp", group: "For the sauce" },
      { name: "brown sugar", amount: "1", unit: "tbsp", group: "For the sauce" },
      { name: "rice vinegar", amount: "1", unit: "tbsp", group: "For the sauce" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "bean sprouts", amount: "1", unit: "cup" },
      { name: "green onions, cut into 1-inch pieces", amount: "3", unit: "stalks" },
      { name: "roasted peanuts, crushed", amount: "3", unit: "tbsp" },
      { name: "lime wedges", amount: "2", unit: "wedges" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Soak the rice noodles in hot (not boiling) water for 8-10 minutes until pliable but still firm. Drain.",
        tip: "Do not oversoak the noodles. They should be slightly undercooked since they'll finish cooking in the wok.",
      },
      {
        step: 2,
        instruction:
          "Mix the tamarind paste, fish sauce, brown sugar, and rice vinegar in a small bowl. Stir until the sugar dissolves.",
      },
      {
        step: 3,
        instruction:
          "Heat oil in a wok or large skillet over high heat. Cook the shrimp for 1-2 minutes per side until pink. Remove and set aside.",
      },
      {
        step: 4,
        instruction:
          "In the same wok, add the garlic and cook for 15 seconds. Push to the side, crack in the eggs, and scramble quickly.",
      },
      {
        step: 5,
        instruction:
          "Add the drained noodles and the sauce. Toss vigorously for 2-3 minutes until the noodles absorb the sauce.",
      },
      {
        step: 6,
        instruction:
          "Return the shrimp to the wok, add bean sprouts and green onions, and toss for 30 seconds. Serve topped with crushed peanuts and lime wedges.",
      },
    ],
    nutrition: { calories: 480, protein: 28, carbs: 58, fat: 16, fiber: 3 },
    tags: ["dairy-free", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["kimchi-fried-rice", "dan-dan-noodles", "thai-basil-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "caesar-salad",
    name: "Caesar Salad",
    emoji: "\u{1F957}",
    description:
      "Crisp romaine lettuce tossed in a classic from-scratch Caesar dressing with garlic croutons, shaved Parmesan, and freshly cracked black pepper.",
    cuisine: "American",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 2,
    ingredients: [
      { name: "romaine lettuce hearts", amount: "2", unit: "heads" },
      { name: "crusty bread, cubed", amount: "2", unit: "cups", group: "For the croutons" },
      { name: "olive oil", amount: "2", unit: "tbsp", group: "For the croutons" },
      { name: "garlic clove, halved", amount: "1", unit: "clove", group: "For the croutons" },
      { name: "mayonnaise", amount: "3", unit: "tbsp", group: "For the dressing" },
      { name: "Parmesan cheese, finely grated", amount: "1/4", unit: "cup", group: "For the dressing" },
      { name: "lemon juice", amount: "1", unit: "tbsp", group: "For the dressing" },
      { name: "Dijon mustard", amount: "1", unit: "tsp", group: "For the dressing" },
      { name: "Worcestershire sauce", amount: "1", unit: "tsp", group: "For the dressing" },
      { name: "garlic clove, minced", amount: "1", unit: "clove", group: "For the dressing" },
      { name: "Parmesan cheese, shaved", amount: "1", unit: "oz" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 375F. Toss the bread cubes with olive oil and rub with the halved garlic clove. Spread on a baking sheet and bake for 8-10 minutes until golden and crispy.",
      },
      {
        step: 2,
        instruction:
          "Make the dressing: whisk together mayonnaise, grated Parmesan, lemon juice, Dijon, Worcestershire, and minced garlic until smooth.",
        tip: "For a thinner dressing, add cold water 1 tsp at a time until you reach your desired consistency.",
      },
      {
        step: 3,
        instruction:
          "Chop the romaine into bite-sized pieces and place in a large bowl. Add the dressing and toss until every leaf is coated.",
      },
      {
        step: 4,
        instruction:
          "Add the croutons and toss gently. Plate the salad, top with shaved Parmesan and freshly cracked black pepper.",
      },
    ],
    nutrition: { calories: 340, protein: 12, carbs: 24, fat: 22, fiber: 4 },
    tags: ["quick", "vegetarian"],
    youtubeVideoId: null,
    relatedSlugs: ["greek-chicken-salad", "caprese-salad-burrata", "chicken-shawarma-plate"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-quesadilla",
    name: "Chicken Quesadilla",
    emoji: "\u{1FAD4}",
    description:
      "Crispy golden tortillas stuffed with seasoned shredded chicken, melted cheese, peppers, and onions. Served with sour cream and salsa for dipping.",
    cuisine: "Mexican",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    totalTime: 22,
    servings: 2,
    ingredients: [
      { name: "large flour tortillas (10-inch)", amount: "2", unit: "whole" },
      { name: "cooked shredded chicken", amount: "1", unit: "cup" },
      { name: "shredded Mexican cheese blend", amount: "1", unit: "cup" },
      { name: "bell pepper, thinly sliced", amount: "1/2", unit: "medium" },
      { name: "yellow onion, thinly sliced", amount: "1/4", unit: "medium" },
      { name: "ground cumin", amount: "1/2", unit: "tsp" },
      { name: "chili powder", amount: "1/2", unit: "tsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "sour cream", amount: "2", unit: "tbsp" },
      { name: "salsa", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat olive oil in a skillet over medium heat. Saute the bell pepper and onion for 3-4 minutes until softened.",
      },
      {
        step: 2,
        instruction:
          "Add the shredded chicken, cumin, and chili powder. Toss to combine and heat through for 1-2 minutes. Remove to a bowl.",
      },
      {
        step: 3,
        instruction:
          "Wipe the skillet clean. Place a tortilla in the dry skillet over medium heat. Spread half the cheese on one half of the tortilla, top with the chicken-pepper mixture, and add the remaining cheese on top.",
      },
      {
        step: 4,
        instruction:
          "Fold the tortilla in half and cook for 2-3 minutes per side until golden and crispy and the cheese is fully melted.",
        tip: "Press down with a spatula for even browning. Keep the heat at medium to melt the cheese without burning the tortilla.",
      },
      {
        step: 5,
        instruction:
          "Repeat with the second tortilla. Cut each quesadilla into wedges and serve with sour cream and salsa.",
      },
    ],
    nutrition: { calories: 480, protein: 32, carbs: 34, fat: 24, fiber: 2 },
    tags: ["quick", "family-friendly", "high-protein", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["breakfast-burrito", "loaded-quesadillas", "shrimp-tacos-chipotle-crema"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
];
