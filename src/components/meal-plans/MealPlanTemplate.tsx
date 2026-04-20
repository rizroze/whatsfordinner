import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/ArticleJsonLd";
import { getMealPlanBySlug } from "@/data/meal-plans";
import { getSlugForLocale, getTranslatedMealPlan } from "@/data/meal-plans/translations";
import type { MealPlanPageData } from "@/data/meal-plans/types";

const mealTypeStyles: Record<string, string> = {
  breakfast: "bg-orange-50 text-orange-600",
  lunch: "bg-blue-50 text-blue-600",
  dinner: "bg-purple-50 text-purple-600",
  snack: "bg-lime-50 text-lime-600",
};

const typeLabels: Record<string, string> = {
  diet: "Diet",
  cuisine: "Cuisine",
  combo: "Diet + Cuisine",
};

type BlogLink = { slug: string; title: string };

const blogPosts: Record<string, BlogLink> = {
  "meal-planning-for-beginners": { slug: "meal-planning-for-beginners", title: "Meal Planning for Beginners: The Complete Guide" },
  "how-to-meal-prep": { slug: "how-to-meal-prep", title: "How to Meal Prep for the Week in Under 2 Hours" },
  "easy-meal-prep-for-beginners": { slug: "easy-meal-prep-for-beginners", title: "Easy Meal Prep for Beginners (Just 1 Hour/Week)" },
  "eating-healthy-on-a-budget": { slug: "eating-healthy-on-a-budget", title: "Eating Healthy on a Budget: The $50/Week Plan" },
  "cheap-meals-for-one": { slug: "cheap-meals-for-one", title: "Cheap Meals for One: 15 Dinners Under $3/Serving" },
  "best-budget-meal-plans": { slug: "best-budget-meal-plans", title: "5 Best Budget Meal Plans in 2026" },
  "meal-planning-for-families": { slug: "meal-planning-for-families", title: "Meal Planning for Families: Feed a Family of 4 for Under $100/Week" },
  "meal-planning-for-two": { slug: "meal-planning-for-two", title: "Meal Planning for Two: No More Waste" },
  "weekly-meal-plan": { slug: "weekly-meal-plan", title: "How to Plan Your Entire Week in 10 Minutes" },
  "best-meal-planning-apps": { slug: "best-meal-planning-apps", title: "10 Best Meal Planning Apps in 2026" },
  "ai-meal-planner": { slug: "ai-meal-planner", title: "AI Meal Planner: How It Works and Why It's Better" },
  "meal-plan-with-grocery-list": { slug: "meal-plan-with-grocery-list", title: "Meal Plan with Grocery List: The Complete Solution" },
  "save-money-groceries-meal-planning": { slug: "save-money-groceries-meal-planning", title: "How to Save Money on Groceries with Meal Planning" },
  "cooking-for-one-without-wasting-food": { slug: "cooking-for-one-without-wasting-food", title: "Cooking for One Without Wasting Half Your Groceries" },
  "meal-planning-in-your-20s": { slug: "meal-planning-in-your-20s", title: "Meal Planning in Your 20s: Stop Spending $300/Month on DoorDash" },
  "how-to-stop-ordering-takeout": { slug: "how-to-stop-ordering-takeout", title: "How to Stop Ordering Takeout Every Night" },
  "adhd-meal-planning": { slug: "adhd-meal-planning", title: "ADHD Meal Planning: A System That Actually Works" },
  "meal-planning-for-college": { slug: "meal-planning-for-college", title: "Meal Planning for College Students" },
  "food-budget-in-your-20s": { slug: "food-budget-in-your-20s", title: "How to Set a Food Budget in Your 20s" },
  "meal-kits-vs-meal-planning": { slug: "meal-kits-vs-meal-planning", title: "Meal Kits vs. Meal Planning Apps: Which Saves More?" },
  "first-grocery-shopping-list": { slug: "first-grocery-shopping-list", title: "Your First Real Grocery List (New Apartment Starter Kit)" },
  "eating-well-when-youre-struggling": { slug: "eating-well-when-youre-struggling", title: "How to Eat Well When You're Going Through It" },
  "i-hate-cooking": { slug: "i-hate-cooking", title: "I Hate Cooking (But I Still Need to Eat)" },
  "best-grocery-list-apps": { slug: "best-grocery-list-apps", title: "5 Best Grocery List Apps in 2026" },
  "meal-planning-after-moving-out": { slug: "meal-planning-after-moving-out", title: "Meal Planning After Moving Out: The Adulting Guide" },
};

/** Maps meal plan type + slug keywords to relevant blog post keys. Returns 2-3 posts. */
function getRelevantBlogPosts(data: MealPlanPageData): BlogLink[] {
  const slug = data.slug.toLowerCase();
  const type = data.type;
  const picks: string[] = [];

  // Budget-related pages
  if (slug.includes("budget") || slug.includes("cheap") || slug.includes("dollar") || type === "budget") {
    picks.push("eating-healthy-on-a-budget", "best-budget-meal-plans", "save-money-groceries-meal-planning");
  }

  // Family / household pages
  if (slug.includes("family") || slug.includes("families") || type === "household") {
    picks.push("meal-planning-for-families", "weekly-meal-plan", "meal-plan-with-grocery-list");
  }

  // Couples / two people
  if (slug.includes("couple") || slug.includes("for-two") || slug.includes("roommate")) {
    picks.push("meal-planning-for-two", "cooking-for-one-without-wasting-food", "weekly-meal-plan");
  }

  // Beginner / first-time / simple
  if (slug.includes("beginner") || slug.includes("first") || slug.includes("no-cooking") || slug.includes("easy")) {
    picks.push("meal-planning-for-beginners", "easy-meal-prep-for-beginners", "first-grocery-shopping-list");
  }

  // Gen Z / young adult / college / student
  if (type === "genz" || slug.includes("college") || slug.includes("student") || slug.includes("dorm") || slug.includes("apartment") || slug.includes("20s")) {
    picks.push("meal-planning-in-your-20s", "cheap-meals-for-one", "meal-planning-for-college");
  }

  // Takeout / ordering
  if (slug.includes("takeout") || slug.includes("doordash") || slug.includes("ordering")) {
    picks.push("how-to-stop-ordering-takeout", "meal-planning-in-your-20s", "save-money-groceries-meal-planning");
  }

  // Meal prep / practical / methods
  if (type === "method" || type === "practical" || slug.includes("prep") || slug.includes("slow-cooker") || slug.includes("air-fryer") || slug.includes("one-pot")) {
    picks.push("how-to-meal-prep", "easy-meal-prep-for-beginners", "weekly-meal-plan");
  }

  // Calorie-specific
  if (type === "calorie") {
    picks.push("ai-meal-planner", "weekly-meal-plan", "meal-plan-with-grocery-list");
  }

  // Duration pages
  if (type === "duration") {
    picks.push("weekly-meal-plan", "meal-planning-for-beginners", "how-to-meal-prep");
  }

  // Health / medical
  if (type === "health" || slug.includes("diabetes") || slug.includes("heart") || slug.includes("cholesterol") || slug.includes("inflammatory")) {
    picks.push("ai-meal-planner", "meal-plan-with-grocery-list", "best-meal-planning-apps");
  }

  // Diet pages (keto, vegan, etc.)
  if (type === "diet" || type === "combo") {
    picks.push("ai-meal-planner", "weekly-meal-plan", "best-meal-planning-apps");
  }

  // Cuisine pages
  if (type === "cuisine") {
    picks.push("weekly-meal-plan", "meal-plan-with-grocery-list", "ai-meal-planner");
  }

  // ADHD / depression / mental health
  if (slug.includes("adhd") || slug.includes("depression") || slug.includes("struggling")) {
    picks.push("adhd-meal-planning", "eating-well-when-youre-struggling", "i-hate-cooking");
  }

  // Seasonal / occasion
  if (type === "seasonal" || type === "occasion") {
    picks.push("weekly-meal-plan", "how-to-meal-prep", "best-meal-planning-apps");
  }

  // Goal pages (weight loss, muscle, etc.)
  if (type === "goal") {
    picks.push("ai-meal-planner", "meal-planning-for-beginners", "weekly-meal-plan");
  }

  // Lifestyle
  if (type === "lifestyle" || slug.includes("remote") || slug.includes("night-shift")) {
    picks.push("how-to-meal-prep", "weekly-meal-plan", "meal-planning-in-your-20s");
  }

  // Deduplicate and limit to 3
  const unique = [...new Set(picks)];
  return unique.slice(0, 3).map((key) => blogPosts[key]).filter(Boolean);
}

type TemplateUI = {
  home: string;
  mealPlans: string;
  howItWorks: string;
  steps: { title: string; desc: string }[];
  whyChoose: string;
  sampleMeals: string;
  faq: string;
  related: string;
  guides: string;
  ctaTitle: string;
  ctaSub: string;
  ctaBtn: string;
};

const defaultUI: TemplateUI = {
  home: "Home",
  mealPlans: "Meal Plans",
  howItWorks: "How It Works",
  steps: [
    { title: "Set your preferences", desc: "Tell us your diet, household size, budget, and allergies." },
    { title: "Get your plan", desc: "Receive a personalized meal plan with recipes and grocery list." },
    { title: "Cook & enjoy", desc: "Follow simple recipes. No stress, no waste." },
  ],
  whyChoose: "Why Choose This Plan",
  sampleMeals: "Sample Meals",
  faq: "Frequently Asked Questions",
  related: "Related Meal Plans",
  guides: "Helpful Guides",
  ctaTitle: "Your first week is free",
  ctaSub: "Get a personalized 3-day meal plan with recipes and a grocery list. No credit card required.",
  ctaBtn: "Start Your Free Plan",
};

const uiStrings: Record<string, TemplateUI> = {
  en: defaultUI,
  es: {
    home: "Inicio", mealPlans: "Planes de Comida", howItWorks: "Cómo Funciona",
    steps: [
      { title: "Establece tus preferencias", desc: "Dinos tu dieta, tamaño del hogar, presupuesto y alergias." },
      { title: "Recibe tu plan", desc: "Obtén un plan de comida personalizado con recetas y lista de compras." },
      { title: "Cocina y disfruta", desc: "Sigue recetas simples. Sin estrés, sin desperdicio." },
    ],
    whyChoose: "Por Qué Elegir Este Plan", sampleMeals: "Comidas de Ejemplo", faq: "Preguntas Frecuentes",
    related: "Planes de Comida Relacionados",
    guides: "Guías Útiles",
    ctaTitle: "Tu primera semana es gratis", ctaSub: "Obtén un plan de comida personalizado de 3 días con recetas y lista de compras. Sin tarjeta de crédito.", ctaBtn: "Comienza Tu Plan Gratis",
  },
  fr: {
    home: "Accueil", mealPlans: "Plans Repas", howItWorks: "Comment Ça Marche",
    steps: [
      { title: "Définissez vos préférences", desc: "Indiquez votre régime, taille du foyer, budget et allergies." },
      { title: "Recevez votre plan", desc: "Obtenez un plan repas personnalisé avec recettes et liste de courses." },
      { title: "Cuisinez et savourez", desc: "Suivez des recettes simples. Sans stress, sans gaspillage." },
    ],
    whyChoose: "Pourquoi Choisir Ce Plan", sampleMeals: "Exemples de Repas", faq: "Questions Fréquentes",
    related: "Plans Repas Associés",
    guides: "Guides Utiles",
    ctaTitle: "Votre première semaine est gratuite", ctaSub: "Recevez un plan repas personnalisé de 3 jours avec recettes et liste de courses. Sans carte de crédit.", ctaBtn: "Commencez Votre Plan Gratuit",
  },
  de: {
    home: "Startseite", mealPlans: "Essenspläne", howItWorks: "So Funktioniert's",
    steps: [
      { title: "Präferenzen festlegen", desc: "Geben Sie Ihre Diät, Haushaltsgröße, Budget und Allergien an." },
      { title: "Plan erhalten", desc: "Erhalten Sie einen personalisierten Essensplan mit Rezepten und Einkaufsliste." },
      { title: "Kochen & genießen", desc: "Folgen Sie einfachen Rezepten. Kein Stress, keine Verschwendung." },
    ],
    whyChoose: "Warum Diesen Plan Wählen", sampleMeals: "Beispielgerichte", faq: "Häufig Gestellte Fragen",
    related: "Verwandte Essenspläne",
    guides: "Hilfreiche Ratgeber",
    ctaTitle: "Ihre erste Woche ist kostenlos", ctaSub: "Erhalten Sie einen personalisierten 3-Tage-Essensplan mit Rezepten und Einkaufsliste. Keine Kreditkarte erforderlich.", ctaBtn: "Starten Sie Ihren Kostenlosen Plan",
  },
  pt: {
    home: "Início", mealPlans: "Planos de Refeição", howItWorks: "Como Funciona",
    steps: [
      { title: "Defina suas preferências", desc: "Diga-nos sua dieta, tamanho da família, orçamento e alergias." },
      { title: "Receba seu plano", desc: "Receba um plano de refeição personalizado com receitas e lista de compras." },
      { title: "Cozinhe e aproveite", desc: "Siga receitas simples. Sem estresse, sem desperdício." },
    ],
    whyChoose: "Por Que Escolher Este Plano", sampleMeals: "Refeições Exemplo", faq: "Perguntas Frequentes",
    related: "Planos de Refeição Relacionados",
    guides: "Guias Úteis",
    ctaTitle: "Sua primeira semana é grátis", ctaSub: "Receba um plano de refeição personalizado de 3 dias com receitas e lista de compras. Sem cartão de crédito.", ctaBtn: "Comece Seu Plano Grátis",
  },
  ja: {
    home: "ホーム", mealPlans: "食事プラン", howItWorks: "使い方",
    steps: [
      { title: "好みを設定", desc: "食事法、世帯人数、予算、アレルギーをお知らせください。" },
      { title: "プランを受け取る", desc: "レシピと買い物リスト付きのパーソナライズ食事プランを受け取ります。" },
      { title: "料理を楽しむ", desc: "シンプルなレシピに従うだけ。ストレスなし、無駄なし。" },
    ],
    whyChoose: "このプランを選ぶ理由", sampleMeals: "サンプルメニュー", faq: "よくある質問",
    related: "関連する食事プラン",
    guides: "お役立ちガイド",
    ctaTitle: "最初の1週間は無料", ctaSub: "レシピと買い物リスト付きのパーソナライズされた3日間食事プランを入手。クレジットカード不要。", ctaBtn: "無料プランを始める",
  },
  ko: {
    home: "홈", mealPlans: "식사 계획", howItWorks: "이용 방법",
    steps: [
      { title: "선호도 설정", desc: "식단, 가구 규모, 예산, 알레르기를 알려주세요." },
      { title: "플랜 받기", desc: "레시피와 장보기 목록이 포함된 맞춤 식사 계획을 받으세요." },
      { title: "요리하고 즐기기", desc: "간단한 레시피를 따르세요. 스트레스 없이, 낭비 없이." },
    ],
    whyChoose: "이 플랜을 선택하는 이유", sampleMeals: "샘플 식사", faq: "자주 묻는 질문",
    related: "관련 식사 계획",
    guides: "유용한 가이드",
    ctaTitle: "첫 주는 무료입니다", ctaSub: "레시피와 장보기 목록이 포함된 개인 맞춤 3일 식사 계획을 받으세요. 신용카드 필요 없음.", ctaBtn: "무료 플랜 시작하기",
  },
  zh: {
    home: "首页", mealPlans: "膳食计划", howItWorks: "如何使用",
    steps: [
      { title: "设置偏好", desc: "告诉我们您的饮食习惯、家庭人数、预算和过敏情况。" },
      { title: "获取计划", desc: "获取包含食谱和购物清单的个性化膳食计划。" },
      { title: "烹饪享用", desc: "按照简单食谱操作。无压力，无浪费。" },
    ],
    whyChoose: "为什么选择此计划", sampleMeals: "示例餐点", faq: "常见问题",
    related: "相关膳食计划",
    guides: "实用指南",
    ctaTitle: "第一周免费", ctaSub: "获取包含食谱和购物清单的个性化3天膳食计划。无需信用卡。", ctaBtn: "开始免费计划",
  },
  ar: {
    home: "الرئيسية", mealPlans: "خطط الوجبات", howItWorks: "كيف يعمل",
    steps: [
      { title: "حدد تفضيلاتك", desc: "أخبرنا عن نظامك الغذائي وحجم أسرتك وميزانيتك وحساسياتك." },
      { title: "احصل على خطتك", desc: "احصل على خطة وجبات مخصصة مع وصفات وقائمة تسوق." },
      { title: "اطبخ واستمتع", desc: "اتبع وصفات بسيطة. بدون توتر، بدون هدر." },
    ],
    whyChoose: "لماذا تختار هذه الخطة", sampleMeals: "وجبات نموذجية", faq: "الأسئلة الشائعة",
    related: "خطط وجبات ذات صلة",
    guides: "أدلة مفيدة",
    ctaTitle: "أسبوعك الأول مجاني", ctaSub: "احصل على خطة وجبات مخصصة لمدة 3 أيام مع وصفات وقائمة تسوق. لا حاجة لبطاقة ائتمان.", ctaBtn: "ابدأ خطتك المجانية",
  },
  tr: {
    home: "Ana Sayfa", mealPlans: "Yemek Planları", howItWorks: "Nasıl Çalışır",
    steps: [
      { title: "Tercihlerinizi belirleyin", desc: "Diyetinizi, hane büyüklüğünüzü, bütçenizi ve alerjilerinizi bize bildirin." },
      { title: "Planınızı alın", desc: "Tarifler ve alışveriş listesi ile kişiselleştirilmiş bir yemek planı alın." },
      { title: "Pişirin ve tadını çıkarın", desc: "Basit tarifleri takip edin. Stres yok, israf yok." },
    ],
    whyChoose: "Bu Planı Neden Seçmelisiniz", sampleMeals: "Örnek Yemekler", faq: "Sık Sorulan Sorular",
    related: "İlgili Yemek Planları",
    guides: "Faydalı Rehberler",
    ctaTitle: "İlk haftanız ücretsiz", ctaSub: "Tarifler ve alışveriş listesi ile kişiselleştirilmiş 3 günlük yemek planı alın. Kredi kartı gerekmez.", ctaBtn: "Ücretsiz Planınızı Başlatın",
  },
  hi: {
    home: "होम", mealPlans: "भोजन योजनाएं", howItWorks: "कैसे काम करता है",
    steps: [
      { title: "अपनी प्राथमिकताएं सेट करें", desc: "अपना आहार, परिवार का आकार, बजट और एलर्जी बताएं।" },
      { title: "अपनी योजना प्राप्त करें", desc: "व्यंजनों और किराने की सूची के साथ व्यक्तिगत भोजन योजना प्राप्त करें।" },
      { title: "पकाएं और आनंद लें", desc: "सरल व्यंजनों का पालन करें। कोई तनाव नहीं, कोई बर्बादी नहीं।" },
    ],
    whyChoose: "यह योजना क्यों चुनें", sampleMeals: "नमूना भोजन", faq: "अक्सर पूछे जाने वाले प्रश्न",
    related: "संबंधित भोजन योजनाएं",
    guides: "उपयोगी गाइड",
    ctaTitle: "आपका पहला सप्ताह मुफ्त है", ctaSub: "व्यंजनों और किराने की सूची के साथ व्यक्तिगत 3-दिन की भोजन योजना प्राप्त करें। क्रेडिट कार्ड की आवश्यकता नहीं।", ctaBtn: "अपनी मुफ्त योजना शुरू करें",
  },
};

function getUI(locale?: string): TemplateUI {
  if (!locale) return defaultUI;
  return uiStrings[locale] ?? defaultUI;
}

function FAQSchema({ faqs }: { faqs: MealPlanPageData["faqs"] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function SampleMealsItemList({
  meals,
  pageTitle,
  pageUrl,
}: {
  meals: MealPlanPageData["sampleMeals"];
  pageTitle: string;
  pageUrl: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Sample meals from ${pageTitle}`,
    url: pageUrl,
    numberOfItems: meals.length,
    itemListElement: meals.map((meal, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: meal.name,
      description: meal.description,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MealPlanTemplate({ data, locale }: { data: MealPlanPageData; locale?: string }) {
  const prefix = locale && locale !== "en" ? `/${locale}` : "";
  const ui = getUI(locale);
  const pageUrl = `https://whatsfordinner.fit${prefix}/meal-plans/${data.slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: ui.home, url: `https://whatsfordinner.fit${prefix || ""}` },
          { name: ui.mealPlans, url: `https://whatsfordinner.fit${prefix}/meal-plans` },
          { name: data.h1, url: pageUrl },
        ]}
      />
      <FAQSchema faqs={data.faqs} />
      <SampleMealsItemList meals={data.sampleMeals} pageTitle={data.h1} pageUrl={pageUrl} />

      <article className="py-10 sm:py-16">
        {/* Breadcrumb nav */}
        <nav className="flex items-center gap-1.5 text-xs text-stone-400 mb-6">
          <Link href={prefix || "/"} className="hover:text-orange-500 transition-colors">{ui.home}</Link>
          <span>/</span>
          <Link href={`${prefix}/meal-plans`} className="hover:text-orange-500 transition-colors">{ui.mealPlans}</Link>
          <span>/</span>
          <span className="text-stone-600">{data.h1}</span>
        </nav>

        {/* Category badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-50 rounded-full mb-4">
          {typeLabels[data.type]}
        </span>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
          {data.h1}
        </h1>

        {/* Intro */}
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-10">
          {data.intro}
        </p>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-6">{ui.howItWorks}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ui.steps.map((s, i) => (
              <div key={i} className="rounded-xl border border-stone-100 bg-white p-5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold mb-3">
                  {i + 1}
                </span>
                <h3 className="text-sm font-semibold text-stone-800 mb-1">{s.title}</h3>
                <p className="text-xs text-stone-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Value Props */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-6">{ui.whyChoose}</h2>
          <div className="space-y-4">
            {data.valueProps.map((vp) => (
              <div key={vp.heading} className="rounded-xl border border-stone-100 bg-white p-5">
                <h3 className="text-sm font-semibold text-stone-800 mb-1">{vp.heading}</h3>
                <p className="text-sm text-stone-500">{vp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Meals */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-6">{ui.sampleMeals}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.sampleMeals.map((meal) => (
              <div key={meal.name} className="rounded-xl border border-stone-100 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${mealTypeStyles[meal.mealType] ?? "bg-stone-50 text-stone-500"}`}>
                    {meal.mealType}
                  </span>
                  <span className="text-[10px] text-stone-400">{meal.prepTime}</span>
                </div>
                <h3 className="text-sm font-semibold text-stone-800 mb-1">{meal.name}</h3>
                <p className="text-xs text-stone-500 mb-2">{meal.description}</p>
                <div className="flex flex-wrap gap-1">
                  {meal.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-stone-400 bg-stone-50 rounded-full px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-stone-800 mb-6">{ui.faq}</h2>
          <div className="space-y-3">
            {data.faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-stone-100 bg-white group">
                <summary className="px-5 py-4 text-sm font-medium text-stone-800 cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-300 transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-stone-500 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Pages */}
        {data.relatedSlugs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-stone-800 mb-6">{ui.related}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {data.relatedSlugs.map((slug) => {
                const related = locale && locale !== "en"
                  ? getTranslatedMealPlan(slug, locale)
                  : getMealPlanBySlug(slug);
                if (!related) return null;
                const linkSlug = locale && locale !== "en"
                  ? getSlugForLocale(slug, locale)
                  : slug;
                return (
                  <Link
                    key={slug}
                    href={`${prefix}/meal-plans/${linkSlug}`}
                    className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all"
                  >
                    <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
                      {typeLabels[related.type]}
                    </span>
                    <h3 className="text-sm font-medium text-stone-800 mt-1">{related.h1}</h3>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Helpful Guides */}
        {(() => {
          const guides = getRelevantBlogPosts(data);
          if (guides.length === 0) return null;
          return (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-stone-800 mb-6">{ui.guides}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {guides.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="rounded-xl border border-stone-100 bg-white p-4 hover:border-orange-200 hover:shadow-sm transition-all group"
                  >
                    <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
                      Blog
                    </span>
                    <h3 className="text-sm font-medium text-stone-800 mt-1 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}

        {/* CTA */}
        <section className="rounded-2xl bg-orange-500 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {ui.ctaTitle}
          </h2>
          <p className="text-orange-100 text-sm sm:text-base mb-6 max-w-md mx-auto">
            {ui.ctaSub}
          </p>
          <Link
            href={locale && locale !== "en" ? `/onboarding?lang=${locale}` : "/onboarding"}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-orange-600 bg-white hover:bg-orange-50 rounded-full shadow-md transition-colors"
          >
            {ui.ctaBtn}
          </Link>
        </section>
      </article>
    </>
  );
}
