import Reveal from "./ui/Reveal";

export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section bg-[#0a192f]">
      <div className="container">
        <Reveal>
          <span className="eyebrow">{sectionNumber(title)} {title}</span>
          <h2 className="section-title mt-3 mb-4 max-w-xl">{title}</h2>
          {intro && <p className="text-zinc-400 max-w-xl mb-14">{intro}</p>}
          {!intro && <div className="mb-14" />}
        </Reveal>

        {children}
      </div>
    </section>
  );
}

function sectionNumber(title) {
  const order = {
    About: "01",
    Experience: "02",
    Projects: "03",
    Skills: "04",
    Education: "05",
    Achievements: "06",
    Certifications: "07",
    Contact: "08",
  };
  return order[title] ? `${order[title]} /` : "";
}
