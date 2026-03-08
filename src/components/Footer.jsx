export function Footer({ name, text, links }) {
  return (
    <footer className="border-t border-line/70 pb-8 pt-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:px-8 lg:px-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow mb-3">Footer</p>
          <p className="text-xl font-semibold text-ink">{name}</p>
          <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-muted">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors duration-200 hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
