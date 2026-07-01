import { motion } from "framer-motion";
import { useMemo } from "react";

// Seeded pseudo-random — deterministic, no re-renders
const pseudoRandom = (seed) => {
  const value = Math.sin(seed * 9999) * 10000;
  return value - Math.floor(value);
};

export default function Snowfall({ count = 40 }) {
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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
