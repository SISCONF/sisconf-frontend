"use client";

import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimationContainerProps {
  children: ReactNode;
  index?: number;
}

export function AnimationContainer({
  children,
  index = 0,
}: AnimationContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px 0px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
