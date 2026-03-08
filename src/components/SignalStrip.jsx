export function SignalStrip({ items }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-line/40 py-5">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-3 text-sm font-medium text-muted/80">
            {i > 0 && <span className="h-1 w-1 rounded-full bg-accent/40" aria-hidden="true" />}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
