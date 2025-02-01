import ShinyButton from "@/components/magicui/shiny-button";
import Batch from "../Batch";
import Learner from "@/components/shared/Learner";
import Animation from "./Animation";
import SmallScreenAnimation from "./SmallScreenAnimation";



export default function Guidance() {

    return (
   <div className=" container pl-0 pr-0 lg:p-0 xl:h-[900px] h-[1450px] lg:h-[1700px] md:h-[1550px]  bg-[#159B76] rounded-3xl flex flex-col xl:flex-row my-14 lg:my-28">
  <div className=" p-6  xl:w-1/2 white   lg:pl-16 mt-8 lg:mt-16 xl:mt-16 space-y-8 relative mx-auto ">
   <div className="flex justify-center lg:justify-start">
   <Batch classname="p-4 rounded-full flex items-center justify-around gap-2 w-max bg-[#21B38C]">
      <p className="text-base font-normal leading-4 text-white tracking-wide">
        🎉 Guidance From The Experts
      </p>
    </Batch>
   </div>
    <h3 className="text-[20px] lg:text-[44px] font-bold leading-8 lg:leading-[55px] text-[#005B42]">
      <span className="text-white">Empowering the Future with Artificial Intelligence –</span>
      where innovation meets <span className="line pb-6">possibility</span>!
    </h3>
    <p className="text-base lg:text-[20px] font-light text-white lg:text-start text-center">
      Earn industry-recognized certificates with each workshop you complete,
      showcasing your expertise and commitment to professional excellence.
    </p>
    <Learner text="delivered to the learners" num={32} role="Guidance" textcolor="text-white" />
    <ShinyButton className="rounded-md  lg:w-[250px] bg-white xl:flex justify-center hidden">
      <span className="text-base text-[#005B42] font-semibold flex justify-center items-center gap-2">
        Enroll in AI <img src="/icons/arrright2.svg" alt="arrow right" />
      </span>
    </ShinyButton>
    <div className="absolute bottom-4 left-0 w-full hidden xl:block">
      <Animation />
    </div>
  </div>

  {/* Image Section */}
  <div className="xl:w-1/2 orange flex items-center justify-center md:items-end relative mt-28 xl:mt-0 md:pt-28 ">
    {/* Background Image */}
    <img src="/girl.png" alt="Girl Image" className=" z-10 max-w-full h-auto" />

    {/* Ladel Overlay Image */}
    <img
      src="/ladel.png"
      alt="Ladel Image"
      className="absolute top-[-75px] md:bottom-0 lg:top-[-79px] xl:top-[805px] xl:left-[340px] md:left-48 transform  z-20  xl:w-auto md:w-20%"
    />
  </div>
  <div className="xl:hidden block   w-full mb-8">
  <SmallScreenAnimation/>
</div>
</div>



    )
}
