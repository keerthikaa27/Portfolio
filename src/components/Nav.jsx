import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "./ui/Magnetic";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Infinity };
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0].top < Infinity) setActive(offsets[0].id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[#0a192f] border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-5">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-white">
          Keerthika<span className="text-brand-300">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative px-4 py-2 rounded-full transition-colors ${
                  active === id ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/8 border border-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <Magnetic as="a" strength={0.4}>
          <a href="#contact" className="btn-solid hidden sm:inline-flex">
            Let's talk
          </a>
        </Magnetic>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white p-2"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050d1a] md:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} className="text-white p-2" aria-label="Close menu">
                <X size={26} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-8 mt-10">
              {sections.map(({ id, label }, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-3xl text-white/90 hover:text-brand-300 transition-colors"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
