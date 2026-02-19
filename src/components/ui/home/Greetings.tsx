import { capitalizeFirst, getDayPeriod } from "@/lib/utils/utils";

const Greetings = () => {
  const period = getDayPeriod();

  return (
    <header>
      <h1 className="text-amber-50 text-start text-4xl font-semibold">
        Good {capitalizeFirst(period)}{" "}
        <span className="text-[#ef4444]">Everyone!</span>{" "}
        <span className="inline-block animate-wave">👋</span>
      </h1>
    </header>
  );
};

export default Greetings;
