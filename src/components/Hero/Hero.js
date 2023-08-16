import React from "react";
import Image from "next/image";
import { Jost } from "next/font/google";
import { BackgroundPatternHeroHome } from "@/components/svgs";

const jost = Jost({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});
const Hero = () => {
  return (
    <main
      className={`${jost.className} md:w-[689px] lg:w-[1111px] mx-auto border border-solid-2px  md:rounded-[15px]  h-[843px] lg:h-[640px] bg-[#E7816B] flex flex-col lg:flex-row z-10 overflow-clip`}
    >
      <div className="relative">
        <BackgroundPatternHeroHome className="self-center  md:translate-y-[19%] lg:translate-y-[-0.5%] translate-x-[-2%]  lg:translate-x-[75%]  h-[640px] w-[640px]  absolute overflow-hidden " />
      </div>
      <div className="flex flex-col  gap-[14px] mt-[80px] w-[327px] md:w-[573px] lg:w-[540px] lg:h-[350px] self-center z-20 md:items-center lg:items-start lg:justify-start lg:gap-[11px] lg:ml-[95px]">
        <h1 className="text-white text-center lg:text-start font-medium text-[32px] md:text-[48px] lg:w-[540px] leading-[36px] md:leading-[48px]">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="text-center lg:text-start text-[16px] leading-[25px] md:leading-[26px] text-white md:w-[445px]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="mt-[24px] hover:bg-[#FFAD9B] hover:text-white font-medium text-[15px] bg-white w-[152px] h-[56px] rounded-[8px] tracking-[1px] self-center lg:self-start   lg:mt-[26px]">
          LEARN MORE
        </button>
      </div>
      <div className="relative w-[625px] h-[924px] self-center -mt-[90px]  md:w-[620px] md:h-full md:-mt-[120px]  lg:mt-[100px]  lg:scale-[1.35] ">
        <Image
          quality={100}
          fill
          alt="hero phone"
          priority
          src="/assets/home/desktop/image-hero-phone.png"
          className=" asbolute object-top object-cover "
        />
      </div>
    </main>
  );
};

export default Hero;
