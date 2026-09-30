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
  jobDescription: string[];
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
      {
        id: 7,
        title: "Geek Garden - E-commerce v1",
        srcImage: "/projects/joinGeek.png",
      },
      {
        id: 8,
        title: "Geek Garden - E-commerce v2",
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
        jobDescription: [
          "Sliced UI/UX designs into code using HTML, CSS, and JavaScript",
          "Integrated RESTful APIs from the backend into the interface for dynamic data display",
          "Implemented modular and reusable frontend components to improve maintainability",
          "Ensured a responsive, user-friendly layout across devices",
          "Collaborated closely with Backend Developer and UI/UX Designer teams in an agile workflow",
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
        jobDescription: [
          "Redesigned GeekGarden's job portal website to be more modern, responsive, and user-friendly",
          "Implemented the new interface using Vue.js based on the agreed UI/UX design",
          "Coordinated with the backend team to ensure smooth feature and API integration",
          "Handled bug fixing and tested the interface across various devices for consistent user experience",
          "Contributed to team-based development using Git workflow and agile methods",
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
        jobDescription: [
          "Developed an advanced HRIS version with additional features according to client requirements",
          "Fixed bugs based on client reports to improve system stability",
          "Ensured the UI stayed consistent, responsive, and user-friendly after each update",
          "Provided post-deployment technical support to maintain application performance",
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
        jobDescription: [
          "Built and developed web-based user interfaces with Vue and Nuxt",
          "Integrated UI components with backend APIs to display data in real time",
          "Collaborated in a small team focusing on dashboard, report, attendance, and data management features",
          "Optimized frontend performance so the system stayed responsive and user-friendly",
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
        jobDescription: [
          "Developed a procurement module to digitize the goods/services procurement process",
          "Built an approval workflow (submission, verification, approval) for a transparent process",
          "Created vendor management pages and procurement status tracking",
          "Coordinated with the backend team for transaction data integration and reporting",
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
        jobDescription: [
          "Developed web-based ERP modules supporting core organizational business processes",
          "Built interactive interfaces for inventory, finance, and human resource management",
          "Optimized cross-module integration so data across divisions stayed synced and real-time",
          "Collaborated with the backend team in implementing APIs for transactions and reports",
          "Ensured interface quality through testing and bug fixing before deployment",
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
      {
        id: 7,
        title: "Geek Garden - E-commerce v1",
        imgSrc: "/projects/joinGeek.png",
        description:
          "Geek Garden's E-commerce v1 is a web-based e-commerce platform built end-to-end with Laravel, Livewire, and Vue. It handles product catalog, shopping cart, checkout, and order management while providing an interactive storefront for customers and an admin side for managing products and transactions.",
        keyFeatures: [
          "Product catalog with categories, search, and detail pages",
          "Shopping cart and checkout flow",
          "Order management and transaction records",
          "Admin dashboard for product and inventory management",
          "Interactive storefront UI built with Vue components",
        ],
        jobDescription: [
          "Developed the e-commerce v1 platform end-to-end as a fullstack developer",
          "Built the backend using Laravel with Livewire for dynamic server-driven UI",
          "Implemented interactive frontend components with Vue",
          "Integrated product, cart, checkout, and order modules",
          "Performed testing and bug fixing before deployment",
        ],
        stack: ["laravel", "livewire", "vue"],
        projectInfo: {
          status: "Done",
          timeline: "Augst 2025 - Nov 2025",
          role: "Fullstack Developer",
        },
        link: {
          demo: "",
          github: "",
        },
      },
      {
        id: 8,
        title: "Geek Garden - E-commerce v2",
        imgSrc: "/projects/joinGeek.png",
        description:
          "Geek Garden's E-commerce v2 is the next-generation e-commerce platform with its backend rebuilt as a Go-based service. It provides fast, scalable APIs supporting product, cart, checkout, and order flows while keeping data consistent across services.",
        keyFeatures: [
          "Go-based backend service for e-commerce APIs",
          "Product, cart, checkout, and order API flows",
          "Transaction handling with consistent data management",
          "Scalable architecture for high-traffic requests",
          "Collaboration with frontend team on API contracts and integration",
        ],
        jobDescription: [
          "Built the e-commerce v2 backend service with Go",
          "Designed and implemented REST APIs for core e-commerce flows",
          "Handled transactions, order processing, and data consistency",
          "Optimized API performance for scalability",
          "Collaborated with the frontend team on API integration and testing",
        ],
        stack: ["go"],
        projectInfo: {
          status: "Done",
          timeline: "Augst 2025 - Nov 2025",
          role: "Back End developer",
        },
        link: {
          demo: "",
          github: "",
        },
      },
    ];
  }
}