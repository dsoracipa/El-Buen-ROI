# ParEvent Medellín

> Plataforma editorial de descubrimiento de planes y eventos urbanos en Medellín, Colombia.

**Live →** https://dsoracipa.github.io/El-Buen-ROI/

---

## Tabla de contenidos

- [Visión general](#visión-general)
- [Capturas](#capturas)
- [Stack tecnológico](#stack-tecnológico)
- [Arquitectura del proyecto](#arquitectura-del-proyecto)
- [Design system](#design-system)
- [Secciones implementadas](#secciones-implementadas)
- [Instalación y desarrollo local](#instalación-y-desarrollo-local)
- [Build y deploy](#build-y-deploy)
- [Cómo añadir contenido](#cómo-añadir-contenido)
- [Roadmap](#roadmap)

---

## Visión general

ParEvent es una landing page editorial inspirada en plataformas como **Fever** y revistas urbanas digitales. Presenta los mejores planes, eventos y experiencias de Medellín con un lenguaje visual oscuro, tipografía de impacto y microanimaciones que reflejan la energía de la ciudad.

El proyecto está construido sobre **Next.js 14 App Router** con exportación estática, lo que permite desplegarlo en cualquier CDN o GitHub Pages sin necesidad de servidor.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 14.x | Framework React — App Router, static export |
| [React](https://react.dev) | 18.x | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Utilidades de layout y responsividad |
| [Framer Motion](https://www.framer.com/motion/) | 11.x | Animaciones scroll-triggered, fade-up, drag |
| [next/font/google](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | — | Self-hosting de Anton + DM Sans |

---

## Arquitectura del proyecto

```
web parche bog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD → GitHub Pages (trigger: push to master)
├── public/
│   └── images/                 # Assets estáticos (reemplazar placeholders)
├── src/
│   ├── app/
│   │   ├── globals.css         # Design tokens CSS, keyframes, clases base
│   │   ├── layout.tsx          # Root layout: fuentes, metadata
│   │   └── page.tsx            # Composición de secciones
│   ├── components/
│   │   ├── Navbar.tsx          # Navegación fija glassmorphism + hamburger
│   │   ├── Hero.tsx            # Sección hero full-viewport con glitch animation
│   │   ├── Ticker.tsx          # Marquee de categorías
│   │   ├── ValueProps.tsx      # Fila de propuestas de valor (3 columnas)
│   │   ├── PlanesSection.tsx   # Grid magazine + filtros por categoría + carga más
│   │   ├── EventosSection.tsx  # Carousel horizontal de eventos
│   │   ├── StatsSection.tsx    # Métricas animadas con countup al scroll
│   │   ├── ZonasSection.tsx    # Tarjetas de barrios con drag-to-scroll
│   │   ├── EditorialSection.tsx# Editoriales alternados con fade-up
│   │   ├── Newsletter.tsx      # Formulario de suscripción con estado éxito
│   │   └── Footer.tsx          # Pie de página con 4 columnas de navegación
│   └── lib/
│       └── parche-data.ts      # Capa de datos: planes, eventos, zonas, editoriales
├── next.config.mjs             # Config Next.js: static export, basePath dinámico
├── tailwind.config.ts          # Extensión con tokens de color del design system
└── tsconfig.json
```

### Decisiones de arquitectura

**Static Export (`output: 'export'`)** — El proyecto genera HTML/CSS/JS estático en `/out`. Permite deploys sin servidor en GitHub Pages, Vercel (free tier), Cloudflare Pages, etc.

**CSS Variables + Tailwind híbrido** — Los design tokens (`--green`, `--orange`, `--black`) se definen en `globals.css` como variables CSS y se exponen como clases Tailwind (`pe-green`, `pe-orange`). Esto permite animaciones que mutan el token en runtime (ej. cambio de color de acento) sin recompilar.

**Server vs Client Components** — Los componentes puramente presentacionales (`Ticker`, `ValueProps`) son Server Components. Los que tienen estado, eventos o animaciones de scroll llevan `"use client"`.

**Capa de datos desacoplada** — `src/lib/parche-data.ts` centraliza todo el contenido estático. El diseño de los tipos (`Plan`, `Evento`, `Zona`, `Editorial`) facilita reemplazar la fuente por una API o CMS real sin tocar los componentes.

---

## Design system

Definido en `src/app/globals.css` y extendido en `tailwind.config.ts`.

### Tokens de color

| Token CSS | Valor | Uso |
|---|---|---|
| `--black` | `#0A0A0A` | Background principal |
| `--green` | `#00FF87` | Acento primario (neon verde) |
| `--orange` | `#FF6B2B` | Acento secundario (énfasis editorial) |
| `--white` | `#F0F0F0` | Texto principal |
| `--g900` | `#111111` | Surface oscuro |
| `--g800` | `#1A1A1A` | Surface medio |

### Tipografía

| Variable | Fuente | Uso |
|---|---|---|
| `--font-display` / `font-display` | **Anton** (Google Fonts) | Titulares, CTAs, números |
| `--font-body` | **DM Sans** (Google Fonts) | Cuerpo de texto, etiquetas, meta |

### Animaciones definidas en globals.css

| Keyframe | Duración | Descripción |
|---|---|---|
| `glitch` | 5.5s infinite | Efecto glitch RGB en el titular hero |
| `marquee` | 22s linear infinite | Ticker horizontal de categorías |
| `pulse-line` | 2.2s ease-in-out infinite | Línea pulsante del scroll cue |
| `checkpop` | 0.5s cubic-bezier | Aparición del ✓ en newsletter |

---

## Secciones implementadas

### 1. Navbar
Barra de navegación fija con efecto glassmorphism (`backdrop-filter: blur(18px)`). En mobile se colapsa en menú hamburger con animación de apertura. Links de ancla a cada sección.

### 2. Hero
Ocupa el 100% del viewport (`100svh`). Capas de gradiente + imagen de fondo + scanlines de textura. El texto **"PLAN"** tiene un glitch animation CSS que simula interferencia de señal cada ~5 segundos. Botones CTA con hover neon.

### 3. Ticker
Banda verde con marquee continuo de categorías. El loop es perfecto: el contenido se duplica para que la animación `translateX(-50%)` sea imperceptible.

### 4. Value Props
Fila de 3 columnas con iconos SVG inline y texto corto. Comunica las propuestas de valor de la plataforma.

### 5. Planes Destacados
Grid de 3 columnas con tarjetas magazine (ratio 3:4). Incluye:
- **Filtro por categorías**: chips interactivos (Todos / Cultura / Música / Gastronomía / Aventura / Arte / Festival / Deporte / Mercado / Humor)
- **Hover effect**: título sube, aparece metadata de precio/ubicación
- **Cargar más**: expande la grilla con 6 planes adicionales

### 6. Planes Recomendados (Carousel)
Scroll horizontal con `scroll-snap-type: x mandatory`. Navegación con botones prev/next que calculan el ancho real de la tarjeta para un scroll preciso. Tarjetas formato póster (4:5).

### 7. ParEvent en Números
Tres métricas grandes con **countup animado**: el número sube desde 0 hasta el valor objetivo con easing cúbico al entrar en el viewport (implementado con `useInView` de Framer Motion + `requestAnimationFrame`).

### 8. El Plan de tu Barrio
Carrusel horizontal drag-to-scroll de 7 zonas de Medellín (El Poblado, Laureles, El Centro, Envigado, Belén, Sabaneta, Parque Arví). Implementado con eventos de mouse para simular arrastre nativo.

### 9. Editoriales
Tres bloques editoriales con layout alternado (imagen izquierda / imagen derecha). Cada uno hace fade-up al entrar en viewport con Framer Motion `whileInView`. Temas: **ParchArte** (arte urbano), **Al Ritmo Plan** (música), **Plan a la Carta** (gastronomía).

### 10. Newsletter
Formulario de suscripción con validación de email. Al enviar, el formulario se reemplaza por un mensaje de confirmación con animación `checkpop`.

### 11. Footer
Cuatro columnas: branding + tagline + redes sociales, y tres columnas de navegación (Planes / Eventos / ParEvent).

---

## Instalación y desarrollo local

### Requisitos previos
- Node.js 18+ 
- npm 9+

### Setup

```bash
# Clonar el repositorio
git clone https://github.com/dsoracipa/El-Buen-ROI.git
cd El-Buen-ROI

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor arranca en **http://localhost:3000**.

### Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo con hot reload
npm run build    # Build de producción (genera /out)
npm run start    # Servidor de producción local (requiere build previo)
npm run lint     # Análisis estático con ESLint
```

---

## Build y deploy

### Deploy automático (GitHub Actions)

Cualquier push a la rama **`master`** dispara el workflow `.github/workflows/deploy.yml`, que:

1. Instala dependencias con `npm ci`
2. Ejecuta `npm run build` con `NEXT_PUBLIC_BASE_PATH=/El-Buen-ROI`
3. Sube el directorio `/out` como artefacto de GitHub Pages
4. Despliega en https://dsoracipa.github.io/El-Buen-ROI/

> **Requisito único**: en el repositorio de GitHub, ir a **Settings → Pages → Source** y seleccionar **"GitHub Actions"**.

### Deploy manual

```bash
# Build con basePath configurado
NEXT_PUBLIC_BASE_PATH=/El-Buen-ROI npm run build

# El directorio /out contiene el sitio estático listo para subir a cualquier CDN
```

### Deploy en otros servicios

El proyecto es un sitio estático puro. Compatible con:

| Plataforma | Configuración necesaria |
|---|---|
| **Vercel** | Ninguna (detecta Next.js automáticamente) |
| **Netlify** | Publish directory: `out` |
| **Cloudflare Pages** | Build command: `npm run build`, output: `out` |
| **Servidor propio** | Servir el directorio `out` con nginx/apache |

---

## Cómo añadir contenido

Todo el contenido estático vive en `src/lib/parche-data.ts`. Para actualizar planes, eventos o zonas sin tocar los componentes:

```typescript
// Agregar un nuevo plan a la grilla principal
export const PLANES_INIT: Plan[] = [
  {
    id: 13,
    title: "Nombre del plan",
    cat: "Cultura",              // Debe coincidir con una categoría del filtro
    meta: "Zona · Precio o fecha",
    img: "https://url-de-imagen.com/480/640",
    delay: "0s",
  },
  // ...
];
```

### Tipos disponibles

```typescript
Plan      // id, title, cat, meta, img, delay
Evento    // id, title, tag, date, img
Zona      // id, name, count, img
Editorial // id, tag, title, titleEm, desc, cta, img, reversed
```

> Para conectar con un CMS (Contentful, Sanity, Strapi) o una API REST, basta con reemplazar las constantes de `parche-data.ts` por llamadas `fetch()` en los Server Components correspondientes.

---

## Roadmap

- [ ] Página de detalle de plan (`/planes/[slug]`)
- [ ] Página de agenda completa (`/eventos`) con filtros por fecha y categoría
- [ ] Mapa interactivo de zonas (Leaflet / Mapbox GL)
- [ ] Integración con CMS headless (Sanity / Contentful)
- [ ] Búsqueda global con Algolia o búsqueda local
- [ ] Sistema de favoritos con `localStorage`
- [ ] Página de perfil de zona (`/zonas/[barrio]`)
- [ ] SEO dinámico con `generateMetadata` por página

---

## Licencia

© 2026 ParEvent. Todos los derechos reservados.
