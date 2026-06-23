import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

export default function NavbarMobileMenu({ navItems, isOpen, setIsOpen }) {
  return (
    <>
      <button
        className="rounded-md p-2 text-white transition hover:bg-white/10 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-black/70 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.to} className="border-b border-white/5">
                <Link
                  to={item.to}
                  spy
                  smooth
                  duration={500}
                  offset={-70}
                  activeClass="text-cyan-300"
                  className="block px-6 py-3.5 text-sm font-medium tracking-wider text-gray-300 transition hover:text-cyan-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-6 py-4">
              <a
                href="#contact"
                className="block rounded-full bg-linear-to-r from-cyan-300 to-fuchsia-400 px-5 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-black"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
