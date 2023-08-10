import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconRightArrow } from "@/components/svgs";

const DesktopCardLink = ({ name, imageUrl, alt }) => {
  return (
    <Link
      className="text-white font-medium   flex flex-col z-20"
      href="/mobile/web-design"
    >
      <div className="bg-[#000] hover:bg-[#E7816B] w-[689px] lg:w-[541px] flex flex-col items-center rounded-[15px] h-[250px] lg:h-[308px] relative justify-center">
        <Image
          src={imageUrl}
          layout="fill"
          alt={alt}
          quality={100}
          className="opacity-[0.49] rounded-[15px] "
        />

        <h1 className="leading-[48px] mb-[11.97px] tracking-[2px] text-[40px] z-20">
          {name}
        </h1>
        <div className="flex flex-row items-center justify-center gap-[16px] z-20 ">
          <h2 className="text-[15px] tracking-[5px] uppercase ">
            View Projects
          </h2>

          <IconRightArrow className="w-[7px] h-[10px] " />
        </div>
      </div>
    </Link>
  );
};

export default DesktopCardLink;
