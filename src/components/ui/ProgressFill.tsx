"use client";

import { useEffect, useState } from "react";

interface ProgressFillProps {
  width: number; // 1 - 100
  height?: string; // contoh: "8px", "1rem"
  bgColor?: string; // warna background bar kosong
  fillColor?: string; // warna progress
  rounded?: string; // contoh: "4px", "9999px" (full)
  showLabel?: boolean; // tampilkan persentase
  className?: string; // tambahan class Tailwind/custom
  animationDuration?: number; // ms, default 800
}

const ProgressFill: React.FC<ProgressFillProps> = ({
  width,
  height = "16px",
  bgColor = "#1f2937", // default gray-800
  fillColor = "#3b82f6", // default blue-500
  rounded = "8px",
  showLabel = false,
  className = "",
  animationDuration = 800,
}) => {
  const safeWidth = Math.min(100, Math.max(1, width));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // trigger animasi setelah mount
    const timeout = setTimeout(() => {
      setProgress(safeWidth);
    }, 50); // delay kecil biar transition jalan
    return () => clearTimeout(timeout);
  }, [safeWidth]);

  return (
    <div
      className={`w-full overflow-hidden relative group hover:cursor-pointer ${className}`}
      style={{
        backgroundColor: bgColor,
        borderRadius: rounded,
        height,
      }}
    >
      <div
        className="transition-all ease-in-out group-hover:scale-y-110 origin-center"
        style={{
          width: `${progress}%`,
          backgroundColor: fillColor,
          height: "100%",
          borderRadius: rounded,
          transitionDuration: `${animationDuration}ms`,
        }}
      />
      {showLabel && (
        <span
          className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white 
          opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
        >
          {safeWidth}%
        </span>
      )}
    </div>
  );
};

export default ProgressFill;
