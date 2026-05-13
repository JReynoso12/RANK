"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "@/components/ui/logo";
import { AnimateIn, Stagger, StaggerItem } from "@/components/animate/animate-in";
import { site } from "@/lib/content";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/5 bg-brand-navy-deep py-10 sm:py-14"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 2.5rem)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Stagger className="grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-3">
          <StaggerItem>
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm text-white/60 leading-relaxed">
              {site.fullName}. Multidisciplinary engineering and construction
              for the world&rsquo;s most ambitious projects.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Mail className="size-4 mt-0.5 text-brand-blue-soft" />
                <a
                  href="mailto:rankengineeringservices@gmail.com"
                  className="hover:text-white break-all transition-colors"
                >
                  rankengineeringservices@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="size-4 mt-0.5 text-brand-blue-soft" />
                <a
                  href="tel:+639489033667"
                  className="hover:text-white transition-colors"
                >
                  0948 903 3667
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 mt-0.5 text-brand-blue-soft" />
                RANK Engineering Services
              </li>
            </ul>
          </StaggerItem>
        </Stagger>

        <AnimateIn delay={0.2}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="mt-10 sm:mt-12 h-px bg-gradient-to-r from-brand-blue-soft/60 via-white/10 to-transparent"
          />
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <p className="text-[11px] sm:text-xs text-white/40">
              &copy; {2024} {site.fullName}. All rights reserved.
            </p>
            <p className="text-[11px] sm:text-xs text-white/40 tracking-[0.18em] uppercase">
              {site.tagline}
            </p>
          </div>
        </AnimateIn>
      </div>
    </footer>
  );
}
