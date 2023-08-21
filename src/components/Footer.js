"use client";
import React from "react";
import Link from "next/link";
import {
  BackgroundPatternDesignPagesIntroMobile,
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconPinterest,
  IconYoutube,
} from "@/components/svgs";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className=" mt-[311px] flex h-[815px] w-full flex-col items-center bg-[#1D1C1E] md:mt-[411px] md:h-[423px]">
      <div className="absolute mt-[-189px] flex h-[379px]  w-[327px] flex-col items-center justify-center gap-[49px] overflow-hidden rounded-[15px] bg-[#E7816B] md:mt-[-280px] md:h-[350px] md:w-[690px] lg:mt-[-230px] lg:h-[292px] lg:w-[1111px] lg:flex-row lg:justify-around">
        <BackgroundPatternDesignPagesIntroMobile className="absolute z-0 h-[584px]   w-[876px] -translate-x-[260px]" />
        <div className="z-20 flex flex-col items-center justify-center gap-[6px] text-center  lg:items-start lg:text-start">
          <h1 className="w-[279px] text-[32px] font-medium leading-9 text-white md:text-[40px] md:leading-10 lg:h-[98px] lg:w-[268px] lg:leading-10">
            Let's talk about your project
          </h1>
          <p className="w-[279px] text-[15px] leading-[25px] text-white md:w-[573px] md:text-[16px] md:leading-[26px] lg:h-[78px] lg:w-[459px]">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <button
          className="z-10 h-[56px]  w-[156px] rounded-[8px] bg-white text-[15px] font-medium tracking-[1px] hover:cursor-pointer lg:hover:bg-[#FFAD9B] lg:hover:text-white"
          onClick={() => router.push("/contact")}
        >
          GET IN TOUCH
        </button>
      </div>
      <div className="mt-[253px] flex w-full flex-col items-center gap-[32px] md:mt-[150px] md:w-[690px] lg:w-[1111px]">
        <div className="flex flex-col items-center gap-[32px]   md:w-full md:flex-row md:justify-between">
          <Link href="/">
            <Image
              src="/assets/shared/desktop/logo-light.png"
              width={202}
              height={27}
              alt="logo"
            />
          </Link>
          <div className="h-[1px] w-[327px] bg-[#fff] opacity-10 md:hidden"></div>

          <div className="flex flex-col items-center gap-[32px] leading-[14px] tracking-[2px] text-white md:flex-row">
            <Link href="/about">
              <h1>OUR COMPANY</h1>
            </Link>
            <Link href="/locations">
              <h1>LOCATIONS</h1>
            </Link>
            <Link href="/contact">
              <h1>CONTACT</h1>
            </Link>
          </div>
        </div>
        <div className="mt-[40px] hidden h-[1px] w-[690px] bg-[#fff] opacity-10 md:block lg:w-[1111px]"></div>
        <div className="flex flex-col gap-[40px] md:w-[690px] md:flex-row md:justify-between  md:gap-[10px] lg:w-[1111px]">
          <div className="flex flex-col items-center leading-[26px] text-white  opacity-[0.5] md:text-[16px]">
            <h1 className="font-bold">Designo Central Office</h1>
            <h1>3886 Wellington Street</h1>
            <h1>Toronto, Ontario M9C 3J5</h1>
          </div>
          <div className="flex flex-col items-center  leading-[26px] text-white opacity-[0.5] md:w-[223px] md:items-start md:text-[16px]">
            <h1 className="font-bold">Contact Us (Central Office)</h1>
            <h1>P : +1 253-863-8967</h1>
            <h1>M : contact@designo.co</h1>
          </div>

          <div className=" flex w-full flex-row items-center justify-center gap-[24px] md:w-[223px] md:items-end">
            <IconFacebook className="h-[24px] w-[24px] cursor-pointer fill-[#E7816B] hover:fill-[#FFAD9B]" />
            <IconYoutube className="h-[24px] w-[24px] cursor-pointer fill-[#E7816B] hover:fill-[#FFAD9B]" />
            <IconTwitter className="h-[24px] w-[24px] cursor-pointer fill-[#E7816B] hover:fill-[#FFAD9B]" />
            <IconPinterest className="h-[24px] w-[24px] cursor-pointer fill-[#E7816B] hover:fill-[#FFAD9B]" />
            <IconInstagram className="h-[24px] w-[24px] cursor-pointer fill-[#E7816B] hover:fill-[#FFAD9B]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
