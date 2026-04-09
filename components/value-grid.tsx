interface ValueItem {
  title: string;
  description: string;
}

interface ValueGridProps {
  items: ValueItem[];
  columns?: 2 | 3;
}

export default function ValueGrid({ items, columns = 2 }: ValueGridProps) {
  const gridCols = columns === 3
    ? "grid-cols-1 md:grid-cols-3"
    : "grid-cols-1 md:grid-cols-2";

  return (
    <div className={`grid ${gridCols} gap-8 md:gap-10`}>
      {items.map((item) => (
        <div key={item.title}>
          <h3 className="text-subheading font-serif text-stone-900 mb-2">
            {item.title}
          </h3>
          <p className="text-body text-stone-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
