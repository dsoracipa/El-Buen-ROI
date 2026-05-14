"use client";

import Link from "next/link";
import { type Plan } from "@/lib/parche-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-[3px]">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="12" height="12" viewBox="0 0 24 24"
          style={{ fill: s <= Math.round(rating) ? "var(--green)" : "rgba(255,255,255,.2)" }}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </span>
  );
}

function InfoCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div
      className="flex flex-col gap-1 p-4 flex-1"
      style={{ background: "var(--g800)", border: "1px solid rgba(255,255,255,.07)" }}
    >
      <span className="text-[18px]">{icon}</span>
      <span className="text-[9px] font-semibold tracking-[.18em] uppercase" style={{ color: "rgba(240,240,240,.38)" }}>{label}</span>
      <span className="font-display text-[13px] uppercase tracking-[.04em]">{value}</span>
    </div>
  );
}

export default function PlanDetailClient({ plan, related }: { plan: Plan; related: Plan[] }) {
  return (
    <>
      {/* Navbar strip */}
      <div
        className="fixed top-0 left-0 right-0 z-[999] flex items-center px-[5%] gap-4"
        style={{
          height: "var(--nav-h)",
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
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
        <span className="text-[11px] tracking-[.08em]" style={{ color: "rgba(240,240,240,.3)" }}>
          {plan.zona}
        </span>
        <span style={{ color: "rgba(255,255,255,.15)" }}>·</span>
        <span
          className="text-[9px] font-bold tracking-[.16em] uppercase px-2 py-1"
          style={{ background: "var(--green)", color: "var(--black)" }}
        >
          {plan.cat}
        </span>
      </div>

      <main style={{ paddingTop: "var(--nav-h)", background: "var(--black)", minHeight: "100vh" }}>

        {/* Hero Image */}
        <div className="relative w-full overflow-hidden" style={{ height: "62vh", minHeight: 380 }}>
          <img
            src={plan.img.replace("/480/640", "/1200/800")}
            alt={plan.title}
            className="w-full h-full object-cover"
            style={{ filter: "saturate(.85) contrast(1.08)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,.92) 100%)" }} />
        </div>

        {/* Main content */}
        <div className="px-[5%]" style={{ maxWidth: 960, margin: "0 auto" }}>

          {/* Header */}
          <div className="pt-10 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <StarRating rating={plan.rating} />
              <span className="font-display text-[13px]" style={{ color: "var(--green)" }}>{plan.rating}</span>
              <span className="text-[12px]" style={{ color: "rgba(240,240,240,.35)" }}>
                {plan.reviewCount.toLocaleString("es-CO")} reseñas
              </span>
            </div>

            <h1
              className="font-display uppercase mb-6"
              style={{ fontSize: "clamp(42px, 7vw, 88px)", lineHeight: ".9", letterSpacing: "-.01em" }}
            >
              {plan.title}
            </h1>

            {/* Info grid */}
            <div className="flex gap-[3px] flex-wrap mb-8">
              <InfoCard icon="📍" label="Zona" value={plan.zona} />
              <InfoCard icon="⏱" label="Duración" value={plan.duration} />
              <InfoCard icon="💰" label="Precio" value={plan.priceLabel} />
              <InfoCard icon="📅" label="Horario" value={plan.schedule} />
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                className="font-display text-[15px] tracking-[.13em] uppercase text-[var(--green)] transition-all duration-200"
                style={{ padding: "14px 40px", border: "2px solid var(--green)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--green)";
                  (e.currentTarget as HTMLElement).style.color = "var(--black)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--green)";
                }}
              >
                Reservar plaza →
              </button>
              <span className="text-[12px]" style={{ color: "rgba(240,240,240,.3)" }}>
                {plan.price === 0 ? "Sin costo de reserva" : "Cancelación gratuita hasta 24h antes"}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="py-10" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
            <h2 className="font-display text-[22px] uppercase tracking-[.06em] mb-6" style={{ color: "var(--white)" }}>
              Sobre este plan
            </h2>
            <div className="flex flex-col gap-4">
              {plan.description.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.75]" style={{ color: "rgba(240,240,240,.65)", maxWidth: 680 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Includes + Highlights */}
          <div className="py-10 grid gap-10" style={{ gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
            <div>
              <h2 className="font-display text-[22px] uppercase tracking-[.06em] mb-6">Qué incluye</h2>
              <ul className="flex flex-col gap-3">
                {plan.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: "rgba(240,240,240,.65)" }}>
                    <span className="flex-shrink-0 mt-[2px]" style={{ color: "var(--green)" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-[22px] uppercase tracking-[.06em] mb-6">Highlights</h2>
              <ul className="flex flex-col gap-3">
                {plan.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] p-4"
                    style={{
                      color: "rgba(240,240,240,.65)",
                      background: "var(--g900)",
                      borderLeft: "3px solid var(--orange)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reviews */}
          <div className="py-10" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
            <h2 className="font-display text-[22px] uppercase tracking-[.06em] mb-8">
              Lo que dicen ({plan.reviewCount.toLocaleString("es-CO")} reseñas)
            </h2>
            <div className="grid gap-[3px]" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {plan.reviews.map((r, i) => (
                <div
                  key={i}
                  className="p-5 flex flex-col gap-3"
                  style={{ background: "var(--g900)", border: "1px solid rgba(255,255,255,.06)" }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex items-center justify-center font-display text-[15px]"
                      style={{
                        width: 36, height: 36,
                        background: "var(--green)",
                        color: "var(--black)",
                      }}
                    >
                      {r.author[0]}
                    </div>
                    <StarRating rating={r.rating} />
                  </div>
                  <p className="text-[13px] leading-[1.65]" style={{ color: "rgba(240,240,240,.6)" }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold" style={{ color: "rgba(240,240,240,.45)" }}>{r.author}</span>
                    <span className="text-[10px]" style={{ color: "rgba(240,240,240,.25)" }}>{r.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related plans */}
          {related.length > 0 && (
            <div className="py-10 pb-20">
              <h2 className="font-display text-[22px] uppercase tracking-[.06em] mb-8">
                También en {plan.cat}
              </h2>
              <div className="grid gap-[3px]" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/planes/${r.slug}`}
                    className="relative overflow-hidden group block"
                    style={{ background: "var(--g800)", aspectRatio: "4/3" }}
                  >
                    <img src={r.img} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,.92) 0%, rgba(10,10,10,.2) 60%, transparent 100%)" }} />
                    <span
                      className="absolute top-3 left-3 text-[9px] font-bold tracking-[.16em] uppercase px-2 py-1"
                      style={{ background: "var(--green)", color: "var(--black)" }}
                    >
                      {r.cat}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="font-display uppercase text-[16px] leading-[1]">{r.title}</div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[11px]" style={{ color: "rgba(240,240,240,.45)" }}>{r.zona}</span>
                        <span className="text-[11px] font-semibold" style={{ color: "var(--green)" }}>{r.priceLabel}</span>
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
          style={{
            background: "rgba(10,10,10,.95)",
            backdropFilter: "blur(18px)",
            borderTop: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <div>
            <div className="font-display text-[22px]" style={{ color: "var(--green)" }}>{plan.priceLabel}</div>
            <div className="text-[10px] tracking-[.1em]" style={{ color: "rgba(240,240,240,.35)" }}>{plan.schedule}</div>
          </div>
          <button
            className="font-display text-[13px] tracking-[.12em] uppercase text-[var(--black)]"
            style={{ padding: "12px 28px", background: "var(--green)" }}
          >
            Reservar
          </button>
        </div>
      </main>
    </>
  );
}
