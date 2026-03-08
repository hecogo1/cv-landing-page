export function SignalStrip({ items }) {
  return (
    <div className="mx-auto mt-8 w-full max-w-6xl px-6 sm:px-8 lg:px-12">
      <div className="panel px-5 py-5 sm:px-7">
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border border-line/80 bg-canvas/80 px-3.5 py-2 text-sm font-medium text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
