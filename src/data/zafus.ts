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
}

// Tarifs indicatifs en euros (hors frais de port)
export const pricing: Record<string, ZafuPricing> = {
  "S": { vide: 25, plein: 40 },
  "M": { vide: 27, plein: 45 },
  "L": { vide: 30, plein: 50 },
  "Sur mesure": { vide: null, plein: null },
};

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

// Galerie photo
export const galleryImages: ZafuGalleryImage[] = [
  { 
    src: "/zafus-pile.webp", 
    alt: "Pile de zafus artisanaux multicolores — Atelier Myokan Montpellier",
    title: "Pile de zafus artisanaux",
    caption: "Confections multicolores empilées à l'atelier" 
  },
  { 
    src: "/zafu-noir-lin.webp", 
    alt: "Zafu de méditation zen noir avec poignée en lin naturel — Atelier Myokan Montpellier",
    title: "Zafu noir & lin naturel",
    caption: "Confection traditionnelle en coton noir avec poignée en pur lin" 
  },
  { 
    src: "/zafus-vides-gris.webp", 
    alt: "Zafus de méditation zen gris prêts à être remplis de kapok",
    title: "Housses grises traditionnelles",
    caption: "Prêtes à recevoir le kapok naturel" 
  },
  { 
    src: "/zafu-bleu-fonce.webp", 
    alt: "Zafu de méditation bleu foncé artisanal confectionné à Montpellier",
    title: "Zafu bleu foncé classique",
    caption: "Tissu 100 % coton épais et coutures renforcées" 
  },
  { 
    src: "/zafu-plein-orange.webp", 
    alt: "Zafu artisanal orange en tissu 100% coton",
    title: "Zafu orange plein",
    caption: "Plis réguliers et maintien ferme de l'assise" 
  },
  { 
    src: "/zafu-vide-framboise.webp", 
    alt: "Housse de zafu vide coloris framboise — Myokan",
    title: "Housse framboise à plat",
    caption: "Plis minutieusement formés selon la tradition" 
  },
  { 
    src: "/zafu-plein-violet-pois.webp", 
    alt: "Zafu de méditation violet à pois de confection artisanale",
    title: "Zafu violet à pois",
    caption: "Création originale sur mesure pour une pratiquante" 
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
