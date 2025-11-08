import { motion } from "framer-motion";

export default function TimelineItem({ item }) {
  const title = item.title || item.school || item.org;
  const subtitle = item.degree || item.role; 
  const meta = item.meta;                    

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-brand-500/20 transition-shadow mb-6"
    >
      {/* Top row: title + period */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-white text-lg">{title}</h3>
        <span className="text-xs text-zinc-400 whitespace-nowrap">{item.period}</span>
      </div>

      {/* Subtitle (degree/role) */}
      {subtitle && (
        <p className="mt-2 text-sm text-zinc-300">{subtitle}</p>
      )}

      {/* Meta (CGPA / Percentage) as small pill box */}
      {meta && (
        <div className="mt-2">
          <span className="inline-block px-3 py-1 bg-zinc-800 text-xs text-brand-300 rounded-lg shadow-sm">
            {meta}
          </span>
        </div>
      )}

      {/* Optional bullet points (for experience) */}
      {Array.isArray(item.points) && item.points.length > 0 && (
        <ul className="mt-3 list-disc list-inside text-zinc-300/90 space-y-1">
          {item.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}

      {/* Optional description/details */}
      {item.details && (
        <p className="text-sm text-zinc-300 mt-3 leading-relaxed">{item.details}</p>
      )}
    </motion.div>
  );
}
