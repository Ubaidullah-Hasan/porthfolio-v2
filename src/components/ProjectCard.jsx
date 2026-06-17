import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default function ProjectCard({ title, description, image, tech, link }) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden"
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 20px rgba(255,255,255,0.2)',
        borderColor: 'rgba(255,255,255,0.3)',
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Image placeholder */}
      <div className="h-48 bg-gray-800 flex items-center justify-center text-gray-400">
        {image ? <img src={image} alt={title} className="h-full w-full object-cover" /> : 'Image'}
      </div>

      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-semibold text-neonBlue mb-2">{title}</h3>
        <p className="text-gray-300 flex-grow mb-4">{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map(t => (
            <span
              key={t}
              className="px-2 py-1 text-xs bg-white/10 rounded text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center self-start text-neonBlue hover:underline"
        >
          View Project
          <ArrowUpRightIcon className="h-4 w-4 ml-1" />
        </a>
      </div>
    </motion.div>
  );
}