import type { Metadata } from "next";
import About from "@/components/pages/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Dewa Putra Hernanda — his background, skills, and professional experience as a Front-end Web Developer.",
};

const page = () => {
  return <About />;
};

export default page;
