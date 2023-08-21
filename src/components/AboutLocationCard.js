"use client";
import React from "react";
import {
  CanadaImage,
  AustraliaImage,
  UnitedKingdomImage,
  BackgroundPatternSmallCircle,
} from "./svgs";
import { useRouter } from "next/navigation";
const AboutLocationCard = ({ location }) => {
  const router = useRouter();
  if (!location) return null;
  if (location === "Canada")
    return (
      <div className=" flex flex-col  items-center  justify-center  gap-[48px] lg:flex-col lg:gap-[32px]">
        <div className="relative h-[202px] w-[202px] ">
          <BackgroundPatternSmallCircle className="absolute -z-10 h-[202px]  w-[202px] object-center" />
          <CanadaImage className="z-10 h-full w-full" />
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="mb-[32px] text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136]">
            CANADA
          </h1>
          <button
            onClick={() => router.push("/locations")}
            className="h-[56px] w-[152px] rounded-[8px] bg-[#E7816B] text-center text-[16px] leading-[26px] text-white hover:bg-[#FFAD9B] hover:text-white"
          >
            SEE LOCATION
          </button>
        </div>
      </div>
    );

  if (location === "Australia")
    return (
      <div className="flex w-full flex-col  items-center  justify-center  gap-[48px] lg:flex-col lg:gap-[32px]">
        <div className="relative h-[202px] w-[202px] ">
          <BackgroundPatternSmallCircle className="absolute -z-10 h-[202px]  w-[202px] object-center" />
          <AustraliaImage className="z-10 h-full w-full" />
        </div>
        <div className="flex flex-col items-center text-center ">
          <h1 className="mb-[32px] text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136]">
            AUSTRALIA
          </h1>
          <button
            onClick={() => router.push("/locations")}
            className="h-[56px] w-[152px] rounded-[8px] bg-[#E7816B] text-center text-[16px] leading-[26px] text-white hover:bg-[#FFAD9B] hover:text-white"
          >
            SEE LOCATION
          </button>
        </div>
      </div>
    );

  if (location === "United Kingdom")
    return (
      <div className="flex flex-col    items-center  justify-center gap-[48px] lg:gap-[32px]">
        <div className="relative h-[202px] w-[202px] ">
          <BackgroundPatternSmallCircle className="absolute -z-10 h-[202px]  w-[202px] object-center" />
          <UnitedKingdomImage className="z-10 h-full w-full" />
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="mb-[32px] text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136]">
            UNITED KINGDOM
          </h1>
          <button
            onClick={() => router.push("/locations")}
            className="h-[56px] w-[152px] rounded-[8px] bg-[#E7816B] text-center text-[16px] leading-[26px] text-white hover:bg-[#FFAD9B] hover:text-white"
          >
            SEE LOCATION
          </button>
        </div>
      </div>
    );
};

export default AboutLocationCard;
