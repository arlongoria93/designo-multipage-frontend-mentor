import React from "react";
import { Jost } from "next/font/google";
import { BackgroundPatternIntroWeb } from "@/components/svgs";

const jost = Jost({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});
const HeroAppDesign = () => {
  return (
    <main
      className={`${jost.className} z-10 mx-auto flex   h-[320px] flex-col items-center  overflow-clip bg-[#E7816B] md:h-[252px] md:w-[689px] md:rounded-[15px] lg:w-[1111px] lg:flex-row`}
    >
      <div className="relative">
        <BackgroundPatternIntroWeb className=" absolute h-[584px] w-[876px] translate-x-[-78.5%] overflow-hidden  object-contain  md:translate-x-[-43%] md:translate-y-[-29%]  lg:translate-x-[26.5%] lg:translate-y-[-50%] " />
      </div>
      <div className="z-20 mt-[105px]  flex h-[110px] w-[327px] flex-col gap-[24px] md:mt-[64px] md:w-[573px] md:items-center  lg:mt-0 lg:h-[350px] lg:w-full lg:justify-center ">
        <h1 className="text-center text-[32px] font-medium  leading-[36px] text-white md:text-[48px] md:leading-[48px] lg:w-full">
          Graphic Design
        </h1>
        <p className="w-[327px]  text-center text-[15px] leading-[25px] text-white md:w-[445px] md:leading-[26px]">
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </div>
    </main>
  );
};

export default HeroAppDesign;
