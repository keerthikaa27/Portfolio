import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import Reveal from "./ui/Reveal";
import Stagger, { staggerItem } from "./ui/Stagger";

const GROUPS = [
  { title: "Programming Languages", items: skills.ProgrammingLanguages },
  { title: "Backend Development", items: skills.BackendDevelopment },
  { title: "Frontend Development", items: skills.FrontendDevelopment },
  { title: "AI/ML", items: skills.AIML },
  { title: "Databases", items: skills.Databases },
  { title: "Cloud & Tools", items: skills.CloudTools },
  { title: "Software Engineering", items: skills.SoftwareEngineering },
  { title: "Testing", items: skills.Testing },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-[#0a192f] text-white relative">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2 className="section-title mt-3 mb-14 max-w-xl">What I build with.</h2>
        </Reveal>

        <Stagger
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
          gap={0.08}
        >
          {GROUPS.map((group) => (
            <motion.div key={group.title} variants={staggerItem} className="bg-[#0a192f] p-7 group">
              <h3 className="font-display text-base font-semibold text-white mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-300 group-hover:scale-150 transition-transform" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-zinc-400 hover:text-brand-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </Stagger>

        {/* Softer, secondary info */}
        <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-500">
          <span className="text-zinc-400">Also comfortable with:</span>
          {skills.Softskills.map((s) => (
            <motion.span key={s} whileHover={{ color: "#e3cda0" }} className="cursor-default">
              {s}
            </motion.span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
