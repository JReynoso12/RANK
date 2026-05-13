"use client";

import Image from "next/image";
import { ArrowRight, Cog, Layers, Leaf, Target } from "lucide-react";
import { motion } from "motion/react";
import type { ComponentType, SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { AnimateIn, Stagger, StaggerItem } from "@/components/animate/animate-in";
import { about } from "@/lib/content";

const expertiseIcons: Record<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  engineering: Cog,
  strategy: Target,
  sustainable: Leaf,
  scalable: Layers,
};

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <AnimateIn>
          <div className="rounded-2xl sm:rounded-3xl bg-white text-brand-ink shadow-[0_30px_80px_-30px_rgba(2,8,30,0.6)] overflow-hidden">
            <div className="grid gap-10 lg:grid-cols-2 p-6 sm:p-10 lg:p-14">
              <div>
                <AnimateIn direction="up" delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-brand-ink">
                    {about.heading}
                  </h2>
                </AnimateIn>
                <AnimateIn direction="up" delay={0.2}>
                  <p className="mt-4 text-sm sm:text-base text-brand-muted leading-relaxed max-w-md">
                    {about.body}
                  </p>
                </AnimateIn>
                <AnimateIn direction="up" delay={0.3}>
                  <div className="mt-6 overflow-hidden rounded-xl sm:rounded-2xl group">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src={about.image}
                        alt="Modern engineering facility"
                        width={1200}
                        height={800}
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="h-56 sm:h-72 w-full object-cover"
                      />
                    </motion.div>
                  </div>
                </AnimateIn>
              </div>

              <div>
                <AnimateIn direction="up" delay={0.15}>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-brand-ink">
                    {about.expertiseHeading}
                  </h3>
                </AnimateIn>
                <Stagger className="mt-5 sm:mt-6 grid gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-7 sm:grid-cols-2">
                  {about.expertise.map((item) => {
                    const Icon = expertiseIcons[item.icon];
                    return (
                      <StaggerItem key={item.title}>
                        <div className="flex gap-3 sm:gap-4">
                          <motion.span
                            whileHover={{ rotate: -10, scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-tint text-brand-blue"
                          >
                            <Icon className="size-5" />
                          </motion.span>
                          <div className="min-w-0">
                            <h4 className="text-sm sm:text-base font-semibold text-brand-ink">
                              {item.title}
                            </h4>
                            <p className="mt-1 sm:mt-1.5 text-sm leading-relaxed text-brand-muted">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </Stagger>
                <AnimateIn direction="up" delay={0.5}>
                  <div className="mt-7 sm:mt-9">
                    <Button
                      href={about.ctaHref}
                      size="md"
                      className="w-full sm:w-auto justify-center"
                    >
                      {about.ctaLabel}
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
