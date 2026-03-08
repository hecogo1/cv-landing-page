import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 640);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.a
          href="#top"
          className="fixed bottom-5 right-5 z-30 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line/50 bg-surface text-ink shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-colors hover:bg-accent hover:text-white"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="m12 19 0-14M6.5 10.5 12 5l5.5 5.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
