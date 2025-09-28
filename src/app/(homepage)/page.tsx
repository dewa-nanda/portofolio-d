"use client";

import HomePage from "@/components/pages/HomePage";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.clear();

    console.log(
      "%c🚀 Welcome to My Portofolio fellas 🚀",
      "color:#F7F4EA; font-size:16px; font-weight:bold;"
    );

    console.log(
      `%c
██╗  ██╗███████╗████████╗
██║ ██╔╝██╔════╝╚══██╔══╝
█████╔╝ █████╗     ██║   
██╔═██╗ ██╔══╝     ██║   
██║  ██╗███████╗   ██║   
╚═╝  ╚═╝╚══════╝   ╚═╝   
    `,
      "color:#F7F4EA; font-weight:bold; font-size:12px;"
    );

    console.log(
      "%c✨ Crafted with love by Dewa ✨",
      "color:#F7F4EA; font-size:14px; font-style:italic;"
    );
  }, []);

  return <HomePage />;
}
