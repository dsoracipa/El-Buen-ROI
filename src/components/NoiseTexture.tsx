'use client';

import { useEffect, useRef } from 'react';

function buildNoiseSrc(seed: number) {
  return `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch' seed='${seed}'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;
}

export default function NoiseTexture() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let seed = 1;
    const id = setInterval(() => {
      seed = (seed % 99) + 1;
      if (ref.current) ref.current.style.backgroundImage = buildNoiseSrc(seed);
    }, 150);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: 0.06,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
        backgroundImage: buildNoiseSrc(1),
      }}
    />
  );
}
