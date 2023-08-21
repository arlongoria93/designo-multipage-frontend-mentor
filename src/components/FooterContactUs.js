import React from "react";
import Link from "next/link";
import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconPinterest,
  IconYoutube,
} from "@/components/svgs";
import Image from "next/image";

const FooterContactUs = () => {
  return (
    <div className=" mt-[311px] flex  w-full flex-col items-center bg-[#1D1C1E] py-12 md:mt-[156px] ">
      <div className=" flex w-full flex-col items-center gap-[32px]  md:w-[690px] lg:w-[1111px]">
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

export default FooterContactUs;
