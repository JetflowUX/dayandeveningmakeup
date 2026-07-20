import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Statement } from "./components/Statement";
import { Registers } from "./components/Registers";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Statement />
        <Registers />
        <Gallery />
        <About />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
