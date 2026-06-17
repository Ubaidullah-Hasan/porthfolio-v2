import { motion, useAnimation, useInView } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { experience } from "../data/experience";
import { useRef } from "react";

export default function Experience() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  if (inView) {
    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }));
  }

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-charcoal/80 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(16,185,129,0.1),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <motion.h2
          className="mb-12 text-center text-5xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          custom={0}
        >
          Experience
        </motion.h2>

        <div className="relative ml-4">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-300 via-fuchsia-400 to-emerald-400" />
          {experience.map((item, i) => (
            <TimelineItem key={item.id} index={i} {...item} animate={controls} />
          ))}
        </div>
      </div>
    </section>
  );
}
