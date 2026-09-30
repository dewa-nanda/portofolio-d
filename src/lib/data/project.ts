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
        title: "The Parentings",
        srcImage: "/projects/theParentings.png",
      },
      {
        id: 2,
        title: "Join Geek - Job Portal",
        srcImage: "/projects/joinGeek.png",
      },
      {
        id: 3,
        title: "Performatrix - Human Resource Information System",
        srcImage: "/projects/joinGeek.png",
      },
      {
        id: 4,
        title: "Geek Garden - Information Management System",
        srcImage: "/projects/joinGeek.png",
      },
      {
        id: 5,
        title: "Geek Garden - Procurement",
        srcImage: "/projects/joinGeek.png",
      },
      {
        id: 6,
        title: "Geek Garden - Enterprise Resource Planning",
        srcImage: "/projects/joinGeek.png",
      },
    ];
  }

  static ListDetailProject(): DetailProject[] {
    return [
      {
        id: 1,
        title: "The Parentings",
        imgSrc: "/projects/theParentings.png",
        description:
          "The Parentings is a web application developed during the Dicoding Studi Independent program. It slices UI/UX designs into clean code, integrates RESTful APIs for dynamic data, and is built with modular, maintainable frontend components across multiple devices.",
        keyFeatures: [
          "UI/UX design slicing into clean HTML, CSS, and JavaScript code",
          "RESTful API integration for dynamic data rendering",
          "Modular and reusable frontend components",
          "Responsive and user-friendly layout across devices",
          "Agile workflow with backend developers and UI/UX designers",
        ],
        stack: ["react", "next"],
        projectInfo: {
          status: "Done",
          timeline: "Oct 2023 - Jan 2023",
          role: "Front End Web Developer",
        },
        link: {
          demo: "",
          github: "",
        },
      },
      {
        id: 2,
        title: "Join Geek - Job Portal",
        imgSrc: "/projects/joinGeek.png",
        description:
          "Join Geek is GeekGarden's job portal, redesigned to be more modern, responsive, and user-friendly. The new interface is implemented with Vue.js following the agreed UI/UX design, ensuring consistent experiences across desktop and mobile devices.",
        keyFeatures: [
          "Modern, responsive job portal redesign",
          "Vue.js implementation based on agreed UI/UX design",
          "Backend and API integration",
          "Bug fixing and cross-device testing",
          "Team-based development with Git and agile workflow",
        ],
        stack: ["vue", "nuxt"],
        projectInfo: {
          status: "Done",
          timeline: "Agu 2024 - Nov 2024",
          role: "Front End Web Developer",
        },
        link: {
          demo: "https://join.geekgarden.id/",
          github: "",
        },
      },
      {
        id: 3,
        title: "Performatrix - Human Resource Information System",
        imgSrc: "/projects/joinGeek.png",
        description:
          "Performatrix is an advanced HRIS (Human Resource Information System) continuously developed with additional features based on client needs. It focuses on bug fixes, UI consistency, and post-deployment support to keep the system stable and user-friendly.",
        keyFeatures: [
          "Advanced HRIS features developed per client requirements",
          "Bug fixing based on client reports for system stability",
          "Consistent, responsive, and user-friendly UI after updates",
          "Post-deployment technical support",
        ],
        stack: ["react", "next"],
        projectInfo: {
          status: "Active",
          timeline: "January 2025 - now",
          role: "Front End Web Developer",
        },
        link: {
          demo: "",
          github: "",
        },
      },
      {
        id: 4,
        title: "Geek Garden - Information Management System",
        imgSrc: "/projects/joinGeek.png",
        description:
          "Geek Garden's Information Management System is a web-based management platform built with Vue and Nuxt. It integrates components with backend APIs for real-time data and focuses on dashboards, reports, attendance, and overall data management.",
        keyFeatures: [
          "Web-based UI built with Vue and Nuxt",
          "UI component integration with backend APIs for real-time data",
          "Dashboard, report, attendance, and data management features",
          "Frontend performance optimization for a responsive system",
        ],
        stack: ["vue", "nuxt"],
        projectInfo: {
          status: "Done",
          timeline: "January 2025 - March 2025",
          role: "Front End Web Developer",
        },
        link: {
          demo: "",
          github: "",
        },
      },
      {
        id: 5,
        title: "Geek Garden - Procurement",
        imgSrc: "/projects/joinGeek.png",
        description:
          "Geek Garden's Procurement module digitizes the goods and services procurement process. It includes an approval workflow (submission, verification, approval), vendor management, and procurement status tracking for full transparency.",
        keyFeatures: [
          "Digital procurement module for goods and services",
          "Approval workflow: submission, verification, and approval",
          "Vendor management and procurement status tracking",
          "Backend coordination for transaction and reporting data",
        ],
        stack: ["vue", "nuxt"],
        projectInfo: {
          status: "Done",
          timeline: "March 2025 - June 2025",
          role: "Front End Web Developer",
        },
        link: {
          demo: "",
          github: "",
        },
      },
      {
        id: 6,
        title: "Geek Garden - Enterprise Resource Planning",
        imgSrc: "/projects/joinGeek.png",
        description:
          "Geek Garden's Enterprise Resource Planning is a web-based ERP supporting core organizational business processes. It delivers interactive interfaces for inventory, finance, and HR management with synchronized, real-time data across modules.",
        keyFeatures: [
          "Web-based ERP modules for core business processes",
          "Interactive UI for inventory, finance, and HR management",
          "Cross-module integration with real-time data sync",
          "Backend API collaboration for transactions and reports",
          "UI quality assurance through testing and bug fixing before deployment",
        ],
        stack: ["react", "next"],
        projectInfo: {
          status: "Done",
          timeline: "Augst 2025 - Nov 2025",
          role: "Front End Web Developer",
        },
        link: {
          demo: "",
          github: "",
        },
      },
    ];
  }
}