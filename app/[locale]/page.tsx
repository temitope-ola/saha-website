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
      <section className="pt-section-sm md:pt-section pb-0">
        <div className="container-content">
          <div>
            <p className="eyebrow mb-4">
              {homepage.hero.eyebrow}
            </p>
            <h1 className="text-display-sm md:text-display lg:text-display-lg text-balance">
              {homepage.hero.headline}
            </h1>
            <p className="mt-6 text-body-lg md:text-subheading text-pierre">
              {homepage.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={localePath(locale, homepage.hero.cta.href)}
                className="btn-primary"
              >
                {homepage.hero.cta.label} →
              </Link>
              <Link
                href={localePath(locale, homepage.hero.secondaryCta.href)}
                className="btn-secondary"
              >
                {homepage.hero.secondaryCta.label} →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Video loop ── */}
        <div className="mt-12 md:mt-16">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
            className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover"
          >
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ── What Saha is building ─────────── */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro
            label={homepage.whatWeAreBuildingSectionLabel}
            heading={homepage.whatWeAreBuilding.heading}
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {homepage.whatWeAreBuilding.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-pierre">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...homepage.whatWeAreBuilding.callout} />
          </div>
        </div>
      </section>

      {/* ── Why this matters now ──────────── */}
      <section className="section-padding divider bg-cuivre-50/30">
        <div className="container-content">
          <SectionIntro
            label={homepage.whyNowSectionLabel}
            heading={homepage.whyNow.heading}
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {homepage.whyNow.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-pierre">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...homepage.whyNow.callout} />
          </div>
        </div>
      </section>

      {/* ── Audience paths ────────────────── */}
      <section className="section-padding divider">
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
          <div className="mt-6 md:mt-8 p-8 md:p-10 bg-cuivre-50/30 border border-cuivre/10 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-subheading font-serif text-encre mb-2">
                {homepage.buildersStrip.heading}
              </h3>
              <p className="text-body text-pierre">
                {homepage.buildersStrip.description}
              </p>
            </div>
            <Link
              href={localePath(locale, homepage.buildersStrip.cta.href)}
              className="inline-flex items-center justify-center px-6 py-3
                         bg-nuit text-papier text-body-sm font-sans font-medium
                         rounded-sm tracking-wide shrink-0
                         hover:bg-nuit-deep active:bg-nuit-deep
                         transition-colors duration-200
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cuivre"
            >
              {homepage.buildersStrip.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ── How the model works ───────────── */}
      <section className="section-padding divider bg-cuivre-50/30">
        <div className="container-content">
          <SectionIntro
            label={homepage.modelSectionLabel}
            heading={homepage.model.heading}
          />
          <ModelSteps steps={homepage.model.steps} />
        </div>
      </section>

      {/* ── More than a buyer ─────────────── */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro
            label={homepage.moreThanBuyerSectionLabel}
            heading={homepage.moreThanBuyer.heading}
          />
          <p className="text-body-lg text-pierre max-w-prose mb-10">
            {homepage.moreThanBuyer.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homepage.moreThanBuyer.items.map((item) => (
              <div key={item.title} className="p-8 bg-papier border border-cuivre/10 rounded-sm">
                <h3 className="text-subheading font-serif text-encre mb-3">
                  {item.title}
                </h3>
                <p className="text-body text-pierre">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What makes Saha different ─────── */}
      <section className="section-padding divider bg-cuivre-50/30">
        <div className="container-content">
          <SectionIntro
            label={homepage.differentiatorsSectionLabel}
            heading={homepage.differentiators.heading}
          />
          <ModelSteps steps={homepage.differentiators.steps} />
        </div>
      </section>

      {/* ── Split final CTA ───────────────── */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Founders CTA */}
            <div className="bg-nuit rounded-sm px-8 py-12 md:px-12 md:py-14 border-t-2 border-cuivre/60">
              <h2 className="text-heading font-serif text-papier text-balance">
                {homepage.finalCtaFounders.heading}
              </h2>
              <p className="mt-4 text-body text-cuivre-200 text-balance">
                {homepage.finalCtaFounders.description}
              </p>
              <div className="mt-8">
                <Link
                  href={localePath(locale, homepage.finalCtaFounders.cta.href)}
                  className="inline-flex items-center justify-center px-7 py-3.5
                             bg-cuivre text-papier text-body-sm font-sans font-medium
                             rounded-sm tracking-wide
                             hover:bg-cuivre-400 active:bg-cuivre-700
                             transition-colors duration-200
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cuivre-300"
                >
                  {homepage.finalCtaFounders.cta.label}
                </Link>
              </div>
            </div>

            {/* Investors & operators CTA */}
            <div className="bg-nuit-deep rounded-sm px-8 py-12 md:px-12 md:py-14 border-t-2 border-cuivre/40">
              <h2 className="text-heading font-serif text-papier text-balance">
                {homepage.finalCtaOther.heading}
              </h2>
              <p className="mt-4 text-body text-cuivre-200 text-balance">
                {homepage.finalCtaOther.description}
              </p>
              <div className="mt-8">
                <Link
                  href={localePath(locale, homepage.finalCtaOther.cta.href)}
                  className="inline-flex items-center justify-center px-7 py-3.5
                             bg-cuivre text-papier text-body-sm font-sans font-medium
                             rounded-sm tracking-wide
                             hover:bg-cuivre-400 active:bg-cuivre-700
                             transition-colors duration-200
                             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cuivre-300"
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
