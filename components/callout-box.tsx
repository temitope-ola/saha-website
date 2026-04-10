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
      <div className="border-l-2 border-accent-300 pl-8">
        {props.type === "stat" ? (
          <>
            <p className="text-display font-serif text-accent-600 leading-none">
              {props.value}
            </p>
            <p className="mt-3 text-body text-stone-500 max-w-[260px]">
              {props.caption}
            </p>
            {props.source && (
              <p className="mt-2 text-[11px] text-stone-400">
                {props.source}
              </p>
            )}
          </>
        ) : (
          <blockquote className="text-subheading font-serif text-stone-700 italic max-w-[280px]">
            &ldquo;{props.text}&rdquo;
          </blockquote>
        )}
      </div>
    </aside>
  );
}
