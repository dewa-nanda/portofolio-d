import { MdFolderShared, MdHomeFilled } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IconType } from "react-icons";

type Sidebar = {
  label: string;
  href: string;
  icon: {
    name: IconType;
    size: number;
  };
};

export default class Menu {
  static sidebar(): Sidebar[] {
    return [
      {
        label: "Home",
        href: "/",
        icon: {
          name: MdHomeFilled,
          size: 20,
        },
      },
      {
        label: "About",
        href: "/about",
        icon: {
          name: FaUser,
          size: 16,
        },
      },
      {
        label: "Project",
        href: "/project",
        icon: {
          name: MdFolderShared,
          size: 20,
        },
      },
      {
        label: "Contact",
        href: "/contact",
        icon: { name: MdEmail, size: 20 },
      },
    ];
  }
}
