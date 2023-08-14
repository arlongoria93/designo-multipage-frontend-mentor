import React from "react";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { Jost } from "next/font/google";
import {
  BackgroundPatternIntroAbout,
  BackgroundPatternIntroWeb,
} from "@/components/svgs";
import HeroAbout from "@/components/HeroAbout/HeroAbout";

const jost = Jost({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});
const About = () => {
  return (
    <div className="flex flex-col items-cetner">
      <HeroAbout />
      <Image
        src="/assets/about/mobile/image-about-hero.jpg"
        alt="about hero"
        width={320}
        height={375}
        quality={100}
        className="self-center object-contain w-full p-0 md:hidden lg:hidden"
      />
      <Image
        src="/assets/about/tablet/image-about-hero.jpg"
        alt="about hero"
        width={768}
        height={375}
        quality={100}
        className="  self-center object-contain w-full p-0 hidden md:block lg:hidden"
      />

      <main
        className={`${jost.className} w-full  lg:w-[1111px] mx-auto   md:rounded-b-[15px] h-[413px] md:h-[352px]  bg-[#E7816B] flex flex-col lg:flex-row z-10 overflow-clip items-center  lg:hidden`}
      >
        <div className="relative">
          <BackgroundPatternIntroAbout className=" translate-x-[-78.5%] translate-y-[-20%] md:translate-x-[-43%] lg:translate-x-[26.5%] md:translate-y-[-29%] lg:translate-y-[-50%]  object-contain items-center  justify-center h-[584px] w-[876px]  absolute overflow-hidden " />
        </div>
        <div className="flex flex-col  gap-[24px] h-full items-center justify-center  w-[327px]  md:w-[573px] lg:w-full lg:justify-center lg:h-[350px]  z-20 md:items-center  lg:mt-0 ">
          <h1 className="text-white text-center font-medium  text-[32px] md:text-[48px] lg:w-full leading-[36px] md:leading-[48px]">
            About Us
          </h1>
          <p className="text-center   text-[15px] md:text-[16px] leading-[25px] md:leading-[26px] text-white w-[327px] md:w-[573px]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
