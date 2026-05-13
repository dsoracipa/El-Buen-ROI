'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticButton from './MagneticButton';

const NAV_LINKS = [
  { href: '/#parches',      label: 'Análisis' },
  { href: '/#calculadora', label: 'Calculadora' },
];

export default function Navbar() {
  const [isPast, setIsPast] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsPast(latest > window.innerHeight * 0.88);
  });

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      animate={
        isPast
          ? { backgroundColor: 'rgba(10,10,10,0.80)', backdropFilter: 'blur(18px)', borderBottom: '1px solid rgba(229,229,229,0.08)' }
          : { backgroundColor: 'rgba(10,10,10,0)',    backdropFilter: 'blur(0px)',  borderBottom: '1px solid rgba(229,229,229,0)' }
      }
      transition={{ duration: 0.38, ease: 'easeOut' }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <span
          className="font-anton text-xl tracking-wider text-[#E5E5E5] group-hover:text-[#D90429] transition-colors"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          EL BUEN
        </span>
        <span
          className="font-mono text-xs font-bold px-1.5 py-0.5 border border-[#00D964] text-[#00D964] blink"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          ROI
        </span>
      </Link>

      {/* Nav links + CTA */}
      <div className="flex items-center gap-5">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="hidden md:block text-xs font-mono text-white/50 hover:text-white transition-colors uppercase tracking-widest"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            {l.label}
          </Link>
        ))}

        {/* Live badge */}
        <div className="hidden md:flex items-center gap-1.5 border border-white/10 px-2 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D964] blink" />
          <span className="text-[10px] font-mono text-[#00D964] uppercase tracking-widest" style={{ fontFamily: "'Space Mono', monospace" }}>
            Análisis en vivo
          </span>
        </div>

        <MagneticButton
          className="border border-[#D90429] text-[#D90429] px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#D90429] hover:text-white transition-colors"
          strength={0.2}
        >
          Suscríbete
        </MagneticButton>
      </div>
    </motion.nav>
  );
}
