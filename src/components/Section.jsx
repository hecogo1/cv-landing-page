export function Section({ id, eyebrow, title, intro, className = '', children }) {
  return (
    <section id={id} className={`relative py-16 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        {(eyebrow || title || intro) && (
          <header className="mb-10 max-w-2xl sm:mb-12">
            {eyebrow ? (
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-6 bg-accent" />
                <p className="eyebrow">{eyebrow}</p>
              </div>
            ) : null}
            {title ? <h2 className="section-title">{title}</h2> : null}
            {intro ? <p className="muted-copy mt-4">{intro}</p> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
