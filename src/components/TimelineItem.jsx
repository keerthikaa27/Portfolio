import { motion } from "framer-motion";
import { staggerItem } from "./ui/Stagger";

export default function TimelineItem({ item }) {
  const title = item.title || item.school || item.org;
  const subtitle = item.degree || item.role;
  const meta = item.meta;

  return (
    <motion.div
      variants={staggerItem}
      className="relative pl-10 pb-12 border-l border-white/10 last:border-transparent last:pb-0 group"
    >
      <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-[#0a192f] border-2 border-brand-300 group-hover:scale-125 group-hover:bg-brand-300 transition-all duration-300" />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-xl font-semibold text-white group-hover:text-brand-300 transition-colors">
          {title}
        </h3>
        <span className="font-mono text-xs text-brand-300/80 whitespace-nowrap">{item.period}</span>
      </div>

      {subtitle && <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>}

      {meta && (
        <span className="inline-block mt-3 px-3 py-1 rounded-full bg-brand-300/10 text-xs text-brand-300">
          {meta}
        </span>
      )}

      {Array.isArray(item.points) && item.points.length > 0 && (
        <ul className="mt-4 space-y-2 max-w-2xl">
          {item.points.map((p, i) => (
            <li key={i} className="text-sm text-zinc-400 leading-relaxed flex gap-3">
              <span className="text-brand-300 mt-0.5 shrink-0">—</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}

      {item.details && <p className="mt-3 text-sm text-zinc-400 leading-relaxed max-w-2xl">{item.details}</p>}
    </motion.div>
  );
}
