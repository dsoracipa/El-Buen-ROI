'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { parches } from '@/lib/parches';
import ParcheCard from './ParcheCard';
import PruebaAcidaToggle from './PruebaAcidaToggle';
import ScrollReveal from './ScrollReveal';

export default function BentoGrid() {
  const [pruebaAcida, setPruebaAcida] = useState(false);

  const displayed = pruebaAcida
    ? parches.filter((p) => !p.tieneConsumoMinimo)
    : parches;

  const [featured, ...rest] = displayed;

  return (
    <section id="parches" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      {/* Header row */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
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
          <PruebaAcidaToggle active={pruebaAcida} onToggle={() => setPruebaAcida((v) => !v)} />
        </div>
      </ScrollReveal>

      {/* Prueba ácida notice */}
      <AnimatePresence>
        {pruebaAcida && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mb-6"
          >
            <div className="border border-[#00D964]/30 bg-[#00D964]/5 px-4 py-3 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#00D964] blink shrink-0" />
              <p className="text-xs font-mono text-[#00D964]" style={{ fontFamily: "'Space Mono', monospace" }}>
                Prueba Ácida activa — mostrando solo parches sin consumo mínimo. Liquidez real garantizada.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
