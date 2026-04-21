/* ─────────────────────────────────────────────
 *  Saha - centralised copy
 *  Edit text here; the components pull from these objects.
 * ───────────────────────────────────────────── */

export const siteConfig = {
  name: "Saha",
  tagline: "Time. Talent. Technology. A systematic succession system for Swiss small businesses.",
  url: "https://saha.ch",
  email: "hello@saha.ch",
  location: "Switzerland",
};

/* ── Navigation ─────────────────────────────── */

export const nav = {
  links: [
    { label: "Founders", href: "/founders" },
    { label: "Advisors", href: "/advisors" },
    { label: "Investors", href: "/investors" },
    { label: "Talent", href: "/talent" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

/* ── Homepage ───────────────────────────────── */

export const homepage = {
  hero: {
    eyebrow: "Swiss permanent capital",
    headline: "Systematic succession for\nSwiss SMEs",
    subheadline:
      "Saha acquires profitable, founder-led Swiss businesses below CHF 10M in revenue, transitions them with care, and grows them steadily for the long term, while building the sourcing, transition, and technology platform that make this segment work.",
    cta: { label: "Start a conversation", href: "/contact" },
    secondaryCta: { label: "What we look for", href: "/founders" },
  },

  whatWeAreBuildingSectionLabel: "Why we exist",
  whatWeAreBuilding: {
    heading: "Many good businesses disappear for the wrong reasons",
    paragraphs: [
      "Across Switzerland, thousands of profitable businesses face an uncertain future. Not because they are failing, but because their founders are retiring without a successor.",
      "Most institutional acquirers focus higher up the market. Businesses below CHF 10M in revenue are too small for traditional private equity, and often too complex for individual buyers. They fall through the cracks, not because they lack value, but because no one has built a model for them.",
      "Saha is building that model: a disciplined Swiss succession buyer for profitable, founder-led SMEs. We buy selectively, see the founder through a successful transition, and grow the business for the long term.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168,000",
      caption: "Swiss SMEs expected to face succession by 2030.",
      source: "2026 CFB\u2011HSG / UBS study",
    },
  },

  whyNowSectionLabel: "What's at stake",
  whyNow: {
    heading: "When no buyer appears, good businesses quietly close",
    paragraphs: [
      "When a profitable business shuts down because no successor was found, the things lost are hard to measure. Employees who built their careers there move on. Long-standing customer and supplier relationships dissolve. Skills, institutional memory, and local reputation, assembled over decades, disperse without anyone noticing.",
      "For the founder, the cost is personal. The work was good, the customers were loyal, the team wanted to stay. The business was sound. Only the timing of a buyer was not.",
      "This is not a rare outcome. Tens of thousands of Swiss SMEs are reaching succession this decade, and a meaningful share are expected to close for exactly this reason. That is the loss Saha is built to prevent, one disciplined acquisition at a time.",
    ],
    callout: {
      type: "stat" as const,
      value: "1 in 3",
      caption: "Swiss SME successions expected to fail, not for lack of good businesses, but because no buyer appears.",
      source: "2026 CFB\u2011HSG / UBS study",
    },
  },

  audiences: [
    {
      label: "For founders",
      heading: "Your business deserves a thoughtful next chapter",
      description:
        "You built something that matters: to your team, your customers, and your community. Saha exists to carry that forward with the seriousness and care it deserves.",
      cta: { label: "Learn more", href: "/founders" },
    },
    {
      label: "For investors",
      heading: "A disciplined model in an overlooked segment",
      description:
        "Repeatable sourcing in a structural deal pipeline, disciplined entry valuations, hands-on transitions, and permanent hold. Built for compounding, not for exits.",
      cta: { label: "Learn more", href: "/investors" },
    },
  ],

  buildersStrip: {
    heading: "Help build Saha from the ground up",
    description:
      "We are assembling a small, focused team to shape our first acquisitions, diligence process, and operating model. If you want to build something from the ground up, this is early, real work.",
    cta: { label: "Learn more", href: "/talent" },
  },

  modelSectionLabel: "How we work",
  model: {
    heading: "Find the right businesses. Transition them well. Grow them for the long term.",
    steps: [
      {
        number: "01",
        title: "Businesses that can thrive beyond the founder",
        description:
          "We focus on profitable, founder-led Swiss businesses below CHF 10M in revenue where succession is the reason for sale. What matters most: steady demand, a capable team, and a business that can continue confidently once the founder steps away.",
      },
      {
        number: "02",
        title: "Manage the transition with care",
        description:
          "Every acquisition follows a structured transition: founder handover, customer continuity, and team stability, with close attention through the first twelve months. This is where deals succeed or fail.",
      },
      {
        number: "03",
        title: "Grow the business steadily",
        description:
          "Once the business is stable, we help it grow steadily over the following twelve to twenty-four months. That usually means sharper reporting, digitised workflows, support on key hires, and capturing knowledge that used to sit with the founder.",
      },
      {
        number: "04",
        title: "Hold for the long term",
        description:
          "We do not buy to resell. Long-term ownership lets us make decisions that serve teams, customers, and business quality, without the pressure of an exit timeline. Each company stays in the Saha family.",
      },
    ],
  },

  moreThanBuyerSectionLabel: "The Saha operating model",
  moreThanBuyer: {
    heading: "Four capabilities that compound with every acquisition",
    intro: "A willing buyer is not enough for small-business succession. These companies need structured handover, leadership that survives the founder, and operating support that is genuinely useful. Saha is being built around four capabilities designed to do exactly that, and to become sharper with every deal.",
    items: [
      {
        title: "Systematic sourcing",
        description:
          "Deal flow in Swiss SME succession is controlled by fiduciaries, Treuhänder, notaries, and local advisors. Saha is building the reputation and relationships that make us the buyer these intermediaries call first, because we treat their clients well, close with integrity, and never waste anyone's time.",
      },
      {
        title: "Leadership continuity",
        description:
          "When a founder steps back, the next leader determines whether the deal succeeds. Saha treats leadership continuity as a named capability: identify, evaluate, install, and support the right person, whether from within the existing team or brought in, so succession of ownership and succession of leadership are designed together, not sequenced.",
      },
      {
        title: "Transition discipline",
        description:
          "The handover is where most small-business deals succeed or fail. We treat it as a core discipline: a structured twelve-month plan covering customer and supplier introductions, team continuity, operational handover, and the transfer of founder-specific knowledge that would otherwise walk out the door.",
      },
      {
        title: "Shared operating strength",
        description:
          "After the transition, businesses in the Saha family can draw on shared strength in finance, reporting, pricing, hiring, and technology for internal efficiency. Help that is selective, and measured against whether it actually makes the business stronger.",
      },
    ],
    closingLine: "Each acquisition sharpens the playbook. Better advisor relationships. Better transition playbooks. Better leadership matches. Better operating templates for Swiss SMEs. That is how this segment becomes viable at scale.",
  },

  differentiatorsSectionLabel: "What makes this different",
  differentiators: {
    heading: "A model designed for smaller succession deals",
    steps: [
      {
        number: "01",
        title: "Built for businesses below CHF 10M",
        description:
          "We work in a segment most institutional buyers overlook. Our model, our costs, and our expectations are designed for this deal size from day one.",
      },
      {
        number: "02",
        title: "Built to run without the founder",
        description:
          "Before we acquire a business, we assess whether it can realistically continue without its founder. Not every good business is a good acquisition.",
      },
      {
        number: "03",
        title: "Transition as a core skill",
        description:
          "The handover period is where the most can go wrong. It requires human judgment, empathy, and close attention. We treat transition as a discipline, not a formality.",
      },
      {
        number: "04",
        title: "No exit timeline, no forced sales",
        description:
          "We hold permanently. Decisions are made for the health of each business, not to meet a fund deadline or impress a quarterly review.",
      },
    ],
  },

  finalCtaFounders: {
    heading: "Thinking about what comes next?",
    description:
      "If you are a founder beginning to consider the future of your business, we would welcome a quiet, confidential conversation. No obligation, no pressure.",
    cta: { label: "Start a conversation", href: "/contact?pathway=founder" },
  },

  finalCtaOther: {
    heading: "Investors and future team members",
    description:
      "If you are an investor interested in the model, or someone who wants to help build Saha, we would be glad to hear from you.",
    cta: { label: "Get in touch", href: "/contact?pathway=investor" },
  },
};

/* ── For Founders ───────────────────────────── */

export const foundersPage = {
  hero: {
    eyebrow: "For Founders",
    headline: "You built a business worth\nhanding over well",
    subheadline:
      "When the time comes to step back, your business deserves a buyer who takes continuity seriously and will actually make the company stronger over time. Not flip it, not rebrand it, not dismantle it.",
    cta: { label: "Start a confidential conversation", href: "/contact?pathway=founder" },
  },

  intro: {
    heading: "We understand what is at stake",
    paragraphs: [
      "Selling a business you built from nothing is not just a financial decision. It is personal. Your name is on it. Your team trusts you. Your customers rely on the standards you set. Finding the right next owner is one of the most important decisions you will ever make.",
      "Saha was built by people who understand this. Our model is designed to honour what you created: by preserving it, supporting it, and carrying it forward with the same seriousness you brought to building it. We are not here to rebrand, restructure, or flip. We are here to continue what you started.",
    ],
    callout: {
      type: "quote" as const,
      text: "Your name is on it. Your team trusts you. We take that seriously.",
    },
  },

  whatWeLookFor: {
    heading: "What makes a good fit",
    transitionLine: "We assess every business against two simple filters: whether it can genuinely continue beyond the founder (transferability), and whether there are specific ways we can help it become stronger in the first twelve to twenty-four months (upgrade potential). Both matter. A business that is transferable but has no room to improve is not enough; neither is a business with upside that cannot survive the founder's exit.",
    items: [
      {
        title: "Profitable and established",
        description:
          "Founder-led for many years, generally below CHF 10M in revenue. Businesses with a proven track record and steady financial health.",
      },
      {
        title: "Stable, recurring demand",
        description:
          "Revenue that is steady or recurring, not project-based or dependent on a small number of large contracts.",
      },
      {
        title: "A capable team beyond the founder",
        description:
          "Operational strength that extends beyond the founder, with people already in place who can carry the business forward.",
      },
      {
        title: "A realistic path to handover",
        description:
          "A transition that can be thoughtfully planned and executed over a reasonable timeframe, with the founder's involvement.",
      },
    ],
  },

  founderExpectations: {
    heading: "What you can expect from us",
    steps: [
      {
        number: "01",
        title: "Your company keeps its identity",
        description:
          "Our strong preference is to preserve the name, brand, and local presence of every business we acquire. Each company continues to operate in its own market, with its own identity.",
      },
      {
        number: "02",
        title: "Your involvement is on your terms",
        description:
          "Some founders prefer a clean handover. Others stay involved in an advisory role for a time. We design the transition around what feels right for you.",
      },
      {
        number: "03",
        title: "A fair price, and more than just a number",
        description:
          "We offer transparent, fair valuations. We also understand that for many founders, knowing the team and customers will be looked after matters as much as the price.",
      },
      {
        number: "04",
        title: "We don't acquire to restructure",
        description:
          "The team you built is central to what makes the business worth acquiring. Decisions about people are made for its long-term health, never for short-term economics.",
      },
    ],
  },

  process: {
    heading: "What it looks like to work with us",
    description:
      "There is no pressure and no obligation at any stage. We move at a pace that feels right for you.",
    steps: [
      {
        title: "A confidential first conversation",
        description:
          "We start with a private, no-obligation conversation to understand your business, your thinking, and your timeline. Nothing moves forward unless you want it to.",
      },
      {
        title: "Understanding whether there is a fit",
        description:
          "If there is mutual interest, we take time to understand whether your business fits our model: profitability, team strength, customer stability, and whether the handover can be realistically structured.",
      },
      {
        title: "Getting to know the business more deeply",
        description:
          "We spend time understanding your operations, customers, team dynamics, and the role you play day to day. This is as much about people as it is about numbers.",
      },
      {
        title: "A clear, fair proposal",
        description:
          "We present a straightforward proposal with no aggressive tactics and no last-minute surprises. Fair terms that reflect the value of what you have built.",
      },
      {
        title: "Due diligence and transition planning",
        description:
          "Formal diligence alongside detailed planning for the handover: who takes over what, how customers are communicated with, and what the first year looks like.",
      },
      {
        title: "A careful, structured handover",
        description:
          "We execute the transition with care: founder handover, team continuity, customer communication, and close attention to operational stability from day one.",
      },
    ],
  },

  closingCta: {
    heading: "Your business is worth a serious conversation",
    description:
      "If you are beginning to think about what comes next, we would be glad to listen. Everything is confidential, there is no obligation, and the pace is entirely yours.",
    cta: { label: "Speak with us", href: "/contact?pathway=founder" },
  },
};

/* ── For Investors ──────────────────────────── */

export const investorsPage = {
  hero: {
    eyebrow: "For Investors",
    headline: "Performance through holding",
    subheadline:
      "Saha targets profitable founder-led businesses where succession creates opportunity, transferability is real, and every acquired business can be measurably strengthened in the two years after close. The edge is buying carefully, transitioning well, and building the operating capabilities that compound across a permanent portfolio.",
    cta: { label: "Discuss the thesis", href: "/contact?pathway=investor" },
  },

  thesis: {
    heading: "A buyer purpose-built for SME succession",
    paragraphs: [
      "Switzerland has a large and growing segment of profitable, founder-led businesses approaching succession. They are well-run, cash-generative, and deeply embedded in their local markets, but they sit below the threshold where most institutional buyers operate. Everything under CHF 10M in revenue is effectively invisible to institutional deal flow, yet the CFB-HSG / UBS succession study estimates that one in three Swiss SME owners expects a transfer within five years, and only two thirds of those successions conclude successfully.",
      "The gap is not a lack of good businesses; it is the absence of a buyer model built for this segment. These deals require hands-on transition skills, founder empathy, and the willingness to do complex, smaller transactions that cannot be templated. Saha is built for this work.",
    ],
    callout: {
      type: "stat" as const,
      value: "1 in 3",
      caption: "Swiss SME owners expect a transfer within five years; the segment below CHF 10M is largely invisible to institutional capital",
    },
  },

  permanentOwnership: {
    heading: "Where returns come from",
    paragraphs: [
      "Returns come in two forms. The first is operating cash flow from the acquired businesses, distributed to investors or reinvested into new acquisitions according to stated policy. The second is appreciation in portfolio value as the businesses compound, reflected in net asset value over time.",
      "Because the structure is not optimised for a single exit event, operational decisions are made for the long-term health of each business, not to dress it for sale. Liquidity is nonetheless available to long-term investors through two additional routes: refinancing against portfolio value as NAV grows, and selective secondary transfers within the investor base.",
    ],
  },

  mustBeTrue: {
    heading: "What must be true for this model to work",
    description:
      "We think clearly about our own assumptions. For Saha to succeed, the following must hold:",
    steps: [
      {
        number: "01",
        title: "We must buy transferable businesses, not just cheap ones",
        description:
          "A low price does not make a good acquisition. The business must be able to function, retain customers, and generate revenue after the founder steps away. Transferability is the critical filter.",
      },
      {
        number: "02",
        title: "Transferable is the floor; strengthenable is the ceiling",
        description:
          "A business that can survive the founder's exit is a viable acquisition. A business that can also be measurably strengthened in the twenty-four months after close is a good one. We filter for both, and walk away from businesses that fail either test, regardless of price.",
      },
      {
        number: "03",
        title: "Transitions must be structured and founder-specific",
        description:
          "Each handover is different. There is no generic playbook. Success depends on understanding what the founder actually does, who can take over, and how to preserve customer and team trust through the change.",
      },
      {
        number: "04",
        title: "Support must be useful without bloating overhead",
        description:
          "Shared capabilities only make sense if they genuinely help each business. We must avoid building central functions that serve the holding company more than the portfolio.",
      },
      {
        number: "05",
        title: "Early deals matter disproportionately",
        description:
          "The first acquisitions set the tone for sourcing, transition quality, and reputation. Getting them right is more important than doing them quickly.",
      },
      {
        number: "06",
        title: "Discipline matters more than speed",
        description:
          "The model depends on saying no more often than yes. Pipeline volume is not the constraint; judgment and selectivity are.",
      },
    ],
  },

  howModelCompounds: {
    heading: "Infrastructure, not a portfolio",
    paragraphs: [
      "Saha isn't assembling a portfolio; it is building the infrastructure that makes this segment scalable without losing the craft each deal requires.",
      "Every acquisition makes the next cheaper to source, faster to transition, and more measurably strengthened. The pillars below are where that compounding lives.",
    ],
    pillars: [
      {
        title: "Trusted-counterparty sourcing",
        description:
          "Fiduciaries, Treuhänder, and local advisors bring deals to Saha before they reach the open market.",
      },
      {
        title: "Transferability discipline",
        description:
          "A filter for businesses that can outlast their founder, applied before price is ever discussed.",
      },
      {
        title: "Leadership continuity",
        description:
          "A named practice for identifying, evaluating, installing, and supporting the right post-founder leader, internal or external.",
      },
      {
        title: "Transition playbook",
        description:
          "Structured handover, founder-specific, with close attention through year one.",
      },
      {
        title: "Shared capabilities",
        description:
          "Finance, reporting, pricing discipline, hiring support, and knowledge capture, offered to portfolio businesses that choose to use them.",
      },
      {
        title: "Proprietary platform",
        description:
          "Sourcing intelligence, diligence workflow, transition tooling, and portfolio reporting, built in-house.",
      },
    ],
    callout: {
      type: "stat" as const,
      value: "Long-term",
      caption: "Each acquisition strengthens the platform. Sourcing, transition, leadership, and operations improve with every deal",
    },
  },

  willNotBuy: {
    heading: "What we will not buy",
    description: "Discipline means being explicit about boundaries:",
    items: [
      {
        title: "Distressed turnarounds",
        description: "Businesses requiring immediate restructuring or financial rescue are outside our model.",
      },
      {
        title: "Founder-dependent businesses",
        description: "If there is no realistic path to handover, if the business cannot function without the founder, it is not a fit.",
      },
      {
        title: "Capital-heavy or declining niches",
        description: "Businesses with high capex requirements that limit free cash flow, or operating in structurally declining markets without long-term viability.",
      },
      {
        title: "Too small for structured transition",
        description: "Businesses that cannot support the economics of a thoughtful, well-managed ownership transition.",
      },
    ],
  },

  whereWeAre: {
    heading: "By design, not by delay",
    paragraphs: [
      "Saha is pre-close. The core team is assembled, the capital base is being structured, and first acquisition conversations are underway. We have not closed a deal yet; we are building for first close, not for mass deployment. The first acquisitions will prove the sourcing thesis, the transition model, and the operating discipline. Everything that follows depends on getting this right.",
    ],
    callout: {
      type: "stat" as const,
      value: "Pre-close",
      caption: "Capital structure being finalised, founding team in place, first acquisition conversations underway",
    },
  },

  whyDifferent: {
    heading: "Why Saha is different from a traditional fund",
    paragraphs: [
      "Most acquisition vehicles are built around a finite fund life: buy, improve, exit within a set horizon. That structure creates inherent tension between short-term performance and long-term business health.",
      "Saha is a permanent holding company. We acquire businesses to keep them. Our incentives are fully aligned with the long-term success of each company and the overall portfolio. There is no exit clock, no forced realisations, and no pressure to optimise for quarterly optics.",
    ],
    callout: {
      type: "quote" as const,
      text: "We acquire businesses to keep them. Our incentives are fully aligned with long-term success.",
    },
  },

  closingCta: {
    heading: "Interested in learning more?",
    description:
      "We are structuring Saha for a small number of aligned, long-term investors. If the thesis resonates, we welcome a private conversation to explore fit.",
    cta: { label: "Investor enquiries", href: "/contact?pathway=investor" },
  },
};

/* ── Talent ─────────────────────────────────── */

export const talentPage = {
  hero: {
    eyebrow: "Talent",
    headline: "Lead a Swiss business beyond its founder.",
    subheadline:
      "Step into the CEO seat of an established Swiss business. Lead its next chapter, backed by a permanent owner and a community of fellow leaders.",
    cta: { label: "Apply now", href: "/contact?pathway=talent" },
  },

  opportunity: {
    heading: "A first-of-its-kind opportunity",
    paragraphs: [
      "Running a profitable Swiss SME as its CEO has rarely been a path available to outside operators. Family succession favors heirs. Private equity favors short-dated plays. Most acquisitions come with an exit clock above the new CEO's head.",
      "The Future CEO Program is different. You lead an established Swiss business into its next chapter, with real equity, real autonomy, and a permanent owner behind you who will not resell the company. For the right operator, it is the seat of a career.",
    ],
    callout: {
      type: "quote" as const,
      text: "A career-defining seat, by design.",
    },
  },

  whoYouAre: {
    heading: "Who you are",
    paragraphs: [
      "You have already run something. Maybe you founded and exited a business. Maybe you led a division with full P&L accountability. Maybe you were the number two at a family SME, an operator inside a consultancy, or returning to Switzerland after an international run.",
      "What sets you apart is less on your CV and more in how you work. You bring generalist instincts to complex problems. You think like an owner, not an employee. You listen before you change things. You can earn the trust of a founder handing over a life's work, and the team who will follow you. You are patient enough for a long-term horizon, and honest enough to know when you are not.",
    ],
  },

  program: {
    heading: "The Future CEO Program",
    steps: [
      {
        number: "01",
        title: "Formation",
        description:
          "Work alongside the Saha team on live sourcing, diligence, and thesis-building in the sectors you would consider running. The phase is flexible and unpaid, and ends when you are matched with a specific acquisition.",
      },
      {
        number: "02",
        title: "Transition",
        description:
          "You are paired with a target business and its outgoing founder. Compensation begins. You shadow the founder, learn the company, and take responsibility in stages across a structured handover.",
      },
      {
        number: "03",
        title: "General Manager",
        description:
          "You run the company as CEO, with meaningful equity in the business and full autonomy to lead. The role is stewardship as much as operation: growing the company forward while preserving what made it worth keeping.",
      },
    ],
  },

  offer: {
    heading: "What the program offers",
    paragraphs: [
      "The program is built to align your upside with the business you run. Compensation begins when you match at transition, and you receive meaningful equity in the specific company you lead. Because Saha holds permanently, you can build for the long term rather than manage toward an exit.",
      "You are not doing this alone. Saha supports you with back-office infrastructure so you can focus on the business. And as the portfolio grows, you join a network of Future CEO alumni and sitting GMs across other Saha businesses, operators working on similar problems under the same owner, with the same long horizon. Experience travels between seats.",
    ],
    callout: {
      type: "quote" as const,
      text: "A permanent owner behind you. A community of operators beside you.",
    },
  },

  commitment: {
    heading: "What we ask in return",
    paragraphs: [
      "A real multi-year commitment. You do not enter the program to run a business for three years and move on. Permanence works both ways. You will live the Swiss business context, take full accountability for outcomes, and stay long enough to see the effects of your decisions compound. In return, you get something rare in this market: time.",
    ],
  },

  process: {
    heading: "The process",
    steps: [
      {
        number: "01",
        title: "Apply",
        description:
          "A short note on what you have run, why Saha, and the kind of business you would want to lead.",
      },
      {
        number: "02",
        title: "Conversations",
        description:
          "One or two sessions with the Saha founding team. Mutual qualification on fit, horizon, and operating thesis.",
      },
      {
        number: "03",
        title: "Thesis and commitment",
        description:
          "You develop a short thesis on where you would want to operate. We review it together, check references, and decide mutually whether to enter the program.",
      },
    ],
  },

  closingCta: {
    heading: "Join the first cohort",
    description:
      "We are forming our first Future CEO Program cohort now. If the seat sounds like yours, tell us.",
    cta: { label: "Apply now", href: "/contact?pathway=talent" },
  },
};

/* ── For Advisors ──────────────────────────── */

export const advisorsPage = {
  hero: {
    eyebrow: "For Advisors",
    headline: "A buyer you can vouch for",
    subheadline:
      "When you refer a client to a buyer, your reputation travels with them. Saha is built with that responsibility in mind: a buyer that protects the relationships you have spent years building, not one that puts them at risk.",
  },

  understand: {
    heading: "An introduction is a long memory",
    paragraphs: [
      "The founders facing succession are often your longest-standing clients. When you introduce them to a buyer, you aren't just facilitating a transaction; you're vouching for how the process will feel and what it produces.",
      "Saha is designed around that responsibility. How we behave in the process, how we treat the founder, and how we carry the business forward after close are what determine whether your introduction reflects well on you.",
    ],
  },

  expectations: {
    heading: "What you can expect from us",
    steps: [
      {
        number: "01",
        title: "A defined process with no surprises",
        description:
          "We approach every situation with a clear methodology: initial assessment, offer, due diligence, transition planning, close. We communicate openly at each stage, with you and with your client, so that nothing arrives unexpectedly and no one is left without answers.",
      },
      {
        number: "02",
        title: "We do not retrade",
        description:
          "Our offer reflects our genuine assessment of the business. We do not use due diligence as a tool to renegotiate price or terms. If something material emerges that changes our view, we tell you directly and immediately. We do not let it surface at the last moment.",
      },
      {
        number: "03",
        title: "We move at the right pace",
        description:
          "Neither rushed nor indefinitely prolonged. We understand that founders often need time to reach certainty, and we respect that. Once a process begins, we move with purpose and bring it to a conclusion within a reasonable timeframe.",
      },
      {
        number: "04",
        title: "We keep you informed",
        description:
          "You introduced the relationship. You remain part of it. We will not go around you, exclude you from significant developments, or leave you in a position where your client knows more, or less, than you do.",
      },
    ],
  },

  role: {
    heading: "How we think about your role",
    paragraphs: [
      "You know things about your client's business that we do not: the history, the dynamics, the sensitivities that never appear in a financial statement. That knowledge makes you a genuine partner in the process, not just an introducer.",
      "We rely on advisors who understand the business before we do. The introductions we value most come from fiduciaries and advisors who have assessed the situation themselves and believe there is a realistic fit. We will always tell you honestly if we do not think there is, because protecting your time and your client relationship matters more to us than pursuing a deal that should not happen.",
      "Our goal is to become the buyer you think of first when a succession situation arises, not because we have asked you to, but because every introduction you have made has reflected well on you.",
    ],
  },

  criteria: {
    heading: "What we look for",
    description:
      "To help you assess whether a situation might be a fit before making contact:",
    items: [
      {
        title: "Profitable and established",
        description: "Typically founder-led for many years.",
      },
      {
        title: "Revenue below CHF 10M",
        description: "Annual revenue generally below CHF 10M.",
      },
      {
        title: "Succession-driven",
        description: "Succession or retirement as the primary reason for sale, not distress or restructuring.",
      },
      {
        title: "Capable team in place",
        description: "A capable team already in place beyond the founder.",
      },
      {
        title: "Stable demand",
        description: "Demand that is reasonably stable, not dependent on a single contract or the founder's personal relationships.",
      },
      {
        title: "Structured handover",
        description: "A handover that can be realistically planned over a structured timeframe.",
      },
    ],
    note: "If a situation does not fit these criteria, we will tell you clearly and quickly, so you can pursue the right path for your client without delay.",
  },

  confidentiality: {
    heading: "Confidentiality",
    paragraphs: [
      "Every conversation is treated with complete discretion. We do not discuss situations with third parties, we do not approach businesses directly once an advisor has made contact on their behalf, and we do not use information shared in exploratory conversations for any purpose other than assessing fit.",
    ],
  },

  longTerm: {
    heading: "A long-term relationship, not a single transaction",
    paragraphs: [
      "Switzerland's sub-CHF 10M succession market is not a one-time opportunity. It is a structural, ongoing reality. We are building Saha for the long term, which means we are building relationships with the advisors who operate in this segment for the long term too.",
      "Every transaction we handle well is a foundation for the next introduction. We measure our relationship with the advisory community not by the number of deals we pursue, but by the quality of outcomes we produce for the founders they refer.",
    ],
  },

  closingCta: {
    heading: "Start a conversation",
    description:
      "If you have a situation you would like to discuss, even at an early stage, and without obligation, we welcome the conversation. Everything is confidential from the first contact.",
    cta: { label: "Refer a situation", href: "/contact?pathway=advisor" },
    directContact: "Or reach us directly at hello@saha.ch. We respond within 48 hours.",
  },
};

/* ── About ──────────────────────────────────── */

export const aboutPage = {
  hero: {
    eyebrow: "About Saha",
    headline: "A permanent home for Swiss SMEs worth keeping",
    subheadline:
      "Many good businesses disappear at succession, not because they fail, but because few buyers are structured to keep them. Saha is built to be that buyer.",
  },

  foundingTeam: {
    heading: "The founding team",
    intro: "Saha is being assembled by a small group of people with complementary skills across acquisition, research, platform, and build-up.",
    members: [
      {
        name: "Temitope Ola",
        subtitle: "Founder, Strategy & M&A",
        description: "Founder-operator with over 25 years across venture building, finance, and multi-country execution. In 2014 he completed the full exit of a Swiss tech company he founded to a Zurich-listed strategic buyer. That experience informs how Saha approaches the founders it works with. He brings the sourcing vision, acquisition thesis, and company-building ambition behind Saha.",
      },
      {
        name: "Liesel Goveas, PhD",
        subtitle: "Founder, Research & Acquisition Intelligence",
        description: "PhD in Neuroscience, MBA at the University of St. Gallen. Brings rigorous research methodology and analytical depth to sourcing, market mapping, and diligence. Her scientific career across Swiss and European institutions gives Saha direct domain fluency in life sciences, medtech, and biotech.",
      },
      {
        name: "Stefan Vaninetti",
        subtitle: "Founder, Platform & Data",
        description: "Brings deep expertise in IT architecture and data governance, grounded in software engineering and leadership at HOCH Health Ostschweiz. He has led complex digital and enterprise IT transformations across a regulated, multi-entity Swiss organisation. That experience shapes how Saha builds its internal platform for sourcing, diligence, transition, and portfolio reporting.",
      },
      {
        name: "Benjamin Kaleja",
        subtitle: "Founder, Transition & Growth",
        description: "A founder-operator with over a decade of experience across product, technology, and enterprise AI. He co-founded ZenAdmin, a B2B IT automation SaaS that he scaled from zero to acquisition in 2024. He has led product and engineering teams at Fortune 500 enterprises and VC-backed AI startups. He brings the product, technology, and AI capability behind Saha's build-up thesis.",
      },
    ],
    closingLine: "If you have the experience and disposition to join us, we would like to hear from you.",
  },

  story: {
    heading: "The problem we set out to solve",
    paragraphs: [
      "Switzerland's economy is built on small and medium-sized enterprises. Many are profitable, well-managed businesses with loyal teams and strong local reputations. They form the backbone of communities across the country.",
      "But every year, thousands of these businesses face an uncertain future. Their founders, often the people who built them from nothing, reach retirement age with no succession plan. The options are usually unsatisfying: sell to a large, impersonal acquirer; attempt a rushed handover to unprepared successors; or simply close.",
      "Saha was created to offer something better. We believe that strong, profitable, well-run businesses should not disappear because of a timing problem. They deserve an owner who will respect their history, support their people, and carry them forward with seriousness and care.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168,000",
      caption: "Swiss SMEs expected to face succession by 2030",
    },
  },

  whyDifferentBuyer: {
    heading: "Why these businesses need a different kind of buyer",
    paragraphs: [
      "Businesses below CHF 10M in revenue sit in a structural gap. They are too small for most institutional acquirers, who need larger deal sizes to justify their economics. They are too founder-dependent for passive investors, who lack the willingness or capability to manage a hands-on transition.",
      "And they are too important (to employees, to customers, to communities) to simply disappear when no buyer shows up. This segment does not need more capital. It needs a buyer who understands the human complexity of smaller succession deals and is willing to do the work.",
    ],
    callout: {
      type: "quote" as const,
      text: "This segment does not need more capital. It needs a buyer willing to do the work.",
    },
  },

  approach: {
    heading: "How we think about ownership",
    paragraphs: [
      "We acquire businesses with the intention of keeping them. This is not a financial strategy dressed up as stewardship; it is a genuine conviction that long-term ownership produces better outcomes for businesses, their people, and their communities.",
      "We provide each company with a careful transition, selective operating support, and the stability that comes from belonging to something larger. In return, each business strengthens the whole: through shared knowledge, operating discipline, and the compounding advantages of a growing, permanent portfolio.",
    ],
    callout: {
      type: "quote" as const,
      text: "We acquire businesses with the intention of keeping them.",
    },
  },

  principles: {
    heading: "What we believe",
    items: [
      {
        title: "Continuity over disruption",
        description:
          "Good businesses should be preserved and strengthened, not dismantled for parts.",
      },
      {
        title: "Stewardship over extraction",
        description:
          "Ownership carries responsibility. We aim to leave every business stronger than we found it.",
      },
      {
        title: "Patience over urgency",
        description:
          "Lasting value is built slowly. We resist the pressure to optimise for short-term results.",
      },
      {
        title: "Clarity over complexity",
        description:
          "Our model is simple by design. Complexity should serve the business, not the business model.",
      },
    ],
  },

  whereWeAreToday: {
    heading: "Where we are today",
    paragraphs: [
      "We are building relentlessly: the founding team is in place, the capital structure is being finalised, and early acquisition conversations are underway. This is deliberate. We believe the first acquisitions define the company, and we intend to get them right.",
      "Every decision we make is guided by a simple question: will this still make sense in twenty years?",
    ],
  },

  ambition: "Saha is being built not only as a holding company, but as a long-term model for small-business succession in Switzerland. We believe the reason this segment is underserved is not a lack of good businesses; it is the absence of a buyer with the infrastructure to make these deals work well. Building that infrastructure, gradually and with discipline, is what Saha is for. That infrastructure has four pieces: systematic sourcing, leadership continuity, transition discipline, and shared operating strength. It is designed to sharpen with every acquisition we complete.",

  closingCta: {
    heading: "We would be glad to hear from you",
    description:
      "Whether you are a founder thinking about the future, an investor exploring the model, or someone who shares our vision, you are welcome to reach out.",
    cta: { label: "Get in touch", href: "/contact" },
  },
};

/* ── Contact ────────────────────────────────── */

export const contactPage = {
  hero: {
    eyebrow: "Contact",
    headline: "Start a conversation",
    subheadline:
      "Every meaningful relationship begins with a conversation. Tell us a little about yourself and what brought you here.",
  },

  submitLabel: "Send message",
  selectPrompt: "Select how you would like to connect with us above.",
  thankYouHeading: "Thank you for reaching out",
  thankYouDescription: "We have received your message and will be in touch soon.",
  sendAnother: "Send another message",

  pathways: [
    {
      id: "founder",
      title: "I am a founder considering succession",
      description:
        "If you are thinking about the next chapter for your business, we would welcome a confidential, no-obligation conversation about whether Saha might be a good fit.",
      fields: [
        { name: "name", label: "Your name", type: "text" as const, required: true },
        { name: "email", label: "Email address", type: "email" as const, required: true },
        { name: "phone", label: "Phone number (optional)", type: "tel" as const, required: false },
        { name: "company", label: "Company name", type: "text" as const, required: false },
        { name: "message", label: "Tell us a little about your business and your thinking", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "investor",
      title: "I am an investor",
      description:
        "We are structuring Saha for a small number of aligned, long-term investors. We welcome conversations to explore fit.",
      fields: [
        { name: "name", label: "Your name", type: "text" as const, required: true },
        { name: "email", label: "Email address", type: "email" as const, required: true },
        { name: "firm", label: "Firm or affiliation (optional)", type: "text" as const, required: false },
        { name: "message", label: "What interests you about Saha?", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "builder",
      title: "I want to build with Saha",
      description:
        "If you are an operator, investor, or entrepreneur interested in helping build Saha from the ground up, we would like to hear from you.",
      fields: [
        { name: "name", label: "Your name", type: "text" as const, required: true },
        { name: "email", label: "Email address", type: "email" as const, required: true },
        { name: "linkedin", label: "LinkedIn profile (optional)", type: "url" as const, required: false },
        { name: "message", label: "Who are you and what draws you to Saha?", type: "textarea" as const, required: false },
      ],
    },
    {
      id: "advisor",
      title: "I am an advisor referring a client",
      description:
        "If you are a fiduciary, trustee, or advisor with a client considering succession, we welcome a confidential conversation to assess fit.",
      fields: [
        { name: "name", label: "Your name", type: "text" as const, required: true },
        { name: "email", label: "Email address", type: "email" as const, required: true },
        { name: "firm", label: "Firm or practice (optional)", type: "text" as const, required: false },
        { name: "message", label: "Tell us about the situation", type: "textarea" as const, required: false },
      ],
    },
  ],
};

/* ── FAQ ───────────────────────────────────── */

export const faqPage = {
  hero: {
    eyebrow: "FAQ",
    headline: "Common questions",
    subheadline:
      "Answers to the questions we hear most from founders, investors, and prospective team members.",
  },

  groups: [
    {
      label: "For Founders",
      items: [
        {
          question: "How is Saha different from a private equity buyer?",
          answer:
            "Private equity firms typically acquire businesses with the intention of selling them within three to seven years. Saha acquires businesses to hold them permanently. There is no exit timeline, no pressure to restructure for resale, and no incentive to extract short-term value. Our model is built around continuity, not transactions.",
        },
        {
          question: "What happens to my employees after a sale?",
          answer:
            "Preserving the team you have built is central to our approach. We do not acquire businesses with the intention of restructuring them. Any decisions affecting people will be made for the long-term health of the business, with transparency.",
        },
        {
          question: "How long does the process take from first conversation to closing?",
          answer:
            "That depends on where you are in your thinking. Succession is often a years-long reflection before a founder is ready to act, and that is entirely normal. Once you have decided to move forward, a typical transaction process from first serious conversation to close takes three to six months. There is no pressure to rush either stage. Many founders find it useful to begin a conversation with us well before they are ready to sell, simply to understand the options. Everything is confidential and carries no obligation.",
        },
        {
          question: "Will my company keep its name and brand?",
          answer:
            "Yes. We preserve the identity, brand, and local presence of each business we acquire. Your company continues to operate under its own name, in its own market, with its own team. Saha provides support from behind the scenes.",
        },
        {
          question: "Do I need to stay involved after the sale?",
          answer:
            "That is entirely up to you. Some founders prefer a clean transition, while others choose to stay involved in an advisory or part-time capacity for a period. We design the transition around your preferences and your timeline.",
        },
        {
          question: "What size of business does Saha typically acquire?",
          answer:
            "We focus on profitable, founder-led Swiss businesses generally below CHF 10M in annual revenue. The most important factors are the quality of the business, the strength of the team, and whether the business can realistically continue to thrive after the founder steps away.",
        },
        {
          question: "What does Saha actually do to improve a business after acquisition?",
          answer:
            "Our first job, for roughly the first twelve months, is continuity: keeping customers, team, and operations stable through the founder handover. In the twelve to twenty-four months that follow, we work with the local team on a focused strengthening agenda: sharper financial reporting and pricing discipline, digitising recurring workflows that still run on paper or spreadsheets, support on one or two key hires (often the person taking over from the founder), and capturing the institutional knowledge that used to sit in the founder's head. The local team stays responsible for running and growing the business. What we add is selective, measured against whether it actually helps, and refined with every acquisition.",
        },
      ],
    },
    {
      label: "For Investors",
      items: [
        {
          question: "How is Saha different from a patient holding company with capital?",
          answer:
            "A holding company with patient capital is a positioning claim. Saha is building the sourcing, transition, and operating infrastructure that makes smaller succession deals genuinely viable, not just fundable. The model is designed to compound: each acquisition improves our process, strengthens our operator network, and reduces friction on the next deal. That is the difference between owning a collection of businesses and building an acquisition and operating engine.",
        },
        {
          question: "What is Saha's investment structure?",
          answer:
            "Saha is a permanent holding company, not a traditional fund with a fixed life. Capital is deployed into acquisitions that are held indefinitely. Returns are generated through the long-term cash flows, organic growth, and compounding operational strength of the portfolio.",
        },
        {
          question: "How does Saha generate returns without exits?",
          answer:
            "Returns are generated through the operating cash flows of the businesses we acquire, reinvested or distributed as the portfolio matures. We target entry at 3–5× EBITDA in cash-generative businesses. Investor liquidity is provided through a combination of cash distributions, portfolio refinancing over time, and selective secondary mechanisms, not through a single exit event. We do not optimise for a single IRR figure. We optimise for durable, compounding value. Full return documentation is shared in direct conversations.",
        },
        {
          question: "What is the target return profile?",
          answer:
            "We aim to compound portfolio value steadily over the long term through acquisition discipline, operational improvement, and organic growth. We are structuring Saha for a small number of aligned long-term investors and share full documentation in private discussions.",
        },
        {
          question: "How does Saha manage risk across the portfolio?",
          answer:
            "Risk is managed through diversification across industries and geographies within Switzerland, disciplined entry valuations, structured transition processes, and shared financial oversight with early warning systems. Each business operates independently, limiting contagion risk.",
        },
        {
          question: "What is the minimum investment commitment?",
          answer:
            "We are structuring Saha for a small number of aligned, long-term investors. At this stage, selectivity and structural fit matter more than scale. Minimum commitments and terms are discussed directly.",
        },
        {
          question: "Why focus on businesses below CHF 10M in revenue?",
          answer:
            "This segment is structurally underserved. Most institutional buyers, advisors, and M&A datasets focus above CHF 10M. Below that threshold, profitable succession-driven businesses exist in large numbers but lack a purpose-built buyer. That is the gap Saha is designed to fill.",
        },
        {
          question: "How does Saha generate upside beyond holding good businesses?",
          answer:
            "Three compounding sources. First, disciplined entry: we buy in a segment that is structurally underserved by institutional capital, where multiples reflect the absence of buyers rather than the quality of the businesses. Second, deliberate strengthening after close: sharper reporting and pricing, digitised workflows, leadership continuity, and knowledge capture, applied selectively where they raise the earnings power of each business. Third, a platform that gets sharper with every acquisition: sourcing relationships, transition playbooks, leadership networks, and internal systems that reduce the friction and cost of each subsequent deal. The upside is not a single exit event. It is the widening gap between what these businesses are worth inside Saha and what they would have been worth to any other buyer.",
        },
        {
          question: "What role does technology play in Saha's model?",
          answer:
            "Technology at Saha is about the holdco's own operating infrastructure, not about applying software to the businesses we acquire. We are building an internal platform (sourcing intelligence, diligence workflow, transition tooling, and portfolio reporting) that makes permanent ownership of many small businesses viable at scale. This work is led by Stefan Vaninetti, whose background is enterprise IT architecture and data governance across a regulated, multi-entity Swiss organisation (HOCH Health Ostschweiz). The platform is how a lean central team stays close to a growing portfolio without creating overhead that the businesses themselves cannot justify.",
        },
      ],
    },
    {
      label: "For Builders & Team",
      items: [
        {
          question: "What kind of people does Saha look for?",
          answer:
            "We look for people who think in decades, care about craft, and want to build something that endures. Relevant backgrounds include operations, finance, M\u0026A, general management, and technology, but disposition and alignment matter more than a specific title or pedigree.",
        },
        {
          question: "Is Saha hiring for specific roles right now?",
          answer:
            "We are at the formation stage, before our first acquisition. We are always open to hearing from exceptional people. Even without a formal opening, we welcome introductions from anyone who feels a strong alignment with what we are building.",
        },
        {
          question: "Where is Saha based?",
          answer:
            "Saha is based in Switzerland. Our team works across the country, close to the businesses we acquire and support. We value presence and proximity: being near the teams and communities we serve.",
        },
      ],
    },
    {
      label: "General",
      items: [
        {
          question: "Why the name Saha?",
          answer:
            "Saha is a word rooted in patience, endurance, and the capacity to bear with care. It reflects the long-term mindset at the heart of everything we do: acquiring and stewarding businesses not for a cycle, but for a generation.",
        },
        {
          question: "Is Saha a fund or a company?",
          answer:
            "Saha is a permanent holding company. Unlike a fund, there is no predetermined exit timeline. Businesses we acquire become part of the Saha family permanently. This structure aligns our incentives with the long-term health of every company we own.",
        },
        {
          question: "How many businesses does Saha currently own?",
          answer:
            "We are deliberately building the foundation (team, processes, and capital) before making our first acquisitions. We believe that getting the model right is more important than moving quickly.",
        },
        {
          question: "How can I get in touch?",
          answer:
            "We welcome conversations from founders, investors, and prospective team members. You can reach us through our contact page or by emailing hello@saha.ch. Every inquiry is treated with confidentiality and respect.",
        },
      ],
    },
  ],

  closingCta: {
    heading: "Still have questions?",
    description:
      "We are happy to answer anything not covered here. Reach out and we will get back to you promptly.",
    cta: { label: "Get in touch", href: "/contact" },
  },
};

/* ── Privacy ───────────────────────────────── */

export const privacyPage = {
  hero: {
    eyebrow: "Legal",
    headline: "Privacy Policy",
    subheadline: "How Saha handles your information.",
  },
  sections: [
    {
      heading: "Overview",
      body: "Saha respects your privacy and is committed to protecting any personal information you share with us. This page outlines our approach to data handling. A complete privacy policy will be published here as we formalise our legal documentation.",
    },
    {
      heading: "Information we collect",
      body: "When you contact us through this website, we collect only the information you voluntarily provide, such as your name, email address, and the content of your message. We do not use tracking cookies or third-party analytics on this site.",
    },
    {
      heading: "How we use your information",
      body: "Information you provide is used solely to respond to your enquiry and to facilitate any subsequent conversations. We do not sell, share, or distribute your personal data to third parties.",
    },
    {
      heading: "Contact",
      body: "If you have questions about how we handle your data, please contact us at",
    },
  ],
};

/* ── Terms ──────────────────────────────────── */

export const termsPage = {
  hero: {
    eyebrow: "Legal",
    headline: "Terms of Use",
    subheadline: "Terms governing your use of this website.",
  },
  sections: [
    {
      heading: "General",
      body: "This website is operated by Saha. By accessing and using this site, you agree to comply with these terms. Full terms of use will be published here as we formalise our legal documentation.",
    },
    {
      heading: "Content",
      body: "The information on this website is provided for general informational purposes only. While we strive for accuracy, we make no guarantees about the completeness, reliability, or suitability of the information presented.",
    },
    {
      heading: "Intellectual property",
      body: "All content, design, and materials on this website are the property of Saha unless otherwise noted. You may not reproduce, distribute, or use this content without our prior written consent.",
    },
    {
      heading: "Contact",
      body: "For questions about these terms, please contact us at",
    },
  ],
};

/* ── Footer ─────────────────────────────────── */

export const footer = {
  tagline: "A long-term home for Swiss businesses facing succession.",
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "For you",
      links: [
        { label: "Founders", href: "/founders" },
        { label: "Advisors", href: "/advisors" },
        { label: "Investors", href: "/investors" },
        { label: "Talent", href: "/talent" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Saha. All rights reserved.`,
  location: "Switzerland",
};

/* ── SEO Metadata ──────────────────────────── */

export const metadata = {
  home: {
    title: "Saha | Systematic succession for Swiss SMEs",
    description:
      "Time. Talent. Technology. A systematic succession system for Swiss small businesses. Saha acquires profitable businesses below CHF 10M, transitions them with care, and strengthens them for the long term.",
  },
  founders: {
    title: "For Founders | Saha",
    description:
      "You built something worth preserving. Saha acquires and keeps founder-built Swiss businesses below CHF 10M with care, structure, and a long-term commitment.",
  },
  advisors: {
    title: "For Advisors | Saha",
    description:
      "When you introduce a client to Saha, your reputation is protected. We offer a clear process, full transparency, and permanent ownership for Swiss SME successions.",
  },
  investors: {
    title: "For Investors | Saha",
    description:
      "A permanent ownership model for the underserved segment of Swiss succession deals below CHF 10M. Structured transitions, disciplined sourcing, compounding value.",
  },
  talent: {
    title: "Talent | Future CEO Program at Saha",
    description:
      "The Future CEO Program prepares experienced operators to run the Swiss businesses Saha acquires. Equity, autonomy, and a permanent owner behind you.",
  },
  about: {
    title: "About Saha | Why we exist",
    description:
      "Too many good Swiss businesses disappear when their founders retire. Saha was created to provide a thoughtful, long-term buyer for the underserved succession segment.",
  },
  contact: {
    title: "Contact Saha",
    description:
      "Start a conversation with Saha. Whether you are a founder, investor, or prospective team member, we would welcome hearing from you.",
  },
  faq: {
    title: "FAQ | Saha",
    description:
      "Answers to common questions about Saha from founders, investors, and prospective team members.",
  },
  privacy: {
    title: "Privacy Policy | Saha",
    description: "Saha's privacy policy and data handling practices.",
  },
  terms: {
    title: "Terms of Use | Saha",
    description: "Terms of use for the Saha website.",
  },
};
