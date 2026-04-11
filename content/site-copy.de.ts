/* ─────────────────────────────────────────────
 *  Saha — deutsche Version
 *  Redaktionelle Übersetzung in institutioneller Qualität
 *  Edit text here; the components pull from these objects.
 * ───────────────────────────────────────────── */

export const siteConfig = {
  name: "Saha",
  tagline: "Ein verlässlicher Käufer für Schweizer KMU in Nachfolge",
  url: "https://saha.ch",
  email: "hello@saha.ch",
  location: "Switzerland",
};

/* ── Navigation ─────────────────────────────── */

export const nav = {
  links: [
    { label: "Gründer", href: "/founders" },
    { label: "Investoren", href: "/investors" },
    { label: "Saha beitreten", href: "/join" },
    { label: "Über uns", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontakt", href: "/contact" },
  ],
};

/* ── Homepage ───────────────────────────────── */

export const homepage = {
  hero: {
    headline: "Ein verlässlicher Käufer für\nSchweizer KMU in Nachfolge",
    openingLine:
      "Jedes Jahr schliessen Tausende guter Schweizer Unternehmen still — nicht weil sie gescheitert sind, sondern weil niemand da war, sie weiterzuführen.",
    subheadline:
      "Saha erwirbt profitable, gründergeführte Schweizer Unternehmen unter CHF 10 Millionen Umsatz und hält sie langfristig — während wir die Sourcing-, Übergabe- und Betriebsfähigkeiten aufbauen, die dieses Segment braucht.",
    cta: { label: "Gespräch beginnen", href: "/contact" },
    secondaryCta: { label: "Unsere Kriterien", href: "/founders" },
  },

  whatWeAreBuildingSectionLabel: "Unser Anliegen",
  whatWeAreBuilding: {
    heading: "Viele gute Unternehmen verschwinden aus den falschen Gründen",
    paragraphs: [
      "In der Schweiz stehen Tausende von profitablen, gut geführten Unternehmen vor einer unsicheren Zukunft — nicht weil sie scheitern, sondern weil ihre Gründer sich dem Ruhestand nähern, ohne dass ein klarer Weg vorwärts erkennbar ist. Die Optionen sind oft unbefriedigend: Verkauf an einen fernen Konzern, eine überstürzte Übergabe oder einfach Geschäftsschliessung.",
      "Die meisten institutionellen Käufer konzentrieren sich auf das obere Marktsegment. Transaktionen unter CHF 10 Millionen Umsatz sind für traditionelle Private-Equity-Fonds zu klein, für passive Investoren zu komplex und werden von klassischen M&A-Beratern kaum betreut. Diese Unternehmen fallen durch die Maschen — nicht weil sie keinen Wert haben, sondern weil bisher niemand ein Modell für sie entwickelt hat.",
      "Dafür steht Saha. Wir bauen ein Übernahmeunternehmen auf, das speziell für dieses Segment konzipiert ist: kleine, profitable, übergangsorientierte Unternehmen, die loyale Teams beschäftigen, etablierte Kundenkreise bedienen und ihren Regionen viel bedeuten.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168'000",
      caption: "Schweizer KMU müssen bis 2030 einen Generationswechsel durchlaufen — doch nur etwa zwei Drittel dieser Übergaben werden erwartet, erfolgreich abgeschlossen zu werden",
      source: "2026 CFB\u2011HSG / UBS Studie",
    },
  },

  whyNowSectionLabel: "Eine Lücke im Markt",
  whyNow: {
    heading: "Diese Unternehmen verdienen mehr als stilles Verschwinden",
    paragraphs: [
      "Unterhalb von CHF 10 Millionen Umsatz gibt es sehr wenige Käufer, die bereit sind, die Arbeit zu leisten, die solche Transaktionen erfordern. Deals sind für Private-Equity-Fonds zu klein, um deren Overhead zu rechtfertigen. Unternehmen sind für Investoren, die Distanz wünschen, zu gründerabhängig. Und die Übergänge sind zu menschlich — zu sehr auf Vertrauen, Beziehungen und Sorgfalt angewiesen — um von jemandem geleitet zu werden, der nicht bereit ist, sich einzubringen.",
      "Doch genau diese Unternehmen sind oft diejenigen, die lokal am meisten zählen. Sie beschäftigen Menschen, die schon Jahre dort sind. Sie bedienen Kundinnen und Kunden, die auf sie angewiesen sind. Wenn sie schliessen, weil sich kein Käufer zeigte, ist der Verlust leise, aber real.",
      "Saha existiert, weil diese Lücke nicht bestehen sollte. Gute Unternehmen sollten nicht verschwinden, bloss weil ein Zeitfenster zu engen ist.",
    ],
    callout: {
      type: "quote" as const,
      text: "Gute Unternehmen sollten nicht verschwinden, bloss weil ein Zeitfenster zu engen ist.",
    },
  },

  audiences: [
    {
      label: "Für Gründer",
      heading: "Ihr Unternehmen verdient ein überlegtes nächstes Kapitel",
      description:
        "Sie haben etwas aufgebaut, das zählt — für Ihr Team, Ihre Kundinnen und Kunden, und Ihre Region. Saha steht dafür, das weiterzutragen mit der Ernsthaftigkeit und Sorgfalt, die es verdient.",
      cta: { label: "Mehr erfahren", href: "/founders" },
    },
    {
      label: "Für Investoren",
      heading: "Ein diszipliniertes Modell in einem übersehenen Segment",
      description:
        "Wiederholbare Akquisitionsprozesse in einer strukturierten Deal-Pipeline, disziplinierten Einstiegsbewertungen, persönlich gestaltete Übergänge und langfristige Haltung. Konzipiert für Compounding, nicht für Exits.",
      cta: { label: "Mehr erfahren", href: "/investors" },
    },
  ],

  buildersStrip: {
    heading: "Helfen Sie uns, Saha von Grund auf aufzubauen",
    description:
      "Wir stellen ein kleines Team in der Gründungsphase zusammen. Wenn Sie die ersten Akquisitionen, den Due-Diligence-Prozess und das Betriebsmodell eines Unternehmens mitgestalten möchten — das ist frühe, echte Arbeit.",
    cta: { label: "Mehr erfahren", href: "/join" },
  },

  modelSectionLabel: "So arbeiten wir",
  model: {
    heading: "Passende Unternehmen finden. Sie sorgfältig übergeben. Sie für immer bewahren.",
    steps: [
      {
        number: "01",
        title: "Unternehmen finden, die jenseits des Gründers florieren können",
        description:
          "Wir suchen profitable, gründergeführte Schweizer Unternehmen unter CHF 10 Millionen Umsatz, bei denen Nachfolge der primäre Verkaufsgrund ist. Neben der finanziellen Gesundheit achten wir sorgfältig darauf, ob das Geschäft realistische Chancen hat, ohne seinen Gründer weiterzufunktionieren — stabile Nachfrage, ein fähiges Team, handhabbare Kundenkonzentration und eine gut strukturierbare Übergabe.",
      },
      {
        number: "02",
        title: "Die Übergabe mit Bedacht gestalten",
        description:
          "Jede Übernahme folgt einer strukturierten Übergabe, um zu bewahren, was zählt: Gründerhandover, Kundenkontinuität, Teamstabilität und enge Aufmerksamkeit in den ersten zwölf Monaten. Hier entscheidet sich der Erfolg oder Misserfolg von Deals, und wir behandeln dies als eine unserer wichtigsten Fähigkeiten.",
      },
      {
        number: "03",
        title: "Unterstützung anbieten, wo sie wirklich hilft",
        description:
          "Im Verlauf der Zeit können unsere Unternehmen auf gemeinsame Fähigkeiten zugreifen — finanzielle Disziplin, Reporting, Unterstützung bei Einstellungen, Prozessverbesserung und Betriebsführung. Aber Unterstützung ist immer selektiv. Lokale Teams tragen weiterhin die Verantwortung, das Geschäft zu führen und zu wachsen. Wir helfen, wo es nützlich ist, nicht, wo es uns passt.",
      },
      {
        number: "04",
        title: "Langfristig halten",
        description:
          "Wir kaufen Unternehmen nicht, um sie weiterzuverkaufen. Langfristige Eigentümerschaft bedeutet, dass wir Entscheidungen treffen können, die Teams, Kundinnen und Kunden und Geschäftsqualität wirklich dienen — ohne den Druck eines Exit-Zeitplans. Jedes Unternehmen bleibt in der Saha-Familie, und das Portfolio wird mit der Zeit stärker.",
      },
    ],
  },

  moreThanBuyerSectionLabel: "Mehr als ein Käufer",
  moreThanBuyer: {
    heading: "Mehr als ein Käufer",
    intro: "Nicht jedes kleine Unternehmen lässt sich einfach übergeben. Kleinere Unternehmen brauchen oft mehr als einen willigen Käufer — sie brauchen eine strukturierte Übergabe, operative Kontinuität und Unterstützung, die über die Transaktion hinaus besteht. Saha wird genau dafür aufgebaut.",
    items: [
      {
        title: "Systematisches Sourcing",
        description:
          "Wir bauen einen bewussteren Weg auf, Unternehmen in der Übergabephase zu identifizieren — mit weniger Abhängigkeit von Vermittlern und einer direkteren, beziehungsbasierten Pipeline.",
      },
      {
        title: "Führungskontinuität",
        description:
          "Im Verlauf der Zeit will Saha ein Netzwerk von Operatoren und zukünftigen Führungskräften aufbauen, die für Nachfolge-Übergänge trainiert sind — damit Unternehmen nach dem Weggang des Gründers weiter florieren können.",
      },
      {
        title: "Übergabedisziplin",
        description:
          "Die Übergabeperiode ist dort, wo die meisten Deals Erfolg oder Misserfolg haben. Wir behandeln sie als Kernfähigkeit — strukturiert, gründerspezifisch und mit jeder Übernahme verfeinert.",
      },
      {
        title: "Geteilte operative Fähigkeiten",
        description:
          "Wo nützlich, können Unternehmen im Saha-Portfolio auf geteilte Unterstützung in Finanzen, Reporting, Administration und Prozessverbesserung zugreifen. Hilfe, die selektiv ist, nicht aufgezwungen.",
      },
    ],
    closingLine: "Jede Übernahme stärkt das Modell. So wird dieses Segment im grossen Massstab tragfähig.",
  },

  differentiatorsSectionLabel: "Was uns unterscheidet",
  differentiators: {
    heading: "Ein Modell für kleinere Übergangstransaktionen",
    items: [
      {
        title: "Gebaut für Unternehmen unter CHF 10 Millionen",
        description:
          "Wir arbeiten in einem Segment, das die meisten institutionellen Käufer übersehen. Unser Modell, unsere Kosten und unsere Erwartungen sind von Tag eins an für diese Dealgrössse ausgelegt.",
      },
      {
        title: "Wir denken gründlich darüber nach, was nach dem Gründer kommt",
        description:
          "Bevor wir ein Unternehmen akquirieren, bewerten wir, ob es realistische Chancen ohne seinen Gründer fortbestehen kann. Nicht jedes gute Unternehmen ist eine gute Übernahme.",
      },
      {
        title: "Übergabe als Kernkompetenz",
        description:
          "Die Übergabefrist ist dort, wo das meiste schiefgehen kann. Sie erfordert menschliches Urteilsvermögen, Empathie und enge Aufmerksamkeit. Wir behandeln die Übergabe als Disziplin, nicht als Formalität.",
      },
      {
        title: "Kein Exit-Zeitplan, kein erzwungener Verkauf",
        description:
          "Wir halten dauerhaft. Entscheidungen werden für die Gesundheit jedes Unternehmens getroffen, nicht um einen Fundfonds-Termin zu erfüllen oder einen Quartalsbericht zu beeindrucken.",
      },
    ],
  },

  finalCtaFounders: {
    heading: "Denken Sie über die Zukunft nach?",
    description:
      "Falls Sie als Gründer die Zukunft Ihres Unternehmens in Betracht ziehen, würden wir uns über ein ruhiges, vertrauliches Gespräch freuen. Keine Verpflichtung, kein Druck.",
    cta: { label: "Ein Gespräch führen", href: "/contact" },
  },

  finalCtaOther: {
    heading: "Investoren und zukünftige Team-Mitglieder",
    description:
      "Falls Sie ein Investor sind, der sich für das Modell interessiert, oder jemand, der Saha mitaufbauen möchte, hören wir gerne von Ihnen.",
    cta: { label: "Kontaktieren Sie uns", href: "/contact" },
  },
};

/* ── For Founders ───────────────────────────── */

export const foundersPage = {
  hero: {
    eyebrow: "Für Gründer",
    headline: "Sie haben etwas Bewahrenwertes aufgebaut",
    subheadline:
      "Wenn die Zeit kommt, einen Schritt zurückzutreten, verdient Ihr Unternehmen — und die Menschen, die davon abhängen — mehr als eine unsichere Übergabe. Saha akquiriert profitable Schweizer Unternehmen unter CHF 10 Millionen Umsatz von Gründern, die bereit sind, die Fackel weiterzureichen, und behält sie langfristig.",
  },

  intro: {
    heading: "Wir verstehen, was auf dem Spiel steht",
    paragraphs: [
      "Ein Unternehmen zu verkaufen, das Sie aus dem Nichts aufgebaut haben, ist nicht nur eine finanzielle Entscheidung. Es ist persönlich. Ihr Name steht dafür. Ihr Team vertraut Ihnen. Ihre Kundinnen und Kunden verlassen sich auf die Standards, die Sie setzen. Den richtigen nächsten Eigentümer zu finden ist eine der wichtigsten Entscheidungen, die Sie je treffen werden.",
      "Saha wurde von Menschen aufgebaut, die das verstehen. Unser Modell ist darauf ausgelegt, das zu ehren, was Sie geschaffen haben — indem wir es bewahren, unterstützen und mit der gleichen Ernsthaftigkeit vorantragen, die Sie mitgebracht haben, als Sie es aufgebaut haben. Wir sind nicht hier, um umzubranding, zu restrukturieren oder schnell zu verkaufen. Wir sind hier, um weiterzumachen, was Sie angefangen haben.",
    ],
    callout: {
      type: "quote" as const,
      text: "Ihr Name steht dafür. Ihr Team vertraut Ihnen. Das nehmen wir ernst.",
    },
  },

  whatWeLookFor: {
    heading: "Was zu uns passt",
    transitionLine: "Um sicherzustellen, dass wir füreinander die richtige Lösung sind, hier ist, worauf wir bei den Unternehmen achten, die wir erwerben.",
    description: "Wir suchen nach Unternehmen, die jenseits des Gründers realistisch florieren können. Typischerweise bedeutet das:",
    criteria: [
      "Profitable und etabliert — normalerweise lange Zeit von einem Gründer geleitet",
      "Umsatz generell unter CHF 10 Millionen",
      "Der Gründer erwägt Nachfolge oder Ruhestand als primären Grund für einen Verkauf",
      "Nachfrage, die stabil oder wiederkehrend ist — nicht projektbasiert oder abhängig von einigen wenigen grossen Aufträgen",
      "Ein fähiges Team, das bereits vorhanden ist, mit operativer Stärke über den Gründer hinaus",
      "Eine Übergabe, die realistisch geplant und innerhalb eines vernünftigen Zeitrahmens durchgeführt werden kann",
    ],
    callout: {
      type: "quote" as const,
      text: "Wir suchen nach Unternehmen, die den Gründer überdauern können — nicht nur nach guten Unternehmen zu einem guten Preis.",
    },
  },

  notAFit: {
    heading: "Wenn Saha wahrscheinlich nicht der richtige Käufer ist",
    description: "Wir sind absichtlich selektiv und ehrlich über das, was ausserhalb unseres Modells liegt. Wir sind ein unwahrscheinlicher Käufer, wenn:",
    criteria: [
      "Das Geschäft stark von den persönlichen Beziehungen oder der Verkaufsfähigkeit des Gründers abhängt",
      "Die Situation unmittelbare Restrukturierung oder eine finanzielle Sanierung erfordert",
      "Der Umsatz sich um einen einzelnen Kunden oder Auftrag konzentriert",
      "Das Einnahmemodell hochgradig projektbasiert oder unvorhersehbar ist",
      "Es keinen realistischen Weg zu einer strukturierten Übergabe innerhalb eines vernünftigen Zeitrahmens gibt",
      "Die Nische sich strukturell im Niedergang befindet und begrenzte Langfristigkeitsviabilität hat",
    ],
  },

  founderExpectations: {
    heading: "Was Sie von uns erwarten können",
    items: [
      {
        title: "Ihr Unternehmen behält seine Identität",
        description:
          "Wir bewahren die Identität, Brand und lokale Präsenz jedes Unternehmens, das wir erwerben. Ihr Unternehmen operiert weiterhin als es selbst — in seinem Markt, mit seinem Team.",
      },
      {
        title: "Ihre Beteiligung liegt in Ihrer Hand",
        description:
          "Einige Gründer bevorzugen einen sauberen Übergang. Andere bleiben eine Zeitlang in einer Beratungsrolle beteiligt. Wir gestalten die Übergabe so, dass sie sich für Sie richtig anfühlt.",
      },
      {
        title: "Ein fairer Preis — und mehr als nur eine Zahl",
        description:
          "Wir bieten transparente, faire Bewertungen. Wir verstehen auch, dass für viele Gründer das Wissen, dass Team und Kunden gut betreut werden, genauso wichtig ist wie der Preis.",
      },
      {
        title: "Ihr Team ist geschützt",
        description:
          "Wir akquirieren Unternehmen nicht, um Kosten zu senken oder Stellen abzubauen. Die Menschen, die Sie eingestellt haben, die Rollen, die Sie geprägt haben, und die Arbeitsbeziehungen, die Sie aufgebaut haben, bleiben bei der Übergabe und darüber hinaus erhalten.",
      },
    ],
  },

  process: {
    heading: "Wie es ist, mit uns zu arbeiten",
    description:
      "Es gibt keinen Druck und keine Verpflichtung in irgend einer Phase. Wir arbeiten in einem Tempo, das sich für Sie richtig anfühlt.",
    steps: [
      {
        title: "Ein vertrauliches erstes Gespräch",
        description:
          "Wir beginnen mit einem privaten, unverbindlichen Gespräch, um Ihr Unternehmen, Ihre Überlegungen und Ihren Zeitrahmen zu verstehen. Nichts rückt voran, wenn Sie das nicht möchten.",
      },
      {
        title: "Verstehen, ob es eine Passung gibt",
        description:
          "Falls gegenseitiges Interesse besteht, nehmen wir uns Zeit zu verstehen, ob Ihr Unternehmen zu unserem Modell passt — Profitabilität, Team-Stärke, Kundenstabilität und ob die Übergabe realistisch strukturiert werden kann.",
      },
      {
        title: "Das Unternehmen tiefgreifender kennenlernen",
        description:
          "Wir verbringen Zeit damit, Ihre Betriebsabläufe, Kundinnen und Kunden, Team-Dynamik und Ihre tägliche Rolle zu verstehen. Es geht genauso sehr um Menschen wie um Zahlen.",
      },
      {
        title: "Ein klares, faires Angebot",
        description:
          "Wir präsentieren einen unkomplizierten Vorschlag ohne aggressive Taktiken und keine Überraschungen in letzter Minute. Faire Bedingungen, die den Wert dessen widerspiegeln, was Sie aufgebaut haben.",
      },
      {
        title: "Due Diligence und Übergabeplanning",
        description:
          "Formale Due Diligence neben detaillierter Planung für die Übergabe — wer übernimmt was, wie Kundinnen und Kunden kommuniziert werden und wie das erste Jahr aussieht.",
      },
      {
        title: "Eine sorgfältige, strukturierte Übergabe",
        description:
          "Wir führen die Übergabe mit Sorgfalt aus: Gründerhandover, Team-Kontinuität, Kundenkommunikation und enge Aufmerksamkeit zur Betriebsstabilität von Tag eins an.",
      },
    ],
  },

  closingCta: {
    heading: "Ihr Unternehmen verdient ein ernsthaftes Gespräch",
    description:
      "Wenn Sie als Gründer beginnen, über die Zukunft nachzudenken, würden wir uns freuen, Ihnen zuzuhören. Alles ist vertraulich, es gibt keine Verpflichtung und das Tempo liegt ganz bei Ihnen.",
    cta: { label: "Mit uns sprechen", href: "/contact" },
  },
};

/* ── For Investors ──────────────────────────── */

export const investorsPage = {
  hero: {
    eyebrow: "Für Investoren",
    headline: "Ein Langzeitmodell der\nEigentümerschaft für Schweizer Übergangstransaktionen",
    subheadline:
      "Saha akquiriert profitable Schweizer Unternehmen unter CHF 10 Millionen Umsatz, wo Nachfolge Gelegenheit schafft, aber konventionelles Kapital selten beteiligt ist. Wir führen Übergaben sorgfältig durch und halten dauerhaft.",
  },

  thesis: {
    heading: "Die Investitionsthese",
    paragraphs: [
      "In der Schweiz gibt es ein grosses und wachsendes Segment von profitablen, gründergeführten Unternehmen, die sich dem Übergangsprozess nähern. Diese Unternehmen sind oft gut geführt, cashflow-generativ und tief in ihren lokalen Märkten verwurzelt — doch sie liegen unter der Schwelle, wo die meisten institutionellen Käufer tätig sind.",
      "Alles unter CHF 10 Millionen Umsatz ist praktisch unsichtbar für institutionelle Deal-Flows. Doch die CFB-HSG/UBS-Nachfolgestudie zeigt, dass etwa jeder dritte Schweizer KMU-Inhaber eine Übertragung innerhalb von fünf Jahren erwartet — und nur etwa zwei Drittel dieser Übergaben werden erwartet, erfolgreich abgeschlossen zu werden.",
      "Die Lücke ist nicht ein Mangel an guten Unternehmen. Sie ist die Abwesenheit eines Käufermodells, das speziell für dieses Segment gebaut wurde. Diese Deals erfordern praktische Übergabefähigkeiten, Gründer-Einfühlungsvermögen und die Bereitschaft, komplexe, kleinere Transaktionen zu machen, die nicht standardisiert werden können. Saha wird speziell für diese Arbeit aufgebaut.",
      "Weil wir dauerhaft halten, kumulieren unsere Renditen. Jede Übernahme verfeinert unsere Sourcing-, Übergabe- und Betriebsfähigkeiten — was die nächste effizienter und weniger riskant macht.",
    ],
    callout: {
      type: "stat" as const,
      value: "1 von 3",
      caption: "Schweizer KMU-Inhaber erwartet eine Übertragung innerhalb von fünf Jahren — aber das Segment unter CHF 10 Millionen ist institutionellem Kapital weitgehend unsichtbar",
    },
  },

  mustBeTrue: {
    heading: "Was wahr sein muss, damit dieses Modell funktioniert",
    description:
      "Wir denken klar über unsere eigenen Annahmen nach. Damit Saha erfolgreich ist, müssen folgende Punkte gelten:",
    items: [
      {
        title: "Wir müssen übertragbare Unternehmen kaufen, nicht nur billige",
        description:
          "Ein niedriger Preis macht keine gute Übernahme. Das Unternehmen muss funktionieren, Kundinnen und Kunden halten und Umsatz generieren, nachdem der Gründer weg ist. Übertragbarkeit ist der kritische Filter.",
      },
      {
        title: "Übergaben müssen strukturiert und gründerspezifisch sein",
        description:
          "Jede Übergabe ist anders. Es gibt kein generisches Playbook. Erfolg hängt ab von Verständnis, was der Gründer wirklich macht, wer übernehmen kann und wie man Kundinnen/Kunden- und Team-Vertrauen durch die Veränderung bewahrt.",
      },
      {
        title: "Unterstützung muss nützlich sein, ohne Overhead zu blähen",
        description:
          "Gemeinsame Fähigkeiten machen nur Sinn, wenn sie wirklich jedem Unternehmen helfen. Wir müssen vermeiden, zentrale Funktionen zu bauen, die die Holding mehr dienen als das Portfolio.",
      },
      {
        title: "Early Deals sind überproportional wichtig",
        description:
          "Die ersten Übernahmen setzen den Ton für Sourcing, Übergabe-Qualität und Ruf. Sie richtig zu machen ist wichtiger als sie schnell zu machen.",
      },
      {
        title: "Disziplin ist wichtiger als Geschwindigkeit",
        description:
          "Das Modell hängt davon ab, öfter Nein zu sagen als Ja. Pipeline-Volumen ist nicht die Einschränkung — Urteilskraft und Selektivität sind es.",
      },
    ],
  },

  howModelCompounds: {
    heading: "Wie das Modell kumuliert",
    paragraphs: [
      "Saha stellt nicht einfach ein Portfolio kleiner Unternehmen zusammen. Saha baut die Infrastruktur auf, die dieses Segment erwerbbar und nachhaltig im grossen Massstab macht.",
      "Diese Infrastruktur umfasst: einen systematischen Sourcing-Prozess, der die Abhängigkeit von Vermittlern reduziert; ein Übertragbarkeits-Framework, das nach Unternehmen filtert, die ihren Gründer überdauern können; ein wachsendes Netzwerk von Operatoren, die für Nachfolge-Übergänge trainiert sind; ein operatives Playbook, das sich mit jeder Übernahme verbessert; selektive geteilte Fähigkeiten in Finanzen, Reporting und Administration; und leichte Technologie, die interne Effizienz verbessert, ohne das menschliche Urteilsvermögen zu ersetzen, das Nachfolge erfordert.",
      "Jede Übernahme macht die nächste günstiger zu sourchen, schneller überzuleiten und besser begleitet. Das ist die Kumulationslogik hinter dem Modell — und was Saha von einer gut gemeinten Holding mit Kapital unterscheidet.",
    ],
  },

  willNotBuy: {
    heading: "Was wir nicht kaufen",
    description: "Disziplin bedeutet, Grenzen klar zu sein:",
    items: [
      "Notleidende Sanierungen, die unmittelbare Restrukturierung erfordern",
      "Gründerabhängige Unternehmen ohne realistischen Übergabeplan",
      "Unternehmen mit hohen Kapitalausgaben-Anforderungen, die freien Cashflow begrenzen",
      "Strukturell sinkende Nischen ohne Langzeitviabilität",
      "Unternehmen zu klein, um die Ökonomie einer strukturierten Übergabe zu tragen",
    ],
  },

  whereWeAre: {
    heading: "Wo wir jetzt sind",
    paragraphs: [
      "Saha ist ein Unternehmen in Gründung. Wir bauen durchdacht auf: Team-Kern zusammensetzen, Kapitalbasis strukturieren und frühe Übergabegespräche führen. Wir haben noch keine erste Übernahme abgeschlossen — absichtlich, nicht aus Verzögerung.",
      "Wir bauen für einen First Close, nicht für Masseneinsatz. Die ersten Deals werden die Sourcing-These, das Übergabe-Modell und die Betriebs-Disziplin beweisen. Alles danach hängt davon ab, das richtig zu machen.",
    ],
    items: [
      "Gründungs-CTO und -COO Rollen werden rekrutiert",
      "Kapitalstruktur wird finalisiert",
      "Erste Übergabegespräche laufen",
      "Rechtsstruktur wird finalisiert",
      "Bauen für First Close, nicht für Scale",
    ],
  },

  whyDifferent: {
    heading: "Warum Saha sich von einem traditionellen Fonds unterscheidet",
    paragraphs: [
      "Die meisten Akquisitionsfahrzeuge sind um ein endliches Fonds-Leben gebaut — kaufen, verbessern, ausstieg innerhalb eines bestimmten Horizonts. Diese Struktur schafft innewohnende Spannung zwischen kurzfristiger Leistung und langfristiger Geschäftsgesundheit.",
      "Saha ist ein permanentes Holdingkonzern. Wir akquirieren Unternehmen, um sie zu behalten. Unsere Anreize sind vollständig mit dem Langzeiterfolg jedes Unternehmens und des Gesamt-Portfolios ausgerichtet. Es gibt keine Exit-Uhr, keine erzwungenen Realisierungen und keinen Druck, für Quartals-Optik zu optimieren.",
    ],
    callout: {
      type: "quote" as const,
      text: "Wir akquirieren Unternehmen, um sie zu behalten. Unsere Anreize sind vollständig mit Langzeiterfolg ausgerichtet.",
    },
  },

  closingCta: {
    heading: "Interessiert an mehr Informationen?",
    description:
      "Wir strukturieren Saha für eine kleine Zahl von ausgerichteten, langfristigen Investoren. Wenn die These resoniert, heissen wir ein privates Gespräch willkommen, um Passung zu erkunden.",
    cta: { label: "Investor-Anfragen", href: "/contact" },
  },
};

/* ── Join Saha ──────────────────────────────── */

export const joinPage = {
  hero: {
    eyebrow: "Saha beitreten",
    headline: "Bauen Sie etwas von Grund auf auf",
    subheadline:
      "Saha ist in der Gründungsphase — vor unserer ersten Übernahme. Wir setzen ein kleines Team zusammen, um das Sourcing-Modell, den Due-Diligence-Prozess, den Übergabe-Ansatz und die Betriebs-Kultur zu prägen. Falls Sie in Jahrzehnten denken und sich um Handwerk kümmern, ist das frühe, sinnvolle Arbeit.",
  },

  intro: {
    heading: "Saha braucht die richtigen Menschen",
    paragraphs: [
      "Saha ist ein Unternehmen in Gründung — vor unserer ersten Übernahme. Wir setzen ein kleines Team zusammen, um das Sourcing-Modell, den Due-Diligence-Prozess, den Übergabe-Ansatz und die Betriebs-Kultur zu prägen. Falls Sie in Jahrzehnten denken und sich um Handwerk kümmern, ist das frühe, sinnvolle Arbeit.",
    ],
  },

  whyJoin: {
    heading: "Warum Sie in dieser Phase beitreten sollten",
    paragraphs: [
      "Die meisten beruflichen Möglichkeiten sind Optimierungen innerhalb vorhandener Strukturen. Saha ist anders. Wir bauen ein langfristiges Eigentums-Unternehmen für Schweizer Unternehmen von Grund auf — die Strategie, die Kultur, die Systeme, die Werte, alles wird gerade geprägt.",
      "Die Menschen, die in dieser Phase beitreten, werden nicht nur Rollen ausfüllen — sie werden definieren, was Saha wird. Die erste Übernahme, die erste Übergabe, das erste Betriebs-Playbook. Das ist die Art von Arbeit, wo alles, was Sie tun, zählt.",
    ],
  },

  foundingRoles: {
    heading: "Offene Gründungsrollen",
    intro: "Wir rekrutieren für zwei Gründungsrollen, die die Arbeitsweise von Saha von Anfang an prägen werden. Das sind keine Angestellten — das sind Mitaufbauer.",
    roles: [
      {
        title: "Gründungs-CTO — Plattform & Daten",
        description: "Wird die operative Schicht hinter Saha aufbauen: Sourcing-Systeme, Due-Diligence-Workflows, Portfolio-Reporting, interne Tools und Dateninfrastruktur, die Übergaben wiederholbarer und skalierbarer machen.",
        ctaLabel: "Interesse bekunden →",
        ctaHref: "/contact",
      },
      {
        title: "Gründungs-COO — Integration & Shared Services",
        description: "Wird die Übergabe-Ausführung über akquirierte Unternehmen hinweg konzipieren und leiten: Playbooks für die ersten 100 Tage, Rollout geteilter Services, operative Kadenz und Performance-Management über das Portfolio.",
        ctaLabel: "Interesse bekunden →",
        ctaHref: "/contact",
      },
    ],
    transitionLine: "Über diese zwei Rollen hinaus bauen wir auch ein kleines, breiteres Team in den folgenden Bereichen auf.",
  },

  roles: {
    heading: "Was wir brauchen",
    description:
      "Wir stellen nicht für Job-Titel ein. Wir suchen nach Menschen mit den richtigen Fähigkeiten, Disposition und Ehrgeiz, von ganz am Anfang mit uns aufzubauen.",
    profiles: [
      {
        title: "Deal und Due Diligence",
        description:
          "Menschen, die akquirieren, evaluieren und Übernahmen im Sub-CHF-10m-Schweizer-Markt strukturieren können. Sie verstehen, was ein kleines Unternehmen funktioniert, können Financials lesen und Risiko bewerten und wissen, wie man Vertrauen mit Gründern und Beratern aufbaut.",
      },
      {
        title: "Übergabe und Betrieb",
        description:
          "Menschen, die in ein übernommenes Unternehmen einsteigen und es durch die Übergabe führen können. Sie verwalten den Gründer-Exit, stabilisieren das Team, halten Kundenbeziehungen aufrecht und legen das Fundament für langfristige Gesundheit.",
      },
      {
        title: "Finanzen und Infrastruktur",
        description:
          "Menschen, die Finanz-Reporting, administrative Systeme und operative Prozesse bauen können, die eine wachsende Unternehmensfamilie zusammenhält. Die stille Infrastruktur, die alles andere möglich macht.",
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
        description: "Wir kümmern uns darum, Dinge gut zu machen, nicht nur sie schnell zu machen.",
      },
      {
        title: "Stille Ambition",
        description: "Wir zielen darauf ab, etwas Bedeutsames aufzubauen, ohne laut darüber zu sein.",
      },
      {
        title: "Empathie und Respekt",
        description: "Wir arbeiten mit Gründern, Teams und Gemeinschaften. Beziehungen zählen.",
      },
      {
        title: "Eigentums-Mentalität",
        description: "Jeder, der Saha aufbaut, sollte wie ein Eigentümer denken und handeln.",
      },
    ],
  },

  closingCta: {
    heading: "Das könnte etwas für Sie sein",
    description:
      "Falls das, was Sie gelesen haben, resoniert — auch wenn Sie nicht genau in eines der oben genannten Profile passen — würden wir gerne von Ihnen hören. Erzählen Sie uns, wer Sie sind und was Sie zu Saha zieht.",
    cta: { label: "Kontaktieren Sie uns", href: "/contact" },
  },
};

/* ── About ──────────────────────────────────── */

export const aboutPage = {
  hero: {
    eyebrow: "Über Saha",
    headline: "Warum Saha existiert",
    subheadline:
      "Zu viele gute Schweizer Unternehmen verschwinden nicht weil sie scheitern, sondern weil ihre Gründer ohne klaren Weg forward in den Ruhestand gehen. Saha wurde geschaffen, das zu ändern.",
  },

  founderNote: {
    heading: "Ein Wort des Gründers",
    paragraphs: [
      "Ich habe Jahre damit verbracht, in Frühphasen-Unternehmen und Firmen in verschiedenen Wachstumsphasen zu arbeiten — und das Muster, auf das ich immer wieder stiess, war dasselbe. Gute Unternehmen, geführt von fähigen Menschen, die still verschwanden — nicht weil sie gescheitert waren, sondern weil kein klarer Weg nach vorn existierte.",
      "In der Schweiz zeigt sich das auf besondere Weise. Tausende gründergeführte Unternehmen — profitabel, lokal verankert, vom Team und den Kunden geschätzt — erreichen einen Punkt, an dem der Gründer bereit ist, sich zurückzuziehen, und niemand bereit ist, den nächsten Schritt zu tun. Nicht weil das Unternehmen keinen Wert hat. Weil die Transaktion komplex ist, das Dealvolumen für institutionelle Käufer zu klein, und die menschliche Dimension der Übergabe mehr erfordert, als die meisten Käufer bereit sind zu geben.",
      "Saha ist mein Versuch, etwas zu bauen, das speziell für diese Lücke konzipiert ist — nicht nur als Käufer, sondern als Modell. Ein wiederholbarer Weg, diese Unternehmen zu identifizieren, sie sorgfältig überzuleiten und langfristig zu erhalten. Es ist noch früh. Aber ich glaube, dass die Infrastruktur hinter dieser Art von Eigentümerschaft das ist, was dem Segment bisher gefehlt hat.",
      "Falls das bei Ihnen Resonanz findet — als Gründer, Investor, oder jemand, der mitaufbauen möchte — würde ich mich aufrichtig über ein Gespräch freuen.",
    ],
    attribution: "— Temitope Ola, Gründer — Strategie & M&A, Saha",
    bio: "Gründer-Operator mit über 25 Jahren Erfahrung in Unternehmensaufbau, Finanzen und länderübergreifender Umsetzung. Bringt die Sourcing-Vision, die Akquisitionsthese und die Aufbauambition hinter Saha mit.",
  },

  foundingTeam: {
    heading: "Das Gründungsteam",
    intro: "Saha wird von einer kleinen Gruppe von Menschen mit komplementären Fähigkeiten in Akquisition, Betrieb und Infrastruktur zusammengestellt.",
    members: [
      {
        name: "Temitope Ola",
        subtitle: "Gründer — Strategie & M&A",
        description: "Sourcing-Vision, Akquisitionsthese und Unternehmensaufbau. Über 25 Jahre Erfahrung in Unternehmensaufbau, Finanzen und länderübergreifender Umsetzung.",
      },
      {
        name: "Gründungs-CTO",
        subtitle: "Plattform & Daten",
        description: "Baut die operative Schicht hinter Saha auf: Sourcing-Systeme, Due-Diligence-Workflows, Portfolio-Reporting, interne Tools und Dateninfrastruktur, die Übergaben wiederholbarer und skalierbarer machen.",
        status: "Rolle offen — Rekrutierung läuft",
      },
      {
        name: "Gründungs-COO",
        subtitle: "Integration & Shared Services",
        description: "Konzipiert und leitet die Übergabe-Ausführung über akquirierte Unternehmen hinweg: Playbooks für die ersten 100 Tage, Rollout geteilter Services, operative Kadenz und Performance-Management über das Portfolio.",
        status: "Rolle offen — Rekrutierung läuft",
      },
    ],
    closingLine: "Falls Sie die Erfahrung und Disposition haben, eine dieser Rollen auszufüllen, würden wir gerne von Ihnen hören.",
  },

  story: {
    heading: "Das Problem, das wir lösen wollten",
    paragraphs: [
      "Die Schweizer Wirtschaft ist auf kleinen und mittelständischen Unternehmen aufgebaut. Viele sind profitable, gut verwaltete Unternehmen mit loyalen Teams und starken lokalen Reputationen. Sie bilden das Fundament von Gemeinschaften überall im Land.",
      "Aber jedes Jahr stehen Tausende dieser Unternehmen einer unsicheren Zukunft gegenüber. Ihre Gründer — oft Menschen, die sie von Grund auf aufgebaut haben — nähern sich dem Ruhestandsalter ohne Nachfolgeplan. Die Optionen sind meist unbefriedigend: Verkauf an einen grossen, unpersönlichen Käufer; versuchte Übergabe an unvorbereitete Nachfolger; oder einfach Geschäftsschliessung.",
      "Saha wurde geschaffen, um etwas Besseres anzubieten. Wir glauben, dass starke, profitable, gut geführte Unternehmen nicht verschwinden sollten, bloss weil ein Zeitfenster zu engen ist. Sie verdienen einen Eigentümer, der ihre Geschichte respektiert, ihre Menschen unterstützt und sie mit Ernsthaftigkeit und Sorgfalt vorantragen wird.",
    ],
  },

  whyDifferentBuyer: {
    heading: "Warum diese Unternehmen einen anderen Käufertyp brauchen",
    paragraphs: [
      "Unternehmen unter CHF 10 Millionen Umsatz sitzen in einer strukturellen Lücke. Sie sind zu klein für die meisten institutionellen Käufer, die Dealgröszen brauchen, um ihre Ökonomie zu rechtfertigen. Sie sind zu gründerabhängig für passive Investoren, die keine Bereitschaft oder Kapazität für praktische Übergaben haben.",
      "Und sie sind zu wichtig — für Angestellte, für Kundinnen und Kunden, für Gemeinschaften — um einfach zu verschwinden, wenn sich kein Käufer zeigt. Dieses Segment braucht nicht mehr Kapital. Es braucht einen Käufer, der die menschliche Komplexität kleinerer Übergabe-Deals versteht und bereit ist, die Arbeit zu machen.",
    ],
  },

  approach: {
    heading: "Wie wir über Eigentümerschaft denken",
    paragraphs: [
      "Wir akquirieren Unternehmen mit der Absicht, sie zu behalten. Das ist nicht eine finanzielle Strategie in Verwaltungs-Gewand — es ist eine echte Überzeugung, dass langfristige Eigentümerschaft bessere Ergebnisse für Unternehmen, ihre Menschen und ihre Gemeinschaften produziert.",
      "Wir bieten jedem Unternehmen eine sorgfältige Übergabe, selektive operative Unterstützung und die Stabilität, die aus der Zugehörigkeit zu etwas Grösserem kommt. Dafür stärkt jedes Unternehmen das Ganze — durch gemeinsames Wissen, operative Disziplin und die kumulierenden Vorteile eines wachsenden, permanenten Portfolios.",
    ],
  },

  principles: {
    heading: "Was wir glauben",
    items: [
      {
        title: "Kontinuität über Disruption",
        description:
          "Gute Unternehmen sollten bewahrt und gestärkt werden, nicht auseinandergenommen für Teile.",
      },
      {
        title: "Verwaltung über Ausbeutung",
        description:
          "Eigentümerschaft trägt Verantwortung. Wir zielen darauf ab, jedes Unternehmen stärker zu verlassen als wir es gefunden haben.",
      },
      {
        title: "Geduld über Dringlichkeit",
        description:
          "Dauerhafter Wert wird langsam aufgebaut. Wir widerstehen dem Druck, für kurzfristige Ergebnisse zu optimieren.",
      },
      {
        title: "Klarheit über Komplexität",
        description:
          "Unser Modell ist von Design einfach. Komplexität sollte dem Unternehmen dienen, nicht dem Geschäftsmodell.",
      },
    ],
  },

  whereWeAreToday: {
    heading: "Wo wir heute sind",
    paragraphs: [
      "Saha ist in Gründung. Wir setzen das Anfangsteam zusammen, sprechen mit frühen Übernahmezielen und strukturieren die Kapitalbasis. Das ist durchdacht — wir glauben, dass die ersten Übernahmen das Unternehmen definieren und wir beabsichtigen, sie richtig zu machen.",
      "Wir bauen für das lange Geschäft. Jede Entscheidung, die wir treffen, wird von einer einfachen Frage geleitet: wird das noch in zwanzig Jahren Sinn machen?",
    ],
  },

  ambition: "Saha wird nicht nur als Holding aufgebaut, sondern als langfristiges Modell für die Nachfolge kleiner Unternehmen in der Schweiz. Wir glauben, dass der Grund, warum dieses Segment unterversorgt ist, nicht ein Mangel an guten Unternehmen ist — es ist die Abwesenheit eines Käufers mit der Infrastruktur, diese Deals zum Funktionieren zu bringen. Diese Infrastruktur aufzubauen, schrittweise und mit Disziplin, ist der Zweck von Saha.",

  closingCta: {
    heading: "Wir würden uns freuen, von Ihnen zu hören",
    description:
      "Egal, ob Sie ein Gründer sind, der über die Zukunft nachdenkt, ein Investor, der das Modell erkundet, oder jemand, der unsere Vision teilt — Sie sind willkommen, uns zu kontaktieren.",
    cta: { label: "Kontaktieren Sie uns", href: "/contact" },
  },
};

/* ── Contact ────────────────────────────────── */

export const contactPage = {
  hero: {
    eyebrow: "Kontakt",
    headline: "Ein Gespräch führen",
    subheadline:
      "Jede bedeutsame Beziehung beginnt mit einem Gespräch. Erzählen Sie uns ein wenig über sich und was Sie hierher gebracht hat.",
  },

  pathways: [
    {
      id: "founder",
      title: "Ich bin Gründer und überlege mir eine Nachfolge",
      description:
        "Wenn Sie über das nächste Kapitel für Ihr Unternehmen nachdenken, würden wir ein vertrauliches, unverbindliches Gespräch darüber willkommen heissen, ob Saha eine gute Passung sein könnte.",
      fields: [
        { name: "name", label: "Ihr Name", type: "text" as const, required: true },
        { name: "email", label: "Email-Adresse", type: "email" as const, required: true },
        { name: "phone", label: "Telefonnummer (optional)", type: "tel" as const, required: false },
        { name: "company", label: "Unternehmensname", type: "text" as const, required: false },
        { name: "message", label: "Erzählen Sie uns ein wenig über Ihr Unternehmen und Ihre Überlegungen", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "investor",
      title: "Ich bin Investor",
      description:
        "Wir strukturieren Saha für eine kleine Zahl von ausgerichteten, langfristigen Investoren. Wir heissen Gespräche willkommen, um Passung zu erkunden.",
      fields: [
        { name: "name", label: "Ihr Name", type: "text" as const, required: true },
        { name: "email", label: "Email-Adresse", type: "email" as const, required: true },
        { name: "firm", label: "Unternehmen oder Zugehörigkeit (optional)", type: "text" as const, required: false },
        { name: "message", label: "Was interessiert Sie an Saha?", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "builder",
      title: "Ich möchte mit Saha aufbauen",
      description:
        "Falls Sie ein Operator, Investor oder Unternehmer sind, der interessiert ist, Saha von Grund auf aufzubauen, würden wir gerne von Ihnen hören.",
      fields: [
        { name: "name", label: "Ihr Name", type: "text" as const, required: true },
        { name: "email", label: "Email-Adresse", type: "email" as const, required: true },
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
      "Antworten auf die Fragen, die wir am meisten von Gründern, Investoren und zukünftigen Team-Mitgliedern hören.",
  },

  groups: [
    {
      label: "Für Gründer",
      items: [
        {
          question: "Wie unterscheidet sich Saha von einem Private-Equity-Käufer?",
          answer:
            "Private-Equity-Firmen akquirieren typischerweise Unternehmen mit der Absicht, sie innerhalb von drei bis sieben Jahren zu verkaufen. Saha akquiriert Unternehmen, um sie dauerhaft zu halten. Es gibt keinen Exit-Zeitplan, keinen Druck zur Restrukturierung für Weiterverkauf und keinen Anreiz, kurzfristige Werte zu extrahieren. Unser Modell ist um Kontinuität aufgebaut, nicht um Transaktionen.",
        },
        {
          question: "Was passiert mit meinen Mitarbeitenden nach einem Verkauf?",
          answer:
            "Die Bewahrung Ihres Teams ist zentral für unseren Ansatz. Wir akquirieren Unternehmen nicht, um Kosten zu senken oder Stellen abzubauen. Vorhandene Angestellte, Rollen und Arbeitsbeziehungen werden durch die Übergabe und darüber hinaus bewahrt. Wir investieren in das Team, das Sie aufgebaut haben.",
        },
        {
          question: "Wie lange dauert der Prozess vom ersten Gespräch bis zum Abschluss?",
          answer:
            "Jede Situation ist unterschiedlich, aber ein typischer Prozess dauert drei bis sechs Monate vom ersten Gespräch bis zum Abschluss. Wir arbeiten in einem Tempo, das für Sie funktioniert — es gibt keinen Druck zu beeilen. Das erste Gespräch ist vertraulich und trägt keine Verpflichtung.",
        },
        {
          question: "Wird mein Unternehmen seinen Namen und Brand behalten?",
          answer:
            "Ja. Wir bewahren die Identität, Brand und lokale Präsenz jedes Unternehmens, das wir akquirieren. Ihr Unternehmen arbeitet weiterhin unter seinem eigenen Namen, in seinem eigenen Markt, mit seinem eigenen Team. Saha bietet Unterstützung aus dem Hintergrund.",
        },
        {
          question: "Muss ich nach dem Verkauf beteiligt bleiben?",
          answer:
            "Das liegt vollständig bei Ihnen. Einige Gründer bevorzugen einen sauberen Übergabeprozess, während andere eine Zeitlang in einer Beratungs- oder Teilzeitkapazität beteiligt bleiben. Wir gestalten die Übergabe um Ihre Vorlieben und Ihren Zeitrahmen.",
        },
        {
          question: "Welche Grösse von Unternehmen akquiriert Saha typischerweise?",
          answer:
            "Wir konzentrieren uns auf profitable, gründergeführte Schweizer Unternehmen generell unter CHF 10 Millionen Jahresumsatz. Die wichtigsten Faktoren sind die Qualität des Unternehmens, die Stärke des Teams und ob das Unternehmen realistisch florieren kann, nachdem der Gründer weg ist.",
        },
      ],
    },
    {
      label: "Für Investoren",
      items: [
        {
          question: "Was unterscheidet Saha von einer geduldigen Holding mit Kapital?",
          answer:
            "Eine Holding mit geduldigem Kapital ist eine Positionierung. Saha baut die Sourcing-, Übergabe- und Betriebs-Infrastruktur auf, die kleinere Nachfolgetransaktionen tatsächlich tragfähig macht — nicht nur finanzierbar. Das Modell ist auf Kumulation ausgelegt: Jede Übernahme verbessert unsere Prozesse, stärkt unser Operatoren-Netzwerk und reduziert Reibung bei der nächsten Transaktion. Das ist der Unterschied zwischen dem Besitz einer Sammlung von Unternehmen und dem Aufbau eines Akquisitions- und Betriebsmotors.",
        },
        {
          question: "Was ist Sahas Investitionsstruktur?",
          answer:
            "Saha ist ein permanentes Holdingkonzern, nicht ein traditioneller Fonds mit einer festen Laufzeit. Kapital wird in Übernahmen eingesetzt, die auf unbestimmte Zeit gehalten werden. Renditen werden durch die langfristigen Cashflows, organisches Wachstum und kumulative operative Stärke des Portfolios generiert.",
        },
        {
          question: "Wie generiert Saha Renditen ohne Exits?",
          answer:
            "Unsere Renditen kommen aus der Cash-generierenden Natur der Unternehmen, die wir akquirieren, Reinvestition freier Cashflows in neue Übernahmen und organisches Wachstum jedes Unternehmens über Zeit. Die Abwesenheit von Exit-Druck ermöglicht Entscheidungen, die langfristigen Wert optimieren statt kurzfristige Metriken. Richtungweisend zielen wir auf Einstiege bei 3–5× EBITDA in Cash-generierenden Unternehmen, mit Renditen aus operativem Cashflow, organischem Wachstum und Portfolio-Kumulation über Zeit. Wir optimieren nicht für eine einzelne IRR-Metrik — wir optimieren für dauerhaften, kumulierenden Wert. Vollständige Finanzdokumentation und Rendite-Modellierung werden in direkten Gesprächen geteilt.",
        },
        {
          question: "Was ist das Ziel-Rendite-Profil?",
          answer:
            "Wir zielen darauf ab, Portfolio-Wert langfristig durch Übernahme-Disziplin, operative Verbesserung und organisches Wachstum kontinuierlich zu kummen. Wir strukturieren Saha für eine kleine Zahl von ausgerichteten Langzeit-Investoren und teilen vollständige Dokumentation in privaten Diskussionen.",
        },
        {
          question: "Wie verwaltet Saha Risiko über das Portfolio?",
          answer:
            "Risiko wird durch Diversifikation über Industrien und Geographien innerhalb der Schweiz, disziplinierte Einstiegsbewertungen, strukturierte Übergabe-Prozesse und gemeinsame Finanz-Überwachung mit Early-Warning-Systemen verwaltet. Jedes Unternehmen arbeitet unabhängig, was Ansteckungsrisiko begrenzt.",
        },
        {
          question: "Was ist die minimale Investitionsverpflichtung?",
          answer:
            "Wir strukturieren Saha für eine kleine Zahl von ausgerichteten, langfristigen Investoren. In dieser Phase zählt Selektivität und strukturelle Passung mehr als Skala. Minimale Verpflichtungen und Bedingungen werden direkt besprochen.",
        },
        {
          question: "Warum konzentrieren sich auf Unternehmen unter CHF 10 Millionen Umsatz?",
          answer:
            "Dieses Segment ist strukturell unterversorgt. Die meisten institutionellen Käufer, Berater und M&A-Datensets konzentrieren sich über CHF 10 Millionen. Darunter existieren profitable Nachfolgeunternehmen in grossen Mengen, aber es fehlt ein Käufermodell dafür. Das ist die Lücke, die Saha füllt.",
        },
      ],
    },
    {
      label: "Für Aufbauer & Team",
      items: [
        {
          question: "Was für Menschen sucht Saha?",
          answer:
            "Wir suchen Menschen, die in Jahrzehnten denken, sich um Handwerk kümmern und etwas aufbauen möchten, das dauert. Relevante Hintergründe sind Betrieb, Finanzen, M&A, General Management und Technologie — aber Disposition und Ausrichtung zählen mehr als ein spezifischer Titel oder Herkunft.",
        },
        {
          question: "Stellt Saha gerade für spezifische Rollen ein?",
          answer:
            "Wir sind in der Gründungsphase — vor unserer ersten Übernahme. Wir sind immer offen, von aussergewöhnlichen Menschen zu hören. Auch ohne offene Stelle, heissen wir Vorstellungen von jemandem willkommen, der sich stark mit dem ausgerichtet fühlt, das wir aufbauen.",
        },
        {
          question: "Wo ist Saha ansässig?",
          answer:
            "Saha ist in der Schweiz ansässig. Unser Team arbeitet überall im Land, nah bei den Unternehmen, die wir akquirieren und unterstützen. Wir schätzen Präsenz und Nähe — nah bei den Teams und Gemeinschaften, die wir bedienen.",
        },
      ],
    },
    {
      label: "Allgemein",
      items: [
        {
          question: "Warum der Name Saha?",
          answer:
            "Saha ist ein Wort, das in Geduld, Ausdauer und der Kapazität zu tragen mit Sorgfalt verwurzelt ist. Es spiegelt die Langzeitmentalität wider, die im Kern von allem, das wir tun, steht — Unternehmen akquirieren und bewahren nicht für einen Zyklus, sondern für eine Generation.",
        },
        {
          question: "Ist Saha ein Fonds oder ein Unternehmen?",
          answer:
            "Saha ist ein permanentes Holdingkonzern. Anders als ein Fonds gibt es keine vorbestimmte Exit-Zeitlinie. Unternehmen, die wir akquirieren, werden Teil der Saha-Familie dauerhaft. Diese Struktur richtet unsere Anreize mit der Langzeitgesundheit jedes Unternehmens, das wir besitzen, aus.",
        },
        {
          question: "Wie viele Unternehmen besitzt Saha derzeit?",
          answer:
            "Saha ist in Gründung. Wir bauen absichtlich die Grundlage — Team, Prozesse und Kapital — auf, bevor wir unsere ersten Übernahmen machen. Wir glauben, dass das Modell richtig zu machen wichtiger ist als schnell zu sein.",
        },
        {
          question: "Wie kann ich Kontakt aufnehmen?",
          answer:
            "Wir heissen Gespräche von Gründern, Investoren und zukünftigen Team-Mitgliedern willkommen. Sie können uns über unsere Kontakt-Seite erreichen oder hello@saha.ch schreiben. Jede Anfrage wird mit Vertraulichkeit und Respekt behandelt.",
        },
      ],
    },
  ],

  closingCta: {
    heading: "Haben Sie noch Fragen?",
    description:
      "Wir helfen gerne alles zu beantworten, das nicht hier abgedeckt ist. Kontaktieren Sie uns und wir werden schnell antworten.",
    cta: { label: "Kontaktieren Sie uns", href: "/contact" },
  },
};

/* ── Privacy ───────────────────────────────── */

export const privacyPage = {
  hero: {
    eyebrow: "Rechtlich",
    headline: "Datenschutzrichtlinie",
    subheadline: "Wie Saha mit Ihren Informationen umgeht.",
  },
  sections: [
    {
      heading: "Übersicht",
      body: "Saha respektiert Ihre Privatsphäre und ist verpflichtet, persönliche Informationen, die Sie mit uns teilen, zu schützen. Diese Seite beschreibt unseren Ansatz zu Datenverwaltung. Eine vollständige Datenschutzrichtlinie wird hier veröffentlicht, wenn wir unsere rechtliche Dokumentation formalisieren.",
    },
    {
      heading: "Informationen, die wir erfassen",
      body: "Wenn Sie uns über diese Website kontaktieren, erfassen wir nur die Informationen, die Sie freiwillig bereitstellen — wie Ihren Namen, Ihre Email-Adresse und den Inhalt Ihrer Nachricht. Wir nutzen keine Tracking-Cookies oder Third-Party-Analytics auf dieser Website.",
    },
    {
      heading: "Wie wir Ihre Informationen nutzen",
      body: "Informationen, die Sie bereitstellen, werden ausschliesslich genutzt, um auf Ihre Anfrage zu reagieren und nachfolgende Gespräche zu ermöglichen. Wir verkaufen, teilen oder verbreiten Ihre persönlichen Daten nicht an Dritte.",
    },
    {
      heading: "Kontakt",
      body: "Falls Sie Fragen haben, wie wir mit Ihren Daten umgehen, kontaktieren Sie uns unter",
    },
  ],
};

/* ── Terms ──────────────────────────────────── */

export const termsPage = {
  hero: {
    eyebrow: "Rechtlich",
    headline: "Nutzungsbedingungen",
    subheadline: "Bedingungen, die Ihre Nutzung dieser Website regeln.",
  },
  sections: [
    {
      heading: "Allgemein",
      body: "Diese Website wird von Saha betrieben. Durch den Zugriff auf und die Nutzung dieser Website akzeptieren Sie, sich an diese Bedingungen zu halten. Vollständige Nutzungsbedingungen werden hier veröffentlicht, wenn wir unsere rechtliche Dokumentation formalisieren.",
    },
    {
      heading: "Inhalt",
      body: "Die Informationen auf dieser Website werden zu allgemeinen Informationszwecken bereitgestellt. Während wir nach Genauigkeit streben, geben wir keine Garantien für Vollständigkeit, Zuverlässigkeit oder Tauglichkeit der präsentierten Informationen.",
    },
    {
      heading: "Geistiges Eigentum",
      body: "Alle Inhalte, Design und Materialien auf dieser Website sind Eigentum von Saha, soweit nicht anders angegeben. Sie dürfen diesen Inhalt nicht reproduzieren, verteilen oder nutzen, ohne unsere vorherige schriftliche Zustimmung.",
    },
    {
      heading: "Kontakt",
      body: "Für Fragen zu diesen Bedingungen kontaktieren Sie uns unter",
    },
  ],
};

/* ── Footer ─────────────────────────────────── */

export const footer = {
  tagline: "Ein verlässlicher Käufer für Schweizer KMU in Nachfolge.",
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
        { label: "Gründer", href: "/founders" },
        { label: "Investoren", href: "/investors" },
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
    title: "Saha — Ein verlässlicher Käufer für Schweizer KMU in Nachfolge",
    description:
      "Saha akquiriert profitable Schweizer Unternehmen unter CHF 10 Millionen Umsatz von pensionierungsbereiten Gründern, führt sie sorgfältig über und hält sie langfristig.",
  },
  founders: {
    title: "Für Gründer — Saha",
    description:
      "Sie haben etwas Bewahrenwertes aufgebaut. Saha akquiriert und behält gründergebaute Schweizer Unternehmen unter CHF 10 Millionen mit Sorgfalt, Struktur und langfristiger Verpflichtung.",
  },
  investors: {
    title: "Für Investoren — Saha",
    description:
      "Ein permanentes Eigentumsmodell für das unterversorgte Segment von Schweizer Übergangstransaktionen unter CHF 10 Millionen. Strukturierte Übergänge, disziplinierte Sourcing, kumulierender Wert.",
  },
  join: {
    title: "Saha beitreten — Bauen Sie von Grund auf auf",
    description:
      "Saha ist in der Gründungsphase und stellt ein Team zusammen, um ein Langzeitunternehmen für Schweizer Unternehmen aufzubauen. Deal-, Übergabe-, Operations- und Finanzrollen.",
  },
  about: {
    title: "Über Saha — Warum wir existieren",
    description:
      "Zu viele gute Schweizer Unternehmen verschwinden, wenn ihre Gründer in Ruhestand gehen. Saha wurde geschaffen, um einen überlegten, langfristigen Käufer für das unterversorgte Übergangssegment anzubieten.",
  },
  contact: {
    title: "Kontaktieren Sie Saha",
    description:
      "Führen Sie ein Gespräch mit Saha. Egal, ob Sie Gründer, Investor oder zukünftiger Team-Mitglied sind — wir würden uns freuen, von Ihnen zu hören.",
  },
  faq: {
    title: "FAQ — Saha",
    description:
      "Antworten auf häufig gestellte Fragen zu Saha von Gründern, Investoren und zukünftigen Team-Mitgliedern.",
  },
  privacy: {
    title: "Datenschutzrichtlinie — Saha",
    description: "Sahas Datenschutzrichtlinie und Datenbehandlungspraktiken.",
  },
  terms: {
    title: "Nutzungsbedingungen — Saha",
    description: "Nutzungsbedingungen für die Saha-Website.",
  },
};
