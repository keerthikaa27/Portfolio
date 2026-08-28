import { Profile } from "../data/portfolio";
import { MapPin, Mail, Phone, Download } from "lucide-react";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section bg-[#0a192f] text-white">
      <div className="container max-w-3xl">
        <Reveal>
          <span className="eyebrow">About</span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-2xl sm:text-3xl font-medium leading-snug tracking-tight text-white mt-4 mb-10">
            I'm a Full Stack Developer and Computer Science graduate with hands-on experience building and
            working on real-world applications.
          </h2>
        </Reveal>

        <div className="space-y-5 text-base sm:text-lg text-zinc-400 leading-relaxed">
          <Reveal delay={0.14} as="p">
            I currently work at <span className="text-white font-medium">AI Tensors Corp (AITCare)</span> on a
            production healthcare platform, working with{" "}
            <span className="text-brand-300">React.js, Python, FastAPI, AWS, and DynamoDB</span>. My work
            includes building features, developing APIs, debugging production issues, improving
            performance, and supporting deployments.
          </Reveal>

          <Reveal delay={0.2} as="p">
            I've also worked with{" "}
            <span className="text-brand-300">Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, Docker, Supabase, and REST APIs</span>,
            along with AI technologies such as{" "}
            <span className="text-white font-medium">RAG and LLM-based applications</span>.
          </Reveal>

          <Reveal delay={0.26} as="p">
            I like working across the stack and taking a feature from understanding the requirement to
            building, testing, debugging, and getting it ready for production. I'm comfortable picking up
            new technologies when a project requires them and working independently on tasks.
          </Reveal>

          <Reveal delay={0.32} as="p">
            I'm early in my career, but I've already worked with production systems and real engineering
            problems. I'm looking for opportunities where I can build useful products, take on bigger
            problems, and keep getting better at software engineering.
          </Reveal>
        </div>

        <Reveal delay={0.4} className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12 pt-8 border-t border-white/10">
          <InfoRow icon={MapPin} text={Profile.location} />
          <InfoRow icon={Mail} text={Profile.email} />
          <InfoRow icon={Phone} text={Profile.phone} />
          <a
            href={`${import.meta.env.BASE_URL}RESUME.pdf`}
            download="RESUME.pdf"
            className="btn ml-auto"
          >
            <Download size={15} /> Résumé
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 text-sm text-zinc-400">
      <Icon size={15} className="text-brand-300" />
      <span>{text}</span>
    </div>
  );
}
