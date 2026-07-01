import { motion } from 'framer-motion';
import { useMemo } from 'react';

// Seeded pseudo-random — deterministic, no re-renders
const pseudoRandom = (seed) => {
  const value = Math.sin(seed * 9999) * 10000;
  return value - Math.floor(value);
};

const TOTAL_ITEMS = 30;

export default function StarField() {
  const items = useMemo(
    () =>
      Array.from({ length: TOTAL_ITEMS }, (_, index) => {
        const randomLeft = pseudoRandom(index + 1) * 100;
        const randomDelay = pseudoRandom(index + 11) * 10;
        const isSnowflake = index % 2 === 0;
        const randomDuration = 14 + pseudoRandom(index + 21) * 11;
        const randomDrift = (pseudoRandom(index + 31) - 0.5) * 40;
        const size = index % 3 === 0 ? '3px' : index % 2 === 0 ? '2px' : '1.5px';
        const yPos = pseudoRandom(index + 41) * 100;

        return { index, randomLeft, randomDelay, isSnowflake, randomDuration, randomDrift, size, yPos };
      }),
    [],
  );

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {items.map((item) => (
        <motion.div
          key={item.index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${item.randomLeft}%`,
            width: item.size,
            height: item.size,
            // Use transform-friendly positioning
            top: item.isSnowflake ? '-2%' : `${item.yPos}%`,
          }}
          animate={
            item.isSnowflake
              ? {
                  y: ['0vh', '105vh'],
                  x: [0, item.randomDrift, 0],
                  opacity: [0, 0.6, 0.6, 0],
                }
              : {
                  opacity: [0.1, 0.5, 0.1],
                }
          }
          transition={{
            repeat: Infinity,
            duration: item.randomDuration,
            delay: item.randomDelay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
