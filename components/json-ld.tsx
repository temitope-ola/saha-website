/* ─────────────────────────────────────────────
 *  JSON-LD structured data components
 * ───────────────────────────────────────────── */

interface OrganizationSchemaProps {
  name: string;
  url: string;
  description: string;
  email: string;
  location: string;
}

export function OrganizationSchema({
  name,
  url,
  description,
  email,
  location,
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    description,
    email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CH",
      addressLocality: location,
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqGroup {
  label: string;
  items: FaqItem[];
}

export function FaqSchema({ groups }: { groups: FaqGroup[] }) {
  const allItems = groups.flatMap((g) => g.items);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    inLanguage: ["en", "fr", "de"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/faq`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
