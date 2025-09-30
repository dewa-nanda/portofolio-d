"use client";

import { motion } from "framer-motion";
import Header from "../ui/About/Header";
import { ReactElement, useEffect, useState } from "react";
import AboutData from "@/lib/data/about";

const About = () => {
  const listSection = AboutData.content();

  const [section, setSection] = useState<string>("");
  const [content, setContent] = useState<ReactElement | null>(null);

  useEffect(() => {
    const target = listSection.find((v) => v.label === section);

    if (target) {
      const SectionComponent = target.component;
      setContent(<SectionComponent />);
    }
  }, [section]);

  useEffect(() => {
    const initalData = listSection[0];
    const SectionComponent = initalData.component;

    setSection(initalData.label);
    setContent(<SectionComponent />);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Header
        section={section}
        setSection={setSection}
        content={listSection.map((v) => v.label)}
      />

      {content}
    </motion.div>
  );
};

export default About;
