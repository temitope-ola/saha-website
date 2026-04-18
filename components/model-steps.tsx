interface Step {
  number: string;
  title: string;
  description: string;
}

interface ModelStepsProps {
  steps: Step[];
}

export default function ModelSteps({ steps }: ModelStepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      {steps.map((step) => (
        <div key={step.number} className="flex gap-5">
          <span className="text-display-sm font-serif text-cuivre-200 select-none shrink-0 leading-none mt-0.5">
            {step.number}
          </span>
          <div>
            <h3 className="text-subheading font-serif text-encre mb-2">
              {step.title}
            </h3>
            <p className="text-body text-pierre">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
