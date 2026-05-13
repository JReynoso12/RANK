"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, Compass } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/animate/tilt-card";
import {
  AnimateIn,
  staggerContainer,
  staggerItem,
} from "@/components/animate/animate-in";
import { showcase } from "@/lib/content";

const stageIcons = {
  Plan: Compass,
  Outcome: CheckCircle2,
} as const;

export function Showcase() {
  return (
    <section
      id="showcase"
      className="relative py-16 sm:py-20 lg:py-28 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <AnimateIn>
          <SectionHeading
            eyebrow={showcase.eyebrow}
            title={showcase.heading}
            description={showcase.body}
          />
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <p className="mt-8 sm:mt-10 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue-soft">
            {showcase.projectTitle}
          </p>
        </AnimateIn>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-4 grid gap-5 sm:gap-6 md:grid-cols-2 items-stretch relative"
        >
          {showcase.stages.map((stage) => {
            const Icon =
              stageIcons[stage.stage as keyof typeof stageIcons] ?? Compass;
            return (
              <motion.div key={stage.stage} variants={staggerItem}>
                <TiltCard
                  maxTilt={7}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-brand-navy/50 hover:border-white/20 transition-colors"
                >
                  <article>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <Image
                          src={stage.image}
                          alt={`${showcase.projectTitle} — ${stage.label}`}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-brand-navy-deep/80 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white border border-white/10"
                      >
                        <Icon className="size-3.5 text-brand-blue-soft" />
                        {stage.stage}
                      </motion.div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {stage.label}
                      </h3>
                      <p className="mt-1.5 text-sm text-white/65 leading-relaxed">
                        {stage.caption}
                      </p>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            );
          })}

          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="pointer-events-none hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-14 items-center justify-center rounded-full bg-brand-blue text-white border border-white/10 z-10"
            style={{
              boxShadow: "0 10px 30px -10px rgba(30,72,199,0.85)",
            }}
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-brand-blue"
              animate={{ scale: [1, 1.45, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <ArrowRight className="size-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
