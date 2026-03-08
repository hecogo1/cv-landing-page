export function Section({ id, eyebrow, title, intro, className = '', children }) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        {(eyebrow || title || intro) && (
          <header className="mb-12 max-w-3xl sm:mb-14">
            {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
            {title ? <h2 className="section-title">{title}</h2> : null}
            {intro ? <p className="muted-copy mt-5">{intro}</p> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
