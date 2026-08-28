import { motion } from "framer-motion";
import { Profile, experience, certifications } from "../data/portfolio";
import { projects } from "./Projects";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Magnetic from "./ui/Magnetic";
import Counter from "./ui/Counter";

export default function Hero() {
  const stats = [
    { value: experience.length-2, suffix: "+", label: "Internships" },
    { value: projects.length, suffix: "+", label: "Projects shipped" },
    { value: certifications.length, suffix: "", label: "Certifications" },
  ];

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 bg-[#0a192f]">
      <div className="container grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="eyebrow">yes, i debug on weekends too, I'm</span>
          </motion.div>

          <h1 className="font-display font-extrabold text-[13vw] sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white">
            {Profile.name.split(" ").map((word, i, arr) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`block ${i === arr.length - 1 ? "text-gradient" : ""}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 max-w-lg text-lg text-zinc-400 leading-relaxed"
          >
            <span className="text-white font-medium">Full Stack Developer · Software Developer</span> — I
            design and build production web systems end to end, from React interfaces to the APIs and
            databases behind them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic as="a">
              <a href="#projects" className="btn-solid">
                View my work <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic as="a">
              <a href="#contact" className="btn">
                Get in touch
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 grid grid-cols-3 max-w-md gap-6 border-t border-white/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-zinc-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Photo — plain, centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex justify-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt={Profile.name}
            className="w-60 sm:w-72 aspect-square object-cover object-[center_20%] rounded-full ring-4 ring-brand-300 ring-offset-4 ring-offset-[#0a192f]"
          />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-brand-300 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
