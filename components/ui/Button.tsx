"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-sm shadow-blue-600/20",
  secondary:
    "bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50",
  ghost:
    "text-slate-500 hover:text-blue-600 hover:bg-blue-50",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-5 py-2 text-sm rounded-full gap-1.5",
  md: "px-7 py-3 text-base rounded-full gap-2",
  lg: "px-9 py-4 text-lg rounded-full gap-2",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center font-medium transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
