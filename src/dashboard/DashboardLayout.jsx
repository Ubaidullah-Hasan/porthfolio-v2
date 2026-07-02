import { useState } from "react";
import { Outlet } from "react-router";
import { supabase } from "../lib/supabase";
import { DashboardProvider, useDashboard } from "./context/DashboardContext";
import Sidebar from "./components/Sidebar";

function DashboardContent() {
  const { user, loading } = useDashboard();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");
    const {data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
    setAuthLoading(false);
    console.log("Login response:", data, error);
  };
  console.log("User in DashboardContent:", user);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-charcoal text-white">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-charcoal px-4">
        <form
          onSubmit={handleLogin}
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

  return (
    <div className="min-h-screen bg-charcoal">
      <Sidebar onLogout={handleLogout} />
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default function DashboardLayout() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
}
