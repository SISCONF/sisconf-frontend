"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimationContainerProps {
  children: ReactNode;
}

export function AnimationContainer({ children }: AnimationContainerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <motion.div
      initial={false}
      animate={isMounted ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
