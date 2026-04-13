import type { FullRecipe } from "./types";

export const lunchExtendedRecipes: FullRecipe[] = [
  {
    slug: "tuna-melt",
    name: "Tuna Melt",
    emoji: "\u{1F41F}",
    description:
      "Creamy tuna salad on toasted sourdough, covered in melted cheddar and broiled until bubbly. A diner classic that hits different at home with good-quality tuna.",
    cuisine: "American",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 5,
    totalTime: 15,
    servings: 2,
    ingredients: [
      { name: "canned albacore tuna, drained", amount: "10", unit: "oz" },
      { name: "mayonnaise", amount: "3", unit: "tbsp" },
      { name: "celery stalk, finely diced", amount: "1", unit: "stalk" },
      { name: "Dijon mustard", amount: "1", unit: "tsp" },
      { name: "lemon juice", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
      { name: "sourdough bread", amount: "4", unit: "slices" },
      { name: "sharp cheddar cheese, sliced", amount: "4", unit: "oz" },
      { name: "unsalted butter", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat broiler. Mix tuna, mayonnaise, celery, Dijon mustard, lemon juice, salt, and pepper in a bowl.",
      },
      {
        step: 2,
        instruction:
          "Butter one side of each bread slice. Toast buttered-side down in a skillet over medium heat for 2 minutes until golden.",
      },
      {
        step: 3,
        instruction:
          "Place toasted bread on a sheet pan, toasted-side down. Divide tuna mixture onto each slice and top with cheddar cheese.",
        tip: "Use oil-packed tuna for richer flavor, or solid white albacore in water for a lighter version.",
      },
      {
        step: 4,
        instruction:
          "Broil for 2-3 minutes until the cheese is melted and bubbling. Serve open-faced or sandwiched together.",
      },
    ],
    nutrition: { calories: 480, protein: 36, carbs: 28, fat: 24, fiber: 2 },
    tags: ["quick", "high-protein", "comfort-food"],
    youtubeVideoId: null,
    relatedSlugs: ["club-sandwich", "egg-salad-sandwich", "caprese-panini"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "club-sandwich",
    name: "Club Sandwich",
    emoji: "\u{1F96A}",
    description:
      "The triple-decker classic: layers of roasted turkey, crispy bacon, lettuce, tomato, and mayo stacked between three slices of toasted bread. A lunch icon.",
    cuisine: "American",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 5,
    totalTime: 20,
    servings: 2,
    ingredients: [
      { name: "white sandwich bread", amount: "6", unit: "slices" },
      { name: "deli roasted turkey", amount: "8", unit: "oz" },
      { name: "thick-cut bacon", amount: "6", unit: "slices" },
      { name: "lettuce leaves", amount: "4", unit: "leaves" },
      { name: "ripe tomato, sliced", amount: "1", unit: "medium" },
      { name: "mayonnaise", amount: "2", unit: "tbsp" },
      { name: "Dijon mustard", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cook bacon in a skillet over medium heat for 3-4 minutes per side until crispy. Drain on paper towels.",
      },
      {
        step: 2,
        instruction:
          "Toast all 6 slices of bread until golden. Spread mayo on one side of each slice. Add mustard to two slices.",
      },
      {
        step: 3,
        instruction:
          "Build each sandwich in three layers: first toast with turkey and lettuce, second toast with bacon and tomato, topped with the third toast.",
        tip: "Secure each quarter with a toothpick before cutting. The triple-decker wants to slide apart.",
      },
      {
        step: 4,
        instruction:
          "Cut diagonally into quarters and serve with your favorite side.",
      },
    ],
    nutrition: { calories: 520, protein: 38, carbs: 34, fat: 24, fiber: 3 },
    tags: ["high-protein", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["tuna-melt", "caprese-panini", "egg-salad-sandwich"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "cobb-salad",
    name: "Cobb Salad",
    emoji: "\u{1F957}",
    description:
      "A composed salad with rows of grilled chicken, hard-boiled eggs, crispy bacon, avocado, tomatoes, and blue cheese over crisp greens. Substantial enough to be a full meal.",
    cuisine: "American",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 10,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken breast", amount: "1", unit: "large" },
      { name: "romaine lettuce, chopped", amount: "6", unit: "cups" },
      { name: "hard-boiled eggs, quartered", amount: "4", unit: "whole" },
      { name: "thick-cut bacon, cooked and crumbled", amount: "6", unit: "slices" },
      { name: "ripe avocado, diced", amount: "1", unit: "medium" },
      { name: "cherry tomatoes, halved", amount: "1", unit: "cup" },
      { name: "blue cheese, crumbled", amount: "1/2", unit: "cup" },
      { name: "red wine vinegar", amount: "2", unit: "tbsp", group: "For the dressing" },
      { name: "Dijon mustard", amount: "1", unit: "tsp", group: "For the dressing" },
      { name: "olive oil", amount: "1/4", unit: "cup", group: "For the dressing" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Season chicken with salt and pepper. Grill or pan-sear over medium-high heat for 6-7 minutes per side until cooked through. Rest 5 minutes, then dice.",
      },
      {
        step: 2,
        instruction:
          "Whisk together red wine vinegar, Dijon mustard, olive oil, salt, and pepper for the dressing.",
      },
      {
        step: 3,
        instruction:
          "Arrange chopped romaine on a large platter or individual plates. Arrange chicken, eggs, bacon, avocado, tomatoes, and blue cheese in neat rows on top.",
        tip: "The beauty of a Cobb is the composed rows. Take the extra minute to arrange it. Eat with your eyes first.",
      },
      {
        step: 4,
        instruction:
          "Drizzle with dressing just before serving, or serve on the side.",
      },
    ],
    nutrition: { calories: 460, protein: 36, carbs: 10, fat: 32, fiber: 5 },
    tags: ["high-protein", "low-carb", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["caesar-salad", "greek-chicken-salad", "nicoise-salad"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-tortilla-soup",
    name: "Chicken Tortilla Soup",
    emoji: "\u{1F372}",
    description:
      "A smoky, spiced tomato broth with shredded chicken, black beans, corn, and crispy tortilla strips. Topped with avocado, sour cream, and fresh lime.",
    cuisine: "Mexican",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 6,
    ingredients: [
      { name: "boneless skinless chicken breasts", amount: "1.5", unit: "lbs" },
      { name: "chicken broth", amount: "6", unit: "cups" },
      { name: "fire-roasted diced tomatoes", amount: "14", unit: "oz" },
      { name: "black beans, drained and rinsed", amount: "15", unit: "oz" },
      { name: "frozen corn kernels", amount: "1", unit: "cup" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "chipotle pepper in adobo, minced", amount: "1", unit: "pepper" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "chili powder", amount: "1", unit: "tsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "corn tortillas, cut into strips", amount: "4", unit: "whole", group: "For garnish" },
      { name: "ripe avocado, diced", amount: "1", unit: "medium", group: "For garnish" },
      { name: "sour cream", amount: "1/4", unit: "cup", group: "For garnish" },
      { name: "lime wedges", amount: "6", unit: "wedges", group: "For garnish" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat olive oil in a large pot over medium heat. Cook onion for 4 minutes. Add garlic, chipotle, cumin, and chili powder. Cook 1 minute.",
      },
      {
        step: 2,
        instruction:
          "Add chicken broth, diced tomatoes, black beans, corn, and salt. Place the whole chicken breasts in the pot. Bring to a boil, then simmer for 20 minutes until chicken is cooked through.",
      },
      {
        step: 3,
        instruction:
          "Remove chicken, shred with two forks, and return to the pot.",
        tip: "Poaching the chicken directly in the broth adds more flavor than using pre-cooked chicken.",
      },
      {
        step: 4,
        instruction:
          "Bake or fry the tortilla strips until crispy (375F oven for 8 minutes, or fry in oil for 1 minute). Serve soup topped with tortilla strips, diced avocado, sour cream, and a squeeze of lime.",
      },
    ],
    nutrition: { calories: 380, protein: 34, carbs: 36, fat: 12, fiber: 8 },
    tags: ["high-protein", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["minestrone", "lentil-soup", "tom-kha-gai"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "french-onion-soup",
    name: "French Onion Soup",
    emoji: "\u{1F9C5}",
    description:
      "Deeply caramelized onions simmered in a rich beef broth, topped with a crusty crouton and a thick layer of melted Gruyere. The kind of soup that makes you close your eyes.",
    cuisine: "French",
    mealType: "lunch",
    difficulty: "Medium",
    prepTime: 10,
    cookTime: 60,
    totalTime: 70,
    servings: 4,
    ingredients: [
      { name: "yellow onions, thinly sliced", amount: "4", unit: "large" },
      { name: "unsalted butter", amount: "3", unit: "tbsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "beef broth", amount: "6", unit: "cups" },
      { name: "dry white wine", amount: "1/2", unit: "cup" },
      { name: "fresh thyme", amount: "3", unit: "sprigs" },
      { name: "bay leaf", amount: "1", unit: "leaf" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "baguette, sliced 1-inch thick", amount: "4", unit: "slices" },
      { name: "Gruyere cheese, shredded", amount: "2", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Melt butter with olive oil in a large Dutch oven over medium heat. Add all the sliced onions and a pinch of salt. Cook for 40-45 minutes, stirring every 5 minutes, until deeply golden brown and caramelized.",
        tip: "Real caramelized onions take time. Don't try to rush by turning up the heat. The slow, patient cooking is what creates that deep sweetness.",
      },
      {
        step: 2,
        instruction:
          "Pour in the white wine and scrape up any browned bits from the bottom. Cook 2 minutes. Add beef broth, thyme, and bay leaf. Simmer 15 minutes. Season with salt and pepper.",
      },
      {
        step: 3,
        instruction:
          "Toast the baguette slices in the oven at 375F for 5 minutes until crispy.",
      },
      {
        step: 4,
        instruction:
          "Ladle soup into oven-safe bowls. Place a crouton on top and pile with Gruyere. Broil for 3-4 minutes until the cheese is bubbly and golden brown. Serve immediately.",
      },
    ],
    nutrition: { calories: 420, protein: 22, carbs: 32, fat: 22, fiber: 4 },
    tags: ["comfort-food", "vegetarian"],
    youtubeVideoId: null,
    relatedSlugs: ["minestrone", "lentil-soup", "chicken-tortilla-soup"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "banh-mi",
    name: "Banh Mi",
    emoji: "\u{1F956}",
    description:
      "A crispy Vietnamese baguette filled with savory marinated pork, pickled daikon and carrots, fresh cilantro, jalapenos, and a smear of pate. Crunchy, tangy, and explosively flavorful.",
    cuisine: "Vietnamese",
    mealType: "lunch",
    difficulty: "Medium",
    prepTime: 20,
    cookTime: 10,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "pork tenderloin, sliced thin", amount: "1", unit: "lb" },
      { name: "soy sauce", amount: "2", unit: "tbsp", group: "For the marinade" },
      { name: "fish sauce", amount: "1", unit: "tbsp", group: "For the marinade" },
      { name: "brown sugar", amount: "1", unit: "tbsp", group: "For the marinade" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves", group: "For the marinade" },
      { name: "lemongrass, minced", amount: "1", unit: "stalk", group: "For the marinade" },
      { name: "daikon radish, julienned", amount: "1", unit: "cup", group: "For the pickles" },
      { name: "carrots, julienned", amount: "1", unit: "cup", group: "For the pickles" },
      { name: "rice vinegar", amount: "1/2", unit: "cup", group: "For the pickles" },
      { name: "sugar", amount: "2", unit: "tbsp", group: "For the pickles" },
      { name: "French baguettes, split", amount: "4", unit: "6-inch" },
      { name: "mayonnaise", amount: "4", unit: "tbsp" },
      { name: "liver pate (optional)", amount: "2", unit: "tbsp" },
      { name: "fresh cilantro", amount: "1/2", unit: "cup" },
      { name: "jalapeno, thinly sliced", amount: "1", unit: "medium" },
      { name: "cucumber, sliced", amount: "1/2", unit: "medium" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Quick pickle: toss daikon and carrots with rice vinegar, sugar, and a pinch of salt. Let sit at least 20 minutes.",
      },
      {
        step: 2,
        instruction:
          "Marinate pork in soy sauce, fish sauce, brown sugar, garlic, and lemongrass for at least 15 minutes.",
      },
      {
        step: 3,
        instruction:
          "Cook pork in a hot skillet or grill over high heat for 2-3 minutes per side until caramelized and cooked through.",
        tip: "High heat is important for the caramelized edges that make banh mi pork special.",
      },
      {
        step: 4,
        instruction:
          "Toast the baguettes until crispy outside but still soft inside. Spread with mayo (and pate if using). Layer pork, pickled vegetables, cucumber, cilantro, and jalapeno slices.",
      },
    ],
    nutrition: { calories: 460, protein: 32, carbs: 48, fat: 16, fiber: 3 },
    tags: ["dairy-free", "high-protein"],
    youtubeVideoId: null,
    relatedSlugs: ["vietnamese-spring-rolls", "club-sandwich", "chicken-satay"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "greek-wrap",
    name: "Greek Wrap",
    emoji: "\u{1F959}",
    description:
      "A warm pita wrap stuffed with grilled chicken, crispy romaine, cucumber, tomatoes, red onion, kalamata olives, feta, and creamy tzatziki. Mediterranean flavors in a handheld package.",
    cuisine: "Greek",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken breast", amount: "1", unit: "lb" },
      { name: "large pita or flatbreads", amount: "4", unit: "whole" },
      { name: "romaine lettuce, shredded", amount: "2", unit: "cups" },
      { name: "cucumber, diced", amount: "1", unit: "medium" },
      { name: "cherry tomatoes, halved", amount: "1", unit: "cup" },
      { name: "red onion, thinly sliced", amount: "1/4", unit: "small" },
      { name: "kalamata olives, halved", amount: "1/4", unit: "cup" },
      { name: "feta cheese, crumbled", amount: "1/2", unit: "cup" },
      { name: "plain Greek yogurt", amount: "1/2", unit: "cup", group: "For tzatziki" },
      { name: "cucumber, grated and squeezed dry", amount: "1/4", unit: "medium", group: "For tzatziki" },
      { name: "garlic clove, minced", amount: "1", unit: "clove", group: "For tzatziki" },
      { name: "lemon juice", amount: "1", unit: "tbsp", group: "For tzatziki" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "dried oregano", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Season chicken with olive oil, oregano, salt, and pepper. Grill or pan-sear for 6-7 minutes per side until cooked through. Rest 5 minutes, then slice.",
      },
      {
        step: 2,
        instruction:
          "Make tzatziki: mix Greek yogurt, grated cucumber, garlic, lemon juice, and a pinch of salt.",
      },
      {
        step: 3,
        instruction:
          "Warm the pitas in a dry skillet or microwave. Spread tzatziki down the center of each.",
        tip: "Warming the pita makes it pliable and less likely to crack when you wrap it.",
      },
      {
        step: 4,
        instruction:
          "Layer sliced chicken, lettuce, cucumber, tomatoes, red onion, olives, and feta on each pita. Roll up tightly and serve.",
      },
    ],
    nutrition: { calories: 420, protein: 36, carbs: 34, fat: 16, fiber: 3 },
    tags: ["high-protein", "mediterranean", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["greek-chicken-salad", "falafel-bowl", "chicken-shawarma-plate"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "miso-soup-tofu",
    name: "Miso Soup with Tofu",
    emoji: "\u{1F35C}",
    description:
      "A gentle, warming Japanese soup with silken tofu, wakame seaweed, and green onions in a savory dashi-miso broth. Simple, soothing, and ready in 10 minutes.",
    cuisine: "Japanese",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 8,
    totalTime: 13,
    servings: 4,
    ingredients: [
      { name: "dashi stock (or water with dashi granules)", amount: "4", unit: "cups" },
      { name: "white miso paste", amount: "3", unit: "tbsp" },
      { name: "silken tofu, cubed", amount: "7", unit: "oz" },
      { name: "dried wakame seaweed", amount: "1", unit: "tbsp" },
      { name: "green onions, thinly sliced", amount: "2", unit: "stalks" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Soak the dried wakame in cold water for 5 minutes. Drain and set aside.",
      },
      {
        step: 2,
        instruction:
          "Bring dashi stock to a gentle simmer in a saucepan over medium heat. Do not boil.",
      },
      {
        step: 3,
        instruction:
          "Place miso paste in a small bowl. Ladle in about 1/2 cup of the hot dashi and whisk until smooth. Pour the miso mixture back into the pot.",
        tip: "Never boil miso directly. It kills the beneficial probiotics and turns the flavor harsh. Always dissolve it separately and add at the end.",
      },
      {
        step: 4,
        instruction:
          "Gently add the tofu cubes and wakame. Heat through for 1-2 minutes without boiling. Ladle into bowls and garnish with green onions.",
      },
    ],
    nutrition: { calories: 80, protein: 6, carbs: 6, fat: 3, fiber: 1 },
    tags: ["vegan", "quick", "low-carb", "budget", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["tom-yum-soup", "tom-kha-gai", "lentil-soup"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "nicoise-salad",
    name: "Nicoise Salad",
    emoji: "\u{1F957}",
    description:
      "A composed French salad with seared tuna, soft-boiled eggs, green beans, potatoes, olives, and tomatoes in a sharp Dijon vinaigrette. Elegant, satisfying, and endlessly photogenic.",
    cuisine: "French",
    mealType: "lunch",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "sushi-grade ahi tuna steaks", amount: "2", unit: "6-oz steaks" },
      { name: "baby potatoes, halved", amount: "1/2", unit: "lb" },
      { name: "green beans, trimmed", amount: "6", unit: "oz" },
      { name: "large eggs", amount: "4", unit: "whole" },
      { name: "mixed greens", amount: "4", unit: "cups" },
      { name: "cherry tomatoes, halved", amount: "1", unit: "cup" },
      { name: "Nicoise or kalamata olives", amount: "1/3", unit: "cup" },
      { name: "anchovy fillets (optional)", amount: "4", unit: "fillets" },
      { name: "Dijon mustard", amount: "1", unit: "tbsp", group: "For the dressing" },
      { name: "red wine vinegar", amount: "2", unit: "tbsp", group: "For the dressing" },
      { name: "extra virgin olive oil", amount: "1/4", unit: "cup", group: "For the dressing" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Boil potatoes in salted water for 12 minutes until tender. In the last 3 minutes, add green beans. Drain both and cool under cold water.",
      },
      {
        step: 2,
        instruction:
          "Boil eggs for 7 minutes, then transfer to ice water. Peel and halve.",
      },
      {
        step: 3,
        instruction:
          "Season tuna with salt and pepper. Sear in a hot oiled skillet for 1-2 minutes per side for rare. Slice thin.",
        tip: "For Nicoise, the tuna should be rare in the center. If you prefer cooked through, use canned tuna packed in olive oil instead.",
      },
      {
        step: 4,
        instruction:
          "Whisk together Dijon, vinegar, olive oil, salt, and pepper. Arrange greens, potatoes, green beans, eggs, tomatoes, olives, and tuna on a platter. Drizzle with dressing.",
      },
    ],
    nutrition: { calories: 420, protein: 34, carbs: 22, fat: 24, fiber: 4 },
    tags: ["high-protein", "gluten-free", "mediterranean"],
    youtubeVideoId: null,
    relatedSlugs: ["cobb-salad", "caesar-salad", "salmon-poke-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "burrito-bowl",
    name: "Burrito Bowl",
    emoji: "\u{1F35A}",
    description:
      "All the best parts of a burrito, deconstructed in a bowl. Cilantro-lime rice, seasoned chicken, black beans, corn, pico de gallo, guac, and a drizzle of crema.",
    cuisine: "Mexican",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken thighs", amount: "1.5", unit: "lbs" },
      { name: "white rice, cooked", amount: "3", unit: "cups", group: "For the bowl" },
      { name: "lime juice", amount: "2", unit: "tbsp", group: "For the bowl" },
      { name: "fresh cilantro, chopped", amount: "3", unit: "tbsp", group: "For the bowl" },
      { name: "black beans, drained and rinsed", amount: "15", unit: "oz" },
      { name: "frozen corn, thawed", amount: "1", unit: "cup" },
      { name: "Roma tomato, diced", amount: "1", unit: "medium" },
      { name: "ripe avocado", amount: "1", unit: "medium" },
      { name: "chili powder", amount: "1", unit: "tbsp" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "garlic powder", amount: "1/2", unit: "tsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "sour cream", amount: "4", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Season chicken with chili powder, cumin, garlic powder, and salt. Heat olive oil in a skillet over medium-high heat. Cook chicken for 6-7 minutes per side until charred and cooked through. Rest 5 minutes, then slice.",
      },
      {
        step: 2,
        instruction:
          "Stir lime juice and cilantro into the cooked rice.",
        tip: "Add the lime and cilantro while the rice is still warm. It absorbs the flavor better.",
      },
      {
        step: 3,
        instruction:
          "Warm black beans and corn in a small saucepan. Dice the avocado and toss with a squeeze of lime.",
      },
      {
        step: 4,
        instruction:
          "Assemble bowls: cilantro-lime rice, sliced chicken, black beans, corn, diced tomato, avocado, and a dollop of sour cream.",
      },
    ],
    nutrition: { calories: 540, protein: 40, carbs: 56, fat: 18, fiber: 10 },
    tags: ["high-protein", "meal-prep", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-fajitas", "beef-tacos", "chicken-quesadilla"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "egg-salad-sandwich",
    name: "Egg Salad Sandwich",
    emoji: "\u{1F95A}",
    description:
      "Creamy egg salad with a touch of mustard, chives, and celery on soft bread. A timeless lunch that takes 15 minutes from fridge to table.",
    cuisine: "American",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    servings: 2,
    ingredients: [
      { name: "large eggs", amount: "6", unit: "whole" },
      { name: "mayonnaise", amount: "3", unit: "tbsp" },
      { name: "Dijon mustard", amount: "1", unit: "tsp" },
      { name: "celery stalk, finely diced", amount: "1", unit: "stalk" },
      { name: "fresh chives, chopped", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
      { name: "sandwich bread", amount: "4", unit: "slices" },
      { name: "lettuce leaves", amount: "2", unit: "leaves" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Boil eggs for 10 minutes. Transfer to an ice bath for 5 minutes, then peel.",
      },
      {
        step: 2,
        instruction:
          "Roughly chop the eggs and place in a bowl. Add mayo, mustard, celery, chives, salt, and pepper. Stir gently to combine, keeping some chunks for texture.",
        tip: "For creamier egg salad, grate 2 of the eggs on a box grater and chop the remaining 4. The grated eggs create a creamy base.",
      },
      {
        step: 3,
        instruction:
          "Divide egg salad between two sandwiches on bread with lettuce. Serve immediately or wrap and refrigerate for up to 1 day.",
      },
    ],
    nutrition: { calories: 380, protein: 22, carbs: 26, fat: 22, fiber: 2 },
    tags: ["quick", "vegetarian", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["tuna-melt", "club-sandwich", "avocado-toast"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "asian-noodle-salad",
    name: "Asian Noodle Salad",
    emoji: "\u{1F35C}",
    description:
      "Chilled soba noodles tossed with crunchy vegetables, edamame, and a tangy sesame-ginger dressing. A refreshing, make-ahead lunch that gets better as it sits.",
    cuisine: "Asian Fusion",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 8,
    totalTime: 23,
    servings: 4,
    ingredients: [
      { name: "soba noodles", amount: "8", unit: "oz" },
      { name: "shelled edamame", amount: "1", unit: "cup" },
      { name: "red bell pepper, julienned", amount: "1", unit: "medium" },
      { name: "English cucumber, julienned", amount: "1/2", unit: "medium" },
      { name: "carrots, julienned", amount: "2", unit: "medium" },
      { name: "green onions, sliced", amount: "3", unit: "stalks" },
      { name: "soy sauce", amount: "3", unit: "tbsp", group: "For the dressing" },
      { name: "rice vinegar", amount: "2", unit: "tbsp", group: "For the dressing" },
      { name: "sesame oil", amount: "2", unit: "tbsp", group: "For the dressing" },
      { name: "honey", amount: "1", unit: "tbsp", group: "For the dressing" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp", group: "For the dressing" },
      { name: "garlic clove, minced", amount: "1", unit: "clove", group: "For the dressing" },
      { name: "sesame seeds", amount: "1", unit: "tbsp" },
      { name: "fresh cilantro", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cook soba noodles according to package directions. Rinse under cold water until completely cooled. Drain well.",
        tip: "Rinsing soba noodles is essential. It removes starch and stops them from clumping. Toss with a drizzle of sesame oil after draining.",
      },
      {
        step: 2,
        instruction:
          "Whisk together soy sauce, rice vinegar, sesame oil, honey, ginger, and garlic for the dressing.",
      },
      {
        step: 3,
        instruction:
          "Combine cooled noodles, edamame, bell pepper, cucumber, carrots, and green onions in a large bowl.",
      },
      {
        step: 4,
        instruction:
          "Pour the dressing over the noodle mixture and toss to coat. Garnish with sesame seeds and cilantro. Serve chilled or at room temperature.",
      },
    ],
    nutrition: { calories: 360, protein: 16, carbs: 48, fat: 12, fiber: 5 },
    tags: ["vegan", "dairy-free", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["pad-thai", "bibimbap", "vietnamese-spring-rolls"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "minestrone",
    name: "Minestrone",
    emoji: "\u{1F372}",
    description:
      "A hearty Italian vegetable soup packed with beans, pasta, tomatoes, and seasonal vegetables. Every spoonful is different, and it tastes even better the next day.",
    cuisine: "Italian",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 6,
    ingredients: [
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "carrots, diced", amount: "2", unit: "medium" },
      { name: "celery stalks, diced", amount: "2", unit: "stalks" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "zucchini, diced", amount: "1", unit: "medium" },
      { name: "canned diced tomatoes", amount: "14", unit: "oz" },
      { name: "vegetable broth", amount: "6", unit: "cups" },
      { name: "cannellini beans, drained", amount: "15", unit: "oz" },
      { name: "small pasta (ditalini or elbow)", amount: "1/2", unit: "cup" },
      { name: "fresh spinach", amount: "2", unit: "cups" },
      { name: "dried Italian herbs", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "Parmesan rind (optional)", amount: "1", unit: "piece" },
      { name: "Parmesan cheese, grated", amount: "1/4", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat olive oil in a large pot over medium heat. Cook onion, carrots, and celery for 5 minutes until softened. Add garlic and cook 30 seconds.",
      },
      {
        step: 2,
        instruction:
          "Add zucchini, diced tomatoes, vegetable broth, Italian herbs, salt, and Parmesan rind if using. Bring to a boil, then simmer for 15 minutes.",
      },
      {
        step: 3,
        instruction:
          "Add pasta and beans. Cook for 10 minutes until pasta is tender. Stir in spinach and cook 1 minute until wilted.",
        tip: "Cook the pasta directly in the soup so it absorbs the flavors. If making ahead, cook pasta separately to prevent it from getting mushy.",
      },
      {
        step: 4,
        instruction:
          "Remove Parmesan rind. Serve with grated Parmesan on top and crusty bread alongside.",
      },
    ],
    nutrition: { calories: 280, protein: 14, carbs: 42, fat: 8, fiber: 10 },
    tags: ["vegetarian", "budget", "meal-prep", "one-pan"],
    youtubeVideoId: null,
    relatedSlugs: ["lentil-soup", "french-onion-soup", "chicken-tortilla-soup"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "caprese-panini",
    name: "Caprese Panini",
    emoji: "\u{1F96A}",
    description:
      "Fresh mozzarella, ripe tomatoes, and basil pressed between ciabatta with a balsamic glaze. The heat transforms this into something greater than the sum of its parts.",
    cuisine: "Italian",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 6,
    totalTime: 11,
    servings: 2,
    ingredients: [
      { name: "ciabatta rolls, split", amount: "2", unit: "rolls" },
      { name: "fresh mozzarella, sliced", amount: "8", unit: "oz" },
      { name: "ripe tomato, sliced", amount: "1", unit: "large" },
      { name: "fresh basil leaves", amount: "8", unit: "leaves" },
      { name: "balsamic glaze", amount: "2", unit: "tbsp" },
      { name: "extra virgin olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1/4", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Layer fresh mozzarella, tomato slices, and basil leaves on the bottom half of each ciabatta roll. Season with salt and pepper. Drizzle with olive oil.",
      },
      {
        step: 2,
        instruction:
          "Close the sandwiches and brush the outside of the bread lightly with olive oil.",
      },
      {
        step: 3,
        instruction:
          "Press in a panini press or grill pan over medium heat for 3 minutes per side until the bread is golden and crispy and the cheese is melting.",
        tip: "If using a grill pan, press down with a heavy pot or foil-wrapped brick for the panini effect.",
      },
      {
        step: 4,
        instruction:
          "Slice in half and drizzle with balsamic glaze. Serve immediately.",
      },
    ],
    nutrition: { calories: 420, protein: 24, carbs: 32, fat: 22, fiber: 2 },
    tags: ["vegetarian", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["bruschetta", "caprese-salad-burrata", "tuna-melt"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "hummus-buddha-bowl",
    name: "Hummus Buddha Bowl",
    emoji: "\u{1F966}",
    description:
      "A colorful nourishing bowl with a generous mound of hummus, roasted chickpeas, quinoa, pickled onions, roasted sweet potato, and a lemon-tahini drizzle.",
    cuisine: "Mediterranean",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    ingredients: [
      { name: "cooked quinoa", amount: "2", unit: "cups" },
      { name: "hummus", amount: "1", unit: "cup" },
      { name: "canned chickpeas, drained and rinsed", amount: "15", unit: "oz" },
      { name: "sweet potato, cubed", amount: "1", unit: "large" },
      { name: "baby spinach", amount: "2", unit: "cups" },
      { name: "cucumber, diced", amount: "1", unit: "medium" },
      { name: "cherry tomatoes, halved", amount: "1", unit: "cup" },
      { name: "red onion, thinly sliced", amount: "1/4", unit: "small" },
      { name: "tahini", amount: "2", unit: "tbsp", group: "For the dressing" },
      { name: "lemon juice", amount: "2", unit: "tbsp", group: "For the dressing" },
      { name: "water", amount: "1", unit: "tbsp", group: "For the dressing" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "smoked paprika", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Toss sweet potato cubes with 1 tbsp olive oil, salt, and pepper. Spread on one half of a sheet pan. Toss drained chickpeas with remaining olive oil and smoked paprika. Spread on the other half.",
      },
      {
        step: 2,
        instruction:
          "Roast for 25 minutes, shaking the pan halfway through, until sweet potatoes are tender and chickpeas are crispy.",
        tip: "Pat the chickpeas very dry before roasting for maximum crunch.",
      },
      {
        step: 3,
        instruction:
          "Whisk together tahini, lemon juice, and water until smooth and drizzly.",
      },
      {
        step: 4,
        instruction:
          "Assemble bowls: quinoa, spinach, a generous scoop of hummus, roasted sweet potato, crispy chickpeas, cucumber, tomatoes, and pickled red onion. Drizzle with lemon-tahini dressing.",
      },
    ],
    nutrition: { calories: 480, protein: 18, carbs: 60, fat: 20, fiber: 14 },
    tags: ["vegan", "meal-prep", "gluten-free", "mediterranean"],
    youtubeVideoId: null,
    relatedSlugs: ["falafel-bowl", "hummus-with-pita", "greek-chicken-salad"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "tuna-poke-bowl",
    name: "Tuna Poke Bowl",
    emoji: "\u{1F363}",
    description:
      "Hawaiian-style cubed ahi tuna marinated in soy, sesame, and rice vinegar, served over sushi rice with avocado, edamame, cucumber, and a sprinkle of furikake.",
    cuisine: "Hawaiian",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 0,
    totalTime: 15,
    servings: 2,
    ingredients: [
      { name: "sushi-grade ahi tuna, cubed", amount: "12", unit: "oz" },
      { name: "soy sauce", amount: "2", unit: "tbsp", group: "For the marinade" },
      { name: "sesame oil", amount: "1", unit: "tbsp", group: "For the marinade" },
      { name: "rice vinegar", amount: "1", unit: "tsp", group: "For the marinade" },
      { name: "cooked sushi rice", amount: "2", unit: "cups" },
      { name: "ripe avocado, sliced", amount: "1", unit: "medium" },
      { name: "cucumber, sliced", amount: "1/2", unit: "medium" },
      { name: "shelled edamame", amount: "1/2", unit: "cup" },
      { name: "furikake seasoning", amount: "1", unit: "tbsp" },
      { name: "pickled ginger", amount: "2", unit: "tbsp" },
      { name: "green onions, sliced", amount: "2", unit: "stalks" },
      { name: "sriracha mayo", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Gently toss cubed tuna with soy sauce, sesame oil, and rice vinegar. Let marinate for 5-10 minutes in the fridge.",
        tip: "Only use sushi-grade tuna from a reputable fishmonger. The fish is served raw.",
      },
      {
        step: 2,
        instruction:
          "Divide sushi rice between two bowls.",
      },
      {
        step: 3,
        instruction:
          "Arrange the marinated tuna, avocado, cucumber, and edamame over the rice in sections.",
      },
      {
        step: 4,
        instruction:
          "Top with furikake, pickled ginger, green onions, and a drizzle of sriracha mayo.",
      },
    ],
    nutrition: { calories: 480, protein: 40, carbs: 44, fat: 18, fiber: 6 },
    tags: ["high-protein", "dairy-free", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["salmon-poke-bowl", "spicy-tuna-crispy-rice", "nicoise-salad"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-satay",
    name: "Chicken Satay",
    emoji: "\u{1F362}",
    description:
      "Tender marinated chicken skewers grilled to perfection and served with a rich, creamy peanut dipping sauce. A beloved Southeast Asian street food.",
    cuisine: "Thai",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 10,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken thighs, sliced into strips", amount: "1.5", unit: "lbs" },
      { name: "coconut milk", amount: "1/4", unit: "cup", group: "For the marinade" },
      { name: "soy sauce", amount: "2", unit: "tbsp", group: "For the marinade" },
      { name: "ground turmeric", amount: "1", unit: "tsp", group: "For the marinade" },
      { name: "ground cumin", amount: "1/2", unit: "tsp", group: "For the marinade" },
      { name: "brown sugar", amount: "1", unit: "tbsp", group: "For the marinade" },
      { name: "creamy peanut butter", amount: "1/3", unit: "cup", group: "For the peanut sauce" },
      { name: "coconut milk", amount: "1/4", unit: "cup", group: "For the peanut sauce" },
      { name: "soy sauce", amount: "1", unit: "tbsp", group: "For the peanut sauce" },
      { name: "lime juice", amount: "1", unit: "tbsp", group: "For the peanut sauce" },
      { name: "sriracha", amount: "1", unit: "tsp", group: "For the peanut sauce" },
      { name: "garlic clove, minced", amount: "1", unit: "clove", group: "For the peanut sauce" },
      { name: "wooden skewers (soaked)", amount: "12", unit: "skewers" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mix coconut milk, soy sauce, turmeric, cumin, and brown sugar. Toss with chicken strips and marinate at least 15 minutes (up to 4 hours in the fridge).",
      },
      {
        step: 2,
        instruction:
          "Make the peanut sauce: whisk peanut butter, coconut milk, soy sauce, lime juice, sriracha, and garlic until smooth. Add water to thin if needed.",
        tip: "The sauce should be thick but drizzly. Add warm water a tablespoon at a time to reach the right consistency.",
      },
      {
        step: 3,
        instruction:
          "Thread chicken onto soaked wooden skewers. Grill or broil on high for 3-4 minutes per side until slightly charred and cooked through.",
      },
      {
        step: 4,
        instruction:
          "Serve skewers with peanut sauce for dipping, alongside steamed rice or a simple cucumber salad.",
      },
    ],
    nutrition: { calories: 380, protein: 38, carbs: 12, fat: 22, fiber: 2 },
    tags: ["high-protein", "dairy-free", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["pad-thai", "thai-basil-chicken", "banh-mi"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "tom-kha-gai",
    name: "Tom Kha Gai",
    emoji: "\u{1F35C}",
    description:
      "Thai coconut chicken soup with galangal, lemongrass, kaffir lime, and mushrooms in a creamy, tangy coconut broth. The milder, creamier cousin of tom yum.",
    cuisine: "Thai",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken breast, sliced thin", amount: "1", unit: "lb" },
      { name: "coconut milk (full-fat)", amount: "14", unit: "oz" },
      { name: "chicken broth", amount: "2", unit: "cups" },
      { name: "galangal or ginger, sliced", amount: "6", unit: "slices" },
      { name: "lemongrass stalks, bruised and cut", amount: "2", unit: "stalks" },
      { name: "kaffir lime leaves", amount: "4", unit: "leaves" },
      { name: "oyster mushrooms, torn", amount: "4", unit: "oz" },
      { name: "fish sauce", amount: "3", unit: "tbsp" },
      { name: "lime juice", amount: "3", unit: "tbsp" },
      { name: "brown sugar", amount: "1", unit: "tsp" },
      { name: "Thai bird chiles, bruised", amount: "2", unit: "whole" },
      { name: "fresh cilantro", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Bring chicken broth to a simmer in a medium pot. Add galangal, lemongrass, kaffir lime leaves, and chiles. Simmer for 5 minutes to infuse.",
      },
      {
        step: 2,
        instruction:
          "Pour in the coconut milk and bring back to a gentle simmer. Add the sliced chicken and mushrooms. Cook for 8-10 minutes until chicken is cooked through.",
      },
      {
        step: 3,
        instruction:
          "Remove from heat. Stir in fish sauce, lime juice, and sugar.",
        tip: "The balance of salty (fish sauce), sour (lime), and sweet (sugar) is what makes this soup sing. Taste and adjust until all three are in harmony.",
      },
      {
        step: 4,
        instruction:
          "Ladle into bowls, leaving the aromatics behind (lemongrass, galangal, lime leaves are flavoring agents, not meant to be eaten). Garnish with fresh cilantro.",
      },
    ],
    nutrition: { calories: 340, protein: 30, carbs: 10, fat: 22, fiber: 1 },
    tags: ["dairy-free", "gluten-free", "low-carb"],
    youtubeVideoId: null,
    relatedSlugs: ["tom-yum-soup", "thai-red-curry", "chicken-tortilla-soup"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "avocado-chicken-salad",
    name: "Avocado Chicken Salad",
    emoji: "\u{1F951}",
    description:
      "A healthier twist on classic chicken salad. Creamy mashed avocado replaces mayo, mixed with diced chicken, lime, cilantro, and red onion. Light, fresh, and protein-packed.",
    cuisine: "American",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 0,
    totalTime: 15,
    servings: 4,
    ingredients: [
      { name: "cooked chicken breast, shredded or diced", amount: "2", unit: "cups" },
      { name: "ripe avocados", amount: "2", unit: "medium" },
      { name: "lime juice", amount: "2", unit: "tbsp" },
      { name: "red onion, finely diced", amount: "2", unit: "tbsp" },
      { name: "fresh cilantro, chopped", amount: "3", unit: "tbsp" },
      { name: "celery stalk, finely diced", amount: "1", unit: "stalk" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
      { name: "bread or lettuce cups", amount: "4", unit: "servings" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mash the avocados in a large bowl with lime juice and salt until mostly smooth with some chunks remaining.",
      },
      {
        step: 2,
        instruction:
          "Add the chicken, red onion, cilantro, celery, and pepper. Fold gently to combine without turning the avocado into paste.",
        tip: "Use rotisserie chicken for a zero-cook version. Pull the meat while it's still warm for easier shredding.",
      },
      {
        step: 3,
        instruction:
          "Taste and adjust salt and lime. Serve on bread as a sandwich, in lettuce cups for low-carb, or over greens as a salad.",
      },
    ],
    nutrition: { calories: 320, protein: 28, carbs: 12, fat: 20, fiber: 8 },
    tags: ["high-protein", "gluten-free", "quick", "low-carb"],
    youtubeVideoId: null,
    relatedSlugs: ["cobb-salad", "egg-salad-sandwich", "greek-chicken-salad"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "lentil-soup",
    name: "Lentil Soup",
    emoji: "\u{1F372}",
    description:
      "A thick, warming soup with red lentils, carrots, cumin, and a squeeze of lemon. High in protein, incredibly cheap to make, and freezes beautifully.",
    cuisine: "Middle Eastern",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 30,
    totalTime: 40,
    servings: 6,
    ingredients: [
      { name: "red lentils, rinsed", amount: "1.5", unit: "cups" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "carrots, diced", amount: "2", unit: "medium" },
      { name: "celery stalk, diced", amount: "1", unit: "stalk" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "ground turmeric", amount: "1/2", unit: "tsp" },
      { name: "smoked paprika", amount: "1/2", unit: "tsp" },
      { name: "vegetable broth", amount: "6", unit: "cups" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "lemon juice", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh parsley or cilantro", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat olive oil in a large pot over medium heat. Cook onion, carrots, and celery for 5 minutes until softened. Add garlic, cumin, turmeric, and paprika. Cook 1 minute.",
      },
      {
        step: 2,
        instruction:
          "Add rinsed lentils and vegetable broth. Bring to a boil, then reduce to a simmer. Cook for 25 minutes until lentils are completely soft and falling apart.",
        tip: "Red lentils break down naturally into a thick, creamy soup. No need to blend unless you want it extra smooth.",
      },
      {
        step: 3,
        instruction:
          "Season with salt, pepper, and lemon juice. For a smoother consistency, blend half the soup with an immersion blender.",
      },
      {
        step: 4,
        instruction:
          "Serve with a drizzle of olive oil, fresh herbs, and crusty bread.",
      },
    ],
    nutrition: { calories: 260, protein: 16, carbs: 38, fat: 6, fiber: 12 },
    tags: ["vegan", "budget", "meal-prep", "gluten-free", "one-pan"],
    youtubeVideoId: null,
    relatedSlugs: ["minestrone", "chicken-tortilla-soup", "miso-soup-tofu"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
];
