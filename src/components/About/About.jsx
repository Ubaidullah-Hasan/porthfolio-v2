import { motion } from "framer-motion";
import AboutDetails from "./AboutDetails";
import AboutImage from "./AboutImage";
import AboutParticles from "./AboutParticles";

export default function About({ profileData }) {
  return (
    <section className="relative overflow-hidden bg-charcoal/90 py-20">
      <AboutParticles />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 md:grid-cols-2 md:items-stretch">
        <motion.div
          className="relative z-10 flex h-full flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AboutImage image={profileData?.profile_image} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-10"
        >
          <AboutDetails profileData={profileData} />
        </motion.div>
      </div>
    </section>
  );
}
