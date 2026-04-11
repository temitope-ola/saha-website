interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  columns?: 1 | 2;
}

export default function ProcessSteps({ steps, columns = 1 }: ProcessStepsProps) {
  return (
    <div className={columns === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0" : "space-y-0"}>
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="flex gap-6 md:gap-8 py-8 border-b border-stone-200 last:border-b-0 first:pt-0"
        >
          <span className="text-display-sm font-serif text-accent-300 select-none shrink-0 leading-none mt-0.5">
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
