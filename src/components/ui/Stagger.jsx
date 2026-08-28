import { motion } from "framer-motion";

export const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Stagger({ children, className = "", amount = 0.15, gap = 0.15, as = "div" }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: gap } } }}
      className={className}
    >
      {children}
    </Comp>
  );
}
