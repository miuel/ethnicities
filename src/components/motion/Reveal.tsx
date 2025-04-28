
"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  cssCustom?: string
}

const Reveal: React.FC<RevealProps> = ({ children, delay, cssCustom = ""}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {   
    
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <div ref={ref} className={`overflow-hidden ${cssCustom}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.5,
          delay: delay ?? 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
