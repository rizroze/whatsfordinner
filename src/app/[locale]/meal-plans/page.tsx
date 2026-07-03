import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllMealPlanPages } from "@/data/meal-plans";
import {
  NON_DEFAULT_LOCALES,
  isValidLocale,
  getLocaleConfig,
} from "@/lib/i18n/locales";
import {
  getTranslatedMealPlan,
  getSlugForLocale,
} from "@/data/meal-plans/translations";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

// Hub page UI strings per locale (minimal — just enough for the hub)
const hubStrings: Record<
  string,
  {
    title: string;
    metaDescription: string;
    h1: string;
    subtitle: string;
    byDiet: string;
    byCuisine: string;
    popularCombos: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    typeLabels: Record<string, string>;
  }
> = {
  es: {
    title: "Planes de comida para cada dieta y cocina",
    metaDescription:
      "Explora planes de comida semanales personalizados para cada dieta y cocina. Vista previa gratis incluida.",
    h1: "Planes de Comida Personalizados para Cada Dieta y Cocina",
    subtitle:
      "Planes de comida semanales con recetas y listas de compras, adaptados a tus necesidades alimentarias y sabores favoritos. Vista previa gratis.",
    byDiet: "Por Dieta",
    byCuisine: "Por Cocina",
    popularCombos: "Combinaciones Populares",
    ctaTitle: "Empieza con una vista previa gratis",
    ctaSubtitle:
      "Mira una vista previa personalizada de tu plan de comidas con recetas y lista de compras. Sin tarjeta de credito.",
    ctaButton: "Ver Vista Previa Gratis",
    typeLabels: { diet: "Dieta", cuisine: "Cocina", combo: "Dieta + Cocina" },
  },
  fr: {
    title: "Plans repas pour chaque regime et cuisine",
    metaDescription:
      "Decouvrez des plans repas hebdomadaires personnalises pour chaque regime et cuisine. Apercu gratuit inclus.",
    h1: "Plans Repas Personnalises pour Chaque Regime et Cuisine",
    subtitle:
      "Plans repas hebdomadaires avec recettes et listes de courses, adaptes a vos besoins alimentaires et saveurs preferees. Apercu gratuit.",
    byDiet: "Par Regime",
    byCuisine: "Par Cuisine",
    popularCombos: "Combinaisons Populaires",
    ctaTitle: "Commencez avec un apercu gratuit",
    ctaSubtitle:
      "Decouvrez un apercu personnalise de votre plan repas avec recettes et liste de courses. Sans carte de credit.",
    ctaButton: "Voir l'Apercu Gratuit",
    typeLabels: {
      diet: "Regime",
      cuisine: "Cuisine",
      combo: "Regime + Cuisine",
    },
  },
  de: {
    title: "Essensplane fur jede Diat und Kuche",
    metaDescription:
      "Entdecken Sie personalisierte wochentliche Essensplane fur jede Diat und Kuche. Kostenlose Vorschau inklusive.",
    h1: "Personalisierte Essensplane fur Jede Diat und Kuche",
    subtitle:
      "Wochentliche Essensplane mit Rezepten und Einkaufslisten, auf Ihre Ernahrungsbedurfnisse und Lieblingsgeschmacker abgestimmt. Kostenlose Vorschau ansehen.",
    byDiet: "Nach Diat",
    byCuisine: "Nach Kuche",
    popularCombos: "Beliebte Kombinationen",
    ctaTitle: "Starten Sie mit einer kostenlosen Vorschau",
    ctaSubtitle:
      "Sehen Sie eine personalisierte Vorschau Ihres Essensplans mit Rezepten und Einkaufsliste. Keine Kreditkarte erforderlich.",
    ctaButton: "Kostenlose Vorschau Ansehen",
    typeLabels: { diet: "Diat", cuisine: "Kuche", combo: "Diat + Kuche" },
  },
  pt: {
    title: "Planos de refeicao para cada dieta e culinaria",
    metaDescription:
      "Explore planos de refeicao semanais personalizados para cada dieta e culinaria. Previa gratis incluida.",
    h1: "Planos de Refeicao Personalizados para Cada Dieta e Culinaria",
    subtitle:
      "Planos de refeicao semanais com receitas e listas de compras, adaptados as suas necessidades alimentares e sabores favoritos. Veja uma previa gratis.",
    byDiet: "Por Dieta",
    byCuisine: "Por Culinaria",
    popularCombos: "Combinacoes Populares",
    ctaTitle: "Comece com uma previa gratis",
    ctaSubtitle:
      "Veja uma previa personalizada do seu plano de refeicoes com receitas e lista de compras. Sem cartao de credito.",
    ctaButton: "Ver Previa Gratis",
    typeLabels: {
      diet: "Dieta",
      cuisine: "Culinaria",
      combo: "Dieta + Culinaria",
    },
  },
  ja: {
    title: "あらゆる食事法と料理のための食事プラン",
    metaDescription:
      "あらゆる食事法と料理に対応したパーソナライズされた週間食事プランをご覧ください。無料プレビュー付き。",
    h1: "あらゆる食事法と料理のパーソナライズ食事プラン",
    subtitle:
      "レシピと買い物リスト付きの週間食事プラン。食事のニーズとお気に入りの味に合わせてカスタマイズ。無料プレビューをご覧ください。",
    byDiet: "食事法別",
    byCuisine: "料理別",
    popularCombos: "人気の組み合わせ",
    ctaTitle: "まずは無料プレビュー",
    ctaSubtitle:
      "レシピと買い物リスト付きのパーソナライズされた食事プランのプレビューを無料で確認。クレジットカード不要。",
    ctaButton: "無料プレビューを見る",
    typeLabels: {
      diet: "食事法",
      cuisine: "料理",
      combo: "食事法 + 料理",
    },
  },
  ko: {
    title: "모든 식단과 요리를 위한 식사 계획",
    metaDescription:
      "모든 식단과 요리에 맞는 개인 맞춤 주간 식사 계획을 탐색하세요. 무료 미리보기 포함.",
    h1: "모든 식단과 요리를 위한 맞춤 식사 계획",
    subtitle:
      "레시피와 장보기 목록이 포함된 주간 식사 계획, 식이 요구 사항과 좋아하는 맛에 맞춤. 무료 미리보기를 확인하세요.",
    byDiet: "식단별",
    byCuisine: "요리별",
    popularCombos: "인기 조합",
    ctaTitle: "무료 미리보기로 시작하세요",
    ctaSubtitle:
      "레시피와 장보기 목록이 포함된 맞춤형 식단 미리보기를 확인하세요. 신용카드 필요 없음.",
    ctaButton: "무료 미리보기 보기",
    typeLabels: { diet: "식단", cuisine: "요리", combo: "식단 + 요리" },
  },
  zh: {
    title: "适合每种饮食和烹饪的膳食计划",
    metaDescription:
      "浏览适合每种饮食和烹饪的个性化每周膳食计划。包含免费预览。",
    h1: "适合每种饮食和烹饪的个性化膳食计划",
    subtitle:
      "包含食谱和购物清单的每周膳食计划，根据您的饮食需求和喜好口味量身定制。免费预览。",
    byDiet: "按饮食",
    byCuisine: "按烹饪",
    popularCombos: "热门组合",
    ctaTitle: "从免费预览开始",
    ctaSubtitle:
      "免费预览包含食谱和购物清单的个性化膳食计划。无需信用卡。",
    ctaButton: "查看免费预览",
    typeLabels: { diet: "饮食", cuisine: "烹饪", combo: "饮食 + 烹饪" },
  },
  ar: {
    title: "خطط وجبات لكل نظام غذائي ومطبخ",
    metaDescription:
      "استعرض خطط وجبات أسبوعية مخصصة لكل نظام غذائي ومطبخ. معاينة مجانية مضمنة.",
    h1: "خطط وجبات مخصصة لكل نظام غذائي ومطبخ",
    subtitle:
      "خطط وجبات أسبوعية مع وصفات وقوائم تسوق، مصممة حسب احتياجاتك الغذائية ونكهاتك المفضلة. شاهد معاينة مجانية.",
    byDiet: "حسب النظام الغذائي",
    byCuisine: "حسب المطبخ",
    popularCombos: "تركيبات شائعة",
    ctaTitle: "ابدأ بمعاينة مجانية",
    ctaSubtitle:
      "شاهد معاينة مخصصة لخطة وجباتك مع وصفات وقائمة تسوق. لا حاجة لبطاقة ائتمان.",
    ctaButton: "شاهد المعاينة المجانية",
    typeLabels: {
      diet: "نظام غذائي",
      cuisine: "مطبخ",
      combo: "نظام غذائي + مطبخ",
    },
  },
  tr: {
    title: "Her diyet ve mutfak icin yemek planlari",
    metaDescription:
      "Her diyet ve mutfak icin kisisellestirilmis haftalik yemek planlarini kesfedin. Ucretsiz onizleme dahil.",
    h1: "Her Diyet ve Mutfak Icin Kisisellestirilmis Yemek Planlari",
    subtitle:
      "Tarifler ve alisveris listeleriyle haftalik yemek planlari, beslenme ihtiyaclariniza ve favori tatlariniza gore uyarlanmis. Ucretsiz onizlemeyi gorun.",
    byDiet: "Diyete Gore",
    byCuisine: "Mutfaga Gore",
    popularCombos: "Populer Kombinasyonlar",
    ctaTitle: "Ucretsiz onizleme ile baslayin",
    ctaSubtitle:
      "Tarifler ve alisveris listesi ile kisisellestirilmis yemek planinizin onizlemesini gorun. Kredi karti gerekmez.",
    ctaButton: "Ucretsiz Onizlemeyi Gorun",
    typeLabels: {
      diet: "Diyet",
      cuisine: "Mutfak",
      combo: "Diyet + Mutfak",
    },
  },
  hi: {
    title: "हर आहार और व्यंजन के लिए भोजन योजनाएं",
    metaDescription:
      "हर आहार और व्यंजन के लिए व्यक्तिगत साप्ताहिक भोजन योजनाएं खोजें। मुफ्त पूर्वावलोकन शामिल।",
    h1: "हर आहार और व्यंजन के लिए व्यक्तिगत भोजन योजनाएं",
    subtitle:
      "व्यंजनों और किराने की सूची के साथ साप्ताहिक भोजन योजनाएं, आपकी आहार संबंधी जरूरतों और पसंदीदा स्वाद के अनुसार तैयार। मुफ्त पूर्वावलोकन देखें।",
    byDiet: "आहार के अनुसार",
    byCuisine: "व्यंजन के अनुसार",
    popularCombos: "लोकप्रिय संयोजन",
    ctaTitle: "मुफ्त पूर्वावलोकन से शुरू करें",
    ctaSubtitle:
      "व्यंजनों और किराने की सूची के साथ अपनी व्यक्तिगत भोजन योजना का पूर्वावलोकन देखें। क्रेडिट कार्ड की आवश्यकता नहीं।",
    ctaButton: "मुफ्त पूर्वावलोकन देखें",
    typeLabels: { diet: "आहार", cuisine: "व्यंजन", combo: "आहार + व्यंजन" },
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};

  const strings = hubStrings[locale];
  if (!strings) return {};

  const url = `https://whatsfordinner.fit/${locale}/meal-plans`;

  // Build hreflang alternates
  const languages: Record<string, string> = {
    en: "https://whatsfordinner.fit/meal-plans",
    "x-default": "https://whatsfordinner.fit/meal-plans",
  };
  for (const loc of NON_DEFAULT_LOCALES) {
    const config = getLocaleConfig(loc);
    languages[config.hreflang] =
      `https://whatsfordinner.fit/${loc}/meal-plans`;
  }

  return {
    title: strings.title,
    description: strings.metaDescription,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: strings.title,
      description: strings.metaDescription,
      url,
      siteName: "What's For Dinner",
      type: "website",
      locale: getLocaleConfig(locale).hreflang,
    },
  };
}

export default async function LocaleMealPlansIndex({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale) || locale === "en") notFound();

  const strings = hubStrings[locale];
  if (!strings) notFound();

  const all = getAllMealPlanPages();
  const diets = all.filter((p) => p.type === "diet");
  const cuisines = all.filter((p) => p.type === "cuisine");
  const combos = all.filter((p) => p.type === "combo");

  return (
    <div className="py-10 sm:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-3">
        {strings.h1}
      </h1>
      <p className="text-base sm:text-lg text-stone-500 mb-12 max-w-xl">
        {strings.subtitle}
      </p>

      {/* Diets */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-stone-800 mb-5">
          {strings.byDiet}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {diets.map((page) => {
            const translated = getTranslatedMealPlan(page.slug, locale);
            const localSlug = getSlugForLocale(page.slug, locale);
            return (
              <Link
                key={page.slug}
                href={`/${locale}/meal-plans/${localSlug}`}
                className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all"
              >
                <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
                  {strings.typeLabels[page.type]}
                </span>
                <h3 className="text-sm font-medium text-stone-800 mt-1">
                  {translated?.h1 ?? page.h1}
                </h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Cuisines */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-stone-800 mb-5">
          {strings.byCuisine}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {cuisines.map((page) => {
            const translated = getTranslatedMealPlan(page.slug, locale);
            const localSlug = getSlugForLocale(page.slug, locale);
            return (
              <Link
                key={page.slug}
                href={`/${locale}/meal-plans/${localSlug}`}
                className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all"
              >
                <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
                  {strings.typeLabels[page.type]}
                </span>
                <h3 className="text-sm font-medium text-stone-800 mt-1">
                  {translated?.h1 ?? page.h1}
                </h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Combos */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-stone-800 mb-5">
          {strings.popularCombos}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {combos.map((page) => {
            const translated = getTranslatedMealPlan(page.slug, locale);
            const localSlug = getSlugForLocale(page.slug, locale);
            return (
              <Link
                key={page.slug}
                href={`/${locale}/meal-plans/${localSlug}`}
                className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all"
              >
                <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
                  {strings.typeLabels[page.type]}
                </span>
                <h3 className="text-sm font-medium text-stone-800 mt-1">
                  {translated?.h1 ?? page.h1}
                </h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-orange-500 p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {strings.ctaTitle}
        </h2>
        <p className="text-orange-100 text-sm sm:text-base mb-6 max-w-md mx-auto">
          {strings.ctaSubtitle}
        </p>
        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-orange-600 bg-white hover:bg-orange-50 rounded-full shadow-md transition-colors"
        >
          {strings.ctaButton}
        </Link>
      </section>
    </div>
  );
}
