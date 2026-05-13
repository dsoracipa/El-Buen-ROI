'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Bus, Cloud, SlidersHorizontal } from 'lucide-react';

export interface FiltrosState {
  pruebaAcida: boolean;
  sinTransporteCostoso: boolean;
  soloTechado: boolean;
}

export const FILTROS_INITIAL: FiltrosState = {
  pruebaAcida: false,
  sinTransporteCostoso: false,
  soloTechado: false,
};

// Umbral: capexTransporte >= 12000 COP se considera "costoso"
export const UMBRAL_TRANSPORTE = 12000;

interface FilterRowProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  active: boolean;
  onToggle: () => void;
  accentColor?: string;
}

function FilterRow({ icon, label, description, active, onToggle, accentColor = '#00D964' }: FilterRowProps) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={active}
      className="flex items-center gap-3 w-full text-left group cursor-pointer select-none py-3 px-4 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
    >
      {/* Toggle switch */}
      <div
        className="relative w-12 h-6 border-2 shrink-0 transition-colors duration-300"
        style={{
          borderColor: active ? accentColor : 'rgba(229,229,229,0.2)',
          backgroundColor: active ? `${accentColor}18` : 'transparent',
        }}
      >
        <motion.div
          className="absolute top-0.5 w-4 h-4 border"
          animate={{ x: active ? 22 : 2 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          style={{
            backgroundColor: active ? accentColor : 'rgba(229,229,229,0.5)',
            borderColor: active ? accentColor : 'rgba(229,229,229,0.5)',
          }}
        />
      </div>

      {/* Icon + text */}
      <div
        className="shrink-0 transition-colors duration-300"
        style={{ color: active ? accentColor : 'rgba(229,229,229,0.35)' }}
      >
        {icon}
      </div>

      <div className="flex-1 min-w-0">
        <span
          className="block text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 truncate"
          style={{ color: active ? accentColor : 'rgba(229,229,229,0.55)', fontFamily: "'Space Mono', monospace" }}
        >
          {label}
        </span>
        <span
          className="block text-[10px] font-mono mt-0.5 truncate"
          style={{ color: 'rgba(229,229,229,0.28)', fontFamily: "'Space Mono', monospace" }}
        >
          {description}
        </span>
      </div>

      {/* Active indicator */}
      <AnimatePresence>
        {active && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="shrink-0 text-[9px] font-mono font-bold px-1.5 py-0.5 border"
            style={{ color: accentColor, borderColor: accentColor, backgroundColor: `${accentColor}12`, fontFamily: "'Space Mono', monospace" }}
          >
            ON
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

interface FiltrosAvanzadosProps {
  filtros: FiltrosState;
  onChange: (key: keyof FiltrosState) => void;
}

export default function FiltrosAvanzados({ filtros, onChange }: FiltrosAvanzadosProps) {
  const activeCount = Object.values(filtros).filter(Boolean).length;

  return (
    <div className="border border-white/10 bg-[#0A0A0A] min-w-[260px]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={12} className="text-white/40" />
          <span
            className="text-[10px] font-mono uppercase tracking-widest text-white/40"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Filtros avanzados
          </span>
        </div>
        <AnimatePresence>
          {activeCount > 0 && (
            <motion.span
              key={activeCount}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-[#D90429] text-white tabular-nums"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {activeCount} activo{activeCount > 1 ? 's' : ''}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Filter rows */}
      <FilterRow
        icon={<FlaskConical size={13} />}
        label="Prueba Ácida"
        description="Excluye consumos mínimos obligatorios"
        active={filtros.pruebaAcida}
        onToggle={() => onChange('pruebaAcida')}
        accentColor="#00D964"
      />
      <FilterRow
        icon={<Bus size={13} />}
        label="Sin transporte costoso"
        description={`Excluye capex transp. ≥ $${(UMBRAL_TRANSPORTE / 1000).toFixed(0)}k`}
        active={filtros.sinTransporteCostoso}
        onToggle={() => onChange('sinTransporteCostoso')}
        accentColor="#FFD166"
      />
      <FilterRow
        icon={<Cloud size={13} />}
        label="Solo techado"
        description="Excluye planes con riesgo de clima"
        active={filtros.soloTechado}
        onToggle={() => onChange('soloTechado')}
        accentColor="#FF6B35"
      />
    </div>
  );
}
