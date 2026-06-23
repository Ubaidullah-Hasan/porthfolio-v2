import { motion } from 'framer-motion';

export default function CosmicOrb() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
      {/* মেইন গ্লোয়িং কোর */}
      <motion.div
        className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-10 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 blur-[80px]"
        animate={{
          scale: [1, 1.15, 0.95, 1],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
      
      {/* অরবিট রিং (সূক্ষ্ম মহাজাগতিক ভাইব দেওয়ার জন্য) */}
      <motion.div 
        className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] border border-dashed border-slate-800/40 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />
    </div>
  );
}