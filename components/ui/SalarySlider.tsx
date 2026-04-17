"use client";

import { cn } from "@/lib/utils";
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
  className,
}: SalarySliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {label && (
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-slate-500">{label}</label>
          <span className="text-lg font-semibold text-amber-600">
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
          className="salary-slider w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-200"
          style={{
            background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`,
          }}
        />
      </div>

      <div className="flex justify-between text-xs text-slate-400">
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
          background: #f59e0b;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), 0 0 0 3px rgba(245, 158, 11, 0.15);
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .salary-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(245, 158, 11, 0.2);
        }
        .salary-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border: none;
          border-radius: 50%;
          background: #f59e0b;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), 0 0 0 3px rgba(245, 158, 11, 0.15);
          cursor: pointer;
        }
        .salary-slider:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px white, 0 0 0 4px #f59e0b;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}

export { SalarySlider };
export type { SalarySliderProps };
