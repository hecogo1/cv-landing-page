export function ImageSlot({
  src,
  alt,
  title,
  description,
  className = '',
  ratioClassName = 'aspect-[4/5]',
}) {
  return (
    <div className={`card-surface overflow-hidden ${className}`}>
      <div className={`relative overflow-hidden ${ratioClassName}`}>
        {src ? (
          <img className="h-full w-full object-cover" src={src} alt={alt} />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(63,90,86,0.24),_transparent_38%),linear-gradient(160deg,_rgba(255,255,255,0.72),_rgba(239,228,212,0.82)_48%,_rgba(217,227,223,0.7)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_transparent_0%,_transparent_52%,_rgba(175,123,79,0.12)_100%)]" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/60 bg-surface/88 p-4 shadow-[0_18px_40px_rgba(28,25,21,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent/80">Image slot</p>
              <p className="mt-2 text-base font-semibold text-ink">{title}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
