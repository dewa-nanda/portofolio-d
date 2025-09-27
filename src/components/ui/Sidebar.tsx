"use client";

import Menu from "@/config/data/menu";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { Component } from "react";

export const Sidebar = () => {
  const sidebar = Menu.sidebar();
  const pathname = usePathname();

  function isActive(path: string) {
    return path === "/" ? pathname === "/" : pathname.startsWith(path);
  }

  return (
    <div className="w-[180px] bg-slate-900/80 shadow-lg shadow-blue-900/40 h-fit text-amber-50 rounded-2xl flex flex-col gap-2 p-2">
      {sidebar.map((v, k) => {
        const Icon = v.icon.name;
        const active = isActive(v.href);

        return (
          <Link
            href={v.href}
            key={k}
            className={`hover:!no-underline justify-center flex items-center gap-2 text-center w-full p-2 rounded-lg transition ${
              active
                ? "bg-slate-800 text-blue-400 font-semibold"
                : "hover:bg-slate-800 hover:text-blue-300"
            }`}
          >
            <span className="hidden sm:block">{v.label}</span>

            <Icon size={v.icon.size} />
          </Link>
        );
      })}
    </div>
  );
};
