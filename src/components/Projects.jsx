import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";
import ProjectsPlanet from "./ProjectsPlanet";

export default function Projects() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal/90 py-20">
      <ProjectsPlanet />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.h2
          className="mb-12 text-center text-5xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
