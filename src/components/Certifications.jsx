import { motion } from "framer-motion";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="section py-20 text-white" style={{ backgroundColor: "#0a192f" }}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-white"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="group block bg-zinc-900 p-5 rounded-xl shadow-md border border-zinc-800/50 hover:border-brand-400/50 hover:shadow-brand-500/30 transition-all"
            >
              <h3 className="text-white font-medium group-hover:text-brand-300 transition-colors">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{cert.issuer}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-300 group-hover:text-brand-200 transition-colors">
                View credential →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
