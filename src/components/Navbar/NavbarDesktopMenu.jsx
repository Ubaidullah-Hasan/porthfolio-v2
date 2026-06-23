import { Link } from 'react-scroll'

export default function NavbarDesktopMenu({ navItems }) {
  return (
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
            <span className="absolute -bottom-0.5 left-1/2 h-px w-3/4 -translate-x-1/2 scale-x-0 bg-linear-to-r from-cyan-300 to-fuchsia-400 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        </li>
      ))}

      <li className="ml-4">
        <a
          href="#contact"
          className="inline-block rounded-full bg-linear-to-r from-cyan-300 to-fuchsia-400 px-5 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-cyan-500/20 transition hover:from-cyan-200 hover:to-fuchsia-300 hover:shadow-cyan-500/30"
        >
          Hire Me
        </a>
      </li>
    </ul>
  )
}
