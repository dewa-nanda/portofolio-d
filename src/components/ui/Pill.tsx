// components/ui/Pill.tsx
import React from "react";
import clsx from "clsx";

type PillProps = {
  children: React.ReactNode;
  color?: "red" | "green" | "blue" | "yellow" | "gray";
  className?: string;
};

const colorMap: Record<string, string> = {
  red: "bg-[#2b2133] text-[#ed4343]",
  green: "bg-[#1e2d21] text-green-400",
  blue: "bg-[#202c3d] text-blue-400",
  yellow: "bg-[#332b21] text-yellow-400",
  gray: "bg-gray-700 text-gray-300",
};

export default function Pill({
  children,
  color = "red",
  className,
}: PillProps) {
  return (
    <div
      className={clsx(
        "w-fit py-1 px-4 rounded-full text-xs ",
        colorMap[color],
        className
      )}
    >
      {children}
    </div>
  );
}
