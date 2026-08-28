import { Profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-[#0a192f]">
      <div className="container text-sm text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} {Profile.name}. Built using React & Tailwind.
        </p>
        <a className="t-link" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
