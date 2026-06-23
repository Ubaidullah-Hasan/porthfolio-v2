import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function CursorWaterEffect() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 160,
    damping: 30,
    mass: 0.35,
  });
  const springY = useSpring(mouseY, {
    stiffness: 160,
    damping: 30,
    mass: 0.35,
  });

  const mainX = useTransform(springX, (value) => value - 80);
  const mainY = useTransform(springY, (value) => value - 80);

  const trailX = useTransform(springX, (value) => value - 56);
  const trailY = useTransform(springY, (value) => value - 56);

  const auraX = useTransform(springX, (value) => value - 144);
  const auraY = useTransform(springY, (value) => value - 144);

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 9999 }}
    >
      <motion.div
        className="absolute h-40 w-40 rounded-full blur-2xl mix-blend-screen opacity-55"
        style={{ x: mainX, y: mainY }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.28) 0%, rgba(168,85,247,0.18) 34%, rgba(14,165,233,0.10) 58%, rgba(0,0,0,0) 78%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute h-28 w-28 rounded-full blur-2xl opacity-45"
        style={{ x: trailX, y: trailY }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.10) 0%, rgba(34,211,238,0.12) 28%, rgba(168,85,247,0.08) 54%, rgba(0,0,0,0) 74%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute h-72 w-72 rounded-full blur-3xl opacity-20 mix-blend-screen"
        style={{
          x: auraX,
          y: auraY,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.06) 0%, rgba(168,85,247,0.05) 35%, rgba(14,165,233,0.03) 60%, transparent 78%)",
        }}
      />
    </div>
  );
}
