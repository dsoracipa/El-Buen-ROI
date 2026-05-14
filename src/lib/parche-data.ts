// ─── INTERFACES ────────────────────────────────────────────────────────────

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Plan {
  id: number;
  slug: string;
  title: string;
  cat: string;
  meta: string;
  img: string;
  delay: string;
  zona: string;
  price: number;
  priceLabel: string;
  rating: number;
  reviewCount: number;
  duration: string;
  schedule: string;
  description: string[];
  includes: string[];
  highlights: string[];
  reviews: Review[];
}

export interface Evento {
  id: number;
  slug: string;
  title: string;
  tag: string;
  date: string;
  img: string;
  price: number;
  priceLabel: string;
  availability: "disponible" | "pocas-entradas" | "agotado";
  venue: string;
  zona: string;
  description: string[];
}

export interface Zona {
  id: number;
  name: string;
  count: string;
  img: string;
  trending: boolean;
  thisWeek: number;
  featuredEvent: string;
  description: string;
  cats: string[];
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

// ─── PLANS ─────────────────────────────────────────────────────────────────

export const PLANES_INIT: Plan[] = [
  {
    id: 1,
    slug: "noche-parque-explora",
    title: "Noche en el Parque Explora",
    cat: "Cultura",
    meta: "Medellín Centro · Desde $15.000",
    img: "https://picsum.photos/seed/parque-explora/480/640",
    delay: "0s",
    zona: "Medellín Centro",
    price: 15000,
    priceLabel: "Desde $15.000",
    rating: 4.8,
    reviewCount: 234,
    duration: "2 horas",
    schedule: "Vie y Sáb · 19:00 – 21:00",
    description: [
      "El Parque Explora abre sus puertas de noche con una experiencia radicalmente diferente. Las instalaciones se transforman con iluminación de baja frecuencia, sonido ambiente y activaciones especiales que no encontrarás en el horario regular. El acuario adquiere una atmósfera única cuando los reflectores se apagan y solo quedan los azules del agua.",
      "Es el plan perfecto para parejas, amigos curiosos o quienes quieran ver Medellín desde un ángulo que la mayoría ignora. Los guías nocturnos llevan años acompañando estas experiencias y conocen los rincones que de día pasan desapercibidos. Capacidad limitada a 40 personas por sesión.",
    ],
    includes: [
      "Entrada al complejo interactivo",
      "Acceso a todas las exposiciones permanentes",
      "Guía nocturno certificado",
      "Bebida de bienvenida (aguapanela con limón o jugo de lulo)",
      "Seguro de viaje incluido",
    ],
    highlights: [
      "Acuario con iluminación nocturna especial",
      "Sala de inmersión 360° en modo noche",
      "Terraza con vista panorámica a las luces de la ciudad",
    ],
    reviews: [
      { author: "Valentina R.", rating: 5, text: "Fui con mi novio y quedamos sin palabras. El acuario de noche es algo que no se puede describir, hay que vivirlo. Totalmente recomendado.", date: "Abr 2026" },
      { author: "Santiago M.", rating: 5, text: "La guía era excelente, conocía cada detalle del parque. La bebida de bienvenida fue un detalle bacano. Ya quiero volver.", date: "Mar 2026" },
      { author: "Juliana C.", rating: 4, text: "Muy buen plan, aunque me hubiera gustado más tiempo en la sala 360°. De todas formas vale cada peso.", date: "Mar 2026" },
    ],
  },
  {
    id: 2,
    slug: "tour-gastronomico-laureles",
    title: "Tour Gastronómico Laureles",
    cat: "Gastronomía",
    meta: "Laureles · Desde $45.000",
    img: "/images/gastro.png",
    delay: ".12s",
    zona: "Laureles",
    price: 45000,
    priceLabel: "Desde $45.000",
    rating: 4.9,
    reviewCount: 412,
    duration: "3 horas",
    schedule: "Sáb y Dom · 11:00 – 14:00",
    description: [
      "Laureles es el barrio más sabroso de Medellín y este recorrido lo demuestra con pruebas. Cinco paradas cuidadosamente seleccionadas te llevan desde el desayuno antioqueño más auténtico hasta el postre que cierra con broche de oro. No es una ruta turística: es la misma ruta que hacen los locales un domingo.",
      "El guía, cocinero profesional formado en el barrio, te cuenta la historia detrás de cada receta, cada local y cada ingrediente. Aprenderás a distinguir una buena bandeja paisa, a pedir el changua perfecto y a encontrar las empanadas que no aparecen en ningún mapa.",
    ],
    includes: [
      "5 paradas gastronómicas con degustación completa",
      "Guía experto con formación culinaria",
      "Mapa del barrio con referencias y contactos",
      "Recetario digital de los platos probados",
      "Seguro de viaje incluido",
    ],
    highlights: [
      "Bandeja paisa en restaurante familiar con 40 años de trayectoria",
      "Mercado de productores locales con frutas exóticas del Eje Cafetero",
      "Cierre con postre típico y café de origen antioqueño",
    ],
    reviews: [
      { author: "Camila P.", rating: 5, text: "El mejor plan de Medellín sin duda. Comí cosas que nunca hubiera encontrado sola. El guía es una enciclopedia gastronómica.", date: "May 2026" },
      { author: "Andrés F.", rating: 5, text: "Vine con clientes extranjeros y quedaron enamorados de la ciudad. El recorrido tiene el ritmo perfecto.", date: "Abr 2026" },
      { author: "María J.", rating: 5, text: "Llevaba 3 años viviendo en Laureles y descubrí lugares que no conocía. Eso lo dice todo.", date: "Abr 2026" },
    ],
  },
  {
    id: 3,
    slug: "concierto-indie-poblado",
    title: "Concierto Indie Poblado",
    cat: "Música",
    meta: "El Poblado · Viernes 20:00",
    img: "/images/concierto.png",
    delay: ".24s",
    zona: "El Poblado",
    price: 35000,
    priceLabel: "Desde $35.000",
    rating: 4.7,
    reviewCount: 189,
    duration: "3 horas",
    schedule: "Vie · 20:00 – 23:00",
    description: [
      "La escena indie de Medellín tiene un nuevo punto de encuentro. Cada viernes, tres bandas locales y un artista invitado toman el escenario del venue más íntimo del Poblado para demostrar que la música hecha aquí no tiene nada que envidiarle a ningún lado.",
      "El formato es deliberadamente pequeño: 200 personas máximo, sonido diseñado para el espacio y una copa incluida para empezar la noche bien. No hay telón, no hay pantallas gigantes. Solo la música y la gente.",
    ],
    includes: [
      "Entrada al evento con acceso completo",
      "Copa de bienvenida (cerveza artesanal o coctel de la casa)",
      "Acceso a zona de networking posterior al show",
      "Playlist digital con los artistas de la noche",
    ],
    highlights: [
      "Venue íntimo con capacidad máxima de 200 personas",
      "Tres bandas locales + artista invitado sorpresa",
      "Sonido de alta fidelidad diseñado para el espacio",
    ],
    reviews: [
      { author: "Felipe O.", rating: 5, text: "Encontré mi banda favorita aquí. El formato íntimo hace que la conexión con los artistas sea real.", date: "May 2026" },
      { author: "Laura M.", rating: 4, text: "Muy buena vibra, el sonido es increíble para el tamaño del lugar. La copa de bienvenida marca la diferencia.", date: "Abr 2026" },
      { author: "Sebastián V.", rating: 5, text: "Llevo 6 viernes seguidos viniendo. Es el mejor plan de la semana, sin discusión.", date: "May 2026" },
    ],
  },
  {
    id: 4,
    slug: "escalada-arvi",
    title: "Escalada en el Arví",
    cat: "Aventura",
    meta: "Parque Arví · Todo el fin",
    img: "/images/escalada.png",
    delay: "0s",
    zona: "Parque Arví",
    price: 55000,
    priceLabel: "Desde $55.000",
    rating: 4.6,
    reviewCount: 156,
    duration: "4 horas",
    schedule: "Sáb y Dom · 08:00 – 12:00",
    description: [
      "El Parque Arví tiene paredes naturales que los escaladores de la ciudad conocen bien y el resto de Medellín ignora. Esta experiencia te lleva directo a ellas, guiado por instructores certificados con más de diez años escalando en el Eje Cafetero y los Andes antioqueños.",
      "No se necesita experiencia previa. El equipo está incluido, el instructor adapta el nivel al grupo y la ruta de iniciación es accesible para cualquier persona con condición física normal. Para los que ya escalan, hay opciones de dificultad media y alta que ponen a prueba la técnica.",
    ],
    includes: [
      "Equipo completo de escalada (arnés, casco, zapatos)",
      "Instructor certificado por la Federación Colombiana de Montaña",
      "Transporte desde estación del Metro Cable",
      "Hidratación durante toda la actividad",
      "Seguro de accidentes deportivos",
    ],
    highlights: [
      "Paredes de roca natural en entorno de bosque andino",
      "Vistas a Medellín desde 2.400 m de altitud",
      "Opción de ruta para principiantes y nivel intermedio/avanzado",
    ],
    reviews: [
      { author: "Daniela H.", rating: 5, text: "Nunca había escalado y salí queriendo ir todos los fines de semana. El instructor tiene una paciencia y una didáctica increíbles.", date: "Abr 2026" },
      { author: "Tomás R.", rating: 4, text: "Las vistas desde arriba son la mejor recompensa. El equipo está en excelente estado.", date: "Mar 2026" },
      { author: "Natalia G.", rating: 5, text: "Fui con mi hermano que tiene miedo a las alturas. Salió victorioso y yo orgullosa.", date: "May 2026" },
    ],
  },
  {
    id: 5,
    slug: "festival-vallenato-urbano",
    title: "Festival Vallenato Urbano",
    cat: "Festival",
    meta: "Parque de los Pies · Sáb.",
    img: "/images/vallenato.png",
    delay: ".12s",
    zona: "Parque de los Pies",
    price: 25000,
    priceLabel: "Desde $25.000",
    rating: 4.5,
    reviewCount: 98,
    duration: "5 horas",
    schedule: "Sáb · 15:00 – 20:00",
    description: [
      "El vallenato no es solo del Caribe: Medellín lo adoptó y lo transformó. El Festival Vallenato Urbano lleva cuatro años reuniendo a los mejores acordeonistas del Caribe colombiano con beatmakers y productores de la ciudad para crear algo que no suena a ningún lado más.",
      "Cuatro escenarios simultáneos, zona de comida con platos de todas las regiones del país, talleres de baile y una sección dedicada a los niños hacen de este festival un plan completo para cualquier tipo de público.",
    ],
    includes: [
      "Entrada a los 4 escenarios del festival",
      "Taller de baile de cumbia (1 hora, cupos limitados)",
      "Acceso a zona de comida con restaurantes regionales",
      "Programa impreso con agenda completa",
    ],
    highlights: [
      "8 artistas en cartelera: 4 consagrados + 4 emergentes",
      "Fusión vallenato-electrónica en escenario principal",
      "Zona infantil con talleres musicales gratuitos",
    ],
    reviews: [
      { author: "Carolina A.", rating: 5, text: "El escenario de fusión es increíble. Mezclar acordeón con electrónica suena raro en el papel pero en vivo es algo especial.", date: "May 2026" },
      { author: "Mateo L.", rating: 4, text: "Muy bien organizado. La zona de comida es un festival dentro del festival.", date: "Abr 2026" },
      { author: "Alejandra C.", rating: 5, text: "Fui con mis papás y mis hijos y todos lo pasaron increíble.", date: "Mar 2026" },
    ],
  },
  {
    id: 6,
    slug: "arte-callejero-centro",
    title: "Arte Callejero del Centro",
    cat: "Arte",
    meta: "Centro · Entrada libre",
    img: "https://picsum.photos/seed/arte-callejero/480/640",
    delay: ".24s",
    zona: "El Centro",
    price: 0,
    priceLabel: "Entrada libre",
    rating: 4.9,
    reviewCount: 567,
    duration: "2 horas",
    schedule: "Diario · 09:00 – 18:00",
    description: [
      "El Centro de Medellín es el museo de arte urbano más grande de la ciudad y no tiene paredes, ni horario, ni entrada. Desde la Alpujarra hasta San Antonio, más de 200 murales firmados por artistas locales e internacionales cuentan la historia, los sueños y las contradicciones de una ciudad que aprendió a expresarse en el asfalto.",
      "Esta ruta a pie está diseñada para recorrer los 18 murales más importantes en 2 horas, con fichas de cada artista y el contexto histórico detrás de cada obra. Disponible como recorrido autoguiado con mapa descargable o como tour guiado los sábados a las 10:00.",
    ],
    includes: [
      "Mapa digital descargable con las 18 obras de la ruta",
      "Fichas de artista y contexto histórico de cada mural",
      "Acceso al tour guiado del sábado (previa inscripción)",
      "Descuento del 20% en la tienda del colectivo de arte",
    ],
    highlights: [
      "18 murales de artistas de 6 países en 2 km de recorrido",
      "Obras de artistas que han expuesto en Miami, Buenos Aires y Berlín",
      "Ruta por la Commune 13, epicentro del arte urbano mundial",
    ],
    reviews: [
      { author: "Pablo E.", rating: 5, text: "Vine de Bogotá solo para hacer esta ruta y no me arrepiento. Hay una obra de 80 metros que me dejó sin palabras.", date: "May 2026" },
      { author: "Isabella R.", rating: 5, text: "El tour guiado del sábado es impresionante. Saber la historia detrás de cada mural cambia completamente la experiencia.", date: "Abr 2026" },
      { author: "David C.", rating: 5, text: "El mejor plan de Medellín que no cuesta nada. Lo he hecho tres veces con personas diferentes y siempre descubro algo nuevo.", date: "Abr 2026" },
    ],
  },
];

export const PLANES_EXTRA: Plan[] = [
  {
    id: 7,
    slug: "feria-libro-medellin",
    title: "Feria del Libro Medellín",
    cat: "Cultura",
    meta: "Parque Norte · Junio 4–7",
    img: "https://picsum.photos/seed/feria-libro/480/640",
    delay: "0s",
    zona: "Parque Norte",
    price: 12000,
    priceLabel: "Desde $12.000",
    rating: 4.8,
    reviewCount: 320,
    duration: "Día completo",
    schedule: "Jun 4–7 · 10:00 – 20:00",
    description: [
      "La Feria del Libro de Medellín es el evento editorial más importante del nororiente antioqueño. Cuatro días de charlas, lanzamientos, firmas de autor y un mercado de libros nuevos y usados que atrae a libreros de todo el país.",
      "Más de 80 editoriales independientes, 40 charlas magistrales y un espacio infantil con cuentacuentos hacen de esta feria un maratón cultural que vale la pena planear con anticipación.",
    ],
    includes: [
      "Acceso a todos los pabellones y el mercado de libros",
      "Programa completo de charlas y presentaciones",
      "Bolsa de tela con logo de la feria",
      "Voucher de $5.000 para compra de libros usados",
    ],
    highlights: [
      "80+ editoriales independientes con precios especiales",
      "40 charlas con autores colombianos e internacionales",
      "Espacio infantil con cuentacuentos en vivo",
    ],
    reviews: [
      { author: "Sofía B.", rating: 5, text: "Gasté más de lo planeado en libros pero no me arrepiento de nada. El ambiente es único.", date: "Jun 2025" },
      { author: "Ricardo P.", rating: 5, text: "La charla de Piedad Bonnett fue el momento más memorable que he tenido en un evento cultural.", date: "Jun 2025" },
      { author: "Ana M.", rating: 4, text: "Muy completa. Le faltaba un poco más de espacio, pero el contenido es de primer nivel.", date: "Jun 2025" },
    ],
  },
  {
    id: 8,
    slug: "run-urbano-medellin",
    title: "Run Urbano Medellín",
    cat: "Deporte",
    meta: "El Centro · Dom 8 Jun",
    img: "https://picsum.photos/seed/run-urbano/480/640",
    delay: ".12s",
    zona: "El Centro",
    price: 30000,
    priceLabel: "Desde $30.000",
    rating: 4.6,
    reviewCount: 204,
    duration: "2 horas",
    schedule: "Dom · 06:30 – 08:30",
    description: [
      "La carrera urbana más bacana de Medellín convierte las calles del Centro en una pista de 5K y 10K al amanecer. Nada de correr solos por el parque: aquí corres con 800 personas mientras la ciudad aún duerme.",
      "Hay categorías para todos los niveles desde los 16 años. La inscripción incluye camiseta técnica, chip de cronometraje y el desayuno post-carrera con frutas, granola y café de origen.",
    ],
    includes: [
      "Inscripción a categoría 5K o 10K",
      "Camiseta técnica reciclada edición especial",
      "Chip de cronometraje homologado",
      "Desayuno post-carrera en el Parque de las Luces",
      "Medalla de finisher para todos los participantes",
    ],
    highlights: [
      "Ruta por el Centro Histórico con cierre de calles",
      "Salida sincronizada con el amanecer de Medellín",
      "Zona de calentamiento con DJ en vivo",
    ],
    reviews: [
      { author: "Jorge A.", rating: 5, text: "Correr por el Centro sin carros es una experiencia que no tiene precio. El ambiente en la llegada es increíble.", date: "Abr 2026" },
      { author: "Paola S.", rating: 5, text: "Primera carrera de mi vida y me dejó con ganas de más. La organización fue perfecta.", date: "Mar 2026" },
      { author: "Carlos V.", rating: 4, text: "Todo muy bien organizado. Me gustaría más estaciones de agua en la ruta de 10K.", date: "May 2026" },
    ],
  },
  {
    id: 9,
    slug: "cine-al-parque-laureles",
    title: "Cine al Parque",
    cat: "Cultura",
    meta: "Laureles · Vie 6 Jun",
    img: "https://picsum.photos/seed/cine-parque/480/640",
    delay: ".24s",
    zona: "Laureles",
    price: 8000,
    priceLabel: "Desde $8.000",
    rating: 4.7,
    reviewCount: 445,
    duration: "2.5 horas",
    schedule: "Vie · 19:30 (inicio con puesta del sol)",
    description: [
      "Cine al Parque lleva la pantalla grande a los parques de Medellín. Cada viernes, una película diferente proyectada bajo las estrellas en el Parque de Laureles con sonido envolvente inalámbrico que cada asistente recibe en sus audífonos.",
      "La selección de películas combina cine colombiano reciente, clásicos del mundo y estrenos independientes que no llegaron a las salas comerciales.",
    ],
    includes: [
      "Audífonos inalámbricos de alta fidelidad durante la proyección",
      "Silla de camping individual (o trae la tuya)",
      "Manta de cortesía para las noches frías",
      "Combo palomitas + bebida artesanal",
    ],
    highlights: [
      "Pantalla de 12 metros con proyección 4K",
      "Sonido individual inalámbrico: sin ruido ambiental",
      "Ciclo mensual con estreno de cine colombiano",
    ],
    reviews: [
      { author: "Manuela T.", rating: 5, text: "Ver cine con audífonos al aire libre cambia todo. Es la experiencia de cine más íntima que he tenido.", date: "May 2026" },
      { author: "Esteban R.", rating: 5, text: "La selección de películas es muy curada. Nada de blockbusters, todo cine con algo que decir.", date: "Abr 2026" },
      { author: "Gabriela F.", rating: 4, text: "El plan perfecto para una noche de viernes. Llevar cobija es obligatorio, Medellín se pone fría de noche.", date: "Abr 2026" },
    ],
  },
  {
    id: 10,
    slug: "mercado-las-pulgas-poblado",
    title: "Mercado de Las Pulgas",
    cat: "Mercado",
    meta: "Poblado · Sáb 7 Jun",
    img: "https://picsum.photos/seed/mercado-pulgas/480/640",
    delay: "0s",
    zona: "El Poblado",
    price: 0,
    priceLabel: "Entrada libre",
    rating: 4.6,
    reviewCount: 612,
    duration: "3 horas",
    schedule: "Sáb · 09:00 – 14:00",
    description: [
      "El mercado de pulgas más curado de Medellín. Más de 120 expositores entre coleccionistas de discos de vinilo, diseñadores independientes, artesanos, libreros de viejo y vendedores de piezas de diseño y antigüedades.",
      "Más que un mercado, es un punto de encuentro cultural. Hay música en vivo, food trucks con cocina de autor y talleres de restauración de objetos.",
    ],
    includes: [
      "Acceso libre a todos los puestos del mercado",
      "Programa de talleres gratuitos del día",
      "Mapa de expositores por categoría",
    ],
    highlights: [
      "120+ expositores: diseño, antigüedades, vinilos, libros",
      "Zona de food trucks con cocina de autor",
      "Música en vivo durante todo el mercado",
    ],
    reviews: [
      { author: "Lina P.", rating: 5, text: "Encontré un vinilo de Los Yetis de 1967 en perfecto estado. Este mercado es un tesoro.", date: "May 2026" },
      { author: "Hernán C.", rating: 4, text: "Los food trucks tienen la mejor relación precio-calidad que he encontrado en Medellín.", date: "Abr 2026" },
      { author: "Viviana M.", rating: 5, text: "Voy casi todos los sábados. Cada vez hay expositores diferentes y siempre encuentro algo.", date: "May 2026" },
    ],
  },
  {
    id: 11,
    slug: "show-stand-up-envigado",
    title: "Show de Stand-Up",
    cat: "Humor",
    meta: "Envigado · Mié 4 Jun",
    img: "https://picsum.photos/seed/standup-show/480/640",
    delay: ".12s",
    zona: "Envigado",
    price: 28000,
    priceLabel: "Desde $28.000",
    rating: 4.8,
    reviewCount: 178,
    duration: "2 horas",
    schedule: "Mié · 20:30 – 22:30",
    description: [
      "El stand-up comedy en Medellín tiene un nivel que sorprende a quien viene de otras ciudades. Esta noche de miércoles reúne cuatro comediantes en formato showcase: 20 minutos cada uno, material completamente nuevo y un headliner que cierra con todo.",
      "El espacio no pasa de 80 sillas, lo que crea la intimidad perfecta para que el humor funcione. La primera copa está incluida y el bar tiene cócteles con nombres que son chistes en sí mismos.",
    ],
    includes: [
      "Entrada al show completo (4 comediantes)",
      "Primera copa incluida (coctel de la casa o cerveza)",
      "Acceso al meet & greet post-show con los artistas",
    ],
    highlights: [
      "Formato íntimo: máximo 80 personas",
      "4 comediantes con material exclusivo para la noche",
      "Headliner invitado de Bogotá o Cali",
    ],
    reviews: [
      { author: "Simón A.", rating: 5, text: "Me dolía el estómago de reír. El headliner fue brutal. Precio muy justo para lo que se recibe.", date: "May 2026" },
      { author: "Catalina B.", rating: 5, text: "El formato de 4 comediantes es muy dinámico. Siempre hay uno que te vuela la cabeza.", date: "Abr 2026" },
      { author: "Mauricio D.", rating: 4, text: "Muy bien. El espacio pequeño hace que el chiste llegue diferente.", date: "Mar 2026" },
    ],
  },
  {
    id: 12,
    slug: "taller-grafiti-commune13",
    title: "Taller de Grafiti",
    cat: "Arte",
    meta: "Commune 13 · Libre",
    img: "https://picsum.photos/seed/taller-grafiti/480/640",
    delay: ".24s",
    zona: "Commune 13",
    price: 0,
    priceLabel: "Entrada libre",
    rating: 4.9,
    reviewCount: 389,
    duration: "3 horas",
    schedule: "Sáb · 10:00 – 13:00",
    description: [
      "El colectivo de arte de la Commune 13 ofrece talleres gratuitos de grafiti para cualquiera que quiera aprender. No se pide experiencia, solo ganas. Los materiales están incluidos y los instructores son los mismos artistas que tienen obras en los muros más famosos del barrio.",
      "El taller no es un ejercicio turístico: es parte del programa de arte comunitario que el colectivo lleva ocho años desarrollando en la commune. Tu obra del día queda en un muro colectivo que se renueva cada mes.",
    ],
    includes: [
      "Todos los materiales (sprays, stencils, boquillas)",
      "Instructor artista del colectivo local",
      "Espacio en el muro colectivo del barrio",
      "Recorrido guiado por los murales históricos de la commune",
    ],
    highlights: [
      "Aprende con los artistas que crearon el mural más fotografiado de Medellín",
      "Tu obra queda en un muro real del barrio",
      "Acceso a rincones de la Commune 13 que no están en el circuito turístico",
    ],
    reviews: [
      { author: "Renata O.", rating: 5, text: "Vine sin saber nada de grafiti y salí con una obra que me enorgullece. Los instructores son increíbles.", date: "May 2026" },
      { author: "Nicolás S.", rating: 5, text: "Gratis y de esta calidad. Medellín es otra cosa.", date: "Abr 2026" },
      { author: "Elena V.", rating: 5, text: "El recorrido por los murales después del taller fue el momento más emotivo del viaje.", date: "May 2026" },
    ],
  },
];

export const PLANES_ALL: Plan[] = [...PLANES_INIT, ...PLANES_EXTRA];

export const CATEGORIAS = [
  "Todos", "Cultura", "Música", "Gastronomía", "Aventura",
  "Arte", "Festival", "Deporte", "Mercado", "Humor",
];

// ─── EVENTOS ────────────────────────────────────────────────────────────────

export const EVENTOS: Evento[] = [
  {
    id: 1, slug: "tulum-night-experience",
    title: "Tulum Night Experience", tag: "Electronic",
    date: "Sáb 17 May · 22:00",
    img: "/images/eventos.png",
    price: 75000, priceLabel: "Desde $75.000",
    availability: "pocas-entradas",
    venue: "Ensamble Club", zona: "El Poblado",
    description: [
      "La experiencia electrónica más ambiciosa del año llega a Medellín. Cuatro DJ internacionales en tres escenarios interconectados, mapping visual en tiempo real y una producción de luces diseñada exclusivamente para el venue.",
      "El formato de Tulum Night no es una fiesta: es una instalación de arte sonoro y visual en la que el público es parte de la obra. Cupos limitados a 600 personas.",
    ],
  },
  {
    id: 2, slug: "noches-de-jardin",
    title: "Noches de Jardín", tag: "Jazz & Blues",
    date: "Dom 18 May · 18:00",
    img: "https://picsum.photos/seed/noches-jardin/270/340",
    price: 45000, priceLabel: "Desde $45.000",
    availability: "disponible",
    venue: "Jardín Botánico de Medellín", zona: "Medellín Centro",
    description: [
      "El Jardín Botánico abre sus puertas de tarde para un concierto de jazz y blues rodeado de flores y árboles centenarios. La combinación de naturaleza y música en vivo en pleno corazón de la ciudad es algo que no tiene equivalente.",
      "La formación invitada cambia cada semana: cuartetos, tríos, guitarristas solistas. El formato es íntimo y la duración promedio es de 90 minutos con descanso.",
    ],
  },
  {
    id: 3, slug: "feria-culinaria-antioquena",
    title: "Feria Culinaria Antioqueña", tag: "Gastronomía",
    date: "23–25 May · Todo el día",
    img: "https://picsum.photos/seed/feria-culinaria/270/340",
    price: 20000, priceLabel: "Desde $20.000",
    availability: "disponible",
    venue: "Plaza Mayor Medellín", zona: "Medellín Centro",
    description: [
      "Tres días, 60 chefs, 200 platos. La Feria Culinaria Antioqueña es el evento gastronómico más importante del departamento y este año llega con su edición más ambiciosa.",
      "Hay demos en vivo con chefs nacionales e internacionales, mercado de productores locales y un concurso de cocina amateur con $5 millones en premios.",
    ],
  },
  {
    id: 4, slug: "urban-art-medellin-vol3",
    title: "Urban Art Medellín Vol.3", tag: "Arte",
    date: "Vie 30 May · 19:00",
    img: "https://picsum.photos/seed/urban-art/270/340",
    price: 35000, priceLabel: "Desde $35.000",
    availability: "pocas-entradas",
    venue: "Espacio Art9, Laureles", zona: "Laureles",
    description: [
      "La tercera edición de Urban Art Medellín reúne a 12 artistas de street art de Colombia, Chile, México y España para intervenir en tiempo real el espacio del venue durante las primeras tres horas del evento.",
      "A partir de las 22:00, el espacio se convierte en sala de conciertos con dos artistas de música electrónica ambient. La entrada incluye catálogo impreso con las obras.",
    ],
  },
  {
    id: 5, slug: "calle14-rap-fest",
    title: "Calle 14 Rap Fest", tag: "Hip-Hop",
    date: "Sáb 31 May · 20:00",
    img: "https://picsum.photos/seed/rap-fest/270/340",
    price: 40000, priceLabel: "Desde $40.000",
    availability: "disponible",
    venue: "Parque de la Vida", zona: "El Centro",
    description: [
      "El hip-hop de Medellín tiene raíces profundas en los barrios y el Calle 14 Rap Fest es su celebración anual más importante. Seis artistas en dos escenarios, un cypher abierto para artistas emergentes y una zona de graffiti en vivo.",
      "El festival tiene filosofía de precio accesible por convicción: creemos que la cultura no puede ser solo para quien puede pagarla.",
    ],
  },
  {
    id: 6, slug: "perreo-al-parque",
    title: "Perreo al Parque", tag: "Reggaeton",
    date: "Dom 1 Jun · 17:00",
    img: "https://picsum.photos/seed/perreo-parque/270/340",
    price: 22000, priceLabel: "Desde $22.000",
    availability: "disponible",
    venue: "Parque Lineal La Presidenta", zona: "El Poblado",
    description: [
      "El plan más bacano del domingo en Medellín. DJ sets de reggaeton, dembow y champeta al aire libre en el parque más icónico del Poblado.",
      "Formato completamente al aire libre, sin techos ni paredes, con buen sonido y mejor ambiente. El consumo es libre.",
    ],
  },
];

// ─── ZONAS ──────────────────────────────────────────────────────────────────

export const ZONAS: Zona[] = [
  { id: 1, name: "El Poblado", count: "312 planes", img: "/images/zonas.png", trending: true, thisWeek: 47, featuredEvent: "Tulum Night Experience", description: "El corazón de la vida nocturna y gastronómica.", cats: ["Música", "Gastronomía", "Arte"] },
  { id: 2, name: "Laureles", count: "178 planes", img: "https://picsum.photos/seed/laureles-mde/380/512", trending: false, thisWeek: 18, featuredEvent: "Tour Gastronómico Laureles", description: "El barrio más sabroso y tranquilo de la ciudad.", cats: ["Gastronomía", "Arte", "Cultura"] },
  { id: 3, name: "El Centro", count: "241 planes", img: "https://picsum.photos/seed/centro-mde/380/512", trending: true, thisWeek: 31, featuredEvent: "Arte Callejero del Centro", description: "Historia, arte urbano y la energía más auténtica.", cats: ["Arte", "Cultura", "Deporte"] },
  { id: 4, name: "Envigado", count: "95 planes", img: "https://picsum.photos/seed/envigado-mde/380/512", trending: false, thisWeek: 12, featuredEvent: "Show de Stand-Up", description: "Pueblo dentro de la ciudad: tranquilo y con buena vibra.", cats: ["Humor", "Gastronomía", "Cultura"] },
  { id: 5, name: "Belén", count: "67 planes", img: "https://picsum.photos/seed/belen-mde/380/512", trending: false, thisWeek: 9, featuredEvent: "Mercado Artesanal Belén", description: "Tradición, barrio y una escena cultural creciente.", cats: ["Mercado", "Cultura", "Arte"] },
  { id: 6, name: "Sabaneta", count: "54 planes", img: "https://picsum.photos/seed/sabaneta-mde/380/512", trending: false, thisWeek: 7, featuredEvent: "Rumba en la Plaza Mayor", description: "La rumba más bacana del sur del Valle de Aburrá.", cats: ["Música", "Gastronomía", "Festival"] },
  { id: 7, name: "Parque Arví", count: "42 planes", img: "https://picsum.photos/seed/arvi-mde/380/512", trending: false, thisWeek: 14, featuredEvent: "Escalada en el Arví", description: "Naturaleza, silencio y aventura a 20 minutos del centro.", cats: ["Aventura", "Deporte", "Cultura"] },
];

// ─── EDITORIAL ──────────────────────────────────────────────────────────────

export const EDITORIAL: Editorial[] = [
  { id: 1, tag: "Arte & Cultura", title: "PARCH", titleEm: "ARTE", desc: "Grafitis, murales, instalaciones. La ciudad como lienzo. Descubre los espacios donde el arte callejero de Medellín se convierte en identidad.", cta: "Explorar galería", img: "https://picsum.photos/seed/street-art-mde/900/600", reversed: false },
  { id: 2, tag: "Música", title: "AL RITMO\n", titleEm: "PLAN", desc: "Desde salsa hasta reggaeton, jazz hasta metal. La agenda musical de Medellín sin filtro. Bares y la rumba que no aparece en las guías.", cta: "Ver agenda", img: "https://picsum.photos/seed/music-mde/900/600", reversed: true },
  { id: 3, tag: "Gastronomía", title: "PLAN A\nLA ", titleEm: "CARTA", desc: "Bandeja paisa en el barrio, sushi en el Poblado, empanadas a las 3AM. La guía de sabores de una ciudad que nunca para de comer.", cta: "Descubrir restaurantes", img: "https://picsum.photos/seed/gastro-mde/900/600", reversed: false },
];
