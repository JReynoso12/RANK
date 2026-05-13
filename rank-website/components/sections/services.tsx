"use client";

import Image from "next/image";
import { ArrowUpRight, Building2, Construction, LandPlot } from "lucide-react";
import { motion } from "motion/react";
import { services, type ServiceCard } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/animate/tilt-card";
import {
  staggerContainer,
  staggerItem,
} from "@/components/animate/animate-in";

const iconMap: Record<ServiceCard["icon"], typeof Building2> = {
  infrastructure: Construction,
  commercial: Building2,
  urban: LandPlot,
};

export function Services() {
  return (
    <section
      id="services"
      className="relative -mt-10 sm:-mt-12 md:-mt-20 lg:-mt-28 pb-16 sm:pb-24 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid gap-5 sm:gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.title} variants={staggerItem}>
                <TiltCard
                  maxTilt={6}
                  className="h-full rounded-2xl overflow-hidden border border-white/10 bg-brand-navy/60 backdrop-blur-sm hover:border-white/20 hover:bg-brand-navy/80 transition-colors"
                >
                  <article className="flex flex-col h-full">
                    <div className="relative h-40 sm:h-44 overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
                    </div>
                    <div className="p-5 sm:p-7 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-white max-w-[14ch]">
                          {service.title}
                        </h3>
                        <motion.span
                          whileHover={{ rotate: 15, scale: 1.08 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-soft/15 text-brand-blue-soft"
                        >
                          <Icon className="size-5" />
                        </motion.span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/65 flex-1">
                        {service.body}
                      </p>
                      <div className="mt-5 sm:mt-6">
                        <Button
                          href="#projects"
                          variant="outline"
                          size="sm"
                          className="rounded-md"
                        >
                          Discover More
                          <ArrowUpRight className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
