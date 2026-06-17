import { motion } from "framer-motion";
import { contactItems } from "./contactData";

export default function ContactIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl"
    >
      <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
        Contact
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Let’s build something{" "}
        <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
          brilliant.
        </span>
      </h2>

      <p className="mt-5 text-base leading-7 text-gray-300">
        Have a project, idea, or collaboration in mind? Send me a message and
        I’ll get back to you as soon as possible.
      </p>

      <div className="mt-10 space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-r ${item.gradient} p-4`}
          >
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-xl text-white">
              {item.icon}
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                {item.label}
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}