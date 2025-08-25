import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "secondary";
}

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default: "bg-black/80 text-white dark:bg-white/80 dark:text-black supports-[backdrop-filter]:bg-black/60 dark:supports-[backdrop-filter]:bg-white/60",
    success: "bg-emerald-500/80 text-white supports-[backdrop-filter]:bg-emerald-500/70",
    warning: "bg-amber-500/85 text-black supports-[backdrop-filter]:bg-amber-500/70",
    secondary: "bg-black/10 text-black dark:bg-white/20 dark:text-white supports-[backdrop-filter]:bg-black/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

