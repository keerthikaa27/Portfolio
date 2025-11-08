export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="py-20 bg-[#0a192f] px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center mb-6">
          <span className="text-accent font-mono text-lg mr-2">
            {sectionNumber(title)}
          </span>
          {title}
          <span className="ml-4 h-[1px] w-40 bg-zinc-700"></span>
        </h2>

        {/* Intro Paragraph */}
        {intro && <p className="text-zinc-400 mb-8">{intro}</p>}

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
}

function sectionNumber(title) {
  const order = {
    About: "01.",
    Experience: "02.",
    Projects: "03.",
    Skills: "04.",
    Education: "05.",
    Achievements: "06.",
    Contact: "07.",
  };
  return order[title] || "";
}

