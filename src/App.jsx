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
import { experience, Education } from "./data/portfolio";
import Achievement from "./components/Achievement";
import Certifications from "./components/Certifications";
import LiveSites from "./components/LiveSites";
import Cursor from "./components/ui/Cursor";
import Stagger from "./components/ui/Stagger";
import IntroReveal from "./components/IntroReveal";

export default function App() {
  return (
    <div className="bg-dark text-light font-sans">
      <IntroReveal />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Section
          id="experience"
          title="Experience"
          intro="Internships and hands-on training that shaped how I build software."
        >
          <Stagger gap={0.2}>
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
          </Stagger>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects" intro="A selection of things I've built or contributed to.">
          <Stagger className="grid md:grid-cols-2 gap-5" gap={0.1}>
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </Stagger>
        </Section>

        <LiveSites />

        {/* Education Section */}
        <Section id="education" title="Education">
          <Stagger gap={0.2}>
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
          </Stagger>
        </Section>

        <Certifications />
        <Achievement />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
