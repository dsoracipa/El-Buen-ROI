"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ZONAS } from "@/lib/parche-data";

function PulsingDot() {
  return (
    <span className="relative inline-flex" style={{ width: 8, height: 8 }}>
      <span
        className="absolute inline-flex h-full w-full rounded-full animate-ping"
        style={{ background: "var(--green)", opacity: 0.6 }}
      />
      <span
        className="relative inline-flex rounded-full"
        style={{ width: 8, height: 8, background: "var(--green)" }}
      />
    </span>
  );
}

export default function ZonasSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="zonas" style={{ background: "var(--black)", paddingBottom: 88 }}>
      {/* Header */}
      <div className="flex items-end justify-between gap-6" style={{ padding: "72px 5% 40px" }}>
        <div>
          <p className="text-[10px] font-bold tracking-[.28em] uppercase mb-[10px]" style={{ color: "var(--green)" }}>
            Explora por zona
          </p>
          <h2 className="font-display uppercase leading-[.92]" style={{ fontSize: "clamp(38px, 5.5vw, 74px)", letterSpacing: "-.01em" }}>
            EL PLAN<br />DE TU BARRIO
          </h2>
        </div>
        <a
          href="#"
          className="text-[12px] font-semibold tracking-[.12em] uppercase pb-[2px] whitespace-nowrap flex-shrink-0 self-end transition-colors duration-200"
          style={{ color: "rgba(240,240,240,.4)", borderBottom: "1px solid rgba(255,255,255,.18)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--green)"; (e.currentTarget as HTMLElement).style.borderBottomColor = "var(--green)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,.4)"; (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(255,255,255,.18)"; }}
        >
          Ver zonas →
        </a>
      </div>

      {/* Drag-scroll track */}
      <div
        ref={trackRef}
        className="flex gap-[10px] overflow-x-auto scrollbar-none px-[5%]"
        style={{ cursor: "grab" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {ZONAS.map((zona) => (
          <motion.div
            key={zona.id}
            className="relative overflow-hidden flex-shrink-0 group"
            style={{ flex: "0 0 210px", height: 300, background: "var(--g800)" }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 * zona.id }}
          >
            {/* Background image */}
            <img
              src={zona.img}
              alt={zona.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[500ms] ease-in-out group-hover:scale-[1.07]"
              style={{ opacity: 0.65 }}
            />

            {/* Dark gradient — deepens on hover */}
            <div
              className="absolute inset-0 transition-opacity duration-400"
              style={{ background: "linear-gradient(to top, rgba(10,10,10,.95) 0%, rgba(10,10,10,.35) 55%, rgba(10,10,10,.15) 100%)" }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,.55) 60%, rgba(10,10,10,.2) 100%)" }}
            />

            {/* Top badges row */}
            <div className="absolute top-[13px] left-[13px] right-[13px] z-[3] flex items-center justify-between">
              {zona.trending ? (
                <span
                  className="text-[8px] font-bold tracking-[.18em] uppercase px-2 py-1"
                  style={{ background: "var(--orange)", color: "var(--black)" }}
                >
                  Trending
                </span>
              ) : <span />}

              {/* Arrow top-right — visible on hover */}
              <div
                className="flex items-center justify-center text-[13px] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[250ms]"
                style={{ width: 28, height: 28, border: "1px solid rgba(255,255,255,.25)", color: "var(--white)" }}
              >
                ↗
              </div>
            </div>

            {/* Activity indicator — always visible */}
            <div
              className="absolute z-[3] flex items-center gap-[6px] px-[10px] py-[6px]"
              style={{ top: zona.trending ? 46 : 13, left: 13, background: "rgba(10,10,10,.65)", backdropFilter: "blur(6px)" }}
            >
              <PulsingDot />
              <span className="text-[9px] font-semibold tracking-[.1em]" style={{ color: "rgba(240,240,240,.8)" }}>
                {zona.thisWeek} esta semana
              </span>
            </div>

            {/* Featured event — slides up on hover */}
            <div
              className="absolute z-[3] left-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              style={{ bottom: 86 }}
            >
              <div
                className="flex items-center gap-2 px-3 py-2"
                style={{ background: "rgba(0,255,135,.1)", border: "1px solid rgba(0,255,135,.2)" }}
              >
                <span className="text-[8px]" style={{ color: "var(--green)" }}>▶</span>
                <span className="text-[10px] font-semibold leading-[1.3]" style={{ color: "rgba(240,240,240,.8)" }}>
                  {zona.featuredEvent}
                </span>
              </div>
            </div>

            {/* Bottom: name + category chips */}
            <div className="absolute bottom-0 left-0 right-0 z-[3] p-4 group-hover:-translate-y-1 transition-transform duration-300">
              <div className="font-display text-[19px] uppercase leading-[1] mb-[6px]">{zona.name}</div>
              <div className="text-[9px] font-semibold tracking-[.08em] mb-3" style={{ color: "var(--green)" }}>
                {zona.count}
              </div>
              {/* Category tags */}
              <div className="flex flex-wrap gap-[4px]">
                {zona.cats.map((cat) => (
                  <span
                    key={cat}
                    className="text-[8px] font-semibold tracking-[.1em] uppercase px-[7px] py-[3px]"
                    style={{ background: "rgba(255,255,255,.08)", color: "rgba(240,240,240,.5)", border: "1px solid rgba(255,255,255,.1)" }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
