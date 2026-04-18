interface CalloutStatProps {
  type: "stat";
  value: string;
  caption: string;
  source?: string;
}

interface CalloutQuoteProps {
  type: "quote";
  text: string;
}

type CalloutBoxProps = CalloutStatProps | CalloutQuoteProps;

export default function CalloutBox(props: CalloutBoxProps) {
  return (
    <aside className="flex items-center h-full">
      <div className="border-l-2 border-cuivre/30 pl-8">
        {props.type === "stat" ? (
          <>
            <p className="text-display font-serif text-cuivre leading-none">
              {props.value}
            </p>
            <p className="mt-3 text-body text-pierre max-w-[260px]">
              {props.caption}
            </p>
            {props.source && (
              <p className="mt-2 text-[11px] text-pierre-fonce">
                {props.source}
              </p>
            )}
          </>
        ) : (
          <blockquote className="text-subheading font-serif text-encre italic max-w-[280px]">
            &ldquo;{props.text}&rdquo;
          </blockquote>
        )}
      </div>
    </aside>
  );
}
