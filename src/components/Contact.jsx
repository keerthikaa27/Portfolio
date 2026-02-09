import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Profile } from "../data/portfolio";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Wave/ripple animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Unique entrance: Scale from center with rotation
  const headingVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotateZ: -10,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.34, 1.56, 0.64, 1], // Bounce-like easing
        filter: { duration: 0.6 },
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Button variants with unique stagger
  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.8,
      rotateX: 45,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const contactButtons = [
    { 
      href: `mailto:${Profile.email}`, 
      icon: Mail, 
      label: "Email",
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "from-blue-600 to-cyan-600",
    },
    { 
      href: Profile.links.linkedin, 
      icon: Linkedin, 
      label: "LinkedIn",
      gradient: "from-cyan-500 to-teal-500",
      hoverGradient: "from-cyan-600 to-teal-600",
      external: true,
    },
    { 
      href: Profile.links.github, 
      icon: Github, 
      label: "GitHub",
      gradient: "from-teal-500 to-emerald-500",
      hoverGradient: "from-teal-600 to-emerald-600",
      external: true,
    },
  ];

  return (
    <section 
      id="contact" 
      className="section py-20 bg-zinc-900 text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(59, 130, 246, ${0.03 + Math.random() * 0.05}) 0%, transparent 70%)`,
              filter: 'blur(40px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Radial gradient that follows mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => 
              `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.06), transparent 80%)`
          ),
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading with unique scale + rotate entrance */}
          <motion.h2
            variants={headingVariants}
            className="text-4xl font-bold mb-10 text-brand-400 relative inline-block"
          >
            <span className="relative z-10">Contact</span>
            
            {/* Decorative underline that draws in */}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />
          </motion.h2>

          {/* Description with blur entrance */}
          <motion.p
            variants={textVariants}
            className="text-zinc-300 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
          </motion.p>

          {/* Contact buttons with 3D perspective entrance */}
          <motion.div
            variants={buttonContainerVariants}
            className="flex flex-wrap justify-center gap-4"
            style={{ perspective: 1000 }}
          >
            {contactButtons.map((button, index) => (
              <ContactButton
                key={button.label}
                button={button}
                index={index}
                variants={buttonVariants}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
          }}
        />
      </div>
    </section>
  );
}

// Separate button component for advanced interactions
function ContactButton({ button, index, variants }) {
  const buttonRef = useSpring(0, { stiffness: 300, damping: 30 });
  const scale = useTransform(buttonRef, [0, 1], [1, 1.05]);

  return (
    <motion.a
      href={button.href}
      target={button.external ? "_blank" : undefined}
      rel={button.external ? "noreferrer" : undefined}
      variants={variants}
      whileHover={{ 
        y: -8,
        scale: 1.08,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 15,
        }
      }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => buttonRef.set(1)}
      onHoverEnd={() => buttonRef.set(0)}
      style={{ scale }}
      className="group relative btn overflow-hidden"
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${button.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
        animate={{
          boxShadow: [
            '0 0 0px rgba(59, 130, 246, 0)',
            '0 0 20px rgba(59, 130, 246, 0.4)',
            '0 0 0px rgba(59, 130, 246, 0)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
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

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        <motion.span
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          <button.icon size={18} />
        </motion.span>
        <span className="font-medium">{button.label}</span>
      </span>

      {/* Particle burst effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 60],
              y: [0, (Math.random() - 0.5) * 60],
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.15,
            }}
          />
        ))}
      </motion.div>
    </motion.a>
  );
}
