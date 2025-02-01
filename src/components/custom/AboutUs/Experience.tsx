import { aboutUsExperienceCard } from "@/constants";
import ExperienceCard from "../ExperienceCard";

const Experience = () => {
  return (
    <div className="mt-10 lg:mt-28 w-full">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-3">
            Experience The <i className="text-green-primary">Statistical</i> Power
            Of Skillup
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-black-100 w-full lg:w-[89%] mx-auto my-8">
            Our workshops are designed to deliver tangible results, helping you
            boost your career prospects and achieve your goals. Here's what our
            graduates are saying:
          </p>
        </div>

        {/* Experience Cards Section using Grid */}
        <div className="w-full lg:w-[85%] mx-auto h-auto flex items-center justify-center overflow-scroll gap-12 no-scrollbar ">
          {aboutUsExperienceCard.map((card) => (
            <ExperienceCard
              key={card.id}
              title={card.title}
              img={card.img}
              number={card.number}
              para={card.para}
              sign={card.sign}
              tag={card.tag}
              id={card.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
