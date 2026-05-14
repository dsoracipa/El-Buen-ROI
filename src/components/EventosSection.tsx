"use client";

import { useRef } from "react";
import { EVENTOS } from "@/lib/parche-data";

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
      <div
        className="flex items-end justify-between gap-6 px-[5%]"
        style={{ padding: "72px 5% 40px" }}
      >
        <div>
          <p
            className="text-[10px] font-bold tracking-[.28em] uppercase mb-[10px]"
            style={{ color: "var(--green)" }}
          >
            Próximamente
          </p>
          <h2
            className="font-display uppercase leading-[.92]"
            style={{ fontSize: "clamp(38px, 5.5vw, 74px)", letterSpacing: "-.01em" }}
          >
            PARCHES
            <br />
            RECOMENDADOS
          </h2>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-[10px]">
          {(["prev", "next"] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              aria-label={dir === "prev" ? "Anterior" : "Siguiente"}
              className="flex items-center justify-center transition-all duration-200"
              style={{
                width: 42,
                height: 42,
                border: "1.5px solid rgba(255,255,255,.18)",
                color: "rgba(240,240,240,.55)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--green)";
                (e.currentTarget as HTMLElement).style.color = "var(--green)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.18)";
                (e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,.55)";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {dir === "prev" ? (
                  <polyline points="15,18 9,12 15,6" />
                ) : (
                  <polyline points="9,18 15,12 9,6" />
                )}
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="flex gap-[14px] overflow-x-auto scroll-snap-x-mandatory scrollbar-none pb-1 px-[5%]"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {EVENTOS.map((ev) => (
          <div
            key={ev.id}
            className="poster relative overflow-hidden flex-shrink-0"
            style={{
              flex: "0 0 270px",
              aspectRatio: "4/5",
              scrollSnapAlign: "start",
              background: "var(--g800)",
            }}
          >
            <img
              src={ev.img}
              alt={ev.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="poster-grad" />
            <div className="absolute bottom-[18px] left-4 right-4 z-[2]">
              <div
                className="text-[9px] font-bold tracking-[.18em] uppercase mb-[5px]"
                style={{ color: "var(--orange)" }}
              >
                {ev.tag}
              </div>
              <div className="font-display text-[21px] uppercase leading-[.98]">
                {ev.title}
              </div>
              <div
                className="text-[11px] mt-[6px]"
                style={{ color: "rgba(240,240,240,.4)" }}
              >
                {ev.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
