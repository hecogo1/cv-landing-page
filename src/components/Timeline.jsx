export function Timeline({ items }) {
  return (
    <ol className="relative border-l border-line/60 ml-3 space-y-0">
      {items.map((item, index) => (
        <li key={index} className="relative pl-8 pb-8 last:pb-0 group">
          {/* Dot on the line */}
          <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_var(--color-canvas)]" />

          {/* Year badge */}
          <span className="mb-1 inline-block text-[0.75rem] font-semibold uppercase tracking-wide text-muted">
            {item.year}
          </span>

          {/* Title + org */}
          <h3 className="text-[0.9375rem] font-semibold leading-snug text-ink">
            {item.title}
            {item.org && (
              <span className="font-normal text-muted"> · {item.org}</span>
            )}
          </h3>

          {/* Description */}
          {item.desc && (
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {item.desc}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
