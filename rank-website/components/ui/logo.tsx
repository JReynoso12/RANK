import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

const sizeMap: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "size-9",
  md: "size-12",
  lg: "size-16",
};

export function Logo({
  className,
  showWordmark = true,
  tone = "light",
  size = "sm",
}: LogoProps) {
  const wordColor = tone === "light" ? "text-white" : "text-brand-ink";
  const subColor = tone === "light" ? "text-white/55" : "text-brand-muted";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full",
          sizeMap[size]
        )}
      >
        <Image
          src="/rank-logo.png"
          alt="RANK Engineering Services"
          fill
          sizes="64px"
          priority
          className="object-contain"
        />
      </div>
      {showWordmark ? (
        <div className="leading-tight">
          <span
            className={cn(
              "block font-brand text-xl leading-none tracking-[0.14em]",
              wordColor
            )}
          >
            RANK
          </span>
          <span
            className={cn(
              "block font-brand text-sm leading-none tracking-[0.12em] uppercase",
              subColor
            )}
          >
            Engineering Services
          </span>
        </div>
      ) : null}
    </div>
  );
}
