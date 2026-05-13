import HeroBanner from '@/components/HeroBanner';
import BentoGrid from '@/components/BentoGrid';
import ParcheCalculator from '@/components/ParcheCalculator';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <BentoGrid />
      <div id="calculadora">
        <ParcheCalculator />
      </div>
    </>
  );
}
