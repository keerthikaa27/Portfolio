import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.6 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    if (!mq.matches) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      setIsPointer(!!e.target.closest("a, button, [role='button'], input, textarea"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Core dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none h-1.5 w-1.5 rounded-full bg-brand-300"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: isPointer ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-brand-300/70"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isPointer ? 52 : 28,
          height: isPointer ? 52 : 28,
          opacity: isPointer ? 1 : 0.6,
          backgroundColor: isPointer ? "rgba(227, 205, 160, 0.12)" : "rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
    </>
  );
}
