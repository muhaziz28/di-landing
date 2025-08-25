import * as React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-white/5 ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }: CardProps) {
  return <div className={`p-4 sm:p-6 ${className}`} {...props} />;
}

export function CardTitle({ className = "", ...props }: CardProps) {
  return (
    <h3 className={`text-base sm:text-lg font-semibold tracking-tight ${className}`} {...props} />
  );
}

export function CardDescription({ className = "", ...props }: CardProps) {
  return (
    <p className={`text-sm text-black/60 dark:text-white/60 ${className}`} {...props} />
  );
}

export function CardContent({ className = "", ...props }: CardProps) {
  return <div className={`p-4 pt-0 sm:p-6 sm:pt-0 ${className}`} {...props} />;
}

export function CardFooter({ className = "", ...props }: CardProps) {
  return <div className={`p-4 sm:p-6 pt-0 flex items-center ${className}`} {...props} />;
}

