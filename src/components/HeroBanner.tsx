'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import MagneticButton from './MagneticButton';
import Link from 'next/link';

// ── Ticker data ───────────────────────────────────────────
const TICKER_ITEMS = [
  { label: 'CICLOVÍA',       value: '+98 ROE', up: true  },
  { label: 'ZONA ROSA',      value: '+62 ROE', up: true  },
  { label: 'SPEAKEASY UQN',  value: '-22 NOI', up: false },
  { label: 'PALOQUEMAO',     value: '+85 ROE', up: true  },
  { label: 'GRAFITI TOUR',   value: '+91 ROE', up: true  },
  { label: 'TEATR. CAND.',   value: '+89 ROE', up: true  },
  { label: 'CAPEX PROMEDIO', value: '$41.900', up: null  },
];

// ── Title stagger variants ────────────────────────────────
const titleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
};
const titleLine = {
  hidden:  { y: '105%', opacity: 0 },
  visible: { y: '0%', opacity: 1, transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.85 } },
};

const TITLE_LINES = [
  { text: 'EL BUEN', color: '#E5E5E5' },
  { text: 'ROI',     color: '#D90429' },
];

export default function HeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const parallaxY = useSpring(rawY, { stiffness: 80, damping: 22, restDelta: 0.001 });

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{
          y: parallaxY,
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        {/* Grid overlay for terminal feel */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(229,229,229,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(229,229,229,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Sub-label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center gap-2 mb-6 border border-white/15 px-3 py-1.5 bg-[#0A0A0A]/60"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D964] blink" />
          <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest" style={{ fontFamily: "'Space Mono', monospace" }}>
            Análisis de inversión — Bogotá, Colombia
          </span>
        </motion.div>

        {/* Staggered title */}
        <motion.div variants={titleContainer} initial="hidden" animate="visible">
          {TITLE_LINES.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                variants={titleLine}
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontSize: 'clamp(5rem, 16vw, 13rem)',
                  color: line.color,
                  lineHeight: 0.9,
                  letterSpacing: '-0.01em',
                }}
              >
                {line.text}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-base md:text-lg font-mono text-white/50 max-w-md"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Maximiza cada peso en la calle.
          <br />
          <span className="text-white/30">Métricas reales. Sin filtros. Sin consumos mínimos ocultos.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex gap-4 flex-wrap justify-center"
        >
          <Link href="/#parches">
            <MagneticButton
              className="bg-[#D90429] text-white px-8 py-3 font-mono font-bold text-sm uppercase tracking-widest border-2 border-[#D90429] shadow-[4px_4px_0px_0px_#FFD166] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              strength={0.22}
              as="div"
            >
              Ver Portafolio
            </MagneticButton>
          </Link>
          <Link href="/#calculadora">
            <MagneticButton
              className="bg-transparent text-[#E5E5E5] px-8 py-3 font-mono font-bold text-sm uppercase tracking-widest border-2 border-white/30 shadow-[4px_4px_0px_0px_rgba(229,229,229,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              strength={0.22}
              as="div"
            >
              Calcular ROI
            </MagneticButton>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.6 }}
      >
        <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>
          scroll
        </span>
        <motion.div
          className="w-px h-10 bg-[#D90429]"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', transformOrigin: 'top' }}
        />
      </motion.div>

      {/* Ticker bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0A0A0A]/80 py-2 overflow-hidden">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-6 px-6 shrink-0">
              <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest" style={{ fontFamily: "'Space Mono', monospace" }}>
                {item.label}
              </span>
              <span
                className="text-[11px] font-mono font-bold"
                style={{
                  color: item.up === true ? '#00D964' : item.up === false ? '#D90429' : '#FFD166',
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                {item.up === true ? '▲' : item.up === false ? '▼' : '◆'} {item.value}
              </span>
              <span className="text-white/10">|</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
