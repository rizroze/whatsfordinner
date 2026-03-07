export interface SampleMeal {
  name: string;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  description: string;
  prepTime: string;
  tags: string[];
}

export interface ValueProp {
  heading: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface MealPlanPageData {
  slug: string;
  type: "diet" | "cuisine" | "combo";
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  valueProps: ValueProp[];
  sampleMeals: SampleMeal[];
  faqs: FAQ[];
  relatedSlugs: string[];
  datePublished: string;
  dateModified: string;
}
