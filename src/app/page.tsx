import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ValueProps from "@/components/ValueProps";
import PlanesSection from "@/components/PlanesSection";
import EventosSection from "@/components/EventosSection";
import StatsSection from "@/components/StatsSection";
import ZonasSection from "@/components/ZonasSection";
import EditorialSection from "@/components/EditorialSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <ValueProps />
        <PlanesSection />
        <EventosSection />
        <StatsSection />
        <ZonasSection />
        <EditorialSection />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
