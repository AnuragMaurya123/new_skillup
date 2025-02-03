import NumberTicker from "../magicui/number-ticker";

interface IProp {
  tag?: string;
  number?: number;
  sign?: string;
  para: string;
  img: string;
  id: number;
  title?: string;
}

const ExperienceCard = ({ img, number, para, sign, tag, id }: IProp) => {
  return (
    <div
      className={`min-w-[286px] min-h-[335px] border-none pl-4 pr-4 h-[335px] lg:w-[286px] lg:h-[335px] sm:w-[206px] sm:h-[242px] overflow-hidden rounded-lg border flex flex-col justify-start items-start ${
        id === 2
          ? "bg-green-light text-green-primary"
          : "bg-green-primary text-white"
      }`}>
      <div className="flex-grow scale-up transition-all flex flex-col justify-between">
        {/* Top Section */}
        <div>
          <h3 className="font-base text-sm sm:text-md mt-3">{tag}</h3>
          <h1 className="my-2 lg:my-4 text-2xl sm:text-3xl lg:text-5xl font-bold">
            {number && (
              <NumberTicker
                value={number}
                className={`${
                  id === 2
                    ? "bg-green-light text-green-primary"
                    : "bg-green-primary text-white"
                }`}
              />
            )}
            {sign}
          </h1>
          <p className="md:line-clamp-4 mb-4 text-sm md:text-base">{para}</p>
        </div>

        {/* Image Section */}
        <img src={img} alt="experience" className="w-full max-h-[200px] object-cover rounded-xl" />
      </div>
    </div>
  );
};


export default ExperienceCard;
