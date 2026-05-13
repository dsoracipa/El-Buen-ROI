'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { parches } from '@/lib/parches';
import ParcheCard from './ParcheCard';
import FiltrosAvanzados, { FiltrosState, FILTROS_INITIAL, UMBRAL_TRANSPORTE } from './FiltrosAvanzados';
import ScrollReveal from './ScrollReveal';

const FILTER_BANNERS: {
  key: keyof FiltrosState;
  color: string;
  message: string;
}[] = [
  {
    key: 'pruebaAcida',
    color: '#00D964',
    message: 'Prueba Ácida activa — mostrando solo parches sin consumo mínimo. Liquidez real garantizada.',
  },
  {
    key: 'sinTransporteCostoso',
    color: '#FFD166',
    message: `Transporte filtrado — excluyendo parches con capex de transporte ≥ $${(UMBRAL_TRANSPORTE / 1000).toFixed(0)}k COP.`,
  },
  {
    key: 'soloTechado',
    color: '#FF6B35',
    message: 'Riesgo climático filtrado — mostrando solo parches bajo techo.',
  },
];

export default function BentoGrid() {
  const [filtros, setFiltros] = useState<FiltrosState>(FILTROS_INITIAL);

  const toggleFiltro = useCallback((key: keyof FiltrosState) => {
    setFiltros((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const displayed = parches.filter((p) => {
    if (filtros.pruebaAcida && p.tieneConsumoMinimo) return false;
    if (filtros.sinTransporteCostoso && p.capexTransporte >= UMBRAL_TRANSPORTE) return false;
    if (filtros.soloTechado && p.esExterior) return false;
    return true;
  });

  const [featured, ...rest] = displayed;

  return (
    <section id="parches" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      {/* Header row */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h2
              className="font-anton text-5xl md:text-7xl text-[#E5E5E5] leading-none"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              ANÁLISIS DE
            </h2>
            <h2
              className="font-anton text-5xl md:text-7xl text-[#D90429] leading-none"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              INVERSIÓN
            </h2>
          </div>
          <FiltrosAvanzados filtros={filtros} onChange={toggleFiltro} />
        </div>
      </ScrollReveal>

      {/* Active filter banners */}
      <div className="flex flex-col gap-2 mb-6">
        <AnimatePresence>
          {FILTER_BANNERS.filter((b) => filtros[b.key]).map((b) => (
            <motion.div
              key={b.key}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div
                className="px-4 py-3 flex items-center gap-3 border"
                style={{
                  borderColor: `${b.color}30`,
                  backgroundColor: `${b.color}08`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full blink shrink-0"
                  style={{ backgroundColor: b.color }}
                />
                <p
                  className="text-xs font-mono"
                  style={{ color: b.color, fontFamily: "'Space Mono', monospace" }}
                >
                  {b.message}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        {displayed.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20 border border-dashed border-white/10"
          >
            <p className="font-mono text-white/30 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
              Sin activos disponibles con los filtros actuales.
            </p>
          </motion.div>
        ) : (
          <motion.div key="grid" layout className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featured && (
              <motion.div layout key={featured.slug} className="md:row-span-2">
                <ScrollReveal delay={0.05}>
                  <ParcheCard parche={featured} featured />
                </ScrollReveal>
              </motion.div>
            )}
            {rest.slice(0, 4).map((p, i) => (
              <motion.div layout key={p.slug}>
                <ScrollReveal delay={0.1 + i * 0.07}>
                  <ParcheCard parche={p} />
                </ScrollReveal>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
