import { MdHomeFilled } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default class Menu {
  static sidebar() {
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
        label: "Contact",
        href: "/contact",
        icon: { name: MdEmail, size: 20 },
      },
    ];
  }
}
