import type { Metadata } from "next";
import Contact from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dewa Putra Hernanda. Send a message or connect via social media.",
};

const page = () => {
  return <Contact />;
};

export default page;
