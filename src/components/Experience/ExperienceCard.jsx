import { motion } from "framer-motion";

export default function ExperienceCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20 backdrop-blur-2xl sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_28%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            {item.year}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              {item.role}
            </h3>
            <p className="mt-1 text-sm font-medium text-transparent bg-linear-to-r from-cyan-300 to-fuchsia-400 bg-clip-text">
              {item.company}
            </p>
          </div>
        </div>

        <div className="self-start rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-300">
          Featured Role
        </div>
      </div>

      <p className="relative mt-5 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
        {item.description}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200">
          Product Delivery
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200">
          UI/UX Polish
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200">
          Scalable Systems
        </span>
      </div>
    </motion.article>
  );
}
