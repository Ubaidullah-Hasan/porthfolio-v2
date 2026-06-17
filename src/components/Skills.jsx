import { motion } from 'framer-motion';
import { frontend, backend, tools } from '../data/skills';

const categories = [
  { title: 'Frontend', items: frontend, color: 'from-neonBlue to-electricPurple' },
  { title: 'Backend', items: backend, color: 'from-emerald to-neonBlue' },
  { title: 'Tools', items: tools, color: 'from-electricPurple to-emerald' },
];

export default function Skills() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-electricPurple"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skillset
        </motion.h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(255,255,255,0.1)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r {cat.color}">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map(skill => (
                  <li key={skill} className="text-gray-300 flex items-center">
                    <span className="h-2 w-2 bg-neonBlue rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}