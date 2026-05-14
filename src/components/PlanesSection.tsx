"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PLANES_INIT, PLANES_EXTRA, CATEGORIAS, type Plan } from "@/lib/parche-data";

function PlanCard({ plan, delay }: { plan: Plan; delay: number }) {
  return (
    <motion.article
      className="relative overflow-hidden cursor-pointer"
      style={{ background: "var(--g800)" }}
      initial={{ opacity: 0, y: 46 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <img
          src={plan.img}
          alt={plan.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[650ms] ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-[1.07]"
          style={{ transition: "transform .65s cubic-bezier(.25,.46,.45,.94)" }}
        />
        <div className="mc-grad" />
        <span
          className="absolute top-[14px] left-[14px] z-[2] font-body text-[9px] font-bold tracking-[.16em] uppercase"
          style={{
            background: "var(--green)",
            color: "var(--black)",
            padding: "3px 9px",
          }}
        >
          {plan.cat}
        </span>
        <div
          className="absolute z-[2] text-[11px] opacity-0 translate-y-2 transition-all duration-300"
          style={{
            bottom: 52,
            left: 16,
            right: 16,
            color: "rgba(240,240,240,.4)",
          }}
          data-meta
        >
          {plan.meta}
        </div>
        <h3
          className="absolute bottom-4 left-4 right-4 z-[2] font-display uppercase leading-[1] tracking-[.01em] transition-transform duration-[350ms]"
          style={{ fontSize: "clamp(17px, 2vw, 28px)" }}
          data-title
        >
          {plan.title}
        </h3>
      </div>
    </motion.article>
  );
}

export default function PlanesSection() {
  const [activecat, setActivecat] = useState("Todos");
  const [extraLoaded, setExtraLoaded] = useState(false);

  const allPlanes = extraLoaded
    ? [...PLANES_INIT, ...PLANES_EXTRA]
    : PLANES_INIT;

  const filtered =
    activecat === "Todos"
      ? allPlanes
      : allPlanes.filter((p) => p.cat === activecat);

  return (
    <section id="planes">
      {/* Section header */}
      <div
        className="flex items-end justify-between gap-6 px-[5%]"
        style={{ padding: "72px 5% 40px" }}
      >
        <div>
          <p
            className="text-[10px] font-bold tracking-[.28em] uppercase mb-[10px]"
            style={{ color: "var(--green)" }}
          >
            Lo que hay en la ciudad
          </p>
          <h2
            className="font-display uppercase leading-[.92]"
            style={{ fontSize: "clamp(38px, 5.5vw, 74px)", letterSpacing: "-.01em" }}
          >
            PLANES
            <br />
            DESTACADOS
          </h2>
        </div>
        <a
          href="#"
          className="text-[12px] font-semibold tracking-[.12em] uppercase pb-[2px] whitespace-nowrap flex-shrink-0 self-end transition-colors duration-200"
          style={{
            color: "rgba(240,240,240,.4)",
            borderBottom: "1px solid rgba(255,255,255,.18)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--green)";
            (e.currentTarget as HTMLElement).style.borderBottomColor = "var(--green)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,.4)";
            (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(255,255,255,.18)";
          }}
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
              border:
                activecat === cat
                  ? "1px solid var(--green)"
                  : "1px solid rgba(255,255,255,.14)",
              background: activecat === cat ? "var(--green)" : "transparent",
              color:
                activecat === cat ? "var(--black)" : "rgba(240,240,240,.52)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Magazine grid */}
      <div
        className="grid gap-[3px] px-[5%] pb-[3px]"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
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
          onMouseEnter={(e) => {
            if (!extraLoaded) {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--green)";
              (e.currentTarget as HTMLElement).style.color = "var(--green)";
            }
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.18)";
            (e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,.55)";
          }}
        >
          {extraLoaded ? "Todo cargado" : "Cargar más planes"}
        </button>
      </div>
    </section>
  );
}
