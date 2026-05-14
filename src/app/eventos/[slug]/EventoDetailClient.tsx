"use client";

import Link from "next/link";
import { type Evento } from "@/lib/parche-data";

function AvailabilityPill({ availability }: { availability: Evento["availability"] }) {
  if (availability === "disponible") {
    return (
      <span className="text-[9px] font-bold tracking-[.16em] uppercase px-3 py-1.5" style={{ background: "rgba(0,255,135,.12)", color: "var(--green)", border: "1px solid rgba(0,255,135,.3)" }}>
        Disponible
      </span>
    );
  }
  if (availability === "pocas-entradas") {
    return (
      <span className="text-[9px] font-bold tracking-[.16em] uppercase px-3 py-1.5" style={{ background: "rgba(255,107,43,.15)", color: "var(--orange)", border: "1px solid rgba(255,107,43,.35)" }}>
        Pocas entradas
      </span>
    );
  }
  return (
    <span className="text-[9px] font-bold tracking-[.16em] uppercase px-3 py-1.5" style={{ background: "rgba(255,60,60,.12)", color: "#FF3C3C", border: "1px solid rgba(255,60,60,.3)" }}>
      Agotado
    </span>
  );
}

export default function EventoDetailClient({ evento, related }: { evento: Evento; related: Evento[] }) {
  return (
    <>
      {/* Navbar strip */}
      <div
        className="fixed top-0 left-0 right-0 z-[999] flex items-center px-[5%] gap-4"
        style={{ height: "var(--nav-h)", background: "rgba(10,10,10,0.85)", backdropFilter: "blur(18px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-[12px] font-semibold tracking-[.12em] uppercase transition-colors duration-200"
          style={{ color: "rgba(240,240,240,.45)" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--green)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,.45)")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Volver
        </Link>
        <span style={{ color: "rgba(255,255,255,.15)" }}>·</span>
        <span className="text-[11px] tracking-[.08em]" style={{ color: "rgba(240,240,240,.3)" }}>{evento.zona}</span>
        <span style={{ color: "rgba(255,255,255,.15)" }}>·</span>
        <span className="text-[9px] font-bold tracking-[.16em] uppercase px-2 py-1" style={{ background: "var(--orange)", color: "var(--black)" }}>
          {evento.tag}
        </span>
      </div>

      <main style={{ paddingTop: "var(--nav-h)", background: "var(--black)", minHeight: "100vh" }}>

        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ height: "55vh", minHeight: 320 }}>
          <img
            src={evento.img.replace("/270/340", "/1200/800")}
            alt={evento.title}
            className="w-full h-full object-cover"
            style={{ filter: "saturate(.85) contrast(1.1)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, rgba(10,10,10,.95) 100%)" }} />
          {/* Date chip over hero */}
          <div className="absolute bottom-8 left-[5%] z-[2]">
            <div className="inline-flex items-center gap-3 px-4 py-2" style={{ background: "rgba(10,10,10,.75)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,.1)" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="font-display text-[13px] tracking-[.08em]" style={{ color: "var(--white)" }}>{evento.date}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-[5%]" style={{ maxWidth: 960, margin: "0 auto" }}>

          {/* Header */}
          <div className="pt-10 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <AvailabilityPill availability={evento.availability} />
              <span className="text-[11px] tracking-[.08em]" style={{ color: "rgba(240,240,240,.35)" }}>
                📍 {evento.venue} · {evento.zona}
              </span>
            </div>

            <h1 className="font-display uppercase mb-8" style={{ fontSize: "clamp(42px, 7vw, 88px)", lineHeight: ".9", letterSpacing: "-.01em" }}>
              {evento.title}
            </h1>

            {/* Info row */}
            <div className="flex gap-[3px] flex-wrap mb-8">
              {[
                { icon: "📅", label: "Fecha", value: evento.date },
                { icon: "📍", label: "Venue", value: evento.venue },
                { icon: "🗺️", label: "Zona", value: evento.zona },
                { icon: "💰", label: "Precio", value: evento.priceLabel },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex flex-col gap-1 p-4 flex-1" style={{ background: "var(--g800)", border: "1px solid rgba(255,255,255,.07)" }}>
                  <span className="text-[18px]">{icon}</span>
                  <span className="text-[9px] font-semibold tracking-[.18em] uppercase" style={{ color: "rgba(240,240,240,.38)" }}>{label}</span>
                  <span className="font-display text-[13px] uppercase tracking-[.04em]">{value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                className="font-display text-[15px] tracking-[.13em] uppercase transition-all duration-200"
                style={{ padding: "14px 40px", border: "2px solid var(--orange)", color: "var(--orange)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--orange)"; (e.currentTarget as HTMLElement).style.color = "var(--black)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--orange)"; }}
                disabled={evento.availability === "agotado"}
              >
                {evento.availability === "agotado" ? "Entradas agotadas" : "Comprar entrada →"}
              </button>
              {evento.availability === "pocas-entradas" && (
                <span className="text-[12px]" style={{ color: "var(--orange)" }}>
                  ⚡ Últimas entradas disponibles
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="py-10" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
            <h2 className="font-display text-[22px] uppercase tracking-[.06em] mb-6" style={{ color: "var(--white)" }}>
              Sobre este evento
            </h2>
            <div className="flex flex-col gap-4">
              {evento.description.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.75]" style={{ color: "rgba(240,240,240,.65)", maxWidth: 680 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Related events */}
          {related.length > 0 && (
            <div className="py-10 pb-20">
              <h2 className="font-display text-[22px] uppercase tracking-[.06em] mb-8">
                Más eventos próximos
              </h2>
              <div className="grid gap-[3px]" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/eventos/${r.slug}`}
                    className="relative overflow-hidden group block"
                    style={{ background: "var(--g800)", aspectRatio: "4/3" }}
                  >
                    <img src={r.img} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,.92) 0%, rgba(10,10,10,.2) 60%, transparent 100%)" }} />
                    <span className="absolute top-3 left-3 text-[9px] font-bold tracking-[.16em] uppercase px-2 py-1" style={{ background: "var(--orange)", color: "var(--black)" }}>
                      {r.tag}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="font-display uppercase text-[16px] leading-[1]">{r.title}</div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[11px]" style={{ color: "rgba(240,240,240,.45)" }}>{r.date}</span>
                        <span className="text-[11px] font-semibold" style={{ color: "var(--orange)" }}>{r.priceLabel}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky mobile CTA */}
        <div
          className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-[5%] py-4 md:hidden z-[998]"
          style={{ background: "rgba(10,10,10,.95)", backdropFilter: "blur(18px)", borderTop: "1px solid rgba(255,255,255,.08)" }}
        >
          <div>
            <div className="font-display text-[22px]" style={{ color: "var(--orange)" }}>{evento.priceLabel}</div>
            <div className="text-[10px] tracking-[.1em]" style={{ color: "rgba(240,240,240,.35)" }}>{evento.date}</div>
          </div>
          <button
            className="font-display text-[13px] tracking-[.12em] uppercase"
            style={{ padding: "12px 28px", background: "var(--orange)", color: "var(--black)" }}
            disabled={evento.availability === "agotado"}
          >
            {evento.availability === "agotado" ? "Agotado" : "Comprar"}
          </button>
        </div>
      </main>
    </>
  );
}
