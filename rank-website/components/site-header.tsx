"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { site } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300",
        scrolled || open
          ? "bg-brand-navy-deep/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 sm:h-18 items-center justify-between gap-3 py-3">
          <Link
            href="#home"
            aria-label="RANK Engineering Services home"
            className="min-w-0 shrink"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>

          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Primary"
          >
            {site.nav.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-wide transition-colors py-2",
                  idx === 0
                    ? "text-white underline underline-offset-8 decoration-2 decoration-white/70"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block shrink-0">
            <Button href={site.contactHref} size="sm" className="rounded-md">
              Contact
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex size-11 items-center justify-center rounded-md border border-white/10 text-white active:bg-white/5"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
            open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav
            className="mb-4 flex flex-col gap-1 rounded-xl border border-white/10 bg-brand-navy/70 p-2 backdrop-blur-md"
            aria-label="Mobile"
          >
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-base text-white/85 hover:bg-white/5 active:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={site.contactHref}
              size="md"
              className="mt-2 w-full rounded-md"
              onClick={() => setOpen(false)}
            >
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
