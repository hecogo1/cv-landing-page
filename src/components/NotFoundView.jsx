export function NotFoundView({ homeHref = '/' }) {
  return (
    <main className="flex min-h-screen items-center px-6 py-12 sm:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="panel p-8 sm:p-12">
          <p className="eyebrow mb-4">Single-page route safeguard</p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
            This path is outside the single-page site.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            The website is designed as one landing page. Return to the main page and use the sticky navigation to
            move between sections.
          </p>
          <a
            href={homeHref}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-canvas transition-colors duration-200 hover:bg-accent"
          >
            Go to homepage
          </a>
        </div>
      </div>
    </main>
  );
}
