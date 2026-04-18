import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionIntro from "@/components/section-intro";
import ProcessSteps from "@/components/process-steps";
import ModelSteps from "@/components/model-steps";
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
                <p key={i} className="text-body-lg text-pierre">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...foundersPage.intro.callout} />
          </div>
        </div>
      </section>

      {/* ── What founders can expect ─────── */}
      <section className="section-padding divider bg-cuivre-50/30">
        <div className="container-content">
          <SectionIntro heading={foundersPage.founderExpectations.heading} />
          <ModelSteps steps={foundersPage.founderExpectations.steps} />
        </div>
      </section>

      {/* ── What we look for ──────────────── */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro heading={foundersPage.whatWeLookFor.heading} />
          <p className="text-body-lg text-pierre mb-10 max-w-prose">
            {foundersPage.whatWeLookFor.transitionLine}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {foundersPage.whatWeLookFor.items.map((item) => (
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
        </div>
      </section>

      {/* ── What engaging with Saha looks like */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro heading={foundersPage.process.heading}>
            <p className="text-body-lg text-pierre">
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
