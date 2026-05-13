"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type Orb = {
  size: number;
  top: string;
  left: string;
  color: string;
  delay: number;
  duration: number;
};

const orbs: Orb[] = [
  {
    size: 320,
    top: "10%",
    left: "8%",
    color: "rgba(59, 107, 255, 0.35)",
    delay: 0,
    duration: 16,
  },
  {
    size: 260,
    top: "55%",
    left: "60%",
    color: "rgba(30, 72, 199, 0.30)",
    delay: 2,
    duration: 18,
  },
  {
    size: 180,
    top: "30%",
    left: "85%",
    color: "rgba(99, 156, 255, 0.22)",
    delay: 4,
    duration: 14,
  },
];

export function FloatingOrbs({ className }: { className?: string }) {
  const prefersReduced = useReducedMotion();

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            prefersReduced
              ? { opacity: 0.6, scale: 1 }
              : {
                  opacity: [0.45, 0.7, 0.45],
                  scale: [1, 1.08, 1],
                  x: [0, 20, -10, 0],
                  y: [0, -15, 10, 0],
                }
          }
          transition={
            prefersReduced
              ? { duration: 0.4 }
              : {
                  duration: orb.duration,
                  delay: orb.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{
            position: "absolute",
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
      ))}
    </div>
  );
}
