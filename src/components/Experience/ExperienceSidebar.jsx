import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const stats = [
  { label: "Years", value: "6+" },
  { label: "Products", value: "30+" },
  { label: "Focus", value: "Full Stack" },
];

export default function ExperienceSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-cyan-300 to-fuchsia-400 text-black">
          <BriefcaseIcon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Career Snapshot
          </p>
          <h3 className="text-2xl font-bold text-white">
            Crafting modern digital products
          </h3>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-black/20 p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {stat.label}
            </p>
            <p className="mt-2 text-2xl font-black text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
        <p className="text-sm leading-7 text-gray-300">
          I focus on building fast interfaces, scalable APIs, and maintainable
          systems that feel premium from first interaction to final delivery.
        </p>
      </div>
    </motion.aside>
  );
}
