import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CTAButton } from './CTAButton';

export function NavBar({ brand, links, cvUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="panel px-5 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="min-w-0">
              <span className="block truncate text-sm font-semibold uppercase tracking-[0.24em] text-muted/80">
                Personal website
              </span>
              <span className="mt-1 block text-base font-semibold text-ink sm:text-lg">{brand}</span>
            </a>
            <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="hidden md:block">
              <CTAButton href={cvUrl} variant="secondary">
                Download CV
              </CTAButton>
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/80 text-ink md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                {isOpen ? (
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.8"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.8"
                  />
                )}
              </svg>
            </button>
          </div>
          <AnimatePresence>
            {isOpen ? (
              <motion.nav
                id="mobile-navigation"
                className="mt-4 border-t border-line/70 pt-4 md:hidden"
                aria-label="Mobile navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-2xl px-3 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:bg-canvas/70 hover:text-ink"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                  <CTAButton href={cvUrl} variant="secondary" className="mt-2">
                    Download CV
                  </CTAButton>
                </div>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
