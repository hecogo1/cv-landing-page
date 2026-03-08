import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  amount = 0.28,
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.55, delay, ease: [0.21, 1, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}
