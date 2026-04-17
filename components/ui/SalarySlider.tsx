"use client";

import { formatCurrency } from "@/lib/utils";

interface SalarySliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  label?: string;
  className?: string;
}

function SalarySlider({
  value,
  onChange,
  min,
  max,
  step = 50000,
  label,
  className = "",
}: SalarySliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {label && (
        <div className="flex items-center justify-between">
          <label
            className="text-sm font-medium"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {label}
          </label>
          <span
            className="text-xl font-bold"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-display)" }}
          >
            {formatCurrency(value)}
          </span>
        </div>
      )}

      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="salary-slider w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${percentage}%, var(--color-border) ${percentage}%, var(--color-border) 100%)`,
          }}
        />
      </div>

      <div
        className="flex justify-between text-xs"
        style={{ color: "var(--color-text-muted)" }}
      >
        <span>{formatCurrency(min)}</span>
        <span>{formatCurrency(max)}</span>
      </div>

      <style jsx>{`
        .salary-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .salary-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        .salary-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border: none;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }
        .salary-slider:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--color-accent);
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}

export { SalarySlider };
export type { SalarySliderProps };
