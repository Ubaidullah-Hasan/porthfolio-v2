export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  authError,
  authLoading,
  onSubmit,
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Dashboard Login
        </h2>

        {authError && (
          <p className="mb-4 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">
            {authError}
          </p>
        )}

        <label className="mb-1 block text-xs text-gray-500">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-500/50"
        />

        <label className="mb-1 block text-xs text-gray-500">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-500/50"
        />

        <button
          type="submit"
          disabled={authLoading}
          className="w-full rounded-lg bg-cyan-500 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-400 disabled:opacity-50"
        >
          {authLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
