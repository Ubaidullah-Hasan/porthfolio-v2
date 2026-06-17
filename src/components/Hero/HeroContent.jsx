import { motion } from 'framer-motion';
// ArrowDownTrayIcon বা ArrowDownIcon যেকোনো একটি ব্যবহার করতে পারেন
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* ছোট ব্যাজ */}
      <motion.div
        className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-mono tracking-wider backdrop-blur-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Available for Backend & Full-Stack Roles
      </motion.div>

      {/* মেইন হেডিং */}
      <motion.h1
        className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">Hasan</span>
      </motion.h1>

      {/* প্রফেশনাল টাইটেল */}
      <motion.h2
        className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-slate-400 font-mono mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Software Engineer <span className="text-indigo-500">|</span> Full Stack Developer
      </motion.h2>

      {/* শর্ট সামারি */}
      <motion.p
        className="text-base md:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed font-sans"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I am a JavaScript-focused Full Stack Developer specializing in scalable backend APIs, 
        robust architectures, and modern web systems. Currently engineering backend solutions 
        while crafting seamless digital products from concept to deployment.
      </motion.p>

      {/* দুই বাটন একসাথে */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {/* ১. Explore My Architecture Button */}
        <a
          href="#projects"
          className="relative group inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-indigo-500/50"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-md" />
          <span className="relative z-10 flex items-center gap-2">
            Explore My Architecture 
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </a>

        {/* ২. Download CV Button */}
        <a
          href="../../assets/ubaidullah_hasan_CV.pdf"
          download="ubaidullah_hasan_CV.pdf"
          className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
        >
          <span className="flex items-center gap-2">
            Download CV
            <ArrowDownTrayIcon className="w-4 h-4 text-black stroke-[2.5] group-hover:translate-y-0.5 transition-transform duration-300" />
          </span>
        </a>
      </motion.div>
    </div>
  );
}