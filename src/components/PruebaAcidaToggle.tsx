'use client';

import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';

interface PruebaAcidaToggleProps {
  active: boolean;
  onToggle: () => void;
}

export default function PruebaAcidaToggle({ active, onToggle }: PruebaAcidaToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={active}
      className="flex items-center gap-3 group cursor-pointer select-none"
    >
      {/* Track */}
      <div
        className="relative w-14 h-7 border-2 transition-colors duration-300"
        style={{
          borderColor: active ? '#00D964' : 'rgba(229,229,229,0.25)',
          backgroundColor: active ? 'rgba(0,217,100,0.1)' : 'transparent',
        }}
      >
        {/* Thumb */}
        <motion.div
          className="absolute top-0.5 w-5 h-5 border-2"
          animate={{ x: active ? 28 : 2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          style={{
            backgroundColor: active ? '#00D964' : '#E5E5E5',
            borderColor: active ? '#00D964' : '#E5E5E5',
          }}
        />
      </div>

      {/* Label */}
      <div className="flex items-center gap-2">
        <FlaskConical
          size={14}
          className="transition-colors duration-300"
          style={{ color: active ? '#00D964' : 'rgba(229,229,229,0.5)' }}
        />
        <div className="flex flex-col leading-none">
          <span
            className="text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300"
            style={{ color: active ? '#00D964' : 'rgba(229,229,229,0.6)', fontFamily: "'Space Mono', monospace" }}
          >
            Prueba Ácida
          </span>
          <span className="text-[10px] font-mono text-white/30 mt-0.5" style={{ fontFamily: "'Space Mono', monospace" }}>
            {active ? 'Filtrando consumos mínimos' : 'Mostrar todos los parches'}
          </span>
        </div>
      </div>
    </button>
  );
}
