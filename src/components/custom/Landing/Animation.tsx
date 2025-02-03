"use client";


import { AnimatedList } from "@/components/ui/animated-list";
import { animation } from "@/constants";
import { cn } from "@/lib/utils";


interface Item {
  image: string;
  title: string;
  position: string;
  image2: string;
}


const Notification = ({ image, title, position, image2 }: Item) => {
  return (
    <figure
      className={cn(
        "relative  min-h-fit w-full max-w-[500px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2">
      <div
          className="flex size-10 items-center justify-center rounded-2xl"
        >
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-col items-start whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-base font-semibold">{title}</span>
            <span className="text-xs text-gray-500">{position}</span>
          </figcaption>
          
        </div>
      </div>
        <div
          className="flex  items-center justify-center rounded-2xl"
        >
          <img src={image2} alt="" />
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[100px] w-full flex-col overflow-hidden rounded-lg  bg-background  overflow-y-scroll no-scrollbar",
        className,
      )}
    >
      
      <AnimatedList>
        {animation.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
