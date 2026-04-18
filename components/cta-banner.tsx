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
        <div className="bg-nuit text-stone-100 rounded-sm px-8 py-14 md:px-16 md:py-20 text-center border-t border-cuivre">
          <h2 className="text-heading md:text-display-sm font-serif text-papier text-balance max-w-xl mx-auto">
            {heading}
          </h2>
          <p className="mt-5 text-body-lg text-pierre max-w-lg mx-auto text-balance">
            {description}
          </p>
          <div className="mt-10">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center px-7 py-3.5
                         bg-papier text-encre text-body-sm font-sans font-medium
                         rounded-sm tracking-wide
                         hover:bg-white active:bg-stone-200
                         transition-colors duration-200
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cuivre"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
