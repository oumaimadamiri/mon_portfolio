import { useReducedMotion } from "framer-motion";

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, amount: 0.2 },
};

export const cardItem = {
  initial: { opacity: 0, y: 20, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const REDUCED = { initial: false, animate: { opacity: 1 }, transition: { duration: 0 } };

export function useMotionSafe() {
  const reduce = useReducedMotion();
  return (preset) => (reduce ? REDUCED : preset);
}
