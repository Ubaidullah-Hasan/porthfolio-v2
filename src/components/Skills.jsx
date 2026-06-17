import { motion } from "framer-motion";
import { CodeBracketIcon, ServerIcon, WrenchIcon } from "@heroicons/react/24/outline";
import { frontend, backend, tools } from "../data/skills";

const categories = [
  { title: "Frontend", items: frontend, icon: CodeBracketIcon, color: "from-cyan-400 to-cyan-500", border: "border-l-cyan-400", tagColor: "border-cyan-500/20 bg-cyan-500/10 text-cyan-200" },
  { title: "Backend", items: backend, icon: ServerIcon, color: "from-fuchsia-400 to-fuchsia-500", border: "border-l-fuchsia-400", tagColor: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-200" },
  { title: "Tools", items: tools, icon: WrenchIcon, color: "from-emerald-400 to-emerald-500", border: "border-l-emerald-400", tagColor: "border-emerald-500/20 bg-emerald-500/10 text-emerald-200" },
];

export default function Skills() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.h2
          className="mb-12 text-center text-5xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skillset
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(255,255,255,0.08)" }}
                className={`rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md border-l-4 ${cat.border} transition-shadow`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`rounded-lg bg-gradient-to-br ${cat.color} p-2.5 text-black`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={`text-xl font-semibold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm ${cat.tagColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
