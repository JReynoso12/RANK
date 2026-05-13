"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/animate/count-up";
import { FloatingOrbs } from "@/components/animate/floating-orbs";
import { hero } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 700], [0, 120]);
  const bgScale = useTransform(scrollY, [0, 700], [1.08, 1.16]);
  const contentY = useSpring(
    useTransform(scrollY, [0, 700], [0, -40]),
    { stiffness: 120, damping: 30 }
  );

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36"
    >
      <motion.div
        className="absolute inset-0 -z-20"
        style={
          prefersReduced ? undefined : { y: bgY, scale: bgScale }
        }
      >
        <Image
          src={hero.backgroundImage}
          alt="Modern city skyline at twilight"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy-deep via-brand-navy-deep/85 to-brand-navy/30"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-brand-navy-deep"
      />
      <FloatingOrbs className="-z-10" />

      <div
        aria-hidden
        className="pointer-events-none hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-4 select-none"
      >
        <span className="h-16 w-px bg-gradient-to-b from-transparent via-brand-blue-soft/60 to-brand-blue-soft" />
        <span className="font-brand text-sm leading-none uppercase tracking-[0.18em] text-brand-blue-soft/80 [writing-mode:vertical-rl] rotate-180">
          RANK · ENGINEERING SERVICES
        </span>
        <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-white/35 [writing-mode:vertical-rl] rotate-180">
          {hero.established}
        </span>
        <span className="h-16 w-px bg-gradient-to-b from-brand-blue-soft via-brand-blue-soft/60 to-transparent" />
      </div>

      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10"
        style={prefersReduced ? undefined : { y: contentY }}
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
          className="max-w-3xl"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
            }}
            className="font-brand text-base sm:text-lg leading-none uppercase tracking-[0.08em] text-brand-blue-soft mb-4 sm:mb-5"
          >
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
            }}
            className="text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
          >
            {hero.titleLine1}
            <br />
            <span className="text-white/95">{hero.titleLine2}</span>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
            }}
            className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
            }}
            className="mt-8 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <Button
              href={hero.ctaHref}
              size="lg"
              className="w-full sm:w-auto justify-center"
            >
              {hero.ctaLabel}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              href="#projects"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto justify-center"
            >
              View Projects
            </Button>
          </motion.div>

          <motion.dl
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
            }}
            className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            {hero.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease },
                  },
                }}
                className="bg-brand-navy-deep/60 px-4 py-4 sm:px-5 sm:py-5"
              >
                <dt className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                  {stat.label}
                </dt>
                <dd className="mt-1.5 text-2xl sm:text-3xl font-semibold text-white">
                  <CountUp value={stat.value} />
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent"
          animate={prefersReduced ? undefined : { scaleY: [0.4, 1, 0.4] }}
          transition={
            prefersReduced
              ? undefined
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
