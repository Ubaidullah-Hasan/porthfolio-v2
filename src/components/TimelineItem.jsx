import { motion } from 'framer-motion';

export default function TimelineItem({ index, year, role, company, description, animate }) {
  return (
    <motion.div
      className="mb-12 ml-6"
      custom={index}
      initial={{ opacity: 0, y: 30 }}
      animate={animate}
    >
      <div className="absolute -left-4 top-1 w-8 h-8 bg-neonBlue rounded-full flex items-center justify-center shadow-lg">
        <span className="text-sm font-medium">{year}</span>
      </div>

      <h3 className="text-xl font-semibold text-white">{role} @ {company}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
}