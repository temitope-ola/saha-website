# Saha positioning, value prop, and model ambition — precise improvements

A set of concrete, drop-in changes to the live Saha copy informed by the Nexa comparative analysis. The goal is not to make Saha sound like Nexa. It is to keep Saha's trust-first, Swiss-sober voice while closing the two real gaps the analysis surfaces: a thin post-acquisition value-creation story and a weak category compressor.

Unless noted, the "current" copy is taken verbatim from `content/site-copy.ts` on the live site. File and object paths are given for each change so they can be applied directly.

---

## 1. Diagnosis in one page

What is already strong and should not be touched:

- Segment discipline. "Profitable, founder-led, below CHF 10M" is repeated consistently and coherently. That is a real asset.
- The 168,000-SME-by-2030 stat is stronger than the 100,000 figure in the Manus brief and should be retained.
- Founder-facing copy on identity preservation, team protection, no retrade, and "your involvement on your terms" is emotionally well-calibrated. Keep as is.
- The investor page already includes two intellectually honest sections that Nexa does not have an equivalent of — "What must be true for this model to work" and "What we will not buy." These are trust assets. Keep prominent.
- The `whyDifferent` investor section ("We acquire businesses to keep them. Our incentives are fully aligned…") is one of the cleanest sentences on the site. Keep.

The three real gaps:

1. The homepage's post-acquisition story collapses into a single humble line — step 3 of the model, "Provide support where it genuinely helps." Compared to Nexa's explicit "second-act" upgrade narrative, this reads as modesty rather than strategy. It is also inconsistent with what the investor page already promises — shared operating capabilities, leadership continuity, technology for internal efficiency, a compounding platform. The homepage is underselling what is written elsewhere on the site.
2. There is no category compressor. "Permanent acquirer," "Systematic succession," "Swiss permanent capital," and "long-term home" are all used, but none of them repeat. Nexa's "succession + talent + tech" is a formula people can retell. Saha needs one sentence it owns.
3. Leadership continuity and transferability are mentioned in five or six different places, each slightly differently worded, none of them named as a framework. They should be consolidated into two named capabilities — one filter, one practice — that appear identically across founders, advisors, and investors pages.

The rest of this memo addresses those three gaps and a few smaller adjustments.

---

## 2. The category compressor

The hero headline — *"Systematic succession for Swiss SMEs"* — is already the strongest positioning line on the site. It names a method (*systematic*), a problem (*succession*), and a market (*Swiss SMEs*) in five words, and it does category-creating work: it doesn't place Saha within an existing bucket (PE, search fund, holdco), it claims a new one. Keep that line as the hero. It is the defining claim.

What is missing is a repeatable trilogy — the three-word formula that answers Nexa's "succession + talent + tech" and gives investors, advisors, and prospective hires a rhythm they can retell.

Committed trilogy:

> **Time. Talent. Technology.**
> *A systematic succession system for Swiss small businesses.*

Three T's, 1-2-4 syllable cadence, and each word does structurally distinct work:

- **Time** names Saha's unfair advantage. Permanent capital is time. Funds don't have it. Search funds don't have it. Corporate acquirers don't have it. Saha does, and time is what makes permanent ownership of small businesses actually viable.
- **Talent** names the people — the founding team, the leaders Saha installs in acquired businesses, and the operators who steward the portfolio.
- **Technology** names the substrate — the proprietary platform that makes sourcing, diligence, transition, and portfolio reporting compound across every acquisition. With Stefan Vaninetti joining the founding team (IT architecture and data governance, progressive leadership at HOCH Health Ostschweiz), this claim is anchored in enterprise-grade Swiss systems experience — not AI-consulting-for-SMEs, which is Nexa's territory, but the platform substrate venture-style investors actually underwrite. See section 9 for how this is positioned and defended.

The subtitle is a restatement of the hero headline. That's intentional: the trilogy and the hero reinforce each other, rather than competing for the category claim.

Where to deploy:

- `siteConfig.tagline` — replace `"The permanent acquirer for Swiss businesses facing succession"` with `"Time. Talent. Technology. A systematic succession system for Swiss small businesses."` ("Permanent acquirer" is the one line of existing positioning copy that is unambiguously weaker than what it could be — it reduces Saha to the transaction.)
- `footer.tagline` — keep as-is: `"A long-term home for Swiss businesses facing succession."` Warmer than the trilogy and does a different job in the footer context.
- `metadata.home.title` — update to something like `"Saha — Time. Talent. Technology. A systematic succession system for Swiss small businesses."`
- **Homepage hero — do not change.** `"Systematic succession for Swiss SMEs"` is the defining line. The trilogy sits on the investor page, the About page, the tagline, and anywhere a repeatable three-word formula is useful — but the hero holds the category claim.
- Use the three words as a visual band on the investor page above the `howModelCompounds` section if the design allows.

---

## 3. Homepage — hero (keep the headline, sharpen the subhead)

**File path:** `content/site-copy.ts` → `homepage.hero`

**Keep the headline as-is.** `"Systematic succession for Swiss SMEs"` is the defining positioning line on the site. It creates a category (systematic succession) rather than placing Saha within an existing one, it names the market in the same breath, and it does this in five words. Any rewrite would weaken it. Earlier drafts of this memo proposed changing it — that was wrong.

**Optional subheadline sharpening** to carry the post-acquisition strengthening story without disturbing the headline:

```ts
hero: {
  eyebrow: "Swiss permanent capital",
  headline: "Systematic succession for\nSwiss SMEs",
  subheadline:
    "Saha acquires profitable, founder-led Swiss businesses below CHF 10M in revenue, transitions them with care, and strengthens them steadily for the long term — while building the sourcing, transition, and technology platform that make this segment work.",
  cta: { label: "Start a conversation", href: "/contact" },
  secondaryCta: { label: "What we look for", href: "/founders" },
},
```

Two small changes to the subheadline only:

- `"and grows them for the long term"` → `"transitions them with care, and strengthens them steadily for the long term"`. Makes transition and strengthening explicit — the two moves this memo is arguing Saha should foreground.
- `"the sourcing, transition, and operating system that make this segment work"` → `"the sourcing, transition, and technology platform that make this segment work"`. Replaces "operating system" (a metaphor) with "technology platform" (a substantive claim now anchored by Stefan — see section 9).

Leave the eyebrow, headline, and CTAs untouched.

---

## 4. Homepage — replace the humble step 3 with a real post-acquisition agenda

**File path:** `content/site-copy.ts` → `homepage.model.steps[2]`

This is the single highest-leverage change in the entire memo.

Current: "Provide support where it genuinely helps" — "Over time, our businesses can draw on shared capabilities — financial discipline, reporting, hiring support, process improvement, and operating guidance. But support is always selective. Local teams remain responsible for running and growing the business. We help where it is useful, not where it is convenient for us."

The content is fine but the framing is defensive — it tells the reader what Saha won't do more than what it will. A founder reads this and sees modesty; an investor reads it and sees no upgrade thesis.

Proposed:

```ts
{
  number: "03",
  title: "Strengthen the business steadily after the founder leaves",
  description:
    "Once the business is stable, we help it become measurably stronger over the following twelve to twenty-four months. That typically means sharper reporting and pricing discipline, digitised workflows for recurring processes, support on key hires, and capturing institutional knowledge that used to sit with the founder. Support is deliberate, not imposed — the local team stays responsible for running and growing the business. What compounds is the playbook: every transition teaches us more about what actually helps small Swiss businesses.",
},
```

Why: this mirrors the five concrete levers the Manus brief recommends (reporting, pricing, workflow digitisation, hiring, knowledge capture) but stays in Saha's register — "deliberate, not imposed," "measurably stronger," "twelve to twenty-four months." It also creates a direct bridge to the compounding story without repeating it.

---

## 5. Homepage — rename "More than a buyer" into the named framework it already is

**File path:** `content/site-copy.ts` → `homepage.moreThanBuyer`

The section already contains the four capabilities that make Saha more than a financial acquirer: systematic sourcing, leadership continuity, transition discipline, shared operating capabilities. But the label "More than a buyer" is passive — it defines Saha against something it isn't.

Proposed rename and restructure:

```ts
moreThanBuyerSectionLabel: "The Saha operating model",
moreThanBuyer: {
  heading: "Four capabilities that compound with every acquisition",
  intro:
    "A willing buyer is not enough for small-business succession. These companies need structured handover, leadership that survives the founder, operating support that is useful without being imposed, and a buyer that advisors can trust to behave well. Saha is being built around four capabilities designed to do exactly that — and to become sharper with every deal.",
  items: [
    {
      title: "Systematic sourcing",
      description:
        "Deal flow in Swiss SME succession is controlled by fiduciaries, Treuhänder, notaries, and local advisors. Saha is building the reputation and relationships that make us the buyer these intermediaries call first — because we treat their clients well, close with integrity, and never waste anyone's time.",
    },
    {
      title: "Leadership continuity",
      description:
        "When a founder steps back, the next leader determines whether the deal succeeds. Saha treats leadership continuity as a named capability: identify, evaluate, install, and support the right person — from within the existing team or brought in — so succession of ownership and succession of leadership are designed together, not sequenced.",
    },
    {
      title: "Transition discipline",
      description:
        "The handover is where most small-business deals succeed or fail. We treat it as a core discipline — structured, founder-specific, close-attention through the first twelve months, refined with every acquisition.",
    },
    {
      title: "Shared operating strength",
      description:
        "After the transition, businesses in the Saha family can draw on shared strength in finance, reporting, pricing, hiring, and technology for internal efficiency. Help that is selective, not imposed, and measured against whether it actually makes the business stronger.",
    },
  ],
  closingLine:
    "Each acquisition sharpens the playbook. Better advisor relationships. Better transition playbooks. Better leadership matches. Better operating templates for Swiss SMEs. That is how this segment becomes viable at scale.",
},
```

What changed:

- Section label moves from "More than a buyer" to "The Saha operating model." A name you can cite.
- Heading now telegraphs the compounding story up front.
- "Leadership continuity" item is rewritten as a four-step named capability (identify, evaluate, install, support). This is the concrete upgrade the Manus brief recommends and it appears for the first time on the homepage.
- "Shared operating capabilities" becomes "Shared operating strength" with the word "pricing" and "technology for internal efficiency" added — both previously only on the investor page. The homepage should be saying the same things as the investor page.
- Closing line concretises the compounding story in four visible nouns (advisor relationships, transition playbooks, leadership matches, operating templates) exactly as the brief recommends.

---

## 6. Homepage — sharpen the "why we exist" callout

**File path:** `content/site-copy.ts` → `homepage.whatWeAreBuilding.callout`

Current caption: "Swiss SMEs are expected to face succession by 2030 — yet only two thirds of those transfers are expected to conclude successfully"

Proposed caption: "Swiss SMEs expected to face succession by 2030. Roughly one in three of those transfers is expected to fail — not for lack of buyers, but for lack of a buyer model built for this segment."

Why: the current copy states the stat and the failure rate. The proposed version adds the causal claim — that the failure is model-shaped, not capital-shaped — which is the thesis of the whole site and what makes the number load-bearing rather than decorative.

---

## 7. Founders page — hero + the transferability/upgrade dual filter

**File path:** `content/site-copy.ts` → `foundersPage.hero`

Current headline: "You built a business worth\nhanding over well"

This is strong. Keep the headline. Sharpen the subheadline:

```ts
subheadline:
  "When the time comes to step back, your business deserves a buyer who takes continuity seriously and will actually make the company stronger over time — not flip it, not rebrand it, not dismantle it. Saha acquires profitable Swiss businesses in succession, works through the transition carefully, and stewards what you built for the long term.",
```

Why: adds "and will actually make the company stronger over time" without losing the trust-first tone. Founders who care about legacy care about this — they don't want their business frozen in amber, they want it to continue improving.

**File path:** `content/site-copy.ts` → `foundersPage.whatWeLookFor`

The current four items are: profitable and established, stable recurring demand, capable team beyond the founder, realistic path to handover. This is a transferability filter, but it isn't named as one. The Manus brief recommends adding a second dimension — upgrade potential — as a named pair.

Proposed: keep the four items and add a short framing paragraph above:

```ts
whatWeLookFor: {
  heading: "What makes a good fit",
  transitionLine:
    "We assess every business against two simple filters: whether it can genuinely continue beyond the founder (transferability), and whether there are specific ways we can help it become stronger in the first twelve to twenty-four months (upgrade potential). Both matter. A business that is transferable but has no room to improve is not enough; neither is a business with upside that cannot survive the founder's exit.",
  items: [ /* keep existing four items */ ],
},
```

This makes explicit what is currently implicit, matches Nexa's rigour on post-close improvement, and uses two words ("transferability," "upgrade potential") that can be referenced from the investors page and the FAQ for consistency.

---

## 8. Investors page — sharpen the hero and make compounding concrete

**File path:** `content/site-copy.ts` → `investorsPage.hero`

Current headline: "A permanent-hold strategy in an overlooked\nsegment of Swiss SME succession"

Proposed:

```ts
headline: "A permanent-hold strategy — with disciplined operational strengthening —\nin an overlooked segment of Swiss SME succession",
subheadline:
  "Saha targets profitable founder-led businesses where succession creates opportunity, transferability is real, and every acquired business can be measurably strengthened in the two years after close. The edge is not financial engineering. It is buying carefully, transitioning well, and building the operating capabilities that compound across a permanent portfolio.",
```

Why: the current hero promises discipline and compounding but not improvement. Adding "disciplined operational strengthening" to the headline and "measurably strengthened in the two years after close" to the subhead is the investor-facing version of the same shift made on the homepage. It is the difference between "we hold forever" and "we hold forever and keep improving what we hold."

**File path:** `content/site-copy.ts` → `investorsPage.mustBeTrue.steps[0]`

Current: "We must buy transferable businesses, not just cheap ones."

This already names transferability as a filter. Add the upgrade dimension as a second step (or fold it into the first). Proposed new step:

```ts
{
  number: "02",
  title: "Transferable is the floor; strengthenable is the ceiling",
  description:
    "A business that can survive the founder's exit is a viable acquisition. A business that can also be measurably strengthened in the twenty-four months after close is a good one. We filter for both — and walk away from businesses that fail either test, regardless of price.",
},
```

(The existing steps 02–05 renumber to 03–06.) This gives Saha its named "transferability + upgrade potential" framework exactly as the Manus brief recommends, but in the site's own voice.

**File path:** `content/site-copy.ts` → `investorsPage.howModelCompounds`

The current single long paragraph lists six compounding mechanisms (sourcing approach, transferability framework, leadership capability, operating playbook, shared capabilities, technology). Breaking them out makes the compounding claim visible rather than asserted.

Proposed: keep the two framing paragraphs and add a structured list:

```ts
howModelCompounds: {
  heading: "How the model compounds",
  paragraphs: [
    "Saha is not simply assembling a portfolio of small businesses. It is building the infrastructure that makes this segment acquirable, transitionable, and strengthenable at scale.",
    "Each acquisition makes the next one cheaper to source, faster to transition, and better supported. That is the compounding logic behind the model — and what separates Saha from a well-intentioned holding company with capital.",
  ],
  pillars: [
    {
      title: "Trusted-counterparty sourcing",
      description:
        "Reputation and relationships that make fiduciaries, Treuhänder, and local advisors call Saha first.",
    },
    {
      title: "Transferability framework",
      description:
        "A consistent filter for businesses capable of outlasting their founder — applied before price is ever discussed.",
    },
    {
      title: "Leadership-continuity capability",
      description:
        "A named practice for identifying, evaluating, installing, and supporting the right post-founder leader — internal or external — in every acquisition.",
    },
    {
      title: "Transition playbook that improves with every deal",
      description:
        "Structured handover, founder-specific, close attention through year one — refined with every acquisition.",
    },
    {
      title: "Selective shared capabilities",
      description:
        "Finance, reporting, pricing discipline, hiring support, and knowledge capture — available to portfolio businesses that choose to use them.",
    },
    {
      title: "Technology where it improves judgment",
      description:
        "Tools that sharpen sourcing, transferability assessment, and internal efficiency — never a substitute for the human trust succession requires.",
    },
  ],
  callout: {
    type: "stat" as const,
    value: "Long-term",
    caption: "Each acquisition strengthens the platform — sourcing, transition, leadership, and operations improve with every deal",
  },
},
```

This requires a small component change to render `pillars`, but the data structure matches the existing `items` pattern used elsewhere.

---

## 9. The technology layer — anchored by Stefan Vaninetti

With Stefan Vaninetti joining the founding team as Founder — Platform & Data, technology graduates from an implicit capability to one-third of Saha's defining identity. His background is enterprise-grade, Swiss, regulated, and multi-entity — precisely the profile that distinguishes Saha's technology claim from Nexa's AI-consulting-for-SMEs pitch.

**Proposed bio** for `aboutPage.foundingTeam.members` — matches the format and length of Temitope's and Liesel's existing bios:

```ts
{
  name: "Stefan Vaninetti",
  subtitle: "Founder — Platform & Data",
  description:
    "Brings deep expertise in IT architecture and data governance, built on a software engineering foundation and progressive leadership at HOCH Health Ostschweiz. His experience driving complex digital and enterprise IT transformations across a regulated, multi-entity Swiss organisation directly informs how Saha builds the internal platform that makes permanent ownership of many small businesses viable at scale — sourcing, diligence, transition, and portfolio reporting. Hands-on technical rigor paired with strategic vision and the patience systems at this scale require.",
},
```

**Reframe what "Technology" means for Saha.** Nexa positions tech as AI applied to acquired SMEs. Saha's version is different and, for venture-style investors, stronger: **the proprietary platform that makes permanent ownership of many small Swiss businesses viable at scale.** Four concrete components to name on the site:

1. **Sourcing intelligence.** Mapping the Swiss SME landscape below CHF 10M and surfacing succession signals earlier than advisor-only channels allow.
2. **Diligence workflow.** Standardising how Saha tests transferability, quality, and fit — consistent across every deal, refined with each acquisition.
3. **Transition tooling.** Structured handover playbooks, knowledge capture, and operational continuity systems that preserve what the founder built while stabilising the business.
4. **Portfolio reporting.** Data governance and reporting infrastructure that lets the holdco see across many businesses without imposing homogeneity on any of them.

This is enterprise IT architecture applied to permanent SME ownership — not consulting, not AI-for-SMEs. It is defensible, Swiss-toned, and directly aligned with what Stefan has done in his career.

**Update to the investor-page pillar.** Section 8 of this memo proposes six `pillars` in `howModelCompounds`. The sixth — originally `"Technology where it improves judgment"` — should now read:

```ts
{
  title: "A proprietary platform",
  description:
    "Internal systems — sourcing intelligence, diligence workflow, transition tooling, and portfolio reporting — led by Stefan Vaninetti, whose background is enterprise IT architecture and data governance across a multi-entity Swiss organisation. The platform makes permanent ownership of many small businesses viable at scale, and compounds with every acquisition.",
},
```

**Tone caution.** With a tech co-founder in place, the temptation is to let technology-forward language creep into the homepage hero, the founders page, and the advisors page. Resist it hard. Technology is one of three defining claims on the tagline and on the investor/About surfaces. It is *not* what founders, advisors, or the About narrative should lead with. The founder-facing register stays exactly as it is: care, continuity, permanence, stewardship. Stefan is the proof beneath an investor claim, not a headline.

The difference between Saha and Nexa, with Stefan on board, becomes sharp: Nexa brings AI to acquired SMEs; Saha brings enterprise-grade platform architecture to the holdco itself. Different promise, different audience, different proof anchor — and Saha's is more aligned with what long-horizon investors actually underwrite.

---

## 10. Advisors page — one small but meaningful tweak

**File path:** `content/site-copy.ts` → `advisorsPage.understand.paragraphs[2]`

Current: "Where the business requires leadership after the founder steps back, we work to identify and support the right person — from within the existing team or from outside — as part of how we structure every transition."

Proposed: add the named capability language so advisors have a consistent term:

> "Leadership continuity is a named capability at Saha — identify, evaluate, install, support. When the business needs a leader after the founder steps back, we work that problem from day one of the transition, not after it, and we are transparent with you throughout."

Why: advisors refer buyers they can describe in one sentence. A named capability they can explain to their client ("they have a leadership-continuity process — identify, evaluate, install, support") is more repeatable than a paragraph.

---

## 11. About page — add one sentence to the ambition paragraph

**File path:** `content/site-copy.ts` → `aboutPage.ambition`

Current: "Saha is being built not only as a holding company, but as a long-term model for small-business succession in Switzerland. We believe the reason this segment is underserved is not a lack of good businesses — it is the absence of a buyer with the infrastructure to make these deals work well. Building that infrastructure, gradually and with discipline, is what Saha is for."

Proposed addition at the end:

> "That infrastructure has four pieces — systematic sourcing, leadership continuity, transition discipline, and shared operating strength — and it is designed to sharpen with every acquisition we complete."

This directly ties the About page to the four-capability framework introduced on the homepage. The site starts to feel like one company instead of six pages.

---

## 12. FAQ — add one entry that addresses the Nexa gap head-on

**File path:** `content/site-copy.ts` → `faqPage.groups` — Founders group

Add:

```ts
{
  question: "What does Saha actually do to improve a business after acquisition?",
  answer:
    "In the first twelve to twenty-four months after we acquire a business, we focus on four deliberate areas: sharper reporting and pricing discipline, digitised workflows for recurring back-office processes, support on key hires when leadership needs reinforcement, and capturing the institutional knowledge that used to sit with the founder. Everything we do is selective and measured — the local team stays responsible for running and growing the business. We are not trying to transform it. We are trying to make it meaningfully stronger, and to keep it that way.",
},
```

Investors group — add:

```ts
{
  question: "How does Saha generate upside beyond holding good businesses?",
  answer:
    "Two ways. First, each acquired business is measurably strengthened in the twenty-four months after close — through reporting, pricing, workflow digitisation, hiring support, and knowledge capture. Second, the platform itself compounds: every acquisition sharpens our sourcing, transition, leadership, and operating capabilities, making the next deal cheaper to source, faster to transition, and better supported. Permanence is the structure; operational strengthening is the work.",
},
{
  question: "What role does technology play in Saha's model?",
  answer:
    "Technology at Saha is internal platform infrastructure, not consulting applied to acquired businesses. Stefan Vaninetti, our Founder for Platform & Data, brings IT architecture and data governance experience from HOCH Health Ostschweiz — the exact enterprise-grade, multi-entity systems experience this model requires. The platform covers sourcing intelligence, diligence workflow, transition tooling, and portfolio reporting, and it compounds with every acquisition. What it is not: AI deployed to the businesses we buy. Our acquired companies do not need to become technology companies. Saha is the one building the substrate that makes permanent ownership of many of them viable at scale.",
},
```

---

## 13. Summary — what changes, what stays

What changes:

- One committed trilogy — **Time. Talent. Technology.** with subtitle *"A systematic succession system for Swiss small businesses."* — deployed in the `siteConfig.tagline`, homepage metadata, and as a visual element on the investor page.
- Homepage hero headline **kept as-is** — "Systematic succession for Swiss SMEs" is the defining category line. Subhead sharpened to make post-acquisition strengthening and the technology platform explicit.
- Homepage model step 3 rewritten from humble support to a deliberate post-acquisition improvement agenda.
- "More than a buyer" renamed "The Saha operating model" with four named capabilities and a concrete compounding closing line.
- Founders page gains an explicit "transferability + upgrade potential" framing.
- Investors page hero, "must be true," and "how the model compounds" sections sharpen the upgrade and compounding stories.
- Leadership continuity elevated to a named four-step capability (identify, evaluate, install, support) — consistent across homepage, advisors, and investors pages.
- Technology elevated to a first-class claim, anchored by Stefan Vaninetti as Founder — Platform & Data. Platform positioned as internal infrastructure for the holdco, not AI for acquired SMEs.
- FAQ gains three entries addressing post-acquisition value creation and the role of technology directly.

What does not change:

- The Swiss focus, the below-CHF-10M discipline, the founder-trust tone, the permanent-hold structure, the willingness to say no, the refusal to retrade, the protection of teams.
- The "What we will not buy" section. The "Why different from a traditional fund" section. The 168,000 stat. The founder note. The advisor confidentiality stance.
- The quiet, careful, Swiss voice.

The intent is the one the Manus brief names: Saha evolves from "we will buy carefully and hold forever" to "we will buy carefully, transition expertly, install the right leader, and systematically strengthen the business over time" — without sounding like Nexa, and without losing the credibility that is Saha's most valuable current asset.

---

## Addendum — verified against the live Nexa site

After writing the above, I read the live nexapartners.ai homepage in full. The Manus brief was broadly accurate but missed three things that change the recommendations at the margin.

**What the brief missed:**

1. **Nexa is a search-fund platform, not a holding company.** The hero reads "launching search funds led by proven entrepreneurs." Their primary constituency is searchers — ambitious operators who will run the acquired business themselves. The site's main CTA is "Search with us." Saha is the opposite: a permanent holdco that recruits leaders into acquired businesses but does not launch them as entrepreneur-owners. These are genuinely different businesses, competing for different founders and different capital. The brief treated them as more symmetrical than they are.

2. **Nexa is German-focused, not pan-European.** Both headline stats are Germany-specific: "Only 20% of SMBs in Germany have a digitalization strategy" and "1,200,000 owners of SMEs in Germany are 60+." Saha's Swiss focus is not a constraint Nexa is pressuring — it is a non-overlapping market. The Swiss 168,000-by-2030 stat is a genuine competitive asset, not merely a narrower scope.

3. **Nexa's tech credibility comes from prior work, not from acquisitions.** The team stats — "20+ AI Projects with SMEs, 10+ Companies scaled, 7 Digital Ventures Sold" — are the founders' prior AI/digital consulting track record, not Nexa's own deal history. This is a clever way to credentialize AI claims without needing acquisitions to point to. Saha does not need to match this. Saha's credibility comes from a different source (Swiss acquisition and succession experience, the founder's prior exit).

**What this changes in the memo:**

- **Section 2 (category compressor) has since been resolved.** After iteration with the user, the committed trilogy is **Time. Talent. Technology.** — three T's, each word doing structurally distinct work (asset + people + substrate), anchored to the existing hero headline as its subtitle. See section 2 for the full rationale.

- **Section 9 (technology layer) has since been upgraded.** An earlier version of this addendum argued for a maximally restrained technology claim on the basis that Saha had no proof anchor. With Stefan Vaninetti joining the founding team as Founder — Platform & Data (IT architecture and data governance at HOCH Health Ostschweiz), the constraint is removed. Technology graduates from "one pillar among six" to "one of three defining claims" — but the positioning is intentionally different from Nexa's: platform infrastructure for the holdco, not AI applied to acquired SMEs. See section 9 for how this is defended and where the tone caution still applies.

- **New defensive point worth making on the homepage or About:** Nexa's site contains almost no language about the human side of succession — no "founder empathy," no "continuity of team," no "care through handover." A founder reading Nexa worried about the people they are leaving behind walks away uncertain. That is Saha's most defensible moat against the Nexa category, and it should be named once explicitly. Proposed addition to `homepage.whatWeAreBuilding.paragraphs`, as a short new sentence at the end of the third paragraph:

  > "This segment does not need more acquirers. It needs the right acquirer — one that treats the founder, the team, and the next chapter of the business with equal seriousness."

  This lands the contrast without naming a competitor.

- **New audience worth acknowledging: searchers.** Nexa's visible traction is partly on the talent side — named searchers, partnership-vs-solo stats, "Search with us" CTA. Saha's Join page has three profiles that are functional (deal, transition, finance) but generic. If Saha wants to attract ambitious operators who might otherwise look at a search fund, the Join page could benefit from one explicit sentence distinguishing the two paths — something like:

  > "Saha is not a search fund. We do not back individual searchers to buy and run a single business. We build a long-term home for many businesses, and we look for people who want to shape that home — not to own one company, but to help build the operating system that stewards many."

  This clarifies the offer for the exact operators Nexa is recruiting, without attacking them.

**The strategic posture, corrected:**

Saha's real competitor in the Swiss sub-CHF-10M succession segment is not Nexa. It is (a) the absence of a buyer at all, (b) local corporate acquirers who will dismantle or relocate the business, and (c) rushed handovers to unprepared family or staff. Nexa is useful as a *reference point* for what a more ambitious, upgrade-oriented succession model looks like — which is the whole point of this exercise. But the memo's recommendations should be applied to make Saha a more complete version of *itself*, not a Swiss version of Nexa. That is how the section-by-section changes above are framed, and reading the live Nexa site confirms that framing rather than changes it.
