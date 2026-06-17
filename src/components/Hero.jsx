import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-charcoal via-black to-black">
      {/* floating gradient blob */}
      <motion.div
        className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_#0ff_0%,_transparent_70%)]"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <div className="relative z-10 text-center max-w-2xl px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-electricPurple"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi, I’m <span className="text-neonBlue">Alex</span> – Senior Web Engineer
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Crafting pixel‑perfect, high‑performance UI with React, Tailwind, and
          modern animation techniques.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block bg-neonBlue hover:bg-electricPurple text-black font-semibold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px #0ff' }}
        >
          View My Work
        </motion.a>
      </div>

      {/* scroll‑down hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDownIcon className="h-8 w-8 text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  );
}