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
}

export default function ContactPathways({ pathways }: ContactPathwaysProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const activePathway = pathways.find((p) => p.id === selected);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h3 className="text-heading font-serif text-stone-900 mb-4">
          Thank you for reaching out
        </h3>
        <p className="text-body-lg text-stone-600 max-w-md mx-auto">
          We have received your message and will be in touch soon.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setSelected(null);
          }}
          className="mt-8 btn-secondary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Pathway selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {pathways.map((pathway) => (
          <button
            key={pathway.id}
            onClick={() => setSelected(pathway.id)}
            className={`text-left p-6 border rounded-sm transition-all duration-200 ${
              selected === pathway.id
                ? "border-stone-900 bg-white shadow-sm"
                : "border-stone-200 bg-white hover:border-stone-300"
            }`}
            aria-pressed={selected === pathway.id}
          >
            <h3 className="text-body font-medium text-stone-900 mb-2">
              {pathway.title}
            </h3>
            <p className="text-body-sm text-stone-500 line-clamp-2">
              {pathway.description}
            </p>
          </button>
        ))}
      </div>

      {/* Form area */}
      {activePathway ? (
        <div className="max-w-xl">
          <p className="text-body text-stone-600 mb-8">
            {activePathway.description}
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            {activePathway.fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={`${activePathway.id}-${field.name}`}
                  className="block text-body-sm font-medium text-stone-700 mb-1.5"
                >
                  {field.label}
                  {field.required && (
                    <span className="text-warm-400 ml-0.5" aria-label="required">*</span>
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
                Send message
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-body-lg text-stone-400">
            Select how you would like to connect with us above.
          </p>
        </div>
      )}
    </div>
  );
}
