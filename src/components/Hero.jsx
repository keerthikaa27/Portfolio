import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Profile } from "../data/portfolio";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  const nameParts = Profile.name.split(" ");
  const roles = ["Full-stack Developer", "Software Developer", "Web Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="section pt-16 bg-[#0a192f] text-white relative overflow-hidden">
      
      <motion.div
        className="absolute w-32 h-32 bg-brand-400/20 rounded-full top-10 left-10"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-20 h-20 bg-brand-300/20 rounded-full bottom-20 right-20"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container grid md:grid-cols-[1.3fr_1fr] gap-10 items-center relative z-10">

        {/* Left: Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl font-semibold text-white mb-6"
          >
            Hi, I'm{" "}
            {nameParts.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className="inline-block mr-2 text-brand-400"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <div className="mb-4 h-8 relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full font-mono"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-2 max-w-2xl text-zinc-400"
          >
            {Profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-6 flex items-center gap-4"
          >
            <a className="btn" href={Profile.links.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a className="btn" href={Profile.links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a className="btn" href={`mailto:${Profile.email}`}>
              <Mail size={18} /> Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="rounded-full p-1 bg-gradient-to-r from-brand-600 via-brand-300 to-brand-500 animate-gradient-spin">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt={Profile.name}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-[#0a192f] shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex justify-center mt-12 relative z-10"
      >
        <ChevronDown size={32} className="text-brand-400" />
      </motion.div>
    </section>
  );
}
