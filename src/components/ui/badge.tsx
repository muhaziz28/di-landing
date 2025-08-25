import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "secondary";
}

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default: "bg-black text-white dark:bg-white dark:text-black",
    success: "bg-emerald-500/90 text-white",
    warning: "bg-amber-500/90 text-black",
    secondary: "bg-black/10 text-black dark:bg-white/20 dark:text-white",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

