import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionIntro from "@/components/section-intro";
import ModelSteps from "@/components/model-steps";
import CtaBanner from "@/components/cta-banner";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = getDictionary((params.locale ?? "en") as Locale);
  return {
    title: dict.metadata.advisors.title,
    description: dict.metadata.advisors.description,
    openGraph: { title: dict.metadata.advisors.title, description: dict.metadata.advisors.description },
  };
}

export default function AdvisorsPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  const { advisorsPage } = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={advisorsPage.hero.eyebrow}
        headline={advisorsPage.hero.headline}
        subheadline={advisorsPage.hero.subheadline}
      />

      {/* ── We understand your position ──── */}
      <section className="section-padding">
        <div className="container-content">
          <SectionIntro heading={advisorsPage.understand.heading} />
          <div className="max-w-3xl space-y-5">
            {advisorsPage.understand.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-pierre">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you can expect from us ─── */}
      <section className="section-padding divider bg-cuivre-50/30">
        <div className="container-content">
          <SectionIntro heading={advisorsPage.expectations.heading} />
          <ModelSteps steps={advisorsPage.expectations.steps} />
        </div>
      </section>

      {/* ── How we think about your role ── */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro heading={advisorsPage.role.heading} />
          <div className="max-w-3xl space-y-5">
            {advisorsPage.role.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-pierre">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we look for ─────────────── */}
      <section className="section-padding divider bg-cuivre-50/30">
        <div className="container-content">
          <SectionIntro heading={advisorsPage.criteria.heading}>
            <p className="text-body-lg text-pierre">
              {advisorsPage.criteria.description}
            </p>
          </SectionIntro>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisorsPage.criteria.items.map((item) => (
              <div key={item.title} className="p-8 bg-white border border-stone-200 rounded-sm">
                <h3 className="text-subheading font-serif text-encre mb-3">
                  {item.title}
                </h3>
                <p className="text-body text-pierre">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-body text-pierre mt-8 max-w-prose">
            {advisorsPage.criteria.note}
          </p>
        </div>
      </section>

      {/* ── Confidentiality ──────────────── */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro heading={advisorsPage.confidentiality.heading} />
          <div className="max-w-3xl space-y-5">
            {advisorsPage.confidentiality.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-pierre">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Long-term relationship ────────── */}
      <section className="section-padding divider bg-cuivre-50/30">
        <div className="container-content">
          <SectionIntro heading={advisorsPage.longTerm.heading} />
          <div className="max-w-3xl space-y-5">
            {advisorsPage.longTerm.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-pierre">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────── */}
      <section className="section-padding divider">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h2 className="text-display-sm font-serif text-encre mb-4">
            {advisorsPage.closingCta.heading}
          </h2>
          <p className="text-body-lg text-pierre mb-8">
            {advisorsPage.closingCta.description}
          </p>
          <a
            href={localePath(locale, advisorsPage.closingCta.cta.href)}
            className="btn-primary inline-block"
          >
            {advisorsPage.closingCta.cta.label}
          </a>
          <p className="text-body text-pierre mt-6">
            {advisorsPage.closingCta.directContact}
          </p>
        </div>
      </section>
    </>
  );
}
