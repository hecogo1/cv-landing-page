export function Timeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-3 bottom-3 w-px bg-line md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
      <ol className="space-y-8 md:space-y-10">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <li
              key={item}
              className="relative grid gap-4 pl-10 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:pl-0"
            >
              <div className={`md:${isEven ? 'col-start-1 text-right' : 'col-start-3 text-left'}`}>
                <article className="card-surface p-5 sm:p-6">
                  <p className="eyebrow mb-3">{String(index + 1).padStart(2, '0')}</p>
                  <p className="text-base leading-7 text-ink sm:text-lg">{item}</p>
                </article>
              </div>
              <div className="absolute left-0 top-6 flex h-6 w-6 items-center justify-center md:static md:col-start-2 md:mx-auto">
                <span className="h-3.5 w-3.5 rounded-full border-4 border-canvas bg-accent shadow-[0_0_0_1px_rgba(214,204,191,1)]" />
              </div>
              <div className={`hidden md:block ${isEven ? 'col-start-3' : 'col-start-1'}`} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
