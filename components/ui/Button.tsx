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
    "bg-emerald-500 text-white font-semibold hover:bg-emerald-600 shadow-sm",
  secondary:
    "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
  ghost:
    "text-gray-500 hover:text-gray-900",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-5 py-2 text-sm rounded-full gap-1.5",
  md: "px-6 py-3 text-sm rounded-full gap-2",
  lg: "px-8 py-3.5 text-base rounded-full gap-2",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center font-medium transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
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
