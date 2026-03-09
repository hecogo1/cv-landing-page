import { useRef, useState, useEffect } from 'react';

export function Timeline({ items }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateArrows() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      if (el) el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, []);

  function scroll(dir) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 300, behavior: 'smooth' });
  }

  return (
    <div className="relative">
      {/* Scroll arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-surface border border-line/50 text-muted hover:text-ink hover:border-accent/40 transition-colors shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-surface border border-line/50 text-muted hover:text-ink hover:border-accent/40 transition-colors shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      )}

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide snap-x snap-mandatory"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative flex-shrink-0 w-56 snap-start rounded-lg border border-line/50 bg-surface/40 px-5 py-4 transition-colors hover:border-accent/30 hover:bg-surface/70"
          >
            {/* Year */}
            <span className="mb-1.5 inline-block text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-accent">
              {item.year}
            </span>

            {/* Title */}
            <h3 className="text-[0.9375rem] font-semibold leading-snug text-ink">
              {item.title}
            </h3>
            {item.org && (
              <p className="mt-0.5 text-[0.8125rem] text-muted">{item.org}</p>
            )}

            {/* Desc */}
            {item.desc && (
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted/80 line-clamp-3">
                {item.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
