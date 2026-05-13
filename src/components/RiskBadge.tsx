import type { PerfilRiesgo } from '@/lib/parches';

const RISK_CONFIG: Record<
  PerfilRiesgo,
  { color: string; bg: string; blink: boolean }
> = {
  Conservador:  { color: '#00D964', bg: 'rgba(0,217,100,0.08)',  blink: false },
  Moderado:     { color: '#FFD166', bg: 'rgba(255,209,102,0.08)', blink: false },
  Agresivo:     { color: '#FF6B35', bg: 'rgba(255,107,53,0.08)', blink: false },
  Especulativo: { color: '#D90429', bg: 'rgba(217,4,41,0.08)',   blink: true  },
};

interface RiskBadgeProps {
  perfil: PerfilRiesgo;
  className?: string;
}

export default function RiskBadge({ perfil, className = '' }: RiskBadgeProps) {
  const { color, bg, blink } = RISK_CONFIG[perfil];

  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-widest border ${blink ? 'blink' : ''} ${className}`}
      style={{
        color,
        borderColor: color,
        backgroundColor: bg,
        fontFamily: "'Space Mono', monospace",
      }}
    >
      {perfil}
    </span>
  );
}
