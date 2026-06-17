import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Experience", to: "experience" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          to="hero"
          smooth
          duration={500}
          offset={-70}
          className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent"
        >
          Hasan
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy
                smooth
                duration={500}
                offset={-70}
                activeClass="after:scale-x-100 text-white"
                className="relative cursor-pointer px-3 py-2 text-sm font-medium tracking-wider text-gray-400 transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-1/2 h-px w-3/4 -translate-x-1/2 scale-x-0 bg-gradient-to-r from-cyan-300 to-fuchsia-400 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}

          <li className="ml-4">
            <a
              href="#contact"
              className="inline-block rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 px-5 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-cyan-500/20 transition hover:from-cyan-200 hover:to-fuchsia-300 hover:shadow-cyan-500/30"
            >
              Hire Me
            </a>
          </li>
        </ul>

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
      </div>

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
                className="block rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 px-5 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-black"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
