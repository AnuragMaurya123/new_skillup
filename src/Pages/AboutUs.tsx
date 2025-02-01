import Experience from "@/components/custom/AboutUs/Experience";
import { BreadcrumbWithCustomSeparator } from "../components/shared/BreadScrum";
import Hero from "@/components/custom/AboutUs/Hero";
import Mission from "@/components/custom/AboutUs/Mission";
import Feature from "@/components/custom/AboutUs/Feature";
import Team from "@/components/custom/AboutUs/Team";
import { Stripe } from "@/components";
import Testimonial from "@/components/shared/Testimonial";

const aboutBreadScrum = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
    active: true,
  },
];
const AboutUs = () => {

  

  return (
    <div className="w-full">
      <Stripe />
      <div className="w-[90%] mx-auto p-3 my-5">
        <BreadcrumbWithCustomSeparator links={aboutBreadScrum} />
      </div>
      <Hero />
      <Mission />
      <Testimonial/>
      <Team />
      <Feature />
      <Experience />
  
    </div>
  );
};

export default AboutUs;
