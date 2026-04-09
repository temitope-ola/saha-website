interface QuoteBlockProps {
  quote: string;
  attribution?: string;
}

export default function QuoteBlock({ quote, attribution }: QuoteBlockProps) {
  return (
    <blockquote className="border-l-2 border-warm-300 pl-6 md:pl-8 py-2">
      <p className="text-subheading md:text-heading font-serif text-stone-700 italic text-balance">
        {quote}
      </p>
      {attribution && (
        <cite className="mt-4 block text-body-sm text-stone-400 not-italic">
          {attribution}
        </cite>
      )}
    </blockquote>
  );
}
