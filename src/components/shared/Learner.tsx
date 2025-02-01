import { personImages } from "../../constants/index";
import NumberTicker from "../magicui/number-ticker";
interface IProp {
  text: string;
  num: number;
  role:string;
  textcolor?:string;
}
const Learner = ({text,num,role,textcolor}:IProp) => {
  
  return (
    <div className="flex gap-2 items-center flex-row lg:items-start justify-center lg:justify-start">
      <div className="relative sm:w-[12%] sm:h-6 w-[30%] lg:w-36 h-8 lg:h-auto">
        {personImages.map((person) => (
          <img
            src={person.src}
            className={person.className}
            key={person.alt}
            alt={person.alt}
          />
        ))}
      </div>
      <div className={`flex w-[60%] sm:w-[30%] flex-col items-start justify-center ${textcolor}`}>
        <h1 className="font-semibold ">
          <NumberTicker value={num} className={`${textcolor}`} />+ {role}
        </h1>
        <p className={`${textcolor} text-xs `}>
          {text}{" "}
        </p>
      </div>
    </div>
  );
};

export default Learner;
