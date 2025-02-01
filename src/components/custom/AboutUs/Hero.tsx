import Learner from "@/components/shared/Learner";
import Button from "../Button";
import ShinyButton from "@/components/magicui/shiny-button";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16 flex flex-col items-center">
      <h1 className="text-center w-full lg:w-4/5 text-4xl lg:text-6xl font-semibold mb-5">
        <p>Unlock Your Potential</p>
        and Achieve Your Knowledge to Succeed in <i className="text-green-primary">Your Career</i>
      </h1>

      <div className="w-full lg:w-max my-5">
        <Learner
          text="took their first step to succeed in their career"
          num={500}
          role="Learners"
          textcolor="text-black-100"
        />
      </div>

      <div className="flex items-center justify-center gap-4 my-4 w-full lg:w-auto">
        <Button text="Enroll Now" classname="py-3 px-8 lg:py-3 " />
        <ShinyButton className="border rounded-md py-3">
          <span className="text-xs md:text-base text-nowrap text-black font-semibold py-1">
            Get Free Career Evaluation
          </span>
        </ShinyButton>
      </div>

      <div className="flex items-start justify-center my-6 w-[85%] text-center space-x-3">
        <img src="/icons/success.svg" alt="success" className="w-6 h-6 lg:w-8 lg:h-8" />
        <p className="text-xs lg:text-sm lg:font-medium">
          100% Money Back Guarantee if you're not satisfied with the Evaluation
        </p>
      </div>
    </div>
  );
};

export default Hero;