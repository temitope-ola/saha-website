interface SectionIntroProps {
  label?: string;
  heading: string;
  children?: React.ReactNode;
}

export default function SectionIntro({ label, heading, children }: SectionIntroProps) {
  return (
    <div className="mb-10 md:mb-14">
      {label && (
        <p className="text-caption font-sans font-medium text-accent-600 uppercase tracking-wider mb-4">
          {label}
        </p>
      )}
      <h2 className="text-heading md:text-display-sm text-balance max-w-2xl">
        {heading}
      </h2>
      {children && (
        <div className="mt-5 max-w-prose">
          {children}
        </div>
      )}
    </div>
  );
}
