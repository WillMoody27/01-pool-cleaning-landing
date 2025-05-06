import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ServiceAreas from "./components/ServiceAreas";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="nav-content fixed w-full z-50">
        <TopBar />
        <Navigation />
      </div>
      <Hero />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
}
