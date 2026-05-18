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
      "Explora planes de comida semanales personalizados para cada dieta y cocina. Plan gratuito de 3 dias incluido.",
    h1: "Planes de Comida Personalizados para Cada Dieta y Cocina",
    subtitle:
      "Planes de comida semanales con recetas y listas de compras, adaptados a tus necesidades alimentarias y sabores favoritos. Prueba gratis.",
    byDiet: "Por Dieta",
    byCuisine: "Por Cocina",
    popularCombos: "Combinaciones Populares",
    ctaTitle: "Tu primera semana es gratis",
    ctaSubtitle:
      "Obtene un plan de comida personalizado de 3 dias con recetas y lista de compras. Sin tarjeta de credito.",
    ctaButton: "Comenza Tu Plan Gratis",
    typeLabels: { diet: "Dieta", cuisine: "Cocina", combo: "Dieta + Cocina" },
  },
  fr: {
    title: "Plans repas pour chaque regime et cuisine",
    metaDescription:
      "Decouvrez des plans repas hebdomadaires personnalises pour chaque regime et cuisine. Plan gratuit de 3 jours inclus.",
    h1: "Plans Repas Personnalises pour Chaque Regime et Cuisine",
    subtitle:
      "Plans repas hebdomadaires avec recettes et listes de courses, adaptes a vos besoins alimentaires et saveurs preferees. Essayez gratuitement.",
    byDiet: "Par Regime",
    byCuisine: "Par Cuisine",
    popularCombos: "Combinaisons Populaires",
    ctaTitle: "Votre premiere semaine est gratuite",
    ctaSubtitle:
      "Recevez un plan repas personnalise de 3 jours avec recettes et liste de courses. Sans carte de credit.",
    ctaButton: "Commencez Votre Plan Gratuit",
    typeLabels: {
      diet: "Regime",
      cuisine: "Cuisine",
      combo: "Regime + Cuisine",
    },
  },
  de: {
    title: "Essensplane fur jede Diat und Kuche",
    metaDescription:
      "Entdecken Sie personalisierte wochentliche Essensplane fur jede Diat und Kuche. Kostenloser 3-Tage-Plan inklusive.",
    h1: "Personalisierte Essensplane fur Jede Diat und Kuche",
    subtitle:
      "Wochentliche Essensplane mit Rezepten und Einkaufslisten, auf Ihre Ernahrungsbedurfnisse und Lieblingsgeschmacker abgestimmt. Kostenlos testen.",
    byDiet: "Nach Diat",
    byCuisine: "Nach Kuche",
    popularCombos: "Beliebte Kombinationen",
    ctaTitle: "Ihre erste Woche ist kostenlos",
    ctaSubtitle:
      "Erhalten Sie einen personalisierten 3-Tage-Essensplan mit Rezepten und Einkaufsliste. Keine Kreditkarte erforderlich.",
    ctaButton: "Starten Sie Ihren Kostenlosen Plan",
    typeLabels: { diet: "Diat", cuisine: "Kuche", combo: "Diat + Kuche" },
  },
  pt: {
    title: "Planos de refeicao para cada dieta e culinaria",
    metaDescription:
      "Explore planos de refeicao semanais personalizados para cada dieta e culinaria. Plano gratuito de 3 dias incluido.",
    h1: "Planos de Refeicao Personalizados para Cada Dieta e Culinaria",
    subtitle:
      "Planos de refeicao semanais com receitas e listas de compras, adaptados as suas necessidades alimentares e sabores favoritos. Experimente gratis.",
    byDiet: "Por Dieta",
    byCuisine: "Por Culinaria",
    popularCombos: "Combinacoes Populares",
    ctaTitle: "Sua primeira semana e gratis",
    ctaSubtitle:
      "Receba um plano de refeicao personalizado de 3 dias com receitas e lista de compras. Sem cartao de credito.",
    ctaButton: "Comece Seu Plano Gratis",
    typeLabels: {
      diet: "Dieta",
      cuisine: "Culinaria",
      combo: "Dieta + Culinaria",
    },
  },
  ja: {
    title: "あらゆる食事法と料理のための食事プラン",
    metaDescription:
      "あらゆる食事法と料理に対応したパーソナライズされた週間食事プランをご覧ください。無料3日間プラン付き。",
    h1: "あらゆる食事法と料理のパーソナライズ食事プラン",
    subtitle:
      "レシピと買い物リスト付きの週間食事プラン。食事のニーズとお気に入りの味に合わせてカスタマイズ。無料でお試しください。",
    byDiet: "食事法別",
    byCuisine: "料理別",
    popularCombos: "人気の組み合わせ",
    ctaTitle: "最初の1週間は無料",
    ctaSubtitle:
      "レシピと買い物リスト付きのパーソナライズされた3日間食事プランを入手。クレジットカード不要。",
    ctaButton: "無料プランを始める",
    typeLabels: {
      diet: "食事法",
      cuisine: "料理",
      combo: "食事法 + 料理",
    },
  },
  ko: {
    title: "모든 식단과 요리를 위한 식사 계획",
    metaDescription:
      "모든 식단과 요리에 맞는 개인 맞춤 주간 식사 계획을 탐색하세요. 무료 3일 계획 포함.",
    h1: "모든 식단과 요리를 위한 맞춤 식사 계획",
    subtitle:
      "레시피와 장보기 목록이 포함된 주간 식사 계획, 식이 요구 사항과 좋아하는 맛에 맞춤. 무료로 사용해 보세요.",
    byDiet: "식단별",
    byCuisine: "요리별",
    popularCombos: "인기 조합",
    ctaTitle: "첫 주는 무료입니다",
    ctaSubtitle:
      "레시피와 장보기 목록이 포함된 개인 맞춤 3일 식사 계획을 받으세요. 신용카드 필요 없음.",
    ctaButton: "무료 플랜 시작하기",
    typeLabels: { diet: "식단", cuisine: "요리", combo: "식단 + 요리" },
  },
  zh: {
    title: "适合每种饮食和烹饪的膳食计划",
    metaDescription:
      "浏览适合每种饮食和烹饪的个性化每周膳食计划。包含免费3天计划。",
    h1: "适合每种饮食和烹饪的个性化膳食计划",
    subtitle:
      "包含食谱和购物清单的每周膳食计划，根据您的饮食需求和喜好口味量身定制。免费试用。",
    byDiet: "按饮食",
    byCuisine: "按烹饪",
    popularCombos: "热门组合",
    ctaTitle: "第一周免费",
    ctaSubtitle:
      "获取包含食谱和购物清单的个性化3天膳食计划。无需信用卡。",
    ctaButton: "开始免费计划",
    typeLabels: { diet: "饮食", cuisine: "烹饪", combo: "饮食 + 烹饪" },
  },
  ar: {
    title: "خطط وجبات لكل نظام غذائي ومطبخ",
    metaDescription:
      "استعرض خطط وجبات أسبوعية مخصصة لكل نظام غذائي ومطبخ. خطة مجانية لمدة 3 أيام مضمنة.",
    h1: "خطط وجبات مخصصة لكل نظام غذائي ومطبخ",
    subtitle:
      "خطط وجبات أسبوعية مع وصفات وقوائم تسوق، مصممة حسب احتياجاتك الغذائية ونكهاتك المفضلة. جرب مجاناً.",
    byDiet: "حسب النظام الغذائي",
    byCuisine: "حسب المطبخ",
    popularCombos: "تركيبات شائعة",
    ctaTitle: "أسبوعك الأول مجاني",
    ctaSubtitle:
      "احصل على خطة وجبات مخصصة لمدة 3 أيام مع وصفات وقائمة تسوق. لا حاجة لبطاقة ائتمان.",
    ctaButton: "ابدأ خطتك المجانية",
    typeLabels: {
      diet: "نظام غذائي",
      cuisine: "مطبخ",
      combo: "نظام غذائي + مطبخ",
    },
  },
  tr: {
    title: "Her diyet ve mutfak icin yemek planlari",
    metaDescription:
      "Her diyet ve mutfak icin kisisellestirilmis haftalik yemek planlarini kesfedin. Ucretsiz 3 gunluk plan dahil.",
    h1: "Her Diyet ve Mutfak Icin Kisisellestirilmis Yemek Planlari",
    subtitle:
      "Tarifler ve alisveris listeleriyle haftalik yemek planlari, beslenme ihtiyaclariniza ve favori tatlariniza gore uyarlanmis. Ucretsiz deneyin.",
    byDiet: "Diyete Gore",
    byCuisine: "Mutfaga Gore",
    popularCombos: "Populer Kombinasyonlar",
    ctaTitle: "Ilk haftaniz ucretsiz",
    ctaSubtitle:
      "Tarifler ve alisveris listesi ile kisisellestirilmis 3 gunluk yemek plani alin. Kredi karti gerekmez.",
    ctaButton: "Ucretsiz Planinizi Baslatin",
    typeLabels: {
      diet: "Diyet",
      cuisine: "Mutfak",
      combo: "Diyet + Mutfak",
    },
  },
  hi: {
    title: "हर आहार और व्यंजन के लिए भोजन योजनाएं",
    metaDescription:
      "हर आहार और व्यंजन के लिए व्यक्तिगत साप्ताहिक भोजन योजनाएं खोजें। मुफ्त 3-दिन की योजना शामिल।",
    h1: "हर आहार और व्यंजन के लिए व्यक्तिगत भोजन योजनाएं",
    subtitle:
      "व्यंजनों और किराने की सूची के साथ साप्ताहिक भोजन योजनाएं, आपकी आहार संबंधी जरूरतों और पसंदीदा स्वाद के अनुसार तैयार। मुफ्त में आजमाएं।",
    byDiet: "आहार के अनुसार",
    byCuisine: "व्यंजन के अनुसार",
    popularCombos: "लोकप्रिय संयोजन",
    ctaTitle: "आपका पहला सप्ताह मुफ्त है",
    ctaSubtitle:
      "व्यंजनों और किराने की सूची के साथ व्यक्तिगत 3-दिन की भोजन योजना प्राप्त करें। क्रेडिट कार्ड की आवश्यकता नहीं।",
    ctaButton: "अपनी मुफ्त योजना शुरू करें",
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
