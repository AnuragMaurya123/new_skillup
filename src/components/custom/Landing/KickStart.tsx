import { kickStartCard } from "@/constants";
import KickStartCard from "../KickStartCard";


const KickStart = () => {
  return (
    <div className="mt-10 lg:mt-28 w-full h-auto p-2">
      <div className="container mx-auto">
        {/* Title Section */}
        <h1 className="text-[20px] lg:text-4xl font-bold text-center my-3">
          Kickstart Your Career in <i className="text-green-primary">4 Steps</i>
        </h1>
        <p className="w-full text-[14px] lg:w-[89%] text-center text-black-100 mx-auto text-xl my-8">
          Our workshops are designed to deliver tangible results, helping you
          boost your career prospects and achieve your goals. Here's what our
          graduates are saying:
        </p>

        {/* Card Section */}
        <div className="w-full lg:w-[95%] mx-auto h-auto flex items-center justify-between overflow-scroll gap-8 no-scrollbar ">
        {kickStartCard.map((card) => (
          <KickStartCard
            img={card.img}
            title={card.title}
            para={card.para}
            tag={card.tag}
            key={card.tag}
            id={card.id}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default KickStart;
