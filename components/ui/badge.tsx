import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "soft";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border";
  const styles = {
    default: "border-transparent bg-sky-500/15 text-sky-200",
    outline: "border-white/20 text-slate-100",
    soft: "border-transparent bg-white/5 text-slate-200",
  }[variant];

  return <div className={cn(base, styles, className)} {...props} />;
}
