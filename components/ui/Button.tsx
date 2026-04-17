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
    "font-semibold text-white hover:opacity-90",
  secondary:
    "font-semibold hover:opacity-80",
  ghost:
    "hover:opacity-80",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-6 py-3 text-sm rounded-lg gap-2",
  lg: "px-7 py-3.5 text-base rounded-lg gap-2",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, style, ...props }, ref) => {
    const variantInlineStyles: Record<Variant, React.CSSProperties> = {
      primary: {
        backgroundColor: "var(--color-accent)",
        ...style,
      },
      secondary: {
        border: "2px solid var(--color-border-strong)",
        color: "var(--color-text)",
        backgroundColor: "transparent",
        ...style,
      },
      ghost: {
        color: "var(--color-text-muted)",
        backgroundColor: "transparent",
        ...style,
      },
    };

    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center font-medium transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none cursor-pointer
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        style={variantInlineStyles[variant]}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
