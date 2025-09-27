import { FaReact } from "react-icons/fa";
import { IconType } from "react-icons";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa6";
import { TbBrandNuxt } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

type Experiance = {
  id: string;
  title: string;
  count: number;
};

type TechStack = {
  title: string;
  icon: {
    name: IconType;
    size: number;
    style?: string;
  };
};

type NowLearning = {
  title: string;
  subTitle?: string;
  progress: number;
};

export default class Dashboard {
  static experiance(): Experiance[] {
    return [
      {
        id: "projects",
        title: "Projects",
        count: 5,
      },
      {
        id: "yearsExp",
        title: "Years Exp",
        count: 1.5,
      },
      {
        id: "technologies",
        title: "Technologies",
        count: 4,
      },
      {
        id: "commits",
        title: "Commits",
        count: 2243,
      },
    ];
  }

  static techStack(): TechStack[] {
    return [
      {
        title: "react",
        icon: {
          name: FaReact,
          size: 34,
          style: "text-[#00d8ff]",
        },
      },
      {
        title: "next",
        icon: {
          name: SiNextdotjs,
          size: 28,
        },
      },
      {
        title: "vue",
        icon: {
          name: FaVuejs,
          size: 34,
          style: "text-[#6fb487]",
        },
      },
      {
        title: "nuxt",
        icon: {
          name: TbBrandNuxt,
          size: 38,
          style: "text-[#6fb487]",
        },
      },
      {
        title: "typescript",
        icon: {
          name: BiLogoTypescript,
          size: 34,
          style: "text-[#377cc8]",
        },
      },
    ];
  }

  static nowLearning(): NowLearning[] {
    return [
      {
        title: "typescript",
        subTitle: "restfull api",
        progress: 60,
      },
    ];
  }
}
