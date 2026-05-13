export type PerfilRiesgo = 'Conservador' | 'Moderado' | 'Agresivo' | 'Especulativo';

export interface Parche {
  slug: string;
  nombre: string;
  categoria: 'Nightlife' | 'Gastronomía' | 'Cultura' | 'Deporte' | 'Arte';
  resumen: string;
  imagen: string;
  // Métricas financieras
  roe: number;               // 0–100: Return on Entertainment
  capex: number;             // COP: inversión mínima (transporte + entrada)
  ebitda: number;            // COP: valor real disfrutado antes de extras
  perfilRiesgo: PerfilRiesgo;
  tieneConsumoMinimo: boolean;
  precioBase: number;        // COP: precio mínimo de entrada
  fecha: string;
  contenido: string;
}

export const parches: Parche[] = [
  {
    slug: 'ciclovia-dominical',
    nombre: 'Ciclovía Dominical',
    categoria: 'Deporte',
    resumen:
      'El activo de mayor liquidez de Bogotá. Cero capex de entrada, retorno emocional compuesto y diversificación geográfica por 127 km de vía libre.',
    imagen: '/images/parche-1.jpg',
    roe: 98,
    capex: 3500,
    ebitda: 45000,
    perfilRiesgo: 'Conservador',
    tieneConsumoMinimo: false,
    precioBase: 0,
    fecha: '2025-05-01',
    contenido:
      'La Ciclovía bogotana opera todos los domingos y festivos de 7am a 2pm, cubriendo 127 km de vías libres de tráfico. Con un Capex mínimo de transporte y retorno emocional altísimo, es el instrumento de mayor ROE en el portafolio urbano. Estrategia recomendada: salida temprana, sector La Candelaria – Parque de la 93, con parada técnica en puestos de frutas.',
  },
  {
    slug: 'teatro-la-candelaria',
    nombre: 'Teatro La Candelaria',
    categoria: 'Cultura',
    resumen:
      'Rendimiento cultural compuesto. Entrada simbólica, dividendos intelectuales altos. El TES de la cultura bogotana.',
    imagen: '/images/parche-2.jpg',
    roe: 89,
    capex: 18000,
    ebitda: 35000,
    perfilRiesgo: 'Conservador',
    tieneConsumoMinimo: false,
    precioBase: 15000,
    fecha: '2025-04-20',
    contenido:
      'El Teatro La Candelaria ofrece obras con precios desde $15.000 COP, con un nivel de producción que en cualquier capital europea costaría 10 veces más. ROE de 89 puntos sostenido históricamente. Sin consumos mínimos, sin sorpresas en el estado de resultados.',
  },
  {
    slug: 'mercado-paloquemao',
    nombre: 'Mercado de Paloquemao',
    categoria: 'Gastronomía',
    resumen:
      'Diversificación de portafolio gastronómico al costo más bajo del mercado. EBITDA culinario sin igual en la ciudad.',
    imagen: '/images/parche-3.jpg',
    roe: 85,
    capex: 25000,
    ebitda: 55000,
    perfilRiesgo: 'Moderado',
    tieneConsumoMinimo: false,
    precioBase: 5000,
    fecha: '2025-04-10',
    contenido:
      'Paloquemao abre de lunes a sábado desde las 5am. La relación precio-calidad es de las más altas del mercado local. Un desayuno completo (jugo de fruta + changua + pan) por menos de $15.000 COP. El riesgo moderado viene de las fluctuaciones de precios según temporada de cosecha.',
  },
  {
    slug: 'zona-rosa-nocturna',
    nombre: 'Zona Rosa Nocturna',
    categoria: 'Nightlife',
    resumen:
      'Activo de alta volatilidad. ROE variable según gestión de consumo mínimo. Perfil agresivo: riesgo alto, potencial alto.',
    imagen: '/images/parche-4.jpg',
    roe: 62,
    capex: 75000,
    ebitda: 80000,
    perfilRiesgo: 'Agresivo',
    tieneConsumoMinimo: true,
    precioBase: 40000,
    fecha: '2025-03-28',
    contenido:
      'La Zona Rosa ofrece alta concentración de activos de entretenimiento en un perímetro reducido. Sin embargo, el consumo mínimo en la mayoría de establecimientos representa una deuda subordinada que eleva el Capex efectivo de forma impredecible. Estrategia recomendada: establecimiento con cover fijo sin consumo mínimo.',
  },
  {
    slug: 'grafiti-tour-bogota',
    nombre: 'Grafiti Tour Bogotá',
    categoria: 'Arte',
    resumen:
      'Exposición a activos culturales de alta apreciación con guía experto. Capex bajo, dividendos histórico-artísticos altos.',
    imagen: '/images/parche-5.jpg',
    roe: 91,
    capex: 30000,
    ebitda: 60000,
    perfilRiesgo: 'Conservador',
    tieneConsumoMinimo: false,
    precioBase: 25000,
    fecha: '2025-03-15',
    contenido:
      'El tour de grafiti por La Candelaria y el barrio Egipto es uno de los activos culturales de mayor apreciación en Bogotá. Con guías locales certificados, el Capex incluye tour de 2h + propina sugerida. Sin consumos mínimos. ROE de 91 puntos, superando consistentemente el promedio del mercado cultural.',
  },
  {
    slug: 'bar-la-hamburgueseria',
    nombre: 'Bar speakeasy Usaquén',
    categoria: 'Nightlife',
    resumen:
      'Instrumento especulativo de máximo riesgo. Sin precio de lista visible. Costos ocultos elevados. Solo para portafolios con alta tolerancia al riesgo.',
    imagen: '/images/parche-6.jpg',
    roe: 44,
    capex: 120000,
    ebitda: 90000,
    perfilRiesgo: 'Especulativo',
    tieneConsumoMinimo: true,
    precioBase: 80000,
    fecha: '2025-03-05',
    contenido:
      'Los bares speakeasy de Usaquén ofrecen experiencias premium con cocktails artesanales desde $35.000 COP la unidad. El consumo mínimo oscila entre $80.000 y $120.000 COP por persona. La ausencia de carta de precios visible es una señal de alerta técnica. Solo recomendado para portafolios con capital disponible superior a $150.000 COP y alta tolerancia al riesgo.',
  },
];

export function getParcheBySlug(slug: string): Parche | undefined {
  return parches.find((p) => p.slug === slug);
}

export function formatCOP(value: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
