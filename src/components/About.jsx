import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-charcoal/90">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text block */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-neonBlue">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I specialize in building performant, accessible, and visually
            striking web applications. Over 8+ years I have led
            cross‑functional teams, mentored junior developers, and delivered
            mission‑critical products for fintech, e‑commerce, and SaaS
            startups. My toolkit includes React, TypeScript, Node.js,
            GraphQL, and a strong eye for UI/UX.
          </p>
          <a
            href="#contact"
            className="inline-block bg-emerald hover:bg-emerald/80 text-black font-medium py-2 px-5 rounded-lg transition"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Glassmorphic card – portrait or illustration */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Placeholder – replace with a real photo or illustration */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-md flex items-center justify-center text-gray-500">
            <span>Photo / Illustration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}