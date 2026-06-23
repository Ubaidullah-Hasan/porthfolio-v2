import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import StarField from './Hero/StarField'

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-charcoal text-white">
      {/* Background star + snow layer */}
      <StarField />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-8xl md:text-9xl font-extrabold tracking-tight mb-6"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            404
          </motion.h1>

          <p className="text-lg md:text-xl text-slate-300 mb-6">Sorry — the page you requested could not be found.</p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/"
              className="px-5 py-2 rounded-md bg-white text-black font-medium hover:brightness-90"
            >
              Go home
            </Link>

            <Link
              to="/#contact"
              className="px-5 py-2 rounded-md border border-white/20 text-white hover:bg-white/5"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
