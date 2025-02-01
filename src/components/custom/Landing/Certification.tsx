import ShinyButton from "../../magicui/shiny-button";
import { Learner } from "../../index";
import Batch from "../Batch";
import Button from "../Button";
import { certificationBadges } from "../../../constants/index";

const Certification = () => {
  return (
    <div className="container mx-auto  mt-16 lg:mt-32 flex lg:flex-row items-center lg:items-center justify-center lg:gap-8 gap-0  flex-col-reverse">
      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 py-10 px-4 space-y-8">
        <Batch classname="bg-blue-primary my-4 p-2 px-4 rounded-full hidden lg:flex items-center justify-around gap-2 w-max">
          <img src="/social/linkedin.svg" alt="linkedin" />
          <p className="text-white tracking-wide">Shareable on LinkedIn</p>
        </Batch>
        <h1 className="text-2xl lg:text-5xl font-bold text-center lg:text-left">
          Get <i className="text-green-primary">Certified</i> With Every Completion
        </h1>
        <p className="text-sm lg:text-xl text-black-100 my-4 font-normal leading-relaxed lg:text-start text-center">
          Earn industry-recognized certificates after completing each workshop, demonstrating your expertise, dedication, and readiness for the professional world. Each certification adds value to your resume and sets you apart in today’s competitive job market.
        </p>
        <Learner text="have successfully skilled-up and have been officially certified" num={1532} role="Learners" textcolor="text-black-100"/>
        {/* Certification Badges */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:justify-start gap-4 my-4">
          {certificationBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <img src={badge.icon} alt={badge.icon} className="w-6 h-6" />
              <p className="text-green-three font-semibold text-sm">{badge.label}</p>
            </div>
          ))}
        </div>
        {/* Buttons Section */}
        <div className="flex items-center justify-center lg:justify-start gap-4">
          <Button text="Enroll Now" classname="py-3 px-8 w-full lg:w-auto" />
          <ShinyButton className="border rounded-md py-3 w-full lg:w-auto flex justify-center">
            <span className="text-xs text-black font-semibold text-nowrap">
              Get Free Career Evaluation
            </span>
          </ShinyButton>
        </div>
      </div>

      {/* Image Section & Mobile Batch on Top for Small Screens */}
      <div className="w-full flex flex-col lg:flex-col lg:w-1/2 items-center justify-center">
        <Batch classname="bg-blue-primary m-4 p-2 mx-auto px-4 rounded-full lg:hidden flex items-center justify-around gap-2 w-max">
          <img src="/social/linkedin.svg" alt="linkedin" />
          <p className="text-white tracking-wide">Shareable on LinkedIn</p>
        </Batch>

        <div className="w-full flex items-center justify-center">
          <img
            src="/icons/certification.png"
            alt="certification"
            className="w-full max-w-[380px] lg:max-w-[580px] lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;
