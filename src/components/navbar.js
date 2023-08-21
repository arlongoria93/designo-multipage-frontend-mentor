"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IconHamburger } from "./svgs";

import Link from "next/link";
import Modal from "./modal";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div
      className={`mx-auto flex flex-row items-center justify-between bg-white px-[24px] py-[34px] md:w-[689px] md:px-[0px] md:py-[64px] lg:w-[1111px] ${
        modal ? "mb-[235px]" : "" // Adjust the top margin when modal is open
      }`}
    >
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
          <h1 className="hidden text-[14px] leading-[14px] tracking-[2px] hover:cursor-pointer hover:underline md:block">
            OUR COMPANY
          </h1>
        </Link>
        <Link href="/locations">
          <h1 className="hidden text-[14px] leading-[14px] tracking-[2px] hover:cursor-pointer hover:underline md:block">
            LOCATIONS
          </h1>
        </Link>
        <Link href="/contact">
          <h1 className="hidden text-[14px] leading-[14px] tracking-[2px] hover:cursor-pointer hover:underline md:block">
            CONTACT
          </h1>
        </Link>
      </div>
      <IconHamburger
        className="h-[20px] w-[24px] md:hidden"
        onClick={() => Toggle()}
      />
      <Modal show={modal} close={Toggle} />
    </div>
  );
};

export default Navbar;
