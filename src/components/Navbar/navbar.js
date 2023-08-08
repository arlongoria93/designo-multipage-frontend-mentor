import React from "react";
import Image from "next/image";
import { IconHamburger } from "../svgs";
const Navbar = () => {
  return (
    <div className="w-[375px] h-[96px] bg-white flex flex-row items-center justify-between pr-[24px] pl-[24px] pt-[35px] pb-[34px]">
      <Image
        src="/assets/shared/desktop/logo-dark.png"
        width={202}
        height={27}
        alt="logo"
      />
      <IconHamburger className="w-[24px] h-[20px]" />
    </div>
  );
};

export default Navbar;
