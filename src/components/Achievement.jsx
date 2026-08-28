import { motion } from "framer-motion";
import { achievements } from "../data/portfolio";
import { Sparkles } from "lucide-react";
import Reveal from "./ui/Reveal";
import Stagger, { staggerItem } from "./ui/Stagger";

export default function Achievements() {
  return (
    <section id="achievements" className="section bg-[#0a192f] text-white">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Achievements</span>
          <h2 className="section-title mt-3 mb-14 max-w-xl">Moments worth mentioning.</h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 gap-4" gap={0.12}>
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ x: 4 }}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-brand-300/30 transition-colors"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-300/10 text-brand-300">
                <Sparkles size={15} />
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">{ach}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
