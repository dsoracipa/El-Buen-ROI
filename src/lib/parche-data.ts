export interface Plan {
  id: number;
  title: string;
  cat: string;
  meta: string;
  img: string;
  delay: string;
}

export interface Evento {
  id: number;
  title: string;
  tag: string;
  date: string;
  img: string;
}

export interface Zona {
  id: number;
  name: string;
  count: string;
  img: string;
}

export interface Editorial {
  id: number;
  tag: string;
  title: string;
  titleEm: string;
  desc: string;
  cta: string;
  img: string;
  reversed: boolean;
}

export const PLANES_INIT: Plan[] = [
  {
    id: 1,
    title: "Noche en el Parque Explora",
    cat: "Cultura",
    meta: "Medellín centro · Desde $15.000",
    img: "https://picsum.photos/seed/parque-explora/480/640",
    delay: "0s",
  },
  {
    id: 2,
    title: "Tour Gastronómico Laureles",
    cat: "Gastronomía",
    meta: "Laureles · Desde $45.000",
    img: "https://picsum.photos/seed/tour-gastro/480/640",
    delay: ".12s",
  },
  {
    id: 3,
    title: "Concierto Indie Poblado",
    cat: "Música",
    meta: "El Poblado · Viernes 20:00",
    img: "https://picsum.photos/seed/concierto-indie/480/640",
    delay: ".24s",
  },
  {
    id: 4,
    title: "Escalada en el Arví",
    cat: "Aventura",
    meta: "Parque Arví · Todo el fin",
    img: "https://picsum.photos/seed/escalada-arvi/480/640",
    delay: "0s",
  },
  {
    id: 5,
    title: "Festival Vallenato Urbano",
    cat: "Festival",
    meta: "Parque de los Pies · Sáb.",
    img: "https://picsum.photos/seed/festival-vallenato/480/640",
    delay: ".12s",
  },
  {
    id: 6,
    title: "Arte Callejero del Centro",
    cat: "Arte",
    meta: "Centro · Entrada libre",
    img: "https://picsum.photos/seed/arte-callejero/480/640",
    delay: ".24s",
  },
];

export const PLANES_EXTRA: Plan[] = [
  {
    id: 7,
    title: "Feria del Libro Medellín",
    cat: "Cultura",
    meta: "Parque Norte · Junio 4–7",
    img: "https://picsum.photos/seed/feria-libro/480/640",
    delay: "0s",
  },
  {
    id: 8,
    title: "Run Urbano Medellín",
    cat: "Deporte",
    meta: "El Centro · Dom 8 Jun",
    img: "https://picsum.photos/seed/run-urbano/480/640",
    delay: ".12s",
  },
  {
    id: 9,
    title: "Cine al Parque",
    cat: "Cultura",
    meta: "Laureles · Vie 6 Jun",
    img: "https://picsum.photos/seed/cine-parque/480/640",
    delay: ".24s",
  },
  {
    id: 10,
    title: "Mercado de Las Pulgas",
    cat: "Mercado",
    meta: "Poblado · Sáb 7 Jun",
    img: "https://picsum.photos/seed/mercado-pulgas/480/640",
    delay: "0s",
  },
  {
    id: 11,
    title: "Show de Stand-Up",
    cat: "Humor",
    meta: "Envigado · Mié 4 Jun",
    img: "https://picsum.photos/seed/standup-show/480/640",
    delay: ".12s",
  },
  {
    id: 12,
    title: "Taller de Grafiti",
    cat: "Arte",
    meta: "Commune 13 · Libre",
    img: "https://picsum.photos/seed/taller-grafiti/480/640",
    delay: ".24s",
  },
];

export const CATEGORIAS = [
  "Todos",
  "Cultura",
  "Música",
  "Gastronomía",
  "Aventura",
  "Arte",
  "Festival",
  "Deporte",
  "Mercado",
  "Humor",
];

export const EVENTOS: Evento[] = [
  {
    id: 1,
    title: "Tulum Night Experience",
    tag: "Electronic",
    date: "Sáb 17 May · 22:00",
    img: "https://picsum.photos/seed/tulum-night/270/340",
  },
  {
    id: 2,
    title: "Noches de Jardín",
    tag: "Jazz & Blues",
    date: "Dom 18 May · 18:00",
    img: "https://picsum.photos/seed/noches-jardin/270/340",
  },
  {
    id: 3,
    title: "Feria Culinaria Antioqueña",
    tag: "Gastronomía",
    date: "23–25 May · Todo el día",
    img: "https://picsum.photos/seed/feria-culinaria/270/340",
  },
  {
    id: 4,
    title: "Urban Art Medellín Vol.3",
    tag: "Arte",
    date: "Vie 30 May · 19:00",
    img: "https://picsum.photos/seed/urban-art/270/340",
  },
  {
    id: 5,
    title: "Calle 14 Rap Fest",
    tag: "Hip-Hop",
    date: "Sáb 31 May · 20:00",
    img: "https://picsum.photos/seed/rap-fest/270/340",
  },
  {
    id: 6,
    title: "Perreo al Parque",
    tag: "Reggaeton",
    date: "Dom 1 Jun · 17:00",
    img: "https://picsum.photos/seed/perreo-parque/270/340",
  },
];

export const ZONAS: Zona[] = [
  { id: 1, name: "El Poblado",   count: "312 planes", img: "https://picsum.photos/seed/poblado-mde/380/512" },
  { id: 2, name: "Laureles",     count: "178 planes", img: "https://picsum.photos/seed/laureles-mde/380/512" },
  { id: 3, name: "El Centro",    count: "241 planes", img: "https://picsum.photos/seed/centro-mde/380/512" },
  { id: 4, name: "Envigado",     count: "95 planes",  img: "https://picsum.photos/seed/envigado-mde/380/512" },
  { id: 5, name: "Belén",        count: "67 planes",  img: "https://picsum.photos/seed/belen-mde/380/512" },
  { id: 6, name: "Sabaneta",     count: "54 planes",  img: "https://picsum.photos/seed/sabaneta-mde/380/512" },
  { id: 7, name: "Parque Arví",  count: "42 planes",  img: "https://picsum.photos/seed/arvi-mde/380/512" },
];

export const EDITORIAL: Editorial[] = [
  {
    id: 1,
    tag: "Arte & Cultura",
    title: "PARCH",
    titleEm: "ARTE",
    desc: "Grafitis, murales, instalaciones. La ciudad como lienzo. Descubre los espacios donde el arte callejero de Medellín se convierte en identidad.",
    cta: "Explorar galería",
    img: "https://picsum.photos/seed/street-art-mde/900/600",
    reversed: false,
  },
  {
    id: 2,
    tag: "Música",
    title: "AL RITMO\n",
    titleEm: "PARCHE",
    desc: "Desde salsa hasta reggaeton, jazz hasta metal. La agenda musical de Medellín sin filtro. Bares y la rumba que no aparece en las guías.",
    cta: "Ver agenda",
    img: "https://picsum.photos/seed/music-mde/900/600",
    reversed: true,
  },
  {
    id: 3,
    tag: "Gastronomía",
    title: "PARCHE A\nLA ",
    titleEm: "CARTA",
    desc: "Bandeja paisa en el barrio, sushi en el Poblado, empanadas a las 3AM. La guía de sabores de una ciudad que nunca para de comer.",
    cta: "Descubrir restaurantes",
    img: "https://picsum.photos/seed/gastro-mde/900/600",
    reversed: false,
  },
];
