import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* ছোট প্রিমিয়াম ব্যাজ */}
      <motion.div
        className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-[11px] font-mono tracking-wider backdrop-blur-sm"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Backend & Full-Stack Engineer
      </motion.div>

      {/* মেইন নাম */}
      <motion.h1
        className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-5"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">Hasan</span>
      </motion.h1>

      {/* প্রফেশনাল টাইটেল */}
      <motion.h2
        className="text-base sm:text-lg md:text-xl font-medium tracking-widest text-slate-400 font-mono mb-6 uppercase"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Software Engineer
      </motion.h2>

      {/* ছোট এবং সুনির্দিষ্ট বায়ো টেক্সট (Bio Text Small করা হয়েছে) */}
      <motion.p
        className="text-sm sm:text-base text-slate-400 max-w-lg mb-10 leading-relaxed font-sans opacity-90"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Building high-performance backend systems and scalable architectures. 
        Specialized in JavaScript ecosystems, clean code practices, and reliable product deployment.
      </motion.p>

      {/* বাটন গ্রুপ */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {/* Explore My Architecture */}
        <a
          href="#projects"
          className="relative group inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 rounded-lg overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 backdrop-blur-sm"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-md" />
          <span className="relative z-10 flex items-center gap-2">
            Explore Architecture 
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </a>

        {/* Download CV */}
        <a
          href="../../assets/ubaidullah_hasan_CV.pdf"
          download="Hasan_CV.pdf"
          className="group inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
        >
          <span className="flex items-center gap-2">
            Download CV
            <ArrowDownTrayIcon className="w-3.5 h-3.5 text-black stroke-[2.5] group-hover:translate-y-0.5 transition-transform duration-300" />
          </span>
        </a>
      </motion.div>
    </div>
  );
}