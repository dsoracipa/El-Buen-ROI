'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const SCRAMBLE_MS = 350;
const SETTLE_MS = 700;

function useScrambleCountUp(target: number, active: boolean): number {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    if (!active || firedRef.current) return;
    firedRef.current = true;
    startRef.current = null;

    const tick = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;

      if (elapsed < SCRAMBLE_MS) {
        setValue(Math.round(Math.random() * target * 1.5));
        rafRef.current = requestAnimationFrame(tick);
      } else if (elapsed < SETTLE_MS) {
        const p = (elapsed - SCRAMBLE_MS) / (SETTLE_MS - SCRAMBLE_MS);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(target * eased));
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, target]);

  return value;
}

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedNumber({ value, suffix = '', className = '', style }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -5% 0px' });
  const animated = useScrambleCountUp(value, isInView);

  return (
    <span ref={ref} className={className} style={style}>
      {animated}{suffix}
    </span>
  );
}
