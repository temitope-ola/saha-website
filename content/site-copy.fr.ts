/* ─────────────────────────────────────────────
 *  Saha — version française / Traduction éditoriale de qualité institutionnelle
 *  Contenu centralisé — édité ici, utilisé par tous les composants.
 * ───────────────────────────────────────────── */

export const siteConfig = {
  name: "Saha",
  tagline: "Le repreneur pérenne des PME suisses en transmission",
  url: "https://saha.ch",
  email: "hello@saha.ch",
  location: "Switzerland",
};

export const nav = {
  links: [
    { label: "Fondateurs", href: "/founders" },
    { label: "Investisseurs", href: "/investors" },
    { label: "Rejoindre Saha", href: "/join" },
    { label: "À propos", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export const homepage = {
  hero: {
    headline: "Le repreneur pérenne des\nPME suisses en transmission",
    subheadline:
      "Saha reprend des PME suisses rentables de moins de CHF 10M de chiffre d'affaires pour les détenir dans la durée — en développant les capacités de sourcing, de transmission et d'appui opérationnel qui manquent encore à ce segment.",
    cta: { label: "Engager la conversation", href: "/contact" },
    secondaryCta: { label: "Nos critères", href: "/founders" },
  },

  whatWeAreBuildingSectionLabel: "Pourquoi nous existons",
  whatWeAreBuilding: {
    heading: "Trop de bonnes entreprises disparaissent pour les mauvaises raisons",
    paragraphs: [
      "En Suisse, des milliers d'entreprises rentables, bien dirigées, font face à un avenir incertain — non pas parce qu'elles échouent, mais parce que leurs fondateurs approchent la retraite sans avoir de chemin tracé. Les options sont souvent peu satisfaisantes : vendre à un grand groupe lointain, tenter une transmission précipitée, ou simplement fermer les portes.",
      "La plupart des acquéreurs institutionnels ciblent le haut du marché. Les transactions inférieures à CHF 10M de chiffre d'affaires sont trop petites pour le capital-investissement classique, trop complexes pour les investisseurs passifs, et rarement couvertes par les conseils en fusions et acquisitions traditionnels. Ces entreprises tombent entre les mailles du filet — non pas faute de valeur, mais parce que personne n'a construit un modèle pour elles.",
      "C'est pour cela que Saha existe. Nous construisons une entreprise d'acquisition pensée spécifiquement pour ce segment : des PME petites, rentables, en phase de transmission, qui emploient des équipes fidèles, servent des clients établis et comptent réellement pour leurs communautés.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168 000",
      caption: "PME suisses devraient faire face à une succession d'ici 2030 — mais seulement environ deux tiers de ces transmissions sont censées aboutir",
      source: "Étude 2026 CFB‐HSG / UBS",
    },
  },

  whyNowSectionLabel: "Un vide dans le marché",
  whyNow: {
    heading: "Ces entreprises méritent mieux que de disparaître silencieusement",
    paragraphs: [
      "Sous CHF 10M de chiffre d'affaires, il existe très peu d'acquéreurs disposés à fournir l'effort que ces transactions exigent. Elles sont trop petites pour les fonds de capital-investissement, qui ne peuvent justifier leurs frais généraux. Elles sont trop liées à leurs fondateurs pour les investisseurs qui recherchent une approche passive. Et les transitions sont trop humaines — trop dépendantes de la confiance, des relations et de l'attention — pour être confiées à ceux qui refusent de s'impliquer.",
      "Or ce sont souvent les entreprises qui comptent le plus localement. Elles emploient des collaborateurs présents depuis des années. Elles servent des clients qui en dépendent. Quand elles ferment faute d'acquéreur, la perte est discrète mais bien réelle.",
      "Saha a été créée parce que ce vide ne devrait pas exister. Les bonnes entreprises ne devraient pas disparaître à cause d'un problème de calendrier.",
    ],
    callout: {
      type: "quote" as const,
      text: "Les bonnes entreprises ne devraient pas disparaître à cause d'un problème de calendrier.",
    },
  },

  audiences: [
    {
      label: "Pour les fondateurs",
      heading: "Votre entreprise mérite un prochain chapitre réfléchi",
      description:
        "Vous avez créé quelque chose qui compte — pour votre équipe, vos clients et votre communauté. Saha existe pour le porter de l'avant avec le sérieux et l'attention qu'il mérite.",
      cta: { label: "En savoir plus", href: "/founders" },
    },
    {
      label: "Pour les investisseurs",
      heading: "Un modèle discipliné dans un segment méconnu",
      description:
        "Sourçage reproductible dans un pipeline d'opportunités structuré, évaluations disciplinées à l'entrée, transitions menées avec soin, détention permanente. Conçu pour la composition, non pour les sorties.",
      cta: { label: "En savoir plus", href: "/investors" },
    },
  ],

  buildersStrip: {
    heading: "Aider à construire Saha dès le départ",
    description:
      "Nous assemblons une petite équipe à la phase de création. Si vous voulez façonner les premières acquisitions, le processus de diligence et le modèle opérationnel d'une entreprise — c'est un travail précoce et substantiel.",
    cta: { label: "En savoir plus", href: "/join" },
  },

  modelSectionLabel: "Notre approche",
  model: {
    heading: "Identifier les bonnes entreprises. Les accompagner dans la transition. Les conserver pour toujours.",
    steps: [
      {
        number: "01",
        title: "Trouver des entreprises qui peuvent prospérer sans le fondateur",
        description:
          "Nous recherchons des PME suisses rentables, dirigées par leurs fondateurs, avec un chiffre d'affaires inférieur à CHF 10M, où la succession est la raison première de la vente. Au-delà de la santé financière, nous examinons attentivement si l'entreprise peut réellement continuer sans son fondateur — demande stable, équipe capable, concentration clients maîtrisée, et transmission qui peut être structurée avec réflexion.",
      },
      {
        number: "02",
        title: "Gérer la transition avec soin",
        description:
          "Chaque acquisition est suivie d'une transition structurée pour préserver l'essentiel : passation du fondateur, continuité client, stabilité de l'équipe, et attention soutenue pendant les douze premiers mois. C'est là que les opérations réussissent ou échouent, et nous la considérons comme l'une de nos capacités fondamentales.",
      },
      {
        number: "03",
        title: "Fournir le soutien qui aide vraiment",
        description:
          "Au fil du temps, nos entreprises peuvent s'appuyer sur des capacités partagées — discipline financière, reporting, accompagnement en recrutement, amélioration de processus, guidance opérationnelle. Mais ce soutien est toujours sélectif. Les équipes locales restent responsables de la gestion et de la croissance de l'entreprise. Nous aidons là où c'est utile, pas là où c'est commode pour nous.",
      },
      {
        number: "04",
        title: "Détenir pour le long terme",
        description:
          "Nous n'achetons pas les entreprises pour les revendre. La détention à long terme signifie que nous pouvons prendre des décisions qui servent réellement les équipes, les clients et la qualité de l'entreprise — sans la pression d'une échéance de sortie. Chaque société reste dans la famille Saha, et le portefeuille s'en trouve renforcé avec le temps.",
      },
    ],
  },

  moreThanBuyerSectionLabel: "Plus qu'un acquéreur",
  moreThanBuyer: {
    heading: "Plus qu'un acquéreur",
    intro: "Transmettre une petite entreprise ne se résume pas à trouver un acheteur. Ces entreprises ont besoin d'une passation structurée, d'une continuité opérationnelle et d'un accompagnement qui perdure au-delà de la transaction. Saha est conçue pour offrir exactement cela.",
    items: [
      {
        title: "Sourçage systématique",
        description:
          "Nous construisons un mode d'identification plus délibéré des entreprises en phase de transmission — réduisant la dépendance aux intermédiaires et créant un pipeline plus direct, fondé sur les relations.",
      },
      {
        title: "Continuité du leadership",
        description:
          "Au fil du temps, Saha vise à développer un vivier d'opérateurs et de futurs dirigeants formés aux transitions successorales — pour que les entreprises continuent à prospérer après le départ du fondateur.",
      },
      {
        title: "Discipline de transition",
        description:
          "La période de passation est celle où la plupart des opérations réussissent ou échouent. Nous la traitons comme une compétence centrale — structurée, spécifique au fondateur, et affinée à chaque acquisition.",
      },
      {
        title: "Capacités opérationnelles partagées",
        description:
          "Lorsque c'est utile, les entreprises du portefeuille Saha peuvent s'appuyer sur un soutien partagé en finance, reporting, administration et amélioration de processus. Une aide sélective, jamais imposée.",
      },
    ],
    closingLine: "Chaque acquisition renforce le modèle. C'est ainsi que ce segment devient viable à grande échelle.",
  },

  differentiatorsSectionLabel: "Ce qui nous distingue",
  differentiators: {
    heading: "Un modèle pensé pour les petites transmissions",
    steps: [
      {
        number: "01",
        title: "Pensé pour les entreprises sous CHF 10M",
        description:
          "Nous opérons dans un segment que la plupart des acquéreurs institutionnels négligent. Notre modèle, nos coûts et nos attentes sont conçus pour cette taille de transaction dès le départ.",
      },
      {
        number: "02",
        title: "Nous réfléchissons sérieusement à ce qui se passe après le départ du fondateur",
        description:
          "Avant d'acquérir une entreprise, nous évaluons si elle peut réellement continuer sans son fondateur. Pas toute bonne entreprise est une bonne acquisition.",
      },
      {
        number: "03",
        title: "La transition comme discipline centrale",
        description:
          "La période de passation est celle où les choses peuvent le plus mal tourner. Elle exige du jugement humain, de l'empathie et une attention soutenue. Nous traitons la transition comme une discipline, pas une formalité.",
      },
      {
        number: "04",
        title: "Pas de calendrier de sortie, pas de ventes forcées",
        description:
          "Nous détenons durablement. Les décisions sont prises pour la santé de chaque entreprise, non pour respecter une échéance de fonds ou impressionner un bilan trimestriel.",
      },
    ],
  },

  finalCtaFounders: {
    heading: "Vous pensez à la suite ?",
    description:
      "Si vous êtes fondateur et commencez à envisager l'avenir de votre entreprise, nous serions heureux d'une conversation discrète et confidentielle. Aucune obligation, aucune pression.",
    cta: { label: "Engager une conversation", href: "/contact" },
  },

  finalCtaOther: {
    heading: "Investisseurs et futurs membres de l'équipe",
    description:
      "Si vous êtes un investisseur intéressé par le modèle, ou quelqu'un qui veut aider à construire Saha, nous serions ravis de vous entendre.",
    cta: { label: "Nous contacter", href: "/contact" },
  },
};

export const foundersPage = {
  hero: {
    eyebrow: "Pour les fondateurs",
    headline: "Vous avez créé quelque chose qui mérite d'être préservé",
    subheadline:
      "Quand vient le moment de passer le relais, votre entreprise — et les personnes qui en dépendent — mérite bien plus qu'une transmission incertaine. Saha acquiert les PME suisses rentables, sous CHF 10M de chiffre d'affaires, auprès des fondateurs prêts à céder le contrôle, et les conserve pour de bon.",
  },

  intro: {
    heading: "Nous comprenons ce qui est en jeu",
    paragraphs: [
      "Vendre une entreprise que vous avez bâtie de rien n'est pas seulement une décision financière. C'est personnel. Votre nom y est attaché. Votre équipe vous fait confiance. Vos clients comptent sur les normes que vous avez fixées. Trouver le bon propriétaire suivant est l'une des décisions les plus importantes de votre vie.",
      "Saha a été construite par des gens qui comprennent cela. Notre modèle est pensé pour honorer ce que vous avez créé — en le préservant, en le soutenant, et en le portant de l'avant avec le même sérieux que celui que vous avez mis à le bâtir. Nous ne sommes pas là pour rebaptiser, restructurer ou vendre vite. Nous sommes là pour continuer ce que vous avez commencé.",
    ],
    callout: {
      type: "quote" as const,
      text: "Votre nom y est attaché. Votre équipe vous fait confiance. Nous prenons cela au sérieux.",
    },
  },

  whatWeLookFor: {
    heading: "Ce qui constitue une bonne adéquation",
    transitionLine: "Pour nous assurer que nous sommes la bonne solution l'un pour l'autre, voici ce que nous recherchons dans les entreprises que nous acquérons.",
    items: [
      {
        title: "Rentable et établie",
        description:
          "Dirigée par le fondateur depuis de nombreuses années, généralement en-dessous de CHF 10M de chiffre d'affaires. Des entreprises avec un historique solide et une santé financière stable.",
      },
      {
        title: "Une demande stable et récurrente",
        description:
          "Des revenus stables ou récurrents — pas basés sur des projets ou dépendants d'un petit nombre de contrats importants.",
      },
      {
        title: "Une équipe compétente au-delà du fondateur",
        description:
          "Une force opérationnelle qui dépasse le fondateur, avec des personnes déjà en place capables de porter l'entreprise vers l'avant.",
      },
      {
        title: "Un chemin réaliste vers la transmission",
        description:
          "Une transition qui peut être planifiée et exécutée de manière réfléchie sur un délai raisonnable, avec l'implication du fondateur.",
      },
    ],
  },

  founderExpectations: {
    heading: "Ce que vous pouvez attendre de nous",
    steps: [
      {
        number: "01",
        title: "Votre entreprise garde son identité",
        description:
          "Nous préservons le nom, la marque et la présence locale de chaque entreprise que nous acquérons. Votre entreprise continue à fonctionner en tant que telle — sur son marché, avec son équipe.",
      },
      {
        number: "02",
        title: "Votre implication se fait selon vos termes",
        description:
          "Certains fondateurs préfèrent une passation nette. D'autres choisissent de rester impliqués dans un rôle consultatif pendant un certain temps. Nous structurons la transition autour de ce qui vous convient.",
      },
      {
        number: "03",
        title: "Un prix juste — et bien plus qu'un simple chiffre",
        description:
          "Nous offrons des valorisations transparentes et équitables. Nous comprenons aussi que pour beaucoup de fondateurs, savoir que l'équipe et les clients seront bien traités compte autant que le prix.",
      },
      {
        number: "04",
        title: "Votre équipe est protégée",
        description:
          "Nous n'achetons pas les entreprises pour réduire les coûts ou restructurer l'effectif. Les personnes que vous avez recrutées, les rôles que vous avez façonnés, et les relations de travail que vous avez construites sont préservés pendant la transition et après.",
      },
    ],
  },

  process: {
    heading: "À quoi ressemble notre collaboration",
    description:
      "Aucune pression et aucune obligation à aucun stade. Nous avançons au rythme qui vous convient.",
    steps: [
      {
        title: "Une première conversation confidentielle",
        description:
          "Nous commençons par une conversation privée, sans obligation, pour comprendre votre entreprise, votre réflexion et votre calendrier. Rien ne progresse à moins que vous ne le souhaitiez.",
      },
      {
        title: "Évaluer s'il y a une adéquation",
        description:
          "S'il y a un intérêt mutuel, nous prenons le temps de comprendre si votre entreprise correspond à notre modèle — rentabilité, force de l'équipe, stabilité client, et possibilité de structurer la transmission réalistement.",
      },
      {
        title: "Mieux connaître l'entreprise",
        description:
          "Nous passons du temps à comprendre vos opérations, vos clients, la dynamique de l'équipe et le rôle que vous jouez au quotidien. Il s'agit autant de gens que de chiffres.",
      },
      {
        title: "Une proposition claire et équitable",
        description:
          "Nous présentons une proposition directe sans tactiques agressives et sans surprises de dernière minute. Des conditions équitables qui reflètent la valeur de ce que vous avez créé.",
      },
      {
        title: "Diligence et planification de la transition",
        description:
          "Diligence formelle et planification détaillée de la passation — qui prend quoi en charge, comment communiquer avec les clients, et à quoi ressemble la première année.",
      },
      {
        title: "Une transmission soignée et structurée",
        description:
          "Nous exécutons la transition avec soin : passation du fondateur, continuité de l'équipe, communication avec les clients, et attention soutenue à la stabilité opérationnelle dès le premier jour.",
      },
    ],
  },

  closingCta: {
    heading: "Votre entreprise mérite une conversation sérieuse",
    description:
      "Si vous commencez à envisager la suite, nous serions heureux de vous écouter. Tout est confidentiel, il n'y a aucune obligation, et le rythme est entièrement le vôtre.",
    cta: { label: "Nous parler", href: "/contact" },
  },
};

export const investorsPage = {
  hero: {
    eyebrow: "Pour les investisseurs",
    headline: "Un modèle de détention permanente\npour les transmissions suisses",
    subheadline:
      "Saha acquiert les PME suisses rentables, sous CHF 10M de chiffre d'affaires, où la succession crée une opportunité mais où le capital classique s'engage rarement. Nous gérons les transitions avec soin et détenons durablement.",
  },

  thesis: {
    heading: "La thèse d'investissement",
    paragraphs: [
      "La Suisse compte un large et croissant segment d'entreprises rentables dirigées par leurs fondateurs, qui font face à une transmission imminente. Ces entreprises sont souvent bien gérées, génératrices de cash, et profondément enracinées dans leurs marchés locaux — pourtant elles se situent sous le seuil où la plupart des acquéreurs institutionnels opèrent.",
      "Tout ce qui est sous CHF 10M de chiffre d'affaires est effectivement invisible au flux de transactions institutionnel. Pourtant, l'étude de succession CFB-HSG / UBS estime qu'environ un propriétaire de PME suisse sur trois s'attend à une transmission dans les cinq ans — et seulement environ deux tiers de ces transmissions sont censées aboutir avec succès.",
      "Le vide n'est pas dû à l'absence de bonnes entreprises. C'est l'absence d'un modèle d'acquéreur pensé spécifiquement pour ce segment. Ces transactions exigent des compétences de transition menées de près, de l'empathie envers les fondateurs, et la volonté de conduire des opérations complexes et petites qui ne peuvent pas être standardisées. Saha est construite précisément pour ce travail.",
      "Parce que nous détenons durablement, nos rendements se composent. Chaque acquisition affine notre capacité de sourçage, notre discipline de transition et nos capacités opérationnelles — rendant la suivante plus efficace et moins risquée.",
    ],
    callout: {
      type: "stat" as const,
      value: "1 sur 3",
      caption: "propriétaires de PME suisses s'attendent à une transmission dans les cinq ans — mais le segment en dessous de CHF 10M reste largement invisible au capital institutionnel",
    },
  },

  mustBeTrue: {
    heading: "Ce qui doit être vrai pour que ce modèle fonctionne",
    description:
      "Nous réfléchissons clairement à nos propres hypothèses. Pour que Saha réussisse, les conditions suivantes doivent être remplies :",
    steps: [
      {
        number: "01",
        title: "Nous devons acquérir des entreprises transmissibles, pas seulement bon marché",
        description:
          "Un prix bas ne fait pas une bonne acquisition. L'entreprise doit pouvoir fonctionner, conserver ses clients et générer des revenus après le départ du fondateur. La transmissibilité est le filtre critique.",
      },
      {
        number: "02",
        title: "Les transitions doivent être structurées et spécifiques au fondateur",
        description:
          "Chaque passation est différente. Il n'existe pas de playbook générique. Le succès dépend de la compréhension de ce que fait réellement le fondateur, de qui peut prendre la relève, et de comment préserver la confiance des clients et de l'équipe pendant le changement.",
      },
      {
        number: "03",
        title: "Le soutien doit être utile sans gonfler les frais généraux",
        description:
          "Les capacités partagées ne sont utiles que si elles aident réellement chaque entreprise. Nous devons éviter de construire des fonctions centrales qui servent la holding plus que le portefeuille.",
      },
      {
        number: "04",
        title: "Les premières acquisitions importent de manière disproportionnée",
        description:
          "Les premières opérations fixent le ton pour le sourçage, la qualité de la transition et la réputation. Les bien exécuter compte plus que de les faire rapidement.",
      },
      {
        number: "05",
        title: "La discipline compte plus que la vitesse",
        description:
          "Le modèle dépend de dire non plus souvent que oui. Le volume de pipeline n'est pas le facteur limitant — le jugement et la sélectivité le sont.",
      },
    ],
  },

  howModelCompounds: {
    heading: "Comment le modèle se compose",
    paragraphs: [
      "Saha ne se contente pas d'assembler un portefeuille de petites entreprises. Elle construit l'infrastructure qui rend ce segment acquérable et viable à grande échelle.",
      "Cette infrastructure comprend : un processus de sourçage systématique qui réduit la dépendance aux intermédiaires ; un cadre de transmissibilité qui filtre les entreprises capables de survivre à leur fondateur ; un vivier croissant d'opérateurs formés aux transitions successorales ; un playbook opérationnel qui s'améliore à chaque acquisition ; des capacités partagées sélectives en finance, reporting et administration ; et une technologie légère qui améliore l'efficacité interne sans remplacer le jugement humain que la succession exige.",
      "Chaque acquisition rend la suivante moins coûteuse à sourcer, plus rapide à transitionner et mieux accompagnée. C'est la logique de composition derrière le modèle — et ce qui distingue Saha d'une holding bien intentionnée disposant de capital.",
    ],
    callout: {
      type: "stat" as const,
      value: "Long terme",
      caption: "Chaque acquisition renforce la plateforme — sourçage, transition et opérations s'améliorent à chaque opération",
    },
  },

  willNotBuy: {
    heading: "Ce que nous n'achèterons pas",
    description: "La discipline signifie être explicite sur les limites :",
    items: [
      {
        title: "Redressements en détresse",
        description: "Les entreprises nécessitant une restructuration immédiate ou un sauvetage financier sont en dehors de notre modèle.",
      },
      {
        title: "Entreprises dépendantes du fondateur",
        description: "S'il n'existe pas de chemin réaliste vers une passation — si l'entreprise ne peut fonctionner sans le fondateur — ce n'est pas un bon fit.",
      },
      {
        title: "Niches capitalistiques ou en déclin",
        description: "Les entreprises avec de forts besoins en capital limitant le cash-flow libre, ou opérant dans des marchés en déclin structurel sans viabilité à long terme.",
      },
      {
        title: "Trop petite pour une transition structurée",
        description: "Les entreprises qui ne peuvent supporter l'économie d'une transition de propriété réfléchie et bien menée.",
      },
    ],
  },

  whereWeAre: {
    heading: "Où nous en sommes",
    paragraphs: [
      "Saha construit délibérément : assemblage de l'équipe fondatrice, structuration de la base de capital, et engagement dans les premières conversations d'acquisition. Nous n'avons pas encore complété notre première acquisition — par design, pas par retard.",
      "Nous construisons pour la première clôture, pas pour le déploiement massif. Les premières opérations prouveront la thèse de sourçage, le modèle de transition et la discipline opérationnelle. Tout ce qui suivra en dépend.",
    ],
    callout: {
      type: "stat" as const,
      value: "Pré-clôture",
      caption: "Structure de capital en finalisation, équipe fondatrice en place, premières conversations d'acquisition en cours",
    },
  },

  whyDifferent: {
    heading: "Pourquoi Saha est différent d'un fonds classique",
    paragraphs: [
      "La plupart des véhicules d'acquisition sont construits autour d'une vie de fonds finie — acheter, améliorer, sortir dans un horizon défini. Cette structure crée une tension inhérente entre la performance à court terme et la santé de l'entreprise à long terme.",
      "Saha est une holding permanente. Nous acquérons les entreprises pour les conserver. Nos incitations sont totalement alignées sur le succès à long terme de chaque entreprise et du portefeuille global. Il n'y a pas d'horloge de sortie, pas de réalisations forcées, et pas de pression pour optimiser l'apparence trimestrielle.",
    ],
    callout: {
      type: "quote" as const,
      text: "Nous acquérons les entreprises pour les conserver. Nos incitations sont totalement alignées sur le succès à long terme.",
    },
  },

  closingCta: {
    heading: "Intéressé pour en savoir plus ?",
    description:
      "Nous structurons Saha pour un petit nombre d'investisseurs alignés et à long terme. Si la thèse vous plaît, nous accueillons une conversation privée pour explorer l'adéquation.",
    cta: { label: "Demandes d'investisseurs", href: "/contact" },
  },
};

export const joinPage = {
  hero: {
    eyebrow: "Rejoindre Saha",
    headline: "Construire quelque chose dès zéro",
    subheadline:
      "Nous assemblons une petite équipe pour façonner le modèle de sourçage, le processus de diligence, l'approche de transition et la culture opérationnelle — avant notre première acquisition. Si vous pensez en décennies et que vous vous souciez du travail bien fait, c'est un travail précoce et significatif.",
  },

  whyJoin: {
    heading: "Pourquoi nous rejoindre à ce stade",
    paragraphs: [
      "La plupart des opportunités professionnelles consistent à optimiser dans des structures existantes. Saha est différent. Nous construisons une entreprise de détention à long terme pour les entreprises suisses à partir de zéro — la stratégie, la culture, les systèmes, les valeurs sont tous en cours de formation.",
      "Les personnes qui nous rejoignent à ce stade ne feront pas que remplir des rôles — elles définiront ce que Saha devient. La première acquisition, la première transition, le premier playbook opérationnel. C'est le type de travail où tout ce que vous faites compte.",
    ],
  },

  foundingRoles: {
    heading: "Rôles fondateurs ouverts",
    intro: "Nous recrutons pour un rôle fondateur qui façonnera le fonctionnement de Saha dès le premier jour. Ce n'est pas un poste de salarié — c'est un rôle de co-bâtisseur.",
    roles: [
      {
        title: "CTO fondateur — Plateforme & Données",
        description: "Construira la couche opérationnelle derrière Saha : systèmes de sourçage, workflows de diligence, reporting du portefeuille, outils internes et infrastructure de données qui rendent les transitions plus reproductibles et évolutives.",
        ctaLabel: "Exprimer mon intérêt →",
        ctaHref: "/contact",
      },
    ],
    transitionLine: "Au-delà de ce rôle, nous constituons également une petite équipe élargie dans les domaines suivants.",
  },

  roles: {
    heading: "De quoi nous avons besoin",
    description:
      "Nous n'embauchons pas pour des titres de poste. Nous recherchons des personnes ayant les bonnes compétences, la bonne disposition et l'ambition de construire avec nous dès le début.",
    profiles: [
      {
        title: "Deal et diligence",
        description:
          "Des gens qui peuvent sourcer, évaluer et structurer les acquisitions sur le marché suisse sous CHF 10M. Vous comprenez ce qui fait fonctionner une petite entreprise, vous pouvez lire les états financiers et évaluer les risques, et vous savez comment construire la confiance avec les fondateurs et les conseillers.",
      },
      {
        title: "Transition et opérations",
        description:
          "Des gens qui peuvent entrer dans une entreprise acquise et la guider à travers la transmission. Vous gérez la sortie du fondateur, stabilisez l'équipe, maintenez les relations client, et posez les bases de la santé à long terme.",
      },
      {
        title: "Finance et infrastructure",
        description:
          "Des gens qui peuvent construire les rapports financiers, les systèmes administratifs et les processus opérationnels qui tiennent ensemble une famille croissante d'entreprises. L'infrastructure discrète qui rend tout le reste possible.",
      },
    ],
  },

  values: {
    heading: "Ce que nous valorisons",
    items: [
      { title: "Penser à long terme", description: "Nous prenons les décisions pour les décennies, pas les trimestres." },
      { title: "Métier et rigueur", description: "Nous tenons à faire les choses bien, pas seulement rapidement." },
      { title: "Ambition tranquille", description: "Nous visons à construire quelque chose de significatif sans avoir besoin de crier." },
      { title: "Empathie et respect", description: "Nous travaillons avec les fondateurs, les équipes et les communautés. Les relations comptent." },
      { title: "Mentalité de propriétaire", description: "Tous ceux qui construisent Saha devraient penser et agir comme des propriétaires." },
    ],
  },

  closingCta: {
    heading: "C'est peut-être pour vous",
    description:
      "Si ce que vous avez lu résonne — même si vous ne correspondez pas parfaitement à l'un des profils ci-dessus — nous aimerions vous entendre. Dites-nous qui vous êtes et ce qui vous attire chez Saha.",
    cta: { label: "Nous contacter", href: "/contact" },
  },
};

export const aboutPage = {
  hero: {
    eyebrow: "À propos",
    headline: "Pourquoi Saha existe",
    subheadline:
      "Trop d'excellentes entreprises suisses disparaissent non pas parce qu'elles échouent, mais parce que leurs fondateurs prennent leur retraite sans un chemin tracé. Saha a été créée pour changer cela.",
  },

  founderNote: {
    heading: "Un mot du fondateur",
    paragraphs: [
      "J'ai passé des années à travailler au sein de start-ups et d'entreprises à différents stades de croissance — et le schéma que je rencontrais sans cesse était le même. De bonnes entreprises, dirigées par des gens compétents, disparaissant silencieusement non pas parce qu'elles avaient échoué, mais parce qu'aucun chemin clair ne s'offrait à elles.",
      "En Suisse en particulier, cela se manifeste d'une façon bien précise. Des milliers d'entreprises dirigées par leurs fondateurs — rentables, ancrées localement, respectées par leurs équipes et leurs clients — arrivent à un point où le fondateur est prêt à se retirer sans que personne ne soit prêt à prendre la suite. Non pas parce que l'entreprise manque de valeur. Parce que la transaction est complexe, que le montant est trop faible pour les acquéreurs institutionnels, et que la dimension humaine de la passation exige plus que ce que la plupart des acquéreurs sont disposés à donner.",
      "Saha est ma tentative de construire quelque chose pensé spécifiquement pour ce vide — pas seulement comme acquéreur, mais comme modèle. Une façon reproductible d'identifier ces entreprises, de les accompagner dans la transition avec soin, et de les pérenniser sur le long terme. C'est encore tôt. Mais je crois que l'infrastructure derrière ce type de propriété est ce qui a toujours manqué à ce segment.",
    ],
    attribution: "— Temitope Ola, Fondateur",
    bio: "Fondateur-opérateur avec plus de 25 ans d'expérience en création d'entreprises, finance et exécution multi-pays. À l'origine de la vision de sourçage, de la thèse d'acquisition et de l'ambition de construction d'entreprise derrière Saha.",
    callout: {
      type: "quote" as const,
      text: "Les bonnes entreprises ne devraient pas disparaître à cause d'un problème de calendrier.",
    },
  },

  foundingTeam: {
    heading: "L'équipe fondatrice",
    intro: "Saha est assemblée par un petit groupe de personnes aux compétences complémentaires en acquisition, recherche et infrastructure.",
    members: [
      {
        name: "Temitope Ola",
        subtitle: "Fondateur — Stratégie & M&A",
        description: "Vision de sourçage, thèse d'acquisition et construction d'entreprise. Plus de 25 ans d'expérience en création d'entreprises, finance et exécution multi-pays.",
      },
      {
        name: "Liesel Goveas PhD",
        subtitle: "Fondatrice — Recherche & Intelligence d'Acquisition",
        description: "Doctorat en neurosciences, candidate au MBA à l'Université de Saint-Gall. Apporte une méthodologie de recherche rigoureuse et une profondeur analytique au sourçage, à la cartographie de marché et à la diligence.",
      },
      {
        name: "CTO fondateur",
        subtitle: "Plateforme & Données",
        description: "Construit la couche opérationnelle derrière Saha : systèmes de sourçage, workflows de diligence, reporting du portefeuille, outils internes et infrastructure de données qui rendent les transitions plus reproductibles et évolutives.",
        status: "Rôle ouvert — recrutement en cours",
      },
    ],
    closingLine: "Si vous avez l'expérience et la disposition pour nous rejoindre, nous aimerions vous entendre.",
  },

  story: {
    heading: "Le problème que nous nous sommes proposé de résoudre",
    paragraphs: [
      "L'économie suisse est construite sur les petites et moyennes entreprises. Beaucoup sont des entreprises rentables, bien gérées, avec des équipes fidèles et de solides réputations locales. Elles forment l'épine dorsale des communautés à travers le pays.",
      "Mais chaque année, des milliers de ces entreprises font face à un avenir incertain. Leurs fondateurs — souvent les personnes qui les ont construites de rien — atteignent l'âge de la retraite sans plan de succession. Les options sont généralement peu satisfaisantes : vendre à un grand acquéreur impersonnel ; tenter une transmission précipitée à des successeurs non préparés ; ou simplement fermer.",
      "Saha a été créée pour offrir quelque chose de mieux. Nous croyons que les entreprises solides, rentables et bien gérées ne devraient pas disparaître à cause d'un problème de calendrier. Elles méritent un propriétaire qui respectera leur histoire, soutiendra leurs gens, et les portera de l'avant avec sérieux et soin.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168 000",
      caption: "PME suisses devraient faire face à une succession d'ici 2030",
    },
  },

  whyDifferentBuyer: {
    heading: "Pourquoi ces entreprises ont besoin d'un acquéreur différent",
    paragraphs: [
      "Les entreprises sous CHF 10M de chiffre d'affaires se situent dans un vide structurel. Elles sont trop petites pour la plupart des acquéreurs institutionnels, qui ont besoin de tailles de transactions plus grandes pour justifier leurs économies. Elles sont trop liées aux fondateurs pour les investisseurs passifs, qui manquent de volonté ou de capacité à gérer une transition menée de près.",
      "Et elles comptent trop — pour les salariés, pour les clients, pour les communautés — pour simplement disparaître quand aucun acquéreur ne se présente. Ce segment n'a pas besoin de plus de capital. Il a besoin d'un acquéreur qui comprenne la complexité humaine des petites transmissions et soit disposé à faire le travail.",
    ],
    callout: {
      type: "quote" as const,
      text: "Ce segment n'a pas besoin de plus de capital. Il a besoin d'un acquéreur disposé à faire le travail.",
    },
  },

  approach: {
    heading: "Comment nous pensons la propriété",
    paragraphs: [
      "Nous acquérons les entreprises avec l'intention de les conserver. Ce n'est pas une stratégie financière déguisée en intendance — c'est une conviction authentique que la propriété à long terme produit de meilleurs résultats pour les entreprises, leurs gens, et leurs communautés.",
      "Nous fournissons à chaque entreprise une transition soignée, un soutien opérationnel sélectif, et la stabilité qui vient d'appartenir à quelque chose de plus grand. En retour, chaque entreprise renforce l'ensemble — par le partage de connaissances, la discipline opérationnelle, et les avantages composés d'un portefeuille permanent et croissant.",
    ],
    callout: {
      type: "quote" as const,
      text: "Nous acquérons les entreprises avec l'intention de les conserver.",
    },
  },

  principles: {
    heading: "Ce que nous croyons",
    items: [
      { title: "Continuité plutôt que disruption", description: "Les bonnes entreprises devraient être préservées et renforcées, pas démontées." },
      { title: "Intendance plutôt qu'extraction", description: "La propriété porte une responsabilité. Nous visons à laisser chaque entreprise plus forte que nous l'avons trouvée." },
      { title: "Patience plutôt que urgence", description: "La valeur durable se construit lentement. Nous résistons à la pression d'optimiser les résultats à court terme." },
      { title: "Clarté plutôt que complexité", description: "Notre modèle est simple par design. La complexité doit servir l'entreprise, non le modèle économique." },
    ],
  },

  whereWeAreToday: {
    heading: "Où nous en sommes aujourd'hui",
    paragraphs: [
      "Nous construisons sans relâche : l'équipe fondatrice est en place, la structure de capital est en cours de finalisation, et les premières conversations d'acquisition sont en cours. C'est délibéré — nous croyons que les premières acquisitions définissent l'entreprise, et nous avons l'intention de les bien exécuter.",
      "Chaque décision que nous prenons est guidée par une simple question : cela aura-t-il toujours du sens dans vingt ans ?",
    ],
  },

  ambition: "Saha est construite non seulement comme une holding, mais comme un modèle à long terme pour la succession des petites entreprises en Suisse. Nous croyons que la raison pour laquelle ce segment est mal desservi n'est pas l'absence de bonnes entreprises — c'est l'absence d'un acquéreur disposant de l'infrastructure pour faire fonctionner ces opérations. Construire cette infrastructure, progressivement et avec discipline, est la raison d'être de Saha.",

  closingCta: {
    heading: "Nous serions heureux de vous entendre",
    description:
      "Que vous soyez un fondateur réfléchissant à l'avenir, un investisseur explorant le modèle, ou quelqu'un qui partage notre vision — vous êtes le bienvenu de nous contacter.",
    cta: { label: "Nous contacter", href: "/contact" },
  },
};

export const contactPage = {
  hero: {
    eyebrow: "Contact",
    headline: "Engager une conversation",
    subheadline:
      "Toute relation significative commence par une conversation. Dites-nous un peu qui vous êtes et ce qui vous a amené ici.",
  },
  pathways: [
    {
      id: "founder",
      title: "Je suis fondateur et j'envisage une transmission",
      description: "Si vous envisagez le prochain chapitre pour votre entreprise, nous serions heureux d'une conversation confidentielle, sans obligation, sur la possibilité qu'une adéquation existe avec Saha.",
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
      title: "Je suis investisseur",
      description: "Nous structurons Saha pour un petit nombre d'investisseurs alignés et à long terme. Nous accueillons les conversations pour explorer l'adéquation.",
      fields: [
        { name: "name", label: "Votre nom", type: "text" as const, required: true },
        { name: "email", label: "Adresse e-mail", type: "email" as const, required: true },
        { name: "firm", label: "Firme ou affiliation (optionnel)", type: "text" as const, required: false },
        { name: "message", label: "Qu'est-ce qui vous intéresse chez Saha ?", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "builder",
      title: "Je veux construire avec Saha",
      description: "Si vous êtes un opérateur, investisseur ou entrepreneur intéressé à aider à construire Saha dès le départ, nous aimerions vous entendre.",
      fields: [
        { name: "name", label: "Votre nom", type: "text" as const, required: true },
        { name: "email", label: "Adresse e-mail", type: "email" as const, required: true },
        { name: "linkedin", label: "Profil LinkedIn (optionnel)", type: "url" as const, required: false },
        { name: "message", label: "Qui êtes-vous et ce qui vous attire chez Saha ?", type: "textarea" as const, required: false },
      ],
    },
  ],
};

export const faqPage = {
  hero: {
    eyebrow: "FAQ",
    headline: "Questions courantes",
    subheadline: "Réponses aux questions que nous entendons le plus souvent de la part des fondateurs, investisseurs et futurs membres de l'équipe.",
  },
  groups: [
    {
      label: "Pour les fondateurs",
      items: [
        { question: "En quoi Saha est-il différent d'un acquéreur de capital-investissement ?", answer: "Les sociétés de capital-investissement acquièrent généralement les entreprises avec l'intention de les vendre dans trois à sept ans. Saha acquiert les entreprises pour les conserver durablement. Il n'y a pas de calendrier de sortie, pas de pression pour restructurer pour la revente, et aucune incitation à extraire la valeur à court terme. Notre modèle est construit autour de la continuité, pas des transactions." },
        { question: "Qu'advient-il de mes employés après une vente ?", answer: "Préserver votre équipe est central dans notre approche. Nous n'achetons pas les entreprises pour réduire les coûts ou restructurer l'effectif. Les employés existants, les rôles et les relations de travail sont maintenus pendant la transition et après. Nous investissons dans l'équipe que vous avez construite." },
        { question: "Combien de temps faut-il du premier contact à la clôture ?", answer: "Chaque situation est différente, mais un processus typique prend trois à six mois du contact initial à la conclusion. Nous avançons à un rythme qui vous convient — il n'y a aucune pression à se précipiter. La première conversation est confidentielle et sans obligation." },
        { question: "Mon entreprise gardera-t-elle son nom et sa marque ?", answer: "Oui. Nous préservons l'identité, la marque et la présence locale de chaque entreprise que nous acquérons. Votre entreprise continue à fonctionner sous son propre nom, sur son propre marché, avec sa propre équipe. Saha fournit le soutien en arrière-plan." },
        { question: "Dois-je rester impliqué après la vente ?", answer: "C'est entièrement à vous de décider. Certains fondateurs préfèrent une transition nette, tandis que d'autres choisissent de rester impliqués dans un rôle consultatif ou à temps partiel pendant un certain temps. Nous structurons la transition selon vos préférences et votre calendrier." },
        { question: "Quelle taille d'entreprise Saha acquiert-il généralement ?", answer: "Nous nous concentrons sur les PME suisses rentables, dirigées par leurs fondateurs, généralement sous CHF 10M de chiffre d'affaires annuel. Les facteurs les plus importants sont la qualité de l'entreprise, la force de l'équipe, et si l'entreprise peut réalistement continuer à prospérer après le départ du fondateur." },
      ],
    },
    {
      label: "Pour les investisseurs",
      items: [
        { question: "En quoi Saha est-il différent d'une holding patiente disposant de capital ?", answer: "Une holding avec un capital patient est un positionnement. Saha construit l'infrastructure de sourçage, de transition et d'exploitation qui rend les petites opérations de succession réellement viables — pas seulement finançables. Le modèle est conçu pour se composer : chaque acquisition améliore notre processus, renforce notre réseau d'opérateurs et réduit les frictions sur l'opération suivante. C'est la différence entre posséder un ensemble d'entreprises et construire un moteur d'acquisition et d'exploitation." },
        { question: "Quelle est la structure d'investissement de Saha ?", answer: "Saha est une holding permanente, non un fonds classique avec une vie finie. Le capital est déployé dans les acquisitions qui sont détenues indéfiniment. Les rendements sont générés par les flux de trésorerie à long terme, la croissance organique et le renforcement opérationnel composé du portefeuille." },
        { question: "Comment Saha génère-t-il des rendements sans sorties ?", answer: "Nos rendements proviennent de la nature génératrice de cash des entreprises que nous acquérons, du réinvestissement du flux de trésorerie libre dans de nouvelles acquisitions, et de la croissance organique de chaque entreprise au fil du temps. L'absence de pression de sortie permet des décisions qui optimisent la valeur à long terme plutôt que les métriques à court terme. Nous ciblons indicativement une entrée à 3–5× l'EBITDA dans des entreprises génératrices de cash, avec des rendements provenant du flux de trésorerie opérationnel, de la croissance organique et de la composition du portefeuille dans le temps. Nous n'optimisons pas pour un seul indicateur de TRI — nous optimisons pour une valeur durable et composée. La documentation financière complète et la modélisation des rendements sont partagées dans les conversations directes." },
        { question: "Quel est le profil de rendement cible ?", answer: "Nous visons à augmenter durablement la valeur du portefeuille à long terme par la discipline d'acquisition, l'amélioration opérationnelle et la croissance organique. Nous structurons Saha pour un petit nombre d'investisseurs alignés à long terme et partageons la documentation complète dans les discussions privées." },
        { question: "Comment Saha gère-t-il le risque sur le portefeuille ?", answer: "Le risque est géré par la diversification entre les industries et les géographies en Suisse, les valorisations disciplinées à l'entrée, les processus de transition structurés, et la surveillance financière partagée avec les systèmes d'alerte précoce. Chaque entreprise fonctionne de manière indépendante, limitant le risque de contagion." },
        { question: "Quel est l'engagement d'investissement minimum ?", answer: "Nous structurons Saha pour un petit nombre d'investisseurs alignés et à long terme. À ce stade, la sélectivité et l'adéquation structurelle importent plus que l'ampleur. Les engagements minimums et les conditions sont discutés directement." },
        { question: "Pourquoi se concentrer sur les entreprises sous CHF 10M de chiffre d'affaires ?", answer: "Ce segment est structurellement mal desservi. La plupart des acquéreurs institutionnels, conseillers et ensembles de données M&A se concentrent au-dessus de CHF 10M. Sous ce seuil, les entreprises rentables en phase de transmission existent en grand nombre mais manquent d'un acquéreur pensé pour elles. C'est le vide que Saha est pensée pour combler." },
      ],
    },
    {
      label: "Pour les constructeurs et l'équipe",
      items: [
        { question: "Quel type de personnes Saha recherche-t-il ?", answer: "Nous recherchons des gens qui pensent en décennies, qui se soucient du travail bien fait, et qui veulent construire quelque chose qui dure. Les antécédents pertinents incluent opérations, finance, M&A, management général et technologie — mais la disposition et l'alignement comptent plus qu'un titre ou pedigree spécifique." },
        { question: "Saha embauche-t-il des rôles spécifiques en ce moment ?", answer: "Nous sommes au stade de la formation — avant notre première acquisition. Nous sommes toujours ouverts à entendre parler de personnes exceptionnelles. Même sans une ouverture formelle, nous accueillons les introductions de quiconque sent un fort alignement avec ce que nous construisons." },
        { question: "Où Saha est-elle basée ?", answer: "Saha est basée en Suisse. Notre équipe travaille à travers le pays, près des entreprises que nous acquérons et soutenons. Nous valorisons la présence et la proximité — être près des équipes et des communautés que nous servons." },
      ],
    },
    {
      label: "Général",
      items: [
        { question: "Pourquoi le nom Saha ?", answer: "Saha est un mot enraciné dans la patience, l'endurance et la capacité à porter avec soin. Il reflète la mentalité à long terme au cœur de tout ce que nous faisons — acquérir et intendancer les entreprises non pour un cycle, mais pour une génération." },
        { question: "Saha est-il un fonds ou une entreprise ?", answer: "Saha est une holding permanente. Contrairement à un fonds, il n'y a pas de calendrier de sortie prédéterminé. Les entreprises que nous acquérons deviennent partie de la famille Saha durablement. Cette structure aligne nos incitations avec la santé à long terme de chaque entreprise que nous possédons." },
        { question: "Combien d'entreprises Saha possède-t-il actuellement ?", answer: "Saha est en formation. Nous construisons délibérément les fondations — équipe, processus et capital — avant de faire nos premières acquisitions. Nous croyons que bien faire le modèle est plus important que de se précipiter." },
        { question: "Comment puis-je vous contacter ?", answer: "Nous accueillons les conversations de fondateurs, investisseurs et futurs membres de l'équipe. Vous pouvez nous joindre via notre page de contact ou en envoyant un e-mail à hello@saha.ch. Chaque demande est traitée avec confidentialité et respect." },
      ],
    },
  ],
  closingCta: {
    heading: "Vous avez d'autres questions ?",
    description: "Nous sommes heureux de répondre à tout ce qui n'est pas couvert ici. Veuillez nous contacter et nous vous répondrons rapidement.",
    cta: { label: "Nous contacter", href: "/contact" },
  },
};

export const privacyPage = {
  hero: { eyebrow: "Juridique", headline: "Politique de confidentialité", subheadline: "Comment Saha traite vos informations." },
  sections: [
    { heading: "Aperçu", body: "Saha respecte votre vie privée et s'engage à protéger toute information personnelle que vous partagez avec nous. Cette page expose notre approche du traitement des données. Une politique de confidentialité complète sera publiée ici lorsque nous finaliserons notre documentation juridique." },
    { heading: "Informations que nous collectons", body: "Quand vous nous contactez via ce site web, nous collectons uniquement les informations que vous fournissez volontairement — comme votre nom, adresse e-mail et le contenu de votre message. Nous n'utilisons pas de cookies de suivi ni d'analytique tierce sur ce site." },
    { heading: "Comment nous utilisons vos informations", body: "Les informations que vous fournissez sont utilisées uniquement pour répondre à votre demande et faciliter toute conversation ultérieure. Nous ne vendons, partageons ni distribuons vos données personnelles à des tiers." },
    { heading: "Contact", body: "Si vous avez des questions sur la façon dont nous traitons vos données, veuillez nous contacter à" },
  ],
};

export const termsPage = {
  hero: { eyebrow: "Juridique", headline: "Conditions d'utilisation", subheadline: "Conditions régissant votre utilisation de ce site web." },
  sections: [
    { heading: "Général", body: "Ce site web est exploité par Saha. En accédant et en utilisant ce site, vous acceptez de respecter ces conditions. Les conditions complètes d'utilisation seront publiées ici lorsque nous finaliserons notre documentation juridique." },
    { heading: "Contenu", body: "Les informations sur ce site web sont fournies à des fins informatives générales uniquement. Bien que nous nous efforcions d'être précis, nous ne donnons aucune garantie quant à l'exhaustivité, la fiabilité ou la pertinence des informations présentées." },
    { heading: "Propriété intellectuelle", body: "Tout contenu, design et matériaux sur ce site web sont la propriété de Saha sauf indication contraire. Vous ne pouvez pas reproduire, distribuer ou utiliser ce contenu sans notre consentement écrit préalable." },
    { heading: "Contact", body: "Pour des questions sur ces conditions, veuillez nous contacter à" },
  ],
};

export const footer = {
  tagline: "Un acquéreur fiable pour les PME suisses en transmission.",
  columns: [
    { title: "Entreprise", links: [{ label: "À propos", href: "/about" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }] },
    { title: "Pour vous", links: [{ label: "Fondateurs", href: "/founders" }, { label: "Investisseurs", href: "/investors" }, { label: "Rejoindre Saha", href: "/join" }] },
    { title: "Juridique", links: [{ label: "Confidentialité", href: "/privacy" }, { label: "Conditions", href: "/terms" }] },
  ],
  copyright: `© ${new Date().getFullYear()} Saha. Tous droits réservés.`,
  location: "Switzerland",
};

export const metadata = {
  home: { title: "Saha — Un acquéreur fiable pour les PME suisses en transmission", description: "Saha acquiert les PME suisses rentables sous CHF 10M auprès des fondateurs à la retraite, les accompagne avec soin, et les conserve durablement." },
  founders: { title: "Pour les fondateurs — Saha", description: "Vous avez créé quelque chose qui mérite d'être préservé. Saha acquiert et conserve les entreprises suisses dirigées par des fondateurs sous CHF 10M avec soin, structure et engagement à long terme." },
  investors: { title: "Pour les investisseurs — Saha", description: "Un modèle de détention permanente pour le segment mal desservi des transmissions suisses sous CHF 10M. Transitions structurées, sourçage discipliné, composition de valeur." },
  join: { title: "Rejoindre Saha — Construire dès zéro", description: "Saha est au stade de la formation, assemblant une équipe pour construire une entreprise de détention à long terme pour les PME suisses. Rôles en deal, transition, opérations et finance." },
  about: { title: "À propos de Saha — Pourquoi nous existons", description: "Trop de bonnes PME suisses disparaissent quand leurs fondateurs prennent leur retraite. Saha a été créée pour fournir un acquéreur réfléchi et à long terme pour le segment de transmission mal desservi." },
  contact: { title: "Contact Saha", description: "Engager une conversation avec Saha. Que vous soyez fondateur, investisseur ou futur membre de l'équipe — nous serions heureux d'entendre parler de vous." },
  faq: { title: "FAQ — Saha", description: "Réponses aux questions courantes sur Saha de la part des fondateurs, investisseurs et futurs membres de l'équipe." },
  privacy: { title: "Politique de confidentialité — Saha", description: "Politique de confidentialité de Saha et pratiques de traitement des données." },
  terms: { title: "Conditions d'utilisation — Saha", description: "Conditions d'utilisation du site web Saha." },
};
