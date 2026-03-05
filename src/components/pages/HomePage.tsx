import { motion } from "framer-motion";
import { formatNumber } from "@/lib/utils/utils";
import useDashboard from "@/hooks/useDashboard";
import Card from "../ui/Card";
import ProgressFill from "../ui/ProgressFill";
import ProjectCard from "../ui/ProjectCard";
import Greetings from "../ui/home/Greetings";

const HomePage = () => {
  const { summary, activity } = useDashboard();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Greetings />

      <section className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-4 mt-12">
        {summary.experiances.map((experience, key) => (
          <Card key={`experiance-${key}`} variant="summary">
            <h3 className="text-2xl text-[#ef4444] font-bold mt-2">
              {experience.id === "commits"
                ? formatNumber(experience.count)
                : experience.count}
            </h3>

            <p className="text-sm text-slate-400 font-semibold">
              {experience.title}
            </p>
          </Card>
        ))}
      </section>

      <section className="grid grid-cols-12 gap-4 w-full mt-10 min-h-[190px]">
        <Card
          variant="panel"
          className="col-span-full md:col-span-8"
          title="Skills"
        >
          <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-4 p-4">
            {summary.techStacks.map((techStack, key) => {
              const Icon = techStack.icon.name;
              return (
                <div
                  key={key}
                  className="hover-animate bg-[#151e30] rounded-sm p-2 flex flex-col justify-center items-center gap-1 hover:cursor-pointer"
                >
                  <Icon
                    size={techStack.icon.size}
                    className={`${techStack.icon.style}`}
                  />
                  <p>{techStack.title}</p>
                </div>
              );
            })}
          </div>
        </Card>

        <Card
          variant="panel"
          className="col-span-full md:col-span-4"
          title="Now Learning"
        >
          <div>
            {activity.learning && (
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex-shrink-0 flex flex-col justify-center py-2 space-y-1 w-full p-2">
                  <p className="text-base text-slate-200 font-bold">
                    {activity.learning.title}
                  </p>
                  <p className="text-xs text-slate-400">
                    {activity.learning.subTitle}
                  </p>
                </div>

                <div className="flex-1 flex items-center min-w-[120px] p-2">
                  <ProgressFill
                    showLabel
                    width={activity.learning.progress}
                    fillColor="#ef4444"
                    bgColor="#344053"
                  />
                </div>
              </div>
            )}
          </div>
        </Card>
      </section>

      <section>
        <Card
          variant="panel"
          className="w-full mt-6 min-h-[190px]"
          title="Current Projects"
        >
          <div className="p-4 flex flex-col gap-4">
            {summary.project.map((v, k) => (
              <ProjectCard
                key={`project-${k}`}
                title={v.title}
                status={v.status}
                progress={v.progress}
                stack={v.stack}
                links={v.links}
              />
            ))}
          </div>
        </Card>
      </section>
    </motion.div>
  );
};

export default HomePage;
