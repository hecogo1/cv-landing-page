const styles = {
  primary:
    'inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
  secondary:
    'inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:border-accent/50 hover:bg-accent-soft/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink',
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
