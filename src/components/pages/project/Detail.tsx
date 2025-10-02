"use client";

import Card from "@/components/ui/Card";
import Separator from "@/components/ui/Saparator";
import { DetailProject } from "@/lib/data/project";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";

const Detail = ({ detail }: { detail: DetailProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-white"
    >
      <Link href={"/project"} className="block w-fit hover:!no-underline">
        <Card className="flex items-center gap-2 bg-[#151e30] px-2 rounded-xl hover:cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#ef4444] hover:bg-[#1a253d] shadow-md">
          <div className="flex gap-1 items-center">
            <IoArrowBack />
            <span>Back</span>
          </div>
        </Card>
      </Link>

      <div className="mt-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={detail.imgSrc}
            alt="project-image"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <Card className="bg-[#1b2538] border-1 border-slate-700 p-3">
          <div>
            <h2 className="text-3xl font-bold text-white line-clamp-1">
              {detail.title}
            </h2>
            <Separator className="!w-[80px] !h-[4px] !bg-[#ef4444] rounded-2xl" />
          </div>

          <div>
            <p>{detail.description}</p>
          </div>
        </Card>

        <Card className="bg-[#1b2538] border-1 border-slate-700 p-3">
          <div className="flex gap-2">
            <Separator
              orientation="vertical"
              className="!mx-0 !w-[8px] !h-[32px] !bg-[#ef4444] rounded-2xl"
            />
            <h2 className="text-xl font-bold text-white line-clamp-1">
              Key Features
            </h2>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            {detail.keyFeatures.map((v, k) => (
              <Card
                className="bg-[#151f32] p-2 hover:cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[#ef4444] hover:bg-[#1a253d] shadow-md"
                key={`key-features-${k}`}
              >
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#d1d5db]">{v}</p>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        <Card className="bg-[#1b2538] border-1 border-slate-700 p-3">
          <div className="flex gap-2">
            <h2 className="text-xl font-bold text-white line-clamp-1">
              Tech Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {detail.stack.map((v, k) => (
              <div
                className="bg-[#151e30] rounded-lg text-sm px-4 py-1 hover:cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#ef4444] hover:bg-[#1a253d] shadow-md"
                key={`stack-${k}`}
              >
                <p>{v}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-[#1b2538] border-1 border-slate-700 p-3">
          <div className="flex gap-2">
            <h2 className="text-xl font-bold text-white line-clamp-1">
              Project Info
            </h2>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <div className="flex flex-col gap-1">
              <p className="text-[#9ca3af] text-sm">Status</p>
              <p
                className={`text-[${
                  detail.projectInfo.status === "Active"
                    ? "#4ade80"
                    : "bg-red-500"
                }] text-xs`}
              >
                {detail.projectInfo.status}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[#9ca3af] text-sm">Timeline</p>
              <p className="text-[#d1d5db] text-xs">
                {detail.projectInfo.timeline}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[#9ca3af] text-sm">Role</p>
              <p className="text-[#d1d5db] text-xs">
                {detail.projectInfo.role}
              </p>
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-4">
          {detail.link.demo && (
            <Link
              target="_blank"
              href={detail.link.demo}
              className="hover:!no-underline"
            >
              <Card className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-1 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30">
                <div className="flex items-center justify-center gap-2">
                  <TbExternalLink size={20} />
                  <p className="text-[#ffffff]">View Live Demo</p>
                </div>
              </Card>
            </Link>
          )}

          {detail.link.github && (
            <Link
              target="_blank"
              href={detail.link.github}
              className="hover:!no-underline"
            >
              <Card className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-medium py-1 rounded-xl transition-all duration-300 border border-slate-600">
                <div className="flex items-center justify-center gap-2">
                  <FaGithub size={18} />
                  <p className="text-[#ffffff]">View Source Code</p>
                </div>
              </Card>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;
