import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Root component – stitches all sections together.
 * The `motion.div` wrapper provides a global fade‑in on page load.
 */
export default function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.8 },
    });
  }, [controls]);

  return (
    <motion.div
      className="bg-charcoal text-white font-sans min-h-screen overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {/* Fixed glass‑morphic navbar */}
      <Navbar />

      {/* Page sections – each id is used for smooth scroll navigation */}
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>

      <Footer />
    </motion.div>
  );
}
