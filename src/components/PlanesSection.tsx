"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PLANES_INIT, PLANES_EXTRA, CATEGORIAS, type Plan } from "@/lib/parche-data";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="9" height="9" viewBox="0 0 24 24"
          style={{ fill: s <= Math.round(rating) ? "var(--green)" : "rgba(255,255,255,.2)" }}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </span>
  );
}

function PlanCard({ plan, delay }: { plan: Plan; delay: number }) {
  return (
    <motion.article
      className="relative overflow-hidden cursor-pointer group"
      style={{ background: "var(--g800)" }}
      initial={{ opacity: 0, y: 46 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.7, delay }}
    >
      <Link href={`/planes/${plan.slug}`} className="block">
        <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
          <img
            src={plan.img}
            alt={plan.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[650ms] ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-[1.07]"
          />
          <div className="mc-grad" />

          {/* Category + New badge */}
          <div className="absolute top-[14px] left-[14px] z-[2] flex items-center gap-[6px]">
            <span
              className="font-body text-[9px] font-bold tracking-[.16em] uppercase"
              style={{ background: "var(--green)", color: "var(--black)", padding: "3px 9px" }}
            >
              {plan.cat}
            </span>
            {plan.price === 0 && (
              <span
                className="font-body text-[9px] font-bold tracking-[.14em] uppercase"
                style={{ background: "var(--orange)", color: "var(--black)", padding: "3px 9px" }}
              >
                Gratis
              </span>
            )}
          </div>

          {/* Rating - always visible */}
          <div className="absolute top-[14px] right-[14px] z-[2] flex items-center gap-[5px] px-2 py-1"
            style={{ background: "rgba(10,10,10,.7)", backdropFilter: "blur(6px)" }}>
            <Stars rating={plan.rating} />
            <span className="text-[10px] font-semibold" style={{ color: "var(--white)" }}>{plan.rating}</span>
          </div>

          {/* Meta on hover */}
          <div
            className="absolute z-[2] text-[11px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
            style={{ bottom: 64, left: 16, right: 16, color: "rgba(240,240,240,.55)" }}
          >
            {plan.zona} · {plan.duration}
          </div>

          {/* Title + price row */}
          <div className="absolute bottom-0 left-0 right-0 z-[2] p-4 group-hover:-translate-y-1 transition-transform duration-[350ms]">
            <h3
              className="font-display uppercase leading-[1] tracking-[.01em] mb-2"
              style={{ fontSize: "clamp(15px, 1.8vw, 24px)" }}
            >
              {plan.title}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-[11px]" style={{ color: "rgba(240,240,240,.4)" }}>
                {plan.reviewCount.toLocaleString("es-CO")} reseñas
              </span>
              <span
                className="font-display text-[12px] tracking-[.06em]"
                style={{ color: plan.price === 0 ? "var(--orange)" : "var(--green)" }}
              >
                {plan.priceLabel}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function PlanesSection() {
  const [activecat, setActivecat] = useState("Todos");
  const [extraLoaded, setExtraLoaded] = useState(false);

  const allPlanes = extraLoaded ? [...PLANES_INIT, ...PLANES_EXTRA] : PLANES_INIT;
  const filtered = activecat === "Todos" ? allPlanes : allPlanes.filter((p) => p.cat === activecat);

  return (
    <section id="planes">
      {/* Section header */}
      <div className="flex items-end justify-between gap-6" style={{ padding: "72px 5% 40px" }}>
        <div>
          <p className="text-[10px] font-bold tracking-[.28em] uppercase mb-[10px]" style={{ color: "var(--green)" }}>
            Lo que hay en la ciudad
          </p>
          <h2 className="font-display uppercase leading-[.92]" style={{ fontSize: "clamp(38px, 5.5vw, 74px)", letterSpacing: "-.01em" }}>
            PLANES<br />DESTACADOS
          </h2>
        </div>
        <a
          href="#"
          className="text-[12px] font-semibold tracking-[.12em] uppercase pb-[2px] whitespace-nowrap flex-shrink-0 self-end transition-colors duration-200"
          style={{ color: "rgba(240,240,240,.4)", borderBottom: "1px solid rgba(255,255,255,.18)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--green)"; (e.currentTarget as HTMLElement).style.borderBottomColor = "var(--green)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,.4)"; (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(255,255,255,.18)"; }}
        >
          Ver todo →
        </a>
      </div>

      {/* Category chips */}
      <div className="flex gap-2 overflow-x-auto scrollbar-none pb-8 px-[5%]">
        {CATEGORIAS.map((cat) => (
          <button
            key={cat}
            onClick={() => setActivecat(cat)}
            className="flex-shrink-0 text-[12px] font-semibold tracking-[.1em] uppercase whitespace-nowrap transition-all duration-200"
            style={{
              padding: "8px 18px",
              border: activecat === cat ? "1px solid var(--green)" : "1px solid rgba(255,255,255,.14)",
              background: activecat === cat ? "var(--green)" : "transparent",
              color: activecat === cat ? "var(--black)" : "rgba(240,240,240,.52)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Magazine grid */}
      <div className="grid gap-[3px] px-[5%] pb-[3px]" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {filtered.map((plan) => (
          <PlanCard key={plan.id} plan={plan} delay={0} />
        ))}
      </div>

      {/* Load more */}
      <div className="flex justify-center px-[5%] pb-[72px] pt-12">
        <button
          className="font-display text-[14px] tracking-[.14em] uppercase transition-all duration-200"
          style={{
            padding: "14px 40px",
            border: "1.5px solid rgba(255,255,255,.18)",
            color: "rgba(240,240,240,.55)",
            opacity: extraLoaded ? 0.3 : 1,
            pointerEvents: extraLoaded ? "none" : "auto",
          }}
          onClick={() => setExtraLoaded(true)}
          disabled={extraLoaded}
          onMouseEnter={(e) => { if (!extraLoaded) { (e.currentTarget as HTMLElement).style.borderColor = "var(--green)"; (e.currentTarget as HTMLElement).style.color = "var(--green)"; } }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.18)"; (e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,.55)"; }}
        >
          {extraLoaded ? "Todo cargado" : "Cargar más planes"}
        </button>
      </div>
    </section>
  );
}
