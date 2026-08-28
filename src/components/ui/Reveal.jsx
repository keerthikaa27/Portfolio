import { motion } from "framer-motion";

const DIRS = {
  up: { y: 36, x: 0 },
  down: { y: -36, x: 0 },
  left: { y: 0, x: 36 },
  right: { y: 0, x: -36 },
};

export default function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  amount = 0.25,
  ...props
}) {
  const Comp = motion[as] || motion.div;
  const offset = DIRS[direction] || DIRS.up;

  return (
    <Comp
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Comp>
  );
}
