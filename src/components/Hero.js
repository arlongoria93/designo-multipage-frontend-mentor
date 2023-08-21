"use client";
import React from "react";
import Image from "next/image";
import { Jost } from "next/font/google";
import { BackgroundPatternHeroHome } from "@/components/svgs";
import { useRouter } from "next/navigation";

const jost = Jost({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});
const Hero = () => {
  const router = useRouter();
  return (
    <main
      className={`${jost.className} border-solid-2px z-10 mx-auto flex h-[843px]  flex-col  overflow-clip border bg-[#E7816B] md:w-[689px] md:rounded-[15px] lg:h-[640px] lg:w-[1111px] lg:flex-row`}
    >
      <div className="relative">
        <BackgroundPatternHeroHome className="absolute  h-[640px] w-[640px] translate-x-[-2%]  self-center  overflow-hidden md:translate-y-[19%]  lg:translate-x-[75%] lg:translate-y-[-0.5%] " />
      </div>
      <div className="z-20 mt-[80px]  flex w-[327px] flex-col gap-[14px] self-center md:w-[573px] md:items-center lg:ml-[95px] lg:h-[350px] lg:w-[540px] lg:items-start lg:justify-start lg:gap-[11px]">
        <h1 className="text-center text-[32px] font-medium leading-[36px] text-white md:text-[48px] md:leading-[48px] lg:w-[540px] lg:text-start">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="text-center text-[16px] leading-[25px] text-white md:w-[445px] md:leading-[26px] lg:text-start">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button
          onClick={() => router.push("/about")}
          className="mt-[24px] h-[56px] w-[152px] self-center rounded-[8px] bg-white text-[15px] font-medium tracking-[1px] hover:bg-[#FFAD9B] hover:text-white lg:mt-[26px]   lg:self-start"
        >
          LEARN MORE
        </button>
      </div>
      <div className="relative -mt-[90px] h-[924px] w-[625px] self-center  md:-mt-[120px] md:h-full md:w-[620px]  lg:mt-[100px]  lg:scale-[1.35] ">
        <Image
          quality={100}
          fill
          alt="hero phone"
          priority
          src="/assets/home/desktop/image-hero-phone.png"
          className=" asbolute object-cover object-top "
        />
      </div>
    </main>
  );
};

export default Hero;
