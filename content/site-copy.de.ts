/* ─────────────────────────────────────────────
 *  Saha — deutsche Version / Redaktionelle Übersetzung in institutioneller Qualität
 *  Edit text here; the components pull from these objects.
 * ───────────────────────────────────────────── */

export const siteConfig = {
  name: "Saha",
  tagline: "Ein langfristiger Käufer für Schweizer Unternehmen in Nachfolgeregelung",
  url: "https://saha.ch",
  email: "hello@saha.ch",
  location: "Switzerland",
};

/* ── Navigation ─────────────────────────────── */

export const nav = {
  links: [
    { label: "Für Gründer", href: "/founders" },
    { label: "Für Investoren", href: "/investors" },
    { label: "Saha beitreten", href: "/join" },
    { label: "Über uns", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontakt", href: "/contact" },
  ],
};

/* ── Homepage ───────────────────────────────── */

export const homepage = {
  hero: {
    headline: "Ein seriöser Käufer für Schweizer\nUnternehmen in Nachfolgeregelung",
    subheadline:
      "Saha baut ein langfristiges Eigentümerunternehmen für profitable Schweizer Betriebe unter CHF 10 Mio. Jahresumsatz auf — dort, wo Gründer sich zurückziehen wollen und Kontinuität genauso zählt wie der Preis.",
    cta: { label: "Vertraulich über Nachfolgeregelung sprechen", href: "/contact" },
    secondaryCta: { label: "Sehen, was wir suchen", href: "/founders" },
  },

  whatWeAreBuildingSectionLabel: "Die Gelegenheit",
  whatWeAreBuilding: {
    heading: "Gebaut für das unterversorgte Ende der Nachfolgeregelung",
    paragraphs: [
      "Institutionelle Käufer konzentrieren sich auf das obere Marktsegment. Deals unter CHF 10 Mio. Jahresumsatz sind für klassische Private-Equity-Gesellschaften zu klein, für passive Investoren zu komplex und in der Regel nicht von etablierten M&A-Beratern abgedeckt. Bedeutende Schweizer Datensammlungen wie die M&A-Berichte von Deloitte definieren KMU ab CHF 10 Mio. — das bedeutet, dass Sahas Kernbereich in deren Analysen gar nicht erst vorkommt.",
      "Dabei sind diese Unternehmen alles andere als nebensächlich. Sie beschäftigen loyale Teams, betreuen etablierte Kundenstämme und generieren beständige Cashflows. Sie sind das Rückgrat der Lokalwirtschaften in der ganzen Schweiz. Wenn ihre Gründer ohne Plan in den Ruhestand gehen, ist der Schaden real — für Arbeitnehmer, Kunden und Gemeinden.",
      "Saha existiert für diese Lücke. Wir bauen eine diszipliniierte Akquisitionsgesellschaft speziell für dieses Segment: kleine, profitable, nachfolgezentrierte Betriebe, die zu wichtig sind, um zu verschwinden, und zu komplex für Käufer, die diese Arbeit nicht leisten wollen.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168'000",
      caption: "Schweizer KMU stehen bis 2030 vor einer Nachfolgeregelung — doch nur etwa zwei Drittel dieser Übergaben dürften erfolgreich abgeschlossen werden",
      source: "2026 CFB\u2011HSG / UBS Studie",
    },
  },

  whyNowSectionLabel: "Warum dieses Segment im Stich gelassen wird",
  whyNow: {
    heading: "Zu klein für die meisten Käufer, zu wertvoll zum Verschwinden",
    paragraphs: [
      "Unternehmen unter CHF 10 Mio. Jahresumsatz sind für die meisten Lower-Mid-Market-Käufer zu klein, die grössere Dealvolumina benötigen, um ihre Overheads zu rechtfertigen und die Finanzierungsstruktur zu stützen.",
      "Sie sind zu gründerabhängig für passive Investoren, denen Appetit und Fähigkeit für ein intensives Handover von einem ausscheidenden Eigentümer fehlen.",
      "Und sie sind zu wichtig — für Mitarbeiter, Kunden und lokale Gemeinschaften — um einfach zu schliessen, wenn kein Käufer auftaucht. Das Problem ist nicht das Fehlen guter Unternehmen. Es ist das Fehlen eines Käufermodells, das für dieses Segment gebaut ist.",
    ],
    callout: {
      type: "quote" as const,
      text: "Das Problem ist nicht das Volumen. Es ist die fehlende Übertragbarkeit.",
    },
  },

  audiences: [
    {
      label: "Für Gründer",
      heading: "Ihr Unternehmen verdient ein seriöses nächstes Kapitel",
      description:
        "Sie haben etwas aufgebaut, das zählt. Saha bietet Kontinuität — bewahrt, was funktioniert, unterstützt Ihr Team und trägt das Unternehmen, das Sie Jahrzehnte lang aufgebaut haben, verantwortungsvoll weiter.",
      cta: { label: "Mehr erfahren", href: "/founders" },
    },
    {
      label: "Für Investoren",
      heading: "Eine diszipliniierte These in einem unterversorgten Segment",
      description:
        "Wiederholbarer Deal-Flow in einer strukturellen Pipeline, diszipliniierte Entry-Bewertungen, intensive Handover-Prozesse und unbegrenzte Haltedauern. Ein Modell, das auf Verdichtung ausgelegt ist, nicht auf Ausstieg.",
      cta: { label: "Mehr erfahren", href: "/investors" },
    },
  ],

  buildersStrip: {
    heading: "Helfen Sie, Saha von Grund auf aufzubauen",
    description:
      "Wir stellen ein kleines Team in der Gründungsphase zusammen. Wenn Sie die ersten Akquisitionen, den Due-Diligence-Prozess und das Operating-Modell eines Unternehmens mitgestalten möchten — das ist echte, substanzielle Arbeit von Anfang an.",
    cta: { label: "Mehr erfahren", href: "/join" },
  },

  modelSectionLabel: "Wie das Modell funktioniert",
  model: {
    heading: "Identifizieren. Übergeben. Unterstützen. Halten.",
    steps: [
      {
        number: "01",
        title: "Übertragbare Unternehmen identifizieren",
        description:
          "Wir konzentrieren uns auf profitable, gründergeführte Schweizer Betriebe unter CHF 10 Mio. Jahresumsatz, bei denen Nachfolgeregelung der primäre Verkaufsgrund ist. Neben der finanzellen Gesundheit bewerten wir die Übertragbarkeit: wiederholte oder robuste Nachfrage, überschaubare Kundenkonzentration, stabile Teams und ein strukturierbares Handover.",
      },
      {
        number: "02",
        title: "Übergaben mit Sorgfalt und Disziplin durchführen",
        description:
          "Jede Akquisition folgt einem strukturierten Übergabeprozess, der Stabilität bewahrt: Gründerhandover, Kundenkontinuität, Managementstabilität und intensive Begleitung durch die ersten zwölf Monate. Das Handover ist eine Kompetenz, nicht bloss guter Wille.",
      },
      {
        number: "03",
        title: "Sinnvolle Unterstützung bieten",
        description:
          "Im Laufe der Zeit profitieren unsere Unternehmen von gemeinsamen Fähigkeiten, wo sinnvoll: finanzielle Disziplin, Berichtswesen, Einstellungsunterstützung, Prozessverbesserung und operative Leitung. Unterstützung ist selektiv, nicht industrialisiert — lokale Teams bleiben verantwortlich für Betrieb und Wachstum.",
      },
      {
        number: "04",
        title: "Langfristig halten",
        description:
          "Wir kaufen nicht zum Weiterverkauf. Langfristiges Eigentum ermöglicht Entscheidungen, die Teams, Kundenvertrauen und Geschäftsqualität bewahren. Jedes Unternehmen bleibt in der Saha-Familie, und das Portfolio gewinnt im Laufe der Zeit an Wert, Wissen und operativer Stärke.",
      },
    ],
  },

  differentiatorsSectionLabel: "Warum Saha in diesem Segment funktioniert",
  differentiators: {
    heading: "Gebaut für kleinere Nachfolgeregelungen",
    items: [
      {
        title: "Speziell für Deals unter CHF 10 Mio.",
        description:
          "Wir sind in einem Segment tätig, das die meisten institutionellen Käufer meiden. Unser Modell, unsere Overheads und unsere Erwartungen sind von Anfang an auf diese Dealsgrösse ausgelegt.",
      },
      {
        title: "Übertragbarkeit vor Akquisition",
        description:
          "Wir prüfen, ob ein Unternehmen seinen Gründer realistisch überdauern kann, bevor wir es kaufen. Nicht jedes gute Unternehmen ist eine gute Akquisition.",
      },
      {
        title: "Intensive Übergabedisziplin",
        description:
          "Das Handover ist die kritische Phase und erfordert menschliches Urteilsvermögen, Kommunikation und Feingefühl. Wir behandeln es als eine Kernkompetenz, nicht als Formalität.",
      },
      {
        title: "Langfristiges Eigentum ohne Druck zum Ausstieg",
        description:
          "Kein Fondszeithorizont, kein Ausstiegsdruck. Entscheidungen werden für die Gesundheit jedes Unternehmens getroffen, nicht für die Optik eines Portfolio-Reviews.",
      },
    ],
  },

  finalCtaFounders: {
    heading: "Denken Sie über Nachfolgeregelung nach?",
    description:
      "Wenn Sie als Gründer anfangen, über die nächstes Kapitel für Ihr Unternehmen nachzudenken, würden wir gerne ein vertrauliches Gespräch mit Ihnen führen.",
    cta: { label: "Diskutieren Sie Nachfolgeregelung vertraulich", href: "/contact" },
  },

  finalCtaOther: {
    heading: "Investoren und Operatoren",
    description:
      "Wenn Sie Investor sind und sich für das Modell interessieren oder ein Operator, der neben uns aufbauen möchte, würden wir gerne von Ihnen hören.",
    cta: { label: "Eine Einführung anfordern", href: "/contact" },
  },
};

/* ── For Founders ───────────────────────────── */

export const foundersPage = {
  hero: {
    eyebrow: "Für Gründer",
    headline: "Sie haben etwas Wertes aufgebaut",
    subheadline:
      "Saha erwirbt profitable Schweizer Betriebe unter CHF 10 Mio. Jahresumsatz von Gründern, die sich zurückziehen möchten. Wenn die Zeit kommt, verdient Ihr Unternehmen — und die Menschen, die davon abhängen — mehr als eine unsichere Übergabe.",
  },

  intro: {
    heading: "Wir verstehen, was auf dem Spiel steht",
    paragraphs: [
      "Ein Unternehmen zu verkaufen, das Sie aus dem Nichts aufgebaut haben, ist nicht nur eine finanzielle Entscheidung. Es ist persönlich. Ihr Name steht drauf. Ihr Team vertraut Ihnen. Ihre Kunden verlassen sich auf die Standards, die Sie gesetzt haben.",
      "Saha wurde von Menschen gebaut, die das verstehen. Unser Modell ist dazu ausgelegt, das zu ehren, was Sie geschaffen haben — indem wir es bewahren, unterstützen und mit der gleichen Ernsthaftigkeit vorantragen, die Sie in seinen Aufbau investiert haben.",
    ],
    callout: {
      type: "quote" as const,
      text: "Ihr Name steht drauf. Ihr Team vertraut Ihnen. Wir nehmen das ernst.",
    },
  },

  whatWeLookFor: {
    heading: "Eine gute Passung für Saha",
    description: "Wir suchen Unternehmen, die ihren Gründer realistisch überdauern können:",
    criteria: [
      "Profitabel und etabliert — typischerweise viele Jahre gründergeführt",
      "Jahresumsatz generell unter CHF 10 Millionen",
      "Nachfolgeregelung oder Ruhestand ist der primäre Verkaufsgrund",
      "Wiederholte oder robuste Nachfrage — nicht projekt- oder auftragsbasiert",
      "Überschaubare Kundenkonzentration — nicht abhängig von einzelnem Vertrag",
      "Stabiles Team mit operativer Leistungsfähigkeit jenseits des Gründers",
      "Ein realistischer Handover-Pfad, der strukturierbar und umsetzbar ist",
    ],
    callout: {
      type: "quote" as const,
      text: "Wir suchen Unternehmen, die ihren Gründer überdauern können — nicht nur gute Unternehmen zu gutem Preis.",
    },
  },

  notAFit: {
    heading: "Normalerweise keine gute Passung",
    description: "Wir sind bewusst selektiv. Die folgenden Situationen liegen typischerweise ausserhalb unseres Fokus:",
    criteria: [
      "Unternehmen, bei denen Umsatz primär von persönlichen Beziehungen oder Verkaufsfähigkeit des Gründers abhängt",
      "Krisenhafte oder Turnaround-Situationen, die sofortige Umstrukturierung erfordern",
      "Starke Abhängigkeit von einzelnem Kunden oder Vertrag",
      "Stark projekt- oder auftragsbasierte Umsatzmodelle mit unvorhersehbaren Einnahmen",
      "Unternehmen, bei denen das Handover nicht realistisch innerhalb eines angemessenen Zeitraums strukturierbar ist",
      "Strukturell rückläufige Nischen mit begrenzter langfristiger Lebensfähigkeit",
    ],
  },

  founderExpectations: {
    heading: "Was Gründer von uns erwarten können",
    items: [
      {
        title: "Ihr Unternehmen behält seine Identität",
        description:
          "Wir bewahren den Namen, die Marke und die lokale Präsenz jedes erworbenen Unternehmens. Ihr Unternehmen bleibt es selbst.",
      },
      {
        title: "Ihre Beteiligung liegt ganz bei Ihnen",
        description:
          "Manche Gründer bevorzugen ein sauberes Handover. Andere bleiben in beratender oder teilzeitlicher Kapazität beteiligt. Wir gestalten die Übergabe nach Ihren Vorstellungen.",
      },
      {
        title: "Der Preis ist wichtig, aber nicht das Einzige",
        description:
          "Wir bieten faire, transparente Bewertungen. Wir wissen aber auch, dass Kontinuität für Team und Kunden vielen Gründern genauso wichtig ist wie die Summe.",
      },
      {
        title: "Ihr Team ist geschützt",
        description:
          "Wir erwerben Unternehmen nicht, um Stellen abzubauen. Bestehende Mitarbeiter, ihre Rollen und Arbeitsbeziehungen bleiben durch die Übergabe und darüber hinaus erhalten.",
      },
    ],
  },

  process: {
    heading: "Wie die Zusammenarbeit mit Saha aussieht",
    description:
      "Es gibt keinen Druck und keine Verpflichtung auf irgendeiner Stufe. Wir gehen in einem Tempo vor, das sich für Sie richtig anfühlt.",
    steps: [
      {
        title: "Vertrauliches Erstgespräch",
        description:
          "Wir beginnen mit einem privaten, unverbindlichen Gespräch, um Ihr Unternehmen, Ihre Ziele und Ihren Zeithorizont zu verstehen.",
      },
      {
        title: "Initiale Passungsprüfung",
        description:
          "Bei gegenseitigem Interesse prüfen wir, ob Ihr Unternehmen zu unserem Modell passt — Rentabilität, Übertragbarkeit, Teamstabilität und Handover-Potential.",
      },
      {
        title: "Tiefere Bewertung",
        description:
          "Wir verstehen Ihr Unternehmen gründlicher — Betrieb, Kunden, Team-Dynamiken und die Rolle des Gründers im täglichen Geschäft.",
      },
      {
        title: "Indikatives Angebot",
        description:
          "Wir präsentieren ein klares, direktes Angebot. Keine aggressiven Verhandlungstaktiken. Keine lastminütigen Überraschungen. Faire Bedingungen, die den Wert dessen widerspiegeln, was Sie aufgebaut haben.",
      },
      {
        title: "Due Diligence und Handover-Planung",
        description:
          "Formelle Prüfung zusammen mit detaillierter Planung des Handovers — wer was übernimmt, wie Kunden betreut werden, wie die ersten zwölf Monate aussehen.",
      },
      {
        title: "Strukturiertes Handover",
        description:
          "Wir führen die Übergabe sorgfältig aus: Gründer-Übergabe, Management-Kontinuität, Kundenkommunikation und operative Stabilität ab Tag eins.",
      },
    ],
  },

  closingCta: {
    heading: "Ihr Unternehmen verdient ein seriöses Gespräch",
    description:
      "Wenn Sie anfangen, über das Nächste nachzudenken, würden wir gerne zuhören. Vertraulich, ohne Verpflichtung und ganz auf Ihre Bedingungen.",
    cta: { label: "Mit uns über Ihr Unternehmen sprechen", href: "/contact" },
  },
};

/* ── For Investors ──────────────────────────── */

export const investorsPage = {
  hero: {
    eyebrow: "Für Investoren",
    headline: "Ein Akquisitionsmodell für\nkleinere Schweizer Nachfolgeregelungen",
    subheadline:
      "Saha konzentriert sich auf profitable Schweizer Betriebe unter CHF 10 Mio. Jahresumsatz, wo Nachfolgeregelung Chancen schafft, aber konventionelles Kapital normalerweise nicht einsteigt. Wir akquirieren, übergeben und halten — unbegrenzt.",
  },

  thesis: {
    heading: "Die Investitionsthese",
    paragraphs: [
      "Die Schweiz hat ein grosses, wachsendes und strukturell unterversorgtes Segment profitabler, gründergeführter Unternehmen in Nachfolgeregelung. Diese Firmen sind oft gut geführt, cashgenerativ und tief in ihren Lokalmärkten verankert — doch sie liegen unter der Grenze, in der institutionelle Käufer tätig sind.",
      "Bedeutende Schweizer M&A-Datensammlungen, wie Deloitte's KMU-Berichte, definieren ihre untere Grenze bei CHF 10 Mio. Jahresumsatz. Alles darunter ist für institutionelle Deal-Pipelines praktisch unsichtbar. Trotzdem schätzt die CFB-HSG / UBS Nachfolgestudie, dass 32 % der Schweizer KMU-Inhaber mit einer Übergabe in fünf Jahren rechnen — und nur etwa 65 % dieser Nachfolgeregelungen werden voraussichtlich erfolgreich abgeschlossen.",
      "Die Lücke ist nicht ein Mangel an guten Unternehmen. Sie ist ein Mangel an auf dieses Segment zugeschnittenen Käufern. Deals unter CHF 10 Mio. erfordern intensive Übergabe-Kompetenzen, Verständnis für Gründer und die Bereitschaft, komplexe, kleinere Transaktionen zu strukturieren, die nicht vorgenormt werden können. Saha wird genau für diese Arbeit gebaut.",
      "Weil wir unbegrenzt halten, verdichten sich unsere Erträge. Jede Akquisition verfeinert unser Sourcing, unsere Übergabe-Disziplin und unsere Operating-Fähigkeiten — macht die nächste effizienter und weniger riskant.",
    ],
    callout: {
      type: "stat" as const,
      value: "1 von 3",
      caption: "Schweizer KMU-Inhaber rechnen mit einer Übergabe in fünf Jahren — doch das Segment unter CHF 10 Mio. ist institutionellem Kapital weitgehend unsichtbar",
    },
  },

  mustBeTrue: {
    heading: "Was wahr sein muss, damit dieses Modell funktioniert",
    description:
      "Wir denken klar über unsere eigenen Annahmen nach. Damit Saha erfolgreich ist, müssen folgende Bedingungen erfüllt sein:",
    items: [
      {
        title: "Wir müssen übertragbare Unternehmen kaufen, nicht nur billige",
        description:
          "Ein niedriger Preis macht noch keine gute Akquisition. Das Unternehmen muss in der Lage sein, zu funktionieren, Kunden zu halten und Umsatz zu generieren, nachdem der Gründer ausscheidet. Übertragbarkeit ist der kritische Filter.",
      },
      {
        title: "Übergaben müssen strukturiert und gründerspezifisch sein",
        description:
          "Jedes Handover ist unterschiedlich. Es gibt kein generisches Playbook. Der Erfolg hängt davon ab, dass wir verstehen, was der Gründer tatsächlich tut, wer übernehmen kann und wie Kunden- und Teamvertrauen bewahrt bleibt.",
      },
      {
        title: "Unterstützung muss nützlich sein, ohne Overheads aufzublähen",
        description:
          "Gemeinsame Fähigkeiten machen nur Sinn, wenn sie wirklich jedem Unternehmen helfen. Wir müssen vermeiden, zentrale Funktionen aufzubauen, die mehr der Holding als dem Portfolio dienen.",
      },
      {
        title: "Frühe Deals sind überproportional wichtig",
        description:
          "Die ersten Akquisitionen setzen den Ton für Sourcing, Übergabequalität und Reputation. Sie richtig zu machen ist wichtiger, als sie schnell zu machen.",
      },
      {
        title: "Disziplin ist wichtiger als Geschwindigkeit",
        description:
          "Das Modell hängt davon ab, öfter Nein zu sagen als Ja. Pipeline-Volumen ist nicht der Engpass — Urteilskraft und Selektivität sind.",
      },
    ],
  },

  willNotBuy: {
    heading: "Was wir nicht kaufen",
    description: "Disziplin bedeutet, Grenzen deutlich zu machen:",
    items: [
      "Krisenhafte Turnarounds, die sofortige Umstrukturierung erfordern",
      "Gründerabhängige Unternehmen ohne realistischen Handover-Pfad",
      "Unternehmen mit hohen Kapitalausgabenanforderungen, die freien Cashflow begrenzen",
      "Strukturell rückläufige Nischen ohne langfristige Lebensfähigkeit",
      "Unternehmen, die zu klein sind, um die Ökonomie eines strukturierten Handovers zu tragen",
    ],
  },

  whereWeAre: {
    heading: "Wo wir jetzt stehen",
    paragraphs: [
      "Saha ist ein Unternehmen in Gründung. Wir bauen bewusst: stellen das Kernteam zusammen, strukturieren die Kapitalbasis und führen erste Akquisitionsgespräche. Wir haben noch keine erste Akquisition abgeschlossen — absichtlich, nicht aus Verzögerung.",
      "Wir bauen für den First Close, nicht für Massendeployment. Die ersten Deals werden die Sourcing-These, das Übergabe-Modell und die operative Disziplin beweisen. Alles danach hängt davon ab, dass wir das richtig machen.",
    ],
    items: [
      "Kernteam wird zusammengestellt",
      "Kapitalisierung wird finalisiert",
      "Erste Akquisitionsgespräche laufen",
      "Gründung in Vorbereitung",
      "Bau für First Close, nicht Skalierung",
    ],
  },

  whyDifferent: {
    heading: "Warum Saha anders ist als ein traditioneller Fonds",
    paragraphs: [
      "Die meisten Akquisitionsfahrzeuge sind rund um ein endliches Fondsvolumen gebaut — kauf, verbessere, verkaufe innerhalb eines gesetzten Zeithorizonts. Diese Struktur schafft inhärente Spannungen zwischen kurzfristiger Performance und langfristiger Geschäftsgesundheit.",
      "Saha ist eine permanente Holding-Gesellschaft. Wir kaufen Unternehmen, um sie zu behalten. Unsere Anreize sind vollständig mit dem langfristigen Erfolg jedes Unternehmens und des Gesamtportfolios ausgerichtet. Es gibt keinen Exit-Zeithorizont, keine Zwangsrealisierungen und keinen Druck, kurzfristige Optics zu optimieren.",
    ],
    callout: {
      type: "quote" as const,
      text: "Wir kaufen Unternehmen, um sie zu behalten. Unsere Anreize sind vollständig ausgerichtet.",
    },
  },

  closingCta: {
    heading: "Interessiert an mehr Informationen?",
    description:
      "Wir strukturieren Saha für eine kleine Anzahl ausgerichteter, langfristiger Investoren. Wenn die These anspricht, begrüssen wir ein privates Gespräch zur Passung. Vollständige Unterlagen werden in direkten Diskussionen geteilt.",
    cta: { label: "Investor-Anfragen", href: "/contact" },
  },
};

/* ── Join Saha ──────────────────────────────── */

export const joinPage = {
  hero: {
    eyebrow: "Saha beitreten",
    headline: "Bauen Sie Saha von Grund auf",
    subheadline:
      "Saha ist in der Gründungsphase — vor der ersten Akquisition. Wir stellen ein kleines Team zusammen, um das Sourcing-Modell, den Due-Diligence-Prozess, die Übergabe-Disziplin und den Operating-Ansatz zu gestalten. Wenn Sie in Jahrzehnten denken und Handwerk schätzen, ist das echte Anfangsarbeit.",
  },

  whyJoin: {
    heading: "Warum jetzt beitreten",
    paragraphs: [
      "Die meisten Karrieremöglichkeiten gehen darum, innerhalb bestehender Strukturen zu optimieren. Saha ist anders. Wir bauen eine langfristige Eigentümergesellschaft für Schweizer Unternehmen von Grund auf neu — Strategie, Kultur, Systeme, Werte werden alle jetzt entschieden.",
      "Die ersten Mitarbeiter werden bei der Gestaltung des ersten Akquisitionsmodells, der ersten Übergabe und des ersten Operating-Playbooks helfen. Das ist Arbeit vor der ersten Akquisition. Die Leute, die jetzt einsteigen, werden definieren, was Saha wird.",
    ],
  },

  roles: {
    heading: "Was wir brauchen",
    description:
      "Wir stellen keine Positionen ein. Wir suchen nach Menschen mit den richtigen Fähigkeiten, Veranlagung und Ambition, um mit uns ganz am Anfang aufzubauen.",
    profiles: [
      {
        title: "Deals und Due Diligence",
        description:
          "Menschen, die Akquisitionen im Schweizer Sub-CHF-10-Mio.-Markt sourcen, bewerten und strukturieren können. Sie verstehen, was ein kleines Unternehmen übertragbar macht, können Finanzunterlagen lesen und operatives Risiko beurteilen, und Sie können Beziehungen mit Gründern und Beratern aufbauen.",
      },
      {
        title: "Übergabe und Betrieb",
        description:
          "Menschen, die in erworbene Unternehmen einsteigen und diese durch die Übergabe führen können. Sie leiten den Gründer-Ausstieg, stabilisieren das Team, bewahren Kundenbeziehungen und setzen die operative Grundlage für langfristige Gesundheit.",
      },
      {
        title: "Finanzen und Infrastruktur",
        description:
          "Menschen, die die Finanzberichterstattung, administrativen Systeme und operativen Prozesse aufbauen können, die eine wachsende Unternehmensgruppe unterstützen. Das Bindegewebe, das das Modell funktionsfähig macht.",
      },
    ],
  },

  values: {
    heading: "Was wir schätzen",
    items: [
      {
        title: "Langfristiges Denken",
        description: "Wir treffen Entscheidungen für Jahrzehnte, nicht Quartale.",
      },
      {
        title: "Handwerk und Strenge",
        description: "Wir kümmern uns darum, Dinge gut zu machen, nicht nur schnell.",
      },
      {
        title: "Stille Ambition",
        description: "Wir zielen darauf ab, etwas Bedeutendes aufzubauen, ohne laut darüber zu sein.",
      },
      {
        title: "Empathie und Respekt",
        description: "Wir arbeiten mit Gründern, Teams und Gemeinschaften. Beziehungen zählen.",
      },
      {
        title: "Eigentümementaliät",
        description: "Jeder, der Saha aufbaut, sollte wie ein Eigentümer denken und handeln.",
      },
    ],
  },

  closingCta: {
    heading: "Das könnte Ihnen entsprechen",
    description:
      "Wenn das, was Sie gelesen haben, anspricht — auch wenn Sie nicht genau in eines der obigen Profile passen — würden wir gerne von Ihnen hören. Schreiben Sie uns, wer Sie sind und was Sie zu Saha zieht.",
    cta: { label: "Nehmen Sie Kontakt auf", href: "/contact" },
  },
};

/* ── About ──────────────────────────────────── */

export const aboutPage = {
  hero: {
    eyebrow: "Über Saha",
    headline: "Warum Saha existiert",
    subheadline:
      "Saha wurde aus einer einfachen Beobachtung gegründet: Zu viele gute Schweizer Unternehmen verschwinden nicht, weil sie scheitern, sondern weil ihre Gründer ohne klaren Plan in den Ruhestand gehen.",
  },

  story: {
    heading: "Das Problem, das wir lösen wollten",
    paragraphs: [
      "Die Schweizer Wirtschaft ist auf kleine und mittlere Unternehmen aufgebaut. Viele sind profitable, gut geführte Unternehmen mit loyalen Teams und starkem lokalen Ansehen. Sie bilden das Rückgrat von Gemeinschaften im ganzen Land.",
      "Aber jedes Jahr stehen tausende dieser Unternehmen vor ungewisser Zukunft. Ihre Gründer — oft die Menschen, die sie aus dem Nichts aufgebaut haben — erreichen das Rentenalter ohne Nachfolgeplan. Die Optionen sind meist unbefriedigend: Verkauf an einen grossen, unpersönlichen Käufer; Versuch eines überstürzten Handovers an unvorbereitete Nachfolger; oder einfach Schliessen.",
      "Saha wurde gegründet, um eine bessere Antwort zu bieten. Wir glauben, dass starke, profitable, gut geführte Unternehmen nicht verschwinden sollten wegen eines Timing-Problems. Sie verdienen einen Eigentümer, der ihre Geschichte respektiert, ihr Team unterstützt und das trägt, das Sie aufgebaut haben, mit Ernsthaftigkeit und Sorgfalt weiter.",
    ],
  },

  whyDifferentBuyer: {
    heading: "Warum dieses Segment einen anderen Käufer braucht",
    paragraphs: [
      "Unternehmen unter CHF 10 Mio. Jahresumsatz sitzen in einer strukturellen Lücke. Sie sind zu klein für die meisten institutionellen Käufer, die grössere Deals brauchen, um ihre Ökonomie zu rechtfertigen. Sie sind zu gründerabhängig für passive Investoren, die die Bereitschaft oder Fähigkeit für intensive Übergaben nicht haben.",
      "Und sie sind zu wichtig — für Mitarbeiter, Kunden und Gemeinschaften — um einfach zu verschwinden, wenn kein Käufer auftaucht. Dieses Segment braucht nicht mehr Kapital. Es braucht ein Käufermodell, das für die spezifische Komplexität kleinerer Nachfolgeregelungen gebaut ist.",
    ],
  },

  approach: {
    heading: "Unser Ansatz",
    paragraphs: [
      "Wir kaufen Unternehmen in der Absicht, sie zu behalten. Das ist keine als Stewardship getarnte Finanzstrategie — es ist eine echte Überzeugung, dass langfristiges Eigentum bessere Ergebnisse für Unternehmen, ihre Menschen und ihre Gemeinschaften schafft.",
      "Wir bieten jedem Unternehmen ein strukturiertes Handover, selektive operative Unterstützung und die Stabilität, die aus der Zugehörigkeit zu etwas Grösserem kommt. Im Gegenzug stärkt jedes Geschäft das Ganze — durch gemeinsames Wissen, operative Disziplin und die verdichtenden Vorteile eines wachsenden, permanenten Portfolios.",
    ],
  },

  principles: {
    heading: "Was wir glauben",
    items: [
      {
        title: "Kontinuität vor Disruption",
        description:
          "Gute Unternehmen sollten bewahrt und gestärkt werden, nicht für Teile auseinander genommen.",
      },
      {
        title: "Stewardship vor Extraktion",
        description:
          "Eigentum trägt Verantwortung. Wir zielen darauf ab, jedes Unternehmen stärker zu verlassen, als wir es gefunden haben.",
      },
      {
        title: "Geduld vor Dringlichkeit",
        description:
          "Bleibender Wert wird langsam aufgebaut. Wir widerstehen dem Druck, kurzfristige Ergebnisse zu optimieren.",
      },
      {
        title: "Klarheit vor Komplexität",
        description:
          "Unser Modell ist bewusst einfach gestaltet. Komplexität sollte dem Unternehmen dienen, nicht dem Geschäftsmodell.",
      },
    ],
  },

  whereWeAreToday: {
    heading: "Wo wir heute stehen",
    paragraphs: [
      "Saha ist in Gründung. Wir stellen das Anfangsteam zusammen, führen Gespräche mit ersten Übernahmekandidaten und strukturieren die Kapitalbasis. Das ist bewusst — wir glauben, dass die ersten Akquisitionen das Unternehmen definieren, und wir wollen das richtig machen.",
      "Wir bauen für die lange Frist. Jede Entscheidung wird von einer einfachen Frage geleitet: Wird das noch in zwanzig Jahren Sinn machen?",
    ],
  },

  closingCta: {
    heading: "Wir begrüssen Ihr Interesse",
    description:
      "Ob Sie ein Gründer, ein Investor oder jemand sind, der unsere Vision teilt — wir würden gerne von Ihnen hören.",
    cta: { label: "Treten Sie mit uns in Kontakt", href: "/contact" },
  },
};

/* ── Contact ────────────────────────────────── */

export const contactPage = {
  hero: {
    eyebrow: "Kontakt",
    headline: "Starten Sie ein Gespräch",
    subheadline:
      "Jede sinnvolle Beziehung beginnt mit einem Gespräch. Erzählen Sie uns ein wenig von sich selbst und was Sie hierher gebracht hat.",
  },

  pathways: [
    {
      id: "founder",
      title: "Ich bin Gründer und denke über Nachfolgeregelung nach",
      description:
        "Wenn Sie über das nächste Kapitel für Ihr Unternehmen nachdenken, würden wir gerne ein vertrauliches, unverbindliches Gespräch über eine mögliche Passung mit Saha führen.",
      fields: [
        { name: "name", label: "Ihr Name", type: "text" as const, required: true },
        { name: "email", label: "E-Mail-Adresse", type: "email" as const, required: true },
        { name: "phone", label: "Telefonnummer (optional)", type: "tel" as const, required: false },
        { name: "company", label: "Unternehmensname", type: "text" as const, required: false },
        { name: "message", label: "Erzählen Sie uns ein wenig von Ihrem Unternehmen und Ihren Überlegungen", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "investor",
      title: "Ich bin Investor",
      description:
        "Wir strukturieren Saha für eine kleine Anzahl ausgerichteter, langfristiger Investoren. Wir begrüssen Gespräche, um eine Passung zu erkunden.",
      fields: [
        { name: "name", label: "Ihr Name", type: "text" as const, required: true },
        { name: "email", label: "E-Mail-Adresse", type: "email" as const, required: true },
        { name: "firm", label: "Firma oder Zugehörigkeit (optional)", type: "text" as const, required: false },
        { name: "message", label: "Was interessiert Sie an Saha?", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "builder",
      title: "Ich will mit Saha aufbauen",
      description:
        "Wenn Sie ein Operator, Investor oder Unternehmer sind, der daran interessiert ist, Saha von Grund auf mitzugestalten, würden wir gerne von Ihnen hören.",
      fields: [
        { name: "name", label: "Ihr Name", type: "text" as const, required: true },
        { name: "email", label: "E-Mail-Adresse", type: "email" as const, required: true },
        { name: "linkedin", label: "LinkedIn-Profil (optional)", type: "url" as const, required: false },
        { name: "message", label: "Wer sind Sie und was zieht Sie zu Saha?", type: "textarea" as const, required: false },
      ],
    },
  ],
};

/* ── FAQ ───────────────────────────────────── */

export const faqPage = {
  hero: {
    eyebrow: "FAQ",
    headline: "Häufig gestellte Fragen",
    subheadline:
      "Antworten auf die Fragen, die wir am häufigsten von Gründern, Investoren und zukünftigen Teamkollegen hören.",
  },

  groups: [
    {
      label: "Für Gründer",
      items: [
        {
          question: "Wie unterscheidet sich Saha von einem Private-Equity-Käufer?",
          answer:
            "Private-Equity-Firmen akquirieren Unternehmen normalerweise in der Absicht, sie innerhalb von drei bis sieben Jahren zu verkaufen. Saha akquiriert Unternehmen, um sie permanent zu halten. Es gibt keinen Exit-Zeithorizont, keinen Druck für Umstrukturierung zum Wiederverkauf und keinen Anreiz, kurzfristigen Wert zu extrahieren. Unser Modell ist auf Kontinuität ausgelegt, nicht auf Transaktionen.",
        },
        {
          question: "Was passiert mit meinen Mitarbeitern nach dem Verkauf?",
          answer:
            "Die Bewahrung Ihres Teams ist zentral für unseren Ansatz. Wir kaufen Unternehmen nicht zum Abbau von Kosten oder Umstrukturierung von Stellen. Bestehende Mitarbeiter, Positionen und Arbeitsbeziehungen werden durch die Übergabe und darüber hinaus beibehalten. Wir investieren in das Team, das Sie aufgebaut haben.",
        },
        {
          question: "Wie lange dauert der Prozess vom Erstgespräch bis zum Closing?",
          answer:
            "Jede Situation ist unterschiedlich, aber ein typischer Prozess läuft drei bis sechs Monate vom Erstgespräch bis zum Abschluss. Wir gehen in einem Tempo vor, das für Sie funktioniert — es gibt keinen Druck zu beeilen. Das erste Gespräch ist vertraulich und mit keiner Verpflichtung verbunden.",
        },
        {
          question: "Behält mein Unternehmen seinen Namen und seine Marke?",
          answer:
            "Ja. Wir bewahren die Identität, Marke und lokale Präsenz jedes erworbenen Unternehmens. Ihr Unternehmen bleibt unter seinem eigenen Namen, in seinem eigenen Markt, mit seinem eigenen Team. Saha bietet Unterstützung im Hintergrund.",
        },
        {
          question: "Muss ich nach dem Verkauf beteiligt bleiben?",
          answer:
            "Das liegt ganz bei Ihnen. Manche Gründer bevorzugen einen sauberen Übergang, während andere in beratender oder teilzeitlicher Kapazität für einen Zeitraum beteiligt bleiben möchten. Wir gestalten die Übergabe nach Ihren Vorstellungen und Ihrem Zeithorizont.",
        },
        {
          question: "Welche Unternehmenssgrösse akquiriert Saha typischerweise?",
          answer:
            "Wir konzentrieren uns auf profitable, gründergeführte Schweizer Unternehmen generell unter CHF 10 Millionen Jahresumsatz. Die wichtigsten Faktoren sind die Qualität des Unternehmens, die Stärke des Teams und ob das Unternehmen realistisch funktionieren kann, nachdem der Gründer ausscheidet.",
        },
      ],
    },
    {
      label: "Für Investoren",
      items: [
        {
          question: "Wie ist die Investitionsstruktur von Saha?",
          answer:
            "Saha ist eine permanente Holding-Gesellschaft, kein traditioneller Fonds mit fester Laufzeit. Kapital wird in Akquisitionen deployt, die unbegrenzt gehalten werden. Renditen werden durch die langfristigen Cashflows, organisches Wachstum und verdichtende operative Stärke des Portfolios generiert.",
        },
        {
          question: "Wie erzeugt Saha Renditen ohne Ausstieg?",
          answer:
            "Unsere Renditen stammen aus der Cashgenerativen Natur der Unternehmen, die wir akquirieren, Reinvestition von freiem Cashflow in neue Akquisitionen und das organische Wachstum jedes Unternehmens über die Zeit. Die Abwesenheit von Ausstiegsdruck erlaubt Entscheidungen, die langfristigen Wert optimieren statt kurzfristiger Metriken.",
        },
        {
          question: "Was ist das Ziel-Rendite-Profil?",
          answer:
            "Wir zielen darauf ab, Portfolio-Wert über die lange Frist durch Akquisitionsdisziplin, operative Verbesserung und organisches Wachstum stetig zu verdichten. Wir strukturieren Saha für eine kleine Anzahl ausgerichteter langfristiger Investoren und teilen vollständige Unterlagen in privaten Diskussionen.",
        },
        {
          question: "Wie verwaltet Saha Risiken über das Portfolio?",
          answer:
            "Risiko wird durch Diversifizierung über Industrien und Geographien innerhalb der Schweiz, diszipliniierte Entry-Bewertungen, strukturierte Übergabeprozesse und geteilte finanzielle Überwachung mit Early-Warning-Systemen gesteuert. Jedes Unternehmen funktioniert unabhängig und begrenzt Ansteckungsrisiken.",
        },
        {
          question: "Was ist die minimale Investitionsverpflichtung?",
          answer:
            "Wir strukturieren Saha für eine kleine Anzahl ausgerichteter, langfristiger Investoren. In dieser Phase zählen Selektivität und strukturelle Passung mehr als Grösse. Minimale Verpflichtungen und Bedingungen werden direkt erörtert.",
        },
        {
          question: "Warum sich auf Unternehmen unter CHF 10 Mio. Jahresumsatz konzentrieren?",
          answer:
            "Dieses Segment ist strukturell unterversorgt. Die meisten institutionellen Käufer, Berater und Datensammlungen konzentrieren sich über CHF 10 Mio. — Deloitte's Schweizer M&A-Berichte definieren beispielsweise KMU ab diesem Schwellenwert. Darunter existieren profitable Nachfolgeregelungs-Unternehmen in grosser Zahl, aber ihnen fehlt ein spezieller Käufer. Das ist die Lücke, die Saha füllen soll.",
        },
      ],
    },
    {
      label: "Für Builder & Team",
      items: [
        {
          question: "Was für Menschen sucht Saha?",
          answer:
            "Wir suchen nach Menschen, die in Jahrzehnten denken, Handwerk schätzen und etwas Beständiges aufbauen wollen. Relevante Hintergründe sind Betrieb, Finanzen, M&A, allgemeine Geschäftsführung und Technologie — aber Veranlagung und Ausrichtung zählen mehr als ein bestimmter Titel oder Werdegang.",
        },
        {
          question: "Stellt Saha gerade für spezifische Rollen ein?",
          answer:
            "Wir sind in der Gründungsphase — vor der ersten Akquisition. Wir sind immer offen dafür, von aussergewöhnlichen Menschen zu hören. Auch ohne formelle Rolle begrüssen wir Einführungen von jemandem, der sich stark zu dem, was wir aufbauen, ausgerichtet fühlt.",
        },
        {
          question: "Wo ist Saha ansässig?",
          answer:
            "Saha ist in der Schweiz ansässig. Unser Team arbeitet überall im Land, nah bei den Unternehmen, die wir akquirieren und unterstützen. Wir schätzen Präsenz und Nähe — nahe bei den Teams und Gemeinschaften, denen wir dienen.",
        },
      ],
    },
    {
      label: "Allgemein",
      items: [
        {
          question: "Warum der Name Saha?",
          answer:
            "Saha ist ein Wort, das in Geduld, Ausdauer und der Fähigkeit verwurzelt ist, mit Sorgfalt zu tragen. Es spiegelt die langfristige Mentalität wider, die allem, was wir tun, zugrunde liegt — Unternehmen nicht für einen Zyklus akquirieren und verwalten, sondern für eine Generation.",
        },
        {
          question: "Ist Saha ein Fonds oder ein Unternehmen?",
          answer:
            "Saha ist eine permanente Holding-Gesellschaft. Im Gegensatz zu einem Fonds gibt es keinen vorgegebenen Exit-Zeithorizont. Unternehmen, die wir akquirieren, werden permanent Teil der Saha-Familie. Diese Struktur richtet unsere Anreize auf die langfristige Gesundheit jedes Unternehmens aus, das wir besitzen.",
        },
        {
          question: "Wie viele Unternehmen besitzt Saha aktuell?",
          answer:
            "Saha ist in Gründung. Wir bauen bewusst die Grundlage auf — Team, Prozesse und Kapital — bevor wir unsere ersten Akquisitionen tätigen. Wir glauben, dass das Modell richtig machen wichtiger ist als schnell vorgehen.",
        },
        {
          question: "Wie kann ich Kontakt aufnehmen?",
          answer:
            "Wir begrüssen Gespräche von Gründern, Investoren und zukünftigen Teamkollegen. Sie können uns über unsere Kontaktseite erreichen oder hello@saha.ch schreiben. Jede Anfrage wird mit Vertraulichkeit und Respekt behandelt.",
        },
      ],
    },
  ],

  closingCta: {
    heading: "Haben Sie noch Fragen?",
    description:
      "Wir beantworten gerne alles, was hier nicht abgedeckt ist. Nehmen Sie Kontakt auf und wir werden Ihnen schnell antworten.",
    cta: { label: "Treten Sie mit uns in Kontakt", href: "/contact" },
  },
};

/* ── Privacy ───────────────────────────────── */

export const privacyPage = {
  hero: {
    eyebrow: "Rechtlich",
    headline: "Datenschutzrichtlinie",
    subheadline: "Wie Saha Ihre Informationen behandelt.",
  },
  sections: [
    {
      heading: "Überblick",
      body: "Saha respektiert Ihre Privatsphäre und ist verpflichtet, alle persönlichen Informationen, die Sie mit uns teilen, zu schützen. Diese Seite beschreibt unseren Umgang mit Daten. Eine vollständige Datenschutzrichtlinie wird veröffentlicht, sobald wir unsere rechtliche Dokumentation formalisieren.",
    },
    {
      heading: "Informationen, die wir erfassen",
      body: "Wenn Sie uns über diese Website kontaktieren, erfassen wir nur die Informationen, die Sie freiwillig angeben — wie Ihren Namen, E-Mail-Adresse und den Inhalt Ihrer Nachricht. Wir verwenden keine Tracking-Cookies oder Drittanbieter-Analytik auf dieser Website.",
    },
    {
      heading: "Wie wir Ihre Informationen nutzen",
      body: "Informationen, die Sie angeben, werden ausschliesslich verwendet, um auf Ihre Anfrage zu antworten und mögliche Folge-Gespräche zu erleichtern. Wir verkaufen, teilen oder verteilen Ihre personenbezogenen Daten nicht an Dritte.",
    },
    {
      heading: "Kontakt",
      body: "Wenn Sie Fragen haben, wie wir Ihre Daten behandeln, kontaktieren Sie uns bitte unter",
    },
  ],
};

/* ── Terms ──────────────────────────────────── */

export const termsPage = {
  hero: {
    eyebrow: "Rechtlich",
    headline: "Nutzungsbedingungen",
    subheadline: "Bedingungen für die Nutzung dieser Website.",
  },
  sections: [
    {
      heading: "Allgemeines",
      body: "Diese Website wird von Saha betrieben. Durch Zugriff auf und Nutzung dieser Website stimmen Sie zu, diese Bedingungen einzuhalten. Vollständige Nutzungsbedingungen werden veröffentlicht, sobald wir unsere rechtliche Dokumentation formalisieren.",
    },
    {
      heading: "Inhalte",
      body: "Die Informationen auf dieser Website werden nur zu allgemeinen informativen Zwecken bereitgestellt. Während wir uns um Genauigkeit bemühen, garantieren wir nicht die Vollständigkeit, Zuverlässigkeit oder Eignung der präsentierten Informationen.",
    },
    {
      heading: "Geistiges Eigentum",
      body: "Alle Inhalte, Design und Materialien auf dieser Website sind Eigentum von Saha, sofern nicht anders vermerkt. Sie dürfen diese Inhalte nicht ohne unsere vorherige schriftliche Zustimmung vervielfältigen, verteilen oder verwenden.",
    },
    {
      heading: "Kontakt",
      body: "Bei Fragen zu diesen Bedingungen kontaktieren Sie uns bitte unter",
    },
  ],
};

/* ── Footer ─────────────────────────────────── */

export const footer = {
  tagline: "Ein langfristiger Käufer für Schweizer Unternehmen in Nachfolgeregelung.",
  columns: [
    {
      title: "Unternehmen",
      links: [
        { label: "Über uns", href: "/about" },
        { label: "FAQ", href: "/faq" },
        { label: "Kontakt", href: "/contact" },
      ],
    },
    {
      title: "Für Sie",
      links: [
        { label: "Für Gründer", href: "/founders" },
        { label: "Für Investoren", href: "/investors" },
        { label: "Saha beitreten", href: "/join" },
      ],
    },
    {
      title: "Rechtlich",
      links: [
        { label: "Datenschutz", href: "/privacy" },
        { label: "Bedingungen", href: "/terms" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Saha. Alle Rechte vorbehalten.`,
  location: "Switzerland",
};

/* ── SEO Metadata ──────────────────────────── */

export const metadata = {
  home: {
    title: "Saha — Ein langfristiger Käufer für Schweizer Unternehmen in Nachfolgeregelung",
    description:
      "Saha akquiriert profitable Schweizer Unternehmen unter CHF 10 Mio. Jahresumsatz von ausscheidenden Gründern, strukturiert sorgfältige Übergaben und hält sie langfristig.",
  },
  founders: {
    title: "Für Gründer — Saha",
    description:
      "Ihr Unternehmen verdient ein seriöses nächstes Kapitel. Saha akquiriert und bewahrt Gründer-aufgebaute Schweizer Unternehmen unter CHF 10 Mio. mit Sorgfalt, Struktur und langfristigem Einsatz.",
  },
  investors: {
    title: "Für Investoren — Saha",
    description:
      "Ein diszipliniiertes Akquisitionsmodell für das unterversorgte Segment von Schweizer Nachfolgeregelungen unter CHF 10 Mio. Permanente Haltedauer, strukturierte Übergaben, Wertverdichtung.",
  },
  join: {
    title: "Saha beitreten — Bauen Sie von Grund auf",
    description:
      "Saha ist in der Gründungsphase und stellt ein Team zusammen, um eine langfristige Eigentümergesellschaft für Schweizer Unternehmen aufzubauen. Deals, Übergaben, Betrieb und Finanz-Rollen.",
  },
  about: {
    title: "Über Saha — Warum wir existieren",
    description:
      "Zu viele gute Schweizer Unternehmen verschwinden, wenn ihre Gründer in den Ruhestand gehen. Saha wurde gegründet, um einen disziplinierten, langfristigen Käufer für das unterversorgte Nachfolgeregelungs-Segment zu bieten.",
  },
  contact: {
    title: "Kontakt — Saha",
    description:
      "Starten Sie ein Gespräch mit Saha. Ob Sie Gründer, Investor oder zukünftiger Teamkollege sind — wir würden gerne von Ihnen hören.",
  },
  faq: {
    title: "FAQ — Saha",
    description:
      "Antworten auf häufige Fragen über Saha von Gründern, Investoren und zukünftigen Teamkollegen.",
  },
  privacy: {
    title: "Datenschutzrichtlinie — Saha",
    description: "Sahas Datenschutzrichtlinie und Datenverwaltung.",
  },
  terms: {
    title: "Nutzungsbedingungen — Saha",
    description: "Nutzungsbedingungen für die Saha-Website.",
  },
};
