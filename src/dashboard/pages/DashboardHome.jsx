import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function DashboardHome() {
  const [stats, setStats] = useState({ projects: 0, experience: 0, skills: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const [projects, experience, skills] = await Promise.all([
        supabase.from("projects").select("id", { count: "exact", head: true }),
        supabase.from("experience").select("id", { count: "exact", head: true }),
        supabase.from("skills").select("id", { count: "exact", head: true }),
      ]);
      setStats({
        projects: projects.count ?? 0,
        experience: experience.count ?? 0,
        skills: skills.count ?? 0,
      });
      setLoading(false);
    }
    fetchStats();
  }, []);

  const cards = [
    { label: "Projects", value: stats.projects, color: "cyan" },
    { label: "Experience", value: stats.experience, color: "fuchsia" },
    { label: "Skills", value: stats.skills, color: "emerald" },
  ];

  if (loading) {
    return <div className="text-gray-400">Loading stats...</div>;
  }

  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold text-white">Dashboard</h2>

      <div className="grid gap-6 sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <p className="text-sm text-gray-400">{card.label}</p>
            <p className="mt-2 text-4xl font-bold text-white">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="mb-4 text-lg font-semibold text-white">Quick Actions</h3>
        <div className="flex gap-4">
          <a
            href="/dashboard/projects"
            className="rounded-lg bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500/30"
          >
            Manage Projects
          </a>
          <a
            href="/dashboard/experience"
            className="rounded-lg bg-fuchsia-500/20 px-4 py-2 text-sm text-fuchsia-300 transition hover:bg-fuchsia-500/30"
          >
            Manage Experience
          </a>
          <a
            href="/dashboard/profile"
            className="rounded-lg bg-emerald-500/20 px-4 py-2 text-sm text-emerald-300 transition hover:bg-emerald-500/30"
          >
            Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
}
