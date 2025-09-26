import Menu from "@/config/data/menu";

export const Sidebar = () => {
  const sidebar = Menu.sidebar();
  return (
    <div className="w-[180px] bg-[#21252B] text-amber-50 rounded-2xl flex flex-col gap-2">
      {sidebar.map((v, k) => {
        return (
          <div key={k} className="text-center">
            {v.label}
          </div>
        );
      })}
    </div>
  );
};
