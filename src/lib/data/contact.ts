import { IconType } from "react-icons";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

type PersonalContact = {
  label: string;
  value: string;
};

type SocialMedia = {
  title: string;
  icon: {
    name: IconType;
    size: number;
    style?: string;
  };
  link: string;
};

export default class ContactData {
  static personalContact(): PersonalContact[] {
    return [
      {
        label: "Email:",
        value: "dewananda124@gmail.com",
      },
      {
        label: "Phone:",
        value: "+6281-326-805-627",
      },
    ];
  }

  static socialMedia(): SocialMedia[] {
    return [
      {
        title: "Instagram",
        icon: {
          name: BsInstagram,
          size: 20,
        },
        link: "https://www.instagram.com/dewa_ndn/",
      },
      {
        title: "Github",
        icon: {
          name: FaGithub,
          size: 20,
        },
        link: "https://github.com/dewa-nanda",
      },
      {
        title: "Linkedin",
        icon: {
          name: IoLogoLinkedin,
          size: 20,
        },
        link: "https://www.linkedin.com/in/dewa-putra-hernanda/",
      },
    ];
  }
}
