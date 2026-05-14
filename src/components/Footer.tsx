"use client";

const COL_PLANES = ["Tours urbanos", "Gastronomía", "Arte & cultura", "Aventura"];
const COL_EVENTOS = ["Esta semana", "Conciertos", "Festivales", "Mercados"];
const COL_PAREVENT = ["Nosotros", "Publicar evento", "Contacto", "Newsletter"];
const SOCIALS = ["IG", "TK", "FB", "YT"];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(255,255,255,.055)",
        padding: "72px 5% 40px",
      }}
    >
      {/* Top grid */}
      <div
        className="grid gap-12 mb-[60px]"
        style={{ gridTemplateColumns: "1.6fr 1fr 1fr 1fr" }}
      >
        {/* Brand col */}
        <div>
          <div className="font-display text-[34px] mb-[14px]">
            Par<em className="not-italic" style={{ color: "var(--green)" }}>Event</em>
          </div>
          <p
            className="text-[13px] leading-[1.65]"
            style={{ color: "rgba(240,240,240,.42)", maxWidth: 240 }}
          >
            &ldquo;Medellín tiene más plan del que crees.&rdquo;
          </p>
          <div className="flex gap-[10px] mt-6">
            {SOCIALS.map((s) => (
              <button
                key={s}
                className="flex items-center justify-center text-[11px] font-bold transition-all duration-200"
                style={{
                  width: 38,
                  height: 38,
                  border: "1px solid rgba(255,255,255,.14)",
                  color: "rgba(240,240,240,.5)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--green)";
                  (e.currentTarget as HTMLElement).style.color = "var(--green)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.14)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,.5)";
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Planes */}
        <div>
          <h4
            className="font-display text-[13px] tracking-[.16em] uppercase mb-[18px]"
            style={{ color: "rgba(240,240,240,.85)" }}
          >
            Planes
          </h4>
          <ul className="flex flex-col gap-[10px] list-none">
            {COL_PLANES.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[13px] transition-colors duration-200"
                  style={{ color: "rgba(240,240,240,.38)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--green)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,.38)")
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Eventos */}
        <div>
          <h4
            className="font-display text-[13px] tracking-[.16em] uppercase mb-[18px]"
            style={{ color: "rgba(240,240,240,.85)" }}
          >
            Eventos
          </h4>
          <ul className="flex flex-col gap-[10px] list-none">
            {COL_EVENTOS.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[13px] transition-colors duration-200"
                  style={{ color: "rgba(240,240,240,.38)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--green)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,.38)")
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ParEvent */}
        <div>
          <h4
            className="font-display text-[13px] tracking-[.16em] uppercase mb-[18px]"
            style={{ color: "rgba(240,240,240,.85)" }}
          >
            ParEvent
          </h4>
          <ul className="flex flex-col gap-[10px] list-none">
            {COL_PAREVENT.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[13px] transition-colors duration-200"
                  style={{ color: "rgba(240,240,240,.38)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--green)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,.38)")
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between gap-4 flex-wrap pt-[30px]"
        style={{ borderTop: "1px solid rgba(255,255,255,.055)" }}
      >
        <span
          className="text-[11px] tracking-[.04em]"
          style={{ color: "rgba(240,240,240,.2)" }}
        >
          © 2026 ParEvent. Todos los derechos reservados.
        </span>
        <span
          className="font-display text-[11px] tracking-[.22em] uppercase"
          style={{ color: "rgba(0,255,135,.35)" }}
        >
          ↳ Medellín, Colombia
        </span>
      </div>
    </footer>
  );
}
