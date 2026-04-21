/* ─────────────────────────────────────────────
 *  Saha - deutsche Version
 *  Redaktionelle Übersetzung in institutioneller Qualität
 *  Edit text here; the components pull from these objects.
 * ───────────────────────────────────────────── */

export const siteConfig = {
  name: "Saha",
  tagline: "Zeit. Talent. Technologie. Ein systematisches Nachfolgesystem für Schweizer Kleinunternehmen.",
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
    { label: "Talent", href: "/talent" },
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
      "Saha erwirbt profitable, inhabergeführte Schweizer Unternehmen mit weniger als CHF 10 Mio. Umsatz, begleitet sie sorgfältig durch die Übergabe und lässt sie langfristig stetig wachsen. Parallel dazu bauen wir die Sourcing-, Übergabe- und Technologie-Plattform auf, die dieses Segment überhaupt tragfähig macht.",
    cta: { label: "Gespräch beginnen", href: "/contact" },
    secondaryCta: { label: "Unsere Kriterien", href: "/founders" },
  },

  whatWeAreBuildingSectionLabel: "Unser Anliegen",
  whatWeAreBuilding: {
    heading: "Viele gute Unternehmen verschwinden aus den falschen Gründen",
    paragraphs: [
      "In der Schweiz stehen Tausende profitabler Unternehmen vor einer ungewissen Zukunft. Nicht weil sie scheitern, sondern weil ihre Gründerinnen und Gründer ohne Nachfolge in den Ruhestand gehen.",
      "Die meisten institutionellen Käufer konzentrieren sich auf das obere Marktsegment. Unternehmen mit weniger als CHF 10 Mio. Umsatz sind für klassisches Private Equity zu klein und für Einzelkäufer oft zu komplex. Sie fallen durch die Maschen: nicht weil sie keinen Wert haben, sondern weil bisher niemand ein Modell für sie gebaut hat.",
      "Saha baut dieses Modell: ein disziplinierter Schweizer Nachfolge-Erwerber für profitable, inhabergeführte KMU. Wir kaufen gezielt, begleiten die Gründerin oder den Gründer durch eine gelungene Übergabe und lassen das Unternehmen langfristig wachsen.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168'000",
      caption: "Schweizer KMU, die bis 2030 einen Generationswechsel durchlaufen müssen.",
      source: "2026 CFB\u2011HSG / UBS Studie",
    },
  },

  whyNowSectionLabel: "Was auf dem Spiel steht",
  whyNow: {
    heading: "Wenn sich kein Käufer findet, schliessen gute Unternehmen still",
    paragraphs: [
      "Wenn ein profitables Unternehmen schliesst, weil sich keine Nachfolge fand, ist der Verlust kaum messbar. Mitarbeitende, die dort ihre berufliche Heimat hatten, orientieren sich neu. Über Jahre gewachsene Kunden- und Lieferantenbeziehungen lösen sich auf. Know-how, institutionelles Gedächtnis und lokale Reputation, in Jahrzehnten aufgebaut, zerstreuen sich, ohne dass es jemand bemerkt.",
      "Für die Gründerin oder den Gründer ist der Verlust persönlich. Die Arbeit war gut, die Kundschaft treu, das Team wollte bleiben. Das Unternehmen war solide. Nur fand sich kein Käufer zur richtigen Zeit.",
      "Das ist kein Einzelfall. Zehntausende Schweizer KMU stehen in diesem Jahrzehnt vor der Nachfolge, und ein erheblicher Teil dürfte genau aus diesem Grund schliessen. Genau diesen Verlust soll Saha verhindern, eine disziplinierte Akquisition nach der anderen.",
    ],
    callout: {
      type: "stat" as const,
      value: "1 von 3",
      caption: "Schweizer KMU-Nachfolgen dürften scheitern: nicht aus Mangel an guten Unternehmen, sondern weil sich kein Käufer findet.",
      source: "2026 CFB\u2011HSG / UBS Studie",
    },
  },

  audiences: [
    {
      label: "Für Gründer",
      heading: "Ihr Unternehmen verdient ein überlegtes nächstes Kapitel",
      description:
        "Sie haben etwas aufgebaut, das zählt: für Ihr Team, Ihre Kundinnen und Kunden, Ihre Region. Saha steht dafür, dieses Werk weiterzuführen, mit der Ernsthaftigkeit und Sorgfalt, die es verdient.",
      cta: { label: "Mehr erfahren", href: "/founders" },
    },
    {
      label: "Für Investoren",
      heading: "Ein diszipliniertes Modell in einem übersehenen Segment",
      description:
        "Wiederholbares Sourcing in einer strukturellen Deal-Pipeline, disziplinierte Einstiegsbewertungen, sorgfältig gestaltete Übergaben und permanentes Halten. Konzipiert für nachhaltigen Wertaufbau, nicht für Exits.",
      cta: { label: "Mehr erfahren", href: "/investors" },
    },
  ],

  buildersStrip: {
    heading: "Helfen Sie uns, Saha von Grund auf aufzubauen",
    description:
      "Wir stellen ein kleines, fokussiertes Team zusammen, um unsere ersten Akquisitionen, den Due-Diligence-Prozess und das Betriebsmodell zu gestalten. Wer etwas von Grund auf aufbauen will, findet hier frühe, substanzielle Arbeit.",
    cta: { label: "Mehr erfahren", href: "/talent" },
  },

  modelSectionLabel: "So arbeiten wir",
  model: {
    heading: "Die richtigen Unternehmen finden. Die Übergabe sorgfältig führen. Langfristig wachsen lassen.",
    steps: [
      {
        number: "01",
        title: "Unternehmen, die über den Gründer hinaus bestehen",
        description:
          "Wir konzentrieren uns auf profitable, inhabergeführte Schweizer Unternehmen mit weniger als CHF 10 Mio. Umsatz, bei denen die Nachfolge der Verkaufsgrund ist. Was am meisten zählt: stabile Nachfrage, ein fähiges Team und ein Unternehmen, das auch ohne die Gründerin oder den Gründer tragfähig weitergeführt werden kann.",
      },
      {
        number: "02",
        title: "Die Übergabe sorgfältig führen",
        description:
          "Jede Akquisition folgt einem strukturierten Übergabeprozess: Gründerwechsel, Kundenkontinuität und Teamstabilität, mit enger Begleitung in den ersten zwölf Monaten. Hier entscheidet sich, ob ein Deal gelingt.",
      },
      {
        number: "03",
        title: "Das Unternehmen stetig wachsen lassen",
        description:
          "Sobald das Unternehmen stabil ist, begleiten wir sein stetiges Wachstum über die folgenden zwölf bis vierundzwanzig Monate. Das bedeutet in der Regel: klareres Reporting, digitalisierte Arbeitsabläufe, Unterstützung bei Schlüsseleinstellungen und das Sichern von Wissen, das bislang bei der Gründerin oder dem Gründer lag.",
      },
      {
        number: "04",
        title: "Langfristig halten",
        description:
          "Wir kaufen nicht, um weiterzuverkaufen. Langfristiges Eigentum erlaubt Entscheidungen, die Team, Kundschaft und Unternehmensqualität wirklich dienen, ohne den Druck eines Ausstiegszeitpunkts. Jedes Unternehmen bleibt Teil der Saha-Familie.",
      },
    ],
  },

  moreThanBuyerSectionLabel: "Das Saha-Betriebsmodell",
  moreThanBuyer: {
    heading: "Vier Fähigkeiten, die sich mit jeder Akquisition verstärken",
    intro: "Ein kaufwilliger Erwerber allein genügt in der Nachfolge kleiner Unternehmen nicht. Diese Unternehmen brauchen eine strukturierte Übergabe, eine Führung, die über die Gründerin oder den Gründer hinaus trägt, und operative Unterstützung, die tatsächlich hilft. Saha wird rund um vier Fähigkeiten gebaut, die genau dies leisten und mit jeder Transaktion schärfer werden.",
    items: [
      {
        title: "Systematisches Sourcing",
        description:
          "Der Deal-Flow in der Schweizer KMU-Nachfolge wird von Treuhändern, Notarinnen und lokalen Beratern gesteuert. Saha baut den Ruf und die Beziehungen auf, die uns zum Erwerber machen, den diese Intermediäre zuerst anrufen, weil wir ihre Klienten gut behandeln, mit Integrität abschliessen und niemandem die Zeit stehlen.",
      },
      {
        title: "Führungskontinuität",
        description:
          "Wenn eine Gründerin oder ein Gründer zurücktritt, entscheidet die nächste Führungsperson über Erfolg oder Misserfolg der Transaktion. Saha behandelt Führungskontinuität als benannte Fähigkeit: die richtige Person identifizieren, beurteilen, einsetzen und begleiten, ob aus dem bestehenden Team oder von aussen, damit Eigentums- und Führungsnachfolge gemeinsam gedacht werden und nicht nacheinander.",
      },
      {
        title: "Übergabedisziplin",
        description:
          "Bei der Übergabe entscheidet sich, ob eine KMU-Transaktion gelingt oder scheitert. Wir behandeln sie als Kerndisziplin: ein strukturierter Zwölf-Monats-Plan mit Kunden- und Lieferantenübergaben, Kontinuität im Team, operativer Handover und der Übertragung jenes Wissens der Gründerin oder des Gründers, das sonst mit ihnen verloren ginge.",
      },
      {
        title: "Gemeinsame operative Stärke",
        description:
          "Nach der Übergabe können Unternehmen der Saha-Familie auf gemeinsame Stärke in Finance, Reporting, Pricing, Hiring und Technologie für interne Effizienz zurückgreifen. Unterstützung, die gezielt eingesetzt wird und daran gemessen wird, ob sie das Unternehmen tatsächlich stärker macht.",
      },
    ],
    closingLine: "Jede Akquisition schärft das Playbook. Bessere Beraterbeziehungen. Bessere Übergabe-Leitfäden. Passendere Führungsbesetzungen. Bessere Betriebs-Vorlagen für Schweizer KMU. So wird dieses Segment im Massstab tragfähig.",
  },

  differentiatorsSectionLabel: "Was uns unterscheidet",
  differentiators: {
    heading: "Ein Modell für kleinere Nachfolgetransaktionen",
    steps: [
      {
        number: "01",
        title: "Konzipiert für Unternehmen unter CHF 10 Mio.",
        description:
          "Wir arbeiten in einem Segment, das die meisten institutionellen Käufer übersehen. Unser Modell, unsere Kosten und unsere Erwartungen sind von Tag eins an auf diese Transaktionsgrösse ausgelegt.",
      },
      {
        number: "02",
        title: "Tragfähig ohne Gründerin oder Gründer",
        description:
          "Bevor wir ein Unternehmen erwerben, beurteilen wir, ob es realistisch ohne seine Gründerin oder seinen Gründer weitergeführt werden kann. Nicht jedes gute Unternehmen eignet sich für eine Übernahme.",
      },
      {
        number: "03",
        title: "Übergabe als Kernfähigkeit",
        description:
          "Die Übergabephase ist dort, wo am meisten schiefgehen kann. Sie erfordert menschliches Urteilsvermögen, Empathie und enge Aufmerksamkeit. Wir behandeln die Übergabe als Disziplin, nicht als Formalität.",
      },
      {
        number: "04",
        title: "Kein Exit-Horizont, kein erzwungener Verkauf",
        description:
          "Wir halten dauerhaft. Entscheidungen werden für die Gesundheit jedes Unternehmens getroffen, nicht um einer Fondsfrist zu genügen oder eine Quartalsbilanz zu bedienen.",
      },
    ],
  },

  finalCtaFounders: {
    heading: "Denken Sie über die Zukunft nach?",
    description:
      "Wenn Sie als Gründerin oder Gründer beginnen, die Zukunft Ihres Unternehmens zu erwägen, freuen wir uns über ein ruhiges, vertrauliches Gespräch. Ohne Verpflichtung, ohne Druck.",
    cta: { label: "Gespräch beginnen", href: "/contact?pathway=founder" },
  },

  finalCtaOther: {
    heading: "Investoren und zukünftige Team-Mitglieder",
    description:
      "Ob als Investor oder als jemand, der Saha mitaufbauen möchte: Wir freuen uns auf Ihre Nachricht.",
    cta: { label: "Kontaktieren Sie uns", href: "/contact?pathway=investor" },
  },
};

/* ── For Founders ───────────────────────────── */

export const foundersPage = {
  hero: {
    eyebrow: "Für Gründer",
    headline: "Sie haben ein Unternehmen aufgebaut,\ndas eine sorgfältige Übergabe verdient",
    subheadline:
      "Wenn die Zeit kommt, einen Schritt zurückzutreten, verdient Ihr Unternehmen einen Käufer, der Kontinuität ernst nimmt und das Unternehmen mit der Zeit tatsächlich stärker macht. Nicht weiterverkaufen, nicht umbenennen, nicht zerschlagen.",
    cta: { label: "Ein vertrauliches Gespräch beginnen", href: "/contact?pathway=founder" },
  },

  intro: {
    heading: "Wir verstehen, was auf dem Spiel steht",
    paragraphs: [
      "Ein Unternehmen zu verkaufen, das Sie aus dem Nichts aufgebaut haben, ist nicht bloss eine finanzielle Entscheidung. Es ist persönlich. Ihr Name steht dafür. Ihr Team vertraut Ihnen. Ihre Kundinnen und Kunden verlassen sich auf die Standards, die Sie setzen. Den richtigen nächsten Eigentümer zu finden, gehört zu den wichtigsten Entscheidungen, die Sie je treffen werden.",
      "Saha wurde von Menschen aufgebaut, die das verstehen. Unser Modell ist darauf ausgelegt, zu ehren, was Sie geschaffen haben: es zu bewahren, zu unterstützen und mit derselben Ernsthaftigkeit voranzutragen, die Sie beim Aufbau mitgebracht haben. Wir sind nicht hier, um umzubenennen, zu restrukturieren oder weiterzuverkaufen. Wir sind hier, um weiterzuführen, was Sie begonnen haben.",
    ],
    callout: {
      type: "quote" as const,
      text: "Ihr Name steht dafür. Ihr Team vertraut Ihnen. Wir nehmen diese Verantwortung ernst.",
    },
  },

  whatWeLookFor: {
    heading: "Woran wir eine gute Passung erkennen",
    transitionLine: "Wir prüfen jedes Unternehmen anhand zweier einfacher Filter: ob es ohne die Gründerin oder den Gründer wirklich fortbestehen kann (Übertragbarkeit) und ob wir es in den ersten zwölf bis vierundzwanzig Monaten auf konkrete Weise stärker machen können (Entwicklungspotenzial). Beides zählt. Ein übertragbares Unternehmen ohne Spielraum zur Verbesserung reicht nicht; ein Unternehmen mit Entwicklungspotenzial, das den Rückzug der Gründungsperson nicht überlebt, ebenfalls nicht.",
    items: [
      {
        title: "Profitabel und etabliert",
        description:
          "Seit vielen Jahren inhabergeführt, in der Regel unter CHF 10 Mio. Umsatz. Unternehmen mit nachgewiesener Erfolgsbilanz und solider finanzieller Gesundheit.",
      },
      {
        title: "Stabile, wiederkehrende Nachfrage",
        description:
          "Umsätze, die stabil oder wiederkehrend sind, nicht projektbasiert und nicht abhängig von einigen wenigen grossen Aufträgen.",
      },
      {
        title: "Ein fähiges Team über die Gründungsperson hinaus",
        description:
          "Operative Stärke, die über die Gründerin oder den Gründer hinaus trägt, mit Menschen, die bereits da sind und das Unternehmen weiterführen können.",
      },
      {
        title: "Ein realistischer Übergabepfad",
        description:
          "Eine Übergabe, die sorgfältig geplant und in einem vernünftigen Zeitrahmen umgesetzt werden kann, unter Einbindung der Gründungsperson.",
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
          "Unsere klare Präferenz ist es, Name, Marke und lokale Präsenz jedes Unternehmens zu bewahren, das wir erwerben. Jedes Unternehmen arbeitet in seinem Markt weiter, mit eigener Identität.",
      },
      {
        number: "02",
        title: "Ihr Engagement nach der Übergabe bestimmen Sie",
        description:
          "Einige Gründerinnen und Gründer bevorzugen einen sauberen Übergang. Andere bleiben eine Zeit lang in beratender Rolle beteiligt. Wir gestalten die Übergabe so, dass sie sich für Sie richtig anfühlt.",
      },
      {
        number: "03",
        title: "Ein fairer Preis, und mehr als eine Zahl",
        description:
          "Wir bieten transparente, faire Bewertungen. Wir wissen auch, dass für viele Gründerinnen und Gründer die Gewissheit, dass Team und Kundschaft gut betreut werden, ebenso wichtig ist wie der Preis selbst.",
      },
      {
        number: "04",
        title: "Wir erwerben nicht, um zu restrukturieren",
        description:
          "Das Team, das Sie aufgebaut haben, ist zentral dafür, was dieses Unternehmen überhaupt erwerbenswert macht. Entscheidungen, die Menschen betreffen, werden für die langfristige Gesundheit des Unternehmens getroffen, nie für kurzfristige Ökonomie.",
      },
    ],
  },

  process: {
    heading: "Wie eine Zusammenarbeit aussieht",
    description:
      "Kein Druck und keine Verpflichtung, in keiner Phase. Wir bewegen uns in einem Tempo, das sich für Sie richtig anfühlt.",
    steps: [
      {
        title: "Ein vertrauliches erstes Gespräch",
        description:
          "Wir beginnen mit einem privaten, unverbindlichen Gespräch, um Ihr Unternehmen, Ihre Überlegungen und Ihren Zeitrahmen zu verstehen. Nichts rückt voran, wenn Sie es nicht wünschen.",
      },
      {
        title: "Prüfen, ob eine Passung besteht",
        description:
          "Wenn gegenseitiges Interesse besteht, nehmen wir uns Zeit, um zu verstehen, ob Ihr Unternehmen zu unserem Modell passt: Profitabilität, Teamstärke, Kundenstabilität und ob die Übergabe realistisch strukturiert werden kann.",
      },
      {
        title: "Das Unternehmen vertieft kennenlernen",
        description:
          "Wir verbringen Zeit damit, Ihre Abläufe, Kundschaft, Team-Dynamik und Ihre tägliche Rolle zu verstehen. Es geht ebenso sehr um Menschen wie um Zahlen.",
      },
      {
        title: "Ein klares, faires Angebot",
        description:
          "Wir legen einen unkomplizierten Vorschlag vor, ohne aggressive Taktiken und ohne Überraschungen in letzter Minute. Faire Bedingungen, die den Wert dessen widerspiegeln, was Sie aufgebaut haben.",
      },
      {
        title: "Due Diligence und Übergabeplanung",
        description:
          "Formale Due Diligence parallel zu einer detaillierten Übergabeplanung: wer übernimmt was, wie die Kundenkommunikation gestaltet wird und wie das erste Jahr aussieht.",
      },
      {
        title: "Eine sorgfältige, strukturierte Übergabe",
        description:
          "Wir führen die Übergabe mit Sorgfalt aus: Gründer-Handover, Team-Kontinuität, Kundenkommunikation und enge Aufmerksamkeit für die betriebliche Stabilität von Tag eins an.",
      },
    ],
  },

  closingCta: {
    heading: "Ihr Unternehmen verdient ein ernsthaftes Gespräch",
    description:
      "Wenn Sie beginnen, über das Kommende nachzudenken, hören wir Ihnen gerne zu. Alles ist vertraulich, ohne Verpflichtung, und das Tempo bestimmen Sie.",
    cta: { label: "Mit uns sprechen", href: "/contact?pathway=founder" },
  },
};

/* ── For Investors ──────────────────────────── */

export const investorsPage = {
  hero: {
    eyebrow: "Für Investoren",
    headline: "Rendite durch Halten",
    subheadline:
      "Saha zielt auf profitable, inhabergeführte Unternehmen, bei denen Nachfolge Chancen eröffnet, die Übertragbarkeit real ist und jedes erworbene Unternehmen in den zwei Jahren nach Abschluss messbar gestärkt werden kann. Der Vorteil liegt darin, sorgfältig zu kaufen, gut zu übergeben und die operativen Fähigkeiten aufzubauen, die sich über ein permanentes Portfolio hinweg kumulieren.",
    cta: { label: "Die These besprechen", href: "/contact?pathway=investor" },
  },

  thesis: {
    heading: "Ein Käufer, eigens für die KMU-Nachfolge gebaut",
    paragraphs: [
      "Die Schweiz verfügt über ein grosses und wachsendes Segment profitabler, inhabergeführter Unternehmen, die vor einer Nachfolge stehen. Sie sind gut geführt, cashflow-stark und tief in ihren lokalen Märkten verwurzelt, liegen aber unter der Schwelle, in der die meisten institutionellen Käufer tätig sind. Alles unter CHF 10 Mio. Umsatz ist für den institutionellen Deal-Flow faktisch unsichtbar, obwohl die CFB-HSG/UBS-Nachfolgestudie schätzt, dass jeder dritte Schweizer KMU-Inhaber innerhalb von fünf Jahren eine Übergabe erwartet und nur zwei Drittel dieser Nachfolgen erfolgreich abgeschlossen werden.",
      "Die Lücke ist kein Mangel an guten Unternehmen; sie ist das Fehlen eines Käufermodells, das für dieses Segment gebaut ist. Diese Transaktionen verlangen praktisches Übergabe-Handwerk, Empathie für Gründerinnen und Gründer und die Bereitschaft, komplexe, kleinere Geschäfte zu führen, die sich nicht standardisieren lassen. Saha ist genau für diese Arbeit gebaut.",
    ],
    callout: {
      type: "stat" as const,
      value: "1 von 3",
      caption: "Schweizer KMU-Inhaber erwarten eine Übertragung innerhalb von fünf Jahren. Das Segment unter CHF 10 Mio. ist institutionellem Kapital weitgehend unsichtbar.",
    },
  },

  permanentOwnership: {
    heading: "Woher die Rendite kommt",
    paragraphs: [
      "Die Rendite entsteht auf zwei Wegen. Der erste ist der operative Cashflow aus den erworbenen Unternehmen, gemäss festgelegter Ausschüttungspolitik an die Investoren verteilt oder in neue Akquisitionen reinvestiert. Der zweite ist der Wertzuwachs des Portfolios, während die Unternehmen kumulieren, abgebildet im Nettoinventarwert über die Zeit.",
      "Weil die Struktur nicht auf ein einzelnes Exit-Ereignis hin optimiert ist, werden operative Entscheidungen für die langfristige Gesundheit des Unternehmens getroffen, nicht um es für den Verkauf herzurichten. Liquidität steht langfristigen Investoren dennoch auf zwei zusätzlichen Wegen offen: Refinanzierung gegen den wachsenden NAV und selektive Sekundärübertragungen innerhalb des Investorenkreises.",
    ],
  },

  mustBeTrue: {
    heading: "Was gelten muss, damit dieses Modell funktioniert",
    description:
      "Wir denken klar über unsere eigenen Annahmen nach. Damit Saha Erfolg hat, müssen folgende Annahmen zutreffen:",
    steps: [
      {
        number: "01",
        title: "Wir müssen übertragbare Unternehmen erwerben, nicht bloss günstige",
        description:
          "Ein niedriger Preis macht noch keine gute Akquisition. Das Unternehmen muss nach dem Rückzug der Gründungsperson weiter funktionieren, Kundschaft halten und Umsatz erzeugen. Übertragbarkeit ist der entscheidende Filter.",
      },
      {
        number: "02",
        title: "Übertragbar ist das Fundament; stärkbar ist die Obergrenze",
        description:
          "Ein Unternehmen, das den Rückzug der Gründungsperson übersteht, ist eine tragfähige Akquisition. Ein Unternehmen, das zusätzlich in den vierundzwanzig Monaten nach Abschluss messbar gestärkt werden kann, ist eine gute. Wir filtern auf beides und treten zurück, wo einer der Tests misslingt, unabhängig vom Preis.",
      },
      {
        number: "03",
        title: "Übergaben müssen strukturiert und gründerspezifisch sein",
        description:
          "Jede Übergabe ist anders. Ein generisches Playbook gibt es nicht. Erfolg hängt davon ab, zu verstehen, was die Gründerin oder der Gründer tatsächlich macht, wer übernehmen kann und wie sich Kunden- und Team-Vertrauen durch die Veränderung bewahren lässt.",
      },
      {
        number: "04",
        title: "Unterstützung muss nützen, ohne Overhead aufzublähen",
        description:
          "Gemeinsame Fähigkeiten sind nur dann sinnvoll, wenn sie jedem Unternehmen tatsächlich helfen. Wir müssen vermeiden, zentrale Funktionen zu bauen, die der Holding mehr dienen als dem Portfolio.",
      },
      {
        number: "05",
        title: "Die ersten Transaktionen wiegen überproportional schwer",
        description:
          "Die ersten Übernahmen geben den Ton für Sourcing, Übergabe-Qualität und Ruf vor. Sie richtig zu machen ist wichtiger, als sie schnell zu machen.",
      },
      {
        number: "06",
        title: "Disziplin wiegt schwerer als Tempo",
        description:
          "Das Modell hängt davon ab, häufiger Nein als Ja zu sagen. Das Pipeline-Volumen ist nicht die Einschränkung; Urteilskraft und Selektivität sind es.",
      },
    ],
  },

  howModelCompounds: {
    heading: "Infrastruktur, kein Portfolio",
    paragraphs: [
      "Saha baut kein Portfolio auf. Saha baut die Infrastruktur, die dieses Segment skalierbar macht, ohne das Handwerk zu verlieren, das jeder Deal verlangt.",
      "Jede Akquisition macht die nächste günstiger im Sourcing, schneller in der Übergabe und messbar besser zu stärken. Die Säulen unten zeigen, wo diese Kumulation entsteht.",
    ],
    pillars: [
      {
        title: "Sourcing über vertrauenswürdige Gegenparteien",
        description:
          "Fiduziare, Treuhänder und lokale Berater bringen Geschäfte zu Saha, bevor sie den offenen Markt erreichen.",
      },
      {
        title: "Übertragbarkeitsdisziplin",
        description:
          "Ein Filter für Unternehmen, die ihre Gründerin oder ihren Gründer überdauern können, angewendet, bevor über den Preis gesprochen wird.",
      },
      {
        title: "Führungskontinuität",
        description:
          "Eine benannte Praxis, um die richtige Nachfolgeführung zu identifizieren, zu beurteilen, einzusetzen und zu begleiten, intern oder extern.",
      },
      {
        title: "Übergabe-Playbook",
        description:
          "Strukturierte, gründerspezifische Übergabe mit enger Begleitung im ersten Jahr.",
      },
      {
        title: "Gemeinsame Fähigkeiten",
        description:
          "Finanzen, Reporting, Preisdisziplin, Rekrutierungsunterstützung und Wissenssicherung, angeboten für Portfoliounternehmen, die sie nutzen möchten.",
      },
      {
        title: "Eigene Plattform",
        description:
          "Sourcing-Intelligenz, Due-Diligence-Workflow, Übergabe-Werkzeuge und Portfolio-Reporting, intern entwickelt.",
      },
    ],
    callout: {
      type: "stat" as const,
      value: "Langfristig",
      caption: "Jede Akquisition stärkt die Plattform. Sourcing, Übergabe, Führung und Betrieb verbessern sich mit jedem Deal.",
    },
  },

  willNotBuy: {
    heading: "Was wir nicht kaufen",
    description: "Disziplin heisst, Grenzen klar zu benennen:",
    items: [
      {
        title: "Notleidende Sanierungsfälle",
        description: "Unternehmen, die eine sofortige Restrukturierung oder finanzielle Rettung benötigen, liegen ausserhalb unseres Modells.",
      },
      {
        title: "Gründerabhängige Unternehmen",
        description: "Wenn es keinen realistischen Weg zur Übergabe gibt und das Unternehmen ohne die Gründungsperson nicht funktionieren kann, passt es nicht.",
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
    heading: "Bewusst, nicht verzögert",
    paragraphs: [
      "Saha ist vor dem ersten Abschluss. Das Kernteam ist aufgestellt, die Kapitalstruktur wird finalisiert, und erste Akquisitionsgespräche sind im Gange. Wir haben noch keinen Deal abgeschlossen; wir bauen auf den First Close hin, nicht auf breit angelegten Einsatz. Die ersten Akquisitionen werden die Sourcing-These, das Übergabe-Modell und die operative Disziplin beweisen. Alles, was danach folgt, hängt davon ab, dass dies richtig gelingt.",
    ],
    callout: {
      type: "stat" as const,
      value: "Pre-Close",
      caption: "Gründungsteam steht, erste Akquisitionsgespräche laufen.",
    },
  },

  whyDifferent: {
    heading: "Was Saha von einem klassischen Fonds unterscheidet",
    paragraphs: [
      "Die meisten Übernahmestrukturen sind rund um ein endliches Fondsleben gebaut (kaufen, optimieren, veräussern) innerhalb eines festen Horizonts. Diese Struktur erzeugt inhärente Spannung zwischen kurzfristiger Performance und langfristiger Gesundheit eines Unternehmens.",
      "Saha ist eine permanente Holdinggesellschaft. Wir erwerben Unternehmen, um sie zu behalten. Unsere Anreize sind vollständig auf langfristigen Erfolg ausgerichtet. Kein Exit-Horizont, keine erzwungenen Veräusserungen, kein Druck, für kurzfristige Optik zu optimieren.",
    ],
    callout: {
      type: "quote" as const,
      text: "Unsere Anreize sind vollständig auf langfristigen Erfolg ausgerichtet.",
    },
  },

  closingCta: {
    heading: "Interessiert, mehr zu erfahren?",
    description:
      "Wir strukturieren Saha für eine kleine Zahl ausgerichteter, langfristiger Investoren. Wenn die These anspricht, freuen wir uns auf ein privates Gespräch.",
    cta: { label: "Investor-Anfragen", href: "/contact?pathway=investor" },
  },
};

/* ── Talent ─────────────────────────────────── */

export const talentPage = {
  hero: {
    eyebrow: "Talent",
    headline: "Führen Sie ein Schweizer Unternehmen über seinen Gründer hinaus.",
    subheadline:
      "Treten Sie in den Geschäftsführersitz eines etablierten Schweizer Unternehmens. Führen Sie sein nächstes Kapitel, getragen von einem dauerhaften Eigentümer und einer Gemeinschaft gleichgesinnter Führungskräfte.",
    cta: { label: "Jetzt bewerben", href: "/contact?pathway=talent" },
  },

  opportunity: {
    heading: "Eine Gelegenheit, die es so bisher nicht gab",
    paragraphs: [
      "In der Schweiz werden in den kommenden Jahren Tausende profitabler, inhabergeführter Unternehmen den Eigentümer wechseln. Die meisten brauchen keine Reorganisation. Sie brauchen jemanden, der das Steuer übernimmt und das Unternehmen sorgfältig weiterführt.",
      "Saha bildet die Führungskräfte aus, die diese Unternehmen übernehmen werden. Das Future CEO Program ist unser Weg, die nächste Generation von Geschäftsführerinnen und Geschäftsführern für ein unterversorgtes Segment der Schweizer Wirtschaft heranzubilden: nicht Gründerinnen oder Gründer, sondern Nachfolgerinnen und Nachfolger, die bereit sind, ein funktionierendes Unternehmen zu übernehmen und langfristig zu führen.",
      "Für die richtigen Menschen ist dies eine seltene Chance. Sie übernehmen die Verantwortung für ein etabliertes Schweizer Unternehmen, getragen von einem dauerhaften Eigentümer, der keinen Exit anstrebt. Sie können für die lange Frist aufbauen, statt auf einen Verkauf hinzuarbeiten.",
    ],
    callout: {
      type: "quote" as const,
      text: "Eine Position, die eine Karriere prägt. Mit Absicht.",
    },
  },

  whoYouAre: {
    heading: "Wer Sie sind",
    paragraphs: [
      "Sie sind eine erfahrene operative Führungskraft, eine Managerin oder ein Manager mit P&L-Verantwortung, vielleicht eine Unternehmerin oder ein Unternehmer, die oder der ein Unternehmen verkauft hat und die nächste Herausforderung sucht. Sie verstehen, wie kleinere Unternehmen funktionieren: Kundinnen und Kunden, Team, Cashflow, Kultur.",
      "Sie haben Menschen geführt, schwierige Entscheidungen getroffen und gelernt, was ein Unternehmen trägt und was es stolpern lässt. Sie wissen, dass gute Führung mehr ist als Fachwissen: Zuhören, Vertrauen aufbauen, Unsicherheit aushalten, und den Menschen um Sie herum Raum geben.",
      "Sie wollen ein Unternehmen führen, das bereits funktioniert, nicht eines von Grund auf aufbauen. Sie denken in Jahren, nicht in Quartalen. Sie schätzen die leise Disziplin eines gut geführten Schweizer KMU mehr als den Lärm eines Start-ups.",
      "Sprachkenntnisse auf Deutsch, Französisch oder Italienisch sind erforderlich, abhängig davon, wo in der Schweiz Sie führen. Unternehmerische Erfahrung oder Führung eines profitablen Geschäftsbereichs ist ein deutlicher Vorteil.",
    ],
  },

  program: {
    heading: "Das Future CEO Program",
    steps: [
      {
        number: "01",
        title: "Vorbereitung",
        description:
          "Sie arbeiten an unserer Seite, während wir Zielunternehmen identifizieren und prüfen. Sie lernen unsere Investmentthese, unser Übergabeverständnis und unsere Betriebsdisziplin kennen. Sie helfen uns, das Modell zu schärfen, und wir lernen, wie Sie denken und führen. Diese Phase ist flexibel und unbezahlt: Sie behalten Ihre Hauptrolle und wir finden gemeinsam heraus, ob es passt.",
      },
      {
        number: "02",
        title: "Übergabe",
        description:
          "Sobald wir ein Unternehmen gemeinsam identifiziert haben, steigen Sie in Vollzeit ein und werden bezahlt. Sie arbeiten Seite an Seite mit der scheidenden Gründungsperson durch einen strukturierten Übergabeprozess: Sie lernen Kundinnen, Kunden, Team und Abläufe kennen, übernehmen schrittweise die Verantwortung und bereiten sich darauf vor, die Leitung vollständig zu übernehmen.",
      },
      {
        number: "03",
        title: "Geschäftsführung",
        description:
          "Sie führen das Unternehmen als Geschäftsführerin oder Geschäftsführer, mit voller operativer Verantwortung und bedeutsamer Beteiligung am Erfolg. Saha hält das Unternehmen dauerhaft, sodass Sie für die lange Frist aufbauen können, statt auf einen Verkauf hinzuarbeiten. Sie werden zur Hüterin oder zum Hüter des Unternehmens: seiner Kundinnen und Kunden, seines Teams, seines Platzes in der Gemeinschaft.",
      },
    ],
  },

  offer: {
    heading: "Was das Programm bietet",
    paragraphs: [
      "Einen Geschäftsführersitz in einem etablierten, profitablen Schweizer Unternehmen, das Sie gemeinsam mit uns ausgewählt haben. Kein leeres Blatt. Ein reales Unternehmen mit Kundinnen und Kunden, einem Team und einem Leistungsausweis.",
      "Einen dauerhaften Eigentümer hinter Ihnen. Saha hält auf Dauer, also geht es nicht darum, das Unternehmen auf einen Exit hin zu optimieren. Sie können für die lange Frist aufbauen: Beziehungen, Kultur und operative Qualität, die sich über Jahre kumulieren.",
      "Eine Gemeinschaft von Mit-Führungskräften. Sie werden nicht alleine führen. Sie sind Teil einer wachsenden Gruppe von Saha-Geschäftsführerinnen und -Geschäftsführern, die sich gegenseitig vertrauen, voneinander lernen und dieselben Herausforderungen teilen. Peer-Austausch, gemeinsame Werkzeuge und eine Zentrale, die Sourcing, Finanzen und Infrastruktur übernimmt, damit Sie sich auf das Unternehmen konzentrieren können.",
      "Eine bedeutsame wirtschaftliche Beteiligung am Unternehmen, das Sie führen. Wenn Sie gut bauen, gewinnen Sie. Wenn das Unternehmen gewinnt, gewinnen wir alle.",
    ],
    callout: {
      type: "quote" as const,
      text: "Ein dauerhafter Eigentümer hinter Ihnen. Eine Gemeinschaft von Führungskräften an Ihrer Seite.",
    },
  },

  commitment: {
    heading: "Was wir dafür erwarten",
    paragraphs: [
      "Ernsthaftigkeit. Dies ist kein Ausflug in die Welt der KMU. Sie verpflichten sich, das Unternehmen zu führen, das Sie übernehmen, nicht für ein Jahr oder zwei, sondern so lange, wie es Sie braucht und Sie ihm dienen können.",
      "Sorgfalt. Sie übernehmen eine Gemeinschaft von Kundinnen, Kunden, Mitarbeitenden, Lieferantinnen und Lieferanten, die alle auf das Werk einer Gründungsperson gebaut haben. Diese Beziehungen verdienen dieselbe Sorgfalt, die sie sich über Jahre erarbeitet haben.",
      "Urteilsvermögen. Saha liefert Kapital, Disziplin und Unterstützung. Die tägliche Führung liegt bei Ihnen. Wir suchen Menschen, die selbstständig entscheiden können und wissen, wann sie Rat einholen.",
    ],
  },

  process: {
    heading: "Der Prozess",
    steps: [
      {
        number: "01",
        title: "Bewerben",
        description:
          "Erzählen Sie uns, wer Sie sind, was Sie geführt haben und warum der Geschäftsführersitz eines Schweizer KMU für Sie bedeutungsvoll ist. Ein kurzes Schreiben genügt, ein Lebenslauf hilft. Formell muss es nicht sein.",
      },
      {
        number: "02",
        title: "Gespräche",
        description:
          "Wir führen mehrere Gespräche, um einander kennenzulernen. Wir teilen, was wir bauen und wohin wir wollen. Sie teilen, wie Sie denken, wie Sie geführt haben und was Sie an dieser Art von Arbeit reizt.",
      },
      {
        number: "03",
        title: "These und Zusage",
        description:
          "Passt es, definieren wir gemeinsam die Art von Unternehmen, die Sie führen wollen: Branche, Region, Grösse, Profil. Wir beginnen gemeinsam mit der Suche und verpflichten uns, Sie zu begleiten, bis wir das richtige Unternehmen finden.",
      },
    ],
  },

  closingCta: {
    heading: "Werden Sie Teil der ersten Kohorte",
    description:
      "Wir formen gerade die erste Kohorte des Future CEO Programs. Wenn Sie glauben, dass dieser Sitz Ihrer sein könnte, melden Sie sich.",
    cta: { label: "Jetzt bewerben", href: "/contact?pathway=talent" },
  },
};

/* ── Advisors ───────────────────────────────── */

export const advisorsPage = {
  hero: {
    eyebrow: "Für Berater",
    headline: "Ein Käufer, für den Sie einstehen können",
    subheadline:
      "Wenn Sie einen Klienten an einen Käufer vermitteln, geht Ihr Ruf mit. Saha ist mit dieser Verantwortung im Blick aufgebaut: ein Käufer, der die Beziehungen schützt, die Sie über Jahre aufgebaut haben, und sie nicht gefährdet.",
  },

  understand: {
    heading: "Eine Empfehlung bleibt lange im Gedächtnis",
    paragraphs: [
      "Die Inhaberinnen und Inhaber vor einer Nachfolge zählen oft zu Ihren langjährigsten Mandanten. Wenn Sie ihnen einen Käufer vorstellen, erleichtern Sie nicht nur eine Transaktion; Sie stehen dafür ein, wie sich der Prozess anfühlt und was er hervorbringt.",
      "Saha ist um diese Verantwortung herum gebaut. Wie wir im Prozess auftreten, wie wir mit der Gründerin oder dem Gründer umgehen und wie wir das Unternehmen nach dem Abschluss weitertragen, entscheidet darüber, ob Ihre Empfehlung gut auf Sie zurückfällt.",
    ],
  },

  expectations: {
    heading: "Was Sie von uns erwarten können",
    steps: [
      {
        number: "01",
        title: "Ein definierter Prozess ohne Überraschungen",
        description:
          "Wir gehen jede Situation mit einer klaren Methodik an: Erstbewertung, Angebot, Due Diligence, Übergabeplanung, Abschluss. Wir kommunizieren in jeder Phase offen, mit Ihnen und mit Ihrem Klienten, damit nichts unerwartet eintritt und niemand ohne Antwort bleibt.",
      },
      {
        number: "02",
        title: "Wir verhandeln nicht nach",
        description:
          "Unser Angebot spiegelt unsere aufrichtige Einschätzung des Unternehmens. Wir nutzen die Due Diligence nicht als Instrument zur Nachverhandlung von Preis oder Bedingungen. Sollte wirklich Wesentliches auftauchen, das unsere Einschätzung verändert, teilen wir es Ihnen direkt und zeitnah mit. Wir lassen es nicht im letzten Moment erscheinen.",
      },
      {
        number: "03",
        title: "Wir bewegen uns im richtigen Tempo",
        description:
          "Weder überstürzt noch endlos hingezogen. Wir verstehen, dass Gründerinnen und Gründer oft Zeit brauchen, um Gewissheit zu erlangen, und wir respektieren das. Sobald ein Prozess beginnt, gehen wir zielstrebig vor und bringen ihn in einem angemessenen Zeitrahmen zum Abschluss.",
      },
      {
        number: "04",
        title: "Wir halten Sie informiert",
        description:
          "Sie haben die Beziehung eingeleitet. Sie bleiben Teil davon. Wir umgehen Sie nicht, schliessen Sie von wesentlichen Entwicklungen nicht aus und bringen Sie nicht in eine Lage, in der Ihre Klientin oder Ihr Klient mehr oder weniger weiss als Sie.",
      },
    ],
  },

  role: {
    heading: "Wie wir Ihre Rolle verstehen",
    paragraphs: [
      "Sie wissen Dinge über das Unternehmen Ihres Klienten, die wir nicht wissen: die Geschichte, die Dynamiken, die Empfindlichkeiten, die in keinem Jahresabschluss erscheinen. Dieses Wissen macht Sie zu einer echten Partnerin oder einem echten Partner im Prozess, nicht bloss zu einer vermittelnden Stelle.",
      "Wir stützen uns auf Berater, die das Unternehmen vor uns kennen. Die Vorstellungen, die wir am meisten schätzen, kommen von Treuhändern und Beratern, die die Situation selbst beurteilt haben und glauben, dass eine realistische Passung besteht. Wir sagen es Ihnen immer ehrlich, wenn wir es nicht sehen, denn Ihre Zeit und die Beziehung zu Ihrem Klienten zu schützen, ist uns wichtiger, als eine Transaktion zu verfolgen, die nicht stattfinden sollte.",
      "Unser Ziel ist es, der Käufer zu werden, an den Sie zuerst denken, wenn eine Nachfolgesituation entsteht. Nicht weil wir Sie darum gebeten haben, sondern weil jede Vorstellung, die Sie gemacht haben, positiv auf Sie zurückgefallen ist.",
    ],
  },

  criteria: {
    heading: "Wonach wir suchen",
    description:
      "Zur Einschätzung, ob eine Situation passen könnte, bevor Sie Kontakt aufnehmen:",
    items: [
      {
        title: "Profitabel und etabliert",
        description: "Typischerweise seit vielen Jahren inhabergeführt.",
      },
      {
        title: "Umsatz unter CHF 10 Mio.",
        description: "Jahresumsatz in der Regel unter CHF 10 Mio.",
      },
      {
        title: "Nachfolgebedingt",
        description: "Nachfolge oder Pensionierung als primärer Verkaufsgrund. Keine Notlage, keine Restrukturierung.",
      },
      {
        title: "Fähiges Team vorhanden",
        description: "Ein fähiges Team bereits über die Gründungsperson hinaus im Einsatz.",
      },
      {
        title: "Stabile Nachfrage",
        description: "Eine angemessen stabile Nachfrage, nicht abhängig von einem einzelnen Vertrag oder den persönlichen Beziehungen der Gründungsperson.",
      },
      {
        title: "Strukturierte Übergabe",
        description: "Eine Übergabe, die realistisch in einem strukturierten Zeitrahmen geplant werden kann.",
      },
    ],
    note: "Sollte eine Situation nicht zu diesen Kriterien passen, sagen wir es Ihnen klar und zeitnah, damit Sie den richtigen Weg für Ihren Klienten ohne Verzögerung verfolgen können.",
  },

  confidentiality: {
    heading: "Vertraulichkeit",
    paragraphs: [
      "Jedes Gespräch behandeln wir mit absoluter Diskretion. Wir besprechen Situationen nicht mit Dritten, wir gehen Unternehmen nicht direkt an, sobald ein Berater in ihrem Namen Kontakt aufgenommen hat, und wir verwenden Informationen aus explorativen Gesprächen ausschliesslich zur Beurteilung der Passung.",
    ],
  },

  longTerm: {
    heading: "Eine langfristige Beziehung, keine einzelne Transaktion",
    paragraphs: [
      "Der Schweizer Nachfolgemarkt unter CHF 10 Mio. ist keine einmalige Gelegenheit. Er ist eine strukturelle, fortlaufende Realität. Wir bauen Saha langfristig auf, und das bedeutet auch, langfristige Beziehungen zu den Beratern aufzubauen, die in diesem Segment tätig sind.",
      "Jede Transaktion, die wir erfolgreich abwickeln, ist das Fundament für die nächste Vorstellung. Unsere Beziehung zur Beratungsgemeinschaft messen wir nicht an der Zahl der Transaktionen, die wir verfolgen, sondern an der Qualität der Ergebnisse für die Gründerinnen und Gründer, die sie uns vermitteln.",
    ],
  },

  closingCta: {
    heading: "Ein Gespräch beginnen",
    description:
      "Wenn Sie eine Situation besprechen möchten, auch in einem frühen Stadium und ohne Verpflichtung, freuen wir uns auf das Gespräch. Alles ist vom ersten Kontakt an vertraulich.",
    cta: { label: "Eine Situation vermitteln", href: "/contact?pathway=advisor" },
    directContact: "Oder erreichen Sie uns direkt unter hello@saha.ch. Wir antworten innerhalb von 48 Stunden.",
  },
};

/* ── About ──────────────────────────────────── */

export const aboutPage = {
  hero: {
    eyebrow: "Über Saha",
    headline: "Ein dauerhaftes Zuhause für erhaltenswerte Schweizer KMU",
    subheadline:
      "Viele gute Unternehmen verschwinden bei der Nachfolge, nicht weil sie scheitern, sondern weil nur wenige Käufer darauf ausgelegt sind, sie zu behalten. Saha wurde gebaut, um dieser Käufer zu sein.",
  },

  foundingTeam: {
    heading: "Das Gründungsteam",
    intro: "Saha entsteht aus einer kleinen Gruppe mit komplementären Fähigkeiten in Akquisition, Forschung, Plattform und Aufbau.",
    members: [
      {
        name: "Temitope Ola",
        subtitle: "Gründer, Strategie & M&A",
        description: "Gründer-Operator mit über 25 Jahren Erfahrung im Unternehmensaufbau, in Finanzen und in länderübergreifender Umsetzung. 2014 führte er den vollständigen Exit eines von ihm gegründeten Schweizer Technologieunternehmens an einen börsenkotierten strategischen Käufer durch. Diese Erfahrung prägt die Art, wie Saha mit Gründerinnen und Gründern arbeitet. Er bringt die Sourcing-Vision, die Akquisitionsthese und die Aufbauambition hinter Saha mit.",
      },
      {
        name: "Liesel Goveas, PhD",
        subtitle: "Gründerin, Forschung & Akquisitionsintelligenz",
        description: "Doktorat in Neurowissenschaften, MBA an der Universität St. Gallen. Bringt rigorose Forschungsmethodik und analytische Tiefe in Sourcing, Markt-Mapping und Due Diligence ein. Ihre wissenschaftliche Karriere an Schweizer und europäischen Institutionen verleiht Saha direkte Fachkompetenz in Life Sciences, Medtech und Biotech.",
      },
      {
        name: "Stefan Vaninetti",
        subtitle: "Gründer, Plattform & Daten",
        description: "Bringt tiefe Expertise in IT-Architektur und Data Governance mit, verwurzelt in Softwareentwicklung und Führungsverantwortung bei der HOCH Health Ostschweiz. Er hat komplexe digitale und Enterprise-IT-Transformationen in einer regulierten, mehrgliedrigen Schweizer Organisation geleitet. Diese Erfahrung prägt, wie Saha seine interne Plattform für Sourcing, Due Diligence, Übergabe und Portfolio-Reporting aufbaut.",
      },
      {
        name: "Benjamin Kaleja",
        subtitle: "Gründer, Übergabe & Wachstum",
        description: "Gründer-Operator mit über einem Jahrzehnt Erfahrung in Produkt, Technologie und Enterprise-KI. Mitgründer von ZenAdmin, einem B2B-SaaS für IT-Automatisierung, den er von null bis zum Verkauf 2024 skaliert hat. Er hat Produkt- und Engineering-Teams bei Fortune-500-Unternehmen und VC-finanzierten KI-Start-ups geführt. Er bringt die Produkt-, Technologie- und KI-Fähigkeit hinter der Aufbau-These von Saha ein.",
      },
    ],
    closingLine: "Wenn Sie die Erfahrung und die Haltung mitbringen, sich uns anzuschliessen, würden wir uns freuen, von Ihnen zu hören.",
  },

  story: {
    heading: "Das Problem, das wir lösen wollten",
    paragraphs: [
      "Die Schweizer Wirtschaft ist auf kleinen und mittleren Unternehmen aufgebaut. Viele sind profitable, gut geführte Betriebe mit loyalen Teams und starkem lokalem Ansehen. Sie bilden das Rückgrat von Gemeinschaften im ganzen Land.",
      "Doch Jahr für Jahr steht eine wachsende Zahl dieser Unternehmen vor einer unsicheren Zukunft. Ihre Gründerinnen und Gründer, oft Menschen, die sie von Grund auf aufgebaut haben, erreichen das Rentenalter ohne Nachfolgeplan. Die Optionen sind meist unbefriedigend: Verkauf an einen grossen, unpersönlichen Käufer; eine überstürzte Übergabe an unvorbereitete Nachfolger; oder schlicht die Schliessung.",
      "Saha wurde geschaffen, um eine bessere Alternative zu bieten. Wir sind überzeugt, dass starke, profitable, gut geführte Unternehmen nicht verschwinden sollten, bloss weil das Zeitfenster fehlt. Sie verdienen eine Eigentümerin oder einen Eigentümer, die ihre Geschichte respektiert, ihre Menschen unterstützt und sie mit Ernsthaftigkeit und Sorgfalt weiterträgt.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168'000",
      caption: "Schweizer KMU, die bis 2030 einer Nachfolge entgegensehen.",
    },
  },

  whyDifferentBuyer: {
    heading: "Warum diese Unternehmen einen anderen Käufer brauchen",
    paragraphs: [
      "Unternehmen unter CHF 10 Mio. Umsatz sitzen in einer strukturellen Lücke. Sie sind zu klein für die meisten institutionellen Käufer, die grössere Transaktionsgrössen brauchen, um ihre Ökonomie zu rechtfertigen. Sie sind zu gründerabhängig für passive Investoren, denen der Wille oder die Fähigkeit für eine aktive Übergabe fehlt.",
      "Und sie sind zu wichtig (für Angestellte, Kundinnen und Kunden, Gemeinschaften), um einfach zu verschwinden, wenn sich kein Käufer zeigt. Dieses Segment braucht nicht mehr Kapital. Es braucht einen Käufer, der die menschliche Komplexität kleinerer Nachfolgetransaktionen versteht und bereit ist, die Arbeit zu leisten.",
    ],
    callout: {
      type: "quote" as const,
      text: "Dieses Segment braucht nicht mehr Kapital. Es braucht einen Käufer, der bereit ist, die Arbeit zu leisten.",
    },
  },

  approach: {
    heading: "Wie wir Eigentümerschaft verstehen",
    paragraphs: [
      "Wir erwerben Unternehmen mit der Absicht, sie zu behalten. Das ist keine Finanzstrategie im Gewand verantwortungsvoller Führung. Es ist eine echte Überzeugung, dass langfristiges Eigentum bessere Ergebnisse für Unternehmen, ihre Menschen und ihre Gemeinschaften hervorbringt.",
      "Wir bieten jedem Unternehmen eine sorgfältige Übergabe, selektive operative Unterstützung und die Stabilität, zu etwas Grösserem zu gehören. Im Gegenzug stärkt jedes Unternehmen das Ganze, durch geteiltes Wissen, operative Disziplin und die wachsenden Vorteile eines wachsenden, permanenten Portfolios.",
    ],
    callout: {
      type: "quote" as const,
      text: "Wir erwerben Unternehmen mit der Absicht, sie zu behalten.",
    },
  },

  principles: {
    heading: "Unsere Überzeugungen",
    items: [
      {
        title: "Kontinuität statt Disruption",
        description:
          "Gute Unternehmen sollten bewahrt und gestärkt werden, nicht zerlegt.",
      },
      {
        title: "Verantwortung statt Extraktion",
        description:
          "Eigentum trägt Verantwortung. Unser Ziel: jedes Unternehmen stärker zu hinterlassen, als wir es vorgefunden haben.",
      },
      {
        title: "Geduld statt Eile",
        description:
          "Dauerhafter Wert entsteht langsam. Wir widerstehen dem Druck, auf kurzfristige Ergebnisse zu optimieren.",
      },
      {
        title: "Klarheit statt Komplexität",
        description:
          "Unser Modell ist bewusst einfach. Komplexität muss dem Unternehmen dienen, nicht dem Geschäftsmodell.",
      },
    ],
  },

  whereWeAreToday: {
    heading: "Wo wir heute stehen",
    paragraphs: [
      "Wir bauen unermüdlich: Das Gründungsteam steht, die Kapitalstruktur wird finalisiert, und erste Akquisitionsgespräche laufen. Das ist beabsichtigt. Wir glauben, dass die ersten Übernahmen das Unternehmen definieren, und wir nehmen uns vor, sie richtig zu machen.",
      "Jede Entscheidung, die wir treffen, wird von einer einfachen Frage geleitet: wird das in zwanzig Jahren noch Sinn ergeben?",
    ],
  },

  ambition: "Saha wird nicht nur als Holding aufgebaut, sondern als langfristiges Modell für die Nachfolge kleiner Unternehmen in der Schweiz. Wir sind überzeugt, dass dieses Segment nicht aus Mangel an guten Unternehmen unterversorgt ist; es fehlt ein Käufer mit der Infrastruktur, diese Deals zum Funktionieren zu bringen. Genau diese Infrastruktur schrittweise und mit Disziplin aufzubauen, ist der Zweck von Saha. Sie besteht aus vier Bausteinen: systematisches Sourcing, Führungskontinuität, Übergabedisziplin und gemeinsame operative Stärke. Sie ist darauf angelegt, sich mit jeder abgeschlossenen Akquisition zu schärfen.",

  closingCta: {
    heading: "Wir würden gerne von Ihnen hören",
    description:
      "Ob Sie eine Gründerin oder ein Gründer sind, der über die Zukunft nachdenkt, eine Investorin, die das Modell prüft, oder jemand, der unsere Vision teilt: Sie sind eingeladen, sich zu melden.",
    cta: { label: "Kontaktieren Sie uns", href: "/contact" },
  },
};

/* ── Contact ────────────────────────────────── */

export const contactPage = {
  hero: {
    eyebrow: "Kontakt",
    headline: "Ein Gespräch beginnen",
    subheadline:
      "Jede bedeutsame Beziehung beginnt mit einem Gespräch. Erzählen Sie uns ein wenig über sich und was Sie hierher gebracht hat.",
  },

  submitLabel: "Nachricht senden",
  selectPrompt: "Wählen Sie oben, wie Sie mit uns in Kontakt treten möchten.",
  thankYouHeading: "Danke für Ihre Nachricht",
  thankYouDescription: "Wir haben Ihre Nachricht erhalten und melden uns in Kürze.",
  sendAnother: "Weitere Nachricht senden",

  pathways: [
    {
      id: "founder",
      title: "Ich bin Gründerin oder Gründer und denke über die Nachfolge nach",
      description:
        "Wenn Sie das nächste Kapitel für Ihr Unternehmen erwägen, freuen wir uns über ein vertrauliches, unverbindliches Gespräch darüber, ob Saha eine gute Passung sein könnte.",
      fields: [
        { name: "name", label: "Ihr Name", type: "text" as const, required: true },
        { name: "email", label: "E-Mail-Adresse", type: "email" as const, required: true },
        { name: "phone", label: "Telefonnummer (optional)", type: "tel" as const, required: false },
        { name: "company", label: "Unternehmensname", type: "text" as const, required: false },
        { name: "message", label: "Erzählen Sie uns ein wenig über Ihr Unternehmen und Ihre Überlegungen", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "investor",
      title: "Ich bin Investorin oder Investor",
      description:
        "Wir strukturieren Saha für eine kleine Zahl ausgerichteter, langfristiger Investoren. Gespräche zur Prüfung der Passung sind willkommen.",
      fields: [
        { name: "name", label: "Ihr Name", type: "text" as const, required: true },
        { name: "email", label: "E-Mail-Adresse", type: "email" as const, required: true },
        { name: "firm", label: "Unternehmen oder Zugehörigkeit (optional)", type: "text" as const, required: false },
        { name: "message", label: "Was interessiert Sie an Saha?", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "builder",
      title: "Ich möchte mit Saha mit aufbauen",
      description:
        "Wenn Sie Operatorin, Investor oder Unternehmer sind und Saha von Grund auf mit aufbauen möchten, würden wir gerne von Ihnen hören.",
      fields: [
        { name: "name", label: "Ihr Name", type: "text" as const, required: true },
        { name: "email", label: "E-Mail-Adresse", type: "email" as const, required: true },
        { name: "linkedin", label: "LinkedIn-Profil (optional)", type: "url" as const, required: false },
        { name: "message", label: "Wer sind Sie und was zieht Sie zu Saha?", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "advisor",
      title: "Ich bin Beraterin oder Berater und möchte eine Klientin oder einen Klienten vermitteln",
      description:
        "Wenn Sie Treuhänderin, Notar oder Beraterin sind und einen Klienten betreuen, der eine Nachfolge erwägt, freuen wir uns auf ein vertrauliches Gespräch zur Prüfung der Passung.",
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
      "Antworten auf die Fragen, die wir am häufigsten von Gründerinnen, Gründern, Investoren und künftigen Team-Mitgliedern hören.",
  },

  groups: [
    {
      label: "Für Gründer",
      items: [
        {
          question: "Wie unterscheidet sich Saha von einer Private-Equity-Käuferin?",
          answer:
            "Private-Equity-Gesellschaften erwerben Unternehmen in der Regel mit der Absicht, sie innerhalb von drei bis sieben Jahren zu verkaufen. Saha erwirbt Unternehmen, um sie dauerhaft zu halten. Es gibt keinen Exit-Zeitplan, keinen Druck zur Restrukturierung für den Weiterverkauf und keinen Anreiz, kurzfristigen Wert zu extrahieren. Unser Modell ist um Kontinuität herum gebaut, nicht um Transaktionen.",
        },
        {
          question: "Was passiert nach einem Verkauf mit meinen Mitarbeitenden?",
          answer:
            "Das Team, das Sie aufgebaut haben, zu bewahren, steht im Zentrum unseres Ansatzes. Wir erwerben keine Unternehmen mit der Absicht, sie zu restrukturieren. Alle Entscheidungen, die Menschen betreffen, werden im Interesse der langfristigen Gesundheit des Unternehmens getroffen, mit Transparenz.",
        },
        {
          question: "Wie lange dauert der Prozess vom ersten Gespräch bis zum Abschluss?",
          answer:
            "Das hängt davon ab, wo Sie in Ihren Überlegungen stehen. Nachfolge ist oft eine jahrelange Reflexion, bevor eine Gründerin oder ein Gründer bereit ist zu handeln, und das ist völlig normal. Sobald Sie sich entschieden haben, weiterzugehen, dauert ein typischer Transaktionsprozess vom ersten ernsthaften Gespräch bis zum Abschluss drei bis sechs Monate. Auf beiden Phasen besteht kein Zeitdruck. Viele Gründerinnen und Gründer finden es hilfreich, frühzeitig mit uns ins Gespräch zu kommen, schlicht um die Optionen zu verstehen. Alles ist vertraulich und unverbindlich.",
        },
        {
          question: "Behält mein Unternehmen seinen Namen und seine Marke?",
          answer:
            "Ja. Wir bewahren Identität, Marke und lokale Präsenz jedes Unternehmens, das wir erwerben. Ihr Unternehmen arbeitet weiter unter eigenem Namen, in seinem Markt, mit seinem Team. Saha bietet Unterstützung aus dem Hintergrund.",
        },
        {
          question: "Muss ich nach dem Verkauf beteiligt bleiben?",
          answer:
            "Das liegt ganz bei Ihnen. Einige Gründerinnen und Gründer bevorzugen einen sauberen Übergang, andere bleiben eine Zeit lang in beratender oder Teilzeit-Rolle beteiligt. Wir gestalten die Übergabe entlang Ihrer Wünsche und Ihres Zeitrahmens.",
        },
        {
          question: "Welche Unternehmensgrösse erwirbt Saha typischerweise?",
          answer:
            "Wir konzentrieren uns auf profitable, gründergeführte Schweizer Unternehmen, in der Regel unter CHF 10 Mio. Jahresumsatz. Die wichtigsten Faktoren sind Qualität des Unternehmens, Stärke des Teams und ob das Unternehmen realistisch aufblühen kann, nachdem die Gründungsperson gegangen ist.",
        },
        {
          question: "Was macht Saha tatsächlich, um ein Unternehmen nach der Übernahme zu verbessern?",
          answer:
            "Unsere erste Aufgabe, etwa in den ersten zwölf Monaten, ist Kontinuität: Kundschaft, Team und Betrieb stabil durch die Gründerübergabe führen. In den folgenden zwölf bis vierundzwanzig Monaten arbeiten wir mit dem lokalen Team an einer fokussierten Stärkungsagenda: schärferes Finanz-Reporting und konsequentere Preisdisziplin, Digitalisierung wiederkehrender Arbeitsabläufe, die noch auf Papier oder Excel laufen, Unterstützung bei ein oder zwei wichtigen Neueinstellungen (oft die Person, die von der Gründungsperson übernimmt) und das Sichern des institutionellen Wissens, das bislang im Kopf der Gründerin oder des Gründers lag. Das lokale Team bleibt für die Führung und die Weiterentwicklung des Unternehmens verantwortlich. Was wir hinzufügen, ist gezielt, wird daran gemessen, ob es tatsächlich hilft, und mit jeder Akquisition verfeinert.",
        },
      ],
    },
    {
      label: "Für Investoren",
      items: [
        {
          question: "Was unterscheidet Saha von einer geduldigen Holding mit Kapital?",
          answer:
            "Eine Holding mit geduldigem Kapital ist ein Positionierungsanspruch. Saha baut die Sourcing-, Übergabe- und Betriebsinfrastruktur auf, die kleinere Nachfolgetransaktionen tatsächlich tragfähig macht, nicht nur finanzierbar. Das Modell ist auf Kumulation ausgelegt: Jede Akquisition verbessert unseren Prozess, stärkt unser Operator-Netzwerk und reduziert Reibung im nächsten Deal. Das ist der Unterschied zwischen dem Besitz einer Sammlung von Unternehmen und dem Aufbau einer Akquisitions- und Betriebsmaschine.",
        },
        {
          question: "Wie ist Saha als Investitionsvehikel strukturiert?",
          answer:
            "Saha ist eine permanente Holdinggesellschaft, kein traditioneller Fonds mit fester Laufzeit. Kapital fliesst in Akquisitionen, die unbestimmt gehalten werden. Renditen entstehen aus den langfristigen Cashflows, organischem Wachstum und der sich kumulierenden operativen Stärke des Portfolios.",
        },
        {
          question: "Wie erzeugt Saha Renditen ohne Exits?",
          answer:
            "Die Renditen entstehen aus den operativen Cashflows der von uns erworbenen Unternehmen, reinvestiert oder ausgeschüttet, während das Portfolio reift. Wir zielen auf Einstiege zu 3 bis 5× EBITDA in cashflow-starken Unternehmen. Investorenliquidität wird über eine Kombination aus Barausschüttungen, Portfolio-Refinanzierungen im Zeitverlauf und selektiven Sekundärmechanismen bereitgestellt, nicht über ein einzelnes Exit-Ereignis. Wir optimieren nicht auf eine einzige IRR-Kennzahl. Wir optimieren auf dauerhaften, sich kumulierenden Wert. Die vollständige Renditedokumentation wird in direkten Gesprächen geteilt.",
        },
        {
          question: "Wie sieht das Zielrenditenprofil aus?",
          answer:
            "Wir streben an, den Portfoliowert langfristig durch Akquisitionsdisziplin, operative Verbesserung und organisches Wachstum stetig zu steigern. Wir strukturieren Saha für eine kleine Zahl ausgerichteter langfristiger Investoren und teilen vollständige Dokumentation in privaten Gesprächen.",
        },
        {
          question: "Wie steuert Saha Risiken über das Portfolio hinweg?",
          answer:
            "Risiken werden durch Diversifikation über Branchen und Regionen innerhalb der Schweiz, disziplinierte Einstiegsbewertungen, strukturierte Übergabeprozesse und gemeinsame Finanzkontrolle mit Frühwarnsystemen gesteuert. Jedes Unternehmen arbeitet eigenständig, was das Ansteckungsrisiko begrenzt.",
        },
        {
          question: "Wie hoch ist die minimale Investitionsverpflichtung?",
          answer:
            "Wir strukturieren Saha für eine kleine Zahl ausgerichteter, langfristiger Investoren. In dieser Phase zählt Selektivität und strukturelle Passung mehr als Grösse. Mindestverpflichtungen und Bedingungen besprechen wir direkt.",
        },
        {
          question: "Warum der Fokus auf Unternehmen unter CHF 10 Mio. Umsatz?",
          answer:
            "Dieses Segment ist strukturell unterversorgt. Die meisten institutionellen Käufer, Berater und M&A-Datensätze konzentrieren sich oberhalb von CHF 10 Mio. Darunter existieren profitable, nachfolgegetriebene Unternehmen in grosser Zahl, aber ein passendes Erwerbermodell fehlt. Genau diese Lücke will Saha schliessen.",
        },
        {
          question: "Wie erzeugt Saha zusätzliches Wertpotenzial über das blosse Halten guter Unternehmen hinaus?",
          answer:
            "Drei kumulierende Quellen. Erstens disziplinierter Einstieg: Wir kaufen in einem Segment, das institutionellem Kapital strukturell unterversorgt ist und in dem die Multiples eher die Abwesenheit von Käufern als die Qualität der Unternehmen widerspiegeln. Zweitens gezielte Stärkung nach Abschluss: schärferes Reporting und Pricing, digitalisierte Arbeitsabläufe, Führungskontinuität und Wissenssicherung, selektiv dort eingesetzt, wo sie die Ertragskraft jedes Unternehmens tatsächlich erhöhen. Drittens eine Plattform, die mit jeder Akquisition schärfer wird: Sourcing-Beziehungen, Übergabe-Playbooks, Führungsnetzwerke und interne Systeme, die Reibung und Kosten jedes weiteren Deals senken. Das zusätzliche Wertpotenzial liegt nicht in einem einzelnen Exit. Es liegt in der wachsenden Differenz zwischen dem, was diese Unternehmen innerhalb von Saha wert sind, und dem, was sie für jeden anderen Käufer wert gewesen wären.",
        },
        {
          question: "Welche Rolle spielt Technologie in Sahas Modell?",
          answer:
            "Technologie bei Saha betrifft die eigene Betriebsinfrastruktur der Holding, nicht die Einführung von Software in den erworbenen Unternehmen. Wir bauen eine interne Plattform auf (Sourcing-Intelligenz, Due-Diligence-Workflow, Übergabe-Werkzeuge und Portfolio-Reporting), die permanentes Eigentum vieler kleiner Unternehmen im Massstab tragfähig macht. Diese Arbeit leitet Stefan Vaninetti, dessen Hintergrund in Enterprise-IT-Architektur und Data Governance in einer regulierten, mehrgliedrigen Schweizer Organisation (HOCH Health Ostschweiz) liegt. Die Plattform ist das Mittel, mit dem ein schlankes zentrales Team einem wachsenden Portfolio nahe bleibt, ohne einen Overhead zu erzeugen, den die Unternehmen selbst nicht tragen könnten.",
        },
      ],
    },
    {
      label: "Für Aufbauer & Team",
      items: [
        {
          question: "Nach welchen Menschen sucht Saha?",
          answer:
            "Wir suchen Menschen, die in Jahrzehnten denken, sich um Handwerk kümmern und etwas aufbauen möchten, das bleibt. Relevante Hintergründe sind Betrieb, Finanzen, M&A, General Management und Technologie. Haltung und Ausrichtung zählen mehr als ein bestimmter Titel oder Werdegang.",
        },
        {
          question: "Rekrutiert Saha gerade für spezifische Rollen?",
          answer:
            "Wir sind in der Gründungsphase, vor unserer ersten Akquisition. Wir sind jederzeit offen, von aussergewöhnlichen Menschen zu hören. Auch ohne formale Stelle heissen wir Vorstellungen von Menschen willkommen, die eine starke Ausrichtung mit dem spüren, was wir aufbauen.",
        },
        {
          question: "Wo hat Saha seinen Sitz?",
          answer:
            "Saha hat seinen Sitz in der Schweiz. Unser Team arbeitet im ganzen Land, nah bei den Unternehmen, die wir erwerben und begleiten. Wir legen Wert auf Präsenz und Nähe: nah bei den Teams und Gemeinschaften, denen wir dienen.",
        },
      ],
    },
    {
      label: "Allgemein",
      items: [
        {
          question: "Warum der Name Saha?",
          answer:
            "Saha ist ein Wort, das in Geduld, Ausdauer und der Fähigkeit wurzelt, mit Sorgfalt zu tragen. Es spiegelt die langfristige Haltung im Kern unseres Handelns: Unternehmen nicht für einen Zyklus zu erwerben und zu begleiten, sondern für eine Generation.",
        },
        {
          question: "Ist Saha ein Fonds oder ein Unternehmen?",
          answer:
            "Saha ist eine permanente Holdinggesellschaft. Anders als ein Fonds gibt es keinen vorab festgelegten Exit-Horizont. Unternehmen, die wir erwerben, werden dauerhaft Teil der Saha-Familie. Diese Struktur richtet unsere Anreize an der langfristigen Gesundheit jedes Unternehmens aus, das wir besitzen.",
        },
        {
          question: "Wie viele Unternehmen besitzt Saha heute?",
          answer:
            "Wir bauen gezielt die Grundlage (Team, Prozesse und Kapital) auf, bevor wir unsere ersten Akquisitionen tätigen. Wir glauben, dass es wichtiger ist, das Modell richtig zu machen, als schnell zu sein.",
        },
        {
          question: "Wie kann ich Kontakt aufnehmen?",
          answer:
            "Wir heissen Gespräche mit Gründerinnen, Gründern, Investoren und künftigen Team-Mitgliedern willkommen. Sie erreichen uns über unsere Kontaktseite oder per E-Mail an hello@saha.ch. Jede Anfrage behandeln wir mit Vertraulichkeit und Respekt.",
        },
      ],
    },
  ],

  closingCta: {
    heading: "Noch Fragen?",
    description:
      "Wir beantworten gerne alles, was hier nicht abgedeckt ist. Melden Sie sich, wir antworten zeitnah.",
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
      body: "Saha respektiert Ihre Privatsphäre und verpflichtet sich, persönliche Informationen, die Sie mit uns teilen, zu schützen. Diese Seite skizziert unseren Ansatz zur Datenbehandlung. Eine vollständige Datenschutzrichtlinie wird hier veröffentlicht, sobald wir unsere rechtliche Dokumentation formalisieren.",
    },
    {
      heading: "Welche Informationen wir erheben",
      body: "Wenn Sie uns über diese Website kontaktieren, erheben wir ausschliesslich die Informationen, die Sie freiwillig bereitstellen: Name, E-Mail-Adresse und den Inhalt Ihrer Nachricht. Wir setzen weder Tracking-Cookies noch Third-Party-Analytics auf dieser Seite ein.",
    },
    {
      heading: "Wie wir Ihre Informationen nutzen",
      body: "Die Informationen, die Sie uns geben, nutzen wir ausschliesslich, um auf Ihre Anfrage zu antworten und allfällige Folgegespräche zu ermöglichen. Wir verkaufen, teilen oder verbreiten Ihre persönlichen Daten nicht an Dritte.",
    },
    {
      heading: "Kontakt",
      body: "Bei Fragen zum Umgang mit Ihren Daten kontaktieren Sie uns unter",
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
      body: "Diese Website wird von Saha betrieben. Mit dem Zugriff auf und der Nutzung dieser Website erklären Sie sich mit diesen Bedingungen einverstanden. Vollständige Nutzungsbedingungen werden hier veröffentlicht, sobald wir unsere rechtliche Dokumentation formalisieren.",
    },
    {
      heading: "Inhalte",
      body: "Die Informationen auf dieser Website werden ausschliesslich zu allgemeinen Informationszwecken bereitgestellt. Obwohl wir nach Genauigkeit streben, geben wir keine Gewährleistung für Vollständigkeit, Zuverlässigkeit oder Eignung der dargestellten Informationen.",
    },
    {
      heading: "Geistiges Eigentum",
      body: "Alle Inhalte, das Design und die Materialien auf dieser Website sind Eigentum von Saha, sofern nicht anders gekennzeichnet. Sie dürfen diese Inhalte ohne unsere vorherige schriftliche Zustimmung nicht reproduzieren, verbreiten oder nutzen.",
    },
    {
      heading: "Kontakt",
      body: "Bei Fragen zu diesen Bedingungen kontaktieren Sie uns unter",
    },
  ],
};

/* ── Footer ─────────────────────────────────── */

export const footer = {
  tagline: "Eine langfristige Heimat für Schweizer Unternehmen in der Nachfolge.",
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
        { label: "Talent", href: "/talent" },
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
    title: "Saha | Systematische Nachfolge für Schweizer KMU",
    description:
      "Zeit. Talent. Technologie. Ein systematisches Nachfolgesystem für Schweizer Kleinunternehmen. Saha erwirbt profitable Unternehmen unter CHF 10 Mio., führt sie sorgfältig durch die Übergabe und stärkt sie langfristig.",
  },
  founders: {
    title: "Für Gründer | Saha",
    description:
      "Sie haben etwas Bewahrenswertes aufgebaut. Saha erwirbt und hält gründergeführte Schweizer Unternehmen unter CHF 10 Mio. mit Sorgfalt, Struktur und langfristigem Engagement.",
  },
  advisors: {
    title: "Für Berater | Saha",
    description:
      "Wenn Sie einen Klienten an Saha vermitteln, ist Ihr Ruf geschützt. Wir bieten einen klaren Prozess, volle Transparenz und dauerhaftes Eigentum für Schweizer KMU-Nachfolgen.",
  },
  investors: {
    title: "Für Investoren | Saha",
    description:
      "Ein Modell permanenten Eigentums für das unterversorgte Segment der Schweizer Nachfolgetransaktionen unter CHF 10 Mio. Strukturierte Übergaben, disziplinierte Sourcing, sich kumulierender Wert.",
  },
  talent: {
    title: "Talent | Future CEO Program bei Saha",
    description:
      "Führen Sie ein etabliertes Schweizer Unternehmen in sein nächstes Kapitel. Das Future CEO Program von Saha entwickelt Geschäftsführerinnen und Geschäftsführer für die Unternehmen, die wir erwerben: ein dauerhafter Eigentümer, eine Gemeinschaft von Führungskräften und der Auftrag, langfristig zu führen.",
  },
  about: {
    title: "Über Saha | Warum wir existieren",
    description:
      "Zu viele gute Schweizer Unternehmen verschwinden, wenn ihre Gründerinnen und Gründer in den Ruhestand gehen. Saha wurde geschaffen, um einen überlegten, langfristigen Käufer für das unterversorgte Nachfolgesegment zu bieten.",
  },
  contact: {
    title: "Kontakt | Saha",
    description:
      "Beginnen Sie ein Gespräch mit Saha. Ob als Gründerin, Gründer, Investor oder künftiges Team-Mitglied: Wir freuen uns, von Ihnen zu hören.",
  },
  faq: {
    title: "FAQ | Saha",
    description:
      "Antworten auf häufig gestellte Fragen zu Saha von Gründerinnen, Gründern, Investoren und künftigen Team-Mitgliedern.",
  },
  privacy: {
    title: "Datenschutzrichtlinie | Saha",
    description: "Sahas Datenschutzrichtlinie und Praxis der Datenbehandlung.",
  },
  terms: {
    title: "Nutzungsbedingungen | Saha",
    description: "Nutzungsbedingungen für die Saha-Website.",
  },
};
