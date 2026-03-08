const styles = {
  primary:
    'inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-canvas transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink',
  secondary:
    'inline-flex items-center justify-center rounded-full border border-line bg-surface/80 px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink',
  text: 'text-link px-1 py-2',
};

export function CTAButton({ href, children, variant = 'primary', className = '' }) {
  const isExternal = href?.startsWith('http');
  const isMail = href?.startsWith('mailto:');

  return (
    <a
      href={href}
      className={`${styles[variant]} ${className}`}
      target={isExternal && !isMail ? '_blank' : undefined}
      rel={isExternal && !isMail ? 'noreferrer' : undefined}
    >
      <span>{children}</span>
      {variant === 'text' ? <span aria-hidden="true">↗</span> : null}
    </a>
  );
}
