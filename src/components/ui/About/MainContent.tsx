import Card from "@/components/ui/Card";
import Image from "next/image";
import TypingText from "../TypingText";
import { motion } from "motion/react";

const MainContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="bg-[#151e30] w-full h-full p-4 mt-4">
        <div className="flex gap-2 min-h-[200px]">
          <section className="w-full lg:w-1/2 flex justify-center flex-col gap-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold">
              <span className="underline decoration-[#ef4444]">
                Hi, I'm Dewa
              </span>{" "}
              Putra Hernanda
            </h2>

            <TypingText
              texts={[
                "Curious builder crafting clean design and seamless digital experiences.",
                "Passionate about turning ideas into clean, interactive, and user-friendly experiences.",
                "Driven to design and build seamless experiences through curiosity and clarity.",
                "I love creating intuitive, clean, and engaging digital products.",
              ]}
              speed={40}
              loop
            />
          </section>

          <section className="hidden w-1/2 lg:flex justify-center relative">
            <Image
              className="absolute -top-20 w-full max-w-[400px]
                   transition-transform duration-500
                   md:w-[400px] sm:w-[300px]"
              src="/profile.png"
              height={400}
              width={400}
              alt="about profile"
              priority
            />
          </section>
        </div>
      </Card>

      <div className="flex flex-col xl:flex-row gap-2 justify-between">
        <Card className="bg-[#151e30] mt-4 w-full xl:w-fit h-fit p-2">
          <div className="flex flex-col xl:flex-row gap-4 justify-center items-center">
            <picture className="w-fit">
              <img
                src="https://github-readme-stats.vercel.app/api?username=dewa-nanda&show_icons=true&rank_icon=github&theme=nord&hide=issues,contribs&custom_title=GitHub Stats"
                width={500}
              />
            </picture>

            <picture className="w-fit">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=dewa-nanda&stats_format=percentages&layout=compact&theme=nord"
                width={300}
              />
            </picture>
          </div>
        </Card>

        <Card className="bg-[#151e30] mt-4 w-full xl:w-fit h-fit p-2 flex flex-col justify-center items-center">
          <picture className="w-fit">
            <img
              src="https://github-readme-stats.vercel.app/api/wakatime?username=ffflabs&layout=compact&hide=other,TSconfig,Text,Image (svg),Makefile,TOML&custom_title=My Code Clock ⏱️"
              width={400}
            />
          </picture>
        </Card>
      </div>
    </motion.div>
  );
};

export default MainContent;
