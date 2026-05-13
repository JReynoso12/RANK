"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees on each axis */
  maxTilt?: number;
  /** Lift the card off the page on hover */
  liftOnHover?: boolean;
  /** Show a subtle moving glare overlay */
  glare?: boolean;
};

export function TiltCard({
  children,
  className,
  maxTilt = 8,
  liftOnHover = true,
  glare = true,
}: TiltCardProps) {
  const prefersReduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const stiffness = 200;
  const damping = 18;
  const xSpring = useSpring(x, { stiffness, damping });
  const ySpring = useSpring(y, { stiffness, damping });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const glareX = useTransform(xSpring, [-0.5, 0.5], [20, 80]);
  const glareY = useTransform(ySpring, [-0.5, 0.5], [20, 80]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.16), transparent 55%)`;

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (prefersReduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={liftOnHover && !prefersReduced ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      style={
        prefersReduced
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1000,
              transformStyle: "preserve-3d",
            }
      }
      className={cn("group relative will-change-transform", className)}
    >
      {children}
      {glare && !prefersReduced ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
          style={{ background: glareBg }}
        />
      ) : null}
    </motion.div>
  );
}
