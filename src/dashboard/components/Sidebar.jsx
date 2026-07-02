import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: "📊" },
  { to: "/dashboard/projects", label: "Projects", icon: "📁" },
  { to: "/dashboard/experience", label: "Experience", icon: "💼" },
  { to: "/dashboard/skills", label: "Skills", icon: "🛠️" },
  { to: "/dashboard/contact", label: "Contact Info", icon: "📞" },
  { to: "/dashboard/profile", label: "Profile", icon: "👤" },
];

export default function Sidebar({ onLogout }) {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-white/10 bg-charcoal/95 backdrop-blur-xl">
      {/* Brand */}
      <div className="flex h-16 items-center border-b border-white/10 px-6">
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
          Hasan
        </span>
        <span className="ml-2 text-xs text-gray-500">Admin</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-base">{link.icon}</span>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 px-3 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          <span className="text-base">🌐</span>
          View Portfolio
        </Link>
        <button
          onClick={onLogout}
          className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-white/5 hover:text-red-400"
        >
          <span className="text-base">🚪</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
