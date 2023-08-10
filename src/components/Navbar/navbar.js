import React from "react";
import Image from "next/image";
import { IconHamburger } from "../svgs";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className=" h-[96px] lg:w-[1111px] mx-auto bg-white flex flex-row items-center justify-between pr-[24px] pl-[24px] pt-[35px] pb-[34px] lg:mb-[20px] lg:mt-[20px]">
      <Link href="/">
        <Image
          src="/assets/shared/desktop/logo-dark.png"
          width={202}
          height={27}
          alt="logo"
          className="hover:cursor-pointer"
        />
      </Link>
      <div className="flex flex-row items-center gap-[42px]">
        <Link href="/company">
          <h1 className="hidden md:block text-[14px] leading-[14px] tracking-[2px] hover:cursor-pointer hover:underline">
            OUR COMPANY
          </h1>
        </Link>
        <Link href="/locations">
          <h1 className="hidden md:block text-[14px] leading-[14px] tracking-[2px] hover:cursor-pointer hover:underline">
            LOCATIONS
          </h1>
        </Link>
        <Link href="/contact">
          <h1 className="hidden md:block text-[14px] leading-[14px] tracking-[2px] hover:cursor-pointer hover:underline">
            CONTACT
          </h1>
        </Link>
      </div>
      <IconHamburger className="w-[24px] h-[20px] md:hidden" />
    </div>
  );
};

export default Navbar;
