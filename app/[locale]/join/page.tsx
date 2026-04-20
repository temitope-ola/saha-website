import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionIntro from "@/components/section-intro";
import ModelSteps from "@/components/model-steps";
import CtaBanner from "@/components/cta-banner";
import CalloutBox from "@/components/callout-box";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = getDictionary((params.locale ?? "en") as Locale);
  return {
    title: dict.metadata.join.title,
    description: dict.metadata.join.description,
    openGraph: { title: dict.metadata.join.title, description: dict.metadata.join.description },
  };
}

export default function JoinPage({ params }: { params: { locale: string } }) {
  const locale = (params.locale ?? "en") as Locale;
  const { joinPage } = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={joinPage.hero.eyebrow}
        headline={joinPage.hero.headline}
        subheadline={joinPage.hero.subheadline}
        cta={{
          label: joinPage.hero.cta.label,
          href: localePath(locale, joinPage.hero.cta.href),
        }}
      />

      {/* ── Why build with Saha ───────────── */}
      <section className="section-padding">
        <div className="container-content">
          <SectionIntro heading={joinPage.whyJoin.heading} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            <div className="space-y-5">
              {joinPage.whyJoin.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-pierre">
                  {p}
                </p>
              ))}
            </div>
            <CalloutBox {...joinPage.whyJoin.callout} />
          </div>
        </div>
      </section>

      {/* ── Open founding roles ───────────── */}
      <section className="section-padding divider bg-cuivre-50/30">
        <div className="container-content">
          <SectionIntro heading={joinPage.foundingRoles.heading} />
          <p className="text-body-lg text-pierre mb-10 max-w-prose">
            {joinPage.foundingRoles.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {joinPage.foundingRoles.roles.map((role) => (
              <div key={role.title} className="p-8 bg-papier border border-cuivre/10 rounded-sm">
                <h3 className="text-subheading font-serif text-encre mb-3">
                  {role.title}
                </h3>
                <p className="text-body text-pierre mb-6">
                  {role.description}
                </p>
                <Link
                  href={localePath(locale, role.ctaHref)}
                  className="text-body-sm text-cuivre-700 hover:text-cuivre-800 font-medium transition-colors"
                >
                  {role.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we are looking for ────────── */}
      <section className="section-padding divider">
        <div className="container-content">
          <SectionIntro heading={joinPage.roles.heading}>
            <p className="text-body-lg text-pierre">
              {joinPage.roles.description}
            </p>
          </SectionIntro>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {joinPage.roles.profiles.map((profile) => (
              <div key={profile.title} className="p-8 bg-papier border border-cuivre/10 rounded-sm">
                <h3 className="text-subheading font-serif text-encre mb-3">
                  {profile.title}
                </h3>
                <p className="text-body text-pierre">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we value ─────────────────── */}
      <section className="section-padding divider bg-cuivre-50/30">
        <div className="container-content">
          <SectionIntro heading={joinPage.values.heading} />
          <ModelSteps steps={joinPage.values.steps} />
        </div>
      </section>

      {/* ── Closing CTA ───────────────────── */}
      <CtaBanner
        heading={joinPage.closingCta.heading}
        description={joinPage.closingCta.description}
        cta={{ ...joinPage.closingCta.cta, href: localePath(locale, joinPage.closingCta.cta.href) }}
      />
    </>
  );
}
