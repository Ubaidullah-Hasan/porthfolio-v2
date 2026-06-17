import {
  ArrowDownIcon,
  CloudArrowDownIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useMemo } from "react";
import cvPdf from "../assets/ubaidullah_hasan_CV.pdf";

const professionalSummary =
  "Building high-performance backend systems and scalable architectures with modern JavaScript ecosystems.";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <HeroContent />
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-gray-300 backdrop-blur-xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDownIcon className="h-6 w-6" />
      </motion.a>
    </section>
  );
}

function HeroBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 30,
        size: 6 + Math.random() * 8,
        delay: Math.random() * 2,
        duration: 2.6 + Math.random() * 2.4,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.18),transparent_30%),linear-gradient(180deg,#050816_0%,#020617_60%,#000_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_80%)]" />

      <AnimatedOrb
        delay={0}
        className="left-[12%] top-[18%] h-72 w-72 bg-cyan-400/20"
      />

      <AnimatedOrb
        delay={1.4}
        className="right-[16%] bottom-[12%] h-96 w-96 bg-fuchsia-500/20"
      />

      <Sun />
      <Moon />

      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}

      <Snowfall count={120} />
    </div>
  );
}

function AnimatedOrb({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        scale: [1, 1.18, 1],
        x: [0, 28, -22, 0],
        y: [0, -18, 22, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

function Sun() {
  return (
    <motion.div
      className="absolute right-[10%] top-[12%] h-14 w-14 rounded-full bg-amber-300/80 shadow-[0_0_50px_rgba(251,191,36,0.65)]"
      animate={{
        y: [0, -12, 0],
        scale: [1, 1.08, 1],
        rotate: 360,
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute inset-[-18px] rounded-full border border-amber-300/30" />
    </motion.div>
  );
}

function Moon() {
  return (
    <motion.div
      className="absolute left-[10%] top-[14%] h-12 w-12 rounded-full bg-slate-100 shadow-[0_0_50px_rgba(147,197,253,0.55)]"
      animate={{
        y: [0, 14, 0],
        x: [0, 8, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute right-1.5 top-2 h-9 w-9 rounded-full bg-[#050816]" />
    </motion.div>
  );
}

function Star({ x, y, size, delay, duration }) {
  return (
    <motion.span
      style={{
        left: `${x}%`,
        top: `${y}%`,
        fontSize: size,
      }}
      className="absolute text-cyan-100 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]"
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [0.8, 1.4, 0.8],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: duration * 10,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      ★
    </motion.span>
  );
}

function Snowfall({ count = 70 }) {
  const flakes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2,
        duration: 8 + Math.random() * 10,
        delay: -Math.random() * 12,
        drift: (Math.random() - 0.5) * 120,
        opacity: 0.25 + Math.random() * 0.55,
      })),
    [count],
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {flakes.map((flake) => (
        <motion.span
          key={flake.id}
          style={{
            left: `${flake.left}%`,
            width: flake.size,
            height: flake.size,
            opacity: 0,
          }}
          className="absolute -top-10 rounded-full bg-white"
          animate={{
            y: ["-10vh", "110vh"],
            x: [0, flake.drift, -flake.drift / 2, 0],
            opacity: [0, flake.opacity, flake.opacity * 0.7, 0],
          }}
          transition={{
            duration: flake.duration * 3,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
      >
        Hi, I&rsquo;m{" "}
        <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
          Hasan
        </span>
        <span className="mt-2 block text-lg font-bold tracking-tight text-gray-200 sm:text-xl">
          Software Engineer | Full Stack Developer
        </span>
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-cyan-300 to-fuchsia-400"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mx-auto mt-6 mb-10 max-w-xl text-xs leading-7 tracking-wider text-gray-300 sm:text-sm"
      >
        {professionalSummary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <a
          href={cvPdf}
          download="Hasan_CV.pdf"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-200 hover:shadow-cyan-500/40"
        >
          <CloudArrowDownIcon className="h-5 w-5" />
          Download my CV
        </a>

        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-white/[0.1]"
        >
          <CodeBracketIcon className="h-5 w-5" />
          View My Work
        </a>
      </motion.div>
    </motion.div>
  );
}
