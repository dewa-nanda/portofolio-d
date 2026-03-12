import type { Metadata } from "next";
import Project from "@/components/pages/project/Project";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of projects built by Dewa Putra Hernanda using modern web technologies like React, Next.js, Vue, and Nuxt.js.",
};

const page = () => {
  return <Project />;
};

export default page;
