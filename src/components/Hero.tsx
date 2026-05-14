"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "100svh", minHeight: 640 }}
    >
      {/* Background layers */}
      <div className="hero-bg" />
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://picsum.photos/seed/medellin-noche/1920/1080"
        alt="Medellín de noche"
        loading="eager"
        style={{ opacity: 0.52, filter: "saturate(.72) contrast(1.12)" }}
      />
      <div className="hero-bg-over" />
      <div className="hero-scanlines" />

      {/* Content */}
      <div
        className="relative z-[3] text-center px-[5%]"
      >
        <div
          className="inline-block text-[11px] font-semibold tracking-[.25em] uppercase mb-5"
          style={{
            color: "var(--green)",
            border: "1px solid rgba(0,255,135,.35)",
            padding: "5px 14px",
          }}
        >
          ↳ Medellín, Colombia
        </div>

        <h1
          className="font-display uppercase text-[var(--white)] mb-[22px]"
          style={{
            fontSize: "clamp(76px, 17vw, 240px)",
            lineHeight: ".87",
            letterSpacing: "-.01em",
          }}
        >
          MEDELLÍN
          <br />
          TIENE
          <br />
          <span
            className="inline-block text-[var(--green)] animate-glitch"
          >
            PLAN
          </span>
        </h1>

        <p
          className="mx-auto mb-8"
          style={{
            fontSize: "clamp(14px, 1.4vw, 17px)",
            color: "rgba(240,240,240,.6)",
            maxWidth: 500,
            lineHeight: 1.65,
          }}
        >
          Descubre los mejores planes, eventos y experiencias urbanas de la
          ciudad más viva de Colombia.
        </p>

        <div className="flex items-center justify-center gap-[14px] flex-wrap">
          <a
            href="#planes"
            className="inline-flex items-center gap-[9px] font-display uppercase text-[15px] tracking-[.13em] text-[var(--green)] transition-all duration-200 hover:bg-[var(--green)] hover:text-[var(--black)]"
            style={{
              padding: "13px 30px",
              border: "2px solid var(--green)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 28px rgba(0,255,135,.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Explorar ahora
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#eventos"
            className="font-display uppercase text-[15px] tracking-[.13em] transition-all duration-200"
            style={{
              padding: "13px 30px",
              border: "2px solid rgba(255,255,255,.14)",
              color: "rgba(240,240,240,.55)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,.45)";
              (e.currentTarget as HTMLElement).style.color = "var(--white)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,.14)";
              (e.currentTarget as HTMLElement).style.color =
                "rgba(240,240,240,.55)";
            }}
          >
            Ver eventos
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 font-body uppercase"
        style={{
          fontSize: 9,
          letterSpacing: ".22em",
          color: "rgba(255,255,255,.28)",
        }}
      >
        <div
          className="animate-pulse-line"
          style={{
            width: 1,
            height: 38,
            background:
              "linear-gradient(to bottom, rgba(0,255,135,.5), transparent)",
          }}
        />
        <span>scroll</span>
      </div>
    </section>
  );
}
