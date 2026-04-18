import Link from "next/link";

interface AudienceCardProps {
  label: string;
  heading: string;
  description: string;
  cta: { label: string; href: string };
}

export default function AudienceCard({ label, heading, description, cta }: AudienceCardProps) {
  return (
    <div className="group flex flex-col p-8 md:p-10 bg-white border border-stone-200 rounded-sm hover:border-cuivre/40 transition-colors duration-300">
      <p className="eyebrow mb-3">
        {label}
      </p>
      <h3 className="text-heading font-serif text-encre mb-4">
        {heading}
      </h3>
      <p className="text-body text-pierre mb-8 flex-1">
        {description}
      </p>
      <Link
        href={cta.href}
        className="text-body-sm text-cuivre-700 font-medium link-underline self-start"
      >
        {cta.label}
        <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
          &rarr;
        </span>
      </Link>
    </div>
  );
}
