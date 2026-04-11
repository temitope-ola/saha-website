import Hero from "@/components/hero";
import SectionIntro from "@/components/section-intro";
import AudienceCard from "@/components/audience-card";
import ModelSteps from "@/components/model-steps";
import ValueGrid from "@/components/value-grid";
import CtaBanner from "@/components/cta-banner";
import CalloutBox from "@/components/callout-box";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  const { homepage } = getDictionary(locale);

  return (
    <>
      {/* ── Hero ──────────────────────────── */}
      <Hero
        headline={homepage.hero.headline}
        openingLine={homepage.hero.openingLine}
        subheadline={homepage.hero.subheadline}
        cta={{ ...homepage.hero.cta, href: localePath(locale, homepage.hero.cta.href) }}
        secondaryCta={{ ...homepage.hero.secondaryCta, href: localePath(locale, homepage.hero.secondaryCta.href) }}
        // TODO: Replace senior-business.jpg with a more personal or Switzerland-specific image.
        // The current stock photo contradicts the human, trust-based tone of the site copy.
        // Options: a real photo of the founder, a Swiss landscape or business context, or a
        // carefully chosen editorial image that does not read as generic corporate stock.
        image={{
          src: "/senior-business.jpg",
          alt: locale === "fr"
            ? "Professionnels en discussion dans une salle de réunion"
            : locale === "de"
            ? "Geschäftsleute in einer Besprechung"
            : "Business professionals in a boardroom discussion",
        }}
      />

      {/* ── What Saha is building ─────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro
            label={homepage.whatWeAreBuildingSectionLabel}
            heading={homepage.whatWeAreBuilding.heading}
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {homepage.whatWeAreBuilding.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-stone-600">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...homepage.whatWeAreBuilding.callout} />
          </div>
        </div>
      </section>

      {/* ── Why this matters now ──────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro
            label={homepage.whyNowSectionLabel}
            heading={homepage.whyNow.heading}
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {homepage.whyNow.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-stone-600">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...homepage.whyNow.callout} />
          </div>
        </div>
      </section>

      {/* ── Audience paths ────────────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {homepage.audiences.map((audience) => (
              <AudienceCard
                key={audience.label}
                {...audience}
                cta={{ ...audience.cta, href: localePath(locale, audience.cta.href) }}
              />
            ))}
          </div>

          {/* ── Builders strip ── */}
          <div className="mt-6 md:mt-8 p-8 md:p-10 bg-stone-100/60 border border-stone-200 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-subheading font-serif text-stone-900 mb-2">
                {homepage.buildersStrip.heading}
              </h3>
              <p className="text-body text-stone-600">
                {homepage.buildersStrip.description}
              </p>
            </div>
            <Link
              href={localePath(locale, homepage.buildersStrip.cta.href)}
              className="inline-flex items-center justify-center px-6 py-3
                         bg-stone-900 text-stone-50 text-body-sm font-sans font-medium
                         rounded-sm tracking-wide shrink-0
                         hover:bg-stone-800 active:bg-stone-950
                         transition-colors duration-200
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400"
            >
              {homepage.buildersStrip.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ── How the model works ───────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro
            label={homepage.modelSectionLabel}
            heading={homepage.model.heading}
          />
          <ModelSteps steps={homepage.model.steps} />
        </div>
      </section>

      {/* ── More than a buyer ─────────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro
            label={homepage.moreThanBuyerSectionLabel}
            heading={homepage.moreThanBuyer.heading}
          />
          <p className="text-body-lg text-stone-600 max-w-prose mb-10">
            {homepage.moreThanBuyer.intro}
          </p>
          <ValueGrid items={homepage.moreThanBuyer.items} />
          <p className="mt-10 text-body-lg text-stone-600 text-center max-w-prose mx-auto">
            {homepage.moreThanBuyer.closingLine}
          </p>
        </div>
      </section>

      {/* ── What makes Saha different ─────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro
            label={homepage.differentiatorsSectionLabel}
            heading={homepage.differentiators.heading}
          />
          <ValueGrid items={homepage.differentiators.items} />
        </div>
      </section>

      {/* ── Split final CTA ───────────────── */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Founders CTA */}
            <div className="bg-stone-900 text-stone-100 rounded-sm px-8 py-12 md:px-12 md:py-14 border-t border-accent-400">
              <h2 className="text-heading font-serif text-stone-50 text-balance">
                {homepage.finalCtaFounders.heading}
              </h2>
              <p className="mt-4 text-body text-stone-400 text-balance">
                {homepage.finalCtaFounders.description}
              </p>
              <div className="mt-8">
                <Link
                  href={localePath(locale, homepage.finalCtaFounders.cta.href)}
                  className="inline-flex items-center justify-center px-7 py-3.5
                             bg-stone-50 text-stone-900 text-body-sm font-sans font-medium
                             rounded-sm tracking-wide
                             hover:bg-white active:bg-stone-200
                             transition-colors duration-200
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400"
                >
                  {homepage.finalCtaFounders.cta.label}
                </Link>
              </div>
            </div>

            {/* Investors & operators CTA */}
            <div className="bg-stone-800 text-stone-100 rounded-sm px-8 py-12 md:px-12 md:py-14 border-t border-stone-600">
              <h2 className="text-heading font-serif text-stone-50 text-balance">
                {homepage.finalCtaOther.heading}
              </h2>
              <p className="mt-4 text-body text-stone-400 text-balance">
                {homepage.finalCtaOther.description}
              </p>
              <div className="mt-8">
                <Link
                  href={localePath(locale, homepage.finalCtaOther.cta.href)}
                  className="inline-flex items-center justify-center px-7 py-3.5
                             bg-stone-50 text-stone-900 text-body-sm font-sans font-medium
                             rounded-sm tracking-wide
                             hover:bg-white active:bg-stone-200
                             transition-colors duration-200
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400"
                >
                  {homepage.finalCtaOther.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
