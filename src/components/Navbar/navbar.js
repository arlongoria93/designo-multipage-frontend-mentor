import React from "react";
import Image from "next/image";
import { IconHamburger } from "../svgs";
const Navbar = () => {
  return (
    <div className=" h-[96px] lg:w-[1111px] mx-auto bg-white flex flex-row items-center justify-between pr-[24px] pl-[24px] pt-[35px] pb-[34px] lg:mb-[20px] lg:mt-[20px]">
      <Image
        src="/assets/shared/desktop/logo-dark.png"
        width={202}
        height={27}
        alt="logo"
      />
      <div className="flex flex-row items-center gap-[42px]">
        <h1 className="hidden md:block text-[14px] leading-[14px] tracking-[2px]">
          OUR COMPANY
        </h1>
        <h1 className="hidden md:block text-[14px] leading-[14px] tracking-[2px]">
          LOCATIONS
        </h1>
        <h1 className="hidden md:block text-[14px] leading-[14px] tracking-[2px]">
          CONTACT
        </h1>
      </div>
      <IconHamburger className="w-[24px] h-[20px] md:hidden" />
    </div>
  );
};

export default Navbar;
