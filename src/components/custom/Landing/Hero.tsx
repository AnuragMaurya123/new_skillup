import ShinyButton from "@/components/magicui/shiny-button";
import Button from "../Button";
import Learner from "@/components/shared/Learner";
import Batch from "../Batch";

const Hero = () => {
  return (
    <div className="home w-full flex items-start justify-start">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col-reverse lg:flex-row justify-between w-full mx-auto  pt-12 pb-24">
          {/* Left Content */}
          <div className="w-full flex flex-col items-start lg:w-1/2">
            <Batch classname="p-[1.9px] rounded-full hidden lg:flex items-center justify-around gap-2 w-max bg-gradient-to-r my-4 from-dark-primary to-light-primary">
              <div className="bg-white p-2 px-4 rounded-full flex items-center justify-around gap-2">
                <p className="text-sm font-normal leading-4 text-[#05090e] tracking-wide">
                  Payments powered by
                </p>
                <img src="/social/razorpay.png" alt="linkedin" />
              </div>
            </Batch>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-nowrap leading-tight hidden lg:block">
              The <span className="text-green-tertiary ">Ultimate</span> <br />
              <span className="text-green-tertiary">Launchpad</span> For <br />
              Your <span className="text-green-tertiary">Career!</span>
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-nowrap leading-tight block lg:hidden">
            The Ultimate <br/> Launchpad for Your<br/> Career - Guaranteed<br/> Success!
            </h1>

            <p className="text-base font-normal my-4 leading-7 text-black-100">
              Where Your Future Begins: Unlock Guaranteed Career <br />
              Success With The Best Guidance
            </p>
            <Learner text="took their first step to succeed in their career " num={500} role="Learners" textcolor="text-black-100"/>
            <div className="flex items-center gap-2 my-6">
              <Button text="Enroll Now" classname="py-3 px-6 lg:px-8 lg:py-3 lg:w-[200px]  text-white" />
              <ShinyButton className="border rounded-md  lg:w-[200px]  flex justify-center">
                <span className="text-xs text-black font-semibold ">
                  Get Free Career Evaluation
                </span>
              </ShinyButton>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <img src="/icons/success.svg" alt="success" />
              <p className="lg:text-sm  text-xs font-bold text-green-two ">
                100% Money Back Guarantee if you're not satisfied with the Evaluation
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 lg:flex items-center justify-center hidden  mb-8 lg:mb-0">
            <img
              src="/icons/hero.svg"
              alt="hero"
              className="w-5/6 sm:w-4/5 md:w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
