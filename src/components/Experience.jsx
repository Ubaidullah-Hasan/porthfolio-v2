import { motion, useAnimation, useInView } from 'framer-motion';
import TimelineItem from './TimelineItem';
import { experience } from '../data/experience';
import { useRef } from 'react';

export default function Experience() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  if (inView) {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }

  return (
    <section ref={ref} className="py-24 bg-charcoal">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-electricPurple"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          custom={0}
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-white/20 ml-4">
          {experience.map((item, i) => (
            <TimelineItem key={item.id} index={i} {...item} animate={controls} />
          ))}
        </div>
      </div>
    </section>
  );
}