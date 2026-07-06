import { motion } from "framer-motion";
import { useMemo } from "react";

const pseudoRandom = (seed) => {
  const value = Math.sin(seed * 9999) * 10000;
  return value - Math.floor(value);
};

export default function HeroBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: pseudoRandom(i + 1) * 100,
        y: pseudoRandom(i + 11) * 30,
        size: 6 + pseudoRandom(i + 21) * 8,
        delay: pseudoRandom(i + 31) * 2,
        duration: 2.6 + pseudoRandom(i + 41) * 2.4,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.08),transparent_30%),linear-gradient(180deg,#050816_0%,#020617_60%,#000_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(circle_at_center,black_35%,transparent_80%)]" />

      <div className="absolute inset-x-0 top-20 bottom-0 overflow-hidden">
        <AnimatedOrb
          delay={0}
          className="left-[12%] top-[12%] h-72 w-72 bg-cyan-400/10"
        />

        <AnimatedOrb
          delay={1.4}
          className="right-[16%] bottom-[12%] h-96 w-96 bg-fuchsia-500/8"
        />

        {stars.map((star) => (
          <Star key={star.id} {...star} />
        ))}

        <Snowfall count={400} />
      </div>
    </div>
  );
}

function AnimatedOrb({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{ willChange: 'transform' }}
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

function Star({ x, y, size, delay, duration }) {
  return (
    <motion.span
      style={{
        left: `${x}%`,
        top: `${y}%`,
        fontSize: size,
      }}
      className="absolute text-cyan-100"
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [0.3, 1.4, 0.3],
        rotate: [0,  360],
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
        left: pseudoRandom(i + 101) * 100,
        size: 1 + pseudoRandom(i + 111) * 2,
        duration: 8 + pseudoRandom(i + 121) * 10,
        delay: -pseudoRandom(i + 131) * 12,
        drift: (pseudoRandom(i + 141) - 0.5) * 120,
        opacity: 0.25 + pseudoRandom(i + 151) * 0.55,
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
