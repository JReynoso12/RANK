"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: string;
  duration?: number;
  className?: string;
};

/**
 * Animates the numeric portion of a string from 0 up to the target on view.
 * Preserves any non-numeric prefix/suffix (e.g. "+", "%", "/7").
 *
 * Examples:
 *   "10+"  -> counts 0..10 then appends "+"
 *   "100%" -> counts 0..100 then appends "%"
 *   "24/7" -> shows "24/7" verbatim (multiple numbers, not animated)
 *   "4"    -> counts 0..4
 */
export function CountUp({ value, duration = 1.4, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const isSimple = match && !/\d/.test(match[3] ?? "");

  const target = isSimple ? parseFloat(match![2]) : 0;
  const prefix = isSimple ? match![1] : "";
  const suffix = isSimple ? match![3] : "";

  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (n) => {
    const formatted =
      target % 1 === 0 ? Math.round(n).toString() : n.toFixed(1);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (!isSimple || !inView) return;
    const controls = animate(mv, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [isSimple, inView, mv, target, duration]);

  useEffect(() => {
    if (!isSimple || !inView) return;
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return () => unsub();
  }, [isSimple, inView, rounded]);

  if (!isSimple) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
