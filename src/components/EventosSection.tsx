"use client";

import { useRef } from "react";
import Link from "next/link";
import { EVENTOS, type Evento } from "@/lib/parche-data";

function AvailabilityBadge({ availability }: { availability: Evento["availability"] }) {
  if (availability === "disponible") return null;
  const isAgotado = availability === "agotado";
  return (
    <span
      className="text-[8px] font-bold tracking-[.16em] uppercase px-2 py-1"
      style={{
        background: isAgotado ? "rgba(255,60,60,.85)" : "var(--orange)",
        color: "var(--black)",
      }}
    >
      {isAgotado ? "Agotado" : "Pocas entradas"}
    </span>
  );
}

export default function EventosSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".poster") as HTMLElement;
    const cardW = card ? card.offsetWidth + 14 : 284;
    track.scrollBy({ left: dir === "next" ? cardW : -cardW, behavior: "smooth" });
  };

  return (
    <section id="eventos" style={{ background: "var(--g900)", paddingBottom: 88 }}>
      {/* Header */}
      <div className="flex items-end justify-between gap-6" style={{ padding: "72px 5% 40px" }}>
        <div>
          <p className="text-[10px] font-bold tracking-[.28em] uppercase mb-[10px]" style={{ color: "var(--green)" }}>
            Próximamente
          </p>
          <h2 className="font-display uppercase leading-[.92]" style={{ fontSize: "clamp(38px, 5.5vw, 74px)", letterSpacing: "-.01em" }}>
            PLANES<br />RECOMENDADOS
          </h2>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-[10px]">
          {(["prev", "next"] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              aria-label={dir === "prev" ? "Anterior" : "Siguiente"}
              className="flex items-center justify-center transition-all duration-200"
              style={{ width: 42, height: 42, border: "1.5px solid rgba(255,255,255,.18)", color: "rgba(240,240,240,.55)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--green)"; (e.currentTarget as HTMLElement).style.color = "var(--green)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.18)"; (e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,.55)"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {dir === "prev" ? <polyline points="15,18 9,12 15,6" /> : <polyline points="9,18 15,12 9,6" />}
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="flex gap-[14px] overflow-x-auto scrollbar-none pb-1 px-[5%]"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {EVENTOS.map((ev) => (
          <Link
            key={ev.id}
            href={`/eventos/${ev.slug}`}
            className="poster relative overflow-hidden flex-shrink-0 group block"
            style={{ flex: "0 0 270px", aspectRatio: "4/5", scrollSnapAlign: "start", background: "var(--g800)" }}
          >
            <img
              src={ev.img}
              alt={ev.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <div className="poster-grad" />

            {/* Availability badge — top left */}
            <div className="absolute top-[14px] left-[14px] z-[2]">
              <AvailabilityBadge availability={ev.availability} />
            </div>

            {/* Price — top right */}
            <div
              className="absolute top-[14px] right-[14px] z-[2] px-2 py-1"
              style={{ background: "rgba(10,10,10,.72)", backdropFilter: "blur(6px)" }}
            >
              <span
                className="font-display text-[11px] tracking-[.06em]"
                style={{ color: ev.price === 0 ? "var(--orange)" : "var(--green)" }}
              >
                {ev.priceLabel}
              </span>
            </div>

            {/* Venue + zona — visible on hover */}
            <div
              className="absolute z-[2] text-[10px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              style={{ bottom: 76, left: 16, right: 16, color: "rgba(240,240,240,.55)" }}
            >
              {ev.venue} · {ev.zona}
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-[18px] left-4 right-4 z-[2] group-hover:-translate-y-1 transition-transform duration-300">
              <div className="text-[9px] font-bold tracking-[.18em] uppercase mb-[5px]" style={{ color: "var(--orange)" }}>
                {ev.tag}
              </div>
              <div className="font-display text-[21px] uppercase leading-[.98]">{ev.title}</div>
              <div className="text-[11px] mt-[6px]" style={{ color: "rgba(240,240,240,.4)" }}>{ev.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
