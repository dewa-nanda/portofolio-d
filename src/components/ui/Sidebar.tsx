import Menu from "@/config/data/menu";
import Link from "next/link";

export const Sidebar = () => {
  const sidebar = Menu.sidebar();
  return (
    <div className="w-[180px] bg-slate-900/80 shadow-lg shadow-blue-900/40 h-fit text-amber-50 rounded-2xl flex flex-col gap-2">
      {sidebar.map((v, k) => {
        return (
          <Link href={v.href} key={k} className="text-center p-2">
            {v.label}
          </Link>
        );
      })}
    </div>
  );
};
