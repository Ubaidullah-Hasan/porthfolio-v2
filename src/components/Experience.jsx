import { motion } from "framer-motion";
import { BriefcaseIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { experience } from "../data/experience";
import StarField from "./Hero/StarField";

const stats = [
  { label: "Years", value: "6+" },
  { label: "Products", value: "30+" },
  { label: "Focus", value: "Full Stack" },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-charcoal/90 py-24"
    >
      <StarField />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
        <div className="absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8">
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
            A condensed view of my journey building products, improving systems,
            and shipping responsive interfaces with clean architecture.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
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
                <h3 className="text-2xl font-bold text-white">Crafting modern digital products</h3>
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

          <div className="space-y-4">
            {experience.map((item, index) => (
              <motion.article
                key={item.id}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
