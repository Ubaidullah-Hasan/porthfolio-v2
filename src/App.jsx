import { motion, useAnimation } from "framer-motion";
import { lazy, Suspense, useEffect } from "react";
import Background from "./components/Background";
import CursorWaterEffect from "./components/CursorWaterEffect";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";

// Lazy-load below-fold sections — deferred until scrolled into view
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function SectionFallback() {
  return <div className="min-h-[40vh]" />;
}

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
      className="relative bg-charcoal text-white font-sans min-h-screen overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <Background />
      <CursorWaterEffect />
      {/* Fixed glass‑morphic navbar */}
      <Navbar />

      {/* Page sections – each id is used for smooth scroll navigation */}
      <section id="hero">
        <Hero />
      </section>

      <Suspense fallback={<SectionFallback />}>
        <section id="about">
          <About />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="skills">
          <Skills />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="projects">
          <Projects />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="experience">
          <Experience />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </motion.div>
  );
}
