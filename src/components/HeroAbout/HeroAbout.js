import React from "react";
import Image from "next/image";
import { Jost } from "next/font/google";
import { BackgroundPatternIntroAbout } from "@/components/svgs";

const jost = Jost({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});
const HeroAbout = () => {
  return (
    <div className="hidden lg:flex flex-row-reverse h-[480px] w-[1111px] items-center justify-center mx-auto">
      <div className="relative w-[480px] h-[480px]">
        <Image
          src="/assets/about/desktop/image-about-hero.jpg"
          alt="about hero"
          fill
          quality={100}
          className="self-center object-cover object-right  p-0 hidden md:block rounded-r-[15px]"
        />
      </div>
      <main
        className={`${jost.className} flex flex-col items-center justify-center overflow-hidden h-full w-[70%] md:rounded-l-[15px]  bg-[#E7816B] `}
      >
        <div className="relative">
          <BackgroundPatternIntroAbout className=" translate-x-[-78.5%] translate-y-[-20%] md:translate-x-[-43%] lg:translate-x-[26.5%] md:translate-y-[-29%] lg:translate-y-[-50%]  object-contain items-center  justify-center h-[584px] w-[876px]  absolute overflow-hidden " />
        </div>
        <div className="flex flex-col ml-[95px]  gap-[24px] h-full items-center justify-center  w-[327px]  md:w-[573px] lg:w-[573px] lg:justify-center lg:text-start lg:h-[0px]  z-20 md:items-center  lg:mt-0 ">
          <h1 className="text-white text-center font-medium  text-[32px] md:text-[48px]  leading-[36px] md:leading-[48px] lg:text-start lg:w-[458px]">
            About Us
          </h1>
          <p className="text-center lg:text-start  text-[15px] md:text-[16px] leading-[25px] md:leading-[26px] text-white w-full  lg:h-[130px] lg:w-[458px]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HeroAbout;
