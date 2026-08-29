import { ArrowUpRight } from "lucide-react";
import Reveal from "./ui/Reveal";

const STACK = ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Google Places API", "Jina AI", "Gemini"];

const HIGHLIGHTS = [
  "LLM-based intent extraction: Gemini parses natural-language queries into structured constraints (budget, ambience, radius, priorities) instead of relying on keyword filters.",
  "Hybrid retrieval pipeline: PostGIS geospatial filtering + Google Places candidate generation feed a deterministic ranking engine (distance, rating, price, sentiment) — the LLM never decides the ranking.",
  "Semantic review search: reviews are embedded with Jina (1024-dim) and indexed in Supabase via pgvector, so cosine-similarity retrieval surfaces reviews like “peaceful corner tables, reliable Wi-Fi” even when the query never used those words.",
  "Retrieval-augmented explanation: top-ranked places plus their most relevant review snippets are passed to Gemini to generate grounded pros/cons and a natural-language “why,” instead of an LLM guessing from nothing.",
  "Performance engineering: parallelized independent review-fetch, embedding, and analysis calls with asyncio.gather, cutting end-to-end search latency from ~76s to ~36.5s with 20/20 backend tests passing.",
];

export default function FavoriteProject() {
  return (
    <section id="favorite-project" className="section bg-[#0a192f] text-white">
      <div className="container max-w-3xl text-center">
        <Reveal>
          <span className="eyebrow">A Problem I Actually Had</span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-2xl sm:text-3xl font-medium leading-snug tracking-tight text-white mt-4 mb-10">
            I was tired of opening five tabs and forty reviews just to pick a place to eat — so I built
            something that decides with me. Meet SWhere.
          </h2>
        </Reveal>

        <div className="space-y-5 text-base sm:text-lg text-zinc-400 leading-relaxed mx-auto">
          <Reveal delay={0.14} as="p">
            SWhere is an AI-powered local decision assistant built to answer a question we all ask way too
            often: <span className="text-white font-medium">“Where shall we go?”</span>
          </Reveal>

          <Reveal delay={0.2} as="p">
            Instead of dumping a hundred pins on a map and wishing you luck, SWhere understands what you
            mean, searches nearby places, actually reads the reviews so you don't have to, weighs what
            matters to <span className="text-white font-medium">you</span>, and explains why a place fits —
            like a friend who's been everywhere and has opinions about all of it.
          </Reveal>

          <Reveal delay={0.26} as="p" className="text-zinc-500 italic">
            Because finding a place is easy. Finding the right one is the real problem.
          </Reveal>
        </div>

        <Reveal delay={0.32} className="flex flex-wrap justify-center gap-2 mt-10">
          {STACK.map((s) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-zinc-400"
            >
              {s}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.38}>
          <ul className="mt-10 space-y-3 text-left max-w-xl mx-auto">
            {HIGHLIGHTS.map((h, i) => (
              <li key={i} className="text-sm text-zinc-400 leading-relaxed flex gap-3">
                <span className="text-brand-300 shrink-0">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.44} className="mt-12 pt-8 border-t border-white/10 flex justify-center">
          <a
            href="https://swhere-dusky.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Go find your SWhere <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
