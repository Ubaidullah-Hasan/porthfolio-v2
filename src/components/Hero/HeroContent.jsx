import {
  CloudArrowDownIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import cvPdf from "../../assets/ubaidullah_hasan_CV.pdf";
import TypeWriter from "../ui/TypeWriter";

export default function HeroContent({ profileData }) {
  const professionalSummary =
    profileData?.hero_description ||
    "Building high-performance backend systems and scalable architectures with modern JavaScript ecosystems.";
    
  const [designation1, designation2] = profileData?.designations ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
      >
        Hi, I&rsquo;m{" "}
        <span className="bg-linear-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
          {profileData?.last_name || "Name"}
        </span>
        <span className="mt-2 block font-light tracking-tight text-gray-200 sm:text-xl">
          <TypeWriter
            words={[
              { text: designation1 || "Software Engineer", direction: "ltr" },
              {
                text: designation2 || "Full Stack Developer",
                direction: "rtl",
              },
            ]}
            divider="💡"
            typeSpeed={70}
            deleteSpeed={40}
            pauseDuration={2000}
          />
        </span>
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mx-auto mt-6 h-px w-24 bg-linear-to-r from-cyan-300 to-fuchsia-400"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mx-auto mt-6 mb-10 max-w-xl text-xs leading-7 tracking-wider text-gray-300 sm:text-sm"
      >
        {professionalSummary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <a
          href={profileData?.hero_primary_button_url || cvPdf}
          download="Hasan_CV.pdf"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-200 hover:shadow-cyan-500/40"
        >
          <CloudArrowDownIcon className="h-5 w-5" />
          {profileData?.hero_primary_button_text || "Download my CV"}
        </a>

        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-white/10"
        >
          <CodeBracketIcon className="h-5 w-5" />
          {profileData?.hero_secondary_button_text || "View My Work"}
        </a>
      </motion.div>
    </motion.div>
  );
}
