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
      className={`${jost.className} md:w-[689px] mx-auto border border-solid-2px  md:rounded-[15px]  h-[843px] bg-[#E7816B] flex flex-col z-10 overflow-clip`}
    >
      <div className="relative">
        <BackgroundPatternHeroHome className="self-center translate-y-[16%] md:translate-y-[19%] translate-x-[-2%] md:translate-x-[26%]  h-[640px] w-[640px]  absolute overflow-hidden " />
      </div>
      <div className="flex flex-col gap-[14px] mt-[80px] w-[327px] md:w-[573px] self-center z-20 md:items-center">
        <h1 className="text-white text-center font-medium text-[32px] md:text-[48px] leading-[36px] md:leading-[48px]">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="text-center text-[16px] leading-[25px] md:leading-[26px] text-white md:w-[445px]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="mt-[24px] font-medium text-[15px] bg-white w-[152px] h-[56px] rounded-[8px] tracking-[1px] self-center">
          LEARN MORE
        </button>
      </div>
      <div className="relative w-[625px] h-[924px] self-center -mt-[90px]  md:w-[620px] md:h-full md:-mt-[120px]">
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
