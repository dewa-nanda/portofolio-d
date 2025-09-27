import React from "react";
import clsx from "clsx";

type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  className,
}) => {
  return (
    <div
      className={clsx(
        "bg-slate-700",
        orientation === "horizontal" ? "h-px w-full my-2" : "w-px h-full mx-2",
        className
      )}
    />
  );
};

export default Separator;
