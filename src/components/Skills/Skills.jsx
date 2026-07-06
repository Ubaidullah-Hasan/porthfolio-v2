import {
  CodeBracketIcon,
  ServerIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { backend, frontend, tools } from "../../data/skills";
import Snowfall from "../Snowfall";
import SkillCategoryCard from "./SkillCategoryCard";

const categories = [
  {
    title: "Frontend",
    items: frontend,
    icon: CodeBracketIcon,
    color: "from-cyan-400 to-cyan-500",
    border: "border-l-cyan-400",
    tagColor: "border-cyan-500/20 bg-cyan-500/10 text-cyan-200",
  },
  {
    title: "Backend",
    items: backend,
    icon: ServerIcon,
    color: "from-fuchsia-400 to-fuchsia-500",
    border: "border-l-fuchsia-400",
    tagColor: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-200",
  },
  {
    title: "Tools",
    items: tools,
    icon: WrenchIcon,
    color: "from-emerald-400 to-emerald-500",
    border: "border-l-emerald-400",
    tagColor: "border-emerald-500/20 bg-emerald-500/10 text-emerald-200",
  },
];

export default function Skills() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal py-24">
      <Snowfall count={40} />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.h2
          className="mb-12 text-center text-5xl font-bold bg-linear-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skillset
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
