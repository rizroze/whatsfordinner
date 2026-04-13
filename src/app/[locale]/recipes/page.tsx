import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllRecipes } from "@/data/recipes";
import {
  NON_DEFAULT_LOCALES,
  isValidLocale,
  getLocaleConfig,
  getRecipesPath,
} from "@/lib/i18n/locales";
import {
  getTranslatedRecipe,
  getRecipeSlugForLocale,
} from "@/data/recipes/translations";

export const revalidate = 86400;

interface PageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

// Hub page UI strings per locale
const hubStrings: Record<
  string,
  {
    title: string;
    metaDescription: string;
    h1: string;
    subtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    prepTimeLabel: string;
    servingsLabel: string;
  }
> = {
  es: {
    title: "Biblioteca de Recetas Gratis | What's For Dinner",
    metaDescription:
      "Explora cientos de recetas para desayuno, almuerzo, cena y merienda con ingredientes y pasos detallados.",
    h1: "Biblioteca de Recetas Gratis",
    subtitle:
      "Explora recetas con ingredientes completos e instrucciones paso a paso. Encuentra tu proxima comida favorita.",
    ctaTitle: "Tu primera semana es gratis",
    ctaSubtitle:
      "Obtene un plan de comida personalizado con recetas y lista de compras. Sin tarjeta de credito.",
    ctaButton: "Comenza Tu Plan Gratis",
    prepTimeLabel: "min",
    servingsLabel: "porciones",
  },
  fr: {
    title: "Bibliotheque de Recettes Gratuite | What's For Dinner",
    metaDescription:
      "Parcourez des centaines de recettes pour le petit-dejeuner, le dejeuner, le diner et les collations avec ingredients et etapes detaillees.",
    h1: "Bibliotheque de Recettes Gratuite",
    subtitle:
      "Parcourez les recettes avec ingredients complets et instructions etape par etape. Trouvez votre prochain repas prefere.",
    ctaTitle: "Votre premiere semaine est gratuite",
    ctaSubtitle:
      "Recevez un plan repas personnalise avec recettes et liste de courses. Sans carte de credit.",
    ctaButton: "Commencez Votre Plan Gratuit",
    prepTimeLabel: "min",
    servingsLabel: "portions",
  },
  de: {
    title: "Kostenlose Rezeptbibliothek | What's For Dinner",
    metaDescription:
      "Durchsuchen Sie Hunderte von Rezepten fur Fruhstuck, Mittagessen, Abendessen und Snacks mit Zutaten und detaillierten Schritten.",
    h1: "Kostenlose Rezeptbibliothek",
    subtitle:
      "Durchsuchen Sie Rezepte mit vollstandigen Zutaten und Schritt-fur-Schritt-Anleitungen. Finden Sie Ihr nachstes Lieblingsessen.",
    ctaTitle: "Ihre erste Woche ist kostenlos",
    ctaSubtitle:
      "Erhalten Sie einen personalisierten Essensplan mit Rezepten und Einkaufsliste. Keine Kreditkarte erforderlich.",
    ctaButton: "Starten Sie Ihren Kostenlosen Plan",
    prepTimeLabel: "Min",
    servingsLabel: "Portionen",
  },
  pt: {
    title: "Biblioteca de Receitas Gratis | What's For Dinner",
    metaDescription:
      "Explore centenas de receitas para cafe da manha, almoco, jantar e lanches com ingredientes e passos detalhados.",
    h1: "Biblioteca de Receitas Gratis",
    subtitle:
      "Explore receitas com ingredientes completos e instrucoes passo a passo. Encontre sua proxima refeicao favorita.",
    ctaTitle: "Sua primeira semana e gratis",
    ctaSubtitle:
      "Receba um plano de refeicao personalizado com receitas e lista de compras. Sem cartao de credito.",
    ctaButton: "Comece Seu Plano Gratis",
    prepTimeLabel: "min",
    servingsLabel: "porcoes",
  },
  ja: {
    title: "無料レシピライブラリ | What's For Dinner",
    metaDescription:
      "朝食、昼食、夕食、おやつの数百のレシピを材料と詳細な手順で閲覧。",
    h1: "無料レシピライブラリ",
    subtitle:
      "完全な材料リストとステップバイステップの手順でレシピを閲覧。次のお気に入りの食事を見つけましょう。",
    ctaTitle: "最初の1週間は無料",
    ctaSubtitle:
      "レシピと買い物リスト付きのパーソナライズされた食事プランを入手。クレジットカード不要。",
    ctaButton: "無料プランを始める",
    prepTimeLabel: "分",
    servingsLabel: "人前",
  },
  ko: {
    title: "무료 레시피 라이브러리 | What's For Dinner",
    metaDescription:
      "아침, 점심, 저녁, 간식을 위한 수백 가지 레시피를 재료와 상세한 단계별 설명과 함께 둘러보세요.",
    h1: "무료 레시피 라이브러리",
    subtitle:
      "완전한 재료 목록과 단계별 설명이 포함된 레시피를 둘러보세요. 다음 좋아하는 식사를 찾아보세요.",
    ctaTitle: "첫 주는 무료입니다",
    ctaSubtitle:
      "레시피와 장보기 목록이 포함된 개인 맞춤 식사 계획을 받으세요. 신용카드 필요 없음.",
    ctaButton: "무료 플랜 시작하기",
    prepTimeLabel: "분",
    servingsLabel: "인분",
  },
  zh: {
    title: "免费食谱库 | What's For Dinner",
    metaDescription:
      "浏览数百种早餐、午餐、晚餐和小吃食谱，包含食材和详细步骤。",
    h1: "免费食谱库",
    subtitle:
      "浏览包含完整食材清单和分步说明的食谱。找到你下一个最爱的美食。",
    ctaTitle: "第一周免费",
    ctaSubtitle:
      "获取包含食谱和购物清单的个性化膳食计划。无需信用卡。",
    ctaButton: "开始免费计划",
    prepTimeLabel: "分钟",
    servingsLabel: "份",
  },
  ar: {
    title: "مكتبة الوصفات المجانية | What's For Dinner",
    metaDescription:
      "تصفح مئات الوصفات للفطور والغداء والعشاء والوجبات الخفيفة مع المكونات والخطوات التفصيلية.",
    h1: "مكتبة الوصفات المجانية",
    subtitle:
      "تصفح الوصفات مع قائمة المكونات الكاملة والتعليمات خطوة بخطوة. اعثر على وجبتك المفضلة القادمة.",
    ctaTitle: "أسبوعك الأول مجاني",
    ctaSubtitle:
      "احصل على خطة وجبات مخصصة مع وصفات وقائمة تسوق. لا حاجة لبطاقة ائتمان.",
    ctaButton: "ابدأ خطتك المجانية",
    prepTimeLabel: "دقيقة",
    servingsLabel: "حصص",
  },
  tr: {
    title: "Ucretsiz Tarif Kutuphanesi | What's For Dinner",
    metaDescription:
      "Kahvalti, ogle yemegi, aksam yemegi ve atistirmalik icin yuzlerce tarifi malzemeler ve detayli adimlarla kesfedin.",
    h1: "Ucretsiz Tarif Kutuphanesi",
    subtitle:
      "Tam malzeme listesi ve adim adim talimatlarla tarifleri kesfedin. Bir sonraki favori yemeginizi bulun.",
    ctaTitle: "Ilk haftaniz ucretsiz",
    ctaSubtitle:
      "Tarifler ve alisveris listesi ile kisisellestirilmis yemek plani alin. Kredi karti gerekmez.",
    ctaButton: "Ucretsiz Planinizi Baslatin",
    prepTimeLabel: "dk",
    servingsLabel: "porsiyon",
  },
  hi: {
    title: "मुफ्त रेसिपी लाइब्रेरी | What's For Dinner",
    metaDescription:
      "नाश्ते, दोपहर के भोजन, रात के खाने और स्नैक्स के लिए सैकड़ों रेसिपी सामग्री और विस्तृत चरणों के साथ ब्राउज़ करें।",
    h1: "मुफ्त रेसिपी लाइब्रेरी",
    subtitle:
      "पूर्ण सामग्री सूची और चरण-दर-चरण निर्देशों के साथ रेसिपी ब्राउज़ करें। अपना अगला पसंदीदा भोजन खोजें।",
    ctaTitle: "आपका पहला सप्ताह मुफ्त है",
    ctaSubtitle:
      "व्यंजनों और किराने की सूची के साथ व्यक्तिगत भोजन योजना प्राप्त करें। क्रेडिट कार्ड की आवश्यकता नहीं।",
    ctaButton: "अपनी मुफ्त योजना शुरू करें",
    prepTimeLabel: "मिनट",
    servingsLabel: "सर्विंग्स",
  },
};

const mealTypeColors: Record<string, string> = {
  breakfast: "bg-orange-50 text-orange-600",
  lunch: "bg-blue-50 text-blue-600",
  dinner: "bg-purple-50 text-purple-600",
  snack: "bg-lime-50 text-lime-600",
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};

  const strings = hubStrings[locale];
  if (!strings) return {};

  const recipesPath = getRecipesPath(locale);
  const url = `https://whatsfordinner.fit/${locale}/${recipesPath}`;

  // Build hreflang alternates
  const languages: Record<string, string> = {
    en: "https://whatsfordinner.fit/recipes",
    "x-default": "https://whatsfordinner.fit/recipes",
  };
  for (const loc of NON_DEFAULT_LOCALES) {
    const config = getLocaleConfig(loc);
    const locRecipesPath = getRecipesPath(loc);
    languages[config.hreflang] =
      `https://whatsfordinner.fit/${loc}/${locRecipesPath}`;
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

export default async function LocaleRecipesIndex({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale) || locale === "en") notFound();

  const strings = hubStrings[locale];
  if (!strings) notFound();

  const allRecipes = getAllRecipes();
  const recipesPath = getRecipesPath(locale);

  return (
    <div className="py-10 sm:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-3">
        {strings.h1}
      </h1>
      <p className="text-base sm:text-lg text-stone-500 mb-12 max-w-xl">
        {strings.subtitle}
      </p>

      {/* Recipe grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        {allRecipes.map((baseRecipe) => {
          const recipe = getTranslatedRecipe(baseRecipe.slug, locale) ?? baseRecipe;
          const localSlug = getRecipeSlugForLocale(baseRecipe.slug, locale);
          return (
            <Link
              key={baseRecipe.slug}
              href={`/${locale}/${recipesPath}/${localSlug}`}
              className="rounded-xl border border-stone-100 bg-white p-5 hover:border-orange-200 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl" role="img" aria-hidden>
                  {recipe.emoji}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-stone-800 group-hover:text-orange-600 transition-colors truncate">
                    {recipe.name}
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {recipe.cuisine}
                  </p>
                </div>
              </div>
              <p className="text-xs text-stone-500 line-clamp-2 mb-3">
                {recipe.description}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${mealTypeColors[recipe.mealType] ?? "bg-stone-50 text-stone-500"}`}
                >
                  {recipe.mealType}
                </span>
                <span className="text-[10px] text-stone-400">
                  {recipe.prepTime} {strings.prepTimeLabel}
                </span>
                <span className="text-[10px] text-stone-400">
                  {recipe.servings} {strings.servingsLabel}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

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
