"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ZONAS } from "@/lib/parche-data";

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
      <div
        className="flex items-end justify-between gap-6 px-[5%]"
        style={{ padding: "72px 5% 40px" }}
      >
        <div>
          <p
            className="text-[10px] font-bold tracking-[.28em] uppercase mb-[10px]"
            style={{ color: "var(--green)" }}
          >
            Explora por zona
          </p>
          <h2
            className="font-display uppercase leading-[.92]"
            style={{ fontSize: "clamp(38px, 5.5vw, 74px)", letterSpacing: "-.01em" }}
          >
            EL PARCHE
            <br />
            DE TU BARRIO
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
          <motion.a
            key={zona.id}
            href="#"
            className="relative overflow-hidden flex-shrink-0 group"
            style={{
              flex: "0 0 190px",
              height: 256,
              background: "var(--g800)",
              scrollSnapAlign: "start",
              display: "block",
            }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 * zona.id }}
          >
            <img
              src={zona.img}
              alt={zona.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[450ms] ease-in-out group-hover:scale-[1.06]"
              style={{ opacity: 0.72 }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.9")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.72")
              }
            />
            <div className="zone-over" />

            {/* Arrow */}
            <div
              className="absolute top-[14px] right-[14px] flex items-center justify-center text-[13px] text-white opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[250ms]"
              style={{
                width: 28,
                height: 28,
                border: "1px solid rgba(255,255,255,.2)",
              }}
            >
              ↗
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="font-display text-[18px] uppercase leading-[1]">
                {zona.name}
              </div>
              <div
                className="text-[10px] font-semibold tracking-[.1em] mt-[5px]"
                style={{ color: "var(--green)" }}
              >
                {zona.count}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
