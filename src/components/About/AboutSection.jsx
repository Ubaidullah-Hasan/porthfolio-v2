import { motion } from "framer-motion";
import StarField from "../Hero/StarField";
import AboutDetails from "./AboutDetails";
import AboutImage from "./AboutImage";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal/90 py-20">
      <StarField />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 md:grid-cols-2 md:items-stretch">
        <motion.div
          className="relative z-10 flex h-full flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AboutImage />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-10"
        >
          <AboutDetails />
        </motion.div>
      </div>
    </section>
  );
}
