import { SparklesIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function ExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
        <SparklesIcon className="h-4 w-4" />
        Experience
      </div>

      <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
        Modern work that feels
        <span className="bg-linear-to-r from-cyan-300 via-fuchsia-400 to-emerald-300 bg-clip-text text-transparent">
          polished.
        </span>
      </h2>

      <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
        A condensed view of my journey building products, improving systems, and
        shipping responsive interfaces with clean architecture.
      </p>
    </motion.div>
  );
}
