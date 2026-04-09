import Link from "next/link";

interface AudienceCardProps {
  label: string;
  heading: string;
  description: string;
  cta: { label: string; href: string };
}

export default function AudienceCard({ label, heading, description, cta }: AudienceCardProps) {
  return (
    <div className="group flex flex-col p-8 md:p-10 bg-white border border-stone-200 rounded-sm hover:border-stone-300 transition-colors duration-300">
      <p className="text-caption font-sans font-medium text-stone-400 uppercase tracking-wider mb-3">
        {label}
      </p>
      <h3 className="text-heading font-serif text-stone-900 mb-4">
        {heading}
      </h3>
      <p className="text-body text-stone-600 mb-8 flex-1">
        {description}
      </p>
      <Link
        href={cta.href}
        className="text-body-sm text-stone-800 font-medium link-underline self-start"
      >
        {cta.label}
        <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
          &rarr;
        </span>
      </Link>
    </div>
  );
}
