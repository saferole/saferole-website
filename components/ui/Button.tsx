"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      children,
      style,
      ...props
    },
    ref
  ) => {
    const variantInlineStyles: Record<Variant, React.CSSProperties> = {
      primary: {
        backgroundColor: "var(--ink)",
        color: "var(--canvas)",
        border: "1.5px solid var(--ink)",
        borderRadius: "var(--radius-btn)",
        ...style,
      },
      secondary: {
        backgroundColor: "var(--white)",
        color: "var(--ink)",
        border: "1.5px solid var(--ink)",
        borderRadius: "var(--radius-btn)",
        ...style,
      },
      ghost: {
        color: "var(--text-muted)",
        backgroundColor: "transparent",
        borderRadius: "var(--radius-btn)",
        ...style,
      },
    };

    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center font-medium tracking-headline transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none cursor-pointer
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
