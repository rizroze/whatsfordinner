import type { FullRecipe } from "./types";

export const snackExtendedRecipes: FullRecipe[] = [
  {
    slug: "deviled-eggs",
    name: "Deviled Eggs",
    emoji: "\u{1F95A}",
    description:
      "Classic deviled eggs with a creamy mustard-paprika filling, topped with a sprinkle of smoked paprika and fresh chives. A timeless party appetizer.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 12,
    totalTime: 32,
    servings: 6,
    ingredients: [
      { name: "large eggs", amount: "6", unit: "whole" },
      { name: "mayonnaise", amount: "3", unit: "tbsp" },
      { name: "Dijon mustard", amount: "1", unit: "tsp" },
      { name: "white vinegar", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "black pepper", amount: "1/8", unit: "tsp" },
      { name: "smoked paprika", amount: "1/4", unit: "tsp" },
      { name: "fresh chives, minced", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Place eggs in a single layer in a saucepan and cover with cold water by 1 inch. Bring to a rolling boil, then cover, remove from heat, and let sit for 12 minutes.",
        tip: "Starting with cold water and using the residual heat method prevents that gray-green ring around the yolk.",
      },
      {
        step: 2,
        instruction:
          "Transfer eggs to an ice bath for 5 minutes. Peel under running water and slice each egg in half lengthwise.",
      },
      {
        step: 3,
        instruction:
          "Scoop yolks into a bowl. Mash with a fork until smooth. Add mayonnaise, mustard, vinegar, salt, and pepper. Mix until creamy.",
      },
      {
        step: 4,
        instruction:
          "Pipe or spoon the filling back into the egg white halves. Garnish with smoked paprika and chives. Chill until ready to serve.",
      },
    ],
    nutrition: { calories: 140, protein: 8, carbs: 1, fat: 11, fiber: 0 },
    tags: ["gluten-free", "low-carb", "quick", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["bruschetta", "caprese-skewers", "hummus-with-pita"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "stuffed-mushrooms",
    name: "Stuffed Mushrooms",
    emoji: "\u{1F344}",
    description:
      "Baby bella mushroom caps stuffed with a savory blend of cream cheese, garlic, Parmesan, and herbs, baked until golden and bubbling.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 6,
    ingredients: [
      { name: "baby bella mushrooms", amount: "24", unit: "whole" },
      { name: "cream cheese, softened", amount: "4", unit: "oz" },
      { name: "Parmesan cheese, grated", amount: "1/4", unit: "cup" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "fresh parsley, chopped", amount: "2", unit: "tbsp" },
      { name: "breadcrumbs", amount: "2", unit: "tbsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "black pepper", amount: "1/8", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 375F. Remove stems from mushrooms, finely chop the stems and set aside. Brush caps with olive oil and place hollow-side up on a baking sheet.",
      },
      {
        step: 2,
        instruction:
          "Mix cream cheese, Parmesan, garlic, chopped stems, parsley, salt, and pepper in a bowl until well combined.",
      },
      {
        step: 3,
        instruction:
          "Fill each mushroom cap with a generous mound of the cheese mixture. Top with breadcrumbs.",
      },
      {
        step: 4,
        instruction:
          "Bake for 18-20 minutes until the mushrooms are tender and the tops are golden brown. Let cool 5 minutes before serving.",
        tip: "Don't skip the cooling time. The filling is molten hot straight from the oven.",
      },
    ],
    nutrition: { calories: 110, protein: 5, carbs: 5, fat: 8, fiber: 1 },
    tags: ["vegetarian", "party", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["deviled-eggs", "bruschetta", "garlic-bread"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "spinach-artichoke-dip",
    name: "Spinach Artichoke Dip",
    emoji: "\u{1F96C}",
    description:
      "Hot, bubbly spinach artichoke dip loaded with cream cheese, sour cream, Parmesan, and garlic. Served with toasted baguette slices for scooping.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 8,
    ingredients: [
      { name: "frozen chopped spinach, thawed and drained", amount: "10", unit: "oz" },
      { name: "canned artichoke hearts, drained and chopped", amount: "14", unit: "oz" },
      { name: "cream cheese, softened", amount: "8", unit: "oz" },
      { name: "sour cream", amount: "1/2", unit: "cup" },
      { name: "Parmesan cheese, grated", amount: "1/2", unit: "cup" },
      { name: "mozzarella cheese, shredded", amount: "1/2", unit: "cup" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "red pepper flakes", amount: "1/4", unit: "tsp" },
      { name: "baguette, sliced", amount: "1", unit: "whole" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 375F. Squeeze all excess moisture from the thawed spinach using a clean kitchen towel. This is critical for a thick, creamy dip.",
        tip: "Wet spinach is the number one reason this dip turns out watery. Squeeze it bone dry.",
      },
      {
        step: 2,
        instruction:
          "Mix cream cheese, sour cream, Parmesan, garlic, salt, and red pepper flakes until smooth. Fold in spinach, artichokes, and half the mozzarella.",
      },
      {
        step: 3,
        instruction:
          "Transfer to a baking dish. Top with remaining mozzarella. Bake for 22-25 minutes until golden and bubbling around the edges.",
      },
      {
        step: 4,
        instruction:
          "Let cool for 5 minutes. Serve with toasted baguette slices.",
      },
    ],
    nutrition: { calories: 220, protein: 10, carbs: 12, fat: 15, fiber: 3 },
    tags: ["vegetarian", "party", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["hummus-with-pita", "baba-ganoush", "nachos"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "mozzarella-sticks",
    name: "Mozzarella Sticks",
    emoji: "\u{1F9C0}",
    description:
      "Crispy breaded mozzarella sticks with a golden crust and gooey melted center, served with warm marinara sauce for dipping.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 8,
    totalTime: 88,
    servings: 4,
    ingredients: [
      { name: "mozzarella string cheese sticks", amount: "12", unit: "whole" },
      { name: "all-purpose flour", amount: "1/2", unit: "cup" },
      { name: "eggs, beaten", amount: "2", unit: "whole" },
      { name: "Italian breadcrumbs", amount: "1", unit: "cup" },
      { name: "garlic powder", amount: "1/2", unit: "tsp" },
      { name: "dried oregano", amount: "1/2", unit: "tsp" },
      { name: "vegetable oil, for frying", amount: "3", unit: "cups" },
      { name: "marinara sauce, warmed", amount: "1/2", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Set up a breading station: flour in one dish, beaten eggs in another, breadcrumbs mixed with garlic powder and oregano in a third. Dip each cheese stick in flour, then egg, then breadcrumbs. Repeat the egg and breadcrumb step for a double coat.",
        tip: "Double breading is essential. A single coat will burst open during frying.",
      },
      {
        step: 2,
        instruction:
          "Place breaded sticks on a parchment-lined baking sheet and freeze for at least 1 hour. They must be frozen solid before frying.",
      },
      {
        step: 3,
        instruction:
          "Heat vegetable oil to 375F in a deep pot. Fry the frozen mozzarella sticks in batches for 1-2 minutes until golden brown. Don't overcook or the cheese will leak out.",
      },
      {
        step: 4,
        instruction:
          "Drain on paper towels for 1 minute. Serve immediately with warm marinara sauce.",
      },
    ],
    nutrition: { calories: 280, protein: 14, carbs: 22, fat: 16, fiber: 1 },
    tags: ["comfort-food", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["onion-rings", "garlic-bread", "nachos"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-wings",
    name: "Chicken Wings",
    emoji: "\u{1F357}",
    description:
      "Crispy baked chicken wings tossed in a classic buffalo sauce made with hot sauce and butter. Served with blue cheese dressing and celery sticks.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 45,
    totalTime: 55,
    servings: 4,
    ingredients: [
      { name: "chicken wings, split at the joint", amount: "2", unit: "lbs" },
      { name: "baking powder", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "garlic powder", amount: "1/2", unit: "tsp" },
      { name: "hot sauce (like Frank's RedHot)", amount: "1/3", unit: "cup", group: "For the sauce" },
      { name: "unsalted butter, melted", amount: "3", unit: "tbsp", group: "For the sauce" },
      { name: "blue cheese dressing", amount: "1/4", unit: "cup" },
      { name: "celery sticks", amount: "4", unit: "stalks" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 425F. Pat the wings completely dry with paper towels. Toss with baking powder, salt, and garlic powder.",
        tip: "Baking powder is the secret to crispy oven-baked wings. It raises the pH of the skin, helping it brown and crisp.",
      },
      {
        step: 2,
        instruction:
          "Arrange wings in a single layer on a wire rack set over a baking sheet. Bake for 25 minutes, flip, then bake 20 more minutes until golden and crispy.",
      },
      {
        step: 3,
        instruction:
          "Whisk together hot sauce and melted butter in a large bowl. Add the cooked wings and toss until fully coated.",
      },
      {
        step: 4,
        instruction:
          "Serve immediately with blue cheese dressing and celery sticks on the side.",
      },
    ],
    nutrition: { calories: 380, protein: 28, carbs: 2, fat: 28, fiber: 0 },
    tags: ["high-protein", "gluten-free", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["popcorn-chicken", "nachos", "chicken-wings"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "fried-spring-rolls",
    name: "Fried Spring Rolls",
    emoji: "\u{1F95F}",
    description:
      "Crispy fried spring rolls filled with seasoned pork, shrimp, glass noodles, and shredded vegetables. Served with sweet chili dipping sauce.",
    cuisine: "Vietnamese",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 30,
    cookTime: 15,
    totalTime: 45,
    servings: 6,
    ingredients: [
      { name: "spring roll wrappers", amount: "20", unit: "sheets" },
      { name: "ground pork", amount: "8", unit: "oz" },
      { name: "shrimp, peeled and chopped", amount: "4", unit: "oz" },
      { name: "glass noodles, soaked and cut", amount: "2", unit: "oz" },
      { name: "shredded carrots", amount: "1/2", unit: "cup" },
      { name: "shredded cabbage", amount: "1/2", unit: "cup" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "fish sauce", amount: "1", unit: "tbsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
      { name: "vegetable oil, for frying", amount: "3", unit: "cups" },
      { name: "sweet chili sauce", amount: "1/4", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cook the ground pork in a skillet over medium heat until browned. Add shrimp, garlic, fish sauce, and pepper. Cook 2 minutes. Transfer to a bowl and mix in carrots, cabbage, and glass noodles. Let cool.",
      },
      {
        step: 2,
        instruction:
          "Place a spring roll wrapper on your work surface in a diamond shape. Spoon 2 tablespoons of filling onto the lower third. Fold the bottom corner over the filling, tuck in the sides, and roll tightly. Seal the edge with a dab of water.",
        tip: "Keep unused wrappers covered with a damp towel to prevent drying and cracking.",
      },
      {
        step: 3,
        instruction:
          "Heat oil to 350F. Fry spring rolls in batches for 3-4 minutes, turning once, until golden brown and crispy all over.",
      },
      {
        step: 4,
        instruction:
          "Drain on paper towels. Serve hot with sweet chili dipping sauce.",
      },
    ],
    nutrition: { calories: 220, protein: 12, carbs: 18, fat: 12, fiber: 1 },
    tags: ["dairy-free", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["vietnamese-spring-rolls", "popcorn-chicken", "korean-corn-dogs"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "crostini-with-ricotta",
    name: "Crostini with Ricotta",
    emoji: "\u{1F35E}",
    description:
      "Toasted baguette rounds topped with creamy whipped ricotta, honey drizzle, cracked black pepper, and fresh thyme. An elegant yet effortless appetizer.",
    cuisine: "Italian",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 5,
    totalTime: 15,
    servings: 4,
    ingredients: [
      { name: "baguette, sliced 1/2-inch thick", amount: "12", unit: "slices" },
      { name: "whole milk ricotta", amount: "1", unit: "cup" },
      { name: "extra virgin olive oil", amount: "2", unit: "tbsp" },
      { name: "honey", amount: "2", unit: "tbsp" },
      { name: "fresh thyme leaves", amount: "1", unit: "tsp" },
      { name: "flaky sea salt", amount: "1/4", unit: "tsp" },
      { name: "cracked black pepper", amount: "1/4", unit: "tsp" },
      { name: "lemon zest", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Arrange baguette slices on a baking sheet, brush with olive oil, and toast for 4-5 minutes until golden.",
      },
      {
        step: 2,
        instruction:
          "While bread toasts, whip the ricotta with lemon zest and a pinch of salt using a fork or whisk until light and fluffy.",
        tip: "Whipping the ricotta for a full minute transforms the texture from grainy to silky smooth.",
      },
      {
        step: 3,
        instruction:
          "Spread a generous spoonful of whipped ricotta on each crostini.",
      },
      {
        step: 4,
        instruction:
          "Drizzle with honey, sprinkle with fresh thyme, flaky salt, and cracked black pepper. Serve immediately.",
      },
    ],
    nutrition: { calories: 180, protein: 7, carbs: 22, fat: 7, fiber: 1 },
    tags: ["vegetarian", "quick", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["bruschetta", "caprese-skewers", "garlic-bread"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "caprese-skewers",
    name: "Caprese Skewers",
    emoji: "\u{1F345}",
    description:
      "Cherry tomatoes, fresh mozzarella balls, and basil leaves threaded onto skewers with a balsamic glaze drizzle. A no-cook party appetizer.",
    cuisine: "Italian",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 0,
    totalTime: 15,
    servings: 6,
    ingredients: [
      { name: "cherry tomatoes", amount: "24", unit: "whole" },
      { name: "fresh mozzarella balls (ciliegine)", amount: "24", unit: "whole" },
      { name: "fresh basil leaves", amount: "24", unit: "leaves" },
      { name: "extra virgin olive oil", amount: "2", unit: "tbsp" },
      { name: "balsamic glaze", amount: "2", unit: "tbsp" },
      { name: "flaky sea salt", amount: "1/4", unit: "tsp" },
      { name: "black pepper", amount: "1/8", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Thread a basil leaf, a mozzarella ball, and a cherry tomato onto each small skewer or toothpick. Repeat for all 24 skewers.",
      },
      {
        step: 2,
        instruction:
          "Arrange on a serving platter. Drizzle with olive oil and balsamic glaze.",
      },
      {
        step: 3,
        instruction:
          "Season with flaky salt and pepper. Serve at room temperature for the best flavor.",
        tip: "Pull the mozzarella from the fridge 15 minutes before serving. Cold mozzarella has half the flavor of room-temperature mozzarella.",
      },
    ],
    nutrition: { calories: 120, protein: 7, carbs: 4, fat: 8, fiber: 1 },
    tags: ["vegetarian", "gluten-free", "quick", "party", "no-cook"],
    youtubeVideoId: null,
    relatedSlugs: ["bruschetta", "crostini-with-ricotta", "deviled-eggs"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "pita-chips-with-tzatziki",
    name: "Pita Chips with Tzatziki",
    emoji: "\u{1F95B}",
    description:
      "Crispy homemade pita chips seasoned with olive oil, garlic, and za'atar, paired with cool, creamy cucumber-dill tzatziki.",
    cuisine: "Greek",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    servings: 4,
    ingredients: [
      { name: "pita bread rounds", amount: "4", unit: "whole", group: "For the chips" },
      { name: "olive oil", amount: "3", unit: "tbsp", group: "For the chips" },
      { name: "za'atar seasoning", amount: "1", unit: "tsp", group: "For the chips" },
      { name: "garlic powder", amount: "1/2", unit: "tsp", group: "For the chips" },
      { name: "salt", amount: "1/2", unit: "tsp", group: "For the chips" },
      { name: "Greek yogurt", amount: "1", unit: "cup", group: "For the tzatziki" },
      { name: "cucumber, grated and squeezed dry", amount: "1/2", unit: "medium", group: "For the tzatziki" },
      { name: "fresh dill, chopped", amount: "1", unit: "tbsp", group: "For the tzatziki" },
      { name: "garlic clove, minced", amount: "1", unit: "clove", group: "For the tzatziki" },
      { name: "lemon juice", amount: "1", unit: "tbsp", group: "For the tzatziki" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Cut each pita into 8 wedges. Toss with olive oil, za'atar, garlic powder, and salt.",
      },
      {
        step: 2,
        instruction:
          "Spread in a single layer on baking sheets. Bake for 8-10 minutes until golden and crispy, flipping halfway through.",
        tip: "Watch them closely after the 7-minute mark. They go from perfect to burnt in under a minute.",
      },
      {
        step: 3,
        instruction:
          "Make the tzatziki: combine Greek yogurt, grated cucumber, dill, garlic, and lemon juice. Season with salt to taste.",
      },
      {
        step: 4,
        instruction:
          "Serve warm pita chips alongside the tzatziki.",
      },
    ],
    nutrition: { calories: 200, protein: 8, carbs: 26, fat: 8, fiber: 2 },
    tags: ["vegetarian", "mediterranean", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["hummus-with-pita", "baba-ganoush", "falafel-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "korean-corn-dogs",
    name: "Korean Corn Dogs",
    emoji: "\u{1F32D}",
    description:
      "Crispy battered hot dogs coated in a yeasted dough with a panko crust, deep fried until golden, then dusted with sugar and drizzled with ketchup and mustard.",
    cuisine: "Korean",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 25,
    cookTime: 10,
    totalTime: 35,
    servings: 4,
    ingredients: [
      { name: "hot dogs", amount: "4", unit: "whole" },
      { name: "mozzarella cheese sticks", amount: "4", unit: "whole" },
      { name: "all-purpose flour", amount: "1", unit: "cup" },
      { name: "sugar", amount: "2", unit: "tbsp" },
      { name: "instant yeast", amount: "1", unit: "tsp" },
      { name: "warm milk", amount: "1/2", unit: "cup" },
      { name: "egg", amount: "1", unit: "whole" },
      { name: "panko breadcrumbs", amount: "1", unit: "cup" },
      { name: "vegetable oil, for frying", amount: "4", unit: "cups" },
      { name: "granulated sugar, for coating", amount: "2", unit: "tbsp" },
      { name: "ketchup and mustard", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cut each hot dog and mozzarella stick in half. Thread a hot dog half and a cheese half onto wooden skewers. Pat dry with paper towels.",
      },
      {
        step: 2,
        instruction:
          "Mix flour, sugar, yeast, warm milk, and egg into a thick batter. Let rest 10 minutes until slightly puffy.",
        tip: "The batter should be thick enough to cling to the skewers without dripping off. Add a tablespoon of flour if it's too runny.",
      },
      {
        step: 3,
        instruction:
          "Dip each skewer into the batter, coating evenly, then roll in panko breadcrumbs.",
      },
      {
        step: 4,
        instruction:
          "Heat oil to 350F. Fry corn dogs for 3-4 minutes, turning occasionally, until deep golden brown. Drain on paper towels, sprinkle with sugar, and serve with ketchup and mustard.",
      },
    ],
    nutrition: { calories: 340, protein: 14, carbs: 32, fat: 18, fiber: 1 },
    tags: ["comfort-food", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["mozzarella-sticks", "popcorn-chicken", "onion-rings"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "popcorn-chicken",
    name: "Popcorn Chicken",
    emoji: "\u{1F414}",
    description:
      "Bite-sized pieces of chicken breast in a super crispy seasoned coating, served with honey mustard dipping sauce. Better than any fast food version.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 4,
    ingredients: [
      { name: "boneless chicken breast, cut into 1-inch pieces", amount: "1", unit: "lb" },
      { name: "buttermilk", amount: "1/2", unit: "cup" },
      { name: "all-purpose flour", amount: "1", unit: "cup" },
      { name: "cornstarch", amount: "1/4", unit: "cup" },
      { name: "paprika", amount: "1", unit: "tsp" },
      { name: "garlic powder", amount: "1", unit: "tsp" },
      { name: "onion powder", amount: "1/2", unit: "tsp" },
      { name: "cayenne pepper", amount: "1/4", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "vegetable oil, for frying", amount: "3", unit: "cups" },
      { name: "honey mustard, for dipping", amount: "1/4", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Marinate chicken pieces in buttermilk for at least 15 minutes (or up to overnight in the fridge).",
        tip: "Buttermilk tenderizes the chicken and helps the coating stick. Even 15 minutes makes a difference.",
      },
      {
        step: 2,
        instruction:
          "Mix flour, cornstarch, paprika, garlic powder, onion powder, cayenne, and salt in a bowl. Remove chicken from buttermilk and toss in the seasoned flour, pressing to coat.",
      },
      {
        step: 3,
        instruction:
          "Heat oil to 375F. Fry chicken in batches for 3-4 minutes until golden brown and cooked through. Don't crowd the pot.",
      },
      {
        step: 4,
        instruction:
          "Drain on paper towels and season immediately with a pinch of salt. Serve with honey mustard.",
      },
    ],
    nutrition: { calories: 320, protein: 26, carbs: 22, fat: 14, fiber: 1 },
    tags: ["high-protein", "comfort-food", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-wings", "korean-corn-dogs", "onion-rings"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "sweet-potato-fries",
    name: "Sweet Potato Fries",
    emoji: "\u{1F360}",
    description:
      "Crispy baked sweet potato fries seasoned with smoked paprika and garlic powder, served with a creamy chipotle aioli for dipping.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 4,
    ingredients: [
      { name: "sweet potatoes, cut into 1/4-inch sticks", amount: "2", unit: "large" },
      { name: "cornstarch", amount: "1", unit: "tbsp" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "smoked paprika", amount: "1", unit: "tsp" },
      { name: "garlic powder", amount: "1/2", unit: "tsp" },
      { name: "salt", amount: "3/4", unit: "tsp" },
      { name: "mayonnaise", amount: "3", unit: "tbsp", group: "For the aioli" },
      { name: "chipotle pepper in adobo, minced", amount: "1", unit: "tsp", group: "For the aioli" },
      { name: "lime juice", amount: "1", unit: "tsp", group: "For the aioli" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 425F. Toss sweet potato sticks with cornstarch until evenly coated, then toss with olive oil, paprika, garlic powder, and salt.",
        tip: "Cornstarch is the trick for crispy baked sweet potato fries. It absorbs moisture and creates a thin crunchy shell.",
      },
      {
        step: 2,
        instruction:
          "Spread in a single layer on parchment-lined baking sheets. Don't overcrowd. Use two sheets if needed.",
      },
      {
        step: 3,
        instruction:
          "Bake for 15 minutes, flip each fry, then bake 8-10 more minutes until crispy and caramelized.",
      },
      {
        step: 4,
        instruction:
          "Mix mayo, chipotle pepper, and lime juice for the aioli. Serve fries hot with aioli on the side.",
      },
    ],
    nutrition: { calories: 220, protein: 3, carbs: 32, fat: 10, fiber: 4 },
    tags: ["vegan", "gluten-free", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["onion-rings", "garlic-bread", "nachos"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "garlic-bread",
    name: "Garlic Bread",
    emoji: "\u{1F9C4}",
    description:
      "Buttery, garlicky, golden-crisp bread with a soft, pillowy center. Made with a generous spread of garlic butter and fresh parsley, broiled to perfection.",
    cuisine: "Italian-American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 8,
    totalTime: 13,
    servings: 4,
    ingredients: [
      { name: "Italian bread or baguette, halved lengthwise", amount: "1", unit: "loaf" },
      { name: "unsalted butter, softened", amount: "4", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "fresh parsley, chopped", amount: "2", unit: "tbsp" },
      { name: "Parmesan cheese, grated", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Set oven to broil (high). Mix softened butter, garlic, parsley, Parmesan, and salt until well combined.",
      },
      {
        step: 2,
        instruction:
          "Spread the garlic butter generously over the cut sides of the bread.",
      },
      {
        step: 3,
        instruction:
          "Place on a baking sheet, cut side up. Broil 6-8 inches from the heat for 2-3 minutes until the top is golden and the butter is bubbling.",
        tip: "Stay by the oven during broiling. It goes from perfect to charred in seconds.",
      },
      {
        step: 4,
        instruction:
          "Slice into pieces and serve warm.",
      },
    ],
    nutrition: { calories: 240, protein: 6, carbs: 28, fat: 12, fiber: 1 },
    tags: ["vegetarian", "quick", "comfort-food", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["bruschetta", "crostini-with-ricotta", "mozzarella-sticks"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "cheese-quesadilla",
    name: "Cheese Quesadilla",
    emoji: "\u{1FAD4}",
    description:
      "A perfectly golden and crispy flour tortilla filled with melted cheddar and Monterey Jack cheese, served with salsa and sour cream.",
    cuisine: "Mexican",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 6,
    totalTime: 11,
    servings: 2,
    ingredients: [
      { name: "large flour tortillas", amount: "2", unit: "whole" },
      { name: "shredded cheddar cheese", amount: "1/2", unit: "cup" },
      { name: "shredded Monterey Jack cheese", amount: "1/2", unit: "cup" },
      { name: "butter", amount: "1", unit: "tbsp" },
      { name: "salsa", amount: "2", unit: "tbsp" },
      { name: "sour cream", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Sprinkle both cheeses evenly over one half of each tortilla. Fold the other half over to close.",
      },
      {
        step: 2,
        instruction:
          "Melt butter in a large skillet over medium heat. Place quesadillas in the skillet and cook for 2-3 minutes per side until golden brown and the cheese is fully melted.",
        tip: "Medium heat is key. Too high and the tortilla burns before the cheese melts.",
      },
      {
        step: 3,
        instruction:
          "Cut into wedges and serve with salsa and sour cream.",
      },
    ],
    nutrition: { calories: 340, protein: 16, carbs: 24, fat: 20, fiber: 1 },
    tags: ["vegetarian", "quick", "budget", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["loaded-quesadillas", "nachos", "chicken-quesadilla"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "nachos",
    name: "Nachos",
    emoji: "\u{1F355}",
    description:
      "Loaded nachos with layers of crispy tortilla chips, seasoned beef, melted cheese, black beans, jalape\u00f1os, pico de gallo, guacamole, and sour cream.",
    cuisine: "Mexican",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 6,
    ingredients: [
      { name: "tortilla chips", amount: "8", unit: "oz" },
      { name: "ground beef", amount: "8", unit: "oz" },
      { name: "taco seasoning", amount: "1", unit: "tbsp" },
      { name: "shredded cheddar cheese", amount: "1", unit: "cup" },
      { name: "shredded Monterey Jack cheese", amount: "1", unit: "cup" },
      { name: "canned black beans, drained", amount: "1/2", unit: "cup" },
      { name: "pickled jalape\u00f1os", amount: "1/4", unit: "cup" },
      { name: "pico de gallo", amount: "1/2", unit: "cup" },
      { name: "sour cream", amount: "1/4", unit: "cup" },
      { name: "guacamole", amount: "1/4", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Brown the ground beef in a skillet over medium-high heat. Drain fat, add taco seasoning and 2 tbsp water, simmer 2 minutes.",
      },
      {
        step: 2,
        instruction:
          "Spread half the chips on an oven-safe platter or sheet pan. Top with half the beef, beans, and cheeses. Repeat with a second layer.",
        tip: "Layering is the secret to great nachos. Every chip should have cheese and toppings, not just the ones on top.",
      },
      {
        step: 3,
        instruction:
          "Bake for 8-10 minutes until the cheese is fully melted and bubbling.",
      },
      {
        step: 4,
        instruction:
          "Top with jalape\u00f1os, pico de gallo, guacamole, and sour cream. Serve immediately.",
      },
    ],
    nutrition: { calories: 420, protein: 20, carbs: 30, fat: 26, fiber: 4 },
    tags: ["comfort-food", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["cheese-quesadilla", "loaded-quesadillas", "guacamole-with-chips"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "onion-rings",
    name: "Onion Rings",
    emoji: "\u{1F9C5}",
    description:
      "Thick-cut onion rings dipped in a light, crispy beer batter and fried until golden. Shatteringly crunchy on the outside, sweet and tender inside.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 4,
    ingredients: [
      { name: "large sweet onions, sliced into 1/2-inch rings", amount: "2", unit: "whole" },
      { name: "all-purpose flour", amount: "1", unit: "cup" },
      { name: "cornstarch", amount: "1/4", unit: "cup" },
      { name: "baking powder", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "cold beer or sparkling water", amount: "3/4", unit: "cup" },
      { name: "egg", amount: "1", unit: "whole" },
      { name: "vegetable oil, for frying", amount: "4", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Separate onion slices into individual rings. Soak in ice water for 15 minutes to crisp them up. Pat completely dry.",
      },
      {
        step: 2,
        instruction:
          "Whisk flour, cornstarch, baking powder, and salt. Add cold beer and egg, stir until just combined. A few lumps are fine.",
        tip: "Use cold beer and don't overmix. The carbonation and cold temperature create an incredibly light, airy batter.",
      },
      {
        step: 3,
        instruction:
          "Heat oil to 375F. Dip rings in batter, let excess drip off, and fry in batches for 2-3 minutes per side until deep golden brown.",
      },
      {
        step: 4,
        instruction:
          "Drain on a wire rack (not paper towels, which make them soggy). Season with salt immediately and serve hot.",
      },
    ],
    nutrition: { calories: 280, protein: 5, carbs: 34, fat: 14, fiber: 2 },
    tags: ["vegetarian", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["sweet-potato-fries", "mozzarella-sticks", "popcorn-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "shrimp-cocktail",
    name: "Shrimp Cocktail",
    emoji: "\u{1F990}",
    description:
      "Perfectly poached jumbo shrimp chilled and served with a zesty cocktail sauce made with horseradish, ketchup, lemon juice, and a dash of Worcestershire.",
    cuisine: "American",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 5,
    totalTime: 75,
    servings: 4,
    ingredients: [
      { name: "jumbo shrimp, peeled and deveined", amount: "1", unit: "lb" },
      { name: "lemon, halved", amount: "1", unit: "whole" },
      { name: "bay leaf", amount: "1", unit: "whole" },
      { name: "black peppercorns", amount: "1", unit: "tsp" },
      { name: "ketchup", amount: "1/2", unit: "cup", group: "For the cocktail sauce" },
      { name: "prepared horseradish", amount: "2", unit: "tbsp", group: "For the cocktail sauce" },
      { name: "lemon juice", amount: "1", unit: "tbsp", group: "For the cocktail sauce" },
      { name: "Worcestershire sauce", amount: "1", unit: "tsp", group: "For the cocktail sauce" },
      { name: "hot sauce", amount: "1/4", unit: "tsp", group: "For the cocktail sauce" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Bring a large pot of salted water to a boil with the lemon halves, bay leaf, and peppercorns. Add shrimp and cook for 2-3 minutes until pink and just curled.",
        tip: "Remove the shrimp the instant they turn pink. Overcooked shrimp are rubbery. They'll continue cooking slightly in residual heat.",
      },
      {
        step: 2,
        instruction:
          "Transfer shrimp immediately to a large bowl of ice water to stop cooking. Chill for 5 minutes, then drain and pat dry.",
      },
      {
        step: 3,
        instruction:
          "Mix all cocktail sauce ingredients together. Taste and adjust horseradish and hot sauce to your preference.",
      },
      {
        step: 4,
        instruction:
          "Arrange shrimp on a platter with the cocktail sauce in the center and lemon wedges on the side. Refrigerate until ready to serve.",
      },
    ],
    nutrition: { calories: 160, protein: 24, carbs: 10, fat: 2, fiber: 0 },
    tags: ["high-protein", "low-carb", "gluten-free", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["deviled-eggs", "caprese-skewers", "fried-spring-rolls"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "baba-ganoush",
    name: "Baba Ganoush",
    emoji: "\u{1F346}",
    description:
      "Smoky roasted eggplant dip blended with tahini, garlic, lemon juice, and a drizzle of olive oil. A silky, intensely flavorful alternative to hummus.",
    cuisine: "Middle Eastern",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 40,
    totalTime: 50,
    servings: 4,
    ingredients: [
      { name: "large eggplants", amount: "2", unit: "whole" },
      { name: "tahini", amount: "2", unit: "tbsp" },
      { name: "garlic clove, minced", amount: "1", unit: "clove" },
      { name: "lemon juice", amount: "2", unit: "tbsp" },
      { name: "extra virgin olive oil", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "smoked paprika", amount: "1/4", unit: "tsp" },
      { name: "fresh parsley, chopped", amount: "1", unit: "tbsp" },
      { name: "pita bread, for serving", amount: "2", unit: "rounds" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 475F. Pierce eggplants several times with a fork. Roast directly on the oven rack (with a sheet pan below to catch drips) for 35-40 minutes until completely collapsed and charred.",
        tip: "For extra smokiness, char the eggplant directly over a gas burner flame for 2 minutes before roasting.",
      },
      {
        step: 2,
        instruction:
          "Let cool slightly, then split open and scoop out the soft flesh, leaving the charred skin behind. Drain excess liquid for 5 minutes in a colander.",
      },
      {
        step: 3,
        instruction:
          "Mash the eggplant flesh with a fork (don't use a food processor, you want some texture). Stir in tahini, garlic, lemon juice, and salt.",
      },
      {
        step: 4,
        instruction:
          "Spread on a plate, drizzle with olive oil, and sprinkle with smoked paprika and parsley. Serve with warm pita.",
      },
    ],
    nutrition: { calories: 180, protein: 4, carbs: 18, fat: 11, fiber: 6 },
    tags: ["vegan", "mediterranean", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["hummus-with-pita", "pita-chips-with-tzatziki", "spinach-artichoke-dip"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "arancini",
    name: "Arancini",
    emoji: "\u{1F35A}",
    description:
      "Crispy fried Italian rice balls stuffed with mozzarella, coated in seasoned breadcrumbs, and served with warm marinara sauce.",
    cuisine: "Italian",
    mealType: "snack",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 15,
    totalTime: 95,
    servings: 6,
    ingredients: [
      { name: "cooked risotto or leftover rice, cold", amount: "3", unit: "cups" },
      { name: "eggs", amount: "2", unit: "whole" },
      { name: "Parmesan cheese, grated", amount: "1/3", unit: "cup" },
      { name: "mozzarella, cut into 1/2-inch cubes", amount: "3", unit: "oz" },
      { name: "all-purpose flour", amount: "1/2", unit: "cup" },
      { name: "Italian breadcrumbs", amount: "1", unit: "cup" },
      { name: "vegetable oil, for frying", amount: "4", unit: "cups" },
      { name: "marinara sauce, warmed", amount: "1/2", unit: "cup" },
      { name: "salt", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mix cold rice with 1 beaten egg, Parmesan, and salt. Take a golf-ball-sized portion, flatten in your palm, press a cube of mozzarella in the center, and shape into a ball around it. Repeat.",
        tip: "The rice must be cold so it's sticky enough to hold together. Warm rice will fall apart.",
      },
      {
        step: 2,
        instruction:
          "Set up a breading station: flour, remaining beaten egg, breadcrumbs. Roll each ball in flour, dip in egg, then coat in breadcrumbs.",
      },
      {
        step: 3,
        instruction:
          "Refrigerate the breaded balls for at least 30 minutes to firm up. This helps them hold their shape during frying.",
      },
      {
        step: 4,
        instruction:
          "Heat oil to 350F. Fry in batches for 3-4 minutes until deep golden brown. Drain on paper towels. Serve with warm marinara.",
      },
    ],
    nutrition: { calories: 290, protein: 12, carbs: 30, fat: 14, fiber: 1 },
    tags: ["comfort-food", "party"],
    youtubeVideoId: null,
    relatedSlugs: ["mozzarella-sticks", "fried-spring-rolls", "stuffed-mushrooms"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "coconut-energy-balls",
    name: "Coconut Energy Balls",
    emoji: "\u{1F965}",
    description:
      "No-bake energy balls made with dates, shredded coconut, almond butter, and a touch of vanilla. Naturally sweet, chewy, and satisfying.",
    cuisine: "International",
    mealType: "snack",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 0,
    totalTime: 15,
    servings: 12,
    ingredients: [
      { name: "Medjool dates, pitted", amount: "1", unit: "cup" },
      { name: "unsweetened shredded coconut", amount: "1/2", unit: "cup" },
      { name: "almond butter", amount: "2", unit: "tbsp" },
      { name: "rolled oats", amount: "1/2", unit: "cup" },
      { name: "cocoa powder", amount: "1", unit: "tbsp" },
      { name: "vanilla extract", amount: "1", unit: "tsp" },
      { name: "pinch of salt", amount: "1", unit: "pinch" },
      { name: "extra shredded coconut, for rolling", amount: "1/4", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Add dates to a food processor and pulse until they form a sticky paste. If they're dry, soak in warm water for 5 minutes first.",
      },
      {
        step: 2,
        instruction:
          "Add shredded coconut, almond butter, oats, cocoa powder, vanilla, and salt. Pulse until everything is combined and the mixture holds together when pressed.",
      },
      {
        step: 3,
        instruction:
          "Roll into 12 balls using slightly wet hands. Roll each ball in the extra shredded coconut.",
        tip: "If the mixture is too sticky, chill for 10 minutes first. If too dry, add a teaspoon of water.",
      },
      {
        step: 4,
        instruction:
          "Refrigerate in an airtight container. They firm up after 30 minutes and keep for up to 2 weeks.",
      },
    ],
    nutrition: { calories: 95, protein: 2, carbs: 14, fat: 4, fiber: 2 },
    tags: ["vegan", "gluten-free", "meal-prep", "no-cook", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["trail-mix-energy-bites", "chia-pudding", "acai-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
];
