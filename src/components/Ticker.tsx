const ITEMS = [
  "PLANES", "EVENTOS", "CULTURA", "TURISMO",
  "MÚSICA", "GASTRONOMÍA", "AVENTURA", "ARTE",
];

function TickerSet() {
  return (
    <>
      {ITEMS.map((item) => (
        <span key={item}>
          <span className="font-display text-[14px] tracking-[.18em] text-[var(--black)] px-[22px]">
            {item}
          </span>
          <span
            className="font-display text-[14px] text-[var(--black)]"
            style={{ padding: "0 4px", opacity: 0.4 }}
          >
            ·
          </span>
        </span>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div
      className="overflow-hidden whitespace-nowrap py-[10px]"
      style={{ background: "var(--green)" }}
      aria-hidden="true"
    >
      <div
        className="inline-flex items-center animate-marquee"
        style={{ "--ticker-dur": "22s" } as React.CSSProperties}
      >
        <TickerSet />
        <TickerSet />
      </div>
    </div>
  );
}
