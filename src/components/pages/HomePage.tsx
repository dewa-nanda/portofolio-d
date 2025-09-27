import { capitalizeFirst, getDayPeriod } from "@/lib/utils/utils";
import Card from "../ui/Card";
import Dashboard from "@/lib/data/dashboard";

const HomePage = () => {
  const techStack = Dashboard.techStack();

  const period = getDayPeriod();

  return (
    <div>
      <h1 className="text-amber-50 text-start text-4xl font-semibold">
        Good {capitalizeFirst(period)}{" "}
        <span className="text-[#ef4444]">Everyone!</span>{" "}
        <span className="inline-block animate-wave">👋</span>
      </h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-4 mt-4">
        <Card className="bg-[#141d2f] text-center w-full">
          <h3 className="text-2xl text-[#ef4444] font-bold">13</h3>
          <p className="text-sm text-slate-400 font-semibold">Projects</p>
        </Card>

        <Card className="bg-[#141d2f]  text-center w-full">
          <h3 className="text-2xl text-[#ef4444] font-bold">23</h3>
          <p className="text-sm text-slate-400 font-semibold">Years Exp</p>
        </Card>

        <Card className="bg-[#141d2f]  text-center w-full">
          <h3 className="text-2xl text-[#ef4444] font-bold">23</h3>
          <p className="text-sm text-slate-400 font-semibold">Technologies</p>
        </Card>

        <Card className="bg-[#141d2f]  text-center w-full">
          <h3 className="text-2xl text-[#ef4444] font-bold">23</h3>
          <p className="text-sm text-slate-400 font-semibold">Commits</p>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-4 w-full mt-6 min-h-[190px]">
        <Card
          className="col-span-full md:col-span-8 bg-[#1d283a]"
          title="💻 Tech Stack"
        >
          <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-4 p-4">
            {techStack.map((v, k) => {
              const Icon = v.icon.name;

              return (
                <div
                  key={k}
                  className="bg-[#151e30] rounded-sm p-2 flex flex-col justify-center items-center gap-1"
                >
                  <Icon size={v.icon.size} className={`${v.icon.style}`} />
                  <p>{v.title}</p>
                </div>
              );
            })}
          </div>
        </Card>

        <Card
          className="col-span-full md:col-span-4 bg-[#1d283a]"
          title="📚 Now Learning"
        >
          <h1>halo</h1>
        </Card>
      </div>

      <Card
        className="w-full mt-6 min-h-[190px] bg-[#1d283a]"
        title="🚀 Current Projects"
      >
        <h1>halo</h1>
      </Card>
    </div>
  );
};

export default HomePage;
