import { capitalizeFirst, formatNumber, getDayPeriod } from "@/lib/utils/utils";
import Card from "../ui/Card";
import Dashboard from "@/lib/data/dashboard";
import ProgressFill from "../ui/ProgressFill";
import Separator from "../ui/Saparator";

const HomePage = () => {
  const experiance = Dashboard.experiance();
  const techStack = Dashboard.techStack();
  const nowLearning = Dashboard.nowLearning();

  const period = getDayPeriod();

  return (
    <div>
      <h1 className="text-amber-50 text-start text-4xl font-semibold">
        Good {capitalizeFirst(period)}{" "}
        <span className="text-[#ef4444]">Everyone!</span>{" "}
        <span className="inline-block animate-wave">👋</span>
      </h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-4 mt-12">
        {experiance.map((v, k) => (
          <Card
            key={`experiance-${k}`}
            className="bg-[#141d2f] text-center w-full h-[90px] flex justify-center items-center"
          >
            <h3 className="text-2xl text-[#ef4444] font-bold mt-2">
              {v.id === "commits" ? formatNumber(v.count) : v.count}
            </h3>
            <p className="text-sm text-slate-400 font-semibold">{v.title}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4 w-full mt-10 min-h-[190px]">
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
                  className="hover-animate bg-[#151e30] rounded-sm p-2 flex flex-col justify-center items-center gap-1 hover:cursor-pointer"
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
          {nowLearning.map((v, k) => (
            <div key={`now-learning-${k}`}>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex-shrink-0 flex flex-col justify-center py-2 space-y-1 w-full p-2">
                  <p className="text-base text-slate-200 font-bold">
                    {v.title}
                  </p>
                  <p className="text-xs text-slate-400">{v.subTitle}</p>
                </div>

                <div className="flex-1 flex items-center min-w-[120px] p-2">
                  <ProgressFill
                    showLabel
                    width={v.progress}
                    fillColor="#ef4444"
                    bgColor="#344053"
                  />
                </div>
              </div>

              <Separator className="my-4" />
            </div>
          ))}
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
