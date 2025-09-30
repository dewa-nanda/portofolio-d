"use client";

import Card from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import { FaRegFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex gap-2">
        <Link href="#">
          <Card className="bg-[#151e30] w-fit h-full px-1">
            <FaRegFilePdf className="mt-2" size={21} />
          </Card>
        </Link>

        <Card className="bg-[#151e30] w-fit p-1">
          <h1 className="text-start text-lg">Software Engineer</h1>
        </Card>
      </div>

      <Card className="bg-[#151e30] w-full h-full p-4 mt-4">
        <div className="flex gap-2 h-[200px]">
          <section className="w-full lg:w-1/2 flex justify-center flex-col gap-1">
            <h2 className="text-4xl font-semibold">
              <span className="underline">Hi, I'm Dewa</span> Putra Hernanda
            </h2>

            <p className="text-xl">
              Developer who loves building clean UI and interactive web
              experiences.
            </p>
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

      <div className="flex gap-4 flex-wrap">
        <Card className="bg-[#151e30] mt-4 w-fit p-2">
          <picture className="w-full flex justify-center items-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=dewa-nanda&show_icons=true&rank_icon=github&theme=nord&hide=issues,contribs"
              width={500}
            />
          </picture>
        </Card>

        <Card className="bg-[#151e30] mt-4 w-fit p-2">
          <picture className="w-full">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=dewa-nanda&stats_format=bytes&layout=compact&theme=nord"
              width={300}
            />
          </picture>
        </Card>
      </div>
    </motion.div>
  );
};

export default About;
