import { motion } from "framer-motion";

export default function SkillCategoryCard({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.div
      key={category.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(255,255,255,0.08)" }}
      className={`rounded-xl border border-white/10 bg-white/5 border-l-4 p-6 backdrop-blur-md transition-shadow ${category.border}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`rounded-lg bg-linear-to-br ${category.color} p-2.5 text-black`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3
          className={`text-xl font-semibold bg-linear-to-r ${category.color} bg-clip-text text-transparent`}
        >
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => (
          <span
            key={skill}
            className={`rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm ${category.tagColor}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
