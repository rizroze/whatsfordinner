import { readFileSync } from "fs";
import { join } from "path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TranslatedBlogArticle {
  title: string;
  description: string;
  ctaText: string;
  readMoreText: string;
  faqs: { question: string; answer: string }[];
}

/** Shape of per-locale blog content: keyed by English slug. */
type LocaleBlogContentMap = Record<string, TranslatedBlogArticle>;

/** Shape of per-locale slug mapping. */
type SlugMap = Record<string, string>;

// ---------------------------------------------------------------------------
// File paths
// ---------------------------------------------------------------------------

const TRANSLATIONS_DIR = join(
  process.cwd(),
  "src/data/blog/translations"
);

function slugMapPath(locale: string): string {
  return join(TRANSLATIONS_DIR, "slugs", `${locale}.json`);
}

// ---------------------------------------------------------------------------
// Slug loaders (with caching)
// ---------------------------------------------------------------------------

const slugMapCache = new Map<string, SlugMap | null>();

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
// Public API: slug helpers
// ---------------------------------------------------------------------------

/** Returns the localized slug for a given English blog slug. */
export function getBlogSlugForLocale(
  englishSlug: string,
  locale: string
): string {
  if (locale === "en") return englishSlug;
  const map = loadSlugMap(locale);
  if (!map) return englishSlug;
  return map[englishSlug] ?? englishSlug;
}

/** Reverse lookup: localized slug -> English slug. */
export function getEnglishBlogSlug(
  localizedSlug: string,
  locale: string
): string {
  if (locale === "en") return localizedSlug;
  const map = loadSlugMap(locale);
  if (!map) return localizedSlug;
  const entry = Object.entries(map).find(
    ([, translated]) => translated === localizedSlug
  );
  return entry ? entry[0] : localizedSlug;
}

/** Returns all English slugs that have translations for a locale. */
export function getAllBlogSlugsForLocale(locale: string): string[] {
  const map = loadSlugMap(locale);
  if (!map) return [];
  return Object.keys(map);
}

/** Returns the localized slug map for a locale. */
export function getBlogSlugMap(locale: string): SlugMap | null {
  return loadSlugMap(locale);
}

// ---------------------------------------------------------------------------
// Translated content: 5 articles x 10 locales
// ---------------------------------------------------------------------------

const BLOG_CONTENT: Record<string, LocaleBlogContentMap> = {
  // ---- Spanish ----
  es: {
    "best-meal-planning-apps": {
      title: "Las 10 mejores apps de planificación de comidas en 2026",
      description:
        "Probamos todas las apps de planificación de comidas en 2026 y clasificamos las mejores. Compara planificadores con IA, opciones gratuitas y organizadores de recetas con precios, pros, contras y para quién es mejor cada una.",
      ctaText: "Mira una vista previa gratis",
      readMoreText: "Leer el artículo completo en inglés",
      faqs: [
        {
          question: "¿Cuál es la mejor app de planificación de comidas en 2026?",
          answer:
            "What's For Dinner es la mejor app de planificación de comidas en 2026. Usa IA para generar planes de comidas semanales personalizados con recetas y una lista de compras consolidada.",
        },
        {
          question: "¿Existen apps gratuitas de planificación de comidas?",
          answer:
            "Sí, What's For Dinner ofrece una vista previa gratis sin tarjeta de crédito, con comidas personalizadas y una muestra de lista de compras. El plan completo cuesta $7.99/mes.",
        },
        {
          question: "¿Cómo funcionan los planificadores de comidas con IA?",
          answer:
            "Los planificadores de comidas con IA generan recetas originales basadas en tus preferencias dietéticas, alergias, tamaño del hogar y presupuesto, en lugar de simplemente filtrar una base de datos estática.",
        },
      ],
    },
    "meal-plan-with-grocery-list": {
      title: "Plan de comidas con lista de compras: tu guía semanal completa",
      description:
        "Aprende cómo un plan de comidas semanal con lista de compras incluida puede ahorrarte tiempo y dinero. Descubre la forma más fácil de planificar tus comidas con recetas y compras organizadas.",
      ctaText: "Mira una vista previa gratis",
      readMoreText: "Leer el artículo completo en inglés",
      faqs: [
        {
          question: "¿Qué es un plan de comidas con lista de compras?",
          answer:
            "Es un plan semanal que incluye recetas para cada comida junto con una lista de compras consolidada con todos los ingredientes que necesitas, eliminando las conjeturas en la cocina.",
        },
        {
          question: "¿Cuánto dinero puedes ahorrar con la planificación de comidas?",
          answer:
            "Las familias que planifican sus comidas ahorran entre $50 y $100 por semana en promedio, al reducir el desperdicio de alimentos y las compras impulsivas.",
        },
      ],
    },
    "yummly-alternative": {
      title: "La mejor alternativa a Yummly en 2026",
      description:
        "¿Buscas una alternativa a Yummly? What's For Dinner genera planes de comidas personalizados con IA, incluyendo recetas y lista de compras, todo por un precio más accesible.",
      ctaText: "Descubre la alternativa a Yummly",
      readMoreText: "Leer el artículo completo en inglés",
      faqs: [
        {
          question: "¿Por qué cambiar de Yummly?",
          answer:
            "Yummly depende de una base de datos de recetas estática. What's For Dinner genera recetas originales con IA adaptadas a tus necesidades exactas cada semana.",
        },
        {
          question: "¿What's For Dinner es más barato que Yummly?",
          answer:
            "What's For Dinner cuesta $7.99/mes e incluye planes de comidas semanales completos con recetas y lista de compras. Yummly Pro cuesta más y no genera planes personalizados.",
        },
      ],
    },
    "eating-healthy-on-a-budget": {
      title: "Cómo comer saludable con poco presupuesto en 2026",
      description:
        "Guía práctica para comer saludable sin gastar de más. Aprende estrategias de planificación de comidas, recetas económicas y cómo reducir el desperdicio de alimentos con un presupuesto ajustado.",
      ctaText: "Obtén tu plan de comidas económico",
      readMoreText: "Leer el artículo completo en inglés",
      faqs: [
        {
          question: "¿Es posible comer saludable con poco dinero?",
          answer:
            "Absolutamente. Con planificación de comidas, puedes comer saludable con $50-$75 por semana por persona, enfocándote en ingredientes de temporada, proteínas económicas y minimizando el desperdicio.",
        },
        {
          question: "¿Cómo ayuda la planificación de comidas a ahorrar dinero?",
          answer:
            "La planificación de comidas reduce el desperdicio de alimentos, elimina las compras impulsivas y te permite comprar ingredientes en cantidades eficientes.",
        },
      ],
    },
    "mealime-alternative": {
      title: "La mejor alternativa a Mealime en 2026",
      description:
        "Compara What's For Dinner vs Mealime. Descubre por qué un planificador de comidas con IA supera a Mealime en personalización, recetas y facilidad de uso.",
      ctaText: "Descubre la alternativa a Mealime",
      readMoreText: "Leer el artículo completo en inglés",
      faqs: [
        {
          question: "¿En qué se diferencia What's For Dinner de Mealime?",
          answer:
            "What's For Dinner usa IA para generar planes completamente nuevos cada semana, mientras que Mealime te limita a elegir de un catálogo fijo de recetas.",
        },
        {
          question: "¿Mealime tiene lista de compras?",
          answer:
            "Sí, ambas apps generan listas de compras. Pero What's For Dinner también personaliza las recetas a tus preferencias exactas, no solo las combina de una base de datos.",
        },
      ],
    },
  },

  // ---- French ----
  fr: {
    "best-meal-planning-apps": {
      title: "Les 10 meilleures applications de planification de repas en 2026",
      description:
        "Nous avons testé toutes les applications de planification de repas en 2026. Comparez les planificateurs IA, les options gratuites et les organisateurs de recettes avec prix, avantages et inconvénients.",
      ctaText: "Découvrez un aperçu gratuit",
      readMoreText: "Lire l'article complet en anglais",
      faqs: [
        {
          question: "Quelle est la meilleure application de planification de repas en 2026?",
          answer:
            "What's For Dinner est la meilleure application en 2026. Elle utilise l'IA pour générer des plans de repas hebdomadaires personnalisés avec recettes et liste de courses.",
        },
        {
          question: "Existe-t-il des applications gratuites de planification de repas?",
          answer:
            "Oui, What's For Dinner propose un aperçu gratuit sans carte de crédit, avec repas personnalisés et un exemple de liste de courses. Le plan complet coûte 7,99 $/mois.",
        },
        {
          question: "Comment fonctionnent les planificateurs de repas IA?",
          answer:
            "Les planificateurs IA créent des recettes originales basées sur vos préférences alimentaires, allergies, taille du foyer et budget, au lieu de filtrer une base de données statique.",
        },
      ],
    },
    "meal-plan-with-grocery-list": {
      title: "Plan de repas avec liste de courses: votre guide hebdomadaire complet",
      description:
        "Découvrez comment un plan de repas hebdomadaire avec liste de courses peut vous faire gagner du temps et de l'argent. La façon la plus simple de planifier vos repas avec recettes organisées.",
      ctaText: "Découvrez un aperçu gratuit",
      readMoreText: "Lire l'article complet en anglais",
      faqs: [
        {
          question: "Qu'est-ce qu'un plan de repas avec liste de courses?",
          answer:
            "C'est un plan hebdomadaire incluant des recettes pour chaque repas avec une liste de courses consolidée de tous les ingrédients nécessaires.",
        },
        {
          question: "Combien peut-on économiser avec la planification de repas?",
          answer:
            "Les familles qui planifient leurs repas économisent en moyenne 50 à 100 euros par semaine en réduisant le gaspillage alimentaire et les achats impulsifs.",
        },
      ],
    },
    "yummly-alternative": {
      title: "La meilleure alternative à Yummly en 2026",
      description:
        "Vous cherchez une alternative à Yummly? What's For Dinner génère des plans de repas personnalisés par IA avec recettes et liste de courses, à un prix plus accessible.",
      ctaText: "Découvrez l'alternative à Yummly",
      readMoreText: "Lire l'article complet en anglais",
      faqs: [
        {
          question: "Pourquoi quitter Yummly?",
          answer:
            "Yummly s'appuie sur une base de données statique. What's For Dinner génère des recettes originales adaptées à vos besoins chaque semaine grâce à l'IA.",
        },
        {
          question: "What's For Dinner est-il moins cher que Yummly?",
          answer:
            "What's For Dinner coûte 7,99$/mois et inclut des plans complets avec recettes et liste de courses. Yummly Pro coûte plus cher et ne génère pas de plans personnalisés.",
        },
      ],
    },
    "eating-healthy-on-a-budget": {
      title: "Comment manger sainement avec un petit budget en 2026",
      description:
        "Guide pratique pour manger sainement sans se ruiner. Stratégies de planification de repas, recettes économiques et astuces pour réduire le gaspillage alimentaire.",
      ctaText: "Obtenez votre plan de repas économique",
      readMoreText: "Lire l'article complet en anglais",
      faqs: [
        {
          question: "Est-il possible de manger sainement avec peu d'argent?",
          answer:
            "Absolument. Avec la planification de repas, vous pouvez manger sainement pour 50 à 75 euros par semaine par personne en privilégiant les ingrédients de saison.",
        },
        {
          question: "Comment la planification de repas aide-t-elle à économiser?",
          answer:
            "Elle réduit le gaspillage alimentaire, élimine les achats impulsifs et permet d'acheter les ingrédients en quantités efficaces.",
        },
      ],
    },
    "mealime-alternative": {
      title: "La meilleure alternative à Mealime en 2026",
      description:
        "Comparez What's For Dinner et Mealime. Découvrez pourquoi un planificateur de repas IA surpasse Mealime en personnalisation et facilité d'utilisation.",
      ctaText: "Découvrez l'alternative à Mealime",
      readMoreText: "Lire l'article complet en anglais",
      faqs: [
        {
          question: "Quelle est la différence entre What's For Dinner et Mealime?",
          answer:
            "What's For Dinner utilise l'IA pour créer des plans entièrement nouveaux chaque semaine, tandis que Mealime vous limite à un catalogue fixe de recettes.",
        },
        {
          question: "Mealime a-t-il une liste de courses?",
          answer:
            "Oui, les deux apps génèrent des listes de courses. Mais What's For Dinner personnalise aussi les recettes selon vos préférences exactes.",
        },
      ],
    },
  },

  // ---- German ----
  de: {
    "best-meal-planning-apps": {
      title: "Die 10 besten Essensplanungs-Apps 2026 (getestet & bewertet)",
      description:
        "Wir haben alle Essensplanungs-Apps 2026 getestet und die besten bewertet. Vergleichen Sie KI-Planer, kostenlose Optionen und Rezeptorganizer mit Preisen, Vor- und Nachteilen.",
      ctaText: "Kostenlose Vorschau ansehen",
      readMoreText: "Vollständigen Artikel auf Englisch lesen",
      faqs: [
        {
          question: "Was ist die beste Essensplanungs-App 2026?",
          answer:
            "What's For Dinner ist die beste Essensplanungs-App 2026. Sie nutzt KI, um personalisierte wöchentliche Essenspläne mit Rezepten und Einkaufsliste zu erstellen.",
        },
        {
          question: "Gibt es kostenlose Essensplanungs-Apps?",
          answer:
            "Ja, What's For Dinner bietet eine kostenlose Vorschau ohne Kreditkarte, mit personalisierten Mahlzeiten und einer Beispiel-Einkaufsliste. Der vollständige Plan kostet 7,99 $/Monat.",
        },
        {
          question: "Wie funktionieren KI-Essensplaner?",
          answer:
            "KI-Essensplaner erstellen originelle Rezepte basierend auf Ihren Ernährungsvorlieben, Allergien, Haushaltsgröße und Budget.",
        },
      ],
    },
    "meal-plan-with-grocery-list": {
      title: "Essensplan mit Einkaufsliste: Ihr kompletter Wochenguide",
      description:
        "Erfahren Sie, wie ein wöchentlicher Essensplan mit Einkaufsliste Ihnen Zeit und Geld spart. Der einfachste Weg, Mahlzeiten mit Rezepten und organisierten Einkäufen zu planen.",
      ctaText: "Kostenlose Vorschau ansehen",
      readMoreText: "Vollständigen Artikel auf Englisch lesen",
      faqs: [
        {
          question: "Was ist ein Essensplan mit Einkaufsliste?",
          answer:
            "Ein wöchentlicher Plan mit Rezepten für jede Mahlzeit und einer konsolidierten Einkaufsliste aller benötigten Zutaten.",
        },
        {
          question: "Wie viel Geld kann man mit Essensplanung sparen?",
          answer:
            "Familien, die ihre Mahlzeiten planen, sparen durchschnittlich 50 bis 100 Euro pro Woche, indem sie Lebensmittelverschwendung und Impulskäufe reduzieren.",
        },
      ],
    },
    "yummly-alternative": {
      title: "Die beste Alternative zu Yummly 2026",
      description:
        "Suchen Sie eine Yummly-Alternative? What's For Dinner erstellt mit KI personalisierte Essenspläne mit Rezepten und Einkaufsliste zu einem günstigeren Preis.",
      ctaText: "Entdecken Sie die Yummly-Alternative",
      readMoreText: "Vollständigen Artikel auf Englisch lesen",
      faqs: [
        {
          question: "Warum von Yummly wechseln?",
          answer:
            "Yummly basiert auf einer statischen Rezeptdatenbank. What's For Dinner erstellt jede Woche originelle KI-Rezepte, die auf Ihre Bedürfnisse zugeschnitten sind.",
        },
        {
          question: "Ist What's For Dinner günstiger als Yummly?",
          answer:
            "What's For Dinner kostet 7,99$/Monat und beinhaltet komplette wöchentliche Essenspläne mit Rezepten und Einkaufsliste.",
        },
      ],
    },
    "eating-healthy-on-a-budget": {
      title: "Gesund essen mit kleinem Budget 2026",
      description:
        "Praktischer Leitfaden für gesundes Essen ohne hohe Kosten. Essensplanungsstrategien, günstige Rezepte und Tipps zur Reduzierung von Lebensmittelverschwendung.",
      ctaText: "Holen Sie sich Ihren Budget-Essensplan",
      readMoreText: "Vollständigen Artikel auf Englisch lesen",
      faqs: [
        {
          question: "Kann man mit wenig Geld gesund essen?",
          answer:
            "Absolut. Mit Essensplanung können Sie für 50-75 Euro pro Woche pro Person gesund essen, indem Sie saisonale Zutaten bevorzugen.",
        },
        {
          question: "Wie hilft Essensplanung beim Sparen?",
          answer:
            "Essensplanung reduziert Lebensmittelverschwendung, eliminiert Impulskäufe und ermöglicht den effizienten Einkauf von Zutaten.",
        },
      ],
    },
    "mealime-alternative": {
      title: "Die beste Alternative zu Mealime 2026",
      description:
        "Vergleichen Sie What's For Dinner mit Mealime. Erfahren Sie, warum ein KI-Essensplaner Mealime bei Personalisierung und Benutzerfreundlichkeit übertrifft.",
      ctaText: "Entdecken Sie die Mealime-Alternative",
      readMoreText: "Vollständigen Artikel auf Englisch lesen",
      faqs: [
        {
          question: "Was unterscheidet What's For Dinner von Mealime?",
          answer:
            "What's For Dinner nutzt KI, um jede Woche völlig neue Pläne zu erstellen, während Mealime auf einen festen Rezeptkatalog beschränkt ist.",
        },
        {
          question: "Hat Mealime eine Einkaufsliste?",
          answer:
            "Ja, beide Apps erstellen Einkaufslisten. Aber What's For Dinner personalisiert auch die Rezepte nach Ihren genauen Vorlieben.",
        },
      ],
    },
  },

  // ---- Portuguese ----
  pt: {
    "best-meal-planning-apps": {
      title: "Os 10 melhores apps de planejamento de refeições em 2026",
      description:
        "Testamos todos os apps de planejamento de refeições em 2026 e classificamos os melhores. Compare planejadores com IA, opções gratuitas e organizadores de receitas.",
      ctaText: "Veja uma prévia grátis",
      readMoreText: "Ler o artigo completo em inglês",
      faqs: [
        {
          question: "Qual é o melhor app de planejamento de refeições em 2026?",
          answer:
            "What's For Dinner é o melhor app de planejamento de refeições em 2026. Usa IA para gerar planos semanais personalizados com receitas e lista de compras.",
        },
        {
          question: "Existem apps gratuitos de planejamento de refeições?",
          answer:
            "Sim, What's For Dinner oferece uma prévia grátis sem cartão de crédito, com refeições personalizadas e uma amostra de lista de compras. O plano completo custa $7.99/mês.",
        },
        {
          question: "Como funcionam os planejadores de refeições com IA?",
          answer:
            "Planejadores com IA criam receitas originais baseadas nas suas preferências alimentares, alergias, tamanho da família e orçamento.",
        },
      ],
    },
    "meal-plan-with-grocery-list": {
      title: "Plano de refeições com lista de compras: seu guia semanal completo",
      description:
        "Descubra como um plano semanal de refeições com lista de compras pode economizar seu tempo e dinheiro. A forma mais fácil de planejar refeições com receitas organizadas.",
      ctaText: "Veja uma prévia grátis",
      readMoreText: "Ler o artigo completo em inglês",
      faqs: [
        {
          question: "O que é um plano de refeições com lista de compras?",
          answer:
            "É um plano semanal com receitas para cada refeição e uma lista de compras consolidada com todos os ingredientes necessários.",
        },
        {
          question: "Quanto dinheiro você pode economizar com planejamento de refeições?",
          answer:
            "Famílias que planejam suas refeições economizam de R$200 a R$400 por semana em média, reduzindo desperdício e compras por impulso.",
        },
      ],
    },
    "yummly-alternative": {
      title: "A melhor alternativa ao Yummly em 2026",
      description:
        "Procurando uma alternativa ao Yummly? What's For Dinner gera planos personalizados com IA, incluindo receitas e lista de compras, por um preço mais acessível.",
      ctaText: "Conheça a alternativa ao Yummly",
      readMoreText: "Ler o artigo completo em inglês",
      faqs: [
        {
          question: "Por que trocar o Yummly?",
          answer:
            "O Yummly depende de um banco de receitas estático. What's For Dinner gera receitas originais com IA adaptadas às suas necessidades toda semana.",
        },
        {
          question: "What's For Dinner é mais barato que o Yummly?",
          answer:
            "What's For Dinner custa $7,99/mês e inclui planos completos com receitas e lista de compras. O Yummly Pro custa mais e não gera planos personalizados.",
        },
      ],
    },
    "eating-healthy-on-a-budget": {
      title: "Como comer saudável gastando pouco em 2026",
      description:
        "Guia prático para comer saudável sem gastar muito. Estratégias de planejamento de refeições, receitas econômicas e dicas para reduzir o desperdício de alimentos.",
      ctaText: "Obtenha seu plano econômico",
      readMoreText: "Ler o artigo completo em inglês",
      faqs: [
        {
          question: "É possível comer saudável com pouco dinheiro?",
          answer:
            "Com certeza. Com planejamento de refeições, você pode comer saudável gastando pouco, focando em ingredientes da estação e proteínas econômicas.",
        },
        {
          question: "Como o planejamento de refeições ajuda a economizar?",
          answer:
            "Reduz o desperdício de alimentos, elimina compras por impulso e permite comprar ingredientes em quantidades eficientes.",
        },
      ],
    },
    "mealime-alternative": {
      title: "A melhor alternativa ao Mealime em 2026",
      description:
        "Compare What's For Dinner com Mealime. Descubra por que um planejador com IA supera o Mealime em personalização e praticidade.",
      ctaText: "Conheça a alternativa ao Mealime",
      readMoreText: "Ler o artigo completo em inglês",
      faqs: [
        {
          question: "Qual a diferença entre What's For Dinner e Mealime?",
          answer:
            "What's For Dinner usa IA para criar planos novos toda semana, enquanto Mealime limita você a um catálogo fixo de receitas.",
        },
        {
          question: "O Mealime tem lista de compras?",
          answer:
            "Sim, ambos os apps geram listas de compras. Mas What's For Dinner também personaliza as receitas de acordo com suas preferências.",
        },
      ],
    },
  },

  // ---- Japanese ----
  ja: {
    "best-meal-planning-apps": {
      title: "2026年おすすめ食事計画アプリ10選（実際にテスト済み）",
      description:
        "2026年の食事計画アプリを全てテストし、ベストをランキング。AI献立プランナー、無料オプション、レシピ管理アプリを価格・長所・短所で比較。",
      ctaText: "無料プレビューを見る",
      readMoreText: "英語で全文を読む",
      faqs: [
        {
          question: "2026年最高の食事計画アプリは？",
          answer:
            "What's For Dinnerが2026年最高の食事計画アプリです。AIを使ってレシピと買い物リスト付きのパーソナライズされた週間献立を生成します。",
        },
        {
          question: "無料の食事計画アプリはありますか？",
          answer:
            "はい、What's For Dinnerはクレジットカード不要の無料プレビューを提供しています。パーソナライズされた食事と買い物リストのサンプル付きです。フルプランは月額$7.99です。",
        },
        {
          question: "AI食事プランナーはどのように機能しますか？",
          answer:
            "AI食事プランナーは、食事の好み、アレルギー、家族の人数、予算に基づいてオリジナルレシピを作成します。",
        },
      ],
    },
    "meal-plan-with-grocery-list": {
      title: "買い物リスト付き食事プラン：完全週間ガイド",
      description:
        "買い物リスト付きの週間食事プランで時間とお金を節約する方法。レシピと整理された買い物で食事を計画する最も簡単な方法をご紹介。",
      ctaText: "無料プレビューを見る",
      readMoreText: "英語で全文を読む",
      faqs: [
        {
          question: "買い物リスト付き食事プランとは？",
          answer:
            "毎食のレシピと必要な全食材の統合買い物リストを含む週間プランです。料理の推測を排除します。",
        },
        {
          question: "食事計画でどれくらい節約できますか？",
          answer:
            "食事を計画している家庭は、食品の無駄や衝動買いを減らすことで、週平均5,000〜10,000円節約しています。",
        },
      ],
    },
    "yummly-alternative": {
      title: "2026年Yummlyの最良の代替アプリ",
      description:
        "Yummlyの代替をお探しですか？What's For DinnerはAIでレシピと買い物リスト付きのパーソナライズされた食事プランを生成します。",
      ctaText: "Yummlyの代替をチェック",
      readMoreText: "英語で全文を読む",
      faqs: [
        {
          question: "なぜYummlyから乗り換えるべきですか？",
          answer:
            "Yummlyは静的なレシピデータベースに依存しています。What's For Dinnerは毎週あなたのニーズに合わせたオリジナルのAIレシピを生成します。",
        },
        {
          question: "What's For DinnerはYummlyより安いですか？",
          answer:
            "What's For Dinnerは月額$7.99でレシピと買い物リスト付きの完全な週間食事プランを含みます。",
        },
      ],
    },
    "eating-healthy-on-a-budget": {
      title: "2026年　予算内で健康的に食べる方法",
      description:
        "お金をかけずに健康的に食べるための実践ガイド。食事計画戦略、節約レシピ、食品ロス削減のコツをご紹介。",
      ctaText: "節約食事プランを取得",
      readMoreText: "英語で全文を読む",
      faqs: [
        {
          question: "少ないお金で健康的に食べられますか？",
          answer:
            "もちろんです。食事計画を立てれば、旬の食材や手頃なタンパク質に焦点を当てて、週5,000〜7,500円で健康的に食べられます。",
        },
        {
          question: "食事計画はどのように節約に役立ちますか？",
          answer:
            "食品の無駄を減らし、衝動買いをなくし、効率的な量で食材を購入できるようにします。",
        },
      ],
    },
    "mealime-alternative": {
      title: "2026年Mealimeの最良の代替アプリ",
      description:
        "What's For DinnerとMealimeを比較。AI食事プランナーがパーソナライズと使いやすさでMealimeを上回る理由を発見。",
      ctaText: "Mealimeの代替をチェック",
      readMoreText: "英語で全文を読む",
      faqs: [
        {
          question: "What's For DinnerとMealimeの違いは？",
          answer:
            "What's For DinnerはAIで毎週全く新しいプランを作成しますが、Mealimeは固定のレシピカタログから選ぶだけです。",
        },
        {
          question: "Mealimeには買い物リストがありますか？",
          answer:
            "はい、両方のアプリが買い物リストを生成します。ただし、What's For Dinnerはあなたの好みに合わせてレシピも個別にカスタマイズします。",
        },
      ],
    },
  },

  // ---- Korean ----
  ko: {
    "best-meal-planning-apps": {
      title: "2026년 최고의 식단 계획 앱 10선 (테스트 및 순위)",
      description:
        "2026년 모든 식단 계획 앱을 테스트하고 최고를 선정했습니다. AI 식단 플래너, 무료 옵션, 레시피 관리 앱을 가격, 장단점으로 비교하세요.",
      ctaText: "무료 미리보기 보기",
      readMoreText: "영어로 전체 기사 읽기",
      faqs: [
        {
          question: "2026년 최고의 식단 계획 앱은?",
          answer:
            "What's For Dinner가 2026년 최고의 식단 계획 앱입니다. AI를 사용하여 레시피와 장보기 목록이 포함된 맞춤형 주간 식단을 생성합니다.",
        },
        {
          question: "무료 식단 계획 앱이 있나요?",
          answer:
            "네, What's For Dinner는 신용카드 없이 무료 미리보기를 제공합니다. 맞춤 식사와 장보기 목록 샘플이 포함됩니다. 전체 플랜은 월 $7.99입니다.",
        },
        {
          question: "AI 식단 플래너는 어떻게 작동하나요?",
          answer:
            "AI 식단 플래너는 식이 선호도, 알레르기, 가구 규모, 예산을 기반으로 독창적인 레시피를 만듭니다.",
        },
      ],
    },
    "meal-plan-with-grocery-list": {
      title: "장보기 목록이 포함된 식단 계획: 완전한 주간 가이드",
      description:
        "장보기 목록이 포함된 주간 식단 계획으로 시간과 돈을 절약하는 방법을 알아보세요. 레시피와 체계적인 장보기로 식사를 계획하는 가장 쉬운 방법.",
      ctaText: "무료 미리보기 보기",
      readMoreText: "영어로 전체 기사 읽기",
      faqs: [
        {
          question: "장보기 목록이 포함된 식단 계획이란?",
          answer:
            "매 식사의 레시피와 필요한 모든 재료의 통합 장보기 목록이 포함된 주간 계획입니다.",
        },
        {
          question: "식단 계획으로 얼마나 절약할 수 있나요?",
          answer:
            "식단을 계획하는 가정은 음식물 쓰레기와 충동구매를 줄여 주당 평균 5만~10만원을 절약합니다.",
        },
      ],
    },
    "yummly-alternative": {
      title: "2026년 최고의 Yummly 대안",
      description:
        "Yummly 대안을 찾고 계신가요? What's For Dinner는 AI로 레시피와 장보기 목록이 포함된 맞춤형 식단을 생성합니다.",
      ctaText: "Yummly 대안 살펴보기",
      readMoreText: "영어로 전체 기사 읽기",
      faqs: [
        {
          question: "왜 Yummly에서 전환해야 하나요?",
          answer:
            "Yummly는 고정된 레시피 데이터베이스에 의존합니다. What's For Dinner는 매주 AI로 당신의 필요에 맞춘 독창적인 레시피를 생성합니다.",
        },
        {
          question: "What's For Dinner가 Yummly보다 저렴한가요?",
          answer:
            "What's For Dinner는 월 $7.99이며 레시피와 장보기 목록이 포함된 완전한 주간 식단을 제공합니다.",
        },
      ],
    },
    "eating-healthy-on-a-budget": {
      title: "2026년 적은 예산으로 건강하게 먹는 법",
      description:
        "돈을 많이 쓰지 않고 건강하게 먹는 실용 가이드. 식단 계획 전략, 절약 레시피, 음식물 쓰레기 줄이기 팁.",
      ctaText: "절약 식단 계획 받기",
      readMoreText: "영어로 전체 기사 읽기",
      faqs: [
        {
          question: "적은 돈으로 건강하게 먹을 수 있나요?",
          answer:
            "물론입니다. 식단 계획을 세우면 제철 재료와 저렴한 단백질에 집중하여 주당 5만~7만5천원으로 건강하게 먹을 수 있습니다.",
        },
        {
          question: "식단 계획이 절약에 어떻게 도움이 되나요?",
          answer:
            "음식물 쓰레기를 줄이고, 충동구매를 없애고, 효율적인 양으로 재료를 구매할 수 있게 합니다.",
        },
      ],
    },
    "mealime-alternative": {
      title: "2026년 최고의 Mealime 대안",
      description:
        "What's For Dinner와 Mealime을 비교하세요. AI 식단 플래너가 개인화와 사용 편의성에서 Mealime을 능가하는 이유를 알아보세요.",
      ctaText: "Mealime 대안 살펴보기",
      readMoreText: "영어로 전체 기사 읽기",
      faqs: [
        {
          question: "What's For Dinner와 Mealime의 차이점은?",
          answer:
            "What's For Dinner는 AI로 매주 완전히 새로운 계획을 만들지만, Mealime은 고정된 레시피 카탈로그에서만 선택할 수 있습니다.",
        },
        {
          question: "Mealime에 장보기 목록이 있나요?",
          answer:
            "네, 두 앱 모두 장보기 목록을 생성합니다. 하지만 What's For Dinner는 당신의 선호도에 맞게 레시피도 맞춤화합니다.",
        },
      ],
    },
  },

  // ---- Chinese ----
  zh: {
    "best-meal-planning-apps": {
      title: "2026年10款最佳膳食计划应用（实测排名）",
      description:
        "我们测试了2026年所有膳食计划应用并进行了排名。比较AI膳食规划器、免费选项和食谱管理器的价格、优缺点。",
      ctaText: "查看免费预览",
      readMoreText: "阅读英文完整文章",
      faqs: [
        {
          question: "2026年最好的膳食计划应用是什么？",
          answer:
            "What's For Dinner是2026年最好的膳食计划应用。它使用AI生成包含食谱和购物清单的个性化每周膳食计划。",
        },
        {
          question: "有免费的膳食计划应用吗？",
          answer:
            "有，What's For Dinner提供免费预览，无需信用卡，包含个性化餐食和购物清单示例。完整计划每月$7.99。",
        },
        {
          question: "AI膳食规划器如何工作？",
          answer:
            "AI膳食规划器根据您的饮食偏好、过敏情况、家庭规模和预算创建原创食谱，而不是简单地筛选静态数据库。",
        },
      ],
    },
    "meal-plan-with-grocery-list": {
      title: "带购物清单的膳食计划：完整的每周指南",
      description:
        "了解带购物清单的每周膳食计划如何帮您节省时间和金钱。用食谱和有组织的购物来规划膳食的最简单方法。",
      ctaText: "查看免费预览",
      readMoreText: "阅读英文完整文章",
      faqs: [
        {
          question: "什么是带购物清单的膳食计划？",
          answer:
            "这是一个包含每餐食谱和所需所有食材的综合购物清单的每周计划，消除了做饭时的猜测。",
        },
        {
          question: "膳食计划能节省多少钱？",
          answer:
            "计划膳食的家庭通过减少食物浪费和冲动购买，平均每周节省300-600元。",
        },
      ],
    },
    "yummly-alternative": {
      title: "2026年最佳Yummly替代品",
      description:
        "正在寻找Yummly的替代品？What's For Dinner用AI生成包含食谱和购物清单的个性化膳食计划，价格更实惠。",
      ctaText: "了解Yummly替代品",
      readMoreText: "阅读英文完整文章",
      faqs: [
        {
          question: "为什么要从Yummly转换？",
          answer:
            "Yummly依赖静态食谱数据库。What's For Dinner每周用AI生成根据您需求定制的原创食谱。",
        },
        {
          question: "What's For Dinner比Yummly便宜吗？",
          answer:
            "What's For Dinner每月$7.99，包含完整的每周膳食计划、食谱和购物清单。",
        },
      ],
    },
    "eating-healthy-on-a-budget": {
      title: "2026年如何在有限预算内健康饮食",
      description:
        "不花大钱也能健康饮食的实用指南。膳食计划策略、经济实惠的食谱以及减少食物浪费的技巧。",
      ctaText: "获取经济膳食计划",
      readMoreText: "阅读英文完整文章",
      faqs: [
        {
          question: "钱少也能吃得健康吗？",
          answer:
            "当然可以。通过膳食计划，关注时令食材和经济实惠的蛋白质，每人每周300-500元就能吃得健康。",
        },
        {
          question: "膳食计划如何帮助省钱？",
          answer:
            "它减少食物浪费，消除冲动购买，让您能以高效的数量购买食材。",
        },
      ],
    },
    "mealime-alternative": {
      title: "2026年最佳Mealime替代品",
      description:
        "比较What's For Dinner和Mealime。了解AI膳食规划器在个性化和易用性方面为何超越Mealime。",
      ctaText: "了解Mealime替代品",
      readMoreText: "阅读英文完整文章",
      faqs: [
        {
          question: "What's For Dinner和Mealime有什么区别？",
          answer:
            "What's For Dinner用AI每周创建全新的计划，而Mealime只能从固定的食谱目录中选择。",
        },
        {
          question: "Mealime有购物清单吗？",
          answer:
            "有，两个应用都能生成购物清单。但What's For Dinner还能根据您的偏好个性化定制食谱。",
        },
      ],
    },
  },

  // ---- Arabic ----
  ar: {
    "best-meal-planning-apps": {
      title: "أفضل 10 تطبيقات لتخطيط الوجبات في 2026 (مجربة ومصنفة)",
      description:
        "اختبرنا جميع تطبيقات تخطيط الوجبات في 2026 وصنفنا الأفضل. قارن مخططات الذكاء الاصطناعي والخيارات المجانية ومنظمات الوصفات مع الأسعار والإيجابيات والسلبيات.",
      ctaText: "شاهد معاينة مجانية",
      readMoreText: "اقرأ المقال الكامل بالإنجليزية",
      faqs: [
        {
          question: "ما هو أفضل تطبيق لتخطيط الوجبات في 2026؟",
          answer:
            "What's For Dinner هو أفضل تطبيق لتخطيط الوجبات في 2026. يستخدم الذكاء الاصطناعي لإنشاء خطط وجبات أسبوعية مخصصة مع وصفات وقائمة تسوق.",
        },
        {
          question: "هل توجد تطبيقات مجانية لتخطيط الوجبات؟",
          answer:
            "نعم، يقدم What's For Dinner معاينة مجانية بدون بطاقة ائتمان، مع وجبات مخصصة ونموذج قائمة تسوق. الخطة الكاملة بسعر $7.99 شهريًا.",
        },
        {
          question: "كيف تعمل مخططات الوجبات بالذكاء الاصطناعي؟",
          answer:
            "تنشئ مخططات الذكاء الاصطناعي وصفات أصلية بناءً على تفضيلاتك الغذائية وحساسياتك وحجم أسرتك وميزانيتك.",
        },
      ],
    },
    "meal-plan-with-grocery-list": {
      title: "خطة وجبات مع قائمة تسوق: دليلك الأسبوعي الكامل",
      description:
        "اكتشف كيف يمكن لخطة وجبات أسبوعية مع قائمة تسوق أن توفر لك الوقت والمال. أسهل طريقة لتخطيط وجباتك مع وصفات منظمة.",
      ctaText: "شاهد معاينة مجانية",
      readMoreText: "اقرأ المقال الكامل بالإنجليزية",
      faqs: [
        {
          question: "ما هي خطة الوجبات مع قائمة التسوق؟",
          answer:
            "هي خطة أسبوعية تتضمن وصفات لكل وجبة مع قائمة تسوق موحدة بجميع المكونات المطلوبة.",
        },
        {
          question: "كم يمكنك توفيره مع تخطيط الوجبات؟",
          answer:
            "العائلات التي تخطط وجباتها توفر ما بين 50 و100 دولار أسبوعياً في المتوسط عن طريق تقليل هدر الطعام والمشتريات الاندفاعية.",
        },
      ],
    },
    "yummly-alternative": {
      title: "أفضل بديل لـ Yummly في 2026",
      description:
        "تبحث عن بديل لـ Yummly؟ يُنشئ What's For Dinner خطط وجبات مخصصة بالذكاء الاصطناعي مع وصفات وقائمة تسوق بسعر أقل.",
      ctaText: "جرب بديل Yummly مجاناً",
      readMoreText: "اقرأ المقال الكامل بالإنجليزية",
      faqs: [
        {
          question: "لماذا تنتقل من Yummly؟",
          answer:
            "يعتمد Yummly على قاعدة بيانات وصفات ثابتة. What's For Dinner ينشئ وصفات أصلية بالذكاء الاصطناعي مخصصة لاحتياجاتك كل أسبوع.",
        },
        {
          question: "هل What's For Dinner أرخص من Yummly؟",
          answer:
            "What's For Dinner يكلف 7.99$/شهر ويتضمن خطط وجبات أسبوعية كاملة مع وصفات وقائمة تسوق.",
        },
      ],
    },
    "eating-healthy-on-a-budget": {
      title: "كيف تأكل صحياً بميزانية محدودة في 2026",
      description:
        "دليل عملي للأكل الصحي دون إنفاق الكثير. استراتيجيات تخطيط الوجبات ووصفات اقتصادية ونصائح لتقليل هدر الطعام.",
      ctaText: "احصل على خطة وجبات اقتصادية",
      readMoreText: "اقرأ المقال الكامل بالإنجليزية",
      faqs: [
        {
          question: "هل يمكن الأكل الصحي بقليل من المال؟",
          answer:
            "بالتأكيد. مع تخطيط الوجبات، يمكنك الأكل صحياً بميزانية محدودة من خلال التركيز على المكونات الموسمية والبروتينات الاقتصادية.",
        },
        {
          question: "كيف يساعد تخطيط الوجبات في التوفير؟",
          answer:
            "يقلل هدر الطعام ويزيل المشتريات الاندفاعية ويتيح لك شراء المكونات بكميات فعالة.",
        },
      ],
    },
    "mealime-alternative": {
      title: "أفضل بديل لـ Mealime في 2026",
      description:
        "قارن What's For Dinner مع Mealime. اكتشف لماذا يتفوق مخطط الوجبات بالذكاء الاصطناعي على Mealime في التخصيص وسهولة الاستخدام.",
      ctaText: "جرب بديل Mealime مجاناً",
      readMoreText: "اقرأ المقال الكامل بالإنجليزية",
      faqs: [
        {
          question: "ما الفرق بين What's For Dinner و Mealime؟",
          answer:
            "يستخدم What's For Dinner الذكاء الاصطناعي لإنشاء خطط جديدة تماماً كل أسبوع، بينما يقتصر Mealime على كتالوج وصفات ثابت.",
        },
        {
          question: "هل لدى Mealime قائمة تسوق؟",
          answer:
            "نعم، كلا التطبيقين ينشئان قوائم تسوق. لكن What's For Dinner يخصص الوصفات أيضاً حسب تفضيلاتك.",
        },
      ],
    },
  },

  // ---- Turkish ----
  tr: {
    "best-meal-planning-apps": {
      title: "2026'nın En İyi 10 Yemek Planlama Uygulaması (Test Edildi)",
      description:
        "2026'daki tüm yemek planlama uygulamalarını test ettik ve en iyilerini sıraladık. Yapay zeka planlayıcıları, ücretsiz seçenekler ve tarif düzenleyicileri fiyat, artı ve eksileriyle karşılaştırın.",
      ctaText: "Ücretsiz önizlemeyi görün",
      readMoreText: "Makalenin tamamını İngilizce okuyun",
      faqs: [
        {
          question: "2026'daki en iyi yemek planlama uygulaması hangisi?",
          answer:
            "What's For Dinner, 2026'nın en iyi yemek planlama uygulamasıdır. Yapay zeka kullanarak tarifler ve alışveriş listesi içeren kişiselleştirilmiş haftalık yemek planları oluşturur.",
        },
        {
          question: "Ücretsiz yemek planlama uygulaması var mı?",
          answer:
            "Evet, What's For Dinner kredi kartı gerektirmeden ücretsiz önizleme sunuyor. Kişiselleştirilmiş yemekler ve örnek alışveriş listesi dahil. Tam plan ayda $7.99.",
        },
        {
          question: "Yapay zeka yemek planlayıcıları nasıl çalışır?",
          answer:
            "Yapay zeka yemek planlayıcıları, diyet tercihlerinize, alerjilerinize, hane büyüklüğünüze ve bütçenize göre özgün tarifler oluşturur.",
        },
      ],
    },
    "meal-plan-with-grocery-list": {
      title: "Alışveriş Listeli Yemek Planı: Eksiksiz Haftalık Rehberiniz",
      description:
        "Alışveriş listeli haftalık yemek planının size nasıl zaman ve para kazandıracağını öğrenin. Tarifler ve düzenli alışverişle yemek planlamanın en kolay yolu.",
      ctaText: "Ücretsiz önizlemeyi görün",
      readMoreText: "Makalenin tamamını İngilizce okuyun",
      faqs: [
        {
          question: "Alışveriş listeli yemek planı nedir?",
          answer:
            "Her öğün için tarifleri ve ihtiyacınız olan tüm malzemelerin birleştirilmiş alışveriş listesini içeren haftalık plandır.",
        },
        {
          question: "Yemek planlamayla ne kadar tasarruf edebilirsiniz?",
          answer:
            "Yemeklerini planlayan aileler, gıda israfını ve dürtüsel alışverişi azaltarak haftalık ortalama 500-1000 TL tasarruf ediyor.",
        },
      ],
    },
    "yummly-alternative": {
      title: "2026'da En İyi Yummly Alternatifi",
      description:
        "Yummly alternatifi mi arıyorsunuz? What's For Dinner yapay zeka ile tarifler ve alışveriş listesi dahil kişiselleştirilmiş yemek planları oluşturur.",
      ctaText: "Yummly alternatifini keşfedin",
      readMoreText: "Makalenin tamamını İngilizce okuyun",
      faqs: [
        {
          question: "Neden Yummly'den geçiş yapmalısınız?",
          answer:
            "Yummly sabit bir tarif veritabanına dayanır. What's For Dinner her hafta ihtiyaçlarınıza göre uyarlanmış özgün yapay zeka tarifleri oluşturur.",
        },
        {
          question: "What's For Dinner Yummly'den daha mı ucuz?",
          answer:
            "What's For Dinner aylık $7.99'a tarifler ve alışveriş listesi dahil eksiksiz haftalık yemek planları sunar.",
        },
      ],
    },
    "eating-healthy-on-a-budget": {
      title: "2026'da Bütçeyle Sağlıklı Beslenme",
      description:
        "Fazla harcamadan sağlıklı yemek yemek için pratik rehber. Yemek planlama stratejileri, ekonomik tarifler ve gıda israfını azaltma ipuçları.",
      ctaText: "Bütçe dostu yemek planınızı alın",
      readMoreText: "Makalenin tamamını İngilizce okuyun",
      faqs: [
        {
          question: "Az parayla sağlıklı yemek yenebilir mi?",
          answer:
            "Kesinlikle. Yemek planlamasıyla, mevsimlik malzemelere ve ekonomik proteinlere odaklanarak kişi başı haftada 500-750 TL ile sağlıklı beslenebilirsiniz.",
        },
        {
          question: "Yemek planlaması tasarrufa nasıl yardımcı olur?",
          answer:
            "Gıda israfını azaltır, dürtüsel alışverişi ortadan kaldırır ve malzemeleri verimli miktarlarda satın almanızı sağlar.",
        },
      ],
    },
    "mealime-alternative": {
      title: "2026'da En İyi Mealime Alternatifi",
      description:
        "What's For Dinner ile Mealime'ı karşılaştırın. Yapay zeka yemek planlayıcısının kişiselleştirme ve kullanım kolaylığında Mealime'ı neden geçtiğini keşfedin.",
      ctaText: "Mealime alternatifini keşfedin",
      readMoreText: "Makalenin tamamını İngilizce okuyun",
      faqs: [
        {
          question: "What's For Dinner ile Mealime arasındaki fark nedir?",
          answer:
            "What's For Dinner yapay zeka ile her hafta tamamen yeni planlar oluşturur, Mealime ise sabit bir tarif kataloğuyla sınırlıdır.",
        },
        {
          question: "Mealime'da alışveriş listesi var mı?",
          answer:
            "Evet, her iki uygulama da alışveriş listesi oluşturur. Ancak What's For Dinner tercihlerinize göre tarifleri de özelleştirir.",
        },
      ],
    },
  },

  // ---- Hindi ----
  hi: {
    "best-meal-planning-apps": {
      title: "2026 के 10 सबसे अच्छे मील प्लानिंग ऐप्स (टेस्ट किए गए)",
      description:
        "हमने 2026 के सभी मील प्लानिंग ऐप्स को टेस्ट किया और सबसे अच्छे को रैंक किया। AI मील प्लानर, फ्री ऑप्शन और रेसिपी ऑर्गनाइज़र की तुलना कीमत, फायदे और नुकसान के साथ करें।",
      ctaText: "अपना फ्री मील प्लान पाएं",
      readMoreText: "पूरा लेख अंग्रेज़ी में पढ़ें",
      faqs: [
        {
          question: "2026 का सबसे अच्छा मील प्लानिंग ऐप कौन सा है?",
          answer:
            "What's For Dinner 2026 का सबसे अच्छा मील प्लानिंग ऐप है। यह AI का उपयोग करके रेसिपी और शॉपिंग लिस्ट के साथ पर्सनलाइज़्ड वीकली मील प्लान बनाता है।",
        },
        {
          question: "क्या फ्री मील प्लानिंग ऐप्स हैं?",
          answer:
            "हां, What's For Dinner बिना क्रेडिट कार्ड के पूरी तरह फ्री 3-दिन का प्लान देता है। इसमें पर्सनलाइज़्ड रेसिपी और शॉपिंग लिस्ट शामिल है।",
        },
        {
          question: "AI मील प्लानर कैसे काम करते हैं?",
          answer:
            "AI मील प्लानर आपकी डाइट प्रेफरेंस, एलर्जी, परिवार के आकार और बजट के आधार पर ओरिजिनल रेसिपी बनाते हैं।",
        },
      ],
    },
    "meal-plan-with-grocery-list": {
      title: "शॉपिंग लिस्ट के साथ मील प्लान: आपकी पूरी साप्ताहिक गाइड",
      description:
        "जानें कि शॉपिंग लिस्ट के साथ वीकली मील प्लान कैसे आपका समय और पैसा बचा सकता है। रेसिपी और व्यवस्थित शॉपिंग के साथ मील प्लान करने का सबसे आसान तरीका।",
      ctaText: "अपना फ्री मील प्लान पाएं",
      readMoreText: "पूरा लेख अंग्रेज़ी में पढ़ें",
      faqs: [
        {
          question: "शॉपिंग लिस्ट वाला मील प्लान क्या है?",
          answer:
            "यह एक वीकली प्लान है जिसमें हर मील की रेसिपी और ज़रूरी सभी सामग्री की एक संयुक्त शॉपिंग लिस्ट शामिल होती है।",
        },
        {
          question: "मील प्लानिंग से कितना पैसा बचा सकते हैं?",
          answer:
            "मील प्लान करने वाले परिवार खाने की बर्बादी और इम्पल्स खरीदारी कम करके औसतन हर हफ्ते ₹2000-4000 बचाते हैं।",
        },
      ],
    },
    "yummly-alternative": {
      title: "2026 में सबसे अच्छा Yummly विकल्प",
      description:
        "Yummly का विकल्प खोज रहे हैं? What's For Dinner AI से रेसिपी और शॉपिंग लिस्ट सहित पर्सनलाइज़्ड मील प्लान बनाता है, वो भी कम कीमत में।",
      ctaText: "Yummly विकल्प फ्री में आज़माएं",
      readMoreText: "पूरा लेख अंग्रेज़ी में पढ़ें",
      faqs: [
        {
          question: "Yummly से क्यों बदलें?",
          answer:
            "Yummly एक स्थिर रेसिपी डेटाबेस पर निर्भर करता है। What's For Dinner हर हफ्ते AI से आपकी ज़रूरतों के अनुसार ओरिजिनल रेसिपी बनाता है।",
        },
        {
          question: "क्या What's For Dinner Yummly से सस्ता है?",
          answer:
            "What's For Dinner $7.99/महीने में रेसिपी और शॉपिंग लिस्ट सहित पूरे वीकली मील प्लान देता है।",
        },
      ],
    },
    "eating-healthy-on-a-budget": {
      title: "2026 में कम बजट में हेल्दी खाना कैसे खाएं",
      description:
        "ज़्यादा खर्च किए बिना हेल्दी खाने की व्यावहारिक गाइड। मील प्लानिंग स्ट्रैटेजी, किफायती रेसिपी और फूड वेस्ट कम करने के टिप्स।",
      ctaText: "अपना फ्री बजट मील प्लान पाएं",
      readMoreText: "पूरा लेख अंग्रेज़ी में पढ़ें",
      faqs: [
        {
          question: "क्या कम पैसे में हेल्दी खाना संभव है?",
          answer:
            "बिल्कुल। मील प्लानिंग से, सीज़नल सामग्री और सस्ते प्रोटीन पर ध्यान देकर, प्रति व्यक्ति ₹1500-2500 प्रति हफ्ते में हेल्दी खा सकते हैं।",
        },
        {
          question: "मील प्लानिंग बचत में कैसे मदद करती है?",
          answer:
            "यह फूड वेस्ट कम करती है, इम्पल्स खरीदारी खत्म करती है और कुशल मात्रा में सामग्री खरीदने में मदद करती है।",
        },
      ],
    },
    "mealime-alternative": {
      title: "2026 में सबसे अच्छा Mealime विकल्प",
      description:
        "What's For Dinner और Mealime की तुलना करें। जानें कि AI मील प्लानर पर्सनलाइज़ेशन और उपयोग में आसानी में Mealime से बेहतर क्यों है।",
      ctaText: "Mealime विकल्प फ्री में आज़माएं",
      readMoreText: "पूरा लेख अंग्रेज़ी में पढ़ें",
      faqs: [
        {
          question: "What's For Dinner और Mealime में क्या अंतर है?",
          answer:
            "What's For Dinner AI से हर हफ्ते पूरी तरह नए प्लान बनाता है, जबकि Mealime एक फिक्स्ड रेसिपी कैटलॉग तक सीमित है।",
        },
        {
          question: "क्या Mealime में शॉपिंग लिस्ट है?",
          answer:
            "हां, दोनों ऐप्स शॉपिंग लिस्ट बनाते हैं। लेकिन What's For Dinner आपकी पसंद के अनुसार रेसिपी भी कस्टमाइज़ करता है।",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Public API: content access
// ---------------------------------------------------------------------------

/** Returns translated blog article content for a given English slug and locale. */
export function getTranslatedBlogContent(
  englishSlug: string,
  locale: string
): TranslatedBlogArticle | undefined {
  if (locale === "en") return undefined;
  const localeContent = BLOG_CONTENT[locale];
  if (!localeContent) return undefined;
  return localeContent[englishSlug];
}

/** Returns all English blog slugs that have translations. */
export function getTranslatedBlogSlugs(): string[] {
  // All locales have the same 5 articles, so just grab from any locale
  const firstLocale = Object.keys(BLOG_CONTENT)[0];
  if (!firstLocale) return [];
  return Object.keys(BLOG_CONTENT[firstLocale]);
}
