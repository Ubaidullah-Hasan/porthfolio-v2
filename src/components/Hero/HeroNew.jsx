import { motion } from 'framer-motion';
import StarField from './StarField';
import CosmicOrb from './CosmicOrb';
import HeroContent from './HeroContent';

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-[#020617] overflow-hidden select-none">
      {/* ১. তুষারপাত এবং স্লো-মুভিং স্টারস ব্যাকগ্রাউন্ড */}
      <StarField />

      {/* ২. মহাজাগতিক গ্লোয়িং ওর্ব */}
      <CosmicOrb />

      {/* ৩. মিনিমালিস্ট কন্টেন্ট */}
      <div className="relative z-10 w-full max-w-4xl px-6 mx-auto text-center">
        <HeroContent />
      </div>

      {/* ৪. ফিক্সড ও পারফেক্টলি ওয়ার্কিং স্ক্রোল ইন্ডিকেটর */}
      <div 
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 cursor-pointer z-20 group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-mono group-hover:text-indigo-400 transition-colors duration-300">
          Scroll Explore
        </span>
        <div className="w-[24px] h-[40px] border-2 border-slate-600 group-hover:border-indigo-400 rounded-full p-1 transition-colors duration-300 flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-indigo-400 rounded-full"
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </div>
    </section>
  );
}