'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import type { Parche } from '@/lib/parches';
import { formatCOP } from '@/lib/parches';
import RiskBadge from './RiskBadge';

const CATEGORY_COLORS: Record<string, string> = {
  Nightlife:   '#D90429',
  Gastronomía: '#FFD166',
  Cultura:     '#00D964',
  Deporte:     '#00D964',
  Arte:        '#FFD166',
};

interface ParcheCardProps {
  parche: Parche;
  featured?: boolean;
}

export default function ParcheCard({ parche, featured = false }: ParcheCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 120, damping: 14 });
  const y = useSpring(rawY, { stiffness: 120, damping: 14 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - (rect.left + rect.width / 2)) * 0.07);
    rawY.set((e.clientY - (rect.top + rect.height / 2)) * 0.07);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  const tagColor = CATEGORY_COLORS[parche.categoria] ?? '#E5E5E5';

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      className="group"
    >
      <Link href={`/parches/${parche.slug}`} className="block">
        <div
          className={`
            relative overflow-hidden border-2 border-white/10 bg-[#111111]
            group-hover:border-[#D90429] group-hover:shadow-brutal-red
            transition-all duration-300
            ${featured ? 'h-[480px]' : 'h-[340px]'}
          `}
        >
          {/* Image */}
          <div className="relative w-full h-full overflow-hidden">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={parche.imagen}
                alt={parche.nombre}
                fill
                className="object-cover"
                sizes={featured ? '(max-width: 768px) 100vw, 55vw' : '(max-width: 768px) 100vw, 28vw'}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {/* Category */}
            <span
              className="inline-block px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wider border mb-2"
              style={{ color: tagColor, borderColor: tagColor, backgroundColor: `${tagColor}18`, fontFamily: "'Space Mono', monospace" }}
            >
              {parche.categoria}
            </span>

            <h3
              className="font-anton text-[#E5E5E5] leading-none mb-3 group-hover:text-[#D90429] transition-colors"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: featured ? 'clamp(1.4rem, 2.8vw, 2rem)' : 'clamp(1rem, 1.8vw, 1.35rem)',
              }}
            >
              {parche.nombre}
            </h3>

            {/* Financial metrics grid */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 border-t border-white/10 pt-3">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 font-mono uppercase tracking-widest" style={{ fontFamily: "'Space Mono', monospace" }}>
                  ROE
                </span>
                <span
                  className="text-sm font-mono font-bold tabular-nums"
                  style={{ color: parche.roe >= 75 ? '#00D964' : parche.roe >= 50 ? '#FFD166' : '#D90429', fontFamily: "'Space Mono', monospace" }}
                >
                  {parche.roe}%
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 font-mono uppercase tracking-widest" style={{ fontFamily: "'Space Mono', monospace" }}>
                  Capex
                </span>
                <span className="text-sm font-mono tabular-nums text-[#FFD166]" style={{ fontFamily: "'Space Mono', monospace" }}>
                  {formatCOP(parche.capex)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 font-mono uppercase tracking-widest" style={{ fontFamily: "'Space Mono', monospace" }}>
                  EBITDA
                </span>
                <span className="text-sm font-mono tabular-nums text-[#00D964]" style={{ fontFamily: "'Space Mono', monospace" }}>
                  {formatCOP(parche.ebitda)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 font-mono uppercase tracking-widest" style={{ fontFamily: "'Space Mono', monospace" }}>
                  Riesgo
                </span>
                <RiskBadge perfil={parche.perfilRiesgo} />
              </div>
            </div>

            {parche.tieneConsumoMinimo && (
              <div className="mt-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D90429] blink" />
                <span className="text-[10px] font-mono text-[#D90429] uppercase tracking-widest" style={{ fontFamily: "'Space Mono', monospace" }}>
                  Consumo mínimo
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
