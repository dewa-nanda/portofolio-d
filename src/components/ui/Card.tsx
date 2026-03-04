import React from "react";
import clsx from "clsx";

/**
 * Card component
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
type CardClassNames = {
  root?: string;
  header?: string;
  title?: string;
  body?: string;
};

type CardVariant =
  | "default"
  | "panel"
  | "summary"
  | "surface"
  | "surfaceInteractive"
  | "detail"
  | "project"
  | "muted"
  | "actionPrimary"
  | "actionSecondary";

const cardVariantClassMap: Record<CardVariant, string> = {
  default: "",
  panel: "bg-[#1d283a] border border-[#2a3647]",
  surface: "bg-[#151e30]",
  summary:
    "bg-[#141d2f] text-center w-full h-[90px] flex justify-center items-center border-1 border-[#2a3647]",
  surfaceInteractive:
    "bg-[#151e30] border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#ef4444]",
  detail: "bg-[#1b2538] border border-slate-700",
  project:
    "bg-[#151d30] border border-transparent rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#ef4444]",
  muted: "bg-[#222b3f] rounded-sm",
  actionPrimary:
    "w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-1 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30",
  actionSecondary:
    "w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-medium py-1 rounded-xl transition-all duration-300 border border-slate-600",
};

type CardProps = {
  title?: string;
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  childrenClassName?: string;
  classNames?: CardClassNames;
};

const Card = ({
  title,
  children,
  variant = "default",
  className = "",
  childrenClassName = "",
  classNames,
}: CardProps) => {
  return (
    <div
      className={clsx(
        "text-amber-50 rounded-xl",
        cardVariantClassMap[variant],
        className,
        classNames?.root,
      )}
    >
      {title && (
        <div
          className={clsx(
            "p-3 text-start border-b-2 border-b-[#2a3647]",
            classNames?.header,
          )}
        >
          <h3 className={clsx("text-xl font-semibold", classNames?.title)}>
            {title}
          </h3>
        </div>
      )}

      <div className={clsx("p-2 h-full", childrenClassName, classNames?.body)}>
        {children}
      </div>
    </div>
  );
};

export default Card;
