"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Card from "../../ui/Card";
import ProjectData from "@/lib/data/project";
import Link from "next/link";

const Project = () => {
  const listPorject = ProjectData.ListProject();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div>
        <Card className="bg-[#151e30] w-fit px-2">
          <h1 className="text-start text-lg line-clamp-1">Projects</h1>
        </Card>
      </div>

      <div className="mt-8 flex gap-4 flex-wrap">
        {listPorject.map((v, k) => (
          <Link href={`/project/${v.id}`} key={`project-${k}`}>
            <Card
              className="bg-[#151e30] w-fit hover:cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#ef4444] h-full"
              childrenClassName="!p-3"
            >
              <div className="flex flex-col gap-3">
                <Image
                  src={v.srcImage}
                  alt="project-image"
                  width={300}
                  height={300}
                  className="h-[145px] rounded-md"
                />

                <h2>{v.title}</h2>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
