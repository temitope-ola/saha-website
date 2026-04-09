/* ─────────────────────────────────────────────
 *  Saha — centralised copy
 *  Edit text here; the components pull from these objects.
 * ───────────────────────────────────────────── */

export const siteConfig = {
  name: "Saha",
  tagline: "Long-term ownership for Swiss businesses",
  url: "https://saha.ch",
  email: "hello@saha.ch",
  location: "Switzerland",
};

/* ── Navigation ─────────────────────────────── */

export const nav = {
  links: [
    { label: "For Founders", href: "/founders" },
    { label: "For Investors", href: "/investors" },
    { label: "Join Saha", href: "/join" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

/* ── Homepage ───────────────────────────────── */

export const homepage = {
  hero: {
    headline: "The long-term home for\nenduring Swiss businesses",
    subheadline:
      "Saha acquires founder-built Swiss companies, ensures stable transitions, and holds them for the long term. We exist so that strong businesses outlast any single chapter.",
    cta: { label: "Start a conversation", href: "/contact" },
    secondaryCta: { label: "How Saha works", href: "/about" },
  },

  whatWeAreBuildingSectionLabel: "What Saha is building",
  whatWeAreBuilding: {
    heading: "A new kind of ownership company",
    paragraphs: [
      "Across Switzerland, thousands of profitable, well-run businesses face a quiet crisis. Their founders are ready to retire, and there is no clear next chapter. Too often, the options are a trade sale to a distant acquirer, a rushed management buyout, or simply closing the doors.",
      "Saha is building a different path. We acquire healthy Swiss SMEs from retiring founders, provide structured transitions, and hold these businesses permanently. Over time, each company we steward benefits from shared operating support, and each acquisition strengthens the next.",
      "This is not a fund with an exit horizon. It is a long-term ownership company designed for continuity.",
    ],
  },

  whyNowSectionLabel: "Why this matters now",
  whyNow: {
    heading: "A generation of Swiss founders is approaching retirement",
    paragraphs: [
      "The succession gap in Swiss SMEs is structural and growing. Many profitable businesses — the backbone of local economies — have no succession plan. The founders who built them deserve better than a forced liquidation or a careless sale.",
      "Saha exists to provide the serious, respectful alternative these founders and their teams have been looking for.",
    ],
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
      heading: "Compounding value through permanent ownership",
      description:
        "Repeatable sourcing, structured transitions, shared operating support, and disciplined capital allocation — held for the long term. A model that grows stronger with each acquisition.",
      cta: { label: "Learn more", href: "/investors" },
    },
    {
      label: "For builders",
      heading: "Help build a new Swiss institution",
      description:
        "Saha is assembling a small, exceptional team of co-founders and operators who want to build something that endures. If you care about ownership, operations, and long-term value creation, this is a rare opportunity.",
      cta: { label: "Learn more", href: "/join" },
    },
  ],

  modelSectionLabel: "How the model works",
  model: {
    heading: "Acquire. Transition. Support. Hold.",
    steps: [
      {
        number: "01",
        title: "Source carefully",
        description:
          "We identify profitable, founder-led Swiss businesses — typically below CHF 10M in revenue — where succession is the primary reason for sale. We look for strong fundamentals, loyal teams, and enduring market positions.",
      },
      {
        number: "02",
        title: "Transition with care",
        description:
          "Each acquisition follows a structured transition process designed to preserve stability. We work closely with the retiring founder and management team to ensure continuity for employees, customers, and suppliers.",
      },
      {
        number: "03",
        title: "Support through shared services",
        description:
          "Our companies benefit from a shared operating layer — financial oversight, operational best practices, and administrative support — so local teams can focus on what they do best.",
      },
      {
        number: "04",
        title: "Hold for the long term",
        description:
          "We do not acquire businesses to sell them. Each company stays in the Saha family permanently. Over time, the portfolio compounds in value, knowledge, and operating strength.",
      },
    ],
  },

  differentiatorsSectionLabel: "What makes Saha different",
  differentiators: {
    heading: "Built to last, not to exit",
    items: [
      {
        title: "Permanent ownership",
        description:
          "No fund timeline. No exit pressure. Businesses stay in the Saha family for the long term.",
      },
      {
        title: "Founder-first approach",
        description:
          "We treat succession as a human process, not just a transaction. The founder's legacy, team, and values matter deeply.",
      },
      {
        title: "Repeatable and compounding",
        description:
          "Each acquisition improves our sourcing, transition capabilities, and operating support. The model strengthens with scale.",
      },
      {
        title: "Swiss focus",
        description:
          "Deep knowledge of the Swiss SME landscape, local business culture, and the regulatory environment.",
      },
    ],
  },

  finalCta: {
    heading: "The next chapter starts with a conversation",
    description:
      "Whether you are a founder considering succession, an investor seeking long-term alignment, or a builder looking for meaningful work — we would welcome hearing from you.",
    cta: { label: "Get in touch", href: "/contact" },
  },
};

/* ── For Founders ───────────────────────────── */

export const foundersPage = {
  hero: {
    eyebrow: "For Founders",
    headline: "You built something worth preserving",
    subheadline:
      "When the time comes to step back, your business — and the people who depend on it — deserves more than an uncertain transition. Saha was created to provide that certainty.",
  },

  intro: {
    heading: "We understand what is at stake",
    paragraphs: [
      "Selling a business you built from nothing is not just a financial decision. It is personal. Your name is on it. Your team trusts you. Your customers rely on the standards you set.",
      "Saha was built by people who understand this. Our model is designed to honour what you created — by preserving it, supporting it, and carrying it forward with the same seriousness you brought to building it.",
    ],
  },

  whatWeLookFor: {
    heading: "What we look for",
    description: "Saha is a good fit for businesses that share these characteristics:",
    criteria: [
      "Profitable and established — typically founder-led for many years",
      "Revenue generally below CHF 10 million",
      "Succession or retirement is the primary reason for considering a sale",
      "Strong team in place or potential for one",
      "Enduring market position within Switzerland",
      "A founder who cares about what happens next",
    ],
  },

  process: {
    heading: "What engaging with Saha looks like",
    description:
      "There is no pressure and no obligation at any step. We move at a pace that feels right for you.",
    steps: [
      {
        title: "An introductory conversation",
        description:
          "We begin with a confidential, no-obligation conversation to understand your business, your goals, and your timeline.",
      },
      {
        title: "Getting to know each other",
        description:
          "If there is mutual interest, we spend time understanding your business more deeply — its operations, team, customers, and culture.",
      },
      {
        title: "A fair and transparent offer",
        description:
          "We present a clear, straightforward proposal. No aggressive negotiation tactics. No last-minute surprises.",
      },
      {
        title: "A structured transition",
        description:
          "We work with you to ensure a smooth handover — at the pace and depth that works best for your team and your customers.",
      },
      {
        title: "Ongoing stewardship",
        description:
          "After the transition, your business becomes part of the Saha family. We provide long-term support, not short-term extraction.",
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
    headline: "Long-term value through permanent ownership",
    subheadline:
      "Saha acquires profitable Swiss SMEs, provides structured transitions, and holds them permanently. The model compounds over time — in operational strength, sourcing advantage, and portfolio value.",
  },

  thesis: {
    heading: "The investment thesis",
    paragraphs: [
      "Switzerland has thousands of profitable, founder-led SMEs facing a growing succession gap. These businesses are often well-run, cash-generative, and deeply embedded in their local markets — yet they trade at modest valuations because the buyer pool for small, succession-driven deals remains thin.",
      "Saha is purpose-built to capture this opportunity. By acquiring these businesses at fair valuations, applying structured transitions, and layering shared operating support, we create durable value without relying on financial engineering or aggressive growth assumptions.",
      "Because we hold permanently, our returns compound. Every acquisition makes the next one stronger — through better sourcing channels, refined transition processes, and deeper operational expertise.",
    ],
  },

  modelLogic: {
    heading: "Structural advantages",
    items: [
      {
        title: "Repeatable sourcing",
        description:
          "The succession-driven deal pipeline in Switzerland is large, growing, and underserved. As our reputation builds, proprietary deal flow increases.",
      },
      {
        title: "Disciplined entry valuations",
        description:
          "Succession-driven sales typically occur at reasonable multiples. Motivated sellers care about legacy and continuity as much as price.",
      },
      {
        title: "Structured transitions",
        description:
          "Our transition process is designed to reduce integration risk — preserving teams, customers, and operational continuity from day one.",
      },
      {
        title: "Shared operating support",
        description:
          "A central operating layer provides financial oversight, administrative capacity, and best-practice sharing across the portfolio without burdening individual companies.",
      },
      {
        title: "Permanent hold, compounding value",
        description:
          "No exit pressure means decisions are made for long-term health, not short-term optics. Portfolio value compounds through reinvestment and organic growth.",
      },
      {
        title: "Capital efficiency",
        description:
          "Cash-generative businesses fund future acquisitions, creating a virtuous cycle that reduces ongoing capital requirements over time.",
      },
    ],
  },

  whyDifferent: {
    heading: "Why Saha is different from a traditional fund",
    paragraphs: [
      "Most acquisition vehicles are built around a finite fund life — buy, improve, exit within a set horizon. That structure creates inherent tension between short-term performance and long-term business health.",
      "Saha's permanent hold model removes that tension. We acquire businesses to keep them. Our incentives are fully aligned with the long-term success of each company and the overall portfolio.",
    ],
  },

  closingCta: {
    heading: "Interested in learning more?",
    description:
      "We welcome conversations with investors who share our long-term perspective. If the model resonates, we would be glad to discuss it further.",
    cta: { label: "Investor enquiries", href: "/contact" },
  },
};

/* ── Join Saha ──────────────────────────────── */

export const joinPage = {
  hero: {
    eyebrow: "Join Saha",
    headline: "Build something that endures",
    subheadline:
      "Saha is assembling a small, exceptional team to build a new kind of ownership company in Switzerland. If you think in decades, care about craft, and want to build an institution — this is a rare opportunity.",
  },

  whyJoin: {
    heading: "Why build with Saha",
    paragraphs: [
      "Most professional opportunities are about optimising within existing structures. Saha is different. We are creating something new — a long-term ownership company that acquires, stewards, and grows Swiss businesses for generations.",
      "This is early. The foundational decisions — strategy, culture, systems, values — are being made now. The people who join at this stage will shape everything that follows.",
    ],
  },

  roles: {
    heading: "Who we are looking for",
    description:
      "We are not hiring for specific job titles. We are looking for people with the right disposition, skills, and ambition to build alongside us.",
    profiles: [
      {
        title: "Co-founders and partners",
        description:
          "Experienced operators, investors, or entrepreneurs who want to co-build the Saha model from the ground up. You bring deep expertise in at least one domain — M&A, operations, finance, or business leadership — and want to build an institution, not just a career.",
      },
      {
        title: "Operators and general managers",
        description:
          "People who can step into acquired businesses and lead them through transition and into their next chapter. You are adaptable, empathetic, commercially sharp, and comfortable with ambiguity.",
      },
      {
        title: "Platform builders",
        description:
          "People who can build the shared operating systems, processes, and infrastructure that support a growing family of businesses. Finance, HR, technology, or operations — the connective tissue of the model.",
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
      "Saha was created to offer a better answer. We believe that strong, profitable, well-run businesses should not disappear because of a timing problem. They deserve a permanent home — one that respects their history, supports their teams, and carries them forward with the same care that built them.",
    ],
  },

  approach: {
    heading: "Our approach",
    paragraphs: [
      "We acquire businesses with the intention of keeping them. This is not a financial strategy dressed up as stewardship — it is a genuine conviction that long-term ownership produces better outcomes for businesses, their people, and their communities.",
      "We provide each company with a structured transition, ongoing operating support, and the stability that comes from being part of something larger. In return, each business strengthens the whole — through shared knowledge, operational scale, and the compounding advantages of a growing, permanent portfolio.",
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

  vision: {
    heading: "The long view",
    paragraphs: [
      "We are building Saha to last. Not as a fund with a closing date, but as a permanent institution — one that acquires and stewards Swiss businesses for the next generation and beyond.",
      "It is early, and we are deliberate. Every business we acquire, every team member we bring on, every decision we make is guided by a simple question: will this still make sense in twenty years?",
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
        "If you are thinking about the next chapter for your business, we would welcome a confidential, no-obligation conversation about how Saha might be the right home.",
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
        "We welcome conversations with aligned, long-term investors who are interested in learning more about the Saha model.",
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

/* ── Footer ─────────────────────────────────── */

export const footer = {
  tagline: "Long-term ownership for Swiss businesses.",
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
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
    title: "Saha — Long-term ownership for Swiss businesses",
    description:
      "Saha acquires founder-built Swiss SMEs, ensures stable transitions, and holds them for the long term. A new kind of ownership company built for continuity.",
  },
  founders: {
    title: "For Founders — Saha",
    description:
      "Your business deserves a serious next chapter. Saha acquires and preserves founder-built Swiss companies with care, structure, and long-term commitment.",
  },
  investors: {
    title: "For Investors — Saha",
    description:
      "Compounding value through permanent ownership of Swiss SMEs. Repeatable sourcing, structured transitions, and disciplined long-term capital allocation.",
  },
  join: {
    title: "Join Saha — Build something that endures",
    description:
      "Saha is assembling a small, exceptional team to build a long-term ownership company in Switzerland. Co-founders, operators, and platform builders wanted.",
  },
  about: {
    title: "About Saha — Why we exist",
    description:
      "Too many good Swiss businesses disappear when their founders retire. Saha was created to provide continuity, stewardship, and a serious next chapter.",
  },
  contact: {
    title: "Contact Saha",
    description:
      "Start a conversation with Saha. Whether you are a founder, investor, or prospective team member — we would welcome hearing from you.",
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
