import Hero from "@/components/hero";
import SectionIntro from "@/components/section-intro";
import AudienceCard from "@/components/audience-card";
import ModelSteps from "@/components/model-steps";
import ValueGrid from "@/components/value-grid";
import CtaBanner from "@/components/cta-banner";
import { homepage } from "@/content/site-copy";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────── */}
      <Hero
        headline={homepage.hero.headline}
        subheadline={homepage.hero.subheadline}
        cta={homepage.hero.cta}
        secondaryCta={homepage.hero.secondaryCta}
      />

      {/* ── What Saha is building ─────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro
            label={homepage.whatWeAreBuildingSectionLabel}
            heading={homepage.whatWeAreBuilding.heading}
          />
          <div className="max-w-prose space-y-5">
            {homepage.whatWeAreBuilding.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
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
          <div className="max-w-prose space-y-5">
            {homepage.whyNow.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audience paths ────────────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {homepage.audiences.map((audience) => (
              <AudienceCard key={audience.label} {...audience} />
            ))}
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

      {/* ── Final CTA ─────────────────────── */}
      <CtaBanner
        heading={homepage.finalCta.heading}
        description={homepage.finalCta.description}
        cta={homepage.finalCta.cta}
      />
    </>
  );
}
