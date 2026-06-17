import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Experience", to: "experience" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <motion.div
          whileHover={{ rotate: 10 }}
          className="text-2xl font-bold text-neonBlue"
        >
          Dev<span className="text-electricPurple">Portfolio</span>
        </motion.div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-neonBlue transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile slide‑out panel */}
      {isOpen && (
        <motion.ul
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10"
        >
          {navItems.map((item) => (
            <li key={item.to} className="border-b border-white/10">
              <Link
                to={item.to}
                smooth
                duration={500}
                offset={-70}
                className="block px-4 py-3 text-white hover:text-neonBlue"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
