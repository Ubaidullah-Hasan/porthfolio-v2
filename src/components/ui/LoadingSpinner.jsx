"use client";

import { motion } from "framer-motion";

export default function LoadingSpinner({ fullScreen = true }) {
  return (
    <div
      className={`${
        fullScreen ? "flex min-h-screen" : "flex min-h-[40vh]"
      } items-center justify-center bg-[#050508]`}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Outer ring */}
        <div className="relative h-20 w-20">
          {/* Glowing backdrop */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/20 to-electric-purple/20 blur-xl" />

          {/* Spinning ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: "#0ff",
              borderRightColor: "#9b5de5",
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />

          {/* Inner ring — counter-spin */}
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-transparent"
            style={{
              borderBottomColor: "#10b981",
              borderLeftColor: "#0ff",
            }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />

          {/* Center dot */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-neon-blue to-electric-purple shadow-[0_0_12px_rgba(0,255,255,0.6)]" />
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.p
          className="text-xs font-medium tracking-[0.25em] text-gray-500"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          LOADING...
        </motion.p>
      </div>
    </div>
  );
}
