import * as React from "react";

type ButtonVariant = "default" | "outline" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 backdrop-blur-sm";
    const variants: Record<ButtonVariant, string> = {
      default: "bg-black/80 text-white hover:bg-black/90 dark:bg-white/80 dark:text-black dark:hover:bg-white/90 supports-[backdrop-filter]:bg-black/70 dark:supports-[backdrop-filter]:bg-white/70",
      outline:
        "border border-black/10 dark:border-white/20 bg-white/30 hover:bg-white/40 dark:bg-white/5 dark:hover:bg-white/10 supports-[backdrop-filter]:bg-white/20",
      ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/10 supports-[backdrop-filter]:bg-white/10",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

