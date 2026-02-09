import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TimelineItem({ item, index }) {
  const title = item.title || item.school || item.org;
  const subtitle = item.degree || item.role; 
  const meta = item.meta;
  
  const ref = useRef(null);
  
  // Advanced parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for mouse tracking
  const springConfig = { stiffness: 150, damping: 30 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Unique reveal animation - diagonal slide with rotation and scale
  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      rotateX: -15,
      y: 40,
      x: -20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1], // Custom easing for elegant flow
        opacity: { duration: 0.6 },
        scale: { 
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        },
        rotateX: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
        filter: { duration: 0.6 },
      },
    },
  };

  // Staggered content animation
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      x: -15,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Points animation with unique entrance
  const pointsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const pointVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.95,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="relative mb-6 group"
    >
      <motion.div
        style={{ x, y }}
        className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800/50 transition-all duration-500 hover:border-zinc-700/50 overflow-hidden"
      >
        {/* Animated gradient orb background */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(25px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle shimmer line effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div 
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Top row: title + period */}
          <motion.div 
            variants={childVariants}
            className="flex items-start justify-between gap-2"
          >
            <motion.h3 
              className="font-medium text-white text-lg group-hover:text-blue-400 transition-colors duration-500"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {title}
            </motion.h3>
            <motion.span 
              className="text-xs text-zinc-400 whitespace-nowrap px-3 py-1 rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 group-hover:text-zinc-300 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item.period}
            </motion.span>
          </motion.div>

          {/* Subtitle (degree/role) */}
          {subtitle && (
            <motion.p 
              variants={childVariants}
              className="mt-2 text-sm text-zinc-300 group-hover:text-white transition-colors duration-500"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Meta (CGPA / Percentage) as animated pill box */}
          {meta && (
            <motion.div 
              variants={childVariants}
              className="mt-2"
            >
              <motion.span 
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="inline-block px-3 py-1 bg-zinc-800 text-xs text-brand-300 rounded-lg shadow-sm hover:bg-zinc-700/80 transition-colors duration-300 cursor-default border border-zinc-700/50 hover:border-blue-500/50"
              >
                {meta}
              </motion.span>
            </motion.div>
          )}

          {/* Optional bullet points (for experience) */}
          {Array.isArray(item.points) && item.points.length > 0 && (
            <motion.ul 
              variants={pointsContainerVariants}
              className="mt-3 space-y-2"
            >
              {item.points.map((p, i) => (
                <motion.li
                  key={i}
                  variants={pointVariants}
                  className="text-zinc-300/90 group-hover:text-zinc-200 flex items-start transition-colors duration-500"
                >
                  <motion.span 
                    className="mr-2 text-blue-400 select-none inline-block mt-0.5"
                    whileHover={{ scale: 1.4, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    •
                  </motion.span>
                  <span>{p}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}

          {/* Optional description/details */}
          {item.details && (
            <motion.p 
              variants={childVariants}
              className="text-sm text-zinc-300 group-hover:text-white mt-3 leading-relaxed transition-colors duration-500"
            >
              {item.details}
            </motion.p>
          )}
        </motion.div>

        {/* Bottom decorative glow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Corner accent */}
        <motion.div
          className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at bottom left, rgba(6, 182, 212, 0.1), transparent 70%)',
            filter: 'blur(20px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Floating connection line indicator (optional decorative element) */}
      <motion.div
        className="absolute -left-4 top-1/2 w-2 h-2 rounded-full bg-blue-500/50 opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
