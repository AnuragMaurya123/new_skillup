"use client";

import { AnimatedListSmall } from "@/components/ui/animated-list-small-screen";
import { animation } from "@/constants";
import { cn } from "@/lib/utils";
import Button from "../Button";
import ShinyButton from "@/components/magicui/shiny-button";


interface Item {
  image: string;
  title: string;
  position: string;
  image2: string;
  classname:string;
}


const Notification = ({ image, title, position, image2 ,classname }: Item) => {
  return (
    <figure
      className={cn(
        "relative  min-h-fit w-full  cursor-pointer overflow-hidden  p-4 ",

        `${classname}`,
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
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


export function AnimatedListDemo2({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[430px] w-full flex-col overflow-hidden   bg-background   bg-white rounded-2xl",
        className,
      )}
    >
      <h1 className="text-[#878C97] p-4 text-base font-medium">More than 200+ experts instead us</h1>
      <AnimatedListSmall>
        {animation.map((item, idx) => (
          <Notification {...item} key={idx} classname={idx === 0 ? "" :"border-b-[1px] border-b-[#878C97]"} />
        ))}
      </AnimatedListSmall>
      <div className="flex items-center gap-2 px-4 md:py-4 w-full">
              <Button text="Enroll Now" classname="py-3 px-6 lg:px-8 lg:py-3  w-full text-white" />
              <ShinyButton className="border rounded-md  w-full flex justify-center">
                <span className="text-xs text-black font-semibold ">
                  Get Free Career Evaluation
                </span>
              </ShinyButton>
            </div>
    </div>
  );
}
