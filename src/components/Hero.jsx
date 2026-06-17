import {
  ArrowDownIcon,
  CloudArrowDownIcon,
  CodeBracketIcon,
  CircleStackIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useMemo } from "react";

const techStack = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "REST API",
  "Authentication",
];

const quickFacts = [
  {
    label: "Role",
    value: "Full Stack",
  },
  {
    label: "Backend",
    value: "APIs + Auth",
  },
  {
    label: "Database",
    value: "SQL / NoSQL",
  },
];

const heroStats = [
  {
    icon: <ServerIcon className="h-5 w-5" />,
    label: "Backend",
    value: "APIs + Auth",
  },
  {
    icon: <CircleStackIcon className="h-5 w-5" />,
    label: "Data",
    value: "SQL / NoSQL",
  },
  {
    icon: <CodeBracketIcon className="h-5 w-5" />,
    label: "Frontend",
    value: "Modern UI",
  },
];

const professionalSummary =
  "I am a JavaScript-focused Full Stack Developer with practical experience building modern web applications, backend APIs, database-driven systems, authentication solutions, and scalable software architectures.";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
        <HeroContent />
        <HeroProfileCard />
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
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 65,
        size: 10 + Math.random() * 16,
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

      <Snowfall count={85} />
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
      className="absolute right-[8%] top-[10%] h-24 w-24 rounded-full bg-amber-300/80 shadow-[0_0_90px_rgba(251,191,36,0.65)]"
      animate={{
        y: [0, -18, 0],
        scale: [1, 1.08, 1],
        rotate: 360,
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute inset-[-28px] rounded-full border border-amber-300/30" />
    </motion.div>
  );
}

function Moon() {
  return (
    <motion.div
      className="absolute left-[8%] top-[12%] h-20 w-20 rounded-full bg-slate-100 shadow-[0_0_80px_rgba(147,197,253,0.55)]"
      animate={{
        y: [0, 20, 0],
        x: [0, 12, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute right-2 top-3 h-16 w-16 rounded-full bg-[#050816]" />
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
      className="absolute text-cyan-100 drop-shadow-[0_0_14px_rgba(34,211,238,0.9)]"
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [0.8, 1.6, 0.8],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration,
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
        size: 1 + Math.random() * 3,
        duration: 8 + Math.random() * 10,
        delay: -Math.random() * 12,
        drift: (Math.random() - 0.5) * 160,
        opacity: 0.25 + Math.random() * 0.65,
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
            duration: flake.duration,
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
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulse" />
        Available for remote and product teams
      </div>

      <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
          Hasan
        </span>
        <span className="mt-3 block text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl">
          Software Engineer | Full Stack Developer
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
        {professionalSummary} I currently work as a Backend Developer and
        continuously expand my expertise across frontend engineering, backend
        systems, software architecture, and emerging technologies.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="/hasan-cv.pdf"
          download
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
      </div>

      <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
        {heroStats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"
          >
            <div className="mb-3 text-cyan-300">{stat.icon}</div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
              {stat.label}
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function HeroProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl sm:p-8"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative">
        <div className="mb-6 flex items-center gap-4">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-fuchsia-400 text-2xl font-black text-black shadow-lg shadow-cyan-500/20">
            H
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
              About Me
            </p>
            <h3 className="text-2xl font-bold text-white">Hasan</h3>
            <p className="text-sm text-gray-300">
              Software Engineer | Full Stack Developer
            </p>
          </div>
        </div>

        <p className="text-sm leading-7 text-gray-300">
          I enjoy solving real-world problems through clean code, scalable
          architecture, and modern engineering practices. My goal is to become a
          highly skilled Software Engineer capable of designing and building
          impactful products from concept to deployment.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                {fact.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Tech Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>

            <p className="text-xs text-gray-500">architecture.ts</p>
          </div>

          <pre className="overflow-x-auto text-xs leading-6 text-cyan-50">
            <code>{`const hasan = {
  role: "Full Stack Developer",
  focus: ["React", "Node.js", "APIs"],
  mission: "Build scalable products"
};`}</code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
