import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="scroll-smooth overflow-y-auto">
      {/* Fixed Navbar on top */}
      <Navbar />

      {/* Regular stacked scroll sections */}
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>
       <section id="skills" className="min-h-screen">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
     
    </div>
  );
}

export default App;
