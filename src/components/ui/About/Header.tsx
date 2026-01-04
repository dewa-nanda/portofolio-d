import Link from "next/link";
import Card from "../Card";
import { FaRegFilePdf } from "react-icons/fa";
import { TbSwitchHorizontal } from "react-icons/tb";

interface THeaderProps {
  section: string;
  content: string[];
  setSection: (section: string) => void;
}

const Header = (props: THeaderProps) => {
  function onClickSection() {
    const index = props.content.findIndex((v) => v === props.section);

    if (index === -1) {
      return;
    }

    const target = [
      ...props.content.slice(index + 1),
      ...props.content.slice(0, index),
    ];

    if (target.length !== 0) {
      props.setSection(target[0]);
    }
  }

  return (
    <div className="flex justify-between gap-2">
      <div className="flex gap-2">
        <Link
          href="https://drive.google.com/file/d/1mZIRUEVDJWAas45gmHtcGb_FS4Y3j17k/view?usp=sharing"
          target="_blank"
        >
          <Card className="bg-[#151e30] w-fit h-full px-1 border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#ef4444]">
            <div className="flex justify-center items-center h-full">
              <FaRegFilePdf size={21} />
            </div>
          </Card>
        </Link>

        <Card className="bg-[#151e30] w-fit p-1 px-2">
          <h1 className="text-start text-lg line-clamp-1">
            Software Developer
          </h1>
        </Card>
      </div>

      <button className="z-1" onClick={onClickSection}>
        <Card className="bg-[#151e30] h-[50px] px-1 border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#ef4444] hover:cursor-pointer">
          <div className="flex items-center justify-center mt-1 gap-2">
            <TbSwitchHorizontal className="h-full" size={20} />

            <h2 className="hidden md:block">{props.section}</h2>
          </div>
        </Card>
      </button>
    </div>
  );
};

export default Header;
