"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MotionDivProps = HTMLMotionProps<"div"> & { children: ReactNode };

export function MotionDiv({ children, ...props }: MotionDivProps) {
  return <motion.div {...props}>{children}</motion.div>;
}

export function MotionArticle({
  children,
  ...props
}: HTMLMotionProps<"article"> & { children: ReactNode }) {
  return <motion.article {...props}>{children}</motion.article>;
}
