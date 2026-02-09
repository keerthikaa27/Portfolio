import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="section py-20 relative overflow-hidden"
      style={{ backgroundColor: "#0a192f", color: "white" }}
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-white"
        >
          Skills
        </motion.h2>

        {/* Main grid layout - 3 column responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Technical Skills - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2 relative group"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-6 text-brand-300">Technical</h3>

                {/* Grid layout for categories */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {[
                    { title: "Languages", items: skills.ProgrammingLanguages },
                    { title: "Frameworks & Libraries", items: skills.Frameworks },
                    { title: "Web", items: skills.WebTechnologies },
                    { title: "Database", items: skills.Database },
                    { title: "Cloud", items: skills.Cloud },
                    { title: "Tools", items: skills.Tools },
                  ].map((group) => (
                    <motion.div key={group.title} variants={itemVariants}>
                      <h4 className="text-sm text-zinc-400 uppercase mb-3 font-medium tracking-wide">
                        {group.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill, i) => (
                          <motion.span
                            key={i}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="px-3 py-1 bg-zinc-800 rounded-lg text-sm cursor-default select-none hover:bg-zinc-700/80 transition-colors duration-200"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  {/* CS Fundamentals - Full width */}
                  <motion.div variants={itemVariants} className="md:col-span-2">
                    <h4 className="text-sm text-zinc-400 uppercase mb-3 font-medium tracking-wide">
                      CS Fundamentals
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.CS_Fundamentals.map((skill, i) => (
                        <motion.span
                          key={i}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="px-3 py-1 bg-zinc-800 rounded-lg text-sm cursor-default select-none hover:bg-zinc-700/80 transition-colors duration-200"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Professional Skills - Spans 1 column */}
          <div className="flex flex-col gap-6">
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-6 text-brand-300">Professional</h3>
                  
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={itemVariants}>
                      <h4 className="text-sm text-zinc-400 uppercase mb-3 font-medium tracking-wide">
                        Soft Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.Softskills.map((skill, i) => (
                          <motion.span
                            key={i}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="px-3 py-1 bg-zinc-800 rounded-lg text-sm cursor-default select-none hover:bg-zinc-700/80 transition-colors duration-200"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={itemVariants}>
                      <h4 className="text-sm text-zinc-400 uppercase mb-3 font-medium tracking-wide">
                        Languages
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.Languages.map((skill, i) => (
                          <motion.span
                            key={i}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="px-3 py-1 bg-zinc-800 rounded-lg text-sm cursor-default select-none hover:bg-zinc-700/80 transition-colors duration-200"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
