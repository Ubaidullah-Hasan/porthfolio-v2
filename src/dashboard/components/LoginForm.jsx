import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import ParticleAnimation from "./ParticleAnimation";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

function FloatingOrb({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-15 ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export default function LoginForm() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    authError,
    authLoading,
    handleLogin,
  } = useAuth();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050508] px-4">
      <ParticleAnimation />

      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left — Branding */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeIn} custom={0}>
            <span className="mb-4 inline-block rounded-full border border-neon-blue/20 bg-neon-blue/10 px-4 py-1.5 text-xs font-medium tracking-wider text-neon-blue">
              PORTFOLIO ADMIN
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            custom={1}
            className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl"
          >
            Welcome back
            <span className="block bg-gradient-to-r from-neon-blue to-electric-purple bg-clip-text text-transparent">
              to your dashboard
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            custom={2}
            className="mt-5 max-w-md text-sm leading-relaxed text-gray-400 lg:text-base"
          >
            Manage your portfolio — projects, skills, experience — all from one
            place. Your work deserves to shine.
          </motion.p>

          <motion.div
            variants={fadeIn}
            custom={3}
            className="mt-8 flex items-center justify-center gap-6 lg:justify-start"
          >
            {[
              { label: "Projects", value: "Manage" },
              { label: "Skills", value: "Showcase" },
              { label: "Contact", value: "Connect" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-sm font-semibold text-white">
                  {item.value}
                </p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Login card */}
        <motion.div
          className="w-full max-w-sm flex-shrink-0"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0f]/80 p-8 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.6)]">
            {/* Inner glow border */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />

            {/* Card header */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-neon-blue/20 to-electric-purple/20">
                <svg
                  className="h-6 w-6 text-neon-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Sign In</h2>
              <p className="mt-1 text-xs text-gray-500">
                Enter your credentials to continue
              </p>
            </div>

            {/* Error message */}
            {authError && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mb-5 overflow-hidden rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3"
              >
                <p className="text-center text-sm text-red-400">{authError}</p>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-400">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:border-neon-blue/50 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(0,255,255,0.07)]"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:border-neon-blue/50 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(0,255,255,0.07)]"
                />
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="group relative mt-2 w-full overflow-hidden rounded-xl bg-gradient-to-r from-neon-blue to-electric-purple py-3 text-sm font-semibold text-[#0a0a0a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] disabled:opacity-50"
              >
                {/* Hover shine effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative">
                  {authLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Signing in…
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </span>
              </button>
            </form>

            {/* Footer */}
            <p className="mt-6 text-center text-[11px] text-gray-600">
              Protected by Supabase Auth
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}