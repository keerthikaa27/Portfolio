import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Infinity };
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top) };
      });

      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0].top < Infinity) {
        setActive(offsets[0].id);
      }
    };

    onScroll(); 
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur ${
        scrolled ? "bg-zinc-950/70 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#top" className="font-display text-lg font-semibold">
          NK
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`hover:text-white transition ${
                  active === id ? "text-white" : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn text-sm">
          Hire me
        </a>
      </nav>
    </header>
  );
}

