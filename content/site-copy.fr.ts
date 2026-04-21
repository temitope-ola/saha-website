/* ─────────────────────────────────────────────
 *  Saha - version française / Traduction éditoriale de qualité institutionnelle
 *  Contenu centralisé, édité ici, utilisé par tous les composants.
 * ───────────────────────────────────────────── */

export const siteConfig = {
  name: "Saha",
  tagline: "Temps. Talent. Technologie. Un système de succession structuré pour les petites entreprises suisses.",
  url: "https://saha.ch",
  email: "hello@saha.ch",
  location: "Switzerland",
};

export const nav = {
  links: [
    { label: "Fondateurs", href: "/founders" },
    { label: "Conseillers", href: "/advisors" },
    { label: "Investisseurs", href: "/investors" },
    { label: "Talent", href: "/talent" },
    { label: "À propos", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export const homepage = {
  hero: {
    eyebrow: "Capital permanent suisse",
    headline: "La succession systématique\ndes PME suisses",
    subheadline:
      "Saha acquiert des PME suisses rentables, dirigées par leurs fondateurs, dont le chiffre d'affaires est inférieur à CHF 10 millions, les accompagne avec soin lors de la transition et les fait croître avec constance dans la durée. En parallèle, nous bâtissons la plateforme de sourcing, de transition et de technologie qui rend ce segment viable.",
    cta: { label: "Engager la conversation", href: "/contact" },
    secondaryCta: { label: "Nos critères", href: "/founders" },
  },

  whatWeAreBuildingSectionLabel: "Pourquoi nous existons",
  whatWeAreBuilding: {
    heading: "Trop de bonnes entreprises disparaissent pour les mauvaises raisons",
    paragraphs: [
      "En Suisse, des milliers d'entreprises rentables font face à un avenir incertain. Non pas parce qu'elles échouent, mais parce que leurs fondateurs partent à la retraite sans successeur.",
      "La plupart des acquéreurs institutionnels ciblent le haut du marché. Les entreprises dont le chiffre d'affaires est inférieur à CHF 10 millions sont trop petites pour le capital-investissement classique et souvent trop complexes pour les acquéreurs individuels. Elles passent entre les mailles du filet : non pas faute de valeur, mais parce que personne n'a construit un modèle pour elles.",
      "Saha construit ce modèle : un repreneur suisse discipliné pour les PME rentables dirigées par leurs fondateurs. Nous acquérons de manière sélective, accompagnons le fondateur jusqu'à une transmission réussie, et faisons croître l'entreprise dans la durée.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168 000",
      caption: "PME suisses devraient faire face à une succession d'ici 2030.",
      source: "Étude 2026 CFB\u2011HSG / UBS",
    },
  },

  whyNowSectionLabel: "Ce qui est en jeu",
  whyNow: {
    heading: "Quand aucun acquéreur ne se présente, de bonnes entreprises ferment dans le silence",
    paragraphs: [
      "Lorsqu'une entreprise rentable ferme faute de repreneur, les pertes sont difficiles à mesurer. Les collaborateurs qui y ont bâti leur carrière s'en vont ailleurs. Des relations clients et fournisseurs tissées de longue date se défont. Un savoir-faire, une mémoire d'entreprise et une réputation locale, construits sur des décennies, se dispersent sans bruit.",
      "Pour le fondateur, la perte est personnelle. Le travail était bon, les clients fidèles, l'équipe voulait rester. L'entreprise était saine. Seul un acquéreur a manqué au bon moment.",
      "Ce n'est pas un cas rare. Des dizaines de milliers de PME suisses abordent leur succession au cours de cette décennie, et une part significative devrait fermer pour cette seule raison. C'est cette perte que Saha est bâtie pour prévenir, une acquisition disciplinée à la fois.",
    ],
    callout: {
      type: "stat" as const,
      value: "1 sur 3",
      caption: "Successions de PME suisses devraient échouer : non par manque de bonnes entreprises, mais parce qu'aucun acquéreur ne se présente.",
      source: "Étude 2026 CFB\u2011HSG / UBS",
    },
  },

  audiences: [
    {
      label: "Pour les fondateurs",
      heading: "Votre entreprise mérite un prochain chapitre réfléchi",
      description:
        "Vous avez créé quelque chose qui compte : pour votre équipe, vos clients et votre communauté. Saha existe pour le porter de l'avant avec le sérieux et l'attention qu'il mérite.",
      cta: { label: "En savoir plus", href: "/founders" },
    },
    {
      label: "Pour les investisseurs",
      heading: "Un modèle discipliné dans un segment méconnu",
      description:
        "Sourcing reproductible dans un pipeline d'opportunités structuré, valorisations disciplinées à l'entrée, transitions menées avec soin et détention permanente. Conçu pour un effet de composition, non pour les sorties.",
      cta: { label: "En savoir plus", href: "/investors" },
    },
  ],

  buildersStrip: {
    heading: "Aider à construire Saha dès le départ",
    description:
      "Nous constituons une équipe resserrée pour façonner nos premières acquisitions, notre processus de diligence et notre modèle opérationnel. Pour qui veut construire quelque chose de neuf, c'est un travail précoce et substantiel.",
    cta: { label: "En savoir plus", href: "/talent" },
  },

  modelSectionLabel: "Notre approche",
  model: {
    heading: "Trouver les bonnes entreprises. Mener la transition avec soin. Les faire croître dans la durée.",
    steps: [
      {
        number: "01",
        title: "Des entreprises qui peuvent prospérer au-delà du fondateur",
        description:
          "Nous ciblons des PME suisses rentables, dirigées par leurs fondateurs, dont le chiffre d'affaires est inférieur à CHF 10 millions et où la succession est la raison de la vente. Ce qui compte le plus : une demande régulière, une équipe compétente et une entreprise capable de continuer sereinement une fois le fondateur parti.",
      },
      {
        number: "02",
        title: "Mener la transition avec soin",
        description:
          "Chaque acquisition suit une transition structurée : passation du fondateur, continuité clients et stabilité de l'équipe, avec une attention soutenue durant les douze premiers mois. C'est là que se joue la réussite d'une opération.",
      },
      {
        number: "03",
        title: "Faire croître l'entreprise avec constance",
        description:
          "Une fois l'entreprise stabilisée, nous l'accompagnons dans une croissance régulière sur les douze à vingt-quatre mois suivants. Cela passe généralement par un reporting plus précis, des processus digitalisés, un appui sur les recrutements clés et la préservation du savoir qui reposait jusque-là sur le fondateur.",
      },
      {
        number: "04",
        title: "Détenir dans la durée",
        description:
          "Nous n'achetons pas pour revendre. La détention de long terme nous permet de prendre des décisions qui servent vraiment les équipes, les clients et la qualité de l'entreprise, sans la pression d'un calendrier de sortie. Chaque entreprise reste dans la famille Saha.",
      },
    ],
  },

  moreThanBuyerSectionLabel: "Le modèle opérationnel Saha",
  moreThanBuyer: {
    heading: "Quatre capacités qui se renforcent à chaque acquisition",
    intro: "Un acquéreur disposé ne suffit pas pour la succession d'une petite entreprise. Ces entreprises ont besoin d'une transition structurée, d'un leadership qui perdure au-delà du fondateur, et d'un appui opérationnel réellement utile. Saha est construite autour de quatre capacités pensées pour cela, et appelées à s'affiner à chaque opération.",
    items: [
      {
        title: "Sourcing systématique",
        description:
          "En Suisse, le flux de transactions dans la succession des PME passe par les fiduciaires, les Treuhänder, les notaires et les conseillers locaux. Saha construit la réputation et les relations qui font de nous le repreneur que ces intermédiaires appellent en premier, parce que nous traitons bien leurs clients, concluons avec intégrité et ne faisons perdre de temps à personne.",
      },
      {
        title: "Continuité du leadership",
        description:
          "Lorsqu'un fondateur se retire, la personne qui lui succède détermine la réussite ou l'échec de l'opération. Saha traite la continuité du leadership comme une capacité à part entière : identifier, évaluer, installer et accompagner la bonne personne, qu'elle vienne de l'équipe existante ou de l'extérieur, afin que succession de la propriété et succession du leadership soient pensées ensemble et non en série.",
      },
      {
        title: "Discipline de transition",
        description:
          "C'est dans la transmission que se joue la réussite ou l'échec de la plupart des acquisitions de PME. Nous en faisons une discipline à part entière : un plan structuré sur douze mois couvrant la passation des relations clients et fournisseurs, la continuité de l'équipe, la reprise opérationnelle, et le transfert du savoir propre au fondateur qui partirait sinon avec lui.",
      },
      {
        title: "Force opérationnelle partagée",
        description:
          "Une fois la transition passée, les entreprises de la famille Saha peuvent s'appuyer sur une force partagée en finance, reporting, pricing, recrutement et technologie pour l'efficacité interne. Un appui ciblé, évalué à sa capacité réelle à renforcer l'entreprise.",
      },
    ],
    closingLine: "Chaque acquisition affûte le playbook. De meilleures relations avec les conseillers. De meilleurs modèles de transition. Des binômes de relève mieux ajustés. Des référentiels opérationnels plus solides pour les PME suisses. C'est ainsi que ce segment devient viable à grande échelle.",
  },

  differentiatorsSectionLabel: "Ce qui nous distingue",
  differentiators: {
    heading: "Un modèle pensé pour les petites transmissions",
    steps: [
      {
        number: "01",
        title: "Pensé pour les entreprises sous CHF 10 millions",
        description:
          "Nous opérons dans un segment que la plupart des acquéreurs institutionnels négligent. Notre modèle, nos coûts et nos attentes sont pensés pour cette taille de transaction dès le premier jour.",
      },
      {
        number: "02",
        title: "Pensé pour fonctionner sans le fondateur",
        description:
          "Avant d'acquérir une entreprise, nous évaluons sa capacité réelle à continuer sans son fondateur. Toute bonne entreprise n'est pas nécessairement une bonne acquisition.",
      },
      {
        number: "03",
        title: "La passation comme discipline à part entière",
        description:
          "La période de passation est celle où les choses peuvent le plus mal tourner. Elle exige du jugement humain, de l'empathie et une attention soutenue. Nous traitons la transition comme une discipline, non comme une formalité.",
      },
      {
        number: "04",
        title: "Aucun horizon de sortie, aucune cession forcée",
        description:
          "Nous détenons sans limite de temps. Les décisions sont prises pour la santé de chaque entreprise, non pour respecter l'échéance d'un fonds ni satisfaire un reporting trimestriel.",
      },
    ],
  },

  finalCtaFounders: {
    heading: "Vous pensez à la suite ?",
    description:
      "Si vous êtes fondateur et commencez à envisager l'avenir de votre entreprise, nous serions heureux d'avoir une conversation discrète et confidentielle. Aucune obligation, aucune pression.",
    cta: { label: "Engager une conversation", href: "/contact?pathway=founder" },
  },

  finalCtaOther: {
    heading: "Investisseurs et futurs membres de l'équipe",
    description:
      "Si vous êtes investisseur intéressé par le modèle, ou si vous souhaitez aider à construire Saha, nous serions ravis de vous entendre.",
    cta: { label: "Nous contacter", href: "/contact?pathway=investor" },
  },
};

export const foundersPage = {
  hero: {
    eyebrow: "Pour les fondateurs",
    headline: "Vous avez bâti une entreprise\nqui mérite une transmission soignée",
    subheadline:
      "Quand vient le moment de prendre du recul, votre entreprise mérite un acquéreur qui prend la continuité au sérieux et qui la rendra réellement plus forte avec le temps. Pas la revendre, pas la rebaptiser, pas la démembrer.",
    cta: { label: "Engager une conversation confidentielle", href: "/contact?pathway=founder" },
  },

  intro: {
    heading: "Nous comprenons ce qui est en jeu",
    paragraphs: [
      "Vendre une entreprise que vous avez bâtie à partir de rien n'est pas seulement une décision financière. C'est personnel. Votre nom y est attaché. Votre équipe vous fait confiance. Vos clients comptent sur les standards que vous avez fixés. Trouver le bon prochain propriétaire est l'une des décisions les plus importantes de votre vie.",
      "Saha a été construite par des gens qui le comprennent. Notre modèle est pensé pour honorer ce que vous avez créé : le préserver, le soutenir, et le porter avec le même sérieux que celui que vous y avez mis. Nous ne sommes pas là pour rebaptiser, restructurer ou revendre. Nous sommes là pour continuer ce que vous avez commencé.",
    ],
    callout: {
      type: "quote" as const,
      text: "Votre nom y est attaché. Votre équipe vous fait confiance. Nous en mesurons la responsabilité.",
    },
  },

  whatWeLookFor: {
    heading: "Ce qui fait une bonne adéquation",
    transitionLine: "Nous évaluons chaque entreprise à l'aune de deux filtres simples : sa capacité à continuer réellement au-delà du fondateur (la transmissibilité) et l'existence de leviers concrets pour la rendre plus forte dans les douze à vingt-quatre premiers mois (le potentiel de renforcement). Les deux comptent. Une entreprise transmissible mais sans marge de progression ne suffit pas ; une entreprise à fort potentiel qui ne survivrait pas au départ du fondateur non plus.",
    items: [
      {
        title: "Rentable et établie",
        description:
          "Dirigée par le fondateur depuis de nombreuses années, généralement en dessous de CHF 10 millions de chiffre d'affaires. Des entreprises avec un historique solide et une santé financière stable.",
      },
      {
        title: "Une demande stable et récurrente",
        description:
          "Des revenus stables ou récurrents, non fondés sur des projets ponctuels et peu dépendants d'un petit nombre de grands contrats.",
      },
      {
        title: "Une équipe compétente au-delà du fondateur",
        description:
          "Une force opérationnelle qui dépasse le fondateur, avec des personnes déjà en place capables de porter l'entreprise.",
      },
      {
        title: "Une passation réaliste et structurable",
        description:
          "Une transition qui peut être planifiée et exécutée de manière réfléchie sur un délai raisonnable, avec l'implication du fondateur.",
      },
    ],
  },

  founderExpectations: {
    heading: "Ce à quoi vous pouvez vous attendre",
    steps: [
      {
        number: "01",
        title: "Votre entreprise garde son identité",
        description:
          "Notre préférence marquée est de préserver le nom, la marque et la présence locale de chaque entreprise que nous acquérons. Chaque société continue d'opérer sur son marché, avec sa propre identité.",
      },
      {
        number: "02",
        title: "Votre rôle après la cession vous appartient",
        description:
          "Certains fondateurs préfèrent une passation nette. D'autres choisissent de rester impliqués dans un rôle de conseil pendant un certain temps. Nous structurons la transition autour de ce qui vous convient.",
      },
      {
        number: "03",
        title: "Un prix juste, et bien plus qu'un chiffre",
        description:
          "Nous proposons des valorisations transparentes et équitables. Nous savons aussi que, pour de nombreux fondateurs, savoir que l'équipe et les clients seront bien traités compte autant que le prix.",
      },
      {
        number: "04",
        title: "Nous n'acquérons pas pour restructurer",
        description:
          "L'équipe que vous avez bâtie est au cœur de ce qui rend l'entreprise digne d'être acquise. Les décisions qui concernent les personnes sont prises pour la santé à long terme de l'entreprise, jamais pour un calcul de court terme.",
      },
    ],
  },

  process: {
    heading: "Comment se déroule le processus",
    description:
      "Aucune pression et aucune obligation à aucun stade. Nous avançons au rythme qui vous convient.",
    steps: [
      {
        title: "Une première conversation confidentielle",
        description:
          "Nous commençons par une conversation privée, sans engagement, pour comprendre votre entreprise, votre réflexion et votre calendrier. Rien ne progresse à moins que vous ne le souhaitiez.",
      },
      {
        title: "Évaluer l'adéquation",
        description:
          "S'il y a un intérêt mutuel, nous prenons le temps de comprendre si votre entreprise correspond à notre modèle : rentabilité, force de l'équipe, stabilité client, et possibilité de structurer la transmission de façon réaliste.",
      },
      {
        title: "Approfondir la connaissance de l'entreprise",
        description:
          "Nous passons du temps à comprendre vos opérations, vos clients, la dynamique de l'équipe et votre rôle au quotidien. Il s'agit autant de gens que de chiffres.",
      },
      {
        title: "Une proposition claire et équitable",
        description:
          "Nous présentons une proposition directe, sans tactiques agressives et sans surprises de dernière minute. Des conditions justes qui reflètent la valeur de ce que vous avez créé.",
      },
      {
        title: "Due diligence et planification de la passation",
        description:
          "Diligence formelle et planification détaillée de la passation : qui prend quoi en charge, comment communiquer avec les clients, et à quoi ressemble la première année.",
      },
      {
        title: "Une transmission soignée et structurée",
        description:
          "Nous exécutons la transition avec soin : passation du fondateur, continuité de l'équipe, communication avec les clients et attention soutenue à la stabilité opérationnelle dès le premier jour.",
      },
    ],
  },

  closingCta: {
    heading: "Votre entreprise mérite une discussion approfondie",
    description:
      "Si vous commencez à envisager la suite, nous serions heureux de vous écouter. Tout est confidentiel, il n'y a aucune obligation, et le rythme est entièrement le vôtre.",
    cta: { label: "Nous parler", href: "/contact?pathway=founder" },
  },
};

export const investorsPage = {
  hero: {
    eyebrow: "Pour les investisseurs",
    headline: "La performance par la détention",
    subheadline:
      "Saha cible des entreprises rentables, dirigées par leurs fondateurs, où la succession ouvre une opportunité, la transmissibilité est réelle, et chaque entreprise acquise peut être renforcée de manière mesurable dans les deux années qui suivent la clôture. L'avantage réside dans l'achat rigoureux, la transition bien menée et la construction des capacités opérationnelles qui se composent sur un portefeuille permanent.",
    cta: { label: "Discuter de la thèse", href: "/contact?pathway=investor" },
  },

  thesis: {
    heading: "Un acquéreur conçu pour la succession des PME",
    paragraphs: [
      "La Suisse compte un segment large et croissant d'entreprises rentables, dirigées par leurs fondateurs, qui approchent de la succession. Elles sont bien gérées, génératrices de trésorerie et profondément enracinées dans leurs marchés locaux, mais elles se situent sous le seuil où opèrent la plupart des acquéreurs institutionnels. Tout ce qui est sous CHF 10 millions de chiffre d'affaires est effectivement invisible pour le flux de transactions institutionnel, alors que l'étude de succession CFB-HSG / UBS estime qu'un propriétaire de PME suisse sur trois s'attend à une transmission dans les cinq ans, et que seules deux transmissions sur trois aboutissent.",
      "Le vide ne tient pas à l'absence de bonnes entreprises ; il tient à l'absence d'un modèle d'acquéreur conçu pour ce segment. Ces opérations exigent un savoir-faire de transition mené de près, de l'empathie envers les cédants et la volonté de conduire des opérations complexes et de petite taille, qui ne peuvent pas être standardisées. Saha est construite pour ce travail.",
    ],
    callout: {
      type: "stat" as const,
      value: "1 sur 3",
      caption: "Les propriétaires de PME suisses s'attendent à une transmission dans les cinq ans. Le segment sous CHF 10 millions reste largement invisible pour le capital institutionnel.",
    },
  },

  permanentOwnership: {
    heading: "D'où viennent les rendements",
    paragraphs: [
      "Les rendements prennent deux formes. La première est le flux de trésorerie opérationnel des entreprises acquises, distribué aux investisseurs ou réinvesti dans de nouvelles acquisitions selon la politique établie. La seconde est l'appréciation de la valeur du portefeuille à mesure que les entreprises se composent, reflétée dans l'actif net au fil du temps.",
      "Parce que la structure n'est pas optimisée pour un événement de sortie unique, chaque décision opérationnelle est prise pour la santé à long terme de chaque entreprise, non pour la préparer à la vente. La liquidité reste néanmoins accessible aux investisseurs de long terme par deux voies supplémentaires : refinancement adossé à la valeur du portefeuille à mesure que l'actif net progresse, et transferts secondaires sélectifs au sein du cercle d'investisseurs.",
    ],
  },

  mustBeTrue: {
    heading: "Les conditions de réussite de ce modèle",
    description:
      "Nous réfléchissons clairement à nos propres hypothèses. Pour que Saha réussisse, les énoncés suivants doivent se vérifier :",
    steps: [
      {
        number: "01",
        title: "Acquérir des entreprises transmissibles, et non simplement bon marché",
        description:
          "Un prix bas ne fait pas une bonne acquisition. L'entreprise doit pouvoir fonctionner, conserver ses clients et générer des revenus après le départ du fondateur. La transmissibilité est le filtre critique.",
      },
      {
        number: "02",
        title: "La transmissibilité est le socle; la capacité de renforcement est le plafond",
        description:
          "Une entreprise qui survit au départ du fondateur est une acquisition viable. Une entreprise qui peut en plus être renforcée de manière mesurable dans les vingt-quatre mois suivant la clôture est une bonne acquisition. Nous filtrons sur les deux et renonçons aux entreprises qui échouent à l'un ou l'autre de ces tests, quel que soit le prix.",
      },
      {
        number: "03",
        title: "Chaque passation doit être structurée et adaptée au cédant",
        description:
          "Chaque passation est différente. Il n'existe pas de référentiel générique. Le succès dépend de la compréhension de ce que fait réellement le fondateur, de qui peut prendre la relève et de la manière de préserver la confiance des clients et de l'équipe à travers le changement.",
      },
      {
        number: "04",
        title: "L'appui doit être utile sans alourdir la structure",
        description:
          "Les capacités partagées ne sont utiles que si elles aident réellement chaque entreprise. Nous devons éviter de construire des fonctions centrales qui servent davantage la holding que le portefeuille.",
      },
      {
        number: "05",
        title: "Les premières acquisitions ont un poids déterminant",
        description:
          "Les premières opérations donnent le ton en matière de sourcing, de qualité de transition et de réputation. Les mener correctement compte davantage que de les mener vite.",
      },
      {
        number: "06",
        title: "La rigueur prime sur la rapidité",
        description:
          "Le modèle dépend du fait de dire non plus souvent que oui. Le volume de pipeline n'est pas le facteur limitant; le jugement et la sélectivité le sont.",
      },
    ],
  },

  howModelCompounds: {
    heading: "Une infrastructure, pas un portefeuille",
    paragraphs: [
      "Saha ne construit pas un portefeuille ; Saha construit l'infrastructure qui permet à ce segment de passer à l'échelle sans perdre le savoir-faire que chaque opération exige.",
      "Chaque acquisition rend la suivante moins coûteuse à sourcer, plus rapide à reprendre et plus mesurablement renforcée. Les piliers ci-dessous montrent où se construit cette composition.",
    ],
    pillars: [
      {
        title: "Sourcing via des contreparties de confiance",
        description:
          "Fiduciaires, Treuhänder et conseillers locaux apportent leurs dossiers à Saha avant qu'ils n'atteignent le marché ouvert.",
      },
      {
        title: "Discipline de transmissibilité",
        description:
          "Un filtre pour les entreprises capables de survivre à leur fondateur, appliqué avant toute discussion de prix.",
      },
      {
        title: "Continuité du leadership",
        description:
          "Une pratique nommée pour identifier, évaluer, installer et accompagner le bon dirigeant après le départ du fondateur, en interne ou depuis l'extérieur.",
      },
      {
        title: "Playbook de transition",
        description:
          "Transition structurée, adaptée au fondateur, avec une attention rapprochée pendant la première année.",
      },
      {
        title: "Capacités partagées",
        description:
          "Finance, reporting, discipline tarifaire, appui au recrutement et captation du savoir-faire, offerts aux entreprises du portefeuille qui choisissent d'en bénéficier.",
      },
      {
        title: "Plateforme propriétaire",
        description:
          "Intelligence de sourcing, flux de diligence, outillage de transition et reporting du portefeuille, développés en interne.",
      },
    ],
    callout: {
      type: "stat" as const,
      value: "Long terme",
      caption: "Chaque acquisition renforce la plateforme. Sourcing, transition, leadership et opérations progressent à chaque opération.",
    },
  },

  willNotBuy: {
    heading: "Ce que nous n'acquérons pas",
    description: "La discipline implique de dire clairement nos limites :",
    items: [
      {
        title: "Entreprises en difficulté",
        description: "Les entreprises nécessitant une restructuration immédiate ou un sauvetage financier sont en dehors de notre modèle.",
      },
      {
        title: "Entreprises dépendantes du fondateur",
        description: "S'il n'existe pas de chemin réaliste vers la passation, ou si l'entreprise ne peut pas fonctionner sans le fondateur, ce n'est pas un profil adapté.",
      },
      {
        title: "Secteurs à forte intensité capitalistique ou en déclin structurel",
        description: "Les entreprises aux besoins en capital élevés qui limitent la trésorerie libre, ou opérant sur des marchés en déclin structurel sans viabilité à long terme.",
      },
      {
        title: "Trop petites pour une passation structurée",
        description: "Les entreprises qui ne peuvent pas supporter l'économie d'une transition de propriété réfléchie et bien menée.",
      },
    ],
  },

  whereWeAre: {
    heading: "Par choix, pas par retard",
    paragraphs: [
      "Saha est avant la première clôture. L'équipe fondatrice est en place, la structure de capital est en cours de finalisation et les premières conversations d'acquisition sont engagées. Nous n'avons pas encore clôturé d'opération ; nous préparons un premier closing, pas un déploiement de masse. Les premières acquisitions prouveront la thèse de sourcing, le modèle de transition et la discipline opérationnelle. Tout ce qui suivra en dépend.",
    ],
    callout: {
      type: "stat" as const,
      value: "Pré-clôture",
      caption: "Équipe fondatrice en place, premières conversations d'acquisition en cours.",
    },
  },

  whyDifferent: {
    heading: "Ce qui distingue Saha d'un fonds classique",
    paragraphs: [
      "La plupart des véhicules d'acquisition sont construits autour d'une durée de fonds finie (acheter, améliorer, céder) dans un horizon défini. Cette structure crée une tension inhérente entre la performance à court terme et la santé de l'entreprise à long terme.",
      "Saha est une holding permanente. Nous acquérons les entreprises pour les conserver. Nos incitations sont pleinement alignées sur le succès à long terme de chaque entreprise et du portefeuille global. Pas d'horloge de sortie, pas de cessions forcées, pas de pression pour optimiser l'apparence trimestrielle.",
    ],
    callout: {
      type: "quote" as const,
      text: "Nos incitations sont pleinement alignées sur le succès à long terme.",
    },
  },

  closingCta: {
    heading: "Vous souhaitez en savoir plus ?",
    description:
      "Nous structurons Saha pour un petit nombre d'investisseurs alignés et à long terme. Si la thèse vous parle, nous accueillons volontiers une conversation privée pour explorer l'adéquation.",
    cta: { label: "Échanges investisseurs", href: "/contact?pathway=investor" },
  },
};

export const talentPage = {
  hero: {
    eyebrow: "Talent",
    headline: "Dirigez une entreprise suisse au-delà de son fondateur",
    subheadline:
      "Prenez place au siège de direction d'une entreprise suisse établie. Dirigez son prochain chapitre, soutenu par un propriétaire permanent et une communauté de dirigeants qui partagent votre engagement.",
    cta: { label: "Postuler maintenant", href: "/contact?pathway=talent" },
  },

  opportunity: {
    heading: "Une opportunité vraiment unique",
    paragraphs: [
      "En Suisse, des milliers d'entreprises rentables et dirigées par leur fondateur changeront de mains au cours des prochaines années. La plupart n'ont pas besoin d'être réinventées. Elles ont besoin de quelqu'un qui prenne les rênes et les conduise avec soin.",
      "Saha forme les dirigeantes et dirigeants qui reprendront ces entreprises. Le Future CEO Program est notre manière de préparer la prochaine génération de directrices et directeurs généraux pour un segment négligé de l'économie suisse : non pas des fondateurs, mais des successeurs prêts à reprendre une entreprise qui fonctionne et à la mener sur la durée.",
      "Pour les bonnes personnes, c'est une opportunité rare. Vous prenez la responsabilité d'une entreprise suisse établie, portée par un propriétaire permanent qui ne cherche pas à revendre. Vous pouvez bâtir pour le long terme plutôt que de gérer en vue d'une sortie.",
    ],
    callout: {
      type: "quote" as const,
      text: "Un siège qui peut définir une carrière. Par conception.",
    },
  },

  whoYouAre: {
    heading: "Qui vous êtes",
    paragraphs: [
      "Vous êtes une dirigeante ou un dirigeant opérationnel expérimenté, une manageuse ou un manager avec une responsabilité de compte de résultat, peut-être une entrepreneuse ou un entrepreneur qui a cédé une entreprise et cherche son prochain chapitre. Vous comprenez ce qui fait tourner une entreprise de taille modeste : les clients, l'équipe, la trésorerie, la culture.",
      "Vous avez dirigé des équipes, pris des décisions difficiles et appris ce qui soutient une entreprise et ce qui la fait trébucher. Vous savez que bien diriger dépasse la maîtrise technique : il faut écouter, bâtir la confiance, tenir face à l'incertitude et laisser de la place à celles et ceux qui vous entourent.",
      "Vous voulez diriger une entreprise qui fonctionne déjà, pas en construire une à partir de zéro. Vous pensez en années, pas en trimestres. Vous appréciez la discipline discrète d'une bonne PME suisse plus que l'effervescence d'une start-up.",
      "Une maîtrise courante du français, de l'allemand ou de l'italien est requise, selon la région de Suisse où vous dirigerez. Une expérience entrepreneuriale ou la direction d'une business unit rentable constituent un avantage marqué.",
    ],
  },

  program: {
    heading: "Le Future CEO Program",
    steps: [
      {
        number: "01",
        title: "Préparation",
        description:
          "Vous travaillez à nos côtés pendant que nous identifions et évaluons des entreprises cibles. Vous apprenez à connaître notre thèse d'investissement, notre lecture des transitions et notre discipline opérationnelle. Vous nous aidez à affiner le modèle et nous apprenons comment vous pensez et dirigez. Cette phase est flexible et non rémunérée : vous gardez votre poste principal et nous découvrons ensemble si l'alignement est là.",
      },
      {
        number: "02",
        title: "Transmission",
        description:
          "Une fois que nous avons identifié une entreprise ensemble, vous rejoignez l'équipe à plein temps et vous êtes rémunéré. Vous travaillez aux côtés de la personne fondatrice sortante dans un processus structuré de transmission : vous apprenez à connaître les clients, l'équipe et les opérations, vous prenez progressivement la responsabilité et vous vous préparez à assumer pleinement la direction.",
      },
      {
        number: "03",
        title: "Direction générale",
        description:
          "Vous dirigez l'entreprise en tant que directrice ou directeur général, avec une pleine responsabilité opérationnelle et une participation significative au succès. Saha détient l'entreprise de manière permanente, ce qui vous permet de bâtir pour le long terme plutôt que de gérer en vue d'une sortie. Vous devenez la gardienne ou le gardien de l'entreprise : de ses clients, de son équipe, de sa place dans la communauté.",
      },
      {
        number: "04",
        title: "Responsabilité durable",
        description:
          "Au fil des années, le rôle s'approfondit. L'entreprise se consolide, les relations mûrissent, le savoir-faire opérationnel s'affine. Vous rejoignez un cercle croissant de directrices et directeurs généraux Saha : des pairs qui apprennent les uns des autres, accompagnent les nouveaux dirigeants et contribuent à la manière dont nous trouvons et soutenons la prochaine génération. La permanence devient une manière de travailler, pas seulement une promesse.",
      },
    ],
  },

  offer: {
    heading: "Ce que le programme offre",
    paragraphs: [
      "Un siège de direction dans une entreprise suisse établie et rentable, choisie ensemble avec nous. Pas de page blanche. Une entreprise réelle, avec des clients, une équipe et un parcours.",
      "Un propriétaire permanent derrière vous. Saha détient sur la durée, il ne s'agit donc pas d'optimiser l'entreprise en vue d'une sortie. Vous pouvez bâtir pour le long terme : relations, culture et qualité opérationnelle qui s'accumulent au fil des années.",
      "Une communauté de pairs dirigeants. Vous ne dirigerez pas seul. Vous rejoignez un groupe croissant de directrices et directeurs généraux Saha qui se font confiance, apprennent les uns des autres et partagent les mêmes défis. Un échange entre pairs, des outils communs et un siège qui gère le sourcing, la finance et l'infrastructure pour que vous puissiez vous concentrer sur l'entreprise.",
      "Une participation économique significative dans l'entreprise que vous dirigez. Si vous bâtissez bien, vous gagnez. Si l'entreprise gagne, nous gagnons tous.",
    ],
    callout: {
      type: "quote" as const,
      text: "Un propriétaire permanent derrière vous. Une communauté de dirigeants à vos côtés.",
    },
  },

  commitment: {
    heading: "Ce que nous attendons en retour",
    paragraphs: [
      "Du sérieux. Ce n'est pas une incursion dans le monde des PME. Vous vous engagez à diriger l'entreprise que vous reprenez, non pour un an ou deux, mais aussi longtemps qu'elle aura besoin de vous et que vous pourrez la servir.",
      "Du soin. Vous héritez d'une communauté de clients, de collaborateurs, de fournisseurs qui ont tous bâti sur le travail d'une personne fondatrice. Ces relations méritent la même attention que celle qu'elles ont reçue au fil des années.",
      "Du discernement. Saha apporte le capital, la discipline et l'accompagnement. La direction au quotidien vous revient. Nous cherchons des personnes capables de décider par elles-mêmes et de savoir quand demander conseil.",
    ],
  },

  process: {
    heading: "Le processus",
    steps: [
      {
        number: "01",
        title: "Postuler",
        description:
          "Dites-nous qui vous êtes, ce que vous avez dirigé et pourquoi le siège de direction d'une PME suisse a du sens pour vous. Une lettre courte suffit, un CV aide. Le ton peut rester informel.",
      },
      {
        number: "02",
        title: "Conversations",
        description:
          "Nous aurons plusieurs échanges pour apprendre à nous connaître. Nous partageons ce que nous bâtissons et où nous allons. Vous partagez votre manière de penser, ce que vous avez dirigé et ce qui vous attire dans ce type de travail.",
      },
      {
        number: "03",
        title: "Thèse et engagement",
        description:
          "Si l'alignement est là, nous définissons ensemble le type d'entreprise que vous voulez diriger : secteur, région, taille, profil. Nous lançons la recherche ensemble et nous nous engageons à vous accompagner jusqu'à la bonne entreprise.",
      },
      {
        number: "04",
        title: "Offre",
        description:
          "Lorsque nous convergeons ensemble sur une entreprise précise, nous vous adressons une offre formelle : rémunération, participation et chemin vers le siège, par écrit. Dès lors, la transmission commence.",
      },
    ],
  },

  closingCta: {
    heading: "Rejoignez la première cohorte",
    description:
      "Nous formons en ce moment la première cohorte du Future CEO Program. Si vous pensez que ce siège pourrait être le vôtre, dites-le-nous.",
    cta: { label: "Postuler maintenant", href: "/contact?pathway=talent" },
  },
};

export const advisorsPage = {
  hero: {
    eyebrow: "Pour les conseillers",
    headline: "Un acquéreur digne de votre recommandation",
    subheadline:
      "Lorsque vous orientez un client vers un acquéreur, votre réputation l'accompagne. Saha est conçu avec cette responsabilité à l'esprit : un acquéreur qui protège les relations que vous avez bâties au fil des années, et qui ne les met pas en péril.",
  },

  understand: {
    heading: "Une recommandation laisse une trace durable",
    paragraphs: [
      "Les dirigeants qui abordent leur succession comptent souvent parmi vos clients de plus longue date. Lorsque vous leur présentez un acquéreur, vous ne facilitez pas seulement une transaction ; vous répondez de la manière dont le processus sera vécu et de ce qu'il produira.",
      "Saha est construit autour de cette responsabilité. Notre conduite pendant le processus, notre manière de traiter le cédant et la façon dont nous portons l'entreprise après la clôture déterminent si votre recommandation vous fait honneur.",
    ],
  },

  expectations: {
    heading: "Ce que vous pouvez attendre de nous",
    steps: [
      {
        number: "01",
        title: "Un processus défini, sans surprises",
        description:
          "Nous abordons chaque situation avec une méthodologie claire : évaluation initiale, offre, due diligence, planification de la transition, clôture. Nous communiquons ouvertement à chaque étape, avec vous et avec votre client, afin que rien n'arrive de manière inattendue et que personne ne reste sans réponse.",
      },
      {
        number: "02",
        title: "Nous ne renégocions pas",
        description:
          "Notre offre reflète notre évaluation sincère de l'entreprise. Nous n'utilisons pas la due diligence comme outil pour renégocier le prix ou les conditions. Si un élément significatif apparaît et modifie notre appréciation, nous vous en informons directement et immédiatement; nous ne le laissons pas surgir au dernier moment.",
      },
      {
        number: "03",
        title: "Nous avançons au bon rythme",
        description:
          "Ni précipité, ni indéfiniment prolongé. Nous savons que les fondateurs ont souvent besoin de temps pour parvenir à une certitude, et nous le respectons. Une fois le processus engagé, nous avançons avec détermination et le menons à terme dans un délai raisonnable.",
      },
      {
        number: "04",
        title: "Nous vous tenons informé",
        description:
          "C'est vous qui avez initié la relation. Vous en restez partie prenante. Nous ne vous contournerons pas, ne vous exclurons pas des développements significatifs et ne vous placerons pas dans une position où votre client en saurait plus, ou moins, que vous.",
      },
    ],
  },

  role: {
    heading: "Comment nous concevons votre rôle",
    paragraphs: [
      "Vous connaissez, sur l'entreprise de votre client, des choses que nous ignorons : l'historique, les dynamiques, les sensibilités qui n'apparaissent jamais dans un état financier. Ce savoir fait de vous un véritable partenaire du processus, pas un simple intermédiaire.",
      "Nous nous appuyons sur des conseillers qui connaissent l'entreprise avant nous. Les introductions que nous valorisons le plus viennent de fiduciaires et de conseillers qui ont évalué la situation par eux-mêmes et estiment qu'une adéquation réaliste existe. Nous vous dirons toujours honnêtement si nous ne la voyons pas, car protéger votre temps et la relation avec votre client importe davantage que de poursuivre une opération qui ne devrait pas avoir lieu.",
      "Notre objectif est de devenir l'acquéreur auquel vous pensez en premier lorsqu'une situation de succession se présente. Non parce que nous vous l'avons demandé, mais parce que chaque introduction que vous avez faite aura rejailli positivement sur vous.",
    ],
  },

  criteria: {
    heading: "Ce que nous recherchons",
    description:
      "Pour vous aider à évaluer si une situation peut convenir avant de prendre contact :",
    items: [
      {
        title: "Rentable et établie",
        description: "Typiquement dirigée par son fondateur depuis de nombreuses années.",
      },
      {
        title: "Chiffre d'affaires inférieur à CHF 10 millions",
        description: "Chiffre d'affaires annuel généralement inférieur à CHF 10 millions.",
      },
      {
        title: "Motivation successorale",
        description: "Succession ou départ à la retraite comme raison principale de la vente. Ni détresse ni restructuration.",
      },
      {
        title: "Équipe compétente en place",
        description: "Une équipe compétente déjà présente au-delà du fondateur.",
      },
      {
        title: "Demande stable",
        description: "Une demande raisonnablement stable, non dépendante d'un seul contrat ou des relations personnelles du fondateur.",
      },
      {
        title: "Passation structurée",
        description: "Une passation qui peut être raisonnablement planifiée selon un calendrier structuré.",
      },
    ],
    note: "Si une situation ne correspond pas à ces critères, nous vous le dirons clairement et rapidement, afin que vous puissiez poursuivre la bonne voie pour votre client sans délai.",
  },

  confidentiality: {
    heading: "Confidentialité",
    paragraphs: [
      "Chaque conversation est traitée avec une discrétion totale. Nous ne discutons pas des situations avec des tiers, nous n'abordons pas directement les entreprises une fois qu'un conseiller a pris contact en leur nom, et nous n'utilisons les informations partagées lors de conversations exploratoires qu'à la seule fin d'évaluer l'adéquation.",
    ],
  },

  longTerm: {
    heading: "Une relation de long terme, pas une transaction unique",
    paragraphs: [
      "Le marché suisse de la succession sous CHF 10 millions n'est pas une opportunité ponctuelle. C'est une réalité structurelle et continue. Nous bâtissons Saha pour le long terme, ce qui signifie bâtir aussi des relations durables avec les conseillers qui opèrent dans ce segment.",
      "Chaque transaction que nous menons à bien est le socle de la prochaine introduction. Nous mesurons notre relation avec la communauté des conseillers non au nombre d'opérations que nous poursuivons, mais à la qualité des résultats que nous produisons pour les fondateurs qu'ils nous adressent.",
    ],
  },

  closingCta: {
    heading: "Engager la conversation",
    description:
      "Si vous avez une situation à aborder, même à un stade précoce et sans engagement, nous accueillons la conversation. Tout est confidentiel dès le premier contact.",
    cta: { label: "Référer une situation", href: "/contact?pathway=advisor" },
    directContact: "Ou contactez-nous directement à hello@saha.ch. Nous répondons sous 48 heures.",
  },
};

/* ── About ──────────────────────────────────── */

export const aboutPage = {
  hero: {
    eyebrow: "À propos",
    headline: "Un foyer durable pour les PME suisses qui méritent d'être conservées",
    subheadline:
      "De nombreuses bonnes entreprises disparaissent au moment de la succession, non parce qu'elles échouent, mais parce que peu d'acquéreurs sont structurés pour les conserver. Saha est conçue pour être cet acquéreur.",
  },

  foundingTeam: {
    heading: "L'équipe fondatrice",
    intro: "Saha est assemblée par un petit groupe de personnes aux compétences complémentaires en acquisition, recherche, plateforme et build-up.",
    members: [
      {
        name: "Temitope Ola",
        subtitle: "Fondateur, Stratégie & M&A",
        description: "Fondateur-opérateur avec plus de 25 ans d'expérience en création d'entreprises, finance et exécution multi-pays. En 2014, il a mené à bien la cession complète à un acquéreur stratégique coté à Zurich d'une entreprise technologique suisse qu'il avait fondée. Cette expérience nourrit l'approche de Saha envers les fondateurs. Il porte la vision de sourcing, la thèse d'acquisition et l'ambition de construction derrière Saha.",
      },
      {
        name: "Liesel Goveas, PhD",
        subtitle: "Fondatrice, Recherche & Intelligence d'Acquisition",
        description: "Doctorat en neurosciences, MBA à l'Université de Saint-Gall. Apporte une méthodologie de recherche rigoureuse et une profondeur analytique au sourcing, à la cartographie de marché et à la diligence. Sa carrière scientifique au sein d'institutions suisses et européennes confère à Saha une maîtrise directe des domaines des sciences de la vie, du medtech et de la biotech.",
      },
      {
        name: "Stefan Vaninetti",
        subtitle: "Fondateur, Plateforme & Données",
        description: "Apporte une expertise approfondie en architecture IT et en gouvernance des données, enracinée dans le génie logiciel et le leadership exercé au sein de HOCH Health Ostschweiz. Il a conduit des transformations numériques et IT d'entreprise complexes dans une organisation suisse régulée et multi-entités. Cette expérience façonne la manière dont Saha construit sa plateforme interne pour le sourcing, la diligence, la transition et le reporting du portefeuille.",
      },
      {
        name: "Benjamin Kaleja",
        subtitle: "Fondateur, Transition & Croissance",
        description: "Fondateur-opérateur avec plus d'une décennie d'expérience en produit, technologie et IA d'entreprise. Cofondateur de ZenAdmin, un SaaS B2B d'automatisation IT qu'il a fait passer de zéro à une acquisition en 2024. Il a dirigé des équipes produit et ingénierie au sein d'entreprises du Fortune 500 et de start-ups IA soutenues par du capital-risque. Il apporte les capacités produit, technologie et IA derrière la thèse de build-up de Saha.",
      },
    ],
    closingLine: "Si vous avez l'expérience et la disposition pour nous rejoindre, nous aimerions vous entendre.",
  },

  story: {
    heading: "Le problème auquel nous répondons",
    paragraphs: [
      "L'économie suisse repose sur les petites et moyennes entreprises. Beaucoup sont des entreprises rentables, bien gérées, aux équipes fidèles et à la solide réputation locale. Elles forment l'épine dorsale des communautés dans tout le pays.",
      "Mais chaque année, une part croissante d'entre elles fait face à un avenir incertain. Leurs fondateurs, souvent les personnes qui les ont bâties à partir de rien, arrivent à l'âge de la retraite sans plan de succession. Les options sont généralement peu satisfaisantes : vendre à un grand acquéreur impersonnel, tenter une transmission précipitée à des successeurs mal préparés, ou simplement fermer.",
      "Saha a été créée pour offrir quelque chose de mieux. Nous sommes convaincus que les entreprises solides, rentables et bien gérées ne devraient pas disparaître à cause d'un problème de calendrier. Elles méritent un propriétaire qui respecte leur histoire, soutient leurs gens et les porte de l'avant avec sérieux et soin.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168 000",
      caption: "PME suisses qui devraient faire face à une succession d'ici 2030.",
    },
  },

  whyDifferentBuyer: {
    heading: "Pourquoi ce segment a besoin d'un repreneur d'un nouveau genre",
    paragraphs: [
      "Les entreprises sous CHF 10 millions de chiffre d'affaires se situent dans un vide structurel. Elles sont trop petites pour la plupart des acquéreurs institutionnels, qui ont besoin de tailles de transactions plus grandes pour justifier leur économie. Elles sont trop dépendantes des fondateurs pour les investisseurs passifs, qui manquent de volonté ou de capacité à gérer une transition menée de près.",
      "Et elles comptent trop (pour les salariés, les clients, les communautés) pour simplement disparaître quand aucun acquéreur ne se présente. Ce segment ne manque pas de capital. Il manque d'un repreneur qui comprenne la complexité humaine des petites opérations de succession et soit prêt à faire le travail.",
    ],
    callout: {
      type: "quote" as const,
      text: "Ce segment ne manque pas de capital. Il manque d'un repreneur prêt à s'engager.",
    },
  },

  approach: {
    heading: "Notre vision de la détention",
    paragraphs: [
      "Nous acquérons les entreprises avec l'intention de les conserver. Ce n'est pas une stratégie financière drapée dans les habits d'une gestion responsable. C'est une conviction véritable que la propriété à long terme produit de meilleurs résultats pour les entreprises, pour les personnes qui les font vivre, et pour leurs communautés.",
      "Nous offrons à chaque entreprise une transition soignée, un appui opérationnel ciblé et la stabilité qui vient du fait d'appartenir à quelque chose de plus grand. En retour, chaque entreprise renforce l'ensemble : par le partage des connaissances, la discipline opérationnelle et les bénéfices composés d'un portefeuille permanent et en croissance.",
    ],
    callout: {
      type: "quote" as const,
      text: "Nous acquérons les entreprises avec l'intention de les conserver.",
    },
  },

  principles: {
    heading: "Nos convictions",
    items: [
      { title: "La continuité plutôt que la rupture", description: "Les bonnes entreprises devraient être préservées et renforcées, pas démembrées." },
      { title: "La gestion responsable plutôt que l'extraction", description: "La propriété porte une responsabilité. Notre ambition : laisser chaque entreprise plus forte que nous ne l'avons trouvée." },
      { title: "La patience plutôt que l'urgence", description: "La valeur durable se construit lentement. Nous résistons à la pression d'optimiser à court terme." },
      { title: "La clarté plutôt que la complexité", description: "Notre modèle est simple par design. La complexité doit servir l'entreprise, pas le modèle d'affaires." },
    ],
  },

  whereWeAreToday: {
    heading: "Où nous en sommes aujourd'hui",
    paragraphs: [
      "Nous avançons avec détermination : l'équipe fondatrice est en place, la structure de capital est en cours de finalisation et les premières conversations d'acquisition sont engagées. C'est délibéré. Nous croyons que les premières acquisitions définissent l'entreprise, et nous entendons les réussir.",
      "Chaque décision que nous prenons est guidée par une question simple : cela aura-t-il toujours du sens dans vingt ans ?",
    ],
  },

  ambition: "Saha est construite non seulement comme une holding, mais comme un modèle à long terme pour la succession des petites entreprises en Suisse. Nous croyons que la raison pour laquelle ce segment est mal desservi ne tient pas à l'absence de bonnes entreprises; elle tient à l'absence d'un acquéreur disposant de l'infrastructure nécessaire pour faire fonctionner ces opérations. Construire cette infrastructure, progressivement et avec discipline, est la raison d'être de Saha. Cette infrastructure repose sur quatre piliers : sourcing systématique, continuité du leadership, discipline de transition et force opérationnelle partagée. Elle est pensée pour s'affûter à chaque acquisition que nous menons à bien.",

  closingCta: {
    heading: "Prenons contact",
    description:
      "Que vous soyez un fondateur qui réfléchit à l'avenir, un investisseur qui explore le modèle, ou quelqu'un qui partage notre vision, n'hésitez pas à nous écrire.",
    cta: { label: "Nous contacter", href: "/contact" },
  },
};

export const contactPage = {
  hero: {
    eyebrow: "Contact",
    headline: "Engager une conversation",
    subheadline:
      "Toute relation significative commence par une conversation. Dites-nous un peu qui vous êtes et ce qui vous amène ici.",
  },
  submitLabel: "Envoyer le message",
  selectPrompt: "Sélectionnez ci-dessus comment vous souhaitez nous contacter.",
  thankYouHeading: "Merci de nous avoir contactés",
  thankYouDescription: "Nous avons bien reçu votre message et reviendrons vers vous rapidement.",
  sendAnother: "Envoyer un autre message",
  pathways: [
    {
      id: "founder",
      title: "Je suis fondateur et j'envisage une transmission",
      description: "Si vous envisagez le prochain chapitre de votre entreprise, nous serions heureux d'avoir une conversation confidentielle et sans engagement sur la possibilité d'une adéquation avec Saha.",
      fields: [
        { name: "name", label: "Votre nom", type: "text" as const, required: true },
        { name: "email", label: "Adresse e-mail", type: "email" as const, required: true },
        { name: "phone", label: "Numéro de téléphone (facultatif)", type: "tel" as const, required: false },
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
        { name: "firm", label: "Société ou affiliation (facultatif)", type: "text" as const, required: false },
        { name: "message", label: "Qu'est-ce qui vous intéresse chez Saha ?", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "talent",
      title: "Je postule au Future CEO Program",
      description: "Si vous voulez diriger une entreprise suisse établie dans son prochain chapitre via le Future CEO Program de Saha, dites-nous qui vous êtes et ce qui vous attire dans ce siège.",
      fields: [
        { name: "name", label: "Votre nom", type: "text" as const, required: true },
        { name: "email", label: "Adresse e-mail", type: "email" as const, required: true },
        { name: "linkedin", label: "Profil LinkedIn (facultatif)", type: "url" as const, required: false },
        { name: "message", label: "Parlez-nous de votre parcours et de ce qui vous attire dans le Future CEO Program", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "advisor",
      title: "Je suis un conseiller qui réfère un client",
      description:
        "Si vous êtes fiduciaire, notaire ou conseiller avec un client qui envisage une succession, nous accueillons volontiers une conversation confidentielle pour évaluer l'adéquation.",
      fields: [
        { name: "name", label: "Votre nom", type: "text" as const, required: true },
        { name: "email", label: "Adresse e-mail", type: "email" as const, required: true },
        { name: "firm", label: "Cabinet ou étude (facultatif)", type: "text" as const, required: false },
        { name: "message", label: "Décrivez-nous la situation", type: "textarea" as const, required: false },
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
        { question: "En quoi Saha se distingue-t-il d'un fonds de capital-investissement ?", answer: "Les sociétés de capital-investissement acquièrent généralement les entreprises avec l'intention de les vendre dans trois à sept ans. Saha acquiert les entreprises pour les conserver durablement. Il n'y a pas de calendrier de sortie, pas de pression pour restructurer en vue d'une revente, et aucune incitation à extraire la valeur à court terme. Notre modèle est bâti autour de la continuité, pas des transactions." },
        { question: "Qu'advient-il de mes employés après une vente ?", answer: "Préserver l'équipe que vous avez constituée est au cœur de notre approche. Nous n'acquérons pas les entreprises dans le but de les restructurer. Toute décision concernant les personnes sera prise dans l'intérêt de la santé à long terme de l'entreprise, en toute transparence." },
        { question: "Combien de temps s'écoule-t-il du premier échange à la clôture ?", answer: "Cela dépend de l'état de votre réflexion. La succession est souvent le fruit de plusieurs années de maturation avant qu'un fondateur ne soit prêt à agir, et c'est tout à fait normal. Une fois la décision prise d'avancer, un processus de transaction typique, du premier échange sérieux à la clôture, prend de trois à six mois. Aucune pression ne s'exerce à l'une ou l'autre étape. De nombreux fondateurs trouvent utile d'engager la conversation avec nous bien avant d'être prêts à céder, simplement pour comprendre les options. Tout est confidentiel et sans engagement." },
        { question: "Mon entreprise gardera-t-elle son nom et sa marque ?", answer: "Oui. Nous préservons l'identité, la marque et la présence locale de chaque entreprise que nous acquérons. Votre entreprise continue d'opérer sous son propre nom, sur son propre marché, avec sa propre équipe. Saha apporte le soutien en arrière-plan." },
        { question: "Dois-je rester impliqué après la vente ?", answer: "C'est entièrement à vous de décider. Certains fondateurs préfèrent une transition nette, d'autres choisissent de rester impliqués dans un rôle consultatif ou à temps partiel pendant une période. Nous structurons la transition selon vos préférences et votre calendrier." },
        { question: "Quelle taille d'entreprise Saha acquiert-il généralement ?", answer: "Nous nous concentrons sur les PME suisses rentables, dirigées par leurs fondateurs, généralement sous CHF 10 millions de chiffre d'affaires annuel. Les facteurs les plus importants sont la qualité de l'entreprise, la force de l'équipe, et la capacité de l'entreprise à continuer réellement de prospérer après le départ du fondateur." },
        { question: "Que fait concrètement Saha pour améliorer une entreprise après l'acquisition ?", answer: "Notre première tâche, pendant environ les douze premiers mois, est la continuité : garder clients, équipe et opérations stables pendant la passation du fondateur. Au cours des douze à vingt-quatre mois suivants, nous travaillons avec l'équipe locale sur un programme de renforcement ciblé : reporting financier et discipline tarifaire plus nets, numérisation des flux de travail récurrents qui tournent encore sur papier ou sur tableur, appui sur un ou deux recrutements clés (souvent la personne qui prend la relève du fondateur) et captation du savoir-faire institutionnel qui reposait sur lui. L'équipe locale reste responsable de la conduite et du développement de l'entreprise. Ce que nous ajoutons est sélectif, mesuré à son utilité réelle, et affiné à chaque acquisition." },
      ],
    },
    {
      label: "Pour les investisseurs",
      items: [
        { question: "Qu'est-ce qui distingue Saha d'une holding patiente disposant de capital ?", answer: "Une holding à capital patient est un positionnement. Saha bâtit l'infrastructure de sourcing, de transition et d'exploitation qui rend les petites opérations de succession réellement viables, et pas seulement finançables. Le modèle est pensé pour se composer : chaque acquisition améliore notre processus, renforce notre réseau d'opérateurs et réduit les frictions sur l'opération suivante. C'est la différence entre posséder un ensemble d'entreprises et bâtir un moteur d'acquisition et d'exploitation." },
        { question: "Quelle est la structure d'investissement de Saha ?", answer: "Saha est une holding permanente, non un fonds classique à durée finie. Le capital est déployé dans des acquisitions détenues indéfiniment. Les rendements sont générés par les flux de trésorerie à long terme, la croissance organique et la force opérationnelle composée du portefeuille." },
        { question: "Comment Saha génère-t-il des rendements sans sorties ?", answer: "Les rendements sont générés par les flux de trésorerie opérationnels des entreprises que nous acquérons, réinvestis ou distribués au fur et à mesure que le portefeuille mûrit. Nous visons une entrée à 3–5× l'EBITDA dans des entreprises génératrices de trésorerie. La liquidité des investisseurs est assurée par une combinaison de distributions en numéraire, de refinancements du portefeuille dans le temps et de mécanismes secondaires sélectifs, et non par un événement de sortie unique. Nous n'optimisons pas sur un chiffre de TRI unique. Nous optimisons sur une valeur durable et composée. La documentation complète sur les rendements est partagée lors de conversations directes." },
        { question: "Quel est le profil de rendement cible ?", answer: "Nous visons à accroître durablement la valeur du portefeuille à long terme grâce à la discipline d'acquisition, à l'amélioration opérationnelle et à la croissance organique. Nous structurons Saha pour un petit nombre d'investisseurs alignés à long terme et partageons la documentation complète lors de discussions privées." },
        { question: "Comment Saha gère-t-il le risque sur le portefeuille ?", answer: "Le risque est géré par la diversification entre secteurs et régions en Suisse, par des valorisations disciplinées à l'entrée, par des processus de transition structurés et par une surveillance financière partagée dotée de systèmes d'alerte précoce. Chaque entreprise fonctionne de manière indépendante, ce qui limite le risque de contagion." },
        { question: "Quel est l'engagement d'investissement minimum ?", answer: "Nous structurons Saha pour un petit nombre d'investisseurs alignés et à long terme. À ce stade, la sélectivité et l'adéquation structurelle comptent plus que l'ampleur. Les engagements minimums et les conditions sont discutés directement." },
        { question: "Pourquoi se concentrer sur les entreprises sous CHF 10 millions de chiffre d'affaires ?", answer: "Ce segment est structurellement mal desservi. La plupart des acquéreurs institutionnels, conseillers et bases de données M&A se concentrent au-dessus de CHF 10 millions. En-dessous de ce seuil, les entreprises rentables en phase de transmission existent en grand nombre mais sans acquéreur pensé pour elles. C'est ce vide que Saha est conçue pour combler." },
        { question: "Comment Saha crée-t-il de la valeur au-delà du simple fait de conserver de bonnes entreprises ?", answer: "Trois sources composées. D'abord, une entrée disciplinée : nous achetons dans un segment structurellement mal desservi par le capital institutionnel, où les multiples reflètent davantage l'absence d'acquéreurs que la qualité des entreprises. Ensuite, un renforcement délibéré après la clôture : reporting et tarification plus nets, flux de travail numérisés, continuité du leadership et captation du savoir-faire, déployés de manière sélective là où ils augmentent la puissance bénéficiaire de chaque entreprise. Enfin, une plateforme qui s'affûte à chaque acquisition : relations de sourcing, playbooks de transition, réseaux de dirigeants et systèmes internes qui réduisent la friction et le coût de chaque opération suivante. La valeur supplémentaire ne réside pas dans un événement de sortie unique. Elle réside dans l'écart grandissant entre ce que valent ces entreprises à l'intérieur de Saha et ce qu'elles auraient valu pour n'importe quel autre acquéreur." },
        { question: "Quel rôle joue la technologie dans le modèle de Saha ?", answer: "Chez Saha, la technologie concerne la propre infrastructure opérationnelle de la holding, et non l'introduction de logiciels dans les entreprises que nous acquérons. Nous bâtissons une plateforme interne (intelligence de sourcing, flux de diligence, outillage de transition et reporting du portefeuille) qui rend viable la détention permanente de nombreuses petites entreprises à l'échelle. Ce travail est piloté par Stefan Vaninetti, dont l'expérience porte sur l'architecture IT d'entreprise et la gouvernance des données au sein d'une organisation suisse régulée et multi-entités (HOCH Health Ostschweiz). La plateforme est ce qui permet à une équipe centrale resserrée de rester proche d'un portefeuille en croissance sans créer un overhead que les entreprises elles-mêmes ne pourraient pas justifier." },
      ],
    },
    {
      label: "Pour les constructeurs et l'équipe",
      items: [
        { question: "Quel type de personnes Saha recherche-t-il ?", answer: "Nous cherchons des personnes qui pensent en décennies, qui ont le goût du travail bien fait et qui veulent construire quelque chose qui dure. Les parcours pertinents incluent opérations, finance, M&A, direction générale et technologie. La disposition et l'alignement comptent plus qu'un titre ou un pedigree particulier." },
        { question: "Saha recrute-t-il pour des rôles précis en ce moment ?", answer: "Nous sommes au stade de la formation, avant notre première acquisition. Nous sommes toujours ouverts à entendre parler de personnes exceptionnelles. Même sans ouverture formelle, nous accueillons les introductions de celles et ceux qui sentent un fort alignement avec ce que nous bâtissons." },
        { question: "Où Saha est-elle basée ?", answer: "Saha est basée en Suisse. Notre équipe travaille à travers le pays, au plus près des entreprises que nous acquérons et accompagnons. Nous valorisons la présence et la proximité : être près des équipes et des communautés que nous servons." },
      ],
    },
    {
      label: "Général",
      items: [
        { question: "D'où vient le nom Saha ?", answer: "Saha est un mot enraciné dans la patience, l'endurance et la capacité à porter avec soin. Il reflète la mentalité de long terme qui est au cœur de tout ce que nous faisons : acquérir et préserver les entreprises non pour un cycle, mais pour une génération." },
        { question: "Saha est-il un fonds ou une entreprise ?", answer: "Saha est une holding permanente. À la différence d'un fonds, il n'y a pas d'horizon de sortie prédéterminé. Les entreprises que nous acquérons rejoignent durablement la famille Saha. Cette structure aligne nos incitations sur la santé à long terme de chaque entreprise que nous possédons." },
        { question: "Combien d'entreprises Saha possède-t-il aujourd'hui ?", answer: "Nous bâtissons délibérément les fondations (équipe, processus et capital) avant de mener nos premières acquisitions. Nous croyons qu'il importe plus de bien faire le modèle que d'aller vite." },
        { question: "Comment puis-je vous contacter ?", answer: "Nous accueillons les conversations de fondateurs, d'investisseurs et de futurs membres de l'équipe. Vous pouvez nous joindre via notre page de contact ou en écrivant à hello@saha.ch. Chaque demande est traitée avec confidentialité et respect." },
      ],
    },
  ],
  closingCta: {
    heading: "Vous avez d'autres questions ?",
    description: "Nous sommes heureux de répondre à tout ce qui n'est pas couvert ici. Contactez-nous et nous reviendrons vers vous rapidement.",
    cta: { label: "Nous contacter", href: "/contact" },
  },
};

export const privacyPage = {
  hero: { eyebrow: "Juridique", headline: "Politique de confidentialité", subheadline: "Comment Saha traite vos informations." },
  sections: [
    { heading: "Aperçu", body: "Saha respecte votre vie privée et s'engage à protéger toute information personnelle que vous partagez avec nous. Cette page expose notre approche du traitement des données. Une politique de confidentialité complète sera publiée ici lorsque nous finaliserons notre documentation juridique." },
    { heading: "Informations que nous collectons", body: "Lorsque vous nous contactez via ce site, nous collectons uniquement les informations que vous fournissez volontairement : votre nom, votre adresse e-mail et le contenu de votre message. Nous n'utilisons ni cookies de suivi ni analytique tierce sur ce site." },
    { heading: "Comment nous utilisons vos informations", body: "Les informations que vous fournissez sont utilisées uniquement pour répondre à votre demande et faciliter toute conversation ultérieure. Nous ne vendons, ne partageons ni ne distribuons vos données personnelles à des tiers." },
    { heading: "Contact", body: "Si vous avez des questions sur la manière dont nous traitons vos données, veuillez nous contacter à" },
  ],
};

export const termsPage = {
  hero: { eyebrow: "Juridique", headline: "Conditions d'utilisation", subheadline: "Conditions régissant votre utilisation de ce site." },
  sections: [
    { heading: "Général", body: "Ce site est exploité par Saha. En y accédant et en l'utilisant, vous acceptez de respecter ces conditions. Les conditions d'utilisation complètes seront publiées ici lorsque nous finaliserons notre documentation juridique." },
    { heading: "Contenu", body: "Les informations présentes sur ce site sont fournies à des fins d'information générale uniquement. Malgré nos efforts en matière d'exactitude, nous ne donnons aucune garantie quant à l'exhaustivité, la fiabilité ou la pertinence des informations présentées." },
    { heading: "Propriété intellectuelle", body: "L'ensemble du contenu, du design et des matériaux présents sur ce site est la propriété de Saha, sauf indication contraire. Vous ne pouvez pas reproduire, distribuer ou utiliser ce contenu sans notre consentement écrit préalable." },
    { heading: "Contact", body: "Pour toute question relative à ces conditions, veuillez nous contacter à" },
  ],
};

export const footer = {
  tagline: "Une maison durable pour les entreprises suisses en transmission.",
  columns: [
    { title: "Entreprise", links: [{ label: "À propos", href: "/about" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }] },
    { title: "Pour vous", links: [{ label: "Fondateurs", href: "/founders" }, { label: "Conseillers", href: "/advisors" }, { label: "Investisseurs", href: "/investors" }, { label: "Talent", href: "/talent" }] },
    { title: "Juridique", links: [{ label: "Confidentialité", href: "/privacy" }, { label: "Conditions", href: "/terms" }] },
  ],
  copyright: `© ${new Date().getFullYear()} Saha. Tous droits réservés.`,
  location: "Switzerland",
};

export const metadata = {
  home: { title: "Saha | La succession systématique des PME suisses", description: "Temps. Talent. Technologie. Un système de succession structuré pour les petites entreprises suisses. Saha acquiert des entreprises rentables sous CHF 10 millions, les accompagne avec soin dans la transition et les renforce dans la durée." },
  founders: { title: "Pour les fondateurs | Saha", description: "Vous avez créé quelque chose qui mérite d'être préservé. Saha acquiert et conserve les entreprises suisses dirigées par leurs fondateurs sous CHF 10 millions avec soin, structure et engagement à long terme." },
  advisors: { title: "Pour les conseillers | Saha", description: "Lorsque vous présentez un client à Saha, votre réputation est protégée. Nous offrons un processus clair, une transparence totale et une détention permanente pour les successions de PME suisses." },
  investors: { title: "Pour les investisseurs | Saha", description: "Un modèle de détention permanente pour le segment mal desservi des transmissions suisses sous CHF 10 millions. Transitions structurées, sourcing discipliné, valeur composée." },
  talent: { title: "Talent | Future CEO Program chez Saha", description: "Dirigez une entreprise suisse établie dans son prochain chapitre. Le Future CEO Program de Saha forme les directrices et directeurs généraux qui prendront les rênes des entreprises que nous acquérons : un propriétaire permanent, une communauté de dirigeants et la mission de diriger sur la durée." },
  about: { title: "À propos de Saha | Pourquoi nous existons", description: "Trop de bonnes PME suisses disparaissent quand leurs fondateurs prennent leur retraite. Saha a été créée pour offrir un acquéreur réfléchi et de long terme au segment de transmission mal desservi." },
  contact: { title: "Contact | Saha", description: "Engagez une conversation avec Saha. Que vous soyez fondateur, investisseur ou futur membre de l'équipe, nous serions heureux d'avoir de vos nouvelles." },
  faq: { title: "FAQ | Saha", description: "Réponses aux questions courantes sur Saha de la part des fondateurs, investisseurs et futurs membres de l'équipe." },
  privacy: { title: "Politique de confidentialité | Saha", description: "Politique de confidentialité de Saha et pratiques de traitement des données." },
  terms: { title: "Conditions d'utilisation | Saha", description: "Conditions d'utilisation du site Saha." },
};
