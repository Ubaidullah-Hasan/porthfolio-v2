import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 bg-charcoal text-gray-400 text-center text-sm"
    >
      © {new Date().getFullYear()} Hasan. All rights reserved.
    </motion.footer>
  );
}
