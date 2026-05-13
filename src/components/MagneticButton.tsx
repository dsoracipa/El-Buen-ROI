'use client';

import { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  as?: 'button' | 'div';
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.3,
  as = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    rawY.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  const Tag = as === 'div' ? motion.div : motion.button;

  return (
    <Tag
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`cursor-pointer select-none ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </Tag>
  );
}
