import TypeWriter from "../ui/TypeWriter";

const quickFacts = [
  { label: "Role", value: "Full Stack" },
  { label: "Backend", value: "APIs + Auth" },
  { label: "Database", value: "SQL / NoSQL" },
];

const techColors = [
  "border-cyan-500/20 bg-cyan-500/10 text-cyan-200",
  "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-200",
  "border-emerald-500/20 bg-emerald-500/10 text-emerald-200",
  "border-indigo-500/20 bg-indigo-500/10 text-indigo-200",
  "border-pink-500/20 bg-pink-500/10 text-pink-200",
  "border-teal-500/20 bg-teal-500/10 text-teal-200",
  "border-violet-500/20 bg-violet-500/10 text-violet-200",
  "border-rose-500/20 bg-rose-500/10 text-rose-200",
  "border-cyan-500/20 bg-cyan-500/10 text-cyan-200",
  "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-200",
  "border-emerald-500/20 bg-emerald-500/10 text-emerald-200",
];

const techStack = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "REST API",
  "Authentication",
];

/** @typedef {import("../../types/profile.types").Profile} Profile */

/**
 * @param {{ profileData: Profile }} props
 */

export default function AboutDetails({ profileData }) {
  return (
    <div className="relative h-full overflow-hidden rounded-4xl border border-white/10 bg-white/7 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl sm:p-8">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative">
        <div className="mb-6 flex items-center gap-4">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-cyan-300 to-fuchsia-400 text-2xl font-black text-black shadow-lg shadow-cyan-500/20">
            <img
              src={
                profileData?.profile_image ||
                "https://ui-avatars.com/api/?name=Hasan&background=5EEAD4&color=000&size=64&bold=true"
              }
              alt="Hasan"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
              About Me
            </p>
            <h3 className="text-2xl font-bold text-white">
              <TypeWriter
                words={[
                  {
                    text:
                      profileData?.first_name + " " + profileData?.last_name ||
                      "Ubaidullah OHasan",
                    direction: "ltr",
                  },
                ]}
                divider="💡"
                typeSpeed={20}
                deleteSpeed={20}
                pauseDuration={2000}
              />
            </h3>
            <p className="text-sm text-gray-300">
              Software Engineer | Full Stack Developer
            </p>
          </div>
        </div>

        <p className="text-sm leading-7 text-gray-300">
          I enjoy solving real-world problems through clean code, scalable
          architecture, and modern engineering practices. My goal is to become a
          highly skilled Software Engineer capable of designing and building
          impactful products from concept to deployment.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                {fact.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span
                key={tech}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-xl ${techColors[i % techColors.length]}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <p className="text-xs text-gray-500">architecture.ts</p>
          </div>
          <pre className="overflow-x-auto text-xs leading-6 text-cyan-50">
            <code>{`const hasan = {
  role: "Full Stack Developer",
  focus: ["React", "Node.js", "APIs"],
  mission: "Build scalable products"
};`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
