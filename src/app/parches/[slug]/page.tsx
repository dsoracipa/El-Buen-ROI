import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { parches, getParcheBySlug, formatCOP } from '@/lib/parches';
import RiskBadge from '@/components/RiskBadge';
import ScrollReveal from '@/components/ScrollReveal';

export async function generateStaticParams() {
  return parches.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const parche = getParcheBySlug(params.slug);
  return {
    title: parche ? `${parche.nombre} | El Buen ROI` : 'Análisis',
    description: parche?.resumen,
  };
}

export default function ParchePage({ params }: { params: { slug: string } }) {
  const parche = getParcheBySlug(params.slug);
  if (!parche) notFound();

  const roeColor =
    parche.roe >= 75 ? '#00D964' : parche.roe >= 50 ? '#FFD166' : '#D90429';

  return (
    <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      {/* Back */}
      <ScrollReveal>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-white/40 hover:text-[#D90429] transition-colors mb-10 group"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Volver al portafolio
        </Link>
      </ScrollReveal>

      {/* Category + Risk */}
      <ScrollReveal delay={0.05}>
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span
            className="text-xs font-mono font-bold uppercase tracking-widest px-2 py-0.5 border"
            style={{ fontFamily: "'Space Mono', monospace", color: '#FFD166', borderColor: '#FFD166', backgroundColor: 'rgba(255,209,102,0.08)' }}
          >
            {parche.categoria}
          </span>
          <RiskBadge perfil={parche.perfilRiesgo} />
        </div>
      </ScrollReveal>

      {/* Title */}
      <ScrollReveal delay={0.08}>
        <h1
          className="leading-none mb-4"
          style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            color: '#E5E5E5',
          }}
        >
          {parche.nombre}
        </h1>
      </ScrollReveal>

      {/* Date */}
      <ScrollReveal delay={0.1}>
        <p className="text-[11px] font-mono text-white/30 mb-10" style={{ fontFamily: "'Space Mono', monospace" }}>
          {new Date(parche.fecha).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </ScrollReveal>

      {/* Hero image */}
      <ScrollReveal delay={0.12}>
        <div className="relative w-full aspect-video mb-10 border-2 border-white/10 overflow-hidden">
          <Image src={parche.imagen} alt={parche.nombre} fill className="object-cover" />
          <div className="absolute inset-0 border-2 border-[#D90429] translate-x-2 translate-y-2 pointer-events-none -z-10" />
        </div>
      </ScrollReveal>

      {/* Metrics dashboard */}
      <ScrollReveal delay={0.15}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-white/10 bg-white/10 mb-10">
          {[
            { label: 'ROE', value: `${parche.roe}%`, color: roeColor },
            { label: 'Capex', value: formatCOP(parche.capex), color: '#FFD166' },
            { label: 'EBITDA', value: formatCOP(parche.ebitda), color: '#00D964' },
            { label: 'Precio base', value: formatCOP(parche.precioBase), color: '#E5E5E5' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-[#111111] p-4 flex flex-col gap-1">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest" style={{ fontFamily: "'Space Mono', monospace" }}>
                {label}
              </span>
              <span className="text-lg font-mono font-bold tabular-nums" style={{ color, fontFamily: "'Space Mono', monospace" }}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Consumo mínimo warning */}
      {parche.tieneConsumoMinimo && (
        <ScrollReveal delay={0.17}>
          <div className="border border-[#D90429]/40 bg-[#D90429]/05 px-4 py-3 flex items-start gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D90429] blink mt-1 shrink-0" />
            <p className="text-xs font-mono text-[#D90429]" style={{ fontFamily: "'Space Mono', monospace" }}>
              Este parche incluye consumo mínimo obligatorio. El Capex real puede ser superior al listado. No pasa la Prueba Ácida.
            </p>
          </div>
        </ScrollReveal>
      )}

      {/* Lead paragraph */}
      <ScrollReveal delay={0.2}>
        <p className="text-base font-inter text-white/70 leading-relaxed border-l-4 border-[#D90429] pl-5 mb-8">
          {parche.resumen}
        </p>
      </ScrollReveal>

      {/* Body content */}
      <ScrollReveal delay={0.24}>
        <div className="text-white/60 font-inter text-sm leading-7 space-y-4">
          <p>{parche.contenido}</p>
        </div>
      </ScrollReveal>
    </article>
  );
}
