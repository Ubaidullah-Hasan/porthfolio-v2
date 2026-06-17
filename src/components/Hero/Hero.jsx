import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import StarField from './StarField';
import CosmicOrb from './CosmicOrb';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-[#030712] overflow-hidden select-none">
      {/* ১. ব্যাকগ্রাউন্ড অ্যানিমেটেড স্টারস */}
      <StarField />

      {/* ২. মহাজাগতিক গ্লোয়িং ওর্ব (Sun/Moon Concept) */}
      <CosmicOrb />

      {/* ৩. টেক্সট এবং কল-টু-অ্যাকশন কন্টেন্ট */}
      <div className="relative z-10 w-full max-w-5xl px-6 mx-auto text-center">
        <HeroContent />
      </div>

      {/* ৪. মডার্ন স্ক্রোল ইন্ডিকেটর */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-slate-500 font-mono">Scroll Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDownIcon className="h-5 w-5 text-indigo-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}