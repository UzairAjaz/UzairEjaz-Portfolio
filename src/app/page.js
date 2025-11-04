import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
