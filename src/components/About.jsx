import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Profile } from "../data/portfolio";
import { Download, MapPin, Mail, Phone } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  
  // Mouse tracking for interactive gradient
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Unique card reveal: Flip from back to front with depth
  const leftCardVariants = {
    hidden: {
      opacity: 0,
      rotateY: -90,
      x: -100,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.23, 1, 0.32, 1],
        rotateY: {
          duration: 1,
          ease: [0.23, 1, 0.32, 1],
        },
        filter: { duration: 0.8 },
      },
    },
  };

  const rightCardVariants = {
    hidden: {
      opacity: 0,
      rotateY: 90,
      x: 100,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.2,
        rotateY: {
          duration: 1,
          ease: [0.23, 1, 0.32, 1],
        },
        filter: { duration: 0.8 },
      },
    },
  };

  // Text reveal with stagger
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  // Info items with unique pop-in effect
  const infoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const infoItemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.9,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1], // Bouncy easing
      },
    },
  };

  return (
    <section 
      id="about" 
      className="section py-20 text-white relative overflow-hidden" 
      style={{ backgroundColor: "#0a192f" }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => 
                `radial-gradient(800px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.08), transparent 60%)`
            ),
          }}
        />
        
        {/* Floating gradient orbs */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 200 + i * 50,
              height: 200 + i * 50,
              left: `${20 + i * 20}%`,
              top: `${10 + i * 20}%`,
              background: `radial-gradient(circle, rgba(${i % 2 ? '59, 130, 246' : '6, 182, 212'}, 0.04) 0%, transparent 70%)`,
              filter: 'blur(40px)',
            }}
            animate={{
              x: [0, 30 + i * 10, 0],
              y: [0, -30 - i * 10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-[2fr_1fr] gap-12 items-center relative z-10">
        
        {/* Left: Professional Summary */}
        <motion.div
          variants={leftCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ perspective: 1000, transformStyle: "preserve-3d" }}
          className="group relative"
        >
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800/50 overflow-hidden relative"
          >
            {/* Animated gradient border glow */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Spotlight effect on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
              }}
              animate={{
                y: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div 
              variants={textContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.h2 
                variants={textVariants}
                className="text-3xl font-bold text-white mb-4 relative inline-block"
              >
                About Me
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </motion.h2>

              <motion.p 
                variants={textVariants}
                className="text-zinc-300 leading-relaxed mb-6 group-hover:text-zinc-200 transition-colors duration-500"
              >
                I am a <motion.span 
                  className="font-semibold text-white"
                  whileHover={{ 
                    color: "rgb(96, 165, 250)",
                    transition: { duration: 0.3 }
                  }}
                >
                  Computer Science undergraduate at VIT AP University
                </motion.span> 
                with a strong interest in <motion.span 
                  className="text-brand-400 font-medium"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  Software Development, Full-Stack Development, and Data Analytics
                </motion.span>.  
                I enjoy building clean, scalable applications and exploring the intersection of <motion.span 
                  className="font-semibold text-white"
                  whileHover={{ 
                    color: "rgb(34, 211, 238)",
                    transition: { duration: 0.3 }
                  }}
                >
                  technology and problem-solving
                </motion.span>.  
                With hands-on experience through internships, training, and projects, I aim to deliver solutions that are both functional and impactful.  
              </motion.p>

              <motion.div variants={textVariants} className="flex gap-4">
                <DownloadButton />
              </motion.div>
            </motion.div>

            {/* Decorative corner glow */}
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.15), transparent 70%)',
                filter: 'blur(30px)',
              }}
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Right: Quick Info */}
        <motion.div
          variants={rightCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ perspective: 1000, transformStyle: "preserve-3d" }}
          className="group relative self-center"
        >
          <motion.div
            whileHover={{ y: -8, rotateZ: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800/50 overflow-hidden relative"
          >
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
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
              variants={textContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.h3 
                variants={textVariants}
                className="text-xl font-semibold text-white mb-6 relative inline-block"
              >
                Quick Info
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </motion.h3>

              <motion.div 
                variants={infoContainerVariants}
                className="space-y-4 text-zinc-300"
              >
                <InfoItem icon={MapPin} text={Profile.location} delay={0} />
                <InfoItem icon={Mail} text={Profile.email} delay={0.1} />
                <InfoItem icon={Phone} text={Profile.phone} delay={0.2} />
              </motion.div>
            </motion.div>

            {/* Corner accent */}
            <motion.div
              className="absolute top-0 left-0 w-24 h-24 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.12), transparent 70%)',
                filter: 'blur(25px)',
              }}
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Separate component for info items with hover effects
function InfoItem({ icon: Icon, text, delay }) {
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.9,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
        delay,
      },
    },
  };

  return (
    <motion.p 
      variants={itemVariants}
      className="flex items-center gap-3 group/item cursor-default"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.span
        className="text-brand-400"
        whileHover={{ 
          scale: 1.3,
          rotate: 360,
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <Icon size={18} />
      </motion.span>
      <motion.span
        className="group-hover/item:text-white transition-colors duration-300"
      >
        {text}
      </motion.span>
    </motion.p>
  );
}

// Enhanced download button component
function DownloadButton() {
  return (
    <motion.a
      href={`${import.meta.env.BASE_URL}RESUME.pdf`} 
      download="RESUME.pdf"
      whileHover={{ 
        scale: 1.05,
        y: -3,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
      className="btn flex items-center gap-2 relative overflow-hidden group/btn"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover/btn:opacity-100"
        transition={{ duration: 0.3 }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover/btn:opacity-100"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.span
        className="relative z-10"
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Download size={18} />
      </motion.span>
      <span className="relative z-10 font-medium">Download Resume</span>

      {/* Glow on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 blur-lg"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}
