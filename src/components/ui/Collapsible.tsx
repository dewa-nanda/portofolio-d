import React, { useState, ReactNode, HTMLAttributes } from "react";

type CollapsibleProps = {
  title: ReactNode; // biasanya teks / button untuk trigger
  children: ReactNode; // konten di dalamnya
  baseClass?: HTMLAttributes<HTMLDivElement>["className"];
  triggerClass?: HTMLAttributes<HTMLButtonElement>["className"];
  defaultOpen?: boolean; // opsional: awalnya terbuka atau tidak
};

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  baseClass,
  triggerClass,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`w-full ${baseClass}`}>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between p-3 font-medium text-left hover:cursor-pointer rounded-t-lg ${triggerClass}`}
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      {/* Collapsible Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen p-3" : "max-h-0 p-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
