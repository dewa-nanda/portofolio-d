"use client";

import Menu from "@/lib/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const sidebar = Menu.sidebar();
  const pathname = usePathname();

  function isActive(path: string) {
    return path === "/" ? pathname === "/" : pathname.startsWith(path);
  }

  return (
    <div className="w-fit bg-slate-900/80 h-fit text-amber-50 rounded-2xl flex flex-row sm:flex-col gap-2 p-2">
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
            <Icon size={v.icon.size} />
          </Link>
        );
      })}
    </div>
  );
};
