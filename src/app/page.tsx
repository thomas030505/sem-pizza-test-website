import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Reviews />
        <MapSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
