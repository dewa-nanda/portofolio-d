"use client";

import { motion } from "framer-motion";
import Header from "../ui/About/Header";
import { ReactElement, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import AboutData from "@/lib/data/about";
import { Suspense } from "react";

const AboutContent = () => {
  const listSection = AboutData.content();
  const searchParams = useSearchParams();
  const router = useRouter();

  const tabParam = searchParams.get("tab");
  const validTabs = listSection.map((v) => v.id);
  const currentSection = validTabs.includes(tabParam ?? "")
    ? tabParam!
    : listSection[0].id;

  const [content, setContent] = useState<ReactElement | null>(null);

  const setSection = (newSection: string) => {
    router.push(`/about?tab=${encodeURIComponent(newSection)}`);
  };

  useEffect(() => {
    const target = listSection.find((v) => v.id === currentSection);

    if (target) {
      const SectionComponent = target.component;
      setContent(<SectionComponent />);
    }
  }, [currentSection, listSection]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Header
        section={currentSection}
        setSection={setSection}
        content={validTabs}
      />

      {content}
    </motion.div>
  );
};

const About = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
};

export default About;
