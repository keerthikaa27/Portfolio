import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerItem } from "./ui/Stagger";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 overflow-hidden transition-colors duration-300 hover:border-brand-300/30 hover:bg-white/[0.04]"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-white group-hover:text-brand-300 transition-colors duration-300">
            {project.title}
          </h3>
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, rotate: 45 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-zinc-400 group-hover:text-brand-300 group-hover:border-brand-300/40 transition-colors"
              aria-label={`Open ${project.title}`}
            >
              <ArrowUpRight size={16} />
            </motion.a>
          )}
        </div>

        <span className="font-mono text-xs text-zinc-500">{project.period}</span>

        <p className="mt-4 text-sm text-zinc-400 leading-relaxed">{project.description}</p>

        {project.stack?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-zinc-400 group-hover:border-white/20 transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {project.highlights?.length > 0 && (
          <ul className="mt-5 space-y-1.5 border-t border-white/5 pt-5">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="text-xs text-zinc-500 leading-relaxed flex gap-2">
                <span className="text-brand-300/70 shrink-0">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}
