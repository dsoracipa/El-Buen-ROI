'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { parches, formatCOP } from '@/lib/parches';
import RiskBadge from './RiskBadge';
import { TrendingUp, AlertTriangle } from 'lucide-react';

const MIN_BUDGET = 10000;
const MAX_BUDGET = 200000;

export default function ParcheCalculator() {
  const [presupuesto, setPresupuesto] = useState(80000);

  const portafolio = useMemo(
    () =>
      parches
        .filter((p) => p.capex <= presupuesto)
        .sort((a, b) => b.roe - a.roe),
    [presupuesto]
  );

  const capitalRestante = presupuesto - (portafolio[0]?.capex ?? 0);
  const pct = ((presupuesto - MIN_BUDGET) / (MAX_BUDGET - MIN_BUDGET)) * 100;

  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-end gap-4 mb-10 flex-wrap">
        <h2
          className="font-anton text-5xl md:text-6xl text-[#E5E5E5] leading-none"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          CALCULADORA DE
        </h2>
        <h2
          className="font-anton text-5xl md:text-6xl text-[#00D964] leading-none"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          PORTAFOLIO
        </h2>
      </div>

      <div className="border-2 border-white/10 bg-[#111111] p-6 md:p-8">
        {/* Slider */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-mono uppercase tracking-widest text-white/50" style={{ fontFamily: "'Space Mono', monospace" }}>
              Capital disponible
            </label>
            <span
              className="font-mono text-2xl font-bold tabular-nums"
              style={{ color: '#00D964', fontFamily: "'Space Mono', monospace" }}
            >
              {formatCOP(presupuesto)}
            </span>
          </div>

          <div className="relative">
            {/* Progress fill */}
            <div
              className="absolute top-1/2 left-0 h-1 bg-[#00D964]/40 -translate-y-1/2 pointer-events-none transition-all duration-100"
              style={{ width: `${pct}%` }}
            />
            <input
              type="range"
              min={MIN_BUDGET}
              max={MAX_BUDGET}
              step={5000}
              value={presupuesto}
              onChange={(e) => setPresupuesto(Number(e.target.value))}
              className="relative z-10 w-full"
            />
          </div>

          <div className="flex justify-between mt-1">
            <span className="text-[10px] font-mono text-white/30" style={{ fontFamily: "'Space Mono', monospace" }}>{formatCOP(MIN_BUDGET)}</span>
            <span className="text-[10px] font-mono text-white/30" style={{ fontFamily: "'Space Mono', monospace" }}>{formatCOP(MAX_BUDGET)}</span>
          </div>
        </div>

        {/* Summary bar */}
        <div className="grid grid-cols-3 gap-4 border border-white/10 p-4 mb-8 bg-[#0A0A0A]">
          <div className="text-center">
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>Parches disponibles</p>
            <p className="font-mono text-xl font-bold text-[#00D964]" style={{ fontFamily: "'Space Mono', monospace" }}>{portafolio.length}</p>
          </div>
          <div className="text-center border-x border-white/10">
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>Mejor ROE</p>
            <p className="font-mono text-xl font-bold" style={{ color: '#00D964', fontFamily: "'Space Mono', monospace" }}>
              {portafolio[0] ? `${portafolio[0].roe}%` : '—'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>Capital sin asignar</p>
            <p
              className="font-mono text-xl font-bold tabular-nums"
              style={{ color: capitalRestante >= 0 ? '#00D964' : '#D90429', fontFamily: "'Space Mono', monospace" }}
            >
              {formatCOP(capitalRestante >= 0 ? capitalRestante : 0)}
            </p>
          </div>
        </div>

        {/* Portfolio cards */}
        {portafolio.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-12 gap-3 border border-dashed border-white/10"
          >
            <AlertTriangle size={24} className="text-[#D90429]" />
            <p className="font-mono text-sm text-white/40 text-center" style={{ fontFamily: "'Space Mono', monospace" }}>
              Capital insuficiente para cualquier parche del portafolio.
              <br />Ajusta el slider hacia arriba.
            </p>
          </motion.div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {portafolio.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: -12 }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-white/10 bg-[#0A0A0A] p-4 flex flex-col gap-3"
                >
                  {/* Rank + name */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block" style={{ fontFamily: "'Space Mono', monospace" }}>
                        #{i + 1} por ROE
                      </span>
                      <p className="font-anton text-base text-[#E5E5E5] mt-0.5" style={{ fontFamily: 'Anton, sans-serif' }}>
                        {p.nombre}
                      </p>
                    </div>
                    <span
                      className="font-mono text-xl font-bold tabular-nums shrink-0"
                      style={{ color: p.roe >= 75 ? '#00D964' : p.roe >= 50 ? '#FFD166' : '#D90429', fontFamily: "'Space Mono', monospace" }}
                    >
                      {p.roe}%
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                    <div>
                      <span className="text-[10px] font-mono text-white/30 uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>Capex</span>
                      <p className="text-sm font-mono text-[#FFD166] tabular-nums" style={{ fontFamily: "'Space Mono', monospace" }}>{formatCOP(p.capex)}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-white/30 uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>EBITDA</span>
                      <p className="text-sm font-mono text-[#00D964] tabular-nums" style={{ fontFamily: "'Space Mono', monospace" }}>{formatCOP(p.ebitda)}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <RiskBadge perfil={p.perfilRiesgo} />
                    {p.tieneConsumoMinimo && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-[#D90429]" style={{ fontFamily: "'Space Mono', monospace" }}>
                        <span className="w-1 h-1 rounded-full bg-[#D90429] blink" />
                        Con. mín.
                      </span>
                    )}
                  </div>

                  {/* ROE bar */}
                  <div className="h-1 bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: p.roe >= 75 ? '#00D964' : p.roe >= 50 ? '#FFD166' : '#D90429' }}
                      initial={{ width: 0 }}
                      animate={{ width: `${p.roe}%` }}
                      transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {portafolio.length > 0 && (
          <div className="mt-6 flex items-center gap-2">
            <TrendingUp size={14} className="text-[#00D964]" />
            <span className="text-xs font-mono text-white/40" style={{ fontFamily: "'Space Mono', monospace" }}>
              Portafolio ordenado por mayor ROE. Ajusta el capital para rebalancear posiciones.
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
