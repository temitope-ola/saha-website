import Link from "next/link";

interface CtaBannerProps {
  heading: string;
  description: string;
  cta: { label: string; href: string };
}

export default function CtaBanner({ heading, description, cta }: CtaBannerProps) {
  return (
    <section className="section-padding">
      <div className="container-content">
        <div className="bg-nuit rounded-sm px-8 py-14 md:px-16 md:py-20 text-center border-t-2 border-cuivre/60">
          <h2 className="text-heading md:text-display-sm font-serif text-papier text-balance max-w-xl mx-auto">
            {heading}
          </h2>
          <p className="mt-5 text-body-lg text-cuivre-200 max-w-lg mx-auto text-balance">
            {description}
          </p>
          <div className="mt-10">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center px-7 py-3.5
                         bg-cuivre text-papier text-body-sm font-sans font-medium
                         rounded-sm tracking-wide
                         hover:bg-cuivre-400 active:bg-cuivre-700
                         transition-colors duration-200
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cuivre-300"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
