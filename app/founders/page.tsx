import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionIntro from "@/components/section-intro";
import ProcessSteps from "@/components/process-steps";
import CtaBanner from "@/components/cta-banner";
import { foundersPage, metadata as siteMeta } from "@/content/site-copy";

export const metadata: Metadata = {
  title: siteMeta.founders.title,
  description: siteMeta.founders.description,
  openGraph: {
    title: siteMeta.founders.title,
    description: siteMeta.founders.description,
  },
};

export default function FoundersPage() {
  return (
    <>
      <PageHero
        eyebrow={foundersPage.hero.eyebrow}
        headline={foundersPage.hero.headline}
        subheadline={foundersPage.hero.subheadline}
      />

      {/* ── We understand what is at stake ── */}
      <section className="section-padding">
        <div className="container-content">
          <SectionIntro heading={foundersPage.intro.heading} />
          <div className="max-w-prose space-y-5">
            {foundersPage.intro.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we look for ──────────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={foundersPage.whatWeLookFor.heading}>
            <p className="text-body-lg text-stone-600">
              {foundersPage.whatWeLookFor.description}
            </p>
          </SectionIntro>
          <ul className="max-w-prose space-y-4">
            {foundersPage.whatWeLookFor.criteria.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-body-lg text-stone-600">
                <span className="text-warm-400 mt-1.5 shrink-0" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── What engaging with Saha looks like */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <SectionIntro heading={foundersPage.process.heading}>
            <p className="text-body-lg text-stone-600">
              {foundersPage.process.description}
            </p>
          </SectionIntro>
          <div className="max-w-2xl">
            <ProcessSteps steps={foundersPage.process.steps} />
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────── */}
      <CtaBanner
        heading={foundersPage.closingCta.heading}
        description={foundersPage.closingCta.description}
        cta={foundersPage.closingCta.cta}
      />
    </>
  );
}
