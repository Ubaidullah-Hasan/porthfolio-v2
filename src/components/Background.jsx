import { motion } from "framer-motion";
import StarField from "./Hero/StarField";

export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* subtle layered gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_90%_30%,rgba(168,85,247,0.06),transparent_30%),linear-gradient(180deg,#030317_0%,#020617_60%,#000_100%)]" />

      {/* gentle animated orbs */}
      <motion.div
        className="absolute left-8 top-12 w-44 h-44 rounded-full bg-cyan-400/10 blur-3xl"
        style={{ willChange: 'transform' }}
        animate={{ y: [0, -12, 0], x: [0, 8, 0], scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-12 bottom-8 w-64 h-64 rounded-full bg-fuchsia-500/10 blur-3xl"
        style={{ willChange: 'transform' }}
        animate={{ y: [0, 12, 0], x: [0, -8, 0], scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
      />

      {/* star + snow layer reused */}
      <StarField />
    </div>
  );
}
