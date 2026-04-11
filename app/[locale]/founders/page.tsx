import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionIntro from "@/components/section-intro";
import ProcessSteps from "@/components/process-steps";
import ValueGrid from "@/components/value-grid";
import CtaBanner from "@/components/cta-banner";
import CalloutBox from "@/components/callout-box";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = getDictionary((params.locale ?? "en") as Locale);
  return {
    title: dict.metadata.founders.title,
    description: dict.metadata.founders.description,
    openGraph: { title: dict.metadata.founders.title, description: dict.metadata.founders.description },
  };
}

export default function FoundersPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  const { foundersPage } = getDictionary(locale);

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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {foundersPage.intro.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-stone-600">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...foundersPage.intro.callout} />
          </div>
        </div>
      </section>

      {/* ── What founders can expect ─────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={foundersPage.founderExpectations.heading} />
          <ValueGrid items={foundersPage.founderExpectations.items} />
        </div>
      </section>

      {/* ── What we look for ──────────────── */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <p className="text-body-lg text-stone-600 mb-8 max-w-prose">
            {foundersPage.whatWeLookFor.transitionLine}
          </p>
          <SectionIntro heading={foundersPage.whatWeLookFor.heading}>
            <p className="text-body-lg text-stone-600">
              {foundersPage.whatWeLookFor.description}
            </p>
          </SectionIntro>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <ul className="space-y-4">
              {foundersPage.whatWeLookFor.criteria.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-body-lg text-stone-600">
                  <span className="text-accent-400 mt-1.5 shrink-0" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <CalloutBox {...foundersPage.whatWeLookFor.callout} />
          </div>
        </div>
      </section>

      {/* ── Usually not a fit ─────────────── */}
      <section className="section-padding border-t border-stone-200 bg-stone-100/40">
        <div className="container-content">
          <SectionIntro heading={foundersPage.notAFit.heading}>
            <p className="text-body-lg text-stone-600">
              {foundersPage.notAFit.description}
            </p>
          </SectionIntro>
          <ul className="max-w-prose space-y-4">
            {foundersPage.notAFit.criteria.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-body-lg text-stone-600">
                <span className="text-stone-400 mt-1.5 shrink-0" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
          <ProcessSteps steps={foundersPage.process.steps} columns={2} />
        </div>
      </section>

      {/* ── Closing CTA ───────────────────── */}
      <CtaBanner
        heading={foundersPage.closingCta.heading}
        description={foundersPage.closingCta.description}
        cta={{ ...foundersPage.closingCta.cta, href: localePath(locale, foundersPage.closingCta.cta.href) }}
      />
    </>
  );
}
