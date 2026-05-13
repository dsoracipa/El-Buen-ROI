'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  initial: { opacity: 0, y: 14 },
  enter:   { opacity: 1, y: 0,  transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -14, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main key={pathname} variants={variants} initial="initial" animate="enter" exit="exit">
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
