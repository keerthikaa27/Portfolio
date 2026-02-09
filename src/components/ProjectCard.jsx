import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ProjectCard({ project, index }) {
  // Determine if card should come from left or right based on index
  const isLeft = index % 2 === 0;
  
  // Mouse position tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position to rotation values
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  // Handle mouse move for 3D tilt effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Advanced entrance animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -120 : 120,
      rotateY: isLeft ? -20 : 20,
      scale: 0.85,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.19, 1, 0.22, 1], // Custom cubic-bezier for ultra-smooth easing
        opacity: { duration: 0.7 },
        x: { 
          type: "spring", 
          stiffness: 60, 
          damping: 20,
          mass: 0.8,
        },
        rotateY: { 
          duration: 1,
          ease: [0.19, 1, 0.22, 1],
        },
        scale: { 
          duration: 0.8,
          ease: [0.19, 1, 0.22, 1],
        },
        filter: { duration: 0.7 },
      },
    },
  };

  // Content stagger animations
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  // Stack items with advanced stagger
  const stackVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 10 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.04,
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
      },
    }),
  };

  // Highlights with smooth reveal
  const highlightVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.5 + i * 0.08,
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1],
      },
    }),
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-xl border border-white/10 bg-zinc-900/40 p-6 transition-colors duration-500 overflow-hidden will-change-transform"
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${isLeft ? '20%' : '80%'} 50%, rgba(20, 184, 166, 0.08) 0%, transparent 60%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(${isLeft ? '90deg' : '-90deg'}, transparent 0%, rgba(20, 184, 166, 0.15) 50%, transparent 100%)`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: isLeft ? ['0% 0%', '200% 0%'] : ['200% 0%', '0% 0%'],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glow border on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-500/20 via-transparent to-cyan-500/20 blur-xl" />
      </div>

      {/* Main content with stagger */}
      <motion.div 
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Project Header */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-2"
        >
          <motion.h3 
            className="font-display text-2xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-500"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {project.title}
          </motion.h3>
          <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-500">
            {project.period}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="mt-4 text-zinc-300 leading-relaxed group-hover:text-white transition-colors duration-500"
        >
          {project.description}
        </motion.p>

        {/* Stack */}
        {project.stack?.length > 0 && (
          <motion.ul 
            variants={itemVariants}
            className="mt-4 flex flex-wrap gap-2 text-xs"
          >
            {project.stack.map((s, i) => (
              <motion.li
                key={s}
                custom={i}
                variants={stackVariants}
                whileHover={{ 
                  scale: 1.15, 
                  y: -3,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }
                }}
                className="rounded-full border border-white/10 px-3 py-1 text-zinc-300 hover:border-teal-400/50 hover:bg-teal-400/10 hover:text-teal-300 transition-all duration-300 cursor-default"
              >
                {s}
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Highlights */}
        {project.highlights?.length > 0 && (
          <motion.ul 
            variants={itemVariants}
            className="mt-4 space-y-1 text-sm"
          >
            {project.highlights.map((h, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={highlightVariants}
                className="text-zinc-400 group-hover:text-zinc-300 flex items-start transition-colors duration-500"
              >
                <motion.span 
                  className="mr-2 text-teal-400 select-none inline-block"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  •
                </motion.span>
                <span>{h}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {project.link && (
          <motion.div variants={itemVariants}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors duration-300 group/link"
            >
              <span>View project</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(20, 184, 166, 0.12), transparent 65%)',
          filter: 'blur(20px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(6, 182, 212, 0.12), transparent 65%)',
          filter: 'blur(20px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </motion.article>
  );
}
