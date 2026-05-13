# El Buen ROI

> Análisis de inversión aplicado al entretenimiento bogotano. Métricas reales. Sin filtros. Sin consumos mínimos ocultos.

**Live:** https://dsoracipa.github.io/El-Buen-ROI/

---

## Concepto

*El Buen ROI* es una revista digital que evalúa los "parches" de Bogotá bajo la misma lupa que un analista financiero evaluaría un activo. Cada plan tiene su propio balance:

| Métrica | Significado |
|---------|-------------|
| **ROE** (Return on Entertainment) | Diversión real obtenida sobre el capital y tiempo invertidos (0–100) |
| **Capex del Parche** | Inversión inicial dura: transporte + cover/entrada |
| **EBITDA del plan** | Valor real disfrutado antes de gastos extra e impuestos |
| **Perfil de Riesgo** | Conservador → Moderado → Agresivo → Especulativo |

---

## Stack Tecnológico

| Capa | Herramienta | Versión |
|------|-------------|---------|
| Framework | Next.js App Router | 14 |
| Lenguaje | TypeScript | 5 |
| Estilos | Tailwind CSS | 3 |
| Animaciones | Framer Motion | 11 |
| Íconos | Lucide React | latest |
| Fuentes | Anton · Inter · Space Mono | Google Fonts |
| Deploy | GitHub Pages (static export) | — |

---

## Paleta de Diseño

```
#0A0A0A  — Fondo profundo (background)
#E5E5E5  — Texto principal (foreground)
#111111  — Superficie de cards (surface)
#D90429  — Rojo fuego (fire-red)    ← riesgo, pérdida, alerta
#00D964  — Verde terminal           ← ganancia, ROE alto, positivo
#FFD166  — Amarillo mostaza         ← advertencia, moderado, Capex
#FF6B35  — Naranja agresivo         ← perfil de riesgo agresivo
```

**Tipografías:**
- `Anton` — títulos gigantes en mayúsculas (neobrutalismo)
- `Inter` — cuerpo de texto y UI general
- `Space Mono` — **todos los valores numéricos** (precios, ROE, EBITDA) — estética de terminal de trading

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css                  ← variables CSS, fuentes, animaciones globales
│   ├── layout.tsx                   ← root layout (Navbar + NoiseTexture + PageTransition)
│   ├── page.tsx                     ← homepage (Hero + BentoGrid + Calculadora)
│   └── parches/[slug]/page.tsx      ← detalle de cada parche
├── components/
│   ├── HeroBanner.tsx               ← parallax + stagger reveal + ticker de precios
│   ├── Navbar.tsx                   ← fijo, glassmorphism al scroll, badge "Análisis en vivo"
│   ├── BentoGrid.tsx                ← grid asimétrico + toggle Prueba Ácida
│   ├── ParcheCard.tsx               ← card con métricas financieras + magnetic hover
│   ├── ParcheCalculator.tsx         ← slider + portafolio animado (feature principal ⭐)
│   ├── PruebaAcidaToggle.tsx        ← toggle estilo trading que filtra consumos mínimos
│   ├── BlinkingMetric.tsx           ← número parpadeante verde/rojo
│   ├── RiskBadge.tsx                ← badge visual de perfil de riesgo
│   ├── MagneticButton.tsx           ← botones/divs que siguen el cursor magnéticamente
│   ├── ScrollReveal.tsx             ← wrapper fade-up al entrar en viewport
│   ├── PageTransition.tsx           ← transiciones suaves entre rutas
│   └── NoiseTexture.tsx             ← overlay SVG de ruido de fondo
└── lib/
    └── parches.ts                   ← modelo de datos + 6 parches de muestra + helpers
```

---

## Animaciones Implementadas

### 1. Hero — Stagger Reveal
Las líneas del título `EL BUEN / ROI` se revelan desde abajo hacia arriba con un stagger de 130ms entre cada línea. Implementado con `overflow: hidden` como máscara y `y: 105% → 0%` en cada variante.

### 2. Hero — Parallax
El fondo del hero usa `useScroll` + `useTransform` de Framer Motion, mapeando el progreso de scroll `[0, 1]` a un desplazamiento vertical `[0%, -18%]`. Un `useSpring` suaviza el movimiento para que sea orgánico.

### 3. Hero — Ticker de precios
Barra inferior con scroll horizontal infinito animado con CSS `@keyframes ticker-scroll`. Muestra ROE en "tiempo real" de cada parche con indicadores ▲/▼.

### 4. Cards — Magnetic Hover
`useMotionValue(0)` + `useSpring` sobre los ejes X/Y. En `onMouseMove`, se calcula el offset desde el centro del elemento y se aplica un `strength` (0.07 por defecto) para un efecto sutil pero perceptible. En `onMouseLeave`, las springs vuelven a 0 con amortiguación natural.

### 5. Scroll Reveal
`useInView` con `margin: '0px 0px -12% 0px'` dispara la animación cuando el elemento está a punto de entrar al viewport, con un fade-up (`y: 36 → 0`, `scale: 0.97 → 1`) y curva `[0.22, 1, 0.36, 1]` (ease-out expo).

### 6. Calculadora de Portafolio (⭐ Feature principal)
- Slider de presupuesto: `10.000 → 200.000 COP` en pasos de 5.000
- Los parches con `capex ≤ presupuesto` entran al portafolio, ordenados por ROE descendente
- `AnimatePresence mode="popLayout"` anima la entrada/salida de cada card al cambiar el slider
- `motion.div layout` permite el reflow fluido del grid cuando las posiciones cambian
- Las barras de ROE se animan de 0 → valor real al aparecer cada card

### 7. Prueba Ácida
Toggle visual que filtra parches con `tieneConsumoMinimo: true`. `AnimatePresence` anima la salida de las cards excluidas. El banner de aviso activo usa `height: 0 → auto` animado.

### 8. Page Transitions
`AnimatePresence mode="wait"` con `key={pathname}` en `PageTransition.tsx`. La página saliente hace fade-out + `y: -14`, la nueva hace fade-in + `y: 14 → 0`.

### 9. Navbar Glassmorphism
`useMotionValueEvent` observa `scrollY`. Cuando supera el 88% del viewport height, `backgroundColor` cambia a `rgba(10,10,10,0.80)` y `backdropFilter` a `blur(18px)`.

---

## Configuración de Despliegue (GitHub Pages)

### `next.config.mjs`
```js
output: 'export'               // Genera carpeta out/ estática
trailingSlash: true            // URLs con / final para GitHub Pages
images: { unoptimized: true }  // Sin servidor de imágenes
basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? ''
assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ?? ''
```

### GitHub Actions (`.github/workflows/deploy.yml`)
Cada push a `main` dispara el workflow:
1. `npm ci` — instala dependencias
2. `npm run build` con `NEXT_PUBLIC_BASE_PATH=/El-Buen-ROI`
3. Sube la carpeta `out/` como artefacto de Pages
4. Despliega en `https://dsoracipa.github.io/El-Buen-ROI/`

### Activar GitHub Pages
En tu repositorio → **Settings → Pages → Source → GitHub Actions**

---

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# → http://localhost:3000

# Build estático (verifica que no hay errores)
npm run build
# → genera carpeta out/

# Servir el build estático localmente
npx serve out -p 3001
# → http://localhost:3001

# Verificar tipos TypeScript
npx tsc --noEmit
```

---

## Reemplazar Imágenes Placeholder

Las imágenes en `public/images/` son placeholders de color sólido. Para producción, reemplázalas con fotos reales de Bogotá:

| Archivo | Parche |
|---------|--------|
| `hero-bg.jpg` | Imagen de fondo del hero (1920×1080 recomendado) |
| `parche-1.jpg` | Ciclovía Dominical |
| `parche-2.jpg` | Teatro La Candelaria |
| `parche-3.jpg` | Mercado de Paloquemao |
| `parche-4.jpg` | Zona Rosa Nocturna |
| `parche-5.jpg` | Grafiti Tour Bogotá |
| `parche-6.jpg` | Bar speakeasy Usaquén |

Tamaño recomendado: **1200×800px**, formato JPEG/WebP optimizado.

---

## Agregar Nuevos Parches

Edita `src/lib/parches.ts` y añade un objeto al array `parches`:

```ts
{
  slug: 'tu-parche-unico',          // URL: /parches/tu-parche-unico
  nombre: 'Nombre del Parche',
  categoria: 'Cultura',             // Nightlife | Gastronomía | Cultura | Deporte | Arte
  resumen: 'Resumen corto...',
  imagen: '/images/tu-parche.jpg',
  roe: 80,                          // 0–100
  capex: 35000,                     // COP
  ebitda: 60000,                    // COP
  perfilRiesgo: 'Moderado',         // Conservador | Moderado | Agresivo | Especulativo
  tieneConsumoMinimo: false,
  precioBase: 20000,                // COP
  fecha: '2025-05-13',
  contenido: 'Análisis completo...',
}
```

---

## Checklist de Verificación Visual

- [ ] Hero: título se revela en stagger al cargar la página
- [ ] Hero: parallax suave en la imagen de fondo al hacer scroll
- [ ] Hero: ticker de precios con scroll horizontal infinito
- [ ] Navbar: transparente sobre el hero, glassmorphism al bajar
- [ ] BentoGrid: cards aparecen con fade-up staggered al hacer scroll
- [ ] Cards: efecto magnético sutil al pasar el cursor
- [ ] Cards: borde rojo + shadow brutal al hacer hover
- [ ] Prueba Ácida: toggle filtra cards con consumo mínimo con animación suave
- [ ] Calculadora: slider cambia el portafolio con AnimatePresence
- [ ] Calculadora: barras de ROE se animan al aparecer cada card
- [ ] Navegación home → detalle de parche: transición fade suave
- [ ] Página de detalle: dashboard de 4 métricas financieras
- [ ] Números en Space Mono, parpadeantes en verde/rojo según valor
- [ ] `npm run build` sin errores TypeScript

---

*El Buen ROI — Maximiza cada peso en la calle.* 

