/* ─────────────────────────────────────────────
 *  Saha — centralised copy
 *  Edit text here; the components pull from these objects.
 * ───────────────────────────────────────────── */

export const siteConfig = {
  name: "Saha",
  tagline: "A long-term buyer for Swiss businesses facing succession",
  url: "https://saha.ch",
  email: "hello@saha.ch",
  location: "Switzerland",
};

/* ── Navigation ─────────────────────────────── */

export const nav = {
  links: [
    { label: "Founders", href: "/founders" },
    { label: "Investors", href: "/investors" },
    { label: "Join Saha", href: "/join" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

/* ── Homepage ───────────────────────────────── */

export const homepage = {
  hero: {
    headline: "A serious buyer for Swiss\nbusinesses facing succession",
    subheadline:
      "Saha is building a long-term ownership company for profitable Swiss businesses below CHF 10m in revenue, where the founder is preparing to step back and continuity matters as much as price.",
    cta: { label: "Speak confidentially about succession", href: "/contact" },
    secondaryCta: { label: "See what we look for", href: "/founders" },
  },

  whatWeAreBuildingSectionLabel: "The opportunity",
  whatWeAreBuilding: {
    heading: "Built for the underserved end of succession",
    paragraphs: [
      "Most institutional buyers focus higher up the market. Deals below CHF 10m in revenue are too small for traditional private equity, too complex for passive investors, and rarely covered by mainstream M&A advisory.",
      "Yet these businesses are far from marginal. They employ loyal teams, serve established customer bases, and generate steady cash flows. They are the backbone of local economies across Switzerland. When their founders retire without a plan, the loss is real — for employees, customers, and communities.",
      "Saha exists for that gap. We are building a disciplined acquisition company specifically for this segment: small, profitable, succession-driven businesses that are too important to disappear and too complex for buyers who are not willing to do the work.",
    ],
    callout: {
      type: "stat" as const,
      value: "~168,000",
      caption: "Swiss SMEs will face succession by 2030 — but only about two thirds of those transfers are expected to conclude successfully",
      source: "2026 CFB\u2011HSG / UBS study",
    },
  },

  whyNowSectionLabel: "Why this segment gets left behind",
  whyNow: {
    heading: "Too small for most buyers, too valuable to lose",
    paragraphs: [
      "Businesses below CHF 10m in revenue are too small for most lower-mid-market acquirers, who need larger deal sizes to justify their overhead and fund economics.",
      "They are too founder-dependent for passive investors, who lack the appetite or capability to manage a hands-on transition from a retiring owner.",
      "And they are too important — to employees, customers, and local communities — to simply close when no buyer appears. The challenge is not the absence of good businesses. It is the absence of a buyer model built for this segment.",
    ],
    callout: {
      type: "quote" as const,
      text: "The issue is not volume. It is failed transferability.",
    },
  },

  audiences: [
    {
      label: "For founders",
      heading: "Your business deserves a serious next chapter",
      description:
        "You built something that matters. Saha provides continuity — preserving what works, supporting your team, and carrying forward the business you spent decades creating.",
      cta: { label: "Learn more", href: "/founders" },
    },
    {
      label: "For investors",
      heading: "A disciplined thesis in an underserved segment",
      description:
        "Repeatable sourcing in a structural deal pipeline, disciplined entry valuations, hands-on transitions, and permanent hold. A model built for compounding, not exiting.",
      cta: { label: "Learn more", href: "/investors" },
    },
  ],

  buildersStrip: {
    heading: "Help build Saha from the ground up",
    description:
      "We are assembling a small team at the formation stage. If you want to shape a company's first acquisitions, diligence process, and operating model — this is early, real work.",
    cta: { label: "Learn more", href: "/join" },
  },

  modelSectionLabel: "How the model works",
  model: {
    heading: "Identify. Transition. Support. Hold.",
    steps: [
      {
        number: "01",
        title: "Identify transferable businesses",
        description:
          "We focus on profitable, founder-led Swiss businesses below CHF 10m in revenue where succession is the primary reason for sale. Beyond financial health, we assess transferability: repeat or resilient demand, manageable customer concentration, stable teams, and a handover that can realistically be structured.",
      },
      {
        number: "02",
        title: "Transition with care and discipline",
        description:
          "Each acquisition follows a structured transition process designed to preserve stability: founder handover, customer continuity, management stability, and close attention through the first twelve months. Transition is a capability, not just goodwill.",
      },
      {
        number: "03",
        title: "Support where it is useful",
        description:
          "Over time, our businesses benefit from shared capabilities where useful: financial discipline, reporting, hiring support, process improvement, and operating guidance. Support is selective, not industrialised — local teams remain responsible for running and growing the business.",
      },
      {
        number: "04",
        title: "Hold for the long term",
        description:
          "We do not buy to flip. Long-term ownership allows decisions that preserve teams, customer trust, and business quality. Each company stays in the Saha family, and the portfolio compounds in value, knowledge, and operating strength over time.",
      },
    ],
  },

  differentiatorsSectionLabel: "Why Saha can work in this segment",
  differentiators: {
    heading: "Built for smaller succession deals",
    items: [
      {
        title: "Purpose-built for sub-CHF 10m deals",
        description:
          "We operate in a segment most institutional buyers avoid. Our model, overhead, and expectations are designed for this deal size from day one.",
      },
      {
        title: "Transferability before acquisition",
        description:
          "We assess whether a business can realistically outlast its founder before we acquire it. Not every good business is a good acquisition.",
      },
      {
        title: "Hands-on transition discipline",
        description:
          "Transition is the highest-risk phase and requires human judgment, communication, and tact. We treat it as a core capability, not a formality.",
      },
      {
        title: "Long-term ownership without forced exits",
        description:
          "No fund timeline, no exit pressure. Decisions are made for the health of each business, not for the optics of a portfolio review.",
      },
    ],
  },

  finalCtaFounders: {
    heading: "Thinking about succession?",
    description:
      "If you are a founder beginning to consider what comes next for your business, we would welcome a confidential conversation.",
    cta: { label: "Discuss succession confidentially", href: "/contact" },
  },

  finalCtaOther: {
    heading: "Investors and operators",
    description:
      "If you are an investor interested in the model or an operator who wants to build alongside us, we would be glad to hear from you.",
    cta: { label: "Request an introduction", href: "/contact" },
  },
};

/* ── For Founders ───────────────────────────── */

export const foundersPage = {
  hero: {
    eyebrow: "For Founders",
    headline: "You built something worth preserving",
    subheadline:
      "Saha acquires profitable Swiss businesses below CHF 10m in revenue from founders preparing to step back. When the time comes, your business — and the people who depend on it — deserves more than an uncertain transition.",
  },

  intro: {
    heading: "We understand what is at stake",
    paragraphs: [
      "Selling a business you built from nothing is not just a financial decision. It is personal. Your name is on it. Your team trusts you. Your customers rely on the standards you set.",
      "Saha was built by people who understand this. Our model is designed to honour what you created — by preserving it, supporting it, and carrying it forward with the same seriousness you brought to building it.",
    ],
    callout: {
      type: "quote" as const,
      text: "Your name is on it. Your team trusts you. We take that seriously.",
    },
  },

  whatWeLookFor: {
    heading: "A good fit for Saha",
    description: "We look for businesses that can realistically outlast the founder:",
    criteria: [
      "Profitable and established — typically founder-led for many years",
      "Revenue generally below CHF 10 million",
      "Succession or retirement is the primary reason for considering a sale",
      "Repeat or resilient demand — not project-based or one-off revenue",
      "Manageable customer concentration — not dependent on a single contract",
      "Stable team in place with operational capability beyond the founder",
      "A realistic handover path that can be structured and executed",
    ],
    callout: {
      type: "quote" as const,
      text: "We look for businesses that can outlast the founder — not just good businesses at a good price.",
    },
  },

  notAFit: {
    heading: "Usually not a fit",
    description: "We are selective by design. The following situations are typically outside our scope:",
    criteria: [
      "Businesses where revenue depends primarily on the founder's personal relationships or sales ability",
      "Distressed or turnaround situations requiring immediate restructuring",
      "Heavy dependence on a single customer or contract",
      "Highly project-based or unpredictable revenue models",
      "Businesses where the handover cannot be realistically structured within a reasonable timeframe",
      "Structurally declining niches with limited long-term viability",
    ],
  },

  founderExpectations: {
    heading: "What founders can expect from us",
    items: [
      {
        title: "Your company keeps its identity",
        description:
          "We preserve the name, brand, and local presence of every business we acquire. Your company continues to operate as itself.",
      },
      {
        title: "Your involvement is on your terms",
        description:
          "Some founders prefer a clean handover. Others stay involved in an advisory capacity. We design the transition around your preferences.",
      },
      {
        title: "Price is important, but not the only thing",
        description:
          "We offer fair, transparent valuations. We also know that for many founders, continuity for the team and customers matters as much as the number.",
      },
      {
        title: "Your team is protected",
        description:
          "We do not acquire businesses to restructure headcount. Existing employees, their roles, and working relationships are preserved through the transition and beyond.",
      },
    ],
  },

  process: {
    heading: "What engaging with Saha looks like",
    description:
      "There is no pressure and no obligation at any step. We move at a pace that feels right for you.",
    steps: [
      {
        title: "Confidential first conversation",
        description:
          "We begin with a private, no-obligation conversation to understand your business, your goals, and your timeline.",
      },
      {
        title: "Initial fit assessment",
        description:
          "If there is mutual interest, we assess whether your business fits our model — profitability, transferability, team stability, and handover potential.",
      },
      {
        title: "Deeper review",
        description:
          "We spend time understanding your business more deeply — operations, customers, team dynamics, and the founder's role in day-to-day operations.",
      },
      {
        title: "Indicative proposal",
        description:
          "We present a clear, straightforward proposal. No aggressive negotiation tactics. No last-minute surprises. Fair terms that reflect the value of what you have built.",
      },
      {
        title: "Diligence and transition planning",
        description:
          "Formal due diligence alongside detailed planning for the handover — who takes over what, how customers are managed, and what the first twelve months look like.",
      },
      {
        title: "Structured handover",
        description:
          "We execute the transition with care: founder handover, management continuity, customer communication, and operational stability from day one.",
      },
    ],
  },

  closingCta: {
    heading: "Your business is worth a serious conversation",
    description:
      "If you are beginning to think about what comes next, we would be glad to listen. Confidential, no obligation, and entirely on your terms.",
    cta: { label: "Speak with us about your business", href: "/contact" },
  },
};

/* ── For Investors ──────────────────────────── */

export const investorsPage = {
  hero: {
    eyebrow: "For Investors",
    headline: "An acquisition model built for\nsmaller Swiss succession deals",
    subheadline:
      "Saha focuses on profitable Swiss businesses below CHF 10m in revenue, where succession creates opportunity but conventional capital often does not engage. We acquire, transition, and hold — permanently.",
  },

  thesis: {
    heading: "The investment thesis",
    paragraphs: [
      "Switzerland has a large, growing, and structurally underserved segment of profitable, founder-led businesses facing succession. These companies are often well-run, cash-generative, and deeply embedded in their local markets — yet they sit below the threshold where most institutional buyers operate.",
      "Major Swiss M&A datasets, such as Deloitte's SME reports, define their lower bound at CHF 10m in revenue. Everything below that is effectively invisible to institutional deal flow. Yet the CFB-HSG / UBS succession study estimates that 32% of Swiss SME owners expect a transfer within five years — and only about 65% of those are expected to conclude successfully.",
      "The gap is not a lack of good businesses. It is a lack of buyers purpose-built for this segment. Deals below CHF 10m require hands-on transition skills, founder empathy, and the willingness to do complex, smaller transactions that cannot be templated. Saha is being built specifically for this work.",
      "Because we hold permanently, our returns compound. Every acquisition refines our sourcing, transition discipline, and operating capabilities — making the next one more efficient and less risky.",
    ],
    callout: {
      type: "stat" as const,
      value: "1 in 3",
      caption: "Swiss SME owners expects a transfer within five years — but the segment below CHF 10m is largely invisible to institutional capital",
    },
  },

  mustBeTrue: {
    heading: "What must be true for this model to work",
    description:
      "We think clearly about our own assumptions. For Saha to succeed, the following must hold:",
    items: [
      {
        title: "We must buy transferable businesses, not just cheap ones",
        description:
          "A low price does not make a good acquisition. The business must be able to function, retain customers, and generate revenue after the founder steps away. Transferability is the critical filter.",
      },
      {
        title: "Transitions must be structured and founder-specific",
        description:
          "Each handover is different. There is no generic playbook. Success depends on understanding what the founder actually does, who can take over, and how to preserve customer and team trust through the change.",
      },
      {
        title: "Support must be useful without bloating overhead",
        description:
          "Shared capabilities only make sense if they genuinely help each business. We must avoid building central functions that serve the holding company more than the portfolio.",
      },
      {
        title: "Early deals matter disproportionately",
        description:
          "The first acquisitions set the tone for sourcing, transition quality, and reputation. Getting them right is more important than doing them quickly.",
      },
      {
        title: "Discipline matters more than speed",
        description:
          "The model depends on saying no more often than yes. Pipeline volume is not the constraint — judgment and selectivity are.",
      },
    ],
  },

  willNotBuy: {
    heading: "What we will not buy",
    description: "Discipline means being explicit about boundaries:",
    items: [
      "Distressed turnarounds requiring immediate restructuring",
      "Founder-dependent businesses with no realistic handover path",
      "Businesses with high capital expenditure requirements that limit free cash flow",
      "Structurally declining niches without long-term viability",
      "Businesses too small to support the economics of a structured transition",
    ],
  },

  whereWeAre: {
    heading: "Where we are now",
    paragraphs: [
      "Saha is a company in formation. We are building deliberately: assembling the core team, structuring the capital base, and engaging in early acquisition conversations. We have not yet completed our first acquisition — by design, not by delay.",
      "We are building for first close, not mass deployment. The first deals will prove the sourcing thesis, the transition model, and the operating discipline. Everything that follows depends on getting this right.",
    ],
    items: [
      "Core team being assembled",
      "Capital structure being finalised",
      "First acquisition conversations underway",
      "Incorporation in progress",
      "Building for first close, not scale",
    ],
  },

  whyDifferent: {
    heading: "Why Saha is different from a traditional fund",
    paragraphs: [
      "Most acquisition vehicles are built around a finite fund life — buy, improve, exit within a set horizon. That structure creates inherent tension between short-term performance and long-term business health.",
      "Saha is a permanent holding company. We acquire businesses to keep them. Our incentives are fully aligned with the long-term success of each company and the overall portfolio. There is no exit clock, no forced realisations, and no pressure to optimise for quarterly optics.",
    ],
    callout: {
      type: "quote" as const,
      text: "We acquire businesses to keep them. Our incentives are fully aligned.",
    },
  },

  closingCta: {
    heading: "Interested in learning more?",
    description:
      "We are structuring Saha for a small number of aligned, long-term investors. If the thesis resonates, we welcome a private conversation to explore fit. Full documentation is shared in direct discussions.",
    cta: { label: "Investor enquiries", href: "/contact" },
  },
};

/* ── Join Saha ──────────────────────────────── */

export const joinPage = {
  hero: {
    eyebrow: "Join Saha",
    headline: "Build Saha from the ground up",
    subheadline:
      "Saha is at the formation stage — before first acquisition. We are assembling a small team to shape the sourcing model, diligence process, transition discipline, and operating approach. If you think in decades and care about craft, this is early, real work.",
  },

  whyJoin: {
    heading: "Why join at this stage",
    paragraphs: [
      "Most professional opportunities are about optimising within existing structures. Saha is different. We are building a long-term ownership company for Swiss businesses from scratch — strategy, culture, systems, values are all being decided now.",
      "The first hires will help shape the first acquisition model, the first transition, and the first operating playbook. This is pre-first-acquisition work. The people who join at this stage will define what Saha becomes.",
    ],
  },

  roles: {
    heading: "What we need",
    description:
      "We are not hiring for job titles. We are looking for people with the right skills, disposition, and ambition to build alongside us at the earliest stage.",
    profiles: [
      {
        title: "Deal and diligence",
        description:
          "People who can source, evaluate, and structure acquisitions in the sub-CHF 10m Swiss market. You understand what makes a small business transferable, you can read financials and assess operational risk, and you can build relationships with founders and advisors.",
      },
      {
        title: "Transition and operations",
        description:
          "People who can step into acquired businesses and lead them through the handover. You manage the founder exit, stabilise the team, maintain customer relationships, and set the operational foundation for long-term health.",
      },
      {
        title: "Finance and infrastructure",
        description:
          "People who can build the financial reporting, administrative systems, and operational processes that support a growing family of businesses. The connective tissue that makes the model work.",
      },
    ],
  },

  values: {
    heading: "What we value",
    items: [
      {
        title: "Long-term thinking",
        description: "We make decisions for decades, not quarters.",
      },
      {
        title: "Craft and rigour",
        description: "We care about doing things well, not just doing them quickly.",
      },
      {
        title: "Quiet ambition",
        description: "We aim to build something significant without needing to be loud about it.",
      },
      {
        title: "Empathy and respect",
        description: "We work with founders, teams, and communities. Relationships matter.",
      },
      {
        title: "Ownership mentality",
        description: "Everyone who builds Saha should think and act like an owner.",
      },
    ],
  },

  closingCta: {
    heading: "This might be for you",
    description:
      "If what you have read resonates — even if you do not fit neatly into one of the profiles above — we would like to hear from you. Send a note explaining who you are and what draws you to Saha.",
    cta: { label: "Reach out", href: "/contact" },
  },
};

/* ── About ──────────────────────────────────── */

export const aboutPage = {
  hero: {
    eyebrow: "About Saha",
    headline: "Why Saha exists",
    subheadline:
      "Saha was founded on a simple observation: too many good Swiss businesses disappear not because they fail, but because their founders retire without a clear path forward.",
  },

  story: {
    heading: "The problem we set out to solve",
    paragraphs: [
      "Switzerland's economy is built on small and medium-sized enterprises. Many are profitable, well-managed businesses with loyal teams and strong local reputations. They form the backbone of communities across the country.",
      "But every year, thousands of these businesses face an uncertain future. Their founders — often the people who built them from nothing — reach retirement age with no succession plan. The options are often unsatisfying: sell to a large, impersonal acquirer; attempt a rushed handover to unprepared successors; or simply close.",
      "Saha was created to offer a better answer. We believe that strong, profitable, well-run businesses should not disappear because of a timing problem. They deserve an owner who will respect their history, support their teams, and carry them forward with seriousness and care.",
    ],
  },

  whyDifferentBuyer: {
    heading: "Why this segment needs a different buyer",
    paragraphs: [
      "Businesses below CHF 10m in revenue sit in a structural gap. They are too small for most institutional acquirers, who need larger deal sizes to justify their economics. They are too founder-dependent for passive investors, who lack the willingness or capability to manage a hands-on transition.",
      "And they are too important — to employees, customers, and communities — to simply disappear when no buyer appears. This segment does not need more capital. It needs a buyer model built for the specific complexity of smaller succession deals.",
    ],
  },

  approach: {
    heading: "Our approach",
    paragraphs: [
      "We acquire businesses with the intention of keeping them. This is not a financial strategy dressed up as stewardship — it is a genuine conviction that long-term ownership produces better outcomes for businesses, their people, and their communities.",
      "We provide each company with a structured transition, selective operating support, and the stability that comes from being part of something larger. In return, each business strengthens the whole — through shared knowledge, operating discipline, and the compounding advantages of a growing, permanent portfolio.",
    ],
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
      "Saha is in formation. We are assembling the initial team, engaging early acquisition targets, and structuring the capital base. This is deliberate — we believe the first acquisitions define the company, and we intend to get them right.",
      "We are building for the long term. Every decision is guided by a simple question: will this still make sense in twenty years?",
    ],
  },

  closingCta: {
    heading: "We welcome your interest",
    description:
      "Whether you are a founder, an investor, or someone who shares our vision — we would be glad to hear from you.",
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

  pathways: [
    {
      id: "founder",
      title: "I am a founder considering succession",
      description:
        "If you are thinking about the next chapter for your business, we would welcome a confidential, no-obligation conversation about how Saha might be the right fit.",
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
            "Preserving your team is central to our approach. We do not acquire businesses to cut costs or restructure headcount. Existing employees, roles, and working relationships are maintained through the transition and beyond. We invest in the team you have built.",
        },
        {
          question: "How long does the process take from first conversation to closing?",
          answer:
            "Every situation is different, but a typical process runs three to six months from initial conversation to completion. We move at a pace that works for you — there is no pressure to rush. The first conversation is confidential and carries no obligation.",
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
            "We focus on profitable, founder-led Swiss businesses generally below CHF 10 million in annual revenue. The most important factors are the quality of the business, the strength of the team, and whether the business can realistically function after the founder steps away.",
        },
      ],
    },
    {
      label: "For Investors",
      items: [
        {
          question: "What is Saha's investment structure?",
          answer:
            "Saha is a permanent holding company, not a traditional fund with a fixed life. Capital is deployed into acquisitions that are held indefinitely. Returns are generated through the long-term cash flows, organic growth, and compounding operational strength of the portfolio.",
        },
        {
          question: "How does Saha generate returns without exits?",
          answer:
            "Our returns come from the cash-generative nature of the businesses we acquire, reinvestment of free cash flow into new acquisitions, and the organic growth of each company over time. The absence of exit pressure allows decisions that optimise for long-term value rather than short-term metrics.",
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
          question: "Why focus on businesses below CHF 10m in revenue?",
          answer:
            "This segment is structurally underserved. Most institutional buyers, advisors, and datasets focus above CHF 10m — Deloitte's Swiss M&A reports, for example, define SMEs starting at that threshold. Below it, profitable succession-driven businesses exist in large numbers but lack a purpose-built buyer. That is the gap Saha is designed to fill.",
        },
      ],
    },
    {
      label: "For Builders & Team",
      items: [
        {
          question: "What kind of people does Saha look for?",
          answer:
            "We look for people who think in decades, care about craft, and want to build something that endures. Relevant backgrounds include operations, finance, M\u0026A, general management, and technology — but disposition and alignment matter more than a specific title or pedigree.",
        },
        {
          question: "Is Saha hiring for specific roles right now?",
          answer:
            "We are at the formation stage — before first acquisition. We are always open to hearing from exceptional people. Even without a formal role, we welcome introductions from anyone who feels a strong alignment with what we are building.",
        },
        {
          question: "Where is Saha based?",
          answer:
            "Saha is based in Switzerland. Our team works across the country, close to the businesses we acquire and support. We value presence and proximity — being close to the teams and communities we serve.",
        },
      ],
    },
    {
      label: "General",
      items: [
        {
          question: "Why the name Saha?",
          answer:
            "Saha is a word rooted in patience, endurance, and the capacity to bear with care. It reflects the long-term mindset at the heart of everything we do — acquiring and stewarding businesses not for a cycle, but for a generation.",
        },
        {
          question: "Is Saha a fund or a company?",
          answer:
            "Saha is a permanent holding company. Unlike a fund, there is no predetermined exit timeline. Businesses we acquire become part of the Saha family permanently. This structure aligns our incentives with the long-term health of every company we own.",
        },
        {
          question: "How many businesses does Saha currently own?",
          answer:
            "Saha is in formation. We are deliberately building the foundation — team, processes, and capital — before making our first acquisitions. We believe that getting the model right is more important than moving quickly.",
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
      body: "When you contact us through this website, we collect only the information you voluntarily provide — such as your name, email address, and the content of your message. We do not use tracking cookies or third-party analytics on this site.",
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
  tagline: "A long-term buyer for Swiss businesses facing succession.",
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
        { label: "For Founders", href: "/founders" },
        { label: "For Investors", href: "/investors" },
        { label: "Join Saha", href: "/join" },
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
    title: "Saha — A long-term buyer for Swiss businesses facing succession",
    description:
      "Saha acquires profitable Swiss businesses below CHF 10m in revenue from retiring founders, structures careful transitions, and holds them for the long term.",
  },
  founders: {
    title: "For Founders — Saha",
    description:
      "Your business deserves a serious next chapter. Saha acquires and preserves founder-built Swiss businesses below CHF 10m with care, structure, and long-term commitment.",
  },
  investors: {
    title: "For Investors — Saha",
    description:
      "A disciplined acquisition model for the underserved segment of Swiss succession deals below CHF 10m. Permanent hold, structured transitions, compounding value.",
  },
  join: {
    title: "Join Saha — Build from the ground up",
    description:
      "Saha is at the formation stage, assembling a team to build a long-term ownership company for Swiss businesses. Deal, transition, operations, and finance roles.",
  },
  about: {
    title: "About Saha — Why we exist",
    description:
      "Too many good Swiss businesses disappear when their founders retire. Saha was created to provide a disciplined, long-term buyer for the underserved succession segment.",
  },
  contact: {
    title: "Contact Saha",
    description:
      "Start a conversation with Saha. Whether you are a founder, investor, or prospective team member — we would welcome hearing from you.",
  },
  faq: {
    title: "FAQ — Saha",
    description:
      "Answers to common questions about Saha from founders, investors, and prospective team members.",
  },
  privacy: {
    title: "Privacy Policy — Saha",
    description: "Saha's privacy policy and data handling practices.",
  },
  terms: {
    title: "Terms of Use — Saha",
    description: "Terms of use for the Saha website.",
  },
};
