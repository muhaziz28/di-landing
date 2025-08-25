import * as React from "react";

type ButtonVariant = "default" | "outline" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2";
    const variants: Record<ButtonVariant, string> = {
      default: "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
      outline:
        "border border-black/10 dark:border-white/20 bg-transparent hover:bg-black/5 dark:hover:bg-white/10",
      ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/10",
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

