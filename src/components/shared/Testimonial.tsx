import { cn } from "@/lib/utils";
import Marquee from "../magicui/marquee";
import { testimonial } from "@/constants";

export const ReviewCard = ({
  photo,
  name,
  position,
  text,
}: { name: string; photo: string; position: string; text: string }) => {
  return (
    <figure
      className={cn(
        "relative w-[289px]  cursor-pointer overflow-hidden rounded-xl p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}>
      <div className="w-full flex flex-col shadow-lg py-6 px-[18px] rounded-2xl items-center justify-center gap-4 h-full text-center">
        <img src={photo} alt="user" className="w-16 h-16 object-cover rounded-full" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-lg lg:text-2xl font-semibold text-[#646464]">{name}</h1>
          <h4 className="text-sm lg:text-lg font-medium text-[#646464]">{position}</h4>
        </div>
        <p className="text-base lg:text-lg font-light text-[#646464] text-center">{text}</p>
      </div>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-background my-10 p-4 md:p-8">
      {/* Ratings Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 shadow-md p-[18px] rounded-md mb-8 ">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <img src="/rating.png" alt="rating" key={index} className="w-5 h-5" />
          ))}
        </div>
        <h1 className="text-lg md:text-2xl font-bold text-[#868686]">5.0 Rating</h1>
      </div>

      {/* Testimonial Carousel */}
      <Marquee pauseOnHover className="[--duration:20s] w-full">
        <div className="flex gap-6">
          {testimonial.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
