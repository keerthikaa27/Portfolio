import { motion } from "framer-motion";
import { liveSites } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import Stagger, { staggerItem } from "./ui/Stagger";

export default function LiveSites() {
  return (
    <section id="live-sites" className="section bg-[#0a192f] text-white">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Live on the web</span>
          <h2 className="section-title mt-3 mb-4 max-w-xl">Real websites I've shipped.</h2>
          <p className="text-zinc-400 max-w-xl mb-14">
            Not demos — production sites that are live right now.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 gap-6" gap={0.15}>
          {liveSites.map((site) => (
            <motion.a
              key={site.domain}
              href={site.url}
              target="_blank"
              rel="noreferrer"
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group block rounded-2xl border border-white/10 overflow-hidden hover:border-brand-300/30 transition-colors"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/10">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-xs text-zinc-400">
                  <img
                    src={`${import.meta.env.BASE_URL}${site.favicon}`}
                    alt=""
                    className="h-3.5 w-3.5 rounded-sm"
                  />
                  {site.domain}
                </div>
              </div>

              {/* Body */}
              <div className="flex items-center gap-5 p-8 bg-white/[0.02]">
                <img
                  src={`${import.meta.env.BASE_URL}${site.favicon}`}
                  alt={`${site.name} logo`}
                  className="h-14 w-14 rounded-xl object-contain bg-white/5 p-2 shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-brand-300 transition-colors">
                    {site.name}
                  </h3>
                  <p className="text-sm text-zinc-500">{site.description}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-auto shrink-0 text-zinc-500 group-hover:text-brand-300 group-hover:rotate-45 transition-all duration-300"
                />
              </div>
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
