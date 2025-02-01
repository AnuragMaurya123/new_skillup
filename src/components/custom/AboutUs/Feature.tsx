import { BlurFade } from "@/components/ui/blur-fade";
import { skillSetData2, skillSetData3 } from "@/constants";
import { togglePopup } from "@/feature/popupSlice";
import { useDispatch } from "react-redux";

const Feature = () => {
  const dispatch = useDispatch();

  const handleFormShow = function () {
    dispatch(togglePopup());
  };

  return (
    <div className="w-full container mx-auto p-6 grid grid-cols-1 xl:grid-cols-2 gap-8 mt-1 lg:my-28" id="feature">
  {/* Left Content */}
  <div className="pl-4 flex flex-col items-center xl:items-start">
    <h1 className="text-2xl text-center lg:text-left mx-auto lg:mx-0 lg:text-5xl font-semibold">
      Why <i className="text-green-secondary">Choose Us</i>
    </h1>
    <p className="text-center lg:text-left font-medium text-lg mt-5">
      Empowering global learners with accessible, high-quality education through an imitative platform. Connecting students with expert instructors to foster continuous personal and professional growth.
    </p>

    {/* Enroll Now Section */}
    <div className="border-l-4 border-green-primary px-3 py-2 mt-6 mb-10 flex items-center justify-center gap-2" onClick={handleFormShow}>
      <button type="button" className="text-green-primary">Enroll Now</button>
      <span className="bg-green-400 flex items-center justify-center w-6 h-6 rounded-full">
        <img src="/icons/right.svg" alt="arrow" />
      </span>
    </div>

    <img
      src="/icons/bgstrings.svg"
      alt="StringBg"
      className="w-full h-auto hidden object-cover xl:block"
    />
  </div>

  {/* Skill Cards Section */}
  <section id="photos" className="h-[700px] overflow-y-scroll no-scrollbar w-full">
  <div className="flex flex-col md:flex-row md:items-start md:justify-start gap-6 w-full">
    {/* First Column - Left Aligned */}
    <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
      {skillSetData2.map((skill, i) => (
        <BlurFade key={i} delay={0.25 + i * 0.05} inView className="">
          <div className="border border-[#aaafbb] rounded-lg p-4 flex flex-col gap-2 shadow-md">
            <h1 className="text-xl font-semibold">{skill.label1}</h1>
            <h3 className="text-3xl font-bold">{skill.label2}</h3>
            <p className="text-sm text-[#666C79]">{skill.description}</p>
          </div>
        </BlurFade>
      ))}
    </div>

    {/* Second Column - Right Aligned */}
    <div className="w-full md:w-1/2 flex flex-col items-start md:items-end gap-6">
      {skillSetData3.map((skill, i) => (
        <BlurFade key={i} delay={0.25 + i * 0.05} inView className="">
          <div className="border border-[#aaafbb] rounded-lg p-4 flex flex-col gap-2 shadow-md">
            <h1 className="text-xl font-semibold">{skill.label1}</h1>
            <h3 className="text-3xl font-bold">{skill.label2}</h3>
            <p className="text-sm text-[#666C79]">{skill.description}</p>
          </div>
        </BlurFade>
      ))}
    </div>
  </div>
</section>
</div>

  );
};

export default Feature;
