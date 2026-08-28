import { motion } from "framer-motion";
import { certifications } from "../data/portfolio";
import { Award, ArrowUpRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import Stagger, { staggerItem } from "./ui/Stagger";

export default function Certifications() {
  return (
    <section id="certifications" className="section bg-[#0a192f] text-white">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Certifications</span>
          <h2 className="section-title mt-3 mb-14 max-w-xl">Credentials I've earned.</h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 gap-4" gap={0.12}>
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-brand-300/30 transition-colors"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-300/10 text-brand-300">
                <Award size={20} />
              </span>
              <div className="min-w-0">
                <h3 className="text-white font-medium group-hover:text-brand-300 transition-colors truncate">
                  {cert.title}
                </h3>
                <p className="text-sm text-zinc-500">{cert.issuer}</p>
              </div>
              <ArrowUpRight
                size={16}
                className="ml-auto shrink-0 text-zinc-500 group-hover:text-brand-300 group-hover:rotate-45 transition-all duration-300"
              />
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
