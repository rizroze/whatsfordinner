import type { FullRecipe } from "./types";

export const breakfastRecipes: FullRecipe[] = [
  {
    slug: "grilled-cheese-tomato-soup-brunch",
    name: "Grilled Cheese & Tomato Soup Brunch",
    emoji: "\u{1F9C0}",
    description:
      "A comforting brunch twist on the classic combo. Crispy buttery grilled cheese sandwiches served alongside a rich homemade tomato soup, perfect for lazy weekend mornings.",
    cuisine: "American",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 2,
    ingredients: [
      { name: "sourdough bread", amount: "4", unit: "slices", group: "For the grilled cheese" },
      { name: "sharp cheddar cheese", amount: "4", unit: "oz", group: "For the grilled cheese" },
      { name: "unsalted butter", amount: "2", unit: "tbsp", group: "For the grilled cheese" },
      { name: "canned whole tomatoes", amount: "28", unit: "oz", group: "For the soup" },
      { name: "yellow onion", amount: "1", unit: "medium", group: "For the soup" },
      { name: "garlic cloves", amount: "2", unit: "cloves", group: "For the soup" },
      { name: "olive oil", amount: "1", unit: "tbsp", group: "For the soup" },
      { name: "heavy cream", amount: "2", unit: "tbsp", group: "For the soup" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "dried basil", amount: "1/2", unit: "tsp", group: "For the soup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Dice the onion and mince the garlic. Heat olive oil in a medium saucepan over medium heat and cook the onion for 4-5 minutes until softened.",
      },
      {
        step: 2,
        instruction:
          "Add the garlic and cook for 30 seconds. Pour in the canned tomatoes with their juice, add the dried basil, salt, and pepper. Bring to a simmer and cook for 15 minutes.",
        tip: "Crush the whole tomatoes with a spoon as they cook for a chunkier texture, or blend smooth at the end.",
      },
      {
        step: 3,
        instruction:
          "While the soup simmers, butter one side of each bread slice. Place cheese between unbuttered sides to form 2 sandwiches.",
      },
      {
        step: 4,
        instruction:
          "Heat a skillet over medium heat. Cook each sandwich for 3-4 minutes per side until golden brown and the cheese is melted.",
        tip: "Press down gently with a spatula for even browning. Low and slow gives better results than high heat.",
      },
      {
        step: 5,
        instruction:
          "Use an immersion blender to puree the soup until smooth (or leave chunky if preferred). Stir in the heavy cream.",
      },
      {
        step: 6,
        instruction:
          "Slice the grilled cheese diagonally and serve alongside bowls of hot tomato soup.",
      },
    ],
    nutrition: { calories: 520, protein: 18, carbs: 42, fat: 32, fiber: 4 },
    tags: ["comfort-food", "family-friendly", "vegetarian"],
    youtubeVideoId: null,
    relatedSlugs: ["avocado-toast", "french-toast", "bruschetta"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "shakshuka",
    name: "Shakshuka",
    emoji: "\u{1F373}",
    description:
      "Eggs poached in a spiced tomato and pepper sauce, served straight from the skillet with crusty bread for dipping. A North African and Middle Eastern breakfast staple.",
    cuisine: "Middle Eastern",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 4,
    ingredients: [
      { name: "large eggs", amount: "6", unit: "whole" },
      { name: "canned crushed tomatoes", amount: "28", unit: "oz" },
      { name: "red bell pepper", amount: "1", unit: "large" },
      { name: "yellow onion", amount: "1", unit: "medium" },
      { name: "garlic cloves", amount: "3", unit: "cloves" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "smoked paprika", amount: "1", unit: "tsp" },
      { name: "cayenne pepper", amount: "1/4", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "fresh cilantro", amount: "2", unit: "tbsp" },
      { name: "crusty bread", amount: "4", unit: "slices" },
      { name: "crumbled feta cheese", amount: "2", unit: "oz" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Dice the onion and bell pepper. Mince the garlic. Heat olive oil in a large oven-safe skillet over medium heat.",
      },
      {
        step: 2,
        instruction:
          "Saute the onion and bell pepper for 5-6 minutes until softened. Add the garlic, cumin, paprika, and cayenne. Cook for 1 minute until fragrant.",
      },
      {
        step: 3,
        instruction:
          "Pour in the crushed tomatoes and season with salt. Stir well and simmer for 10 minutes until the sauce thickens slightly.",
      },
      {
        step: 4,
        instruction:
          "Make 6 small wells in the sauce with the back of a spoon. Crack an egg into each well.",
        tip: "Crack eggs into a small bowl first to avoid shell fragments in the sauce.",
      },
      {
        step: 5,
        instruction:
          "Cover the skillet and cook on medium-low for 6-8 minutes until the egg whites are set but the yolks are still runny.",
      },
      {
        step: 6,
        instruction:
          "Remove from heat, sprinkle with crumbled feta and chopped cilantro. Serve immediately with crusty bread for dipping.",
      },
    ],
    nutrition: { calories: 310, protein: 16, carbs: 28, fat: 15, fiber: 5 },
    tags: ["vegetarian", "one-pan", "mediterranean", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["avocado-toast", "breakfast-burrito", "falafel-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "overnight-oats",
    name: "Overnight Oats",
    emoji: "\u{1F95B}",
    description:
      "Creamy no-cook oats prepared the night before with milk, chia seeds, and your choice of toppings. The ultimate grab-and-go breakfast for busy mornings.",
    cuisine: "American",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    servings: 2,
    ingredients: [
      { name: "rolled oats", amount: "1", unit: "cup" },
      { name: "milk (any kind)", amount: "1", unit: "cup" },
      { name: "plain Greek yogurt", amount: "1/2", unit: "cup" },
      { name: "chia seeds", amount: "2", unit: "tbsp" },
      { name: "maple syrup", amount: "1", unit: "tbsp" },
      { name: "vanilla extract", amount: "1/2", unit: "tsp" },
      { name: "pinch of salt", amount: "1", unit: "pinch" },
      { name: "fresh berries", amount: "1/2", unit: "cup" },
      { name: "sliced almonds", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "In a medium bowl or jar, combine the rolled oats, milk, Greek yogurt, chia seeds, maple syrup, vanilla extract, and salt. Stir well.",
      },
      {
        step: 2,
        instruction:
          "Divide the mixture between two jars or containers. Press down lightly to submerge the oats.",
      },
      {
        step: 3,
        instruction: "Cover and refrigerate for at least 4 hours or overnight.",
        tip: "They keep for up to 3 days in the fridge, so you can batch-prep several at once.",
      },
      {
        step: 4,
        instruction:
          "In the morning, stir the oats and add a splash of milk if too thick. Top with fresh berries and sliced almonds.",
      },
    ],
    nutrition: { calories: 320, protein: 14, carbs: 45, fat: 10, fiber: 8 },
    tags: ["meal-prep", "vegetarian", "quick", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["greek-yogurt-parfait", "banana-pancakes", "trail-mix-energy-bites"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "avocado-toast",
    name: "Avocado Toast",
    emoji: "\u{1F951}",
    description:
      "Perfectly smashed avocado on toasted sourdough with a soft-boiled egg, everything bagel seasoning, and a squeeze of lemon. Simple, satisfying, and endlessly customizable.",
    cuisine: "American",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 8,
    totalTime: 13,
    servings: 2,
    ingredients: [
      { name: "ripe avocados", amount: "2", unit: "medium" },
      { name: "sourdough bread", amount: "2", unit: "thick slices" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "lemon juice", amount: "1", unit: "tbsp" },
      { name: "red pepper flakes", amount: "1/4", unit: "tsp" },
      { name: "everything bagel seasoning", amount: "1", unit: "tsp" },
      { name: "flaky sea salt", amount: "1/4", unit: "tsp" },
      { name: "olive oil", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Bring a small pot of water to a gentle boil. Carefully lower eggs in and cook for exactly 6.5 minutes for a jammy yolk.",
        tip: "Use a timer. Transfer eggs immediately to an ice bath to stop cooking.",
      },
      {
        step: 2,
        instruction: "While eggs cook, toast the sourdough slices until golden and crisp.",
      },
      {
        step: 3,
        instruction:
          "Halve the avocados and scoop the flesh into a bowl. Add lemon juice and a pinch of salt. Mash with a fork to your desired consistency (chunky or smooth).",
      },
      {
        step: 4,
        instruction:
          "Spread the mashed avocado generously onto each toast. Peel and halve the soft-boiled eggs, placing one half on each toast.",
      },
      {
        step: 5,
        instruction:
          "Drizzle with olive oil, sprinkle with everything bagel seasoning, red pepper flakes, and flaky sea salt. Serve immediately.",
      },
    ],
    nutrition: { calories: 380, protein: 14, carbs: 28, fat: 26, fiber: 10 },
    tags: ["quick", "vegetarian", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["shakshuka", "bruschetta", "greek-yogurt-parfait"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "french-toast",
    name: "French Toast",
    emoji: "\u{1F35E}",
    description:
      "Thick slices of brioche soaked in a vanilla-cinnamon egg custard, pan-fried to golden perfection. Served with maple syrup, fresh berries, and a dusting of powdered sugar.",
    cuisine: "French",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    totalTime: 22,
    servings: 4,
    ingredients: [
      { name: "brioche bread", amount: "8", unit: "thick slices" },
      { name: "large eggs", amount: "4", unit: "whole" },
      { name: "whole milk", amount: "3/4", unit: "cup" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "ground cinnamon", amount: "1", unit: "tsp" },
      { name: "granulated sugar", amount: "1", unit: "tbsp" },
      { name: "unsalted butter", amount: "2", unit: "tbsp" },
      { name: "maple syrup", amount: "4", unit: "tbsp" },
      { name: "powdered sugar", amount: "1", unit: "tbsp" },
      { name: "fresh mixed berries", amount: "1", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "In a wide shallow bowl, whisk together the eggs, milk, vanilla, cinnamon, and sugar until fully combined.",
      },
      {
        step: 2,
        instruction:
          "Heat a large non-stick skillet or griddle over medium heat. Add half the butter and let it melt.",
      },
      {
        step: 3,
        instruction:
          "Dip each slice of brioche into the egg mixture, letting it soak for about 15 seconds per side. Let excess drip off.",
        tip: "Day-old bread works best. It absorbs the custard without falling apart.",
      },
      {
        step: 4,
        instruction:
          "Cook each slice for 2-3 minutes per side until golden brown. Add more butter between batches as needed.",
      },
      {
        step: 5,
        instruction:
          "Serve stacked on plates, topped with fresh berries, a drizzle of maple syrup, and a light dusting of powdered sugar.",
      },
    ],
    nutrition: { calories: 420, protein: 14, carbs: 52, fat: 18, fiber: 2 },
    tags: ["comfort-food", "family-friendly", "vegetarian"],
    youtubeVideoId: null,
    relatedSlugs: ["banana-pancakes", "overnight-oats", "grilled-cheese-tomato-soup-brunch"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "breakfast-burrito",
    name: "Breakfast Burrito",
    emoji: "\u{1F32F}",
    description:
      "A hearty flour tortilla stuffed with fluffy scrambled eggs, seasoned black beans, melted cheese, avocado, and salsa. Meal-prep friendly and easy to customize.",
    cuisine: "Mexican",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    servings: 2,
    ingredients: [
      { name: "large flour tortillas (10-inch)", amount: "2", unit: "whole" },
      { name: "large eggs", amount: "4", unit: "whole" },
      { name: "canned black beans, drained", amount: "1/2", unit: "cup" },
      { name: "shredded Mexican cheese blend", amount: "1/2", unit: "cup" },
      { name: "ripe avocado", amount: "1/2", unit: "medium" },
      { name: "salsa", amount: "4", unit: "tbsp" },
      { name: "unsalted butter", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
      { name: "hot sauce (optional)", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Warm the black beans in a small saucepan over medium heat. Season with a pinch of salt.",
      },
      {
        step: 2,
        instruction:
          "Crack the eggs into a bowl, add salt and pepper, and whisk until uniform. Melt butter in a non-stick skillet over medium-low heat and scramble the eggs, stirring gently until just set (about 2-3 minutes).",
        tip: "Remove eggs from heat while still slightly wet. They'll continue cooking from residual heat.",
      },
      {
        step: 3,
        instruction:
          "Warm the tortillas in a dry skillet for 20-30 seconds per side or in the microwave for 15 seconds.",
      },
      {
        step: 4,
        instruction:
          "Layer each tortilla with scrambled eggs, black beans, cheese, sliced avocado, and salsa. Add hot sauce if desired.",
      },
      {
        step: 5,
        instruction:
          "Fold the sides of the tortilla in, then roll tightly from the bottom up to form a burrito. Slice in half and serve.",
        tip: "For meal prep, wrap tightly in foil and freeze. Reheat in a 375F oven for 20 minutes.",
      },
    ],
    nutrition: { calories: 480, protein: 24, carbs: 40, fat: 24, fiber: 8 },
    tags: ["high-protein", "quick", "meal-prep", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["shakshuka", "chicken-quesadilla", "loaded-quesadillas"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "greek-yogurt-parfait",
    name: "Greek Yogurt Parfait",
    emoji: "\u{1F366}",
    description:
      "Layers of thick Greek yogurt, crunchy granola, fresh berries, and a drizzle of honey. A protein-packed breakfast that takes minutes to assemble.",
    cuisine: "American",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 0,
    totalTime: 5,
    servings: 2,
    ingredients: [
      { name: "plain Greek yogurt (2% or full-fat)", amount: "1.5", unit: "cups" },
      { name: "granola", amount: "1/2", unit: "cup" },
      { name: "fresh strawberries, sliced", amount: "1/2", unit: "cup" },
      { name: "fresh blueberries", amount: "1/4", unit: "cup" },
      { name: "honey", amount: "2", unit: "tsp" },
      { name: "chia seeds", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Spoon half the yogurt into two glasses or bowls, dividing evenly.",
      },
      {
        step: 2,
        instruction:
          "Add a layer of granola on top of the yogurt, followed by half the strawberries and blueberries.",
      },
      {
        step: 3,
        instruction:
          "Add the remaining yogurt, then top with the rest of the berries and granola.",
      },
      {
        step: 4,
        instruction:
          "Drizzle with honey and sprinkle chia seeds on top. Serve immediately so the granola stays crunchy.",
        tip: "To meal-prep, keep granola separate in a small container and add just before eating.",
      },
    ],
    nutrition: { calories: 280, protein: 18, carbs: 36, fat: 8, fiber: 4 },
    tags: ["quick", "high-protein", "vegetarian", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["overnight-oats", "avocado-toast", "trail-mix-energy-bites"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "banana-pancakes",
    name: "Banana Pancakes",
    emoji: "\u{1F95E}",
    description:
      "Fluffy golden pancakes made with ripe mashed bananas for natural sweetness. Topped with fresh banana slices, a pat of butter, and warm maple syrup.",
    cuisine: "American",
    mealType: "breakfast",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    ingredients: [
      { name: "ripe bananas", amount: "2", unit: "large" },
      { name: "all-purpose flour", amount: "1.5", unit: "cups" },
      { name: "large eggs", amount: "2", unit: "whole" },
      { name: "milk", amount: "3/4", unit: "cup" },
      { name: "baking powder", amount: "2", unit: "tsp" },
      { name: "granulated sugar", amount: "1", unit: "tbsp" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "unsalted butter", amount: "2", unit: "tbsp" },
      { name: "maple syrup", amount: "4", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mash the bananas in a large bowl with a fork until mostly smooth (a few small lumps are fine).",
      },
      {
        step: 2,
        instruction:
          "Add the eggs, milk, melted butter (1 tbsp), and vanilla to the mashed bananas. Whisk to combine.",
      },
      {
        step: 3,
        instruction:
          "In a separate bowl, whisk together the flour, baking powder, sugar, and salt. Add the dry ingredients to the wet and stir until just combined.",
        tip: "Do not overmix. A few small lumps are fine and will make the pancakes fluffier.",
      },
      {
        step: 4,
        instruction:
          "Heat a non-stick skillet or griddle over medium heat. Add a small pat of butter. Pour about 1/4 cup of batter per pancake.",
      },
      {
        step: 5,
        instruction:
          "Cook until bubbles form on the surface and the edges look set (about 2-3 minutes). Flip and cook for another 1-2 minutes until golden.",
      },
      {
        step: 6,
        instruction:
          "Serve stacked with sliced banana on top, a pat of butter, and warm maple syrup.",
      },
    ],
    nutrition: { calories: 360, protein: 10, carbs: 58, fat: 10, fiber: 3 },
    tags: ["family-friendly", "vegetarian", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["french-toast", "overnight-oats", "greek-yogurt-parfait"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
];
