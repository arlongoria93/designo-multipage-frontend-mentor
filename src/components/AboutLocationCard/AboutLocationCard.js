import React from "react";
import {
  CanadaImage,
  AustraliaImage,
  UnitedKingdomImage,
  BackgroundPatternSmallCircle,
} from "../svgs";

const AboutLocationCard = ({ location }) => {
  if (!location) return null;
  if (location === "Canada")
    return (
      <div className=" flex flex-col  lg:flex-col  justify-center  items-center gap-[48px] lg:gap-[32px]">
        <div className="relative w-[202px] h-[202px] ">
          <BackgroundPatternSmallCircle className="-z-10 w-[202px] h-[202px]  absolute object-center" />
          <CanadaImage className="w-full h-full z-10" />
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] mb-[32px]">
            CANADA
          </h1>
          <button className="text-[16px] leading-[26px] text-center rounded-[8px] w-[152px] h-[56px] bg-[#E7816B] text-white">
            SEE LOCATION
          </button>
        </div>
      </div>
    );

  if (location === "Australia")
    return (
      <div className="flex flex-col w-full  lg:flex-col  justify-center  items-center gap-[48px] lg:gap-[32px]">
        <div className="relative w-[202px] h-[202px] ">
          <BackgroundPatternSmallCircle className="-z-10 w-[202px] h-[202px]  absolute object-center" />
          <AustraliaImage className="w-full h-full z-10" />
        </div>
        <div className="flex flex-col items-center text-center ">
          <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] mb-[32px]">
            AUSTRALIA
          </h1>
          <button className="text-[16px] leading-[26px] text-center rounded-[8px] w-[152px] h-[56px] bg-[#E7816B] text-white">
            SEE LOCATION
          </button>
        </div>
      </div>
    );

  if (location === "United Kingdom")
    return (
      <div className="flex flex-col    justify-center  items-center gap-[48px] lg:gap-[32px]">
        <div className="relative w-[202px] h-[202px] ">
          <BackgroundPatternSmallCircle className="-z-10 w-[202px] h-[202px]  absolute object-center" />
          <UnitedKingdomImage className="w-full h-full z-10" />
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] mb-[32px]">
            UNITED KINGDOM
          </h1>
          <button className="text-[16px] leading-[26px] text-center rounded-[8px] w-[152px] h-[56px] bg-[#E7816B] text-white">
            SEE LOCATION
          </button>
        </div>
      </div>
    );
};

export default AboutLocationCard;
