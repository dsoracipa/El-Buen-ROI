import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import NoiseTexture from '@/components/NoiseTexture';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'El Buen ROI — Análisis de Inversión en Bogotá',
  description:
    'Evalúa los planes de la ciudad bajo una lupa de costo-beneficio. ROE, Capex, EBITDA y Perfil de Riesgo aplicados al entretenimiento bogotano.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <NoiseTexture />
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
