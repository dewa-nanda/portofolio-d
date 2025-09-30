import { motion } from "motion/react";
import Card from "../Card";
import Separator from "../Saparator";
import Collapsible from "../Collapsible";
import AboutData from "@/lib/data/about";

const ProfesionalExperianceContent = () => {
  const listProfesionalExperiance = AboutData.profesionalExperianceData();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {listProfesionalExperiance.map((experiance, kExperiance) => (
        <Card
          key={`profesional-experiance-${kExperiance}`}
          title={experiance.year}
          className="bg-[#151e30] w-full h-full p-4 mt-4"
        >
          <div className="flex flex-col gap-4">
            {experiance.job.map((job, kJob) => (
              <div key={`job-${kJob}`}>
                <Card className="bg-[#222b3f] rounded-sm  p-6">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold">{job.title}</h2>
                    <p className="text-sm font-semibold mb-1">{job.role}</p>
                    <span className="text-sm italic">{job.date}</span>
                  </div>

                  <Separator />

                  <div className="mb-4">
                    <h3>Task / Activity:</h3>
                    <div className="mt-2">
                      <ul className="flex flex-col gap-1 list-disc list-inside">
                        {job.task.map((task, kTask) => (
                          <li key={kTask}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div className="mb-4">
                    <h3>Result:</h3>

                    <div className="mt-2 flex flex-col gap-3">
                      {job.result.map((result, kResult) => (
                        <Collapsible
                          key={kResult}
                          baseClass="border rounded-md"
                          title={result.title}
                          triggerClass="hover:bg-[#151e30] hover:rounded-xl transition-all"
                        >
                          <div className="p-2">
                            <div className="border-l-2">
                              <span className="ps-2 block italic text-sm">
                                {result.date}
                              </span>
                            </div>

                            <div className="mt-4">
                              <h4>Kontribusi:</h4>
                              <ul className="flex flex-col gap-1 list-disc list-inside mt-2">
                                {result.task.map((contribute, kContribute) => (
                                  <li key={kContribute}>{contribute}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-4">
                              <h4>Stack:</h4>
                              <div className="flex gap-2 mt-2">
                                {result.stack.map((stack, kStack) => {
                                  const Icon = stack.icon.name;
                                  return (
                                    <div
                                      key={`stack-${kStack}`}
                                      className="hover-animate bg-[#151e30] rounded-sm p-2 flex flex-col justify-center items-center gap-1 hover:cursor-pointer"
                                    >
                                      <Icon
                                        size={stack.icon.size}
                                        className={stack.icon.style}
                                      />
                                      <p>{stack.title}</p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </Collapsible>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </motion.div>
  );
};

export default ProfesionalExperianceContent;
