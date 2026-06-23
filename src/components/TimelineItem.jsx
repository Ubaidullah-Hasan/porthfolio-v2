import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function TimelineItem({ index, year, role, company, description, animate }) {
  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, x: -30 }}
      animate={animate}
      whileHover={{ x: 4 }}
      className="group relative mb-10 ml-8"
    >
      <div className="absolute -left-10 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-fuchsia-400 text-[11px] font-bold text-black shadow-lg shadow-cyan-500/20">
        {year}
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]">
        <h3 className="text-lg font-semibold text-white">
          {role}{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
            @ {company}
          </span>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-gray-300">
          {description}
        </p>

        <div className="mt-3 flex items-center gap-1 text-xs font-medium text-cyan-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span>View Details</span>
          <ArrowRightIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.div>
  );
}
