import { motion } from "framer-motion";

function Planet({ size, position, colors, ringSpeeds, floatDuration }) {
  const s = size;
  return (
    <motion.div
      className={`absolute ${position}`}
      animate={{ y: [0, -(s * 0.06), 0] }}
      transition={{ repeat: Infinity, duration: floatDuration || 8, ease: "easeInOut" }}
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      <div className="relative flex items-center justify-center">
        <div
          className="rounded-full blur-[40px]"
          style={{
            width: s * 1.5,
            height: s * 1.5,
            background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
            opacity: 0.15,
          }}
        />

        <motion.div
          className="absolute rounded-full blur-[25px]"
          style={{
            width: s,
            height: s,
            background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
            opacity: 0.3,
            willChange: 'transform',
          }}
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{
            rotate: { repeat: Infinity, duration: ringSpeeds[0], ease: "linear" },
            scale: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          }}
        />

        <div
          className="absolute rounded-full blur-[15px]"
          style={{
            width: s * 0.75,
            height: s * 0.75,
            background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
            opacity: 0.4,
          }}
        />

        <div
          className="absolute rounded-full blur-[8px]"
          style={{
            width: s * 0.5,
            height: s * 0.5,
            background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
            opacity: 0.5,
          }}
        />

        <motion.div
          className="absolute rounded-[50%]"
          style={{
            width: s * 1.2,
            height: s * 0.7,
            border: "1px solid",
            borderColor: colors[0].replace("0.", "0.2"),
            rotateX: "60deg",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: ringSpeeds[1], ease: "linear" }}
        />

        <motion.div
          className="absolute rounded-[50%]"
          style={{
            width: s * 1.4,
            height: s * 0.85,
            border: "1px solid",
            borderColor: colors[1].replace("0.", "0.15"),
            rotateX: "60deg",
          }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: ringSpeeds[2], ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}

export default function AboutPlanet() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Planet
        size={120}
        position="left-[55%] top-[25%]"
        colors={["rgba(34,211,238,0.4)", "rgba(168,85,247,0.4)", "rgba(52,211,153,0.4)"]}
        ringSpeeds={[25, 18, 22]}
        floatDuration={9}
      />

      <Planet
        size={60}
        position="left-[20%] top-[60%]"
        colors={["rgba(168,85,247,0.4)", "rgba(236,72,153,0.4)", "rgba(34,211,238,0.4)"]}
        ringSpeeds={[20, 14, 18]}
        floatDuration={7}
      />

      <Planet
        size={40}
        position="left-[75%] top-[70%]"
        colors={["rgba(52,211,153,0.4)", "rgba(34,211,238,0.4)", "rgba(168,85,247,0.4)"]}
        ringSpeeds={[15, 10, 13]}
        floatDuration={6}
      />

      <Planet
        size={30}
        position="left-[30%] top-[15%]"
        colors={["rgba(34,211,238,0.5)", "rgba(52,211,153,0.5)", "rgba(168,85,247,0.5)"]}
        ringSpeeds={[12, 8, 10]}
        floatDuration={5}
      />
    </div>
  );
}
