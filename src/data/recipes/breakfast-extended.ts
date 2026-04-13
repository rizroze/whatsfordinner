import type { FullRecipe } from "./types";

export const breakfastExtendedRecipes: FullRecipe[] = [
  {
    slug: "eggs-benedict",
    name: "Eggs Benedict",
    emoji: "\uD83E\uDD5A",
    description:
      "Perfectly poached eggs on toasted English muffins with Canadian bacon, draped in silky homemade hollandaise sauce. The gold standard of brunch.",
    cuisine: "American",
    mealType: "breakfast",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 2,
    ingredients: [
      { name: "large eggs", amount: "4", unit: "whole" },
      { name: "English muffins, split and toasted", amount: "2", unit: "whole" },
      { name: "Canadian bacon slices", amount: "4", unit: "slices" },
      { name: "egg yolks", amount: "3", unit: "whole", group: "For the hollandaise" },
      { name: "unsalted butter, melted", amount: "1/2", unit: "cup", group: "For the hollandaise" },
      { name: "lemon juice", amount: "1", unit: "tbsp", group: "For the hollandaise" },
      { name: "cayenne pepper", amount: "1/8", unit: "tsp", group: "For the hollandaise" },
      { name: "white vinegar", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "fresh chives, chopped", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Make the hollandaise: whisk egg yolks and lemon juice in a heatproof bowl over barely simmering water until thickened, about 3 minutes. Slowly drizzle in the melted butter while whisking constantly. Add cayenne and salt. Remove from heat and cover to keep warm.",
        tip: "Keep the water at a bare simmer. If the eggs scramble, you started too hot. Add a splash of cold water if it starts to curdle.",
      },
      {
        step: 2,
        instruction:
          "Bring a large pot of water to a gentle simmer. Add white vinegar. Create a gentle whirlpool with a spoon and slip eggs in one at a time. Poach for 3-4 minutes until whites are set but yolks are still runny. Remove with a slotted spoon to a paper towel.",
      },
      {
        step: 3,
        instruction:
          "While eggs poach, warm the Canadian bacon in a skillet over medium heat for 1 minute per side. Toast the English muffins.",
      },
      {
        step: 4,
        instruction:
          "Assemble: place a muffin half on each plate, top with Canadian bacon, then a poached egg. Spoon hollandaise generously over the top. Garnish with chives and a pinch of cayenne.",
      },
    ],
    nutrition: { calories: 520, protein: 28, carbs: 26, fat: 34, fiber: 1 },
    tags: ["brunch", "classic", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["shakshuka", "french-toast", "avocado-toast"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "acai-bowl",
    name: "Acai Bowl",
    emoji: "\uD83E\uDED0",
    description:
      "Thick, frosty acai blended with banana and topped with granola, fresh berries, coconut flakes, and a drizzle of honey. A vibrant, antioxidant-packed breakfast.",
    cuisine: "Brazilian",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    servings: 1,
    ingredients: [
      { name: "frozen acai puree packets", amount: "2", unit: "packets" },
      { name: "frozen banana", amount: "1", unit: "medium" },
      { name: "almond milk", amount: "1/4", unit: "cup" },
      { name: "granola", amount: "1/4", unit: "cup", group: "Toppings" },
      { name: "fresh strawberries, sliced", amount: "4", unit: "whole", group: "Toppings" },
      { name: "fresh blueberries", amount: "2", unit: "tbsp", group: "Toppings" },
      { name: "unsweetened coconut flakes", amount: "1", unit: "tbsp", group: "Toppings" },
      { name: "honey", amount: "1", unit: "tsp", group: "Toppings" },
      { name: "chia seeds", amount: "1", unit: "tsp", group: "Toppings" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Break the frozen acai packets into pieces. Add to a blender with the frozen banana and almond milk.",
        tip: "Use as little liquid as possible. The bowl should be thicker than a smoothie so toppings sit on top rather than sinking.",
      },
      {
        step: 2,
        instruction:
          "Blend on low, using a tamper or stopping to scrape down the sides. Blend until thick and smooth, like soft-serve ice cream.",
      },
      {
        step: 3,
        instruction:
          "Pour into a bowl. Arrange the granola, strawberries, blueberries, and coconut flakes on top. Drizzle with honey and sprinkle with chia seeds.",
      },
    ],
    nutrition: { calories: 350, protein: 6, carbs: 62, fat: 10, fiber: 9 },
    tags: ["vegan", "gluten-free", "quick", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["overnight-oats", "greek-yogurt-parfait", "chia-pudding"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chilaquiles",
    name: "Chilaquiles",
    emoji: "\uD83C\uDF36\uFE0F",
    description:
      "Crispy tortilla chips simmered in tangy salsa verde, topped with crema, queso fresco, a fried egg, and sliced avocado. A beloved Mexican breakfast that turns yesterday's tortillas into today's feast.",
    cuisine: "Mexican",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 2,
    ingredients: [
      { name: "corn tortilla chips (thick-cut)", amount: "4", unit: "cups" },
      { name: "salsa verde", amount: "1.5", unit: "cups" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "Mexican crema or sour cream", amount: "2", unit: "tbsp" },
      { name: "queso fresco, crumbled", amount: "1/4", unit: "cup" },
      { name: "ripe avocado, sliced", amount: "1/2", unit: "medium" },
      { name: "white onion, thinly sliced", amount: "1/4", unit: "small" },
      { name: "fresh cilantro, chopped", amount: "2", unit: "tbsp" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat the salsa verde in a large skillet over medium heat until simmering. Add the tortilla chips and toss to coat. Cook for 2-3 minutes until the chips soften slightly on the edges but still have some crunch in the center.",
        tip: "Don't let the chips sit too long in the salsa or they'll turn completely soggy. You want that contrast between soft and crispy.",
      },
      {
        step: 2,
        instruction:
          "In a separate small skillet, fry the eggs in vegetable oil over medium heat until the whites are set and the edges are crispy, about 3 minutes.",
      },
      {
        step: 3,
        instruction:
          "Divide the saucy chips between plates. Top each with a fried egg, drizzle of crema, crumbled queso fresco, avocado slices, sliced onion, and cilantro. Serve immediately.",
      },
    ],
    nutrition: { calories: 420, protein: 16, carbs: 38, fat: 24, fiber: 6 },
    tags: ["quick", "vegetarian", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["huevos-rancheros", "migas", "breakfast-burrito"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "croque-monsieur",
    name: "Croque Monsieur",
    emoji: "\uD83E\uDDC0",
    description:
      "A decadent French grilled sandwich of ham and Gruyere smothered in creamy bechamel sauce and broiled until golden and bubbling. Elegant comfort food.",
    cuisine: "French",
    mealType: "breakfast",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 2,
    ingredients: [
      { name: "white sandwich bread slices", amount: "4", unit: "slices" },
      { name: "sliced ham", amount: "4", unit: "slices" },
      { name: "Gruyere cheese, grated", amount: "1", unit: "cup" },
      { name: "unsalted butter", amount: "2", unit: "tbsp", group: "For the bechamel" },
      { name: "all-purpose flour", amount: "1", unit: "tbsp", group: "For the bechamel" },
      { name: "whole milk", amount: "3/4", unit: "cup", group: "For the bechamel" },
      { name: "Dijon mustard", amount: "1", unit: "tsp" },
      { name: "nutmeg, freshly grated", amount: "1/8", unit: "tsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "black pepper", amount: "1/8", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Make the bechamel: melt butter in a small saucepan over medium heat. Whisk in flour and cook for 1 minute. Slowly whisk in milk, then cook, stirring constantly, until thickened, about 3-4 minutes. Season with nutmeg, salt, and pepper.",
      },
      {
        step: 2,
        instruction:
          "Spread Dijon mustard on two slices of bread. Layer ham and half the Gruyere on top. Close the sandwiches with the remaining bread slices.",
      },
      {
        step: 3,
        instruction:
          "Place the sandwiches on a baking sheet. Spoon bechamel over the tops and sprinkle with the remaining Gruyere.",
      },
      {
        step: 4,
        instruction:
          "Broil on high for 3-4 minutes until the cheese is golden and bubbling. Watch closely to prevent burning. Let cool for 2 minutes before serving.",
        tip: "For a Croque Madame, top with a fried egg after broiling.",
      },
    ],
    nutrition: { calories: 480, protein: 28, carbs: 30, fat: 28, fiber: 1 },
    tags: ["brunch", "comfort-food", "classic"],
    youtubeVideoId: null,
    relatedSlugs: ["french-toast", "eggs-benedict", "grilled-cheese-tomato-soup-brunch"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "full-english-breakfast",
    name: "Full English Breakfast",
    emoji: "\uD83C\uDDEC\uD83C\uDDE7",
    description:
      "The classic fry-up: bacon, sausages, eggs, baked beans, grilled tomatoes, mushrooms, and toast. A hearty British tradition that fuels the entire morning.",
    cuisine: "British",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 2,
    ingredients: [
      { name: "back bacon rashers", amount: "4", unit: "slices" },
      { name: "pork sausages", amount: "4", unit: "links" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "baked beans", amount: "1", unit: "cup" },
      { name: "Roma tomatoes, halved", amount: "2", unit: "medium" },
      { name: "white mushrooms, sliced", amount: "1", unit: "cup" },
      { name: "thick-cut bread, toasted", amount: "2", unit: "slices" },
      { name: "butter", amount: "1", unit: "tbsp" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
      { name: "salt and pepper", amount: "to taste", unit: "" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat the oven to 400F. Place the sausages on a baking sheet and cook for 20 minutes, turning halfway, until golden and cooked through.",
      },
      {
        step: 2,
        instruction:
          "Meanwhile, heat oil in a large skillet over medium heat. Cook the bacon for 3-4 minutes until crispy. Remove and keep warm. In the same skillet, cook the tomato halves cut-side down for 3 minutes. Add the mushrooms with a knob of butter and cook for 4 minutes.",
      },
      {
        step: 3,
        instruction:
          "Warm the baked beans in a small saucepan over low heat. Fry the eggs in the skillet to your preference.",
      },
      {
        step: 4,
        instruction:
          "Arrange everything on warm plates: sausages, bacon, egg, beans, tomatoes, mushrooms, and buttered toast. Serve with a cup of strong tea.",
        tip: "Timing is everything with a fry-up. Start the sausages first since they take the longest, then stagger everything else so it all finishes together.",
      },
    ],
    nutrition: { calories: 680, protein: 38, carbs: 40, fat: 40, fiber: 8 },
    tags: ["high-protein", "comfort-food", "classic"],
    youtubeVideoId: null,
    relatedSlugs: ["eggs-benedict", "shakshuka", "breakfast-burrito"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "huevos-rancheros",
    name: "Huevos Rancheros",
    emoji: "\uD83C\uDF73",
    description:
      "Fried eggs on lightly crisped corn tortillas, topped with warm ranchero sauce, black beans, avocado, and cotija cheese. A satisfying Mexican breakfast staple.",
    cuisine: "Mexican",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 2,
    ingredients: [
      { name: "large eggs", amount: "4", unit: "whole" },
      { name: "corn tortillas", amount: "4", unit: "whole" },
      { name: "canned black beans, drained", amount: "1", unit: "cup" },
      { name: "crushed tomatoes", amount: "1", unit: "cup", group: "For the ranchero sauce" },
      { name: "jalape\u00f1o, seeded and diced", amount: "1", unit: "small", group: "For the ranchero sauce" },
      { name: "garlic clove, minced", amount: "1", unit: "clove", group: "For the ranchero sauce" },
      { name: "ground cumin", amount: "1/2", unit: "tsp", group: "For the ranchero sauce" },
      { name: "ripe avocado, sliced", amount: "1/2", unit: "medium" },
      { name: "cotija cheese, crumbled", amount: "2", unit: "tbsp" },
      { name: "fresh cilantro", amount: "2", unit: "tbsp" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Make the ranchero sauce: heat 1 tsp oil in a saucepan over medium heat. Cook the garlic and jalape\u00f1o for 1 minute. Add crushed tomatoes, cumin, and salt. Simmer for 10 minutes, stirring occasionally.",
      },
      {
        step: 2,
        instruction:
          "Warm the black beans in a small pot. In a skillet, heat remaining oil over medium-high heat. Fry the tortillas for 30 seconds per side until lightly crispy but still pliable.",
      },
      {
        step: 3,
        instruction:
          "Fry the eggs in the same skillet, sunny-side up or over-easy, about 3 minutes.",
      },
      {
        step: 4,
        instruction:
          "Place two tortillas on each plate, slightly overlapping. Spoon black beans over the tortillas, top with fried eggs, and ladle ranchero sauce around the eggs. Garnish with avocado, cotija, and cilantro.",
      },
    ],
    nutrition: { calories: 460, protein: 22, carbs: 38, fat: 26, fiber: 10 },
    tags: ["vegetarian", "gluten-free", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["chilaquiles", "shakshuka", "breakfast-burrito"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "tamago-sando",
    name: "Japanese Tamago Sando",
    emoji: "\uD83C\uDF5E",
    description:
      "A pillowy Japanese egg salad sandwich on crustless milk bread. The eggs are creamy and rich with Kewpie mayo, and the bread is impossibly soft. Simple perfection.",
    cuisine: "Japanese",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 2,
    ingredients: [
      { name: "large eggs", amount: "4", unit: "whole" },
      { name: "Japanese milk bread (shokupan), sliced thick", amount: "4", unit: "slices" },
      { name: "Kewpie mayonnaise", amount: "3", unit: "tbsp" },
      { name: "rice vinegar", amount: "1/2", unit: "tsp" },
      { name: "Dijon mustard", amount: "1/2", unit: "tsp" },
      { name: "sugar", amount: "1/4", unit: "tsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "white pepper", amount: "1/8", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Bring a pot of water to a boil. Gently lower in the eggs and boil for exactly 8 minutes for jammy yolks or 10 minutes for fully set. Transfer to an ice bath for 5 minutes, then peel.",
        tip: "Kewpie mayo is the secret ingredient. It uses only egg yolks and has a richer flavor and creamier texture than regular mayo.",
      },
      {
        step: 2,
        instruction:
          "Roughly chop the eggs (keep them chunky). Mix with Kewpie mayo, rice vinegar, mustard, sugar, salt, and white pepper. The filling should be creamy but still have visible egg pieces.",
      },
      {
        step: 3,
        instruction:
          "Divide the egg salad between two slices of bread, spreading it evenly. Top with the remaining bread slices.",
      },
      {
        step: 4,
        instruction:
          "Trim the crusts with a sharp knife. Cut each sandwich diagonally in half. Wrap tightly in plastic wrap and refrigerate for 10 minutes before serving (this helps everything set).",
      },
    ],
    nutrition: { calories: 380, protein: 18, carbs: 30, fat: 22, fiber: 1 },
    tags: ["quick", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["avocado-toast", "croque-monsieur", "smoked-salmon-bagel"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "congee",
    name: "Congee",
    emoji: "\uD83C\uDF5A",
    description:
      "Silky smooth rice porridge simmered low and slow until it breaks down into a comforting bowl of warmth. Topped with crispy shallots, ginger, and a soft-boiled egg.",
    cuisine: "Chinese",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 60,
    totalTime: 65,
    servings: 4,
    ingredients: [
      { name: "jasmine rice", amount: "1", unit: "cup" },
      { name: "chicken broth or water", amount: "8", unit: "cups" },
      { name: "fresh ginger, sliced", amount: "1", unit: "inch" },
      { name: "sesame oil", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "soft-boiled eggs", amount: "4", unit: "whole", group: "Toppings" },
      { name: "crispy fried shallots", amount: "2", unit: "tbsp", group: "Toppings" },
      { name: "green onions, sliced", amount: "2", unit: "stalks", group: "Toppings" },
      { name: "soy sauce", amount: "1", unit: "tbsp", group: "Toppings" },
      { name: "white pepper", amount: "1/4", unit: "tsp", group: "Toppings" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Rinse the rice under cold water. Combine the rice, broth, ginger slices, and salt in a large pot. Bring to a boil.",
      },
      {
        step: 2,
        instruction:
          "Reduce heat to low, cover, and simmer for 50-60 minutes, stirring every 15 minutes to prevent sticking. The congee is done when the rice has completely broken down into a thick, creamy porridge.",
        tip: "Stirring helps release the starch and makes the congee creamier. If it gets too thick, add more broth or water.",
      },
      {
        step: 3,
        instruction:
          "Remove the ginger slices. Stir in sesame oil. Taste and adjust salt.",
      },
      {
        step: 4,
        instruction:
          "Ladle into bowls. Top each with a halved soft-boiled egg, crispy shallots, green onions, a drizzle of soy sauce, and white pepper.",
      },
    ],
    nutrition: { calories: 280, protein: 14, carbs: 42, fat: 6, fiber: 1 },
    tags: ["comfort-food", "dairy-free", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["savory-oatmeal", "steel-cut-oats", "overnight-oats"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "smoked-salmon-bagel",
    name: "Smoked Salmon Bagel",
    emoji: "\uD83E\uDD6F",
    description:
      "A toasted everything bagel loaded with cream cheese, silky smoked salmon, briny capers, red onion, and a squeeze of lemon. The quintessential New York breakfast.",
    cuisine: "American",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 3,
    totalTime: 13,
    servings: 2,
    ingredients: [
      { name: "everything bagels", amount: "2", unit: "whole" },
      { name: "cream cheese, softened", amount: "4", unit: "tbsp" },
      { name: "smoked salmon (lox)", amount: "4", unit: "oz" },
      { name: "capers, drained", amount: "1", unit: "tbsp" },
      { name: "red onion, thinly sliced", amount: "2", unit: "tbsp" },
      { name: "fresh dill", amount: "4", unit: "sprigs" },
      { name: "lemon wedges", amount: "2", unit: "wedges" },
      { name: "freshly cracked black pepper", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Slice the bagels in half and toast until golden and crispy on the cut side.",
      },
      {
        step: 2,
        instruction:
          "Spread a generous layer of cream cheese on each bagel half.",
      },
      {
        step: 3,
        instruction:
          "Drape the smoked salmon over the cream cheese. Top with capers, red onion slices, and fresh dill. Finish with a squeeze of lemon and a crack of black pepper.",
        tip: "Let the cream cheese come to room temperature for easier spreading. Cold cream cheese tears the bagel.",
      },
    ],
    nutrition: { calories: 380, protein: 20, carbs: 38, fat: 16, fiber: 2 },
    tags: ["quick", "high-protein", "no-cook"],
    youtubeVideoId: null,
    relatedSlugs: ["avocado-toast", "tamago-sando", "eggs-benedict"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chia-pudding",
    name: "Chia Pudding",
    emoji: "\uD83E\uDD5B",
    description:
      "Chia seeds soaked overnight in coconut milk until they transform into a thick, creamy pudding. Topped with mango, toasted coconut, and a drizzle of honey for a tropical twist.",
    cuisine: "International",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 0,
    totalTime: 5,
    servings: 2,
    ingredients: [
      { name: "chia seeds", amount: "1/4", unit: "cup" },
      { name: "coconut milk", amount: "1", unit: "cup" },
      { name: "honey or maple syrup", amount: "1", unit: "tbsp" },
      { name: "vanilla extract", amount: "1/2", unit: "tsp" },
      { name: "fresh mango, diced", amount: "1/2", unit: "cup", group: "Toppings" },
      { name: "toasted coconut flakes", amount: "1", unit: "tbsp", group: "Toppings" },
      { name: "fresh berries", amount: "1/4", unit: "cup", group: "Toppings" },
      { name: "sliced almonds", amount: "1", unit: "tbsp", group: "Toppings" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mix the chia seeds, coconut milk, honey, and vanilla in a jar or bowl. Stir well, making sure there are no clumps.",
      },
      {
        step: 2,
        instruction:
          "Cover and refrigerate for at least 4 hours or overnight. Stir once after 30 minutes to prevent clumping.",
        tip: "The pudding thickens significantly overnight. If it's too thick in the morning, stir in a splash more coconut milk.",
      },
      {
        step: 3,
        instruction:
          "Divide into two bowls or jars. Top with diced mango, berries, toasted coconut flakes, and sliced almonds.",
      },
    ],
    nutrition: { calories: 280, protein: 7, carbs: 32, fat: 15, fiber: 11 },
    tags: ["meal-prep", "vegan", "gluten-free", "dairy-free", "no-cook"],
    youtubeVideoId: null,
    relatedSlugs: ["acai-bowl", "overnight-oats", "greek-yogurt-parfait"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "waffles-with-berries",
    name: "Waffles with Berries",
    emoji: "\uD83E\uDDC7",
    description:
      "Golden, crispy-on-the-outside, fluffy-on-the-inside waffles topped with a medley of fresh berries, whipped cream, and real maple syrup. Weekend mornings perfected.",
    cuisine: "American",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    ingredients: [
      { name: "all-purpose flour", amount: "2", unit: "cups" },
      { name: "sugar", amount: "2", unit: "tbsp" },
      { name: "baking powder", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "large eggs, separated", amount: "2", unit: "whole" },
      { name: "whole milk", amount: "1.75", unit: "cups" },
      { name: "unsalted butter, melted", amount: "1/3", unit: "cup" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "mixed fresh berries", amount: "1.5", unit: "cups", group: "Toppings" },
      { name: "whipped cream", amount: "1/2", unit: "cup", group: "Toppings" },
      { name: "pure maple syrup", amount: "1/4", unit: "cup", group: "Toppings" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat the waffle iron. Whisk together flour, sugar, baking powder, and salt in a large bowl.",
      },
      {
        step: 2,
        instruction:
          "In a separate bowl, whisk together the egg yolks, milk, melted butter, and vanilla. Pour into the dry ingredients and stir until just combined (lumps are fine).",
      },
      {
        step: 3,
        instruction:
          "Beat the egg whites with an electric mixer until stiff peaks form. Gently fold into the batter.",
        tip: "Whipping the egg whites separately is the secret to light, airy waffles. Don't overmix when folding.",
      },
      {
        step: 4,
        instruction:
          "Cook the waffles according to your waffle iron's instructions, about 3-4 minutes each, until golden and crispy.",
      },
      {
        step: 5,
        instruction:
          "Serve topped with fresh berries, a dollop of whipped cream, and maple syrup.",
      },
    ],
    nutrition: { calories: 420, protein: 10, carbs: 54, fat: 18, fiber: 3 },
    tags: ["brunch", "classic", "vegetarian"],
    youtubeVideoId: null,
    relatedSlugs: ["french-toast", "banana-pancakes", "acai-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "savory-oatmeal",
    name: "Savory Oatmeal",
    emoji: "\uD83C\uDF3E",
    description:
      "Creamy oatmeal taken in a savory direction with Parmesan, a soft-boiled egg, sauteed mushrooms, and crispy everything-bagel seasoning. A hearty, protein-rich start to the day.",
    cuisine: "American",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    servings: 2,
    ingredients: [
      { name: "rolled oats", amount: "1", unit: "cup" },
      { name: "chicken broth or water", amount: "2", unit: "cups" },
      { name: "Parmesan cheese, grated", amount: "2", unit: "tbsp" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "cremini mushrooms, sliced", amount: "1", unit: "cup" },
      { name: "butter", amount: "1", unit: "tbsp" },
      { name: "everything bagel seasoning", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
      { name: "fresh chives, chopped", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Bring the broth to a boil. Stir in the oats, reduce heat to medium-low, and cook for 5 minutes, stirring occasionally, until creamy. Stir in Parmesan, salt, and pepper.",
      },
      {
        step: 2,
        instruction:
          "While the oats cook, melt butter in a skillet over medium-high heat. Saute the mushrooms for 5 minutes until golden. Season lightly with salt.",
      },
      {
        step: 3,
        instruction:
          "Soft-boil the eggs: lower into boiling water for 6.5 minutes, then transfer to ice water. Peel and halve.",
        tip: "Using broth instead of water and adding Parmesan transforms basic oats into something completely different. Think of it as a quick risotto.",
      },
      {
        step: 4,
        instruction:
          "Divide the oatmeal into bowls. Top with sauteed mushrooms, a soft-boiled egg, everything bagel seasoning, and chives.",
      },
    ],
    nutrition: { calories: 340, protein: 18, carbs: 36, fat: 14, fiber: 5 },
    tags: ["high-protein", "comfort-food", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["congee", "steel-cut-oats", "overnight-oats"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "migas",
    name: "Migas",
    emoji: "\uD83E\uDD5A",
    description:
      "Scrambled eggs mixed with crispy tortilla strips, tomatoes, peppers, and melted cheese. A Tex-Mex breakfast that turns simple ingredients into something special.",
    cuisine: "Tex-Mex",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    servings: 2,
    ingredients: [
      { name: "large eggs", amount: "4", unit: "whole" },
      { name: "corn tortillas, cut into strips", amount: "3", unit: "whole" },
      { name: "Roma tomato, diced", amount: "1", unit: "medium" },
      { name: "jalape\u00f1o, seeded and diced", amount: "1", unit: "small" },
      { name: "yellow onion, diced", amount: "1/4", unit: "small" },
      { name: "shredded cheddar cheese", amount: "1/4", unit: "cup" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "fresh cilantro", amount: "2", unit: "tbsp" },
      { name: "salsa, for serving", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat the oil in a skillet over medium-high heat. Fry the tortilla strips for 2-3 minutes until crispy and golden. Remove to a paper towel.",
      },
      {
        step: 2,
        instruction:
          "In the same skillet (reduce heat to medium), cook the onion, tomato, and jalape\u00f1o for 3 minutes until softened.",
      },
      {
        step: 3,
        instruction:
          "Beat the eggs with salt and pour into the skillet. Scramble gently, folding in the crispy tortilla strips as the eggs begin to set. Add the cheese and stir until just melted.",
        tip: "Add the tortilla strips while the eggs are still slightly wet so they get folded in but stay crispy in spots.",
      },
      {
        step: 4,
        instruction:
          "Serve immediately topped with cilantro and a spoonful of salsa. Great with warm flour tortillas on the side.",
      },
    ],
    nutrition: { calories: 380, protein: 20, carbs: 22, fat: 24, fiber: 3 },
    tags: ["quick", "high-protein", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["chilaquiles", "huevos-rancheros", "breakfast-burrito"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "turkish-eggs-cilbir",
    name: "Turkish Eggs (Cilbir)",
    emoji: "\uD83E\uDED5",
    description:
      "Perfectly poached eggs nestled in garlicky whipped yogurt, finished with a drizzle of spiced brown butter and Aleppo pepper. An ancient Turkish dish that feels completely modern.",
    cuisine: "Turkish",
    mealType: "breakfast",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    servings: 2,
    ingredients: [
      { name: "large eggs", amount: "4", unit: "whole" },
      { name: "Greek yogurt, full-fat", amount: "1", unit: "cup" },
      { name: "garlic clove, minced", amount: "1", unit: "clove" },
      { name: "unsalted butter", amount: "2", unit: "tbsp" },
      { name: "Aleppo pepper (or red pepper flakes)", amount: "1", unit: "tsp" },
      { name: "smoked paprika", amount: "1/2", unit: "tsp" },
      { name: "fresh dill, chopped", amount: "1", unit: "tbsp" },
      { name: "white vinegar", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "crusty bread, for serving", amount: "2", unit: "slices" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mix the Greek yogurt with minced garlic and a pinch of salt. Divide between two shallow bowls and spread into a nest shape using the back of a spoon.",
      },
      {
        step: 2,
        instruction:
          "Poach the eggs: bring water to a gentle simmer with the vinegar. Create a swirl and slip in the eggs. Cook 3-4 minutes until whites are set. Remove with a slotted spoon.",
      },
      {
        step: 3,
        instruction:
          "While eggs poach, melt butter in a small saucepan over medium heat. Let it foam and turn golden brown, about 2 minutes. Remove from heat and stir in Aleppo pepper and smoked paprika.",
        tip: "Watch the butter carefully. It goes from brown to burnt quickly. As soon as it smells nutty and looks golden, pull it off the heat.",
      },
      {
        step: 4,
        instruction:
          "Nestle the poached eggs into the yogurt. Spoon the spiced butter over everything. Garnish with fresh dill. Serve with crusty bread for dipping.",
      },
    ],
    nutrition: { calories: 360, protein: 20, carbs: 14, fat: 26, fiber: 1 },
    tags: ["vegetarian", "high-protein", "mediterranean"],
    youtubeVideoId: null,
    relatedSlugs: ["eggs-benedict", "shakshuka", "savory-oatmeal"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "steel-cut-oats",
    name: "Steel Cut Oats",
    emoji: "\uD83C\uDF3E",
    description:
      "Nutty, chewy steel cut oats simmered until creamy, finished with brown sugar, toasted pecans, warm cinnamon, and fresh banana. Hearty and satisfying.",
    cuisine: "American",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 30,
    totalTime: 35,
    servings: 4,
    ingredients: [
      { name: "steel cut oats", amount: "1", unit: "cup" },
      { name: "water", amount: "3", unit: "cups" },
      { name: "whole milk", amount: "1", unit: "cup" },
      { name: "ground cinnamon", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "brown sugar", amount: "2", unit: "tbsp", group: "Toppings" },
      { name: "toasted pecans, chopped", amount: "1/4", unit: "cup", group: "Toppings" },
      { name: "banana, sliced", amount: "1", unit: "medium", group: "Toppings" },
      { name: "butter", amount: "1", unit: "tbsp", group: "Toppings" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Bring water and milk to a boil in a medium saucepan. Stir in the steel cut oats and salt. Reduce to a low simmer.",
      },
      {
        step: 2,
        instruction:
          "Cook for 25-30 minutes, stirring every 5 minutes, until the oats are tender and the porridge is thick and creamy. Stir in cinnamon.",
        tip: "Steel cut oats take longer than rolled oats but have a much better texture. For quicker mornings, soak them overnight and they'll cook in 10 minutes.",
      },
      {
        step: 3,
        instruction:
          "Divide into bowls. Top each with a pat of butter, brown sugar, toasted pecans, and sliced banana.",
      },
    ],
    nutrition: { calories: 320, protein: 10, carbs: 48, fat: 12, fiber: 6 },
    tags: ["vegetarian", "meal-prep", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["savory-oatmeal", "overnight-oats", "congee"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
];
