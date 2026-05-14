"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      style={{
        background: "var(--g900)",
        borderTop: "1px solid rgba(255,255,255,.06)",
        padding: "96px 5%",
      }}
    >
      <div
        className="grid gap-[80px] items-center"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {/* Left */}
        <div>
          <p
            className="text-[10px] font-bold tracking-[.28em] uppercase mb-[10px]"
            style={{ color: "var(--green)" }}
          >
            Newsletter
          </p>
          <h2
            className="font-display uppercase leading-[.88] mb-[18px]"
            style={{ fontSize: "clamp(52px, 7vw, 96px)" }}
          >
            ENTRA AL
            <br />
            <em className="not-italic" style={{ color: "var(--green)" }}>
              PARCHE
            </em>
          </h2>
          <p
            className="text-[14px] leading-[1.72]"
            style={{ color: "rgba(240,240,240,.5)", maxWidth: 360 }}
          >
            Los mejores planes y eventos de Medellín, directo a tu correo. Sin
            spam, puro parche.
          </p>
        </div>

        {/* Right */}
        <div>
          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  autoComplete="email"
                  className="w-full text-[15px] font-body outline-none transition-colors duration-200"
                  style={{
                    padding: "15px 18px",
                    background: "rgba(255,255,255,.05)",
                    border: "1.5px solid rgba(255,255,255,.14)",
                    color: "var(--white)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--green)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,.14)")
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center font-display text-[15px] tracking-[.13em] uppercase transition-all duration-200 text-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--black)]"
                style={{
                  padding: "13px 30px",
                  border: "2px solid var(--green)",
                }}
              >
                SUSCRIBIRSE
              </button>
              <p
                className="text-[11px] mt-3 tracking-[.02em]"
                style={{ color: "rgba(240,240,240,.25)" }}
              >
                Sin spam. Dándote de baja cuando quieras.
              </p>
            </form>
          ) : (
            <div className="text-center py-7">
              <div
                className="font-display text-[56px] leading-[1] mb-[14px] animate-checkpop"
                style={{ color: "var(--green)" }}
              >
                ✓
              </div>
              <div className="font-display text-[28px] uppercase mb-2">
                ¡Ya eres parte del parche!
              </div>
              <div
                className="text-[13px]"
                style={{ color: "rgba(240,240,240,.4)" }}
              >
                Revisa tu correo para confirmar tu suscripción.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
