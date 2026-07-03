/**
 * Translate the meal-plan pages that are missing per-locale content.
 *
 * Background: there are 173 English meal-plan pages but only 86 are translated
 * per locale. The other ~87 fall back to English (`getTranslatedMealPlan` ->
 * `return base`), producing thin/duplicate pages that serve English copy on a
 * localized URL with a self-canonical. This script generates real translations
 * for the missing slugs so every localized meal-plan page is genuine content.
 *
 * Run:
 *   npx tsx scripts/translate-meal-plans.ts --limit 3            # smoke test
 *   npx tsx scripts/translate-meal-plans.ts --locale es          # one locale
 *   npx tsx scripts/translate-meal-plans.ts                      # everything
 *   npx tsx scripts/translate-meal-plans.ts --model claude-sonnet-4-6
 *
 * Idempotent: slugs already present in a locale's JSON are skipped, so a crashed
 * run resumes where it left off. Results are flushed to disk incrementally.
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import Anthropic from "@anthropic-ai/sdk";
import { getAllMealPlanPages } from "../src/data/meal-plans/index";
import type { MealPlanPageData } from "../src/data/meal-plans/types";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const TRANSLATIONS_DIR = join(process.cwd(), "src/data/meal-plans/translations");
const CONCURRENCY = 8;
const FLUSH_EVERY = 10;

// Project uses Haiku 4.5 for all meal-plan content generation; default to match.
// Override with --model (e.g. claude-sonnet-4-6 for higher multilingual fidelity).
const DEFAULT_MODEL = "claude-haiku-4-5-20251001";

// English target descriptions per locale so the model gets an unambiguous target.
const LANGUAGES: Record<string, string> = {
  es: "Spanish (Español)",
  fr: "French (Français)",
  de: "German (Deutsch)",
  pt: "Portuguese (Português, Brazil)",
  ja: "Japanese (日本語)",
  ko: "Korean (한국어)",
  zh: "Simplified Chinese (简体中文)",
  ar: "Arabic (العربية)",
  tr: "Turkish (Türkçe)",
  hi: "Hindi (हिन्दी)",
};
const LOCALES = Object.keys(LANGUAGES);

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
function flag(name: string): string | undefined {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
}
const onlyLocale = flag("locale");
const limit = flag("limit") ? parseInt(flag("limit")!, 10) : Infinity;
const model = flag("model") ?? DEFAULT_MODEL;
const dryRun = args.includes("--dry");

// ---------------------------------------------------------------------------
// API key (read from .env.local)
// ---------------------------------------------------------------------------

function loadApiKey(): string {
  if (process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY;
  const envPath = join(process.cwd(), ".env.local");
  if (existsSync(envPath)) {
    const m = readFileSync(envPath, "utf8").match(/^ANTHROPIC_API_KEY=(.+)$/m);
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  }
  throw new Error("ANTHROPIC_API_KEY not found in env or .env.local");
}

const client = new Anthropic({ apiKey: loadApiKey() });

// ---------------------------------------------------------------------------
// Translatable subset + JSON schema (matches TranslatedMealPlanData)
// ---------------------------------------------------------------------------

type Translatable = Pick<
  MealPlanPageData,
  "title" | "metaDescription" | "h1" | "intro" | "valueProps" | "faqs"
> & {
  sampleMeals: { name: string; description: string; tags: string[] }[];
};

function pickTranslatable(p: MealPlanPageData): Translatable {
  return {
    title: p.title,
    metaDescription: p.metaDescription,
    h1: p.h1,
    intro: p.intro,
    valueProps: p.valueProps,
    sampleMeals: p.sampleMeals.map((m) => ({
      name: m.name,
      description: m.description,
      tags: m.tags,
    })),
    faqs: p.faqs,
  };
}

const SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["title", "metaDescription", "h1", "intro", "valueProps", "sampleMeals", "faqs"],
  properties: {
    title: { type: "string" },
    metaDescription: { type: "string" },
    h1: { type: "string" },
    intro: { type: "string" },
    valueProps: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["heading", "description"],
        properties: { heading: { type: "string" }, description: { type: "string" } },
      },
    },
    sampleMeals: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["name", "description", "tags"],
        properties: {
          name: { type: "string" },
          description: { type: "string" },
          tags: { type: "array", items: { type: "string" } },
        },
      },
    },
    faqs: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["question", "answer"],
        properties: { question: { type: "string" }, answer: { type: "string" } },
      },
    },
  },
} as const;

// ---------------------------------------------------------------------------
// Translate one page
// ---------------------------------------------------------------------------

async function translatePage(page: MealPlanPageData, locale: string): Promise<Translatable> {
  const lang = LANGUAGES[locale];
  const source = pickTranslatable(page);

  const system =
    `You are an expert translator localizing SEO content for a meal-planning web app into ${lang}. ` +
    `Translate naturally and idiomatically for native speakers — never word-for-word. ` +
    `Preserve meaning, tone, and search intent; keep it concise and compelling. ` +
    `Rules: keep the SAME number of valueProps, sampleMeals, and faqs in the SAME order; ` +
    `translate every tag; translate meal names to their natural local equivalent (transliterate only when no equivalent exists); ` +
    `keep dietary/nutrition terms accurate; do not add, drop, or reorder items; do not include any brand name. ` +
    `Return only the translated content matching the schema.`;

  const res = await client.messages.create({
    model,
    max_tokens: 4096,
    system,
    output_config: { format: { type: "json_schema", schema: SCHEMA, name: "translated_meal_plan" } },
    messages: [
      {
        role: "user",
        content: `Translate this meal-plan page content into ${lang}:\n\n${JSON.stringify(source, null, 2)}`,
      },
    ],
  } as Anthropic.MessageCreateParamsNonStreaming);

  const textBlock = res.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error(`No text block in response (stop_reason=${res.stop_reason})`);
  }
  return JSON.parse(textBlock.text) as Translatable;
}

async function withRetry<T>(fn: () => Promise<T>, label: string, tries = 4): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i < tries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      const wait = 1500 * (i + 1);
      console.warn(`  retry ${i + 1}/${tries} for ${label} after error: ${(err as Error).message}`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw lastErr;
}

// ---------------------------------------------------------------------------
// Per-locale processing
// ---------------------------------------------------------------------------

function localePath(locale: string): string {
  return join(TRANSLATIONS_DIR, `${locale}.json`);
}

function loadLocale(locale: string): Record<string, Translatable> {
  const p = localePath(locale);
  return existsSync(p) ? (JSON.parse(readFileSync(p, "utf8")) as Record<string, Translatable>) : {};
}

function saveLocale(locale: string, data: Record<string, Translatable>) {
  writeFileSync(localePath(locale), JSON.stringify(data, null, 2) + "\n", "utf8");
}

async function processLocale(locale: string, pages: MealPlanPageData[], budget: { left: number }) {
  const existing = loadLocale(locale);
  const missing = pages.filter((p) => !(p.slug in existing));
  const todo = missing.slice(0, Math.max(0, Math.min(missing.length, budget.left)));

  console.log(`\n[${locale}] ${LANGUAGES[locale]} — ${missing.length} missing, translating ${todo.length}`);
  if (dryRun || todo.length === 0) {
    if (dryRun) todo.forEach((p) => console.log(`  would translate: ${p.slug}`));
    return;
  }

  let done = 0;
  let sinceFlush = 0;
  let cursor = 0;

  async function worker() {
    while (cursor < todo.length) {
      const page = todo[cursor++];
      try {
        const translated = await withRetry(() => translatePage(page, locale), `${locale}/${page.slug}`);
        existing[page.slug] = translated;
        done++;
        sinceFlush++;
        if (sinceFlush >= FLUSH_EVERY) {
          saveLocale(locale, existing);
          sinceFlush = 0;
        }
        console.log(`  ✓ ${locale}/${page.slug} (${done}/${todo.length})`);
      } catch (err) {
        console.error(`  ✗ ${locale}/${page.slug}: ${(err as Error).message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, todo.length) }, worker));
  saveLocale(locale, existing);
  budget.left -= done;
  console.log(`[${locale}] done — ${done} translated, ${budget.left} of budget left`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const pages = getAllMealPlanPages();
  const locales = onlyLocale ? [onlyLocale] : LOCALES;
  console.log(`Model: ${model} | locales: ${locales.join(", ")} | limit: ${limit}${dryRun ? " | DRY RUN" : ""}`);
  console.log(`English meal-plan pages: ${pages.length}`);

  const budget = { left: limit };
  for (const locale of locales) {
    if (budget.left <= 0) break;
    await processLocale(locale, pages, budget);
  }
  console.log("\nAll done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
