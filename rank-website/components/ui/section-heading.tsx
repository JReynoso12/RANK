import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const headingColor = tone === "light" ? "text-white" : "text-brand-ink";
  const eyebrowColor =
    tone === "light" ? "text-brand-blue-soft" : "text-brand-blue";
  const descriptionColor =
    tone === "light" ? "text-white/65" : "text-brand-muted";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em] mb-3",
            eyebrowColor
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight",
          headingColor
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            descriptionColor
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
