"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqGroup {
  label: string;
  items: FaqItem[];
}

interface FaqAccordionProps {
  groups: FaqGroup[];
}

export default function FaqAccordion({ groups }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenIndex((prev) => (prev === id ? null : id));

  return (
    <div className="space-y-16">
      {groups.map((group) => (
        <div key={group.label}>
          <h2 className="text-caption font-sans font-medium text-accent-600 uppercase tracking-wider mb-6">
            {group.label}
          </h2>
          <div className="divide-y divide-stone-200 border-t border-stone-200">
            {group.items.map((item, i) => {
              const id = `${group.label}-${i}`;
              const isOpen = openIndex === id;

              return (
                <div key={id}>
                  <button
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                    onClick={() => toggle(id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${id}`}
                  >
                    <span className="text-body-lg font-serif text-stone-900 group-hover:text-accent-700 transition-colors">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 mt-1 text-stone-400 transition-transform duration-200",
                        isOpen && "rotate-45"
                      )}
                      aria-hidden="true"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      >
                        <line x1="10" y1="4" x2="10" y2="16" />
                        <line x1="4" y1="10" x2="16" y2="10" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${id}`}
                    role="region"
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      isOpen ? "max-h-96 pb-6" : "max-h-0"
                    )}
                  >
                    <p className="text-body text-stone-600 max-w-2xl leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
