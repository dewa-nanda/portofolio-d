import { FaReact } from "react-icons/fa";
import { IconType } from "react-icons";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa6";
import { TbBrandNuxt } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

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

  static NowLearning(): NowLearning[] {
    return [
      {
        title: "typescript",
        subTitle: "restfull api",
        progress: 60,
      },
    ];
  }
}
