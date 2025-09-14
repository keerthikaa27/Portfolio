// --- file: src/App.jsx ---

import { motion } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Section from "./components/Section";
import { projects } from "./components/Projects";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import TimelineItem from "./components/TimelineItem";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Profile, experience, Education, skills, achievements } from "./data/portfolio";
import Achievement from "./components/Achievement";

export default function App() {
  return (
    <div className="bg-dark text-light font-sans">
      <Nav />
      <main>
        {/* Hero Section */}
        <Hero />
        <About />
        
        {/* Experience Section */}
        <Section
          id="experience"
          title="Experience"
          intro="Clubs, internships, and training that shaped my skills."
        >
          <div className="space-y-8">
            {experience.map((item, i) => (
              <TimelineItem
                key={i}
                item={{
                  title: item.org,
                  role: item.role,
                  period: item.period,
                  points: item.points,
                }}
              />
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects" intro="A selection of things I've built or contributed to.">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </Section>

        <Skills />
        

        {/* Education Section */}
        <Section id="education" title="Education">
          <div className="space-y-8">
            {Education.map((ed, i) => (
              <TimelineItem
                key={i}
                item={{
                  school: ed.school,
                  degree: ed.degree,
                  period: ed.period,
                  meta: ed.meta,
                }}
              />
            ))}
          </div>
        </Section>
        <Achievement />
        
        <Contact />
        
      </main>

      <Footer />
    </div>
  );
}

// Helper component
function SkillGroup({ title, items }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-gray">{title}</div>
      <div className="mt-1 flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

