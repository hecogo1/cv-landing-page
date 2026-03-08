const icons = {
  workflow: (
    <path
      d="M6 7h12m-9 5h9M6 17h7m5-9 3 3-3 3M6 18l-3-3 3-3"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  bridge: (
    <path
      d="M5 18c0-4.4 2.7-7 7-7s7 2.6 7 7M8 11V8.5A3.5 3.5 0 0 1 11.5 5h1A3.5 3.5 0 0 1 16 8.5V11"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  tooling: (
    <path
      d="M14.5 5.5a3.5 3.5 0 0 0-4.2 4.5l-5.1 5.1 1.8 1.8 5.1-5.1a3.5 3.5 0 1 0 2.4-6.3ZM16 16l3 3"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  enablement: (
    <path
      d="M12 5v8m0 0 3-3m-3 3-3-3M6 17.5A2.5 2.5 0 0 1 8.5 15h7A2.5 2.5 0 0 1 18 17.5V19H6v-1.5Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
};

export function ValueCard({ icon, title, text, variant = 'light' }) {
  const isDark = variant === 'dark';

  return (
    <article className={`group h-full rounded-2xl p-7 sm:p-8 transition-all duration-300 ${
      isDark
        ? 'border border-white/10 bg-white/[0.06] hover:bg-white/[0.1]'
        : 'card-surface'
    }`}>
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${
        isDark
          ? 'bg-white/10 text-white group-hover:bg-white/20'
          : 'bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white'
      }`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          {icons[icon]}
        </svg>
      </div>
      <h3 className={`mt-5 text-lg font-semibold tracking-tight ${isDark ? 'text-white' : 'text-ink'}`}>{title}</h3>
      <p className={`mt-3 text-[0.9375rem] leading-[1.8] ${isDark ? 'text-white/65' : 'text-muted'}`}>{text}</p>
    </article>
  );
}
