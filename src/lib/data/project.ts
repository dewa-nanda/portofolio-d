import { IconType } from "react-icons";
import { IoLogoJavascript } from "react-icons/io";

type SingleProject = {
  title: string;
  srcImage: string;
  id: number;
};

export type DetailProject = {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  keyFeatures: string[];
  stack: string[];
  projectInfo: {
    status: string;
    timeline: string;
    role: string;
  };
  link: {
    demo: string;
    github: string;
  };
};

export default class ProjectData {
  static ListProject(): SingleProject[] {
    return [
      {
        id: 1,
        title: "Restaurant Apps",
        srcImage: "/projects/theParentings.png",
      },
      {
        id: 2,
        title: "Join Geek - Job Portal",
        srcImage: "/projects/joinGeek.png",
      },
    ];
  }

  static ListDetailProject(): DetailProject[] {
    return [
      {
        id: 1,
        title: "Restaurant App",
        imgSrc: "/projects/theParentings.png",
        description:
          "Restaurant Apps is a web application designed to help users discover restaurants. It offers a user-friendly interface with features like restaurant listing, search functionality, and detailed restaurant views. The app is fully responsive, making it accessible on both mobile and desktop devices.",
        keyFeatures: [
          "Restaurant listings with descriptions",
          "Search bar for easy discovery",
          "Detailed restaurant view",
          "Ratings and reviews system",
          "Fully responsive design",
          "Mobile-friendly interface",
        ],
        stack: ["html", "css", "javascript", "sass", "webpack"],
        projectInfo: {
          status: "Active",
          timeline: "2022",
          role: "Front end web developer",
        },
        link: {
          demo: "https://ket-restaurant.netlify.app/",
          github: "https://github.com/dewa-nanda/Restaurant-apps",
        },
      },
      {
        id: 2,
        title: "Join Geek - Job Portal",
        imgSrc: "/projects/joinGeek.png",
        description:
          "Join Geek is a modern job portal platform designed to connect job seekers with employers. It provides an intuitive interface for exploring job opportunities, applying online, and managing applications. Employers can also post vacancies and review candidates efficiently. The platform is built to be responsive, ensuring accessibility across devices.",
        keyFeatures: [
          "Job listings with detailed descriptions",
          "Advanced search and filter options",
          "Online application submission",
          "Employer dashboard for posting and managing jobs",
          "Candidate profile management",
          "Responsive and mobile-friendly design",
        ],
        stack: ["vue", "nuxt"],
        projectInfo: {
          status: "Active",
          timeline: "2024",
          role: "Full Stack Developer",
        },
        link: {
          demo: "https://join.geekgarden.id/",
          github: "",
        },
      },
    ];
  }
}
