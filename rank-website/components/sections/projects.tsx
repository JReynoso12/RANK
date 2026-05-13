"use client";

import Image from "next/image";
import { Building2, Tag } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/animate/tilt-card";
import {
  AnimateIn,
  staggerContainer,
  staggerItem,
} from "@/components/animate/animate-in";
import { projectsSection } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[1fr_2fr] lg:items-end">
          <AnimateIn>
            <SectionHeading title={projectsSection.heading} />
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-sm sm:text-base lg:text-lg text-white/65 leading-relaxed lg:max-w-xl">
              {projectsSection.body}
            </p>
          </AnimateIn>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsSection.projects.map((project) => (
            <motion.div key={project.title} variants={staggerItem}>
              <TiltCard
                maxTilt={7}
                className="rounded-2xl overflow-hidden border border-white/10 bg-brand-navy/50 hover:border-white/20 transition-colors"
              >
                <article className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.category}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex items-end justify-between gap-3 sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-white truncate">
                        {project.title}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-[11px] sm:text-xs text-white/70">
                        <Tag className="size-3.5 shrink-0" />
                        <span className="truncate">{project.category}</span>
                      </p>
                    </div>
                    <motion.span
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm"
                    >
                      <Building2 className="size-4" />
                    </motion.span>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
