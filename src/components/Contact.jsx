import { Profile } from "../data/portfolio";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import Magnetic from "./ui/Magnetic";

const socials = [
  { href: `mailto:${Profile.email}`, icon: Mail, label: "Email" },
  { href: Profile.links.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
  { href: Profile.links.github, icon: Github, label: "GitHub", external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section bg-[#0a192f] text-white border-t border-white/10">
      <div className="container text-center">
        <Reveal>
          <span className="eyebrow">Contact</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight mt-4 mb-8 max-w-3xl mx-auto leading-tight">
            Let's build something <span className="text-gradient">worth shipping.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-zinc-400 max-w-xl mx-auto mb-12">
            Open to full-stack roles, internships, and interesting problems. The fastest way to reach me
            is email.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Magnetic as="a" strength={0.3} className="inline-block">
            <a
              href={`mailto:${Profile.email}`}
              className="inline-flex items-center gap-3 font-display text-2xl sm:text-3xl font-semibold text-white border-b-2 border-brand-300/40 hover:border-brand-300 pb-2 transition-colors"
            >
              {Profile.email}
              <ArrowUpRight className="text-brand-300" size={26} />
            </a>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.4} className="flex justify-center gap-4 mt-14">
          {socials.map(({ href, icon: Icon, label, external }) => (
            <Magnetic key={label} as="a" strength={0.5}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-zinc-400 hover:text-brand-300 hover:border-brand-300/40 transition-colors"
              >
                <Icon size={18} />
              </a>
            </Magnetic>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
