import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionIntro from "@/components/section-intro";
import ValueGrid from "@/components/value-grid";
import CtaBanner from "@/components/cta-banner";
import { aboutPage, metadata as siteMeta } from "@/content/site-copy";

export const metadata: Metadata = {
  title: siteMeta.about.title,
  description: siteMeta.about.description,
  openGraph: {
    title: siteMeta.about.title,
    description: siteMeta.about.description,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        headline={aboutPage.hero.headline}
        subheadline={aboutPage.hero.subheadline}
      />

      {/* ── The problem we set out to solve ── */}
      <section className="section-padding">
        <div className="container-content">
          <SectionIntro heading={aboutPage.story.heading} />
          <div className="max-w-prose space-y-5">
            {aboutPage.story.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our approach ──────────────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={aboutPage.approach.heading} />
          <div className="max-w-prose space-y-5">
            {aboutPage.approach.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we believe ───────────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro heading={aboutPage.principles.heading} />
          <ValueGrid items={aboutPage.principles.items} />
        </div>
      </section>

      {/* ── The long view ─────────────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={aboutPage.vision.heading} />
          <div className="max-w-prose space-y-5">
            {aboutPage.vision.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────── */}
      <CtaBanner
        heading={aboutPage.closingCta.heading}
        description={aboutPage.closingCta.description}
        cta={aboutPage.closingCta.cta}
      />
    </>
  );
}
