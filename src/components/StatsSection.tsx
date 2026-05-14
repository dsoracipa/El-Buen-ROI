"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

function useCountUp(target: number, inView: boolean, duration = 2200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const raf = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}

function StatItem({
  target,
  suffix,
  label,
  delay,
}: {
  target: number;
  suffix?: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const value = useCountUp(target, inView);

  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        background: "var(--g900)",
        border: "1px solid rgba(255,255,255,.045)",
        padding: "56px 28px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(46px)",
        transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`,
      }}
    >
      <div
        className="flex items-baseline justify-center gap-[3px] font-display leading-[1] text-[var(--green)]"
        style={{ fontSize: "clamp(60px, 9vw, 112px)", letterSpacing: "-.02em" }}
      >
        <span>{value.toLocaleString("es-CO")}</span>
        {suffix && (
          <span
            className="font-display text-[var(--green)]"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", opacity: 0.65 }}
          >
            {suffix}
          </span>
        )}
      </div>
      <div
        className="text-[12px] tracking-[.14em] uppercase mt-[14px]"
        style={{ color: "rgba(240,240,240,.38)" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" style={{ background: "var(--black)", padding: "96px 5%" }}>
      <p
        className="text-center text-[10px] font-bold tracking-[.3em] uppercase mb-[60px]"
        style={{ color: "rgba(240,240,240,.28)" }}
      >
        ParEvent en números
      </p>
      <div
        className="grid gap-[2px]"
        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <StatItem target={1200} suffix="+" label="planes publicados" delay={0} />
        <StatItem target={80} suffix="K" label="personas planeando" delay={0.15} />
        <StatItem target={12} label="categorías" delay={0.3} />
      </div>
    </section>
  );
}
