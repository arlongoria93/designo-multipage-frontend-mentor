import React from "react";
import Image from "next/image";
import { Jost } from "next/font/google";
import {
  BackgroundPatternHeroHome,
  BackgroundPatternIntroWeb,
} from "@/components/svgs";

const jost = Jost({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});
const HeroAppDesign = () => {
  return (
    <main
      className={`${jost.className} md:w-[689px] lg:w-[1111px] mx-auto   md:rounded-[15px] h-[320px] md:h-[252px]  bg-[#E7816B] flex flex-col lg:flex-row z-10 overflow-clip items-center`}
    >
      <div className="relative">
        <BackgroundPatternIntroWeb className=" translate-x-[-78.5%] md:translate-x-[-43%] lg:translate-x-[26.5%] md:translate-y-[-29%] lg:translate-y-[-50%]  object-contain  h-[584px] w-[876px]  absolute overflow-hidden " />
      </div>
      <div className="flex flex-col  gap-[24px] mt-[105px] w-[327px] h-[110px] md:w-[573px] lg:w-full lg:justify-center lg:h-[350px]  z-20 md:items-center md:mt-[64px] lg:mt-0 ">
        <h1 className="text-white text-center font-medium  text-[32px] md:text-[48px] lg:w-full leading-[36px] md:leading-[48px]">
          Graphic Design
        </h1>
        <p className="text-center  text-[15px] leading-[25px] md:leading-[26px] text-white md:w-[445px] w-[327px]">
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </div>
    </main>
  );
};

export default HeroAppDesign;
