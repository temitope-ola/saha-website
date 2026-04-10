/* ─────────────────────────────────────────────
 *  Saha — version française
 *  Traduction éditoriale de qualité institutionnelle
 *  Modifiez le texte ici ; les composants récupèrent ces objets.
 * ───────────────────────────────────────────── */

export const siteConfig = {
  name: "Saha",
  tagline: "Un acquéreur sérieux pour les entreprises suisses en transition successorale",
  url: "https://saha.ch",
  email: "hello@saha.ch",
  location: "Suisse",
};

/* ── Navigation ─────────────────────────────── */

export const nav = {
  links: [
    { label: "Pour les fondateurs", href: "/founders" },
    { label: "Pour les investisseurs", href: "/investors" },
    { label: "Rejoindre Saha", href: "/join" },
    { label: "À propos", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

/* ── Homepage ───────────────────────────────── */

export const homepage = {
  hero: {
    headline: "Un acquéreur sérieux pour les entreprises\nsuisses en transition successorale",
    subheadline:
      "Saha constitue une entreprise de propriété à long terme pour les entreprises suisses profitables de moins de CHF 10 millions de chiffre d'affaires, où le fondateur prépare son retrait et où la continuité compte autant que le prix.",
    cta: { label: "Discutez confidentiellement de votre succession", href: "/contact" },
    secondaryCta: { label: "Découvrez nos critères", href: "/founders" },
  },

  whatWeAreBuildingSectionLabel: "L'opportunité",
  whatWeAreBuilding: {
    heading: "Conçu pour le segment mal desservi de la succession",
    paragraphs: [
      "Les acquéreurs institutionnels se concentrent sur les opérations plus importantes. Les transactions en dessous de CHF 10 millions de chiffre d'affaires sont trop petites pour le capital-investissement traditionnel, trop complexes pour les investisseurs passifs, et rarement couvertes par les conseils en fusions et acquisitions traditionnels. Les grandes bases de données suisses, telles que les rapports M&A de Deloitte, définissent les PME comme des entreprises de plus de CHF 10 millions — ce qui signifie que le segment clé de Saha n'apparaît même pas dans ces analyses.",
      "Pourtant, ces entreprises sont loin d'être marginales. Elles emploient des équipes fidèles, servent des portefeuilles clients établis et génèrent des flux de trésorerie stables. Elles forment l'épine dorsale des économies locales dans toute la Suisse. Quand leurs fondateurs prennent leur retraite sans plan, la perte est réelle — pour les employés, les clients et les communautés.",
      "Saha existe pour combler ce vide. Nous construisons une entreprise d'acquisition disciplinée spécifiquement pour ce segment : des petites entreprises profitables, en transition successorale, qui sont trop importantes pour disparaître et trop complexes pour des acquéreurs qui ne sont pas disposés à faire le travail.",
    ],
    callout: {
      type: "stat" as const,
      value: "32 %",
      caption: "des propriétaires de PME suisses s'attendent à transférer leur entreprise dans les cinq ans — mais seulement environ 65 % de ces successions sont censées aboutir avec succès",
      source: "Étude 2026 CFB‐HSG / UBS",
    },
  },

  whyNowSectionLabel: "Pourquoi ce segment reste en arrière",
  whyNow: {
    heading: "Trop petit pour la plupart des acquéreurs, trop précieux pour disparaître",
    paragraphs: [
      "Les entreprises de moins de CHF 10 millions de chiffre d'affaires sont trop petites pour la plupart des acquéreurs du marché intermédiaire inférieur, qui ont besoin de plus grandes opérations pour justifier leurs frais généraux et l'économie de leurs fonds.",
      "Elles sont trop dépendantes du fondateur pour les investisseurs passifs, qui manquent d'appétit ou de capacité à gérer une transition pratique avec un propriétaire partant à la retraite.",
      "Et elles sont trop importantes — pour les employés, les clients et les communautés locales — pour simplement fermer quand aucun acquéreur n'apparaît. Le défi n'est pas l'absence de bonnes entreprises. C'est l'absence d'un modèle d'acquéreur conçu pour ce segment.",
    ],
    callout: {
      type: "quote" as const,
      text: "Le problème n'est pas le volume. C'est l'absence de transférabilité.",
    },
  },

  audiences: [
    {
      label: "Pour les fondateurs",
      heading: "Votre entreprise mérite un chapitre sérieux qui suit",
      description:
        "Vous avez créé quelque chose qui compte. Saha offre la continuité — en préservant ce qui fonctionne, en soutenant votre équipe et en portant forward l'entreprise que vous avez passé des décennies à construire.",
      cta: { label: "En savoir plus", href: "/founders" },
    },
    {
      label: "Pour les investisseurs",
      heading: "Une thèse disciplinée dans un segment mal desservi",
      description:
        "Un pipeline de transactions structuré et reproductible, des valorisations d'entrée disciplinées, des transitions pratiques et une détention permanente. Un modèle conçu pour la capitalisation, pas pour la sortie.",
      cta: { label: "En savoir plus", href: "/investors" },
    },
  ],

  buildersStrip: {
    heading: "Aidez à construire Saha depuis le début",
    description:
      "Nous assemblons une petite équipe à la phase de formation. Si vous voulez façonner les premières acquisitions, le processus de diligence et le modèle opérationnel d'une entreprise — c'est du travail précoce et réel.",
    cta: { label: "En savoir plus", href: "/join" },
  },

  modelSectionLabel: "Comment fonctionne le modèle",
  model: {
    heading: "Identifier. Transitionner. Soutenir. Détenir.",
    steps: [
      {
        number: "01",
        title: "Identifier les entreprises transférables",
        description:
          "Nous nous concentrons sur les entreprises suisses profitables et dirigées par un fondateur, de moins de CHF 10 millions de chiffre d'affaires, où la succession est la raison principale de la vente. Au-delà de la santé financière, nous évaluons la transférabilité : demande répétée ou résiliente, concentration client gérable, équipes stables et une transition qui peut être réalistement structurée.",
      },
      {
        number: "02",
        title: "Transitionner avec soin et discipline",
        description:
          "Chaque acquisition suit un processus de transition structuré conçu pour préserver la stabilité : passation avec le fondateur, continuité client, stabilité de la gestion et attention particulière au cours des douze premiers mois. La transition est une capacité, pas seulement une bonne volonté.",
      },
      {
        number: "03",
        title: "Soutenir là où c'est utile",
        description:
          "Au fil du temps, nos entreprises bénéficient de capacités partagées où elles sont utiles : discipline financière, rapports, soutien au recrutement, amélioration des processus et guidance opérationnelle. Le soutien est sélectif, pas industrialisé — les équipes locales restent responsables de la gestion et de la croissance de l'entreprise.",
      },
      {
        number: "04",
        title: "Détenir à long terme",
        description:
          "Nous n'achetons pas pour revendre. La propriété à long terme permet des décisions qui préservent les équipes, la confiance des clients et la qualité de l'entreprise. Chaque entreprise reste dans la famille Saha, et le portefeuille s'accroît en valeur, en connaissance et en force opérationnelle au fil du temps.",
      },
    ],
  },

  differentiatorsSectionLabel: "Pourquoi Saha peut fonctionner dans ce segment",
  differentiators: {
    heading: "Conçu pour les opérations de succession inférieures à CHF 10 millions",
    items: [
      {
        title: "Conçu pour les opérations inférieures à CHF 10 millions",
        description:
          "Nous opérons dans un segment que la plupart des acquéreurs institutionnels évitent. Notre modèle, nos frais généraux et nos attentes sont conçus pour cette taille d'opération dès le départ.",
      },
      {
        title: "Transférabilité avant acquisition",
        description:
          "Nous évaluons si une entreprise peut réalistement survivre à son fondateur avant de l'acquérir. Pas toute bonne entreprise est une bonne acquisition.",
      },
      {
        title: "Discipline de transition pratique",
        description:
          "La transition est la phase de risque le plus élevé et nécessite un jugement humain, une communication et du tact. Nous la traitons comme une capacité centrale, pas une formalité.",
      },
      {
        title: "Propriété à long terme sans sorties forcées",
        description:
          "Pas de calendrier de fonds, pas de pression de sortie. Les décisions sont prises pour la santé de chaque entreprise, pas pour l'apparence d'une revue de portefeuille.",
      },
    ],
  },

  finalCtaFounders: {
    heading: "Réfléchissez-vous à la succession ?",
    description:
      "Si vous êtes un fondateur commençant à réfléchir à ce qui suit pour votre entreprise, nous serions heureux d'avoir une conversation confidentielle.",
    cta: { label: "Discutez de la succession confidentiellement", href: "/contact" },
  },

  finalCtaOther: {
    heading: "Investisseurs et opérateurs",
    description:
      "Si vous êtes un investisseur intéressé par le modèle ou un opérateur qui veut construire à nos côtés, nous serions ravis de vous entendre.",
    cta: { label: "Demander une introduction", href: "/contact" },
  },
};

/* ── For Founders ───────────────────────────── */

export const foundersPage = {
  hero: {
    eyebrow: "Pour les fondateurs",
    headline: "Vous avez créé quelque chose qui mérite d'être préservé",
    subheadline:
      "Saha acquiert les entreprises suisses profitables de moins de CHF 10 millions de chiffre d'affaires auprès des fondateurs qui préparent leur retrait. Quand le moment vient, votre entreprise — et les personnes qui en dépendent — mérite bien plus qu'une transition incertaine.",
  },

  intro: {
    heading: "Nous comprenons ce qui est en jeu",
    paragraphs: [
      "Vendre une entreprise que vous avez construite de rien n'est pas seulement une décision financière. C'est personnel. Votre nom y est apposé. Votre équipe vous fait confiance. Vos clients comptent sur les normes que vous avez établies.",
      "Saha a été construit par des gens qui comprennent cela. Notre modèle est conçu pour honorer ce que vous avez créé — en le préservant, en le soutenant et en le portant forward avec le sérieux que vous avez apporté à la construction.",
    ],
    callout: {
      type: "quote" as const,
      text: "Votre nom y est apposé. Votre équipe vous fait confiance. Nous prenons cela au sérieux.",
    },
  },

  whatWeLookFor: {
    heading: "Un bon ajustement pour Saha",
    description: "Nous recherchons des entreprises qui peuvent réalistement survivre au fondateur :",
    criteria: [
      "Profitables et établies — généralement dirigées par un fondateur pendant de nombreuses années",
      "Chiffre d'affaires généralement inférieur à CHF 10 millions",
      "La succession ou la retraite est la raison principale de l'envisagement d'une vente",
      "Demande répétée ou résiliente — pas basée sur des projets ou des revenus ponctuels",
      "Concentration client gérable — pas dépendante d'un seul contrat",
      "Une équipe stable en place avec la capacité opérationnelle au-delà du fondateur",
      "Un chemin de transition réaliste qui peut être structuré et exécuté",
    ],
    callout: {
      type: "quote" as const,
      text: "Nous recherchons des entreprises qui peuvent survivre au fondateur — pas seulement de bonnes entreprises à un bon prix.",
    },
  },

  notAFit: {
    heading: "Généralement pas un bon ajustement",
    description: "Nous sommes sélectifs par design. Les situations suivantes sont généralement hors de notre champ d'application :",
    criteria: [
      "Entreprises où les revenus dépendent principalement des relations personnelles ou de la capacité commerciale du fondateur",
      "Situations de détresse ou de redressement nécessitant une restructuration immédiate",
      "Dépendance élevée envers un seul client ou contrat",
      "Modèles de revenus hautement basés sur des projets ou imprévisibles",
      "Entreprises où la transition ne peut pas être réalistement structurée dans un délai raisonnable",
      "Créneaux structurellement en déclin sans viabilité à long terme",
    ],
  },

  founderExpectations: {
    heading: "Ce que les fondateurs peuvent attendre de nous",
    items: [
      {
        title: "Votre entreprise conserve son identité",
        description:
          "Nous préservons le nom, la marque et la présence locale de chaque entreprise que nous acquérons. Votre entreprise continue à opérer en tant qu'elle-même.",
      },
      {
        title: "Votre implication est à vos conditions",
        description:
          "Certains fondateurs préfèrent une transition nette. D'autres choisissent de rester impliqués en tant que conseillers ou à titre partiel. Nous structurons la transition en fonction de vos préférences.",
      },
      {
        title: "Le prix est important, mais pas la seule chose",
        description:
          "Nous offrons des valorisations justes et transparentes. Nous savons aussi que pour de nombreux fondateurs, la continuité pour l'équipe et les clients importe autant que le chiffre.",
      },
      {
        title: "Votre équipe est protégée",
        description:
          "Nous n'acquérons pas d'entreprises pour restructurer les effectifs. Les employés existants, leurs rôles et les relations de travail sont préservés à travers la transition et au-delà.",
      },
    ],
  },

  process: {
    heading: "À quoi ressemble l'engagement avec Saha",
    description:
      "Il n'y a aucune pression et aucune obligation à chaque étape. Nous avançons au rythme qui vous convient.",
    steps: [
      {
        title: "Conversation initiale confidentielle",
        description:
          "Nous commençons par une conversation privée, sans obligation, pour comprendre votre entreprise, vos objectifs et votre calendrier.",
      },
      {
        title: "Évaluation initiale de l'ajustement",
        description:
          "S'il y a un intérêt mutuel, nous évaluons si votre entreprise correspond à notre modèle — rentabilité, transférabilité, stabilité de l'équipe et potentiel de transition.",
      },
      {
        title: "Examen approfondi",
        description:
          "Nous passons du temps à mieux comprendre votre entreprise — opérations, clients, dynamiques d'équipe et rôle du fondateur dans les opérations quotidiennes.",
      },
      {
        title: "Proposition indicative",
        description:
          "Nous présentons une proposition claire et directe. Pas de tactiques de négociation agressives. Pas de surprises de dernière minute. Des conditions justes qui reflètent la valeur de ce que vous avez créé.",
      },
      {
        title: "Diligence raisonnable et planification de la transition",
        description:
          "Diligence raisonnable formelle parallèlement à une planification détaillée de la transition — qui reprend quoi, comment les clients sont gérés et à quoi ressemblent les douze premiers mois.",
      },
      {
        title: "Transition structurée",
        description:
          "Nous exécutons la transition avec soin : passation avec le fondateur, continuité de gestion, communication aux clients et stabilité opérationnelle dès le premier jour.",
      },
    ],
  },

  closingCta: {
    heading: "Votre entreprise mérite une conversation sérieuse",
    description:
      "Si vous commencez à réfléchir à ce qui suit, nous serions heureux d'écouter. Confidentiel, sans obligation et entièrement à vos conditions.",
    cta: { label: "Discutez avec nous de votre entreprise", href: "/contact" },
  },
};

/* ── For Investors ──────────────────────────── */

export const investorsPage = {
  hero: {
    eyebrow: "Pour les investisseurs",
    headline: "Un modèle d'acquisition construit pour\nles opérations de succession suisses plus petites",
    subheadline:
      "Saha se concentre sur les entreprises suisses profitables de moins de CHF 10 millions de chiffre d'affaires, où la succession crée des opportunités mais où le capital conventionnel ne s'engage généralement pas. Nous acquérons, transitionons et détenons — définitivement.",
  },

  thesis: {
    heading: "La thèse d'investissement",
    paragraphs: [
      "La Suisse dispose d'un grand segment, croissant et structurellement mal desservi, d'entreprises profitables dirigées par un fondateur et en transition successorale. Ces entreprises sont souvent bien gérées, générant de la trésorerie et profondément ancrées dans leurs marchés locaux — mais elles se situent en dessous du seuil où la plupart des acquéreurs institutionnels opèrent.",
      "Les grandes bases de données suisses en M&A, telles que les rapports PME de Deloitte, définissent leur limite inférieure à CHF 10 millions de chiffre d'affaires. Tout ce qui est en dessous est effectivement invisible au flux de transactions institutionnelles. Pourtant, l'étude de succession CFB-HSG / UBS estime que 32 % des propriétaires de PME suisses s'attendent à un transfert dans les cinq ans — et seulement environ 65 % de ceux-ci sont censés réussir.",
      "Le vide n'est pas l'absence de bonnes entreprises. C'est l'absence d'acquéreurs conçus spécifiquement pour ce segment. Les transactions inférieures à CHF 10 millions nécessitent des compétences de transition pratiques, de l'empathie envers les fondateurs et la volonté de faire des transactions complexes et plus petites qui ne peuvent pas être standardisées. Saha est construit précisément pour ce travail.",
      "Parce que nous détenons définitivement, nos rendements se composent. Chaque acquisition affine notre sourcing, notre discipline de transition et nos capacités opérationnelles — rendant la suivante plus efficace et moins risquée.",
    ],
    callout: {
      type: "stat" as const,
      value: "1 propriétaire sur 3",
      caption: "des PME suisses s'attend à un transfert dans les cinq ans — mais le segment en dessous de CHF 10 millions est largement invisible au capital institutionnel",
    },
  },

  mustBeTrue: {
    heading: "Ce qui doit être vrai pour que ce modèle fonctionne",
    description:
      "Nous réfléchissons clairement à nos propres hypothèses. Pour que Saha réussisse, ce qui suit doit être vrai :",
    items: [
      {
        title: "Nous devons acheter des entreprises transférables, pas seulement bon marché",
        description:
          "Un prix bas ne fait pas une bonne acquisition. L'entreprise doit être capable de fonctionner, de conserver les clients et de générer des revenus après le départ du fondateur. La transférabilité est le filtre critique.",
      },
      {
        title: "Les transitions doivent être structurées et spécifiques au fondateur",
        description:
          "Chaque passation est différente. Il n'y a pas de playbook générique. Le succès dépend de la compréhension de ce que le fondateur fait réellement, de qui peut prendre le relais et de comment préserver la confiance des clients et de l'équipe pendant le changement.",
      },
      {
        title: "Le soutien doit être utile sans gonfler les frais généraux",
        description:
          "Les capacités partagées n'ont de sens que si elles aident réellement chaque entreprise. Nous devons éviter de construire des fonctions centrales qui servent la société de portefeuille plus que le portefeuille.",
      },
      {
        title: "Les premières opérations importent de manière disproportionnée",
        description:
          "Les premières acquisitions donnent le ton du sourcing, de la qualité de la transition et de la réputation. Les obtenir correctement est plus important que de les faire rapidement.",
      },
      {
        title: "La discipline compte plus que la vitesse",
        description:
          "Le modèle dépend du fait de dire non plus souvent que oui. Le volume du pipeline n'est pas la contrainte — le jugement et la sélectivité le sont.",
      },
    ],
  },

  willNotBuy: {
    heading: "Ce que nous n'achèterons pas",
    description: "La discipline signifie être explicite sur les limites :",
    items: [
      "Les redressements en détresse nécessitant une restructuration immédiate",
      "Les entreprises dépendantes du fondateur sans chemin de transition réaliste",
      "Les entreprises avec des exigences en dépenses d'investissement élevées qui limitent les flux de trésorerie libres",
      "Les créneaux structurellement en déclin sans viabilité à long terme",
      "Les entreprises trop petites pour soutenir l'économie d'une transition structurée",
    ],
  },

  whereWeAre: {
    heading: "Où nous en sommes",
    paragraphs: [
      "Saha est une entreprise en formation. Nous construisons délibérément : nous assemblons l'équipe centrale, nous structurons la base de capital et nous nous engageons dans les premières conversations d'acquisition. Nous n'avons pas encore réalisé notre première acquisition — par design, pas par retard.",
      "Nous construisons pour la première clôture, pas pour le déploiement de masse. Les premières opérations prouveront la thèse de sourcing, le modèle de transition et la discipline opérationnelle. Tout ce qui suit dépend de bien faire cela.",
    ],
    items: [
      "Équipe centrale en cours d'assemblage",
      "Structure de capital en cours de finalisation",
      "Premières conversations d'acquisition en cours",
      "Incorporation en cours",
      "Construction pour la première clôture, pas l'échelle",
    ],
  },

  whyDifferent: {
    heading: "Pourquoi Saha est différente d'un fonds traditionnel",
    paragraphs: [
      "La plupart des véhicules d'acquisition sont construits autour d'une durée de fonds finie — acheter, améliorer, sortir dans un délai déterminé. Cette structure crée une tension inhérente entre la performance à court terme et la santé de l'entreprise à long terme.",
      "Saha est une société de portefeuille permanente. Nous acquérons des entreprises pour les garder. Nos incitations sont entièrement alignées avec le succès à long terme de chaque entreprise et du portefeuille global. Il n'y a pas de calendrier de sortie, pas de réalisations forcées et pas de pression pour optimiser l'apparence trimestrielle.",
    ],
    callout: {
      type: "quote" as const,
      text: "Nous acquérons des entreprises pour les garder. Nos incitations sont entièrement alignées.",
    },
  },

  closingCta: {
    heading: "Intéressé d'en savoir plus ?",
    description:
      "Nous structurons Saha pour un petit nombre d'investisseurs alignés et à long terme. Si la thèse résonne, nous accueillons une conversation privée pour explorer l'ajustement. La documentation complète est partagée dans les discussions directes.",
    cta: { label: "Questions des investisseurs", href: "/contact" },
  },
};

/* ── Join Saha ──────────────────────────────── */

export const joinPage = {
  hero: {
    eyebrow: "Rejoindre Saha",
    headline: "Construire Saha depuis le début",
    subheadline:
      "Saha est à la phase de formation — avant la première acquisition. Nous assemblons une petite équipe pour façonner le modèle de sourcing, le processus de diligence, la discipline de transition et l'approche opérationnelle. Si vous pensez en décennies et que vous vous souciez de l'artisanat, c'est du travail précoce et réel.",
  },

  whyJoin: {
    heading: "Pourquoi se joindre à ce stade",
    paragraphs: [
      "La plupart des opportunités professionnelles consistent à optimiser au sein des structures existantes. Saha est différente. Nous construisons une entreprise de propriété à long terme pour les entreprises suisses depuis le début — la stratégie, la culture, les systèmes et les valeurs sont tous décidés maintenant.",
      "Les premiers embauchés aideront à façonner le premier modèle d'acquisition, la première transition et le premier playbook opérationnel. C'est du travail pré-première acquisition. Les personnes qui se joignent à ce stade définiront ce que Saha devient.",
    ],
  },

  roles: {
    heading: "Ce dont nous avons besoin",
    description:
      "Nous n'embauchons pas pour des titres de poste. Nous cherchons des personnes avec les bonnes compétences, disposition et ambition pour construire à nos côtés à la phase la plus précoce.",
    profiles: [
      {
        title: "Transaction et diligence",
        description:
          "Des personnes qui peuvent sourcer, évaluer et structurer les acquisitions sur le marché suisse sous-CHF 10 millions. Vous comprenez ce qui rend une petite entreprise transférable, vous pouvez lire les états financiers et évaluer les risques opérationnels, et vous pouvez construire des relations avec les fondateurs et les conseillers.",
      },
      {
        title: "Transition et opérations",
        description:
          "Des personnes qui peuvent intervenir dans les entreprises acquises et les diriger à travers la passation. Vous gérez la sortie du fondateur, stabilisez l'équipe, maintenez les relations avec les clients et définissez la fondation opérationnelle pour la santé à long terme.",
      },
      {
        title: "Finance et infrastructure",
        description:
          "Des personnes qui peuvent construire les rapports financiers, les systèmes administratifs et les processus opérationnels qui soutiennent une famille croissante d'entreprises. Le tissu conjonctif qui rend le modèle fonctionnel.",
      },
    ],
  },

  values: {
    heading: "Ce que nous valorisons",
    items: [
      {
        title: "Pensée à long terme",
        description: "Nous prenons des décisions pour des décennies, pas des trimestres.",
      },
      {
        title: "Artisanat et rigueur",
        description: "Nous nous soucions de faire les choses bien, pas seulement de les faire rapidement.",
      },
      {
        title: "Ambition tranquille",
        description: "Nous visons à construire quelque chose de significatif sans avoir besoin d'en faire grand cas.",
      },
      {
        title: "Empathie et respect",
        description: "Nous travaillons avec des fondateurs, des équipes et des communautés. Les relations comptent.",
      },
      {
        title: "Mentalité de propriétaire",
        description: "Tout le monde qui construit Saha devrait penser et agir comme un propriétaire.",
      },
    ],
  },

  closingCta: {
    heading: "Cela pourrait être pour vous",
    description:
      "Si ce que vous avez lu résonne — même si vous ne correspondez pas parfaitement à l'un des profils ci-dessus — nous aimerions vous entendre. Envoyez un message expliquant qui vous êtes et ce qui vous attire vers Saha.",
    cta: { label: "Contactez-nous", href: "/contact" },
  },
};

/* ── About ──────────────────────────────────── */

export const aboutPage = {
  hero: {
    eyebrow: "À propos de Saha",
    headline: "Pourquoi Saha existe",
    subheadline:
      "Saha a été fondée sur une observation simple : trop de bonnes entreprises suisses disparaissent non pas parce qu'elles échouent, mais parce que leurs fondateurs prennent leur retraite sans voie claire vers l'avenir.",
  },

  story: {
    heading: "Le problème que nous nous sommes efforcés de résoudre",
    paragraphs: [
      "L'économie suisse est construite sur les petites et moyennes entreprises. Beaucoup sont des entreprises profitables et bien gérées avec des équipes fidèles et de fortes réputations locales. Elles forment l'épine dorsale des communautés dans tout le pays.",
      "Mais chaque année, des milliers de ces entreprises font face à un avenir incertain. Leurs fondateurs — souvent les personnes qui les ont construites de rien — atteignent l'âge de la retraite sans plan de succession. Les options sont souvent insatisfaisantes : vendre à un grand acquéreur impersonnel ; tenter une passation précipitée à des successeurs non préparés ; ou simplement fermer.",
      "Saha a été créée pour offrir une meilleure réponse. Nous croyons que les entreprises fortes, profitables et bien gérées ne devraient pas disparaître à cause d'un problème de timing. Elles méritent un propriétaire qui respectera leur histoire, soutiendra leurs équipes et les portera forward avec sérieux et soin.",
    ],
  },

  whyDifferentBuyer: {
    heading: "Pourquoi ce segment a besoin d'un acquéreur différent",
    paragraphs: [
      "Les entreprises de moins de CHF 10 millions de chiffre d'affaires se situent dans un vide structurel. Elles sont trop petites pour la plupart des acquéreurs institutionnels, qui ont besoin de plus grandes opérations pour justifier leur économie. Elles sont trop dépendantes du fondateur pour les investisseurs passifs, qui manquent de volonté ou de capacité à gérer une transition pratique.",
      "Et elles sont trop importantes — pour les employés, les clients et les communautés — pour simplement disparaître quand aucun acquéreur n'apparaît. Ce segment n'a pas besoin de plus de capital. Il a besoin d'un modèle d'acquéreur conçu pour la complexité spécifique des opérations de succession plus petites.",
    ],
  },

  approach: {
    heading: "Notre approche",
    paragraphs: [
      "Nous acquérons des entreprises dans l'intention de les garder. Ce n'est pas une stratégie financière déguisée en intendance — c'est une conviction authentique que la propriété à long terme produit de meilleurs résultats pour les entreprises, leurs personnes et leurs communautés.",
      "Nous fournissons à chaque entreprise une transition structurée, un soutien opérationnel sélectif et la stabilité qui vient d'être partie de quelque chose de plus grand. En retour, chaque entreprise renforce l'ensemble — par le partage des connaissances, la discipline opérationnelle et les avantages composés d'un portefeuille croissant et permanent.",
    ],
  },

  principles: {
    heading: "Ce que nous croyons",
    items: [
      {
        title: "Continuité plutôt que disruption",
        description:
          "Les bonnes entreprises devraient être préservées et renforcées, pas démembrées pour des pièces.",
      },
      {
        title: "Intendance plutôt qu'extraction",
        description:
          "La propriété porte une responsabilité. Nous visons à laisser chaque entreprise plus forte que nous l'avons trouvée.",
      },
      {
        title: "Patience plutôt qu'urgence",
        description:
          "La valeur durable est construite lentement. Nous résistons à la pression d'optimiser pour les résultats à court terme.",
      },
      {
        title: "Clarté plutôt que complexité",
        description:
          "Notre modèle est simple par design. La complexité devrait servir l'entreprise, pas le modèle commercial.",
      },
    ],
  },

  whereWeAreToday: {
    heading: "Où nous en sommes aujourd'hui",
    paragraphs: [
      "Saha est en formation. Nous assemblons l'équipe initiale, nous engageons les cibles d'acquisition précoces et nous structurons la base de capital. C'est délibéré — nous croyons que les premières acquisitions définissent l'entreprise et nous avons l'intention de bien les faire.",
      "Nous construisons pour le long terme. Chaque décision est guidée par une question simple : cela aura-t-il encore du sens dans vingt ans ?",
    ],
  },

  closingCta: {
    heading: "Nous accueillons votre intérêt",
    description:
      "Que vous soyez un fondateur, un investisseur ou quelqu'un qui partage notre vision — nous serions heureux de vous entendre.",
    cta: { label: "Entrez en contact", href: "/contact" },
  },
};

/* ── Contact ────────────────────────────────── */

export const contactPage = {
  hero: {
    eyebrow: "Contact",
    headline: "Commencer une conversation",
    subheadline:
      "Toute relation significative commence par une conversation. Dites-nous un peu sur vous et ce qui vous a amené ici.",
  },

  pathways: [
    {
      id: "founder",
      title: "Je suis un fondateur envisageant la succession",
      description:
        "Si vous réfléchissez au chapitre suivant de votre entreprise, nous serions heureux d'avoir une conversation confidentielle et sans obligation sur la manière dont Saha pourrait être le bon ajustement.",
      fields: [
        { name: "name", label: "Votre nom", type: "text" as const, required: true },
        { name: "email", label: "Adresse e-mail", type: "email" as const, required: true },
        { name: "phone", label: "Numéro de téléphone (optionnel)", type: "tel" as const, required: false },
        { name: "company", label: "Nom de l'entreprise", type: "text" as const, required: false },
        { name: "message", label: "Dites-nous un peu sur votre entreprise et votre réflexion", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "investor",
      title: "Je suis un investisseur",
      description:
        "Nous structurons Saha pour un petit nombre d'investisseurs alignés et à long terme. Nous accueillons les conversations pour explorer l'ajustement.",
      fields: [
        { name: "name", label: "Votre nom", type: "text" as const, required: true },
        { name: "email", label: "Adresse e-mail", type: "email" as const, required: true },
        { name: "firm", label: "Entreprise ou affiliation (optionnel)", type: "text" as const, required: false },
        { name: "message", label: "Qu'est-ce qui vous intéresse à propos de Saha ?", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "builder",
      title: "Je veux construire avec Saha",
      description:
        "Si vous êtes un opérateur, un investisseur ou un entrepreneur intéressé à aider à construire Saha depuis le début, nous aimerions vous entendre.",
      fields: [
        { name: "name", label: "Votre nom", type: "text" as const, required: true },
        { name: "email", label: "Adresse e-mail", type: "email" as const, required: true },
        { name: "linkedin", label: "Profil LinkedIn (optionnel)", type: "url" as const, required: false },
        { name: "message", label: "Qui êtes-vous et qu'est-ce qui vous attire vers Saha ?", type: "textarea" as const, required: false },
      ],
    },
  ],
};

/* ── FAQ ───────────────────────────────────── */

export const faqPage = {
  hero: {
    eyebrow: "FAQ",
    headline: "Questions courantes",
    subheadline:
      "Réponses aux questions que nous entendons le plus souvent de la part des fondateurs, des investisseurs et des futurs membres de l'équipe.",
  },

  groups: [
    {
      label: "Pour les fondateurs",
      items: [
        {
          question: "Comment Saha est-elle différente d'un acheteur de capital-investissement ?",
          answer:
            "Les sociétés de capital-investissement acquièrent généralement des entreprises avec l'intention de les vendre dans un délai de trois à sept ans. Saha acquiert des entreprises pour les garder définitivement. Il n'y a pas de calendrier de sortie, pas de pression à restructurer pour la revente, et aucune incitation à extraire la valeur à court terme. Notre modèle est construit autour de la continuité, pas des transactions.",
        },
        {
          question: "Que se passe-t-il pour mes employés après une vente ?",
          answer:
            "Préserver votre équipe est central à notre approche. Nous n'acquérons pas des entreprises pour réduire les coûts ou restructurer les effectifs. Les employés existants, les rôles et les relations de travail sont maintenus à travers la transition et au-delà. Nous investissons dans l'équipe que vous avez construite.",
        },
        {
          question: "Combien de temps le processus prend-il de la première conversation à la clôture ?",
          answer:
            "Chaque situation est différente, mais un processus typique dure trois à six mois de la conversation initiale à l'achèvement. Nous avançons au rythme qui vous convient — il n'y a aucune pression à précipiter les choses. La première conversation est confidentielle et ne porte aucune obligation.",
        },
        {
          question: "Mon entreprise conservera-t-elle son nom et sa marque ?",
          answer:
            "Oui. Nous préservons l'identité, la marque et la présence locale de chaque entreprise que nous acquérons. Votre entreprise continue à opérer sous son propre nom, sur son propre marché, avec sa propre équipe. Saha fournit du soutien en arrière-plan.",
        },
        {
          question: "Dois-je rester impliqué après la vente ?",
          answer:
            "C'est entièrement à vous. Certains fondateurs préfèrent une transition nette, tandis que d'autres choisissent de rester impliqués en tant que conseiller ou à titre partiel pendant une période. Nous structurons la transition en fonction de vos préférences et de votre calendrier.",
        },
        {
          question: "Quelle taille d'entreprise Saha acquiert-elle généralement ?",
          answer:
            "Nous nous concentrons sur les entreprises suisses profitables et dirigées par un fondateur, généralement en dessous de CHF 10 millions de chiffre d'affaires annuel. Les facteurs les plus importants sont la qualité de l'entreprise, la force de l'équipe et si l'entreprise peut fonctionner réalistement après le départ du fondateur.",
        },
      ],
    },
    {
      label: "Pour les investisseurs",
      items: [
        {
          question: "Quelle est la structure d'investissement de Saha ?",
          answer:
            "Saha est une société de portefeuille permanente, pas un fonds traditionnel avec une durée fixe. Le capital est déployé dans les acquisitions qui sont détenues indéfiniment. Les rendements sont générés par les flux de trésorerie à long terme, la croissance organique et la force opérationnelle composée du portefeuille.",
        },
        {
          question: "Comment Saha génère-t-elle des rendements sans sorties ?",
          answer:
            "Nos rendements proviennent de la nature générant des trésoreries des entreprises que nous acquérons, du réinvestissement des flux de trésorerie libres dans les nouvelles acquisitions et de la croissance organique de chaque entreprise au fil du temps. L'absence de pression de sortie permet des décisions qui optimisent la valeur à long terme plutôt que les métriques à court terme.",
        },
        {
          question: "Quel est le profil de rendement cible ?",
          answer:
            "Nous visons à composer la valeur du portefeuille régulièrement à long terme par la discipline d'acquisition, l'amélioration opérationnelle et la croissance organique. Nous structurons Saha pour un petit nombre d'investisseurs alignés à long terme et partageons la documentation complète dans les discussions privées.",
        },
        {
          question: "Comment Saha gère-t-elle le risque dans le portefeuille ?",
          answer:
            "Le risque est géré par la diversification dans les industries et les géographies en Suisse, les valorisations d'entrée disciplinées, les processus de transition structurés et la surveillance financière partagée avec les systèmes d'alerte précoce. Chaque entreprise opère indépendamment, ce qui limite le risque de contagion.",
        },
        {
          question: "Quel est le commitment d'investissement minimum ?",
          answer:
            "Nous structurons Saha pour un petit nombre d'investisseurs alignés et à long terme. À ce stade, la sélectivité et l'ajustement structurel comptent plus que l'échelle. Les commitments minimums et les conditions sont discutés directement.",
        },
        {
          question: "Pourquoi se concentrer sur les entreprises de moins de CHF 10 millions de chiffre d'affaires ?",
          answer:
            "Ce segment est structurellement mal desservi. La plupart des acquéreurs institutionnels, des conseillers et des bases de données se concentrent au-dessus de CHF 10 millions — les rapports M&A suisses de Deloitte, par exemple, définissent les PME à partir de ce seuil. En dessous, les entreprises profitables en transition successorale existent en grand nombre mais manquent d'un acquéreur conçu à cet effet. C'est le vide que Saha est conçue pour combler.",
        },
      ],
    },
    {
      label: "Pour les constructeurs et l'équipe",
      items: [
        {
          question: "Quel type de personnes Saha recherche-t-elle ?",
          answer:
            "Nous recherchons des personnes qui pensent en décennies, qui se soucient de l'artisanat et qui veulent construire quelque chose qui dure. Les antécédents pertinents incluent les opérations, la finance, le M&A, la gestion générale et la technologie — mais la disposition et l'alignement comptent plus qu'un titre ou un pedigree spécifique.",
        },
        {
          question: "Saha embauche-t-elle pour des rôles spécifiques en ce moment ?",
          answer:
            "Nous sommes à la phase de formation — avant la première acquisition. Nous sommes toujours ouverts à entendre parler de personnes exceptionnelles. Même sans un rôle formel, nous accueillons les introductions de toute personne ressentant un fort alignement avec ce que nous construisons.",
        },
        {
          question: "Où Saha est-elle basée ?",
          answer:
            "Saha est basée en Suisse. Notre équipe travaille dans tout le pays, proche des entreprises que nous acquérons et soutenons. Nous valorisons la présence et la proximité — être proches des équipes et des communautés que nous servons.",
        },
      ],
    },
    {
      label: "Général",
      items: [
        {
          question: "Pourquoi le nom Saha ?",
          answer:
            "Saha est un mot enraciné dans la patience, l'endurance et la capacité à supporter avec soin. Il reflète la mentalité à long terme au cœur de tout ce que nous faisons — acquérir et gérer des entreprises non pas pour un cycle, mais pour une génération.",
        },
        {
          question: "Saha est-elle un fonds ou une entreprise ?",
          answer:
            "Saha est une société de portefeuille permanente. Contrairement à un fonds, il n'y a pas de calendrier de sortie prédéterminé. Les entreprises que nous acquérons deviennent partie de la famille Saha définitivement. Cette structure aligne nos incitations avec la santé à long terme de chaque entreprise que nous possédons.",
        },
        {
          question: "Combien d'entreprises Saha possède-t-elle actuellement ?",
          answer:
            "Saha est en formation. Nous construisons délibérément la fondation — équipe, processus et capital — avant de faire nos premières acquisitions. Nous croyons que bien faire fonctionner le modèle est plus important que de se déplacer rapidement.",
        },
        {
          question: "Comment puis-je vous contacter ?",
          answer:
            "Nous accueillons les conversations des fondateurs, des investisseurs et des futurs membres de l'équipe. Vous pouvez nous joindre par notre page de contact ou en envoyant un e-mail à hello@saha.ch. Chaque demande est traitée avec confidentialité et respect.",
        },
      ],
    },
  ],

  closingCta: {
    heading: "Avez-vous encore des questions ?",
    description:
      "Nous sommes heureux de répondre à tout ce qui n'est pas couvert ici. Contactez-nous et nous vous répondrons rapidement.",
    cta: { label: "Entrez en contact", href: "/contact" },
  },
};

/* ── Privacy ───────────────────────────────── */

export const privacyPage = {
  hero: {
    eyebrow: "Juridique",
    headline: "Politique de confidentialité",
    subheadline: "Comment Saha gère vos informations.",
  },
  sections: [
    {
      heading: "Aperçu",
      body: "Saha respecte votre vie privée et s'engage à protéger les informations personnelles que vous partagez avec nous. Cette page décrit notre approche de la gestion des données. Une politique de confidentialité complète sera publiée ici à mesure que nous formalisons notre documentation juridique.",
    },
    {
      heading: "Informations que nous collectons",
      body: "Quand vous nous contactez via ce site web, nous ne collectons que les informations que vous fournissez volontairement — telles que votre nom, votre adresse e-mail et le contenu de votre message. Nous n'utilisons pas de cookies de suivi ou d'analyses tierces sur ce site.",
    },
    {
      heading: "Comment nous utilisons vos informations",
      body: "Les informations que vous fournissez sont utilisées uniquement pour répondre à votre demande et pour faciliter toute conversation ultérieure. Nous ne vendons pas, ne partageons pas et ne distribuons pas vos données personnelles à des tiers.",
    },
    {
      heading: "Contact",
      body: "Si vous avez des questions sur la manière dont nous gérons vos données, veuillez nous contacter à",
    },
  ],
};

/* ── Terms ──────────────────────────────────── */

export const termsPage = {
  hero: {
    eyebrow: "Juridique",
    headline: "Conditions d'utilisation",
    subheadline: "Conditions régissant votre utilisation de ce site web.",
  },
  sections: [
    {
      heading: "Général",
      body: "Ce site web est exploité par Saha. En accédant à et en utilisant ce site, vous acceptez de vous conformer à ces conditions. Les conditions complètes d'utilisation seront publiées ici à mesure que nous formalisons notre documentation juridique.",
    },
    {
      heading: "Contenu",
      body: "Les informations sur ce site web sont fournies à titre informatif général uniquement. Bien que nous nous efforcions d'assurer l'exactitude, nous ne faisons aucune garantie sur l'exhaustivité, la fiabilité ou l'adéquation des informations présentées.",
    },
    {
      heading: "Propriété intellectuelle",
      body: "Tout le contenu, le design et les matériaux sur ce site web sont la propriété de Saha sauf indication contraire. Vous ne pouvez pas reproduire, distribuer ou utiliser ce contenu sans notre consentement écrit préalable.",
    },
    {
      heading: "Contact",
      body: "Pour des questions sur ces conditions, veuillez nous contacter à",
    },
  ],
};

/* ── Footer ─────────────────────────────────── */

export const footer = {
  tagline: "Un acquéreur sérieux pour les entreprises suisses en transition successorale.",
  columns: [
    {
      title: "Entreprise",
      links: [
        { label: "À propos", href: "/about" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Pour vous",
      links: [
        { label: "Pour les fondateurs", href: "/founders" },
        { label: "Pour les investisseurs", href: "/investors" },
        { label: "Rejoindre Saha", href: "/join" },
      ],
    },
    {
      title: "Juridique",
      links: [
        { label: "Confidentialité", href: "/privacy" },
        { label: "Conditions", href: "/terms" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Saha. Tous droits réservés.`,
  location: "Suisse",
};

/* ── SEO Metadata ──────────────────────────── */

export const metadata = {
  home: {
    title: "Saha — Un acquéreur sérieux pour les entreprises suisses en transition successorale",
    description:
      "Saha acquiert les entreprises suisses profitables de moins de CHF 10 millions de chiffre d'affaires auprès des fondateurs à la retraite, structure les transitions minutieuses et les détient à long terme.",
  },
  founders: {
    title: "Pour les fondateurs — Saha",
    description:
      "Votre entreprise mérite un chapitre sérieux qui suit. Saha acquiert et préserve les entreprises suisses construites par des fondateurs, de moins de CHF 10 millions, avec soin, structure et engagement à long terme.",
  },
  investors: {
    title: "Pour les investisseurs — Saha",
    description:
      "Un modèle d'acquisition discipliné pour le segment mal desservi des opérations de succession suisses en dessous de CHF 10 millions. Détention permanente, transitions structurées, valeur composée.",
  },
  join: {
    title: "Rejoindre Saha — Construire depuis le début",
    description:
      "Saha est à la phase de formation, assemblant une équipe pour construire une entreprise de propriété à long terme pour les entreprises suisses. Rôles en transaction, transition, opérations et finance.",
  },
  about: {
    title: "À propos de Saha — Pourquoi nous existons",
    description:
      "Trop de bonnes entreprises suisses disparaissent quand leurs fondateurs prennent leur retraite. Saha a été créée pour fournir un acquéreur discipliné et à long terme pour le segment de succession mal desservi.",
  },
  contact: {
    title: "Contacter Saha",
    description:
      "Commencez une conversation avec Saha. Que vous soyez un fondateur, un investisseur ou un futur membre de l'équipe — nous serions ravis de vous entendre.",
  },
  faq: {
    title: "FAQ — Saha",
    description:
      "Réponses aux questions courantes sur Saha de la part des fondateurs, investisseurs et futurs membres de l'équipe.",
  },
  privacy: {
    title: "Politique de confidentialité — Saha",
    description: "La politique de confidentialité et les pratiques de gestion des données de Saha.",
  },
  terms: {
    title: "Conditions d'utilisation — Saha",
    description: "Conditions d'utilisation du site web Saha.",
  },
};
