"use client";

import { useState } from "react";

interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "url" | "textarea";
  required: boolean;
}

interface Pathway {
  id: string;
  title: string;
  description: string;
  fields: Field[];
}

interface ContactPathwaysProps {
  pathways: Pathway[];
  initialPathway?: string | null;
  submitLabel?: string;
  selectPrompt?: string;
  thankYouHeading?: string;
  thankYouDescription?: string;
  sendAnother?: string;
}

export default function ContactPathways({
  pathways,
  initialPathway,
  submitLabel = "Send message",
  selectPrompt = "Select how you would like to connect with us above.",
  thankYouHeading = "Thank you for reaching out",
  thankYouDescription = "We have received your message and will be in touch soon.",
  sendAnother = "Send another message",
}: ContactPathwaysProps) {
  const [selected, setSelected] = useState<string | null>(initialPathway ?? null);
  const [submitted, setSubmitted] = useState(false);

  const activePathway = pathways.find((p) => p.id === selected);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h3 className="text-heading font-serif text-encre mb-4">
          {thankYouHeading}
        </h3>
        <p className="text-body-lg text-pierre max-w-md mx-auto">
          {thankYouDescription}
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setSelected(null);
          }}
          className="mt-8 btn-secondary"
        >
          {sendAnother}
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Pathway selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {pathways.map((pathway) => (
          <button
            key={pathway.id}
            onClick={() => setSelected(pathway.id)}
            className={`text-left p-6 border rounded-sm transition-all duration-200 ${
              selected === pathway.id
                ? "border-cuivre bg-papier shadow-sm"
                : "border-cuivre/10 bg-papier hover:border-cuivre/40"
            }`}
            aria-pressed={selected === pathway.id}
          >
            <h3 className="text-body-lg font-medium text-encre mb-2">
              {pathway.title}
            </h3>
            <p className="text-body text-pierre line-clamp-2">
              {pathway.description}
            </p>
          </button>
        ))}
      </div>

      {/* Form area */}
      {activePathway ? (
        <div className="max-w-xl">
          <p className="text-body text-pierre mb-8">
            {activePathway.description}
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            {activePathway.fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={`${activePathway.id}-${field.name}`}
                  className="block text-body-sm font-medium text-encre mb-1.5"
                >
                  {field.label}
                  {field.required && (
                    <span className="text-cuivre ml-0.5" aria-label="required">*</span>
                  )}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={`${activePathway.id}-${field.name}`}
                    name={field.name}
                    required={field.required}
                    className="textarea-field"
                    rows={4}
                  />
                ) : (
                  <input
                    id={`${activePathway.id}-${field.name}`}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    className="input-field"
                  />
                )}
              </div>
            ))}
            <div className="pt-4">
              <button type="submit" className="btn-primary">
                {submitLabel}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-body-lg text-pierre">
            {selectPrompt}
          </p>
        </div>
      )}
    </div>
  );
}
