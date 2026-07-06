"use client";

import { motion } from "motion/react";
import type { ElementType, ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  delay?: number;
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
};

export function Reveal({ as = "div", delay = 0, children, ...props }: RevealProps) {
  const MotionTag = motion.create(as);

  return (
    <MotionTag
      initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
