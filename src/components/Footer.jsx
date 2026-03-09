export function Footer({ name, text, links }) {
  return (
    <footer className="mt-12 bg-accent pb-10 pt-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:px-8 lg:px-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="text-lg font-bold text-canvas">{name}</p>
          <p className="mt-2 text-sm leading-relaxed text-canvas/70">{text}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-medium text-canvas/70">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors duration-200 hover:text-canvas">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
