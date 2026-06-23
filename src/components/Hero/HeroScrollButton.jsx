import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function HeroScrollButton({ targetId = 'about', offset = 80 }) {
  const handleScrollDown = () => {
    const nextSection = document.getElementById(targetId)
    if (nextSection) {
      const top = nextSection.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <motion.button
      type="button"
      aria-label="Scroll down"
      onClick={handleScrollDown}
      className="cursor-pointer absolute bottom-6 left-1/2 z-20 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-white/10 bg-white/6 text-gray-300 backdrop-blur-xl"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <ArrowDownIcon className="h-6 w-6" />
    </motion.button>
  )
}
