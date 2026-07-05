import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const tagColors = [
  "border-cyan-500/20 bg-cyan-500/10 text-cyan-200",
  "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-200",
  "border-emerald-500/20 bg-emerald-500/10 text-emerald-200",
  "border-indigo-500/20 bg-indigo-500/10 text-indigo-200",
  "border-pink-500/20 bg-pink-500/10 text-pink-200",
  "border-teal-500/20 bg-teal-500/10 text-teal-200",
];

export default function ProjectCard({ title, description, image, tech, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.25)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 to-fuchsia-400" />

      <div className="h-48 flex items-center justify-center bg-gray-800/50 text-gray-400 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <ArrowUpRightIcon className="h-10 w-10" />
            <span className="text-xs">Project Preview</span>
          </div>
        )}
      </div>

      <div className="flex flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-300">
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={t}
              className={`rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm ${tagColors[i % tagColors.length]}`}
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center self-start gap-1.5 text-sm font-semibold text-cyan-300 transition hover:text-fuchsia-400"
        >
          <span className="relative">
            View Project
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-300 to-fuchsia-400 transition-all duration-300 group-hover/btn:w-full" />
          </span>
          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
}
