import { MarqueeTwo } from "../shared/MarqueeTwo";

const PromotionCompany = () => {
  return (
    <div className="p-4 my-12 lg:my-24">
  <h1 className="text-base lg:text-2xl leading-7 font-semibold text-center mt-6 lg:mt-10">
    Partnered with 1000+ companies worldwide Including
  </h1>
  <div className="mt-6 lg:mt-8">
    <MarqueeTwo />
  </div>
</div>

  );
};

export default PromotionCompany;
