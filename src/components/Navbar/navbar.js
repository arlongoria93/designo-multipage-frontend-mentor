import React from "react";
import Image from "next/image";
import { IconHamburger } from "../svgs";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="md:w-[689px] lg:w-[1111px] mx-auto bg-white flex flex-row items-center justify-between py-[34px] px-[24px]  md:py-[64px] md:px-[0px]">
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
        <Link href="/about">
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
