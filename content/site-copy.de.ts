/* ─────────────────────────────────────────────
 *  Saha — deutsche Version
 *  Redaktionelle Übersetzung in institutioneller Qualität
 *  Edit text here; the components pull from these objects.
 * ───────────────────────────────────────────── */

export const siteConfig = {
  name: "Saha",
  tagline: "Der langfristige Erwerber für Schweizer KMU in der Nachfolge",
  url: "https://saha.ch",
  email: "hello@saha.ch",
  location: "Switzerland",
};

/* ── Navigation ─────────────────────────────── */

export const nav = {
  links: [
    { label: "Gründer", href: "/founders" },
    { label: "Berater", href: "/advisors" },
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
    eyebrow: "Schweizer permanentes Kapital",
    headline: "Systematische Nachfolge für\nSchweizer KMU",
    subheadline:
      "Saha erwirbt profitable Schweizer KMU mit weniger als CHF 10 Mio. Umsatz und entwickelt sie langfristig weiter — während es die Strukturen in Sourcing, Übergang und Betrieb aufbaut, die dieses Segment tragfähig machen.",
    cta: { label: "Gespräch beginnen", href: "/contact" },
    secondaryCta: { label: "Unsere Kriterien", href: "/founders" },
  },

  whatWeAreBuildingSectionLabel: "Unser Anliegen",
  whatWeAreBuilding: {
    heading: "Viele gute Unternehmen verschwinden aus den falschen Gründen",
    paragraphs: [
      "In der Schweiz stehen Tausende von profitablen, gut geführten Unternehmen vor einer unsicheren Zukunft — nicht weil sie scheitern, sondern weil ihre Gründer sich dem Ruhestand nähern, ohne dass eine klare Nachfolgelösung in Sicht ist. Die Optionen sind oft unbefriedigend: Verkauf an einen fernen Konzern, eine überstürzte Übergabe oder schlicht die Türen zu schliessen.",
      "Die meisten institutionellen Käufer konzentrieren sich auf das obere Marktsegment. Transaktionen unter CHF 10M Umsatz sind für traditionelle Private-Equity-Fonds zu klein, für passive Investoren zu komplex und werden von klassischen M&A-Beratern kaum betreut. Diese Unternehmen fallen durch die Maschen — nicht weil sie keinen Wert haben, sondern weil bisher niemand ein Modell für sie entwickelt hat.",
      "Saha versucht nicht, möglichst viele Unternehmen zu kaufen. Wir bauen einen disziplinierten Schweizer Nachfolgeerwerber für eine bestimmte Art von Unternehmen auf: profitabel, inhabergeführt, klein genug, um übersehen zu werden, und stark genug, um mit der richtigen Übergabe über den Gründer hinaus zu bestehen. Das bedeutet: oft Nein sagen, gezielt erwerben, bei der Übergabe nahe dran sein und langfristig halten, sobald das Unternehmen stabil ist.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168'000",
      caption: "Schweizer KMU müssen bis 2030 einen Generationswechsel durchlaufen — doch nur etwa zwei Drittel dieser Übergaben dürften erfolgreich abgeschlossen werden",
      source: "2026 CFB\u2011HSG / UBS Studie",
    },
  },

  whyNowSectionLabel: "Eine Lücke im Markt",
  whyNow: {
    heading: "Diese Unternehmen verdienen mehr als stilles Verschwinden",
    paragraphs: [
      "Unterhalb von CHF 10M Umsatz gibt es sehr wenige Käufer, die bereit sind, die Arbeit zu leisten, die solche Transaktionen erfordern. Deals sind für Private-Equity-Fonds zu klein, um deren Overhead zu rechtfertigen. Unternehmen sind für Investoren, die Distanz wünschen, zu gründerabhängig. Und die Übergänge sind zu menschlich — zu sehr auf Vertrauen, Beziehungen und Sorgfalt angewiesen — um von jemandem geleitet zu werden, der nicht bereit ist, sich einzubringen.",
      "Doch genau diese Unternehmen sind oft diejenigen, die lokal am meisten zählen. Sie beschäftigen Menschen, die schon Jahre dort sind. Sie bedienen Kundinnen und Kunden, die auf sie angewiesen sind. Wenn sie schliessen, weil sich kein Käufer zeigte, ist der Verlust leise, aber real.",
      "Saha existiert, weil diese Lücke nicht bestehen sollte. Gute Unternehmen sollten nicht verschwinden, bloss weil das Zeitfenster fehlt.",
    ],
    callout: {
      type: "quote" as const,
      text: "Gute Unternehmen sollten nicht verschwinden, bloss weil das Zeitfenster fehlt.",
    },
  },

  audiences: [
    {
      label: "Für Gründer",
      heading: "Ihr Unternehmen verdient ein überlegtes nächstes Kapitel",
      description:
        "Sie haben etwas aufgebaut, das zählt — für Ihr Team, Ihre Kundinnen und Kunden, und Ihre Region. Saha steht dafür, dies weiterzuführen — mit der Ernsthaftigkeit und Sorgfalt, die es verdient.",
      cta: { label: "Mehr erfahren", href: "/founders" },
    },
    {
      label: "Für Investoren",
      heading: "Ein diszipliniertes Modell in einem übersehenen Segment",
      description:
        "Wiederholbare Akquisitionsprozesse in einer strukturierten Deal-Pipeline, disziplinierte Einstiegsbewertungen, sorgfältig gestaltete Übergaben und langfristiger Verbleib. Konzipiert für nachhaltigen Wertzuwachs, nicht für Exits.",
      cta: { label: "Mehr erfahren", href: "/investors" },
    },
  ],

  buildersStrip: {
    heading: "Helfen Sie uns, Saha von Grund auf aufzubauen",
    description:
      "Wir bauen ein kleines, fokussiertes Team auf, um unsere ersten Akquisitionen, den Due-Diligence-Prozess und das Betriebsmodell zu gestalten. Wenn Sie etwas von Grund auf aufbauen möchten — das ist frühe, substanzielle Arbeit.",
    cta: { label: "Mehr erfahren", href: "/join" },
  },

  modelSectionLabel: "So arbeiten wir",
  model: {
    heading: "Die richtigen Unternehmen finden. Die Übergabe sorgfältig gestalten. Langfristig halten.",
    steps: [
      {
        number: "01",
        title: "Unternehmen identifizieren, die über den Gründer hinaus bestehen können",
        description:
          "Wir suchen profitable, gründergeführte Schweizer Unternehmen unter CHF 10M Umsatz, bei denen Nachfolge der primäre Verkaufsgrund ist. Neben der finanziellen Gesundheit achten wir sorgfältig darauf, ob das Unternehmen realistisch ohne seinen Gründer weitergeführt werden kann — stabile Nachfrage, ein fähiges Team, handhabbare Kundenkonzentration und eine sorgfältig planbare Übergabe.",
      },
      {
        number: "02",
        title: "Die Übergabe mit Sorgfalt begleiten",
        description:
          "Jede Übernahme folgt einer strukturierten Übergabe, um zu bewahren, was zählt: Gründerübergabe, Kundenkontinuität, Teamstabilität und enge Aufmerksamkeit in den ersten zwölf Monaten. Hier entscheidet sich Erfolg oder Misserfolg einer Transaktion, und wir behandeln dies als eine unserer wichtigsten Fähigkeiten.",
      },
      {
        number: "03",
        title: "Gezielt unterstützen, wo es wirklich zählt",
        description:
          "Im Verlauf der Zeit können unsere Unternehmen auf gemeinsame Fähigkeiten zugreifen — finanzielle Disziplin, Reporting, Unterstützung bei der Rekrutierung, Prozessverbesserung und Betriebsführung. Unsere Unterstützung ist stets gezielt. Lokale Teams tragen weiterhin die Verantwortung, das Geschäft zu führen und weiterzuentwickeln. Wir helfen, wo es nützlich ist, nicht wo es uns bequem ist.",
      },
      {
        number: "04",
        title: "Dauerhaft halten",
        description:
          "Wir kaufen Unternehmen nicht, um sie weiterzuverkaufen. Langfristige Eigentümerschaft bedeutet, dass wir Entscheidungen treffen können, die Teams, Kundinnen und Kunden und Geschäftsqualität wirklich dienen — ohne den Druck eines Ausstiegshorizonts. Jedes Unternehmen bleibt in der Saha-Familie, und das Portfolio wird mit der Zeit stärker.",
      },
    ],
  },

  moreThanBuyerSectionLabel: "Mehr als ein Käufer",
  moreThanBuyer: {
    heading: "Mehr als ein Käufer",
    intro: "Nicht jedes KMU lässt sich ohne Weiteres übergeben. Kleinere Unternehmen brauchen oft mehr als einen willigen Käufer — sie brauchen eine strukturierte Übergabe, operative Kontinuität und Begleitung über die Transaktion hinaus. Saha wird genau dafür aufgebaut.",
    items: [
      {
        title: "Systematisches Sourcing",
        description:
          "Der Transaktionsfluss bei der Nachfolge von Schweizer KMU wird von Treuhändern, Notaren und lokalen Beratern gesteuert. Saha baut den Ruf und die Beziehungen auf, die uns zum Erwerber machen, den diese Intermediäre zuerst anrufen — weil wir ihre Klienten gut behandeln, mit Integrität abschliessen und niemandem die Zeit stehlen.",
      },
      {
        title: "Führungskontinuität",
        description:
          "Wenn ein Gründer zurücktritt, braucht das Unternehmen die richtige Person, um es weiterzuführen. Ein Teil dessen, wie Saha aufgebaut wird, ist die Fähigkeit, diesen Leader zu identifizieren und zu unterstützen — innerhalb des erworbenen Unternehmens oder von aussen — sodass die Führungskontinuität vom Moment der Akquisition an geplant wird.",
      },
      {
        title: "Übergabedisziplin",
        description:
          "Die Übergabephase entscheidet über Erfolg oder Misserfolg. Wir behandeln sie als Kernfähigkeit — strukturiert, gründerspezifisch und mit jeder Akquisition weiter geschärft.",
      },
      {
        title: "Geteilte operative Fähigkeiten",
        description:
          "Wo sinnvoll, können Portfoliounternehmen auf gemeinsame Ressourcen in Finanzen, Reporting, Administration und Prozessoptimierung zugreifen. Unterstützung, die gezielt erfolgt — nie aufgezwungen.",
      },
    ],
    closingLine: "Jede Übernahme stärkt das Modell. So wird dieses Segment nachhaltig skalierbar.",
  },

  differentiatorsSectionLabel: "Was uns unterscheidet",
  differentiators: {
    heading: "Ein Modell für kleinere Nachfolgetransaktionen",
    steps: [
      {
        number: "01",
        title: "Konzipiert für Unternehmen unter CHF 10M",
        description:
          "Wir arbeiten in einem Segment, das die meisten institutionellen Käufer übersehen. Unser Modell, unsere Kosten und unsere Erwartungen sind von Tag eins an für diese Transaktionsgrösse ausgelegt.",
      },
      {
        number: "02",
        title: "Wir prüfen sorgfältig, was nach dem Gründer kommt",
        description:
          "Bevor wir ein Unternehmen akquirieren, bewerten wir, ob es realistische Chancen ohne seinen Gründer fortbestehen kann. Nicht jedes gute Unternehmen eignet sich für eine Übernahme.",
      },
      {
        number: "03",
        title: "Übergabe als Kernkompetenz",
        description:
          "In der Übergabephase kann am meisten schiefgehen. Sie erfordert menschliches Urteilsvermögen, Empathie und enge Aufmerksamkeit. Wir behandeln die Übergabe als Disziplin, nicht als Formalität.",
      },
      {
        number: "04",
        title: "Kein Ausstiegshorizont, kein erzwungener Verkauf",
        description:
          "Wir halten dauerhaft. Entscheidungen werden für die Gesundheit jedes Unternehmens getroffen, nicht um einer Fondsfrist zu genügen oder einen Quartalsbericht zu bedienen.",
      },
    ],
  },

  finalCtaFounders: {
    heading: "Denken Sie über die Zukunft nach?",
    description:
      "Falls Sie als Gründer die Zukunft Ihres Unternehmens in Betracht ziehen, würden wir uns über ein ruhiges, vertrauliches Gespräch freuen. Unverbindlich und vertraulich.",
    cta: { label: "Ein Gespräch führen", href: "/contact?pathway=founder" },
  },

  finalCtaOther: {
    heading: "Investoren und zukünftige Team-Mitglieder",
    description:
      "Ob als Investor oder als jemand, der Saha mitaufbauen möchte — wir freuen uns auf Ihre Nachricht.",
    cta: { label: "Kontaktieren Sie uns", href: "/contact?pathway=investor" },
  },
};

/* ── For Founders ───────────────────────────── */

export const foundersPage = {
  hero: {
    eyebrow: "Für Gründer",
    headline: "Sie haben ein Unternehmen aufgebaut,\ndas eine sorgfältige Übergabe verdient",
    subheadline:
      "Wenn die Zeit kommt, sich zurückzuziehen, verdient Ihr Unternehmen einen Erwerber, der Kontinuität ernst nimmt. Saha akquiriert profitable Schweizer Unternehmen in der Nachfolge, begleitet die Übergabe sorgfältig und setzt alles daran, zu bewahren, was das Unternehmen wertvoll macht.",
  },

  intro: {
    heading: "Wir verstehen, was auf dem Spiel steht",
    paragraphs: [
      "Ein Unternehmen zu verkaufen, das Sie aus dem Nichts aufgebaut haben, ist nicht nur eine finanzielle Entscheidung. Es ist persönlich. Ihr Name steht dafür. Ihr Team vertraut Ihnen. Ihre Kundinnen und Kunden verlassen sich auf die Standards, die Sie setzen. Den richtigen nächsten Eigentümer zu finden ist eine der wichtigsten Entscheidungen, die Sie je treffen werden.",
      "Saha wurde von Menschen aufgebaut, die das verstehen. Unser Modell ist darauf ausgelegt, das zu ehren, was Sie geschaffen haben — indem wir es bewahren, unterstützen und mit der gleichen Ernsthaftigkeit vorantragen, die Sie mitgebracht haben, als Sie es aufgebaut haben. Wir sind nicht hier, um umzubenennen, zu restrukturieren oder weiterzuverkaufen. Wir sind hier, um weiterzumachen, was Sie angefangen haben.",
    ],
    callout: {
      type: "quote" as const,
      text: "Ihr Name steht dafür. Ihr Team vertraut Ihnen. Dieser Verantwortung sind wir uns bewusst.",
    },
  },

  whatWeLookFor: {
    heading: "Wonach wir suchen",
    transitionLine: "Damit die Passung stimmt, achten wir bei den Unternehmen, die wir erwerben, auf folgende Kriterien:",
    items: [
      {
        title: "Profitabel und etabliert",
        description:
          "Langjährig gründergeführt, in der Regel unter CHF 10M Umsatz. Unternehmen mit nachgewiesener Leistungsbilanz und solider finanzieller Gesundheit.",
      },
      {
        title: "Stabile, wiederkehrende Nachfrage",
        description:
          "Umsätze, die stabil oder wiederkehrend sind — nicht projektbasiert oder abhängig von einigen wenigen grossen Aufträgen.",
      },
      {
        title: "Ein fähiges Team über den Gründer hinaus",
        description:
          "Operative Stärke, die über den Gründer hinausgeht, mit Personen, die bereits vorhanden sind und das Unternehmen weiterführen können.",
      },
      {
        title: "Ein realistischer Weg zur Übergabe",
        description:
          "Eine Übergabe, die sorgfältig geplant und in einem vernünftigen Zeitrahmen umgesetzt werden kann — unter Einbindung des Gründers.",
      },
    ],
  },

  founderExpectations: {
    heading: "Was Sie von uns erwarten können",
    steps: [
      {
        number: "01",
        title: "Ihr Unternehmen behält seine Identität",
        description:
          "Unsere klare Präferenz ist es, den Namen, die Marke und die lokale Präsenz jedes Unternehmens zu bewahren, das wir erwerben. Jedes Unternehmen arbeitet weiterhin in seinem Markt, mit seiner eigenen Identität.",
      },
      {
        number: "02",
        title: "Ihr Engagement nach der Übergabe bestimmen Sie",
        description:
          "Einige Gründer bevorzugen einen sauberen Übergang. Andere bleiben eine Zeitlang in einer Beratungsrolle beteiligt. Wir gestalten die Übergabe so, dass sie sich für Sie richtig anfühlt.",
      },
      {
        number: "03",
        title: "Ein fairer Preis — und mehr als eine Zahl",
        description:
          "Wir bieten transparente, faire Bewertungen. Wir verstehen auch, dass für viele Gründer das Wissen, dass Team und Kunden gut betreut werden, genauso wichtig ist wie der Preis.",
      },
      {
        number: "04",
        title: "Ihr Team ist geschützt",
        description:
          "Wir erwerben keine Unternehmen, um sie zu restrukturieren. Das Team, das Sie aufgebaut haben, ist zentral für den Wert des Unternehmens. Wo die Führungskontinuität nach Ihrem Rückzug eine Verstärkung erfordert, arbeiten wir daran, die richtige Person zu identifizieren und zu unterstützen — ob aus Ihrem Team oder von aussen. Alle Entscheidungen, die Menschen betreffen, werden für die langfristige Gesundheit des Unternehmens getroffen, niemals um unseren wirtschaftlichen Interessen zu dienen.",
      },
    ],
  },

  process: {
    heading: "Wie der Prozess abläuft",
    description:
      "Kein Druck und keine Verpflichtung — in keiner Phase. Wir arbeiten in einem Tempo, das sich für Sie richtig anfühlt.",
    steps: [
      {
        title: "Ein vertrauliches erstes Gespräch",
        description:
          "Wir beginnen mit einem privaten, unverbindlichen Gespräch, um Ihr Unternehmen, Ihre Überlegungen und Ihren Zeitrahmen zu verstehen. Nichts rückt voran, wenn Sie das nicht möchten.",
      },
      {
        title: "Prüfen, ob eine Passung besteht",
        description:
          "Falls gegenseitiges Interesse besteht, nehmen wir uns Zeit zu verstehen, ob Ihr Unternehmen zu unserem Modell passt — Profitabilität, Team-Stärke, Kundenstabilität und ob die Übergabe realistisch strukturiert werden kann.",
      },
      {
        title: "Das Unternehmen vertieft kennenlernen",
        description:
          "Wir verbringen Zeit damit, Ihre Betriebsabläufe, Kunden, Teamdynamik und Ihre tägliche Rolle zu verstehen. Es geht genauso sehr um Menschen wie um Zahlen.",
      },
      {
        title: "Ein klares, faires Angebot",
        description:
          "Wir präsentieren einen unkomplizierten Vorschlag ohne aggressive Taktiken und ohne Überraschungen in letzter Minute. Faire Bedingungen, die den Wert dessen widerspiegeln, was Sie aufgebaut haben.",
      },
      {
        title: "Due Diligence und Übergabeplanung",
        description:
          "Formale Due Diligence neben detaillierter Planung für die Übergabe — wer übernimmt was, wie die Kommunikation mit Kunden gestaltet wird und wie das erste Jahr aussieht.",
      },
      {
        title: "Eine sorgfältige, strukturierte Übergabe",
        description:
          "Wir führen die Übergabe mit Sorgfalt aus: Gründerübergabe, Team-Kontinuität, Kundenkommunikation und konsequente Aufmerksamkeit für die Betriebsstabilität von Tag eins an.",
      },
    ],
  },

  closingCta: {
    heading: "Ihr Unternehmen verdient ein ernsthaftes Gespräch",
    description:
      "Wenn Sie als Gründer beginnen, über die Zukunft nachzudenken, würden wir uns freuen, Ihnen zuzuhören. Vertraulich, unverbindlich und in Ihrem Tempo.",
    cta: { label: "Mit uns sprechen", href: "/contact?pathway=founder" },
  },
};

/* ── For Investors ──────────────────────────── */

export const investorsPage = {
  hero: {
    eyebrow: "Für Investoren",
    headline: "Eine Strategie langfristiger Eigentümerschaft\nin einem übersehenen Segment der Schweizer KMU-Nachfolge",
    subheadline:
      "Saha zielt auf profitable, inhabergeführte Unternehmen, bei denen Nachfolge eine Gelegenheit schafft, die Übertragbarkeit gegeben ist und disziplinierte Eigentümerschaft langfristig Wert aufbauen kann. Der Vorteil liegt nicht im Financial Engineering. Er liegt im sorgfältigen Erwerb, in der gelungenen Übergabe und im Bewahren dessen, was funktioniert.",
  },

  thesis: {
    heading: "Die Investitionsthese",
    paragraphs: [
      "In der Schweiz gibt es ein grosses und wachsendes Segment von profitablen, gründergeführten Unternehmen, die sich dem Übergangsprozess nähern. Diese Unternehmen sind oft gut geführt, cashflow-stark und tief in ihren lokalen Märkten verwurzelt — doch sie liegen unter der Schwelle, wo die meisten institutionellen Käufer tätig sind.",
      "Alles unter CHF 10M Umsatz ist praktisch unsichtbar für institutionelle Transaktionsströme. Doch die CFB-HSG/UBS-Nachfolgestudie zeigt, dass etwa jeder dritte Schweizer KMU-Inhaber eine Übertragung innerhalb von fünf Jahren erwartet — und nur etwa zwei Drittel dieser Übergaben werden erwartet, erfolgreich abgeschlossen zu werden.",
      "Die Lücke liegt nicht am Mangel guter Unternehmen, sondern am Fehlen eines Erwerbermodells, das speziell für dieses Segment gebaut wurde. Diese Deals erfordern praktische Übergabefähigkeiten, Einfühlungsvermögen gegenüber Gründern und die Bereitschaft, komplexe, kleinere Transaktionen zu machen, die nicht standardisiert werden können. Saha wird speziell für diese Arbeit aufgebaut.",
      "Weil wir dauerhaft halten, wachsen unsere Renditen stetig. Jede Übernahme verfeinert unsere Sourcing-, Übergabe- und Betriebsfähigkeiten — was die nächste effizienter und weniger riskant macht.",
    ],
    callout: {
      type: "stat" as const,
      value: "1 von 3",
      caption: "Schweizer KMU-Inhaber erwarten eine Übertragung innerhalb von fünf Jahren — aber das Segment unter CHF 10M ist institutionellem Kapital weitgehend unsichtbar",
    },
  },

  permanentOwnership: {
    heading: "Wie dauerhaftes Eigentum Renditen erzeugt",
    paragraphs: [
      "Dauerhaftes Eigentum bedeutet nicht, dass Investoren unbegrenzt warten. Die Renditen werden primär durch die operativen Cashflows der von Saha erworbenen Unternehmen generiert — ausgeschüttet oder reinvestiert, während das Portfolio reift. Mit wachsendem Portfolio und steigendem Vermögenswert werden zusätzliche Mechanismen verfügbar: Refinanzierung gegen den Portfoliowert, selektive Sekundärliquidität für langfristige Investoren und Co-Investitionsrechte bei neuen Akquisitionen.",
      "Dies ist keine Struktur, die auf ein einzelnes Exit-Ereignis optimiert ist. Sie ist darauf ausgelegt, dauerhafte, sich kumulierende Renditen für Investoren zu generieren, deren Zeithorizont zum Modell passt. Das Fehlen einer Exit-Frist ist ein Vorteil — es bedeutet, dass jede operative Entscheidung für die langfristige Gesundheit jedes Unternehmens getroffen wird, nicht um es für den Verkauf herzurichten.",
      "Wir besprechen Renditestruktur, Ausschüttungspolitik und Investorenkonditionen in direkten Gesprächen. Wenn das Modell Sie anspricht, freuen wir uns auf diesen Dialog.",
    ],
  },

  mustBeTrue: {
    heading: "Voraussetzungen für das Gelingen dieses Modells",
    description:
      "Wir denken klar über unsere eigenen Annahmen nach. Damit Saha erfolgreich ist, müssen folgende Annahmen zutreffen:",
    steps: [
      {
        number: "01",
        title: "Übertragbare Unternehmen erwerben — nicht bloss günstige",
        description:
          "Ein niedriger Preis macht keine gute Übernahme. Das Unternehmen muss funktionieren, Kundinnen und Kunden halten und Umsatz generieren, nach dem Rückzug des Gründers. Übertragbarkeit ist der kritische Filter.",
      },
      {
        number: "02",
        title: "Jede Übergabe muss individuell und gründerspezifisch strukturiert sein",
        description:
          "Jede Übergabe ist anders. Es gibt kein generisches Playbook. Erfolg hängt ab von Verständnis, was der Gründer wirklich macht, wer übernehmen kann und wie man Kunden- und Team-Vertrauen durch die Veränderung bewahrt.",
      },
      {
        number: "03",
        title: "Unterstützung muss nützen, ohne die Struktur aufzublähen",
        description:
          "Gemeinsame Fähigkeiten machen nur Sinn, wenn sie wirklich jedem Unternehmen helfen. Wir müssen vermeiden, zentrale Funktionen zu bauen, die der Holding mehr dienen als dem Portfolio.",
      },
      {
        number: "04",
        title: "Die ersten Transaktionen sind überproportional wichtig",
        description:
          "Die ersten Übernahmen setzen den Ton für Sourcing, Übergabe-Qualität und Ruf. Sie richtig zu machen ist wichtiger als sie schnell zu machen.",
      },
      {
        number: "05",
        title: "Disziplin wiegt schwerer als Tempo",
        description:
          "Das Modell hängt davon ab, öfter Nein zu sagen als Ja. Pipeline-Volumen ist nicht die Einschränkung — Urteilskraft und Selektivität sind es.",
      },
    ],
  },

  howModelCompounds: {
    heading: "Wie das Modell Wert aufbaut",
    paragraphs: [
      "Saha stellt nicht einfach ein Portfolio kleiner Unternehmen zusammen. Saha baut die Infrastruktur auf, die dieses Segment erwerbbar und nachhaltig im grossen Massstab macht.",
      "Diese Infrastruktur umfasst: einen Sourcing-Ansatz, der darauf aufbaut, zur vertrauenswürdigen Gegenpartei für die Treuhänder, Notare und lokalen Berater zu werden, die den Transaktionsfluss in diesem Segment steuern; ein Übertragbarkeits-Framework, das nach Unternehmen filtert, die ihren Gründer überdauern können; eine sich entwickelnde Fähigkeit, den richtigen operativen Leader für jedes erworbene Unternehmen zu identifizieren und zu unterstützen — aus dem bestehenden Team oder von aussen — sodass Führungskontinuität von Anfang an in jede Übergabe eingebaut wird; ein operativer Leitfaden, der sich mit jeder Übernahme verbessert; selektive geteilte Fähigkeiten in Finanzen, Reporting und Administration; und Technologie, die interne Effizienz verbessert, ohne das menschliche Urteilsvermögen zu ersetzen, das Nachfolge erfordert.",
      "Jede Übernahme macht die nächste günstiger zu sourchen, schneller überzuleiten und besser begleitet. Das ist die Wertschöpfungslogik hinter dem Modell — und was Saha von einer wohlmeinenden Beteiligungsgesellschaft mit Kapital unterscheidet.",
    ],
    callout: {
      type: "stat" as const,
      value: "Langfristig",
      caption: "Jede Übernahme stärkt die Plattform — Sourcing, Übergabe und Betrieb verbessern sich mit jeder Transaktion",
    },
  },

  willNotBuy: {
    heading: "Was wir nicht kaufen",
    description: "Disziplin bedeutet, Grenzen klar zu benennen:",
    items: [
      {
        title: "Notleidende Sanierungen",
        description: "Unternehmen, die eine sofortige Restrukturierung oder finanzielle Rettung benötigen, liegen ausserhalb unseres Modells.",
      },
      {
        title: "Zu stark gründergebundene Unternehmen",
        description: "Wenn es keinen realistischen Weg zur Übergabe gibt — wenn das Unternehmen ohne den Gründer nicht funktionieren kann — passt es nicht.",
      },
      {
        title: "Kapitalintensive oder schrumpfende Nischen",
        description: "Unternehmen mit hohen Investitionsanforderungen, die den freien Cashflow begrenzen, oder in strukturell schrumpfenden Märkten ohne langfristige Tragfähigkeit.",
      },
      {
        title: "Zu klein für eine strukturierte Übergabe",
        description: "Unternehmen, die die Ökonomie einer durchdachten, gut geführten Eigentumsübergabe nicht tragen können.",
      },
    ],
  },

  whereWeAre: {
    heading: "Wo wir jetzt sind",
    paragraphs: [
      "Saha baut durchdacht auf: Kernteam aufbauen, Kapitalbasis strukturieren und erste Übergabegespräche führen. Wir haben noch keine erste Übernahme abgeschlossen — absichtlich, nicht aus Verzögerung.",
      "Wir bauen für einen First Close, nicht für Masseneinsatz. Die ersten Deals werden die Sourcing-These, das Übergabe-Modell und die Betriebs-Disziplin beweisen. Alles danach hängt davon ab, das richtig zu machen.",
    ],
    callout: {
      type: "stat" as const,
      value: "Pre-Close",
      caption: "Gründungsteam steht, erste Akquisitionsgespräche laufen",
    },
  },

  whyDifferent: {
    heading: "Was Saha von einem klassischen Fonds unterscheidet",
    paragraphs: [
      "Die meisten Übernahmestrukturen sind um ein endliches Fonds-Leben gebaut — kaufen, optimieren, veräussern — innerhalb eines festen Horizonts. Diese Struktur schafft innewohnende Spannung zwischen kurzfristiger Leistung und langfristiger Geschäftsgesundheit.",
      "Saha ist eine permanente Holdinggesellschaft. Wir akquirieren Unternehmen, um sie zu behalten. Unsere Anreize sind vollständig auf langfristigen Erfolg ausgerichtet. Es gibt keinen Ausstiegshorizont, keine erzwungenen Veräusserungen und keinen Druck, für kurzfristige Optik zu optimieren.",
    ],
    callout: {
      type: "quote" as const,
      text: "Unsere Anreize sind vollständig auf langfristigen Erfolg ausgerichtet.",
    },
  },

  closingCta: {
    heading: "Interessiert an mehr Informationen?",
    description:
      "Wir strukturieren Saha für eine kleine Zahl von ausgerichteten, langfristigen Investoren. Wenn die These Sie anspricht, freuen wir uns auf ein persönliches Gespräch.",
    cta: { label: "Investor-Anfragen", href: "/contact?pathway=investor" },
  },
};

/* ── Join Saha ──────────────────────────────── */

export const joinPage = {
  hero: {
    eyebrow: "Saha beitreten",
    headline: "Etwas Neues von Grund auf aufbauen",
    subheadline:
      "Wir setzen ein kleines Team zusammen, um das Sourcing-Modell, den Due-Diligence-Prozess, den Übergabe-Ansatz und die Betriebs-Kultur zu prägen — vor unserer ersten Übernahme. Falls Sie in Jahrzehnten denken und sich um Handwerk kümmern, ist das frühe, sinnvolle Arbeit.",
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
      "Die meisten beruflichen Wege bestehen darin, bestehende Strukturen zu optimieren. Saha ist anders. Wir bauen ein langfristiges Eigentums-Unternehmen für Schweizer Unternehmen von Grund auf — die Strategie, die Kultur, die Systeme, die Werte, alles wird gerade geprägt.",
      "Wer in dieser Phase einsteigt, füllt nicht einfach eine Rolle aus — sondern gestaltet mit, was Saha wird. Die erste Übernahme, die erste Übergabe, das erste Betriebs-Playbook. Das ist die Art von Arbeit, wo alles, was Sie tun, zählt.",
    ],
    callout: {
      type: "quote" as const,
      text: "Wer jetzt einsteigt, prägt, was Saha wird.",
    },
  },

  foundingRoles: {
    heading: "Offene Gründungsrollen",
    intro: "Wir rekrutieren für Gründungsrollen, die die Arbeitsweise von Saha von Anfang an prägen werden. Keine klassischen Anstellungen — sondern Mitgründer-Rollen.",
    roles: [
      {
        title: "Gründer — Plattform & Daten",
        description: "Baut die schlanke operative Infrastruktur auf, die Sahas erste Akquisitionen ermöglicht: Sourcing-Pipeline, Due-Diligence-Workflow, Transaktions-Tracking und die internen Tools, die einem kleinen Team erlauben, mit Rigor und ohne unnötigen Overhead zu arbeiten.",
        ctaLabel: "Interesse bekunden →",
        ctaHref: "/contact",
      },
      {
        title: "Finance Lead — Kapital & Reporting",
        description: "Verantwortet die Finanzarchitektur von Saha und dem gesamten Portfolio: Kapitalstrukturierung, Akquisitionsmodellierung, Portfolio-Reporting und das administrative Rückgrat, das einer wachsenden Unternehmensfamilie ermöglicht, mit Klarheit und Disziplin zu operieren.",
        ctaLabel: "Interesse bekunden →",
        ctaHref: "/contact",
      },
    ],
  },

  roles: {
    heading: "Was wir brauchen",
    description:
      "Wir rekrutieren nicht nach Titeln. Wir suchen nach Menschen mit den richtigen Fähigkeiten, Disposition und Ehrgeiz, von Beginn an mit uns aufzubauen.",
    profiles: [
      {
        title: "Deal und Due Diligence",
        description:
          "Menschen, die im Schweizer Markt unter CHF 10M Transaktionen identifizieren, bewerten und strukturieren können. Sie verstehen, was ein kleineres Unternehmen ausmacht, können Jahresabschlüsse lesen und Risiko bewerten und wissen, wie man Vertrauen mit Gründern und Beratern aufbaut.",
      },
      {
        title: "Übergabe und Betrieb",
        description:
          "Menschen, die in ein übernommenes Unternehmen einsteigen und es durch die Übergabe führen können. Sie begleiten den Rückzug des Gründers, stabilisieren das Team, halten Kundenbeziehungen aufrecht und legen das Fundament für langfristige Gesundheit.",
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
    steps: [
      {
        number: "01",
        title: "Langfristiges Denken",
        description: "Wir treffen Entscheidungen für Jahrzehnte, nicht Quartale.",
      },
      {
        number: "02",
        title: "Handwerk und Strenge",
        description: "Uns liegt daran, Dinge gut zu machen — nicht nur schnell.",
      },
      {
        number: "03",
        title: "Stille Ambition",
        description: "Wir bauen etwas Bedeutsames auf — ohne Lärm darum zu machen.",
      },
      {
        number: "04",
        title: "Empathie und Respekt",
        description: "Wir arbeiten mit Gründern, Teams und Gemeinschaften. Beziehungen zählen.",
      },
      {
        number: "05",
        title: "Eigentums-Mentalität",
        description: "Wer Saha mitaufbaut, denkt und handelt wie ein Eigentümer.",
      },
    ],
  },

  closingCta: {
    heading: "Das könnte etwas für Sie sein",
    description:
      "Wenn Sie sich in dem wiedererkennen, was Sie gelesen haben — auch wenn Sie nicht genau in eines der oben genannten Profile passen — würden wir gerne von Ihnen hören. Erzählen Sie uns, wer Sie sind und was Sie zu Saha zieht.",
    cta: { label: "Kontaktieren Sie uns", href: "/contact?pathway=builder" },
  },
};

/* ── Advisors ───────────────────────────────── */

export const advisorsPage = {
  hero: {
    eyebrow: "Für Berater",
    headline: "Der Erwerber, dem Ihre Kunden vertrauen\nkönnen — dank Ihrer Empfehlung",
    subheadline:
      "Wenn Sie einen Klienten an einen Erwerber vermitteln, begleitet Ihr Ruf ihn. Saha ist mit dieser Verantwortung im Sinn aufgebaut — ein Erwerber, der die Beziehungen schützt, die Sie über Jahre aufgebaut haben, und sie nicht gefährdet.",
  },

  understand: {
    heading: "Wir verstehen Ihre Position",
    paragraphs: [
      "Die Gründer, die vor einer Nachfolge stehen, sind häufig Ihre langjährigsten Klienten. Die Entscheidung zu verkaufen ist persönlich, komplex und unwiderruflich. Wenn Sie einen Erwerber vorstellen, erleichtern Sie nicht nur eine Transaktion — Sie bürgen dafür, wie sich der Prozess anfühlen wird und was er hervorbringt.",
      "Wir nehmen das nicht leicht. Unser Modell ist darauf ausgelegt, dass der Berater, der uns vorgestellt hat, gut dasteht — durch unser Verhalten im Prozess, unseren Umgang mit dem Gründer und die Art, wie wir das Unternehmen nach dem Abschluss weiterführen.",
      "Wo das Unternehmen nach dem Rückzug des Gründers Führung benötigt, arbeiten wir daran, die richtige Person zu identifizieren und zu unterstützen — aus dem bestehenden Team oder von aussen — als Teil der Strukturierung jeder Übergabe.",
    ],
  },

  expectations: {
    heading: "Was Sie von uns erwarten können",
    steps: [
      {
        number: "01",
        title: "Ein definierter Prozess ohne Überraschungen",
        description:
          "Wir gehen jede Situation mit einer klaren Methodik an: Erstbewertung, Angebot, Due Diligence, Übergangsplanung, Abschluss. Wir kommunizieren in jeder Phase offen — mit Ihnen und mit Ihrem Klienten — damit nichts unerwartet eintrifft und niemand ohne Antworten bleibt.",
      },
      {
        number: "02",
        title: "Wir verhandeln nicht nach",
        description:
          "Unser Angebot spiegelt unsere aufrichtige Einschätzung des Unternehmens wider. Wir nutzen die Due Diligence nicht als Instrument zur Nachverhandlung von Preis oder Konditionen. Sollte etwas Wesentliches auftauchen, das unsere Einschätzung verändert, teilen wir Ihnen dies direkt und umgehend mit — wir lassen es nicht im letzten Moment aufkommen.",
      },
      {
        number: "03",
        title: "Wir bewegen uns im richtigen Tempo",
        description:
          "Weder überstürzt noch endlos hingezogen. Wir verstehen, dass Gründer oft Zeit brauchen, um Gewissheit zu erlangen, und wir respektieren das. Sobald ein Prozess beginnt, gehen wir zielstrebig vor und bringen ihn in einem angemessenen Zeitrahmen zum Abschluss.",
      },
      {
        number: "04",
        title: "Wir halten Sie informiert",
        description:
          "Sie haben die Beziehung eingeleitet. Sie bleiben Teil davon. Wir werden Sie nicht umgehen, Sie nicht von wesentlichen Entwicklungen ausschliessen und Sie nicht in eine Lage bringen, in der Ihr Klient mehr — oder weniger — weiss als Sie.",
      },
    ],
  },

  role: {
    heading: "Wie wir Ihre Rolle verstehen",
    paragraphs: [
      "Sie wissen Dinge über das Unternehmen Ihres Klienten, die wir nicht wissen — die Geschichte, die Dynamiken, die Empfindlichkeiten, die in keinem Jahresabschluss erscheinen. Dieses Wissen macht Sie zu einem echten Partner im Prozess, nicht nur zu einem Vermittler.",
      "Wir stützen uns auf Berater, die das Unternehmen vor uns kennen. Die Einführungen, die wir am meisten schätzen, kommen von Treuhändern und Beratern, die die Situation selbst beurteilt haben und glauben, dass eine realistische Passung besteht. Wir werden Ihnen immer ehrlich sagen, wenn wir das nicht sehen — denn Ihre Zeit und die Beziehung zu Ihrem Klienten zu schützen, ist uns wichtiger als eine Transaktion zu verfolgen, die nicht stattfinden sollte.",
      "Unser Ziel ist es, der Erwerber zu werden, an den Sie zuerst denken, wenn eine Nachfolgesituation entsteht — nicht weil wir Sie darum gebeten haben, sondern weil jede Einführung, die Sie gemacht haben, positiv auf Sie zurückgefallen ist.",
    ],
  },

  criteria: {
    heading: "Wonach wir suchen",
    description:
      "Um Ihnen bei der Einschätzung zu helfen, ob eine Situation passen könnte, bevor Sie Kontakt aufnehmen:",
    items: [
      {
        title: "Profitabel und etabliert",
        description: "Typischerweise seit vielen Jahren inhabergeführt.",
      },
      {
        title: "Umsatz unter CHF 10M",
        description: "Jahresumsatz in der Regel unter CHF 10M.",
      },
      {
        title: "Nachfolgebedingt",
        description: "Nachfolge oder Pensionierung als primärer Verkaufsgrund — keine Notlage oder Restrukturierung.",
      },
      {
        title: "Fähiges Team vorhanden",
        description: "Ein fähiges Team bereits über den Gründer hinaus im Einsatz.",
      },
      {
        title: "Stabile Nachfrage",
        description: "Eine angemessen stabile Nachfrage — nicht abhängig von einem einzelnen Vertrag oder den persönlichen Beziehungen des Gründers.",
      },
      {
        title: "Strukturierte Übergabe",
        description: "Eine Übergabe, die realistisch über einen strukturierten Zeitrahmen geplant werden kann.",
      },
    ],
    note: "Sollte eine Situation nicht zu diesen Kriterien passen, sagen wir es Ihnen klar und zeitnah — damit Sie den richtigen Weg für Ihren Klienten ohne Verzögerung verfolgen können.",
  },

  confidentiality: {
    heading: "Vertraulichkeit",
    paragraphs: [
      "Jedes Gespräch wird mit absoluter Diskretion behandelt. Wir besprechen Situationen nicht mit Dritten, wir sprechen Unternehmen nicht direkt an, sobald ein Berater in ihrem Namen Kontakt aufgenommen hat, und wir verwenden Informationen aus explorativen Gesprächen ausschliesslich zur Beurteilung der Passung.",
    ],
  },

  longTerm: {
    heading: "Eine langfristige Beziehung, keine einzelne Transaktion",
    paragraphs: [
      "Der Schweizer Nachfolgemarkt unter CHF 10M ist keine einmalige Gelegenheit — es ist eine strukturelle, fortlaufende Realität. Wir bauen Saha für die lange Frist auf, was bedeutet, dass wir auch langfristige Beziehungen zu den Beratern aufbauen, die in diesem Segment tätig sind.",
      "Jede Transaktion, die wir erfolgreich abwickeln, ist das Fundament für die nächste Einführung. Wir messen unsere Beziehung zur Beratergemeinschaft nicht an der Anzahl der Transaktionen, die wir verfolgen, sondern an der Qualität der Ergebnisse, die wir für die Gründer erzielen, die sie uns vermitteln.",
    ],
  },

  closingCta: {
    heading: "Ein Gespräch beginnen",
    description:
      "Wenn Sie eine Situation besprechen möchten — auch in einem frühen Stadium und ohne Verpflichtung — freuen wir uns auf das Gespräch. Alles ist vom ersten Kontakt an vertraulich.",
    cta: { label: "Eine Situation vermitteln", href: "/contact?pathway=advisor" },
    directContact: "Oder kontaktieren Sie uns direkt unter hello@saha.ch. Wir antworten innerhalb von 48 Stunden.",
  },
};

/* ── About ──────────────────────────────────── */

export const aboutPage = {
  hero: {
    eyebrow: "Über Saha",
    headline: "Warum Saha existiert",
    subheadline:
      "Zu viele gute Schweizer Unternehmen verschwinden nicht weil sie scheitern, sondern weil ihre Gründer ohne klare Nachfolgelösung in den Ruhestand gehen. Saha wurde geschaffen, das zu ändern.",
  },

  founderNote: {
    heading: "Ein Wort des Gründers",
    paragraphs: [
      "Ich habe 35 Jahre in der Schweiz verbracht, Unternehmen in Technologie und Finanzen aufgebaut und beraten. 2014 habe ich ein Schweizer Technologieunternehmen, das ich gegründet hatte, an einen an der Zürcher Börse kotierten strategischen Käufer verkauft. Wenn man selbst etwas aufgebaut und übergeben hat, versteht man klarer, was wirklich auf dem Spiel steht.",
      "Zwei Momente sind mir geblieben. Ein Gründer schloss ein Unternehmen, das er über dreissig Jahre geführt hatte — profitabel, gut geführt, von seiner Gemeinschaft geschätzt — weil niemand da war, um es weiterzuführen. Kurz darauf sah ich das Gegenteil: Zwei ehemalige Lehrlinge kehrten Jahre später zurück, kauften ihrem Gründer das Unternehmen ab und bauten etwas noch Stärkeres auf als das, was sie geerbt hatten.",
      "Derselbe Markt. Sehr unterschiedliche Ergebnisse. Der Unterschied lag nicht in der Qualität des Unternehmens. Er lag darin, ob der richtige Erwerber im richtigen Moment existierte.",
      "Saha wurde geschaffen, um dieser Erwerber zu sein — systematisch und auf Dauer.",
    ],
    attribution: "— Temitope Ola, Gründer",
    callout: {
      type: "quote" as const,
      text: "Gute Unternehmen sollten nicht verschwinden, bloss weil das Zeitfenster fehlt.",
    },
  },

  foundingTeam: {
    heading: "Das Gründungsteam",
    intro: "Saha wird von einer kleinen Gruppe von Menschen mit komplementären Fähigkeiten in Akquisition, Forschung und Infrastruktur zusammengestellt.",
    members: [
      {
        name: "Temitope Ola",
        subtitle: "Gründer — Strategie & M&A",
        description: "Gründer-Operator mit über 25 Jahren Erfahrung in Unternehmensaufbau, Finanzen und länderübergreifender Umsetzung. 2014 führte er den vollständigen Exit eines von ihm gegründeten Schweizer Technologieunternehmens an einen börsenkotierten strategischen Käufer durch. Diese Erfahrung prägt die Art, wie Saha mit Gründern arbeitet. Er bringt die Sourcing-Vision, die Akquisitionsthese und die Aufbauambition hinter Saha mit.",
      },
      {
        name: "Liesel Goveas, PhD",
        subtitle: "Gründerin — Forschung & Akquisitionsintelligenz",
        description: "Doktorat in Neurowissenschaften, MBA an der Universität St. Gallen. Bringt rigorose Forschungsmethodik und analytische Tiefe in Sourcing, Markt-Mapping und Due Diligence ein. Ihre wissenschaftliche Karriere an Schweizer und europäischen Institutionen verleiht Saha direkte Fachkompetenz in den Bereichen Life Sciences, Medtech und Biotech.",
      },
    ],
    closingLine: "Wenn Sie die Erfahrung und den Antrieb mitbringen, uns zu begleiten, würden wir uns freuen, von Ihnen zu hören.",
  },

  story: {
    heading: "Das Problem, das wir lösen wollten",
    paragraphs: [
      "Die Schweizer Wirtschaft ist auf kleinen und mittelständischen Unternehmen aufgebaut. Viele sind profitable, gut verwaltete Unternehmen mit loyalen Teams und starken lokalen Reputationen. Sie bilden das Fundament von Gemeinschaften überall im Land.",
      "Aber jedes Jahr stehen Tausende dieser Unternehmen einer unsicheren Zukunft gegenüber. Ihre Gründer — oft Menschen, die sie von Grund auf aufgebaut haben — nähern sich dem Ruhestandsalter ohne Nachfolgeplan. Die Optionen sind meist unbefriedigend: Verkauf an einen grossen, unpersönlichen Käufer; versuchte Übergabe an unvorbereitete Nachfolger; oder einfach Geschäftsschliessung.",
      "Saha wurde gegründet, um eine bessere Alternative zu bieten. Wir glauben, dass starke, profitable, gut geführte Unternehmen nicht verschwinden sollten, bloss weil das Zeitfenster fehlt. Sie verdienen einen Eigentümer, der ihre Geschichte respektiert, ihre Menschen unterstützt und sie mit Ernsthaftigkeit und Sorgfalt vorantragen wird.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168'000",
      caption: "Schweizer KMU müssen bis 2030 einen Generationswechsel durchlaufen",
    },
  },

  whyDifferentBuyer: {
    heading: "Warum diese Unternehmen einen anderen Käufertyp brauchen",
    paragraphs: [
      "Unternehmen unter CHF 10M Umsatz sitzen in einer strukturellen Lücke. Sie sind zu klein für die meisten institutionellen Käufer, die grössere Transaktionsvolumen brauchen, um ihre Kostenstruktur zu rechtfertigen. Sie sind zu gründerabhängig für passive Investoren, denen der Wille oder die Fähigkeit für eine aktive Übergabe fehlt.",
      "Und sie sind zu wichtig — für Angestellte, für Kundinnen und Kunden, für Gemeinschaften — um einfach zu verschwinden, wenn sich kein Käufer zeigt. Dieses Segment braucht nicht mehr Kapital. Es braucht einen Käufer, der die menschliche Komplexität kleinerer Übergabe-Deals versteht und bereit ist, die Arbeit zu machen.",
    ],
    callout: {
      type: "quote" as const,
      text: "Dieses Segment braucht nicht mehr Kapital. Es braucht einen Käufer, der bereit ist, die nötige Arbeit zu leisten.",
    },
  },

  approach: {
    heading: "Wie wir über Eigentümerschaft denken",
    paragraphs: [
      "Wir akquirieren Unternehmen mit der Absicht, sie zu behalten. Das ist keine Finanzstrategie im Gewand verantwortungsvoller Führung — es ist eine echte Überzeugung, dass langfristige Eigentümerschaft bessere Ergebnisse für Unternehmen, ihre Menschen und ihre Gemeinschaften produziert.",
      "Wir bieten jedem Unternehmen eine sorgfältige Übergabe, selektive operative Unterstützung und die Stabilität, die aus der Zugehörigkeit zu etwas Grösserem kommt. Im Gegenzug stärkt jedes Unternehmen das Ganze — durch gemeinsames Wissen, operative Disziplin und die wachsenden Vorteile eines wachsenden, permanenten Portfolios.",
    ],
    callout: {
      type: "quote" as const,
      text: "Wir akquirieren Unternehmen mit der Absicht, sie zu behalten.",
    },
  },

  principles: {
    heading: "Unsere Überzeugungen",
    items: [
      {
        title: "Kontinuität statt Disruption",
        description:
          "Gute Unternehmen sollten bewahrt und gestärkt werden, nicht in Einzelteile zerlegt.",
      },
      {
        title: "Verantwortung statt Extraktion",
        description:
          "Eigentümerschaft trägt Verantwortung. Unser Ziel: jedes Unternehmen stärker zu hinterlassen, als wir es vorgefunden haben.",
      },
      {
        title: "Geduld statt Eile",
        description:
          "Dauerhafter Wert wird langsam aufgebaut. Wir widerstehen dem Druck, für kurzfristige Ergebnisse zu optimieren.",
      },
      {
        title: "Klarheit statt Komplexität",
        description:
          "Unser Modell ist bewusst einfach gehalten. Komplexität muss dem Unternehmen dienen — nicht dem Geschäftsmodell.",
      },
    ],
  },

  whereWeAreToday: {
    heading: "Wo wir heute sind",
    paragraphs: [
      "Wir bauen unermüdlich: Das Gründungsteam steht, die Kapitalstruktur wird finalisiert, und erste Übernahmegespräche sind im Gang. Das ist Absicht — wir glauben, dass die ersten Übernahmen das Unternehmen definieren, und wir beabsichtigen, sie richtig zu machen.",
      "Jede Entscheidung, die wir treffen, wird von einer einfachen Frage geleitet: wird das noch in zwanzig Jahren Sinn machen?",
    ],
  },

  ambition: "Saha wird nicht nur als Holding aufgebaut, sondern als langfristiges Modell für die Nachfolge kleiner Unternehmen in der Schweiz. Wir glauben, dass der Grund, warum dieses Segment unterversorgt ist, nicht ein Mangel an guten Unternehmen ist — sondern das Fehlen eines Erwerbers mit der Infrastruktur, diese Deals zum Funktionieren zu bringen. Genau diese Infrastruktur aufzubauen — schrittweise und mit Disziplin — ist der Zweck von Saha.",

  closingCta: {
    heading: "Wir würden uns freuen, von Ihnen zu hören",
    description:
      "Egal, ob Sie ein Gründer sind, der über die Zukunft nachdenkt, ein Investor, der das Modell erkundet, oder jemand, der unsere Vision teilt — wir freuen uns über Ihre Kontaktaufnahme.",
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

  submitLabel: "Nachricht senden",
  selectPrompt: "Wählen Sie oben aus, wie Sie mit uns in Kontakt treten möchten.",
  thankYouHeading: "Vielen Dank für Ihre Nachricht",
  thankYouDescription: "Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.",
  sendAnother: "Weitere Nachricht senden",

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
    {
      id: "advisor",
      title: "Ich bin ein Berater, der einen Klienten vermittelt",
      description:
        "Wenn Sie Treuhänder, Notar oder Berater mit einem Klienten sind, der eine Nachfolge erwägt, freuen wir uns auf ein vertrauliches Gespräch zur Beurteilung der Passung.",
      fields: [
        { name: "name", label: "Ihr Name", type: "text" as const, required: true },
        { name: "email", label: "E-Mail-Adresse", type: "email" as const, required: true },
        { name: "firm", label: "Kanzlei oder Praxis (optional)", type: "text" as const, required: false },
        { name: "message", label: "Beschreiben Sie uns die Situation", type: "textarea" as const, required: false },
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
            "Private-Equity-Gesellschaften akquirieren in der Regel Unternehmen mit der Absicht, sie innerhalb von drei bis sieben Jahren zu verkaufen. Saha akquiriert Unternehmen, um sie dauerhaft zu halten. Es gibt keinen Exit-Zeitplan, keinen Druck zur Restrukturierung für Weiterverkauf und keinen Anreiz, kurzfristige Werte zu extrahieren. Unser Modell ist um Kontinuität aufgebaut, nicht um Transaktionen.",
        },
        {
          question: "Was passiert mit meinen Mitarbeitenden nach einem Verkauf?",
          answer:
            "Das Team, das Sie aufgebaut haben, zu bewahren, ist zentral für unseren Ansatz. Wir erwerben Unternehmen nicht mit der Absicht, sie zu restrukturieren. Alle Entscheidungen, die Menschen betreffen, werden im Interesse der langfristigen Gesundheit des Unternehmens getroffen — mit Transparenz.",
        },
        {
          question: "Wie lange dauert der Prozess vom ersten Gespräch bis zum Abschluss?",
          answer:
            "Das hängt davon ab, wo Sie in Ihren Überlegungen stehen. Nachfolge ist oft eine jahrelange Reflexion, bevor ein Gründer bereit ist zu handeln — und das ist völlig normal. Sobald Sie sich entschieden haben voranzugehen, dauert ein typischer Transaktionsprozess vom ersten ernsthaften Gespräch bis zum Abschluss drei bis sechs Monate. Auf keiner der beiden Phasen besteht Zeitdruck. Viele Gründer finden es nützlich, frühzeitig mit uns ins Gespräch zu kommen — einfach um die Optionen zu verstehen. Alles ist vertraulich und unverbindlich.",
        },
        {
          question: "Wird mein Unternehmen seinen Namen und Marke behalten?",
          answer:
            "Ja. Wir bewahren die Identität, Marke und lokale Präsenz jedes Unternehmens, das wir akquirieren. Ihr Unternehmen arbeitet weiterhin unter seinem eigenen Namen, in seinem eigenen Markt, mit seinem eigenen Team. Saha bietet Unterstützung aus dem Hintergrund.",
        },
        {
          question: "Muss ich nach dem Verkauf beteiligt bleiben?",
          answer:
            "Das liegt vollständig bei Ihnen. Einige Gründer bevorzugen einen sauberen Übergabeprozess, während andere eine Zeitlang in einer Beratungs- oder Teilzeitkapazität beteiligt bleiben. Wir gestalten die Übergabe um Ihre Vorlieben und Ihren Zeitrahmen.",
        },
        {
          question: "Welche Grösse von Unternehmen akquiriert Saha typischerweise?",
          answer:
            "Wir konzentrieren uns auf profitable, gründergeführte Schweizer Unternehmen generell unter CHF 10M Jahresumsatz. Die wichtigsten Faktoren sind die Qualität des Unternehmens, die Stärke des Teams und ob das Unternehmen realistisch florieren kann, nachdem der Gründer weg ist.",
        },
      ],
    },
    {
      label: "Für Investoren",
      items: [
        {
          question: "Was unterscheidet Saha von einer geduldigen Holding mit Kapital?",
          answer:
            "Eine Holding mit geduldigem Kapital ist eine Positionierung. Saha baut die Sourcing-, Übergabe- und Betriebs-Infrastruktur auf, die kleinere Nachfolgetransaktionen tatsächlich tragfähig macht — nicht nur finanzierbar. Das Modell ist auf Wertaufbau ausgelegt: Jede Übernahme verbessert unsere Prozesse, stärkt unser Operatoren-Netzwerk und reduziert Reibung bei der nächsten Transaktion. Das ist der Unterschied zwischen dem Besitz einer Sammlung von Unternehmen und dem Aufbau eines Akquisitions- und Betriebsmotors.",
        },
        {
          question: "Was ist Sahas Investitionsstruktur?",
          answer:
            "Saha ist eine permanente Holdinggesellschaft, nicht ein traditioneller Fonds mit einer festen Laufzeit. Kapital wird in Übernahmen eingesetzt, die auf unbestimmte Zeit gehalten werden. Renditen werden durch die langfristigen Cashflows, organisches Wachstum und kumulative operative Stärke des Portfolios generiert.",
        },
        {
          question: "Wie generiert Saha Renditen ohne Exits?",
          answer:
            "Die Renditen werden durch die operativen Cashflows der von uns erworbenen Unternehmen generiert, reinvestiert oder ausgeschüttet, während das Portfolio reift. Wir zielen auf einen Einstieg bei 3–5× EBITDA in cashflow-starken Unternehmen. Investorenliquidität wird durch eine Kombination aus Barausschüttungen, Portfoliorefinanzierung im Zeitverlauf und selektiven Sekundärmechanismen bereitgestellt — nicht durch ein einzelnes Exit-Ereignis. Wir optimieren nicht für eine einzelne IRR-Kennzahl. Wir optimieren für dauerhaften, sich kumulierenden Wert. Die vollständige Renditedokumentation wird in direkten Gesprächen geteilt.",
        },
        {
          question: "Was ist das Ziel-Rendite-Profil?",
          answer:
            "Wir zielen darauf ab, den Portfolio-Wert langfristig durch Übernahme-Disziplin, operative Verbesserung und organisches Wachstum stetig zu steigern. Wir strukturieren Saha für eine kleine Zahl von ausgerichteten Langzeit-Investoren und teilen vollständige Dokumentation in privaten Diskussionen.",
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
          question: "Warum der Fokus auf Unternehmen unter CHF 10M Umsatz?",
          answer:
            "Dieses Segment ist strukturell unterversorgt. Die meisten institutionellen Käufer, Berater und M&A-Datensets konzentrieren sich über CHF 10M. Darunter existieren profitable Nachfolgeunternehmen in grossen Mengen, aber es fehlt ein passendes Erwerbermodell. Genau diese Lücke will Saha füllen.",
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
            "Saha ist ein Wort, das für Geduld, Ausdauer und achtsames Tragen steht. Es spiegelt die Langzeitmentalität wider, die im Kern von allem, das wir tun, steht — Unternehmen akquirieren und bewahren nicht für einen Zyklus, sondern für eine Generation.",
        },
        {
          question: "Ist Saha ein Fonds oder ein Unternehmen?",
          answer:
            "Saha ist eine permanente Holdinggesellschaft. Anders als ein Fonds gibt es keine vorbestimmte Exit-Zeitlinie. Unternehmen, die wir akquirieren, werden dauerhaft Teil der Saha-Familie. Diese Struktur richtet unsere Anreize mit der Langzeitgesundheit jedes Unternehmens, das wir besitzen, aus.",
        },
        {
          question: "Wie viele Unternehmen besitzt Saha derzeit?",
          answer:
            "Wir bauen gezielt die Grundlage — Team, Prozesse und Kapital — auf, bevor wir unsere ersten Übernahmen machen. Wir glauben, dass das Modell richtig zu machen wichtiger ist als schnell zu sein.",
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
  tagline: "Der langfristige Erwerber für Schweizer KMU in der Nachfolge.",
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
        { label: "Berater", href: "/advisors" },
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
    title: "Saha — Der langfristige Erwerber für Schweizer KMU in der Nachfolge",
    description:
      "Saha akquiriert profitable Schweizer Unternehmen unter CHF 10M Umsatz von Gründern vor der Nachfolge, führt sie sorgfältig über und hält sie langfristig.",
  },
  founders: {
    title: "Für Gründer — Saha",
    description:
      "Sie haben etwas Bewahrenwertes aufgebaut. Saha akquiriert und behält gründergebaute Schweizer Unternehmen unter CHF 10M mit Sorgfalt, Struktur und langfristiger Verpflichtung.",
  },
  advisors: {
    title: "Für Berater — Saha",
    description:
      "Wenn Sie einen Klienten an Saha vermitteln, ist Ihr Ruf geschützt. Wir bieten einen klaren Prozess, volle Transparenz und dauerhafte Eigentümerschaft für Schweizer KMU-Nachfolgen.",
  },
  investors: {
    title: "Für Investoren — Saha",
    description:
      "Ein Modell langfristiger Eigentümerschaft für das unterversorgte Segment von Schweizer Nachfolgetransaktionen unter CHF 10M. Strukturierte Übergänge, disziplinierte Sourcing, wachsender Wert.",
  },
  join: {
    title: "Saha beitreten — Bauen Sie von Grund auf auf",
    description:
      "Saha ist in der Gründungsphase und stellt ein Team zusammen, um ein Langzeitunternehmen für Schweizer Unternehmen aufzubauen. Deal-, Übergabe-, Operations- und Finanzrollen.",
  },
  about: {
    title: "Über Saha — Warum wir existieren",
    description:
      "Zu viele gute Schweizer Unternehmen verschwinden, wenn ihre Gründer in Ruhestand gehen. Saha wurde geschaffen, um einen überlegten, langfristigen Erwerber für das unterversorgte Nachfolgesegment anzubieten.",
  },
  contact: {
    title: "Kontaktieren Sie Saha",
    description:
      "Führen Sie ein Gespräch mit Saha. Egal, ob Sie Gründer, Investor oder zukünftiger Team-Mitglied sind — wir würden uns freuen, von Ihnen zu hören.",
  },
  faq: {
    title: "FAQ — Saha",
    description:
      "Antworten auf häufig gestellte Fragen zu Saha von Gründern, Investoren und zukünftigen Teammitgliedern.",
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
