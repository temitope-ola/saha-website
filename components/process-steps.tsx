interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="space-y-0">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="flex gap-6 md:gap-8 py-8 border-b border-stone-200 last:border-b-0 first:pt-0"
        >
          <span className="text-caption font-sans font-medium text-stone-300 select-none shrink-0 mt-0.5 w-6 text-right">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-subheading font-serif text-stone-900 mb-2">
              {step.title}
            </h3>
            <p className="text-body text-stone-600 max-w-lg">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
