/**
 * Module pur de recommandation pour l'assistant de choix de zafu Myokan.
 * Respecte les critères ergonomiques et traditionnels de l'atelier :
 * S (13 cm), M (15 cm), L (17 cm), ou conseil personnalisé avec l'artisane.
 */

export type ExperienceLevel =
  | "debutant"
  | "regulier"
  | "longtemps"
  | "ne_sais_pas";

export type PostureType =
  | "demi_lotus"
  | "lotus"
  | "seiza"
  | "change"
  | "ne_sais_pas";

export type SituationType =
  | "moins_170"
  | "entre_170_180"
  | "plus_180"
  | "hanches_raides"
  | "tres_souple"
  | "ne_sais_pas";

export interface GuideAnswers {
  experience?: ExperienceLevel;
  posture?: PostureType;
  situation?: SituationType;
}

export type ZafuSize = "S" | "M" | "L" | "Sur mesure";

export interface RecommendationAlternative {
  size: ZafuSize;
  name: string;
  badge: string;
  dimensions: string;
  priceKapok: string;
  reason: string;
  url: string;
}

export interface RecommendationResult {
  isAdviceOnly: boolean;
  size: ZafuSize | "Conseil";
  modelName: string;
  badge: string;
  image: string;
  imageAlt: string;
  dimensions: string;
  height: string;
  fillingDesc: string;
  priceKapok: string;
  priceVide?: string;
  whyTitle: string;
  whyExplanation: string;
  confidence: "high" | "medium" | "low";
  alternatives: RecommendationAlternative[];
  configureUrl: string;
  contactUrl: string;
  orderUrl: string;
  summaryText: string;
}

/**
 * Moteur pur de recommandation.
 * @param answers Les réponses fournies par l'utilisateur aux 3 questions
 */
export function recommendZafu(answers: GuideAnswers): RecommendationResult {
  const { experience, posture, situation } = answers;

  // Libellés lisibles pour le récapitulatif
  const expLabels: Record<ExperienceLevel, string> = {
    debutant: "Je débute",
    regulier: "Pratique régulière",
    longtemps: "Pratique de longue date",
    ne_sais_pas: "Recherche un premier zafu",
  };
  const postureLabels: Record<PostureType, string> = {
    demi_lotus: "Demi-lotus",
    lotus: "Lotus complet",
    seiza: "Seiza (à genoux)",
    change: "Changement de posture",
    ne_sais_pas: "Posture indéterminée",
  };
  const situationLabels: Record<SituationType, string> = {
    moins_170: "Moins de 1,70 m",
    entre_170_180: "Entre 1,70 m et 1,80 m",
    plus_180: "Plus de 1,80 m",
    hanches_raides: "Hanches plutôt raides",
    tres_souple: "Très souple des hanches",
    ne_sais_pas: "Incertaine / spécifique",
  };

  const expText = experience ? expLabels[experience] : "Non précisé";
  const postText = posture ? postureLabels[posture] : "Non précisé";
  const sitText = situation ? situationLabels[situation] : "Non précisé";
  const summaryText = `Pratique : ${expText} · Posture : ${postText} · Morphologie : ${sitText}`;

  // 1. CAS D'INCERTITUDE FORTE :
  // Si posture indéterminée ET situation inconnue, ou que rien n'est précisé
  if (
    (situation === "ne_sais_pas" && (posture === "ne_sais_pas" || !posture)) ||
    (situation === "ne_sais_pas" && experience === "ne_sais_pas")
  ) {
    const contactSubject = encodeURIComponent("Conseil personnalisé pour le choix d'un zafu Myokan");
    const contactBody = encodeURIComponent(
      `Bonjour Véronique,\n\nJ'ai utilisé votre assistant de choix sur le site Myokan mais je n'ai pas de certitude sur la hauteur idéale :\n\n- Pratique : ${expText}\n- Posture envisagée : ${postText}\n- Morphologie : ${sitText}\n\nPourriez-vous me guider vers le modèle le plus adapté à mes besoins ?\n\nMerci beaucoup pour votre accompagnement,\n`
    );

    return {
      isAdviceOnly: true,
      size: "Conseil",
      modelName: "Nous vous conseillons de demander conseil",
      badge: "Conseil personnalisé avec l'artisane",
      image: "/veronique-atelier.webp",
      imageAlt: "Véronique Myokan Harruis dans son atelier à Montpellier, prête à vous conseiller",
      dimensions: "Dimensions personnalisées selon vos besoins",
      height: "Hauteur adaptée à votre corps",
      fillingDesc: "Kapok naturel ou confection spécifique",
      priceKapok: "Sur devis ou prix standard (40 € à 50 €)",
      whyTitle: "Pourquoi demander conseil ?",
      whyExplanation:
        "Votre situation ne permet pas de déterminer une hauteur avec suffisamment de certitude. Véronique peut vous conseiller directement en fonction de votre pratique, de votre souplesse et de votre morphologie.",
      confidence: "low",
      alternatives: [
        {
          size: "M",
          name: "Zafu Standard — Taille M",
          badge: "Choix de référence",
          dimensions: "30 × 15 cm",
          priceKapok: "45 € plein",
          reason: "Le modèle le plus polyvalent si vous souhaitez néanmoins partir sur une taille universelle.",
          url: "/zafus/?taille=M",
        },
      ],
      configureUrl: "/zafus/",
      contactUrl: `mailto:myokan@hotmail.fr?subject=${contactSubject}&body=${contactBody}`,
      orderUrl: "/commander/",
      summaryText,
    };
  }

  // 2. CAS TAILLE L (17 cm) :
  // - Mesure plus de 1,80 m
  // - Hanches plutôt raides
  // - Posture Seiza (à genoux)
  if (
    situation === "plus_180" ||
    situation === "hanches_raides" ||
    posture === "seiza"
  ) {
    let why = "";
    if (posture === "seiza") {
      why =
        "Pour la posture à genoux (seiza), la hauteur de 17 cm posée entre les talons dégage le bassin et évite d'écraser les chevilles. Si vos genoux sont sensibles ou si vous débutez cette posture, ce format offre le soutien le plus stable.";
    } else if (situation === "plus_180") {
      why =
        "Avec une stature de plus de 1,80 m et des segments osseux plus longs, la hauteur de 17 cm et le diamètre élargi de 32 cm permettent à vos genoux de se poser au sol tout en basculant naturellement le sacrum vers l'avant.";
    } else {
      why =
        "Lorsque les hanches sont plutôt raides, une hauteur de 17 cm compense le manque d'ouverture du bassin. Elle permet d'étirer la colonne vertébrale vers le haut sans que le bas du dos ne s'arrondisse.";
    }

    const contactSubject = encodeURIComponent("Demande de conseil : Zafu Taille L");
    const contactBody = encodeURIComponent(
      `Bonjour Véronique,\n\nL'assistant de choix Myokan m'oriente vers le Zafu Taille L (32 × 17 cm) :\n\n- Pratique : ${expText}\n- Posture : ${postText}\n- Morphologie : ${sitText}\n\nPourriez-vous me confirmer ce choix avant commande ?\n\nMerci d'avance,\n`
    );

    return {
      isAdviceOnly: false,
      size: "L",
      modelName: "Zafu Assise Haute — Taille L",
      badge: "Recommandé pour votre profil",
      image: "/zafu-plein-marron.webp",
      imageAlt: "Zafu artisanal marron taille L avec surélévation pour grand gabarit et hanches raides",
      dimensions: "32 cm de diamètre · 17 cm de hauteur",
      height: "17 cm (assise haute)",
      fillingDesc: "Kapok végétal 100 % naturel · Toile pur coton",
      priceKapok: "50 € — zafu plein de kapok",
      priceVide: "30 € — housse vide",
      whyTitle: "Pourquoi le L ?",
      whyExplanation: `${why} Si vous avez des douleurs lombaires particulières ou hésitez avec le M, n'hésitez pas à demander conseil avant de commander.`,
      confidence: "high",
      alternatives: [
        {
          size: "M",
          name: "Zafu Standard — Taille M",
          badge: "Alternative polyvalente",
          dimensions: "30 × 15 cm",
          priceKapok: "45 € plein",
          reason: "Le format intermédiaire classique si votre souplesse pelvienne s'améliore rapidement.",
          url: "/zafus/?taille=M",
        },
      ],
      configureUrl: "/zafus/?taille=L",
      contactUrl: `mailto:myokan@hotmail.fr?subject=${contactSubject}&body=${contactBody}`,
      orderUrl: "/commander/?taille=L",
      summaryText,
    };
  }

  // 3. CAS TAILLE S (13 cm) :
  // - Très souple + lotus complet
  // - Très souple seul
  // - Moins de 1,70 m + posture lotus
  if (
    (situation === "tres_souple" && (posture === "lotus" || posture === "demi_lotus" || posture === "change")) ||
    (situation === "moins_170" && posture === "lotus")
  ) {
    const contactSubject = encodeURIComponent("Demande de conseil : Zafu Taille S");
    const contactBody = encodeURIComponent(
      `Bonjour Véronique,\n\nL'assistant de choix Myokan m'oriente vers le Zafu Souplesse Taille S (28 × 13 cm) :\n\n- Pratique : ${expText}\n- Posture : ${postText}\n- Morphologie : ${sitText}\n\nPourriez-vous me confirmer ce choix avant commande ?\n\nMerci d'avance,\n`
    );

    return {
      isAdviceOnly: false,
      size: "S",
      modelName: "Zafu Souplesse — Taille S",
      badge: "Recommandé pour votre profil",
      image: "/zafu-bleu-fonce.webp",
      imageAlt: "Zafu artisanal bleu foncé taille S pour pratiquant souple en plein lotus",
      dimensions: "28 cm de diamètre · 13 cm de hauteur",
      height: "13 cm (assise basse)",
      fillingDesc: "Kapok végétal 100 % naturel · Toile pur coton",
      priceKapok: "40 € — zafu plein de kapok",
      priceVide: "25 € — housse vide",
      whyTitle: "Pourquoi le S ?",
      whyExplanation:
        "Votre grande souplesse permet à vos genoux de s'ancrer naturellement au sol sans tension dans les aines. Le format S de 13 cm stabilise votre posture sans cambrer les lombaires, tout en restant très compact pour le transport en sesshin.",
      confidence: "high",
      alternatives: [
        {
          size: "M",
          name: "Zafu Standard — Taille M",
          badge: "Hauteur intermédiaire",
          dimensions: "30 × 15 cm",
          priceKapok: "45 € plein",
          reason: "Si vous souhaitez une assise un peu plus haute ou plus polyvalente pour les longues périodes.",
          url: "/zafus/?taille=M",
        },
      ],
      configureUrl: "/zafus/?taille=S",
      contactUrl: `mailto:myokan@hotmail.fr?subject=${contactSubject}&body=${contactBody}`,
      orderUrl: "/commander/?taille=S",
      summaryText,
    };
  }

  // 4. CAS PAR DÉFAUT / STANDARD : TAILLE M (15 cm)
  // - Débutant, régulier, ou pratiquant de longue date
  // - Posture demi-lotus, changement de posture, ou indéterminée
  // - Stature entre 1,70 m et 1,80 m, moins de 1,70 m sans souplesse extrême, ou réponse générale
  const contactSubject = encodeURIComponent("Demande de conseil : Zafu Taille M");
  const contactBody = encodeURIComponent(
    `Bonjour Véronique,\n\nL'assistant de choix Myokan m'oriente vers le Zafu Standard Taille M (30 × 15 cm) :\n\n- Pratique : ${expText}\n- Posture : ${postText}\n- Morphologie : ${sitText}\n\nPourriez-vous me confirmer ce choix avant commande ?\n\nMerci d'avance,\n`
  );

  return {
    isAdviceOnly: false,
    size: "M",
    modelName: "Zafu Standard — Taille M",
    badge: "Le choix le plus polyvalent pour votre profil",
    image: "/zafu-plein-noir.webp",
    imageAlt: "Zafu artisanal noir traditionnel taille M en toile de coton et kapok naturel",
    dimensions: "30 cm de diamètre · 15 cm de hauteur",
    height: "15 cm (hauteur de référence)",
    fillingDesc: "Kapok végétal 100 % naturel · Toile pur coton",
    priceKapok: "45 € — zafu plein de kapok",
    priceVide: "27 € — housse vide",
    whyTitle: "Pourquoi le M ?",
    whyExplanation:
      "Avec votre profil, le format M de 15 cm constitue le choix le plus polyvalent. Il offre une hauteur intermédiaire adaptée à la majorité des pratiques et transmet fidèlement la méthode traditionnelle Soto Zen. Si vous avez des douleurs, une morphologie spécifique ou hésitez entre deux hauteurs, nous vous recommandons de demander conseil avant de commander.",
    confidence: "high",
    alternatives: [
      {
        size: "S",
        name: "Zafu Souplesse — Taille S",
        badge: "Assise basse",
        dimensions: "28 × 13 cm",
        priceKapok: "40 € plein",
        reason: "Pour une assise plus basse, le plein lotus ou un gabarit plus facile à transporter.",
        url: "/zafus/?taille=S",
      },
      {
        size: "L",
        name: "Zafu Assise Haute — Taille L",
        badge: "Surélévation",
        dimensions: "32 × 17 cm",
        priceKapok: "50 € plein",
        reason: "Pour un grand gabarit (> 1,80 m) ou si vos hanches manquent encore de souplesse.",
        url: "/zafus/?taille=L",
      },
    ],
    configureUrl: "/zafus/?taille=M",
    contactUrl: `mailto:myokan@hotmail.fr?subject=${contactSubject}&body=${contactBody}`,
    orderUrl: "/commander/?taille=M",
    summaryText,
  };
}
