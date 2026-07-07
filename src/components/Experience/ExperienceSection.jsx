import { experience } from "../../data/experience";
import StarField from "../Hero/StarField";
import ExperienceCard from "./ExperienceCard";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceSidebar from "./ExperienceSidebar";

export default function ExperienceSection({profileData}) {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-charcoal/90 py-24"
    >
      <StarField />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
        <div className="absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8">
        <ExperienceHeader />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <ExperienceSidebar profileData={profileData} />

          <div className="space-y-4">
            {experience.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
