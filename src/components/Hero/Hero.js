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
      className={`${jost.className} md:w-[689px]  h-[843px] bg-[#E7816B] flex flex-col z-10 overflow-clip`}
    >
      <div className="relative">
        <BackgroundPatternHeroHome className="self-center mt-[102px] h-[640px] w-[640px] absolute overflow-hidden" />
      </div>
      <div className="flex flex-col gap-[14px] mt-[80px] w-[327px] self-center z-20">
        <h1 className="text-white text-center font-medium text-[32px] leading-[36px]">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="text-center text-[15px] leading-[25px] text-white">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="mt-[24px] font-medium text-[15px] bg-white w-[152px] h-[56px] rounded-[8px] tracking-[1px] self-center">
          LEARN MORE
        </button>
      </div>
      <div className="relative w-[625px] h-[700px] self-center -mt-[90px] ">
        <Image
          quality={100}
          fill
          alt="hero phone"
          priority
          src="/assets/home/desktop/image-hero-phone.png"
          className=" asbolute object-top object-cover"
        />
      </div>
    </main>
  );
};

export default Hero;
