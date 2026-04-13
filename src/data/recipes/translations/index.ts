import { getRecipeBySlug } from "../index";
import type { FullRecipe, RecipeIngredient, RecipeStep } from "../types";
import { readFileSync } from "fs";
import { join } from "path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** The translatable subset of FullRecipe. Fields like slug, emoji, cuisine,
 *  mealType, difficulty, nutrition, times, servings, youtubeVideoId,
 *  relatedSlugs, and dates are NOT translated — they come from the English
 *  base data (slugs get their own mapping). */
export interface TranslatedRecipeData {
  name: string;
  description: string;
  ingredients: { name: string; amount: string; unit: string; group?: string }[];
  steps: { step: number; instruction: string; tip?: string }[];
}

/** Shape of the per-locale content JSON: keyed by English slug. */
type LocaleContentMap = Record<string, TranslatedRecipeData>;

/** Shape of the per-locale slug mapping JSON. */
type SlugMap = Record<string, string>; // englishSlug -> localizedSlug

// ---------------------------------------------------------------------------
// File paths
// ---------------------------------------------------------------------------

const TRANSLATIONS_DIR = join(
  process.cwd(),
  "src/data/recipes/translations"
);

function contentPath(locale: string): string {
  return join(TRANSLATIONS_DIR, `${locale}.json`);
}

function slugMapPath(locale: string): string {
  return join(TRANSLATIONS_DIR, "slugs", `${locale}.json`);
}

// ---------------------------------------------------------------------------
// Loaders (with graceful fallback)
// ---------------------------------------------------------------------------

/** Cache to avoid re-reading the same JSON files within a single process. */
const contentCache = new Map<string, LocaleContentMap | null>();
const slugMapCache = new Map<string, SlugMap | null>();

function loadContent(locale: string): LocaleContentMap | null {
  if (contentCache.has(locale)) return contentCache.get(locale)!;
  try {
    const raw = readFileSync(contentPath(locale), "utf-8");
    const parsed = JSON.parse(raw) as LocaleContentMap;
    contentCache.set(locale, parsed);
    return parsed;
  } catch {
    contentCache.set(locale, null);
    return null;
  }
}

function loadSlugMap(locale: string): SlugMap | null {
  if (slugMapCache.has(locale)) return slugMapCache.get(locale)!;
  try {
    const raw = readFileSync(slugMapPath(locale), "utf-8");
    const parsed = JSON.parse(raw) as SlugMap;
    slugMapCache.set(locale, parsed);
    return parsed;
  } catch {
    slugMapCache.set(locale, null);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Merge helper
// ---------------------------------------------------------------------------

/** Merges translated fields onto the English base, preserving non-translatable
 *  fields (slug, emoji, cuisine, mealType, difficulty, nutrition, times,
 *  servings, tags, youtubeVideoId, relatedSlugs, dates) from the base. */
function mergeTranslation(
  base: FullRecipe,
  translation: TranslatedRecipeData
): FullRecipe {
  return {
    ...base,
    name: translation.name,
    description: translation.description,
    ingredients: translation.ingredients.map((ing, i) => {
      const baseIng = base.ingredients[i];
      return {
        name: ing.name,
        amount: ing.amount,
        unit: ing.unit,
        ...(ing.group ? { group: ing.group } : baseIng?.group ? { group: baseIng.group } : {}),
      } satisfies RecipeIngredient;
    }),
    steps: translation.steps.map((s) => {
      return {
        step: s.step,
        instruction: s.instruction,
        ...(s.tip ? { tip: s.tip } : {}),
      } satisfies RecipeStep;
    }),
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Returns a FullRecipe with translated content for the given locale.
 * Falls back to English if:
 * - the locale JSON doesn't exist
 * - the slug isn't in the locale JSON
 * - the English slug doesn't exist in the base data
 *
 * Returns undefined only if the English slug itself is invalid.
 */
export function getTranslatedRecipe(
  englishSlug: string,
  locale: string
): FullRecipe | undefined {
  const base = getRecipeBySlug(englishSlug);
  if (!base) return undefined;

  // English needs no translation
  if (locale === "en") return base;

  const content = loadContent(locale);
  if (!content) return base;

  const translation = content[englishSlug];
  if (!translation) return base;

  return mergeTranslation(base, translation);
}

/**
 * Returns the localized slug for a given English slug.
 * Falls back to the English slug if no mapping exists.
 */
export function getRecipeSlugForLocale(
  englishSlug: string,
  locale: string
): string {
  if (locale === "en") return englishSlug;

  const map = loadSlugMap(locale);
  if (!map) return englishSlug;

  return map[englishSlug] ?? englishSlug;
}

/**
 * Reverse lookup: given a localized slug, returns the English slug.
 * Falls back to returning the input slug if no mapping is found
 * (which handles the case where the slug wasn't translated).
 */
export function getEnglishRecipeSlug(
  localizedSlug: string,
  locale: string
): string {
  if (locale === "en") return localizedSlug;

  const map = loadSlugMap(locale);
  if (!map) return localizedSlug;

  // Reverse the map: localizedSlug -> englishSlug
  const entry = Object.entries(map).find(
    ([, translated]) => translated === localizedSlug
  );

  return entry ? entry[0] : localizedSlug;
}

/**
 * Returns all translated slugs available for a locale.
 * Falls back to an empty array if the slug mapping file doesn't exist.
 */
export function getAllTranslatedRecipeSlugs(locale: string): string[] {
  const map = loadSlugMap(locale);
  if (!map) return [];

  return Object.values(map);
}
