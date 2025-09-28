import Link from "next/link";
import Card from "./Card";
import Pill from "./Pill";
import ProgressFill from "./ProgressFill";

interface ProjectCardProps {
  title: string;
  status: "Planning" | "In Development" | "Done";
  statusColor?: string;
  stack?: string[];
  progress?: number;
  progressColor?: string;
  links?: {
    label: string;
    href: string;
    type?: "primary" | "secondary";
  }[];
}

const ProjectCard = ({
  title,
  status = "Planning",
  statusColor = "#ed4343",
  stack = [],
  progress = 0,
  progressColor = "#ef4444",
  links = [],
}: ProjectCardProps) => {
  return (
    <Card className="bg-[#151d30] p-2 border border-transparent rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#ef4444]">
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-semibold">{title}</h3>

          <Pill>
            <p className="text-xs" style={{ color: statusColor }}>
              {status}
            </p>
          </Pill>
        </div>

        {stack.length > 0 && (
          <div className="mt-1.5 flex gap-2 flex-wrap">
            {stack.map((tech, i) => (
              <div
                key={i}
                className="bg-[#222b3f] rounded-sm w-fit py-0.5 px-3"
              >
                <p className="text-xs text-[#b6c0cd]">{tech}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4">
        <div className="flex justify-between mb-2">
          <p className="text-[#94a3b8] text-xs">Progress</p>
          <p className="text-[#ef4444] text-xs">{progress}%</p>
        </div>
        <ProgressFill
          width={progress}
          height="10px"
          fillColor={progressColor}
        />
      </div>

      {links.length > 0 && (
        <div className="mt-6 flex gap-2">
          {links.map((link, i) => (
            <Link
              target="_blank"
              key={i}
              className={`text-sm rounded-md py-2 px-4 text-white hover:!no-underline ${
                link.type === "primary"
                  ? "bg-[#ef4444]"
                  : "bg-[#212b3e] ring-1 ring-[#323d4f]"
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
