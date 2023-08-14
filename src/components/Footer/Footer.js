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

const Footer = () => {
  return (
    <div className=" mt-[311px] flex flex-col items-center w-full bg-[#1D1C1E] h-[815px] md:h-[423px]">
      <div className="mt-[-189px] md:mt-[-280px] gap-[49px]  bg-[#E7816B] h-[379px] md:h-[350px] w-[327px] md:w-[690px] lg:w-[1111px] items-center justify-center rounded-[15px] flex flex-col lg:flex-row lg:justify-around overflow-hidden absolute">
        <BackgroundPatternDesignPagesIntroMobile className="w-[876px] -translate-x-[260px] h-[584px]   absolute z-0" />
        <div className="flex flex-col text-center lg:text-start items-center lg:items-start justify-center  gap-[6px] z-20">
          <h1 className="text-[32px] w-[279px] md:text-[40px] font-medium leading-9 md:leading-10 text-white lg:w-[268px] lg:h-[98px] lg:leading-10">
            Let's talk about your project
          </h1>
          <p className="text-white leading-[25px] text-[15px] md:text-[16px] md:leading-[26px] w-[279px] md:w-[573px] lg:w-[459px] lg:h-[78px]">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <button className="w-[156px] hover:cursor-pointer  h-[56px] rounded-[8px] bg-white text-[15px] font-medium tracking-[1px] lg:hover:bg-[#FFAD9B] lg:hover:text-white z-10">
          GET IN TOUCH
        </button>
      </div>
      <div className="mt-[253px] md:mt-[150px] md:w-[690px] lg:w-[1111px] flex flex-col w-full items-center gap-[32px]">
        <div className="flex flex-col md:w-full items-center   md:justify-between gap-[32px] md:flex-row">
          <Link href="/">
            <Image
              src="/assets/shared/desktop/logo-light.png"
              width={202}
              height={27}
              alt="logo"
            />
          </Link>
          <div className="w-[327px] h-[1px] bg-[#fff] md:hidden opacity-10"></div>

          <div className="flex flex-col md:flex-row items-center gap-[32px] text-white leading-[14px] tracking-[2px]">
            <Link href="/company">
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
        <div className="hidden md:block w-[690px] lg:w-[1111px] h-[1px] bg-[#fff] opacity-10 mt-[40px]"></div>
        <div className="flex flex-col md:flex-row md:w-[690px] lg:w-[1111px] md:justify-between  gap-[40px] md:gap-[10px]">
          <div className="flex flex-col items-center md:text-[16px] leading-[26px]  text-white opacity-[0.5]">
            <h1 className="font-bold">Designo Central Office</h1>
            <h1>3886 Wellington Street</h1>
            <h1>Toronto, Ontario M9C 3J5</h1>
          </div>
          <div className="flex flex-col md:text-[16px]  items-center md:items-start md:w-[223px] leading-[26px] text-white opacity-[0.5]">
            <h1 className="font-bold">Contact Us (Central Office)</h1>
            <h1>P : +1 253-863-8967</h1>
            <h1>M : contact@designo.co</h1>
          </div>

          <div className=" md:w-[223px] w-full flex flex-row justify-center items-center md:items-end gap-[24px]">
            <IconFacebook className="w-[24px] h-[24px] fill-[#E7816B] hover:fill-[#FFAD9B] cursor-pointer" />
            <IconYoutube className="w-[24px] h-[24px] fill-[#E7816B] hover:fill-[#FFAD9B] cursor-pointer" />
            <IconTwitter className="w-[24px] h-[24px] fill-[#E7816B] hover:fill-[#FFAD9B] cursor-pointer" />
            <IconPinterest className="w-[24px] h-[24px] fill-[#E7816B] hover:fill-[#FFAD9B] cursor-pointer" />
            <IconInstagram className="w-[24px] h-[24px] fill-[#E7816B] hover:fill-[#FFAD9B] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
