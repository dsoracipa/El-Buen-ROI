"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[999] flex items-center justify-between px-[5%]"
        style={{
          height: "var(--nav-h)",
          background: "rgba(10,10,10,0.75)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <a
          href="#"
          className="font-display text-[26px] tracking-[0.03em] text-[var(--white)]"
        >
          Par<em className="text-[var(--green)] not-italic">Event</em>
        </a>

        <ul className="hidden md:flex gap-8 list-none">
          {[
            { href: "#planes", label: "Planes" },
            { href: "#eventos", label: "Eventos" },
            { href: "#editorial", label: "Editorial" },
            { href: "#stats", label: "Nosotros" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[12px] font-semibold tracking-[0.13em] uppercase transition-colors duration-200"
                style={{ color: "rgba(240,240,240,0.55)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--green)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(240,240,240,0.55)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="hidden md:inline-block px-[22px] py-2 font-display text-[13px] tracking-[0.13em] uppercase transition-all duration-200 text-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--black)]"
          style={{ border: "1.5px solid var(--green)" }}
        >
          Parchar
        </a>

        <button
          className="flex md:hidden flex-col gap-[5px] p-[6px]"
          aria-label="Menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className="block w-[22px] h-[2px] transition-all duration-300"
            style={{
              background: "var(--white)",
              transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            className="block w-[22px] h-[2px] transition-all duration-300"
            style={{
              background: "var(--white)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-[22px] h-[2px] transition-all duration-300"
            style={{
              background: "var(--white)",
              transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile nav */}
      <div
        className={`fixed left-0 right-0 z-[998] flex-col gap-5 px-[5%] py-7 ${
          open ? "flex" : "hidden"
        }`}
        style={{
          top: "var(--nav-h)",
          background: "rgba(8,8,8,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {[
          { href: "#planes", label: "Planes" },
          { href: "#eventos", label: "Eventos" },
          { href: "#editorial", label: "Editorial" },
          { href: "#stats", label: "Nosotros" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-display text-[28px] tracking-[0.03em] text-[var(--white)]"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          onClick={() => setOpen(false)}
          className="inline-flex justify-center font-display text-[15px] tracking-[0.13em] uppercase px-[30px] py-3 text-[var(--green)]"
          style={{ border: "2px solid var(--green)" }}
        >
          Parchar ahora
        </a>
      </div>
    </>
  );
}
