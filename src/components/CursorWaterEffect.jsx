import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function CursorWaterEffect() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 26,
    mass: 0.35,
  });
  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 26,
    mass: 0.35,
  });

  // Offset so the “water” centers under the cursor
  const mainX = useTransform(springX, (v) => v - 140);
  const mainY = useTransform(springY, (v) => v - 140);

  const trailX = useTransform(springX, (v) => v - 95);
  const trailY = useTransform(springY, (v) => v - 95);

  const ringX = useTransform(springX, (v) => v - 16);
  const ringY = useTransform(springY, (v) => v - 16);

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Main glow (bright + visible on all sections) */}
      <motion.div
        className="absolute h-72 w-72 rounded-full blur-3xl mix-blend-screen opacity-65"
        style={{ x: mainX, y: mainY }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.32) 0%, rgba(155,93,229,0.20) 38%, rgba(14,165,233,0.10) 62%, rgba(0,0,0,0) 78%)",
          }}
        />
      </motion.div>

      {/* Trailing water blob */}
      <motion.div
        className="absolute h-44 w-44 rounded-full blur-2xl mix-blend-screen opacity-50"
        style={{ x: trailX, y: trailY }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.14) 0%, rgba(34,211,238,0.12) 28%, rgba(155,93,229,0.08) 56%, rgba(0,0,0,0) 74%)",
          }}
        />
      </motion.div>

      {/* Crisp center marker / ring (optional but makes it feel “cursor-like”) */}
      <motion.div
        className="absolute h-6 w-6 rounded-full border border-cyan-200/30 bg-cyan-200/8 backdrop-blur-sm"
        style={{ x: ringX, y: ringY }}
      />
    </div>
  );
}
