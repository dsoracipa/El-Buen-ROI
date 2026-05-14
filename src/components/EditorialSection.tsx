"use client";

import { motion } from "framer-motion";
import { EDITORIAL } from "@/lib/parche-data";

function ArrowCta({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="ed-cta inline-flex items-center gap-3 font-display text-[13px] tracking-[.14em] uppercase mt-[6px] transition-all duration-[250ms]"
      style={{ color: "var(--green)" }}
    >
      {label}
      <span className="flex items-center gap-[3px]">
        <span className="arrow-line" />
        <span className="arrow-head" />
      </span>
    </a>
  );
}

export default function EditorialSection() {
  return (
    <section id="editorial" style={{ background: "var(--black)" }}>
      {/* Section header */}
      <div className="px-[5%] pt-[72px] pb-0">
        <p
          className="text-[10px] font-bold tracking-[.28em] uppercase mb-[10px]"
          style={{ color: "var(--green)" }}
        >
          Editoriales
        </p>
        <h2
          className="font-display uppercase leading-[.92]"
          style={{ fontSize: "clamp(38px, 5.5vw, 74px)", letterSpacing: "-.01em" }}
        >
          LO QUE
          <br />
          PARCHAMOS
        </h2>
      </div>

      {EDITORIAL.map((item) => (
        <motion.div
          key={item.id}
          className="grid"
          style={{
            gridTemplateColumns: "1fr 1fr",
            minHeight: 480,
          }}
          initial={{ opacity: 0, y: 46 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.7 }}
        >
          {/* Image */}
          <div
            className={`relative overflow-hidden min-h-[320px] ${
              item.reversed ? "order-2" : ""
            }`}
            style={{ background: "var(--g800)" }}
          >
            <img
              src={item.img}
              alt={item.tag}
              loading="lazy"
              className="ed-real"
            />
          </div>

          {/* Text */}
          <div
            className={`flex flex-col justify-center gap-[18px] ${
              item.reversed ? "order-1" : ""
            }`}
            style={{
              background: "var(--g900)",
              padding: "clamp(40px,6vw,80px) clamp(32px,5vw,72px)",
              border: "1px solid rgba(255,255,255,.04)",
            }}
          >
            <div
              style={{ width: 44, height: 4, background: "var(--orange)" }}
            />
            <div
              className="text-[10px] font-bold tracking-[.22em] uppercase"
              style={{ color: "var(--orange)" }}
            >
              {item.tag}
            </div>
            <h3
              className="font-display uppercase leading-[.93] whitespace-pre-line"
              style={{ fontSize: "clamp(38px, 4.5vw, 66px)" }}
            >
              {item.title}
              <em className="not-italic" style={{ color: "var(--green)" }}>
                {item.titleEm}
              </em>
            </h3>
            <p
              className="text-[14px] leading-[1.72]"
              style={{
                color: "rgba(240,240,240,.55)",
                maxWidth: 380,
              }}
            >
              {item.desc}
            </p>
            <ArrowCta label={item.cta} />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
