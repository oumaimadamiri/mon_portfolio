import React, { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import { LanguageProvider } from "./components/context/LanguageContext";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Contact from "./components/Contact/Contact";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return null;
  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX }}
    />
  );
}

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <LanguageProvider>
        <ScrollProgressBar />
        <Particle />
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <main>
            <Home />
            <About />
            <Projects />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
