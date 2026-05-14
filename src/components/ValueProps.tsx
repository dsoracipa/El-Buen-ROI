const iconStyle = {
  width: "100%",
  height: "100%",
  stroke: "currentColor",
  fill: "none",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PROPS = [
  {
    title: "Planes verificados",
    sub: "Cada experiencia es curada por nuestro equipo local en Medellín.",
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: "Siempre actualizado",
    sub: "Agenda en tiempo real. Nuevos planes cada semana, todos los días.",
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "80K+ parcheros",
    sub: "Una comunidad activa que descubre y comparte los mejores rincones.",
    icon: (
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function ValueProps() {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: "repeat(3, 1fr)",
        background: "var(--g800)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      {PROPS.map((vp, i) => (
        <div
          key={i}
          className="flex items-start gap-[18px]"
          style={{
            padding: "28px 6%",
            borderRight:
              i < PROPS.length - 1
                ? "1px solid rgba(255,255,255,.06)"
                : "none",
          }}
        >
          <div
            style={{ width: 34, height: 34, color: "var(--green)", flexShrink: 0, marginTop: 3 }}
          >
            {vp.icon}
          </div>
          <div>
            <div className="font-display text-[15px] tracking-[.06em] uppercase mb-[5px]">
              {vp.title}
            </div>
            <div
              className="text-[12px] leading-[1.55]"
              style={{ color: "rgba(240,240,240,.4)" }}
            >
              {vp.sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
