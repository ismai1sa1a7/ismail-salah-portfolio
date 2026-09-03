import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Journey from "./components/sections/Journey";
import Skills from "./components/sections/Skills";
import Certificates from "./components/sections/Certificates";
import Projects from "./components/sections/Projects";
import CurrentlyLearning from "./components/sections/CurrentlyLearning";
import Services from "./components/sections/Services";
import HowIWork from "./components/sections/HowIWork";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Certificates />
        <Projects />
        <CurrentlyLearning />
        <Services />
        <HowIWork />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
