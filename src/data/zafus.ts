/**
 * Source unique de vérité pour les données produits des zafus Myokan
 * Utilisée par le configurateur (/zafus/), le guide d'orientation (/choisir-son-zafu/)
 * et les composants de la page d'accueil.
 */

export interface ZafuPricing {
  vide: number | null;
  plein: number | null;
}

export interface ZafuSize {
  name: "S" | "M" | "L" | "Sur mesure";
  width: number | null;
  height: number | null;
  desc: string;
  detail: string;
  guideDesc: string;
  isStandard: boolean;
  img: string;
  alt: string;
  recommendedFor: string;
}

export interface ZafuType {
  label: string;
  val: "Plein" | "Vide";
  sublabel: string;
  note: string;
}

export interface ZafuColor {
  name: string;
  hex: string;
  img: string;
  checkColor: string;
}

export interface ZafuGalleryImage {
  src: string;
  alt: string;
  title: string;
  caption: string;
  category?: "Produit" | "Savoir-faire" | "Matière" | "Pratique" | "Atelier";
}

// Tarifs indicatifs en euros (hors frais de port)
export const pricing: Record<string, ZafuPricing> = {
  "S": { vide: 25, plein: 40 },
  "M": { vide: 27, plein: 45 },
  "L": { vide: 30, plein: 50 },
  "Sur mesure": { vide: null, plein: null },
};

export const pricingExplanation = {
  summary: "À partir de 40 € plein (avec kapok) · dès 25 € en housse vide",
  detail: "Le tarif d'un zafu dépend uniquement de sa taille (S, M ou L) et de sa formule de garnissage (coussin plein garni de kapok végétal naturel ou housse seule à garnir par vos soins). Pour les dimensions spéciales, le tarif est confirmé sur devis avant confection.",
  whyVariation: "Pourquoi le prix varie-t-il ? La quantité de tissu de coton épais, le volume de kapok végétal naturel (environ 1 kg de fibre soyeuse tassée à la main) et les éventuelles mensurations personnalisées déterminent le temps d'atelier.",
};

export interface OrderingStep {
  number: number;
  title: string;
  subtitle: string;
  desc: string;
  details?: string[];
}

export const orderingSteps: OrderingStep[] = [
  {
    number: 1,
    title: "Choisissez votre zafu",
    subtitle: "Sélectionnez votre modèle ou utilisez le guide",
    desc: "Comparez les formats S, M et L ou utilisez notre guide d'assise pour trouver le modèle adapté à votre pratique et à votre morphologie.",
    details: ["Formats S, M, L ou Sur mesure", "Garni de kapok naturel ou housse seule", "Coloris de toile (noir, rouge, bleu, etc.)"],
  },
  {
    number: 2,
    title: "Échangez avec Myokan",
    subtitle: "Conseil direct avec l'artisane",
    desc: "Vous pouvez nous contacter pour vérifier votre choix, parler de votre posture ou discuter d'une réalisation sur mesure sans engagement.",
    details: ["Questions d'assise ou de posture", "Demandes particulières ou sur mesure", "Pas d'obligation d'achat à cette étape"],
  },
  {
    number: 3,
    title: "Validez votre commande",
    subtitle: "Devis clair & prix confirmé avant fabrication",
    desc: "Après échange, nous vous confirmons le modèle, les éventuelles personnalisations, le montant exact et les modalités de commande.",
    details: ["Devis transparent sans frais cachés", "Règlement par virement bancaire ou PayPal", "Validation formelle de votre commande"],
  },
  {
    number: 4,
    title: "Votre zafu est fabriqué",
    subtitle: "Confection artisanale à Montpellier",
    desc: "Une fois votre commande confirmée, votre zafu est confectionné à la main à l'atelier de Montpellier selon la méthode traditionnelle transmise depuis 1982, puis expédié avec suivi.",
    details: ["Fabrication artisanale sur commande", "Kapok végétal 100 % naturel", "Expédition Mondial Relay ou domicile avec suivi"],
  },
];

export interface CustomizationOption {
  level: string;
  title: string;
  choices: string;
  adviceRequired: boolean;
}

export const customizationHierarchy: CustomizationOption[] = [
  { level: "1", title: "Modèle", choices: "Taille S, M, L ou Sur mesure", adviceRequired: false },
  { level: "2", title: "Dimensions", choices: "28 × 13 cm, 30 × 15 cm, 32 × 17 cm, ou sur mesure", adviceRequired: false },
  { level: "3", title: "Hauteur d'assise", choices: "13 cm (basse), 15 cm (standard), 17 cm (haute), ou personnalisée", adviceRequired: false },
  { level: "4", title: "Toile & Coloris", choices: "Noir traditionnel de dojo, Rouge bordeaux, Bleu nuit, Vert, Marron ou toiles atelier", adviceRequired: false },
  { level: "5", title: "Rembourrage", choices: "Plein en kapok végétal naturel (ferme) ou housse vide seule", adviceRequired: false },
  { level: "6", title: "Options spéciales", choices: "Poignée en lin naturel, broderie de dojo, gabarit morphologique atypique", adviceRequired: true },
];

// Dimensions et caractéristiques des gabarits
export const sizes: ZafuSize[] = [
  { 
    name: "S", 
    width: 28, 
    height: 13, 
    desc: "Souplesse ou voyage", 
    detail: "28 × 13 cm",
    guideDesc: "Recommandée pour les personnes souples, assises en plein lotus, ou pour emporter en voyage et sesshin grâce à son encombrement réduit.",
    isStandard: false,
    img: "/zafu-bleu-fonce.webp",
    alt: "Zafu artisanal bleu foncé taille S pour pratiquant souple ou déplacement",
    recommendedFor: "Assise en lotus complet, pratiquants très souples ou pratique nomade.",
  },
  { 
    name: "M", 
    width: 30, 
    height: 15, 
    desc: "Standard recommandé", 
    detail: "30 × 15 cm",
    guideDesc: "La taille de référence transmise par maître Deshimaru. Convient à la grande majorité des gabarits adultes pour une assise quotidienne stable.",
    isStandard: true,
    img: "/zafu-plein-noir.webp",
    alt: "Zafu artisanal noir traditionnel taille M en toile de coton et kapok naturel",
    recommendedFor: "Majorité des adultes (débutants ou réguliers), posture en demi-lotus ou tailleur.",
  },
  { 
    name: "L", 
    width: 32, 
    height: 17, 
    desc: "Assise haute / grand gabarit", 
    detail: "32 × 17 cm",
    guideDesc: "Recommandée pour les personnes de grande taille (> 1m80) ou ressentant une raideur dans les hanches nécessitant une surélévation.",
    isStandard: false,
    img: "/zafu-plein-marron.webp",
    alt: "Zafu artisanal marron taille L avec surélévation pour grand gabarit",
    recommendedFor: "Personnes mesurant plus de 1m80, raideurs du bassin, genoux sensibles ou posture seiza.",
  },
  { 
    name: "Sur mesure", 
    width: null, 
    height: null, 
    desc: "Dimensions au choix", 
    detail: "Sur mesure",
    guideDesc: "Confection personnalisée selon vos indications morphologiques ou votre pratique. Précisez vos souhaits lors de votre message.",
    isStandard: false,
    img: "/zafus-pile.webp",
    alt: "Zafus de méditation confectionnés sur mesure — Atelier Myokan",
    recommendedFor: "Statures spécifiques (< 1m50, > 1m90), besoins d'assise particuliers ou conseils personnalisés.",
  },
];

// Remplissages disponibles
export const types: ZafuType[] = [
  { 
    label: "Plein (avec kapok)", 
    val: "Plein", 
    sublabel: "Prêt à l'assise",
    note: "Rembourrage végétal naturel en kapok, dense et traditionnel." 
  },
  { 
    label: "Vide (à remplir)", 
    val: "Vide", 
    sublabel: "Housse seule",
    note: "Housse en pur coton avec fente intérieure si vous possédez du kapok." 
  },
];

// Couleurs de base de l'atelier
export const baseColors: ZafuColor[] = [
  { name: "Noir", hex: "#000000", img: "/zafu-plein-noir.webp", checkColor: "#FFFFFF" },
  { name: "Rouge", hex: "#B91C1C", img: "/zafu-plein-rouge.webp", checkColor: "#FFFFFF" },
  { name: "Vert", hex: "#15803D", img: "/zafu-plein-vert.webp", checkColor: "#FFFFFF" },
  { name: "Bleu", hex: "#1D4ED8", img: "/zafu-plein-bleu.webp", checkColor: "#FFFFFF" },
  { name: "Marron", hex: "#4B2E1E", img: "/zafu-plein-marron.webp", checkColor: "#FFFFFF" },
];

// Galerie photo du savoir-faire et des confections
export const galleryImages: ZafuGalleryImage[] = [
  { 
    src: "/veronique-atelier.webp", 
    alt: "Véronique Myokan Harruis dans son atelier de couture à Montpellier avec ses zafus artisanaux",
    title: "L'atelier de confection",
    caption: "Véronique Myokan Harruis confectionne chaque zafu à la demande dans son atelier de Montpellier depuis 1982.",
    category: "Atelier"
  },
  { 
    src: "/zafu-noir-lin.webp", 
    alt: "Zafu noir traditionnel en toile de coton avec plis latéraux réguliers et poignée de transport en pur lin",
    title: "Poignée en lin pur & toile noire",
    caption: "Finition soignée avec poignée en pur lin naturel sur demande pour le transport en dojo et sesshin.",
    category: "Produit"
  },
  { 
    src: "/zafus-pile.webp", 
    alt: "Empilement de zafus artisanaux de différentes couleurs et gabarits réalisés à l'atelier de Montpellier",
    title: "Confections unitaire à l'atelier",
    caption: "Chaque zafu est façonné individuellement sur commande, garni d'environ 1 kg de kapok naturel végétal.",
    category: "Savoir-faire"
  },
  { 
    src: "/zafu-vide-framboise.webp", 
    alt: "Housse de zafu framboise à plat montrant l'agencement méthodique des plis d'aisance accordéon",
    title: "Patronage et plis d'aisance",
    caption: "Les plis latéraux permettent au coussin de s'élargir sous le poids du pratiquant sans faire souffrir les coutures.",
    category: "Savoir-faire"
  },
  { 
    src: "/zafus-vides-gris.webp", 
    alt: "Série de housses grises découpées et cousues prêtes pour l'étape du garnissage de kapok",
    title: "Housses préparées avant garnissage",
    caption: "Toile 100 % coton épaisse et fente intérieure dotée d'un rabat protecteur pour empêcher toute fuite de fibres.",
    category: "Savoir-faire"
  },
  { 
    src: "/zafu-bleu-fonce.webp", 
    alt: "Zafu artisanal bleu foncé taille S pour assise basse en lotus complet",
    title: "Zafu bleu nuit · Gabarit compact",
    caption: "Format 28 × 13 cm particulièrement adapté aux pratiquants souples et à la mobilité lors des stages.",
    category: "Produit"
  },
  { 
    src: "/zafu-plein-orange.webp", 
    alt: "Zafu orange lumineux garni fermement de kapok végétal naturel",
    title: "Zafu orange · Teinte personnalisée",
    caption: "Exemple de confection personnalisée en toile de coton colorée, alliant fermeté d'assise et éclat.",
    category: "Produit"
  },
  { 
    src: "/zabuton-noir-detail.webp", 
    alt: "Gros plan sur les piqûres d'angle et le capitonnage à la main d'un coussin artisanal Myokan",
    title: "Détail du piquage artisanal",
    caption: "Coutures renforcées au fil haute résistance pour garantir une tenue irréprochable au fil des décennies.",
    category: "Matière"
  },
  { 
    src: "/zabuton-noir-sol.webp", 
    alt: "Coussin de méditation disposé sur un zabuton noir au sol pour l'assise zazen",
    title: "Installation d'assise au sol",
    caption: "Le duo zafu et zabuton constitue le support fondamental de zazen pour ancrer le trépied bassin-genoux.",
    category: "Pratique"
  },
];

/**
 * Logique de recommandation pour le parcours « Quel zafu choisir ? »
 * Basée uniquement sur les caractéristiques réelles des modèles Myokan.
 */
export interface UserAnswers {
  experience?: "debutant" | "quelque_temps" | "regulier" | "ne_sais_pas";
  posture?: "lotus" | "demi_lotus" | "birmane_tailleur" | "seiza" | "ne_sais_pas";
  morphologie?: "tres_souple" | "standard" | "grand_gabarit" | "specifique" | "conseil";
  hauteur?: "basse" | "intermediaire" | "haute" | "ne_sais_pas";
  rembourrage?: "plein" | "vide" | "conseil";
}

export interface RecommendationResult {
  size: "S" | "M" | "L" | "Sur mesure";
  sizeData: ZafuSize;
  price: ZafuPricing;
  fillingType: "Plein" | "Vide";
  isConfident: boolean;
  whyExplanation: string;
  dimensionsSummary: string;
  heightSummary: string;
  fillingSummary: string;
  optionsSummary: string;
  needsArtisanAdvice: boolean;
}

export function evaluateZafuRecommendation(answers: UserAnswers): RecommendationResult {
  const { posture, morphologie, hauteur, rembourrage } = answers;

  // 1. Cas demandant un conseil direct ou morphologie spécifique
  if (morphologie === "specifique" || morphologie === "conseil") {
    const customSize = sizes.find((s) => s.name === "Sur mesure")!;
    return {
      size: "Sur mesure",
      sizeData: customSize,
      price: pricing["Sur mesure"],
      fillingType: rembourrage === "vide" ? "Vide" : "Plein",
      isConfident: false,
      needsArtisanAdvice: true,
      whyExplanation:
        "Votre stature ou vos besoins articulaires spécifiques méritent une confection adaptée. Véronique Myokan Harruis peut ajuster précisément le diamètre et la densité de kapok à votre pratique.",
      dimensionsSummary: "Sur mesure (selon vos mensurations)",
      heightSummary: "Hauteur adaptée à votre morphologie",
      fillingSummary: rembourrage === "vide" ? "Housse seule en coton à remplir" : "Rembourrage kapok naturel sur mesure",
      optionsSummary: "Dimensions personnalisées, poignée lin, toiles au choix",
    };
  }

  // 2. Cas Taille L : Grand gabarit (>1m80), hanches très raides, ou hauteur haute explicite
  if (
    morphologie === "grand_gabarit" ||
    hauteur === "haute" ||
    posture === "seiza"
  ) {
    const sizeL = sizes.find((s) => s.name === "L")!;
    const postureNote =
      posture === "seiza"
        ? "Pour une assise à genoux (seiza), la hauteur de 17 cm dégage bien le bassin."
        : morphologie === "grand_gabarit"
        ? "Pour une stature supérieure à 1m80 ou des hanches peu mobiles, la surélévation de 17 cm est essentielle pour basculer le bassin vers l'avant sans arrondir le dos."
        : "La hauteur haute (17 cm) compense le manque d'ouverture pelvienne et soulage les genoux.";

    return {
      size: "L",
      sizeData: sizeL,
      price: pricing["L"],
      fillingType: rembourrage === "vide" ? "Vide" : "Plein",
      isConfident: true,
      needsArtisanAdvice: false,
      whyExplanation: postureNote,
      dimensionsSummary: "32 cm de diamètre · 17 cm de hauteur",
      heightSummary: "17 cm (assise haute assurant le dégagement du bassin)",
      fillingSummary: rembourrage === "vide" ? "Housse seule en pur coton (30 €)" : "Plein en kapok végétal naturel dense (50 €)",
      optionsSummary: "Disponible en noir dojo, coloris d'atelier ou poignée lin",
    };
  }

  // 3. Cas Taille S : Pratiquant très souple en lotus complet ou hauteur basse explicite
  if (
    (posture === "lotus" && (morphologie === "tres_souple" || hauteur === "basse")) ||
    (hauteur === "basse" && morphologie === "tres_souple")
  ) {
    const sizeS = sizes.find((s) => s.name === "S")!;
    return {
      size: "S",
      sizeData: sizeS,
      price: pricing["S"],
      fillingType: rembourrage === "vide" ? "Vide" : "Plein",
      isConfident: true,
      needsArtisanAdvice: false,
      whyExplanation:
        "Votre grande souplesse permet à vos genoux de se poser aisément au sol en lotus complet. Une hauteur basse de 13 cm stabilise votre trépied d'assise sans cambrure excessive, tout en restant très compacte à transporter.",
      dimensionsSummary: "28 cm de diamètre · 13 cm de hauteur",
      heightSummary: "13 cm (assise basse adaptée aux hanches ouvertes)",
      fillingSummary: rembourrage === "vide" ? "Housse seule en pur coton (25 €)" : "Plein en kapok végétal naturel dense (40 €)",
      optionsSummary: "Idéal pour lotus et usage nomade en sesshin",
    };
  }

  // 4. Cas Standard recommandé : Taille M (30 × 15 cm)
  // Convient pour demi-lotus, tailleur, débutants, morphologie standard (< 1m80)
  const sizeM = sizes.find((s) => s.name === "M")!;
  const isDefaultConfidence = answers.posture === "ne_sais_pas" && answers.morphologie === undefined;
  
  return {
    size: "M",
    sizeData: sizeM,
    price: pricing["M"],
    fillingType: rembourrage === "vide" ? "Vide" : "Plein",
    isConfident: !isDefaultConfidence,
    needsArtisanAdvice: isDefaultConfidence,
    whyExplanation:
      "La Taille M (30 × 15 cm) est le gabarit standard historique transmis par maître Deshimaru. Il offre le compromis optimal de hauteur et de diamètre pour basculer naturellement la 5ᵉ vertèbre lombaire sans raideur.",
    dimensionsSummary: "30 cm de diamètre · 15 cm de hauteur",
    heightSummary: "15 cm (standard recommandé pour 85 % des pratiquants adultes)",
    fillingSummary: rembourrage === "vide" ? "Housse seule en pur coton (27 €)" : "Plein en kapok végétal naturel dense (45 €)",
    optionsSummary: "Standard dojo Soto Zen, coutures renforcées, choix de coloris",
  };
}

// Ré-export du moteur de recommandation moderne pour l'assistant de choix
export { recommendZafu, type GuideAnswers, type RecommendationResult as AssistantRecommendationResult } from "../utils/zafu-recommendation";
