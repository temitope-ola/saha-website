import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContactPathways from "@/components/contact-pathways";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = getDictionary((params.locale ?? "en") as Locale);
  return {
    title: dict.metadata.contact.title,
    description: dict.metadata.contact.description,
    openGraph: { title: dict.metadata.contact.title, description: dict.metadata.contact.description },
  };
}

export default function ContactPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams: { pathway?: string };
}) {
  const locale = (params.locale ?? "en") as Locale;
  const { contactPage } = getDictionary(locale);
  const initialPathway = searchParams.pathway ?? null;

  return (
    <>
      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        headline={contactPage.hero.headline}
        subheadline={contactPage.hero.subheadline}
      />

      <section className="section-padding">
        <div className="container-content">
          <ContactPathways pathways={contactPage.pathways} initialPathway={initialPathway} />
        </div>
      </section>
    </>
  );
}
