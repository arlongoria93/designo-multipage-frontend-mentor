import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconRightArrow } from "@/components/svgs";

const MobileCardLink = ({ name, imageUrl, alt }) => {
  return (
    <>
      <Link
        className="z-20 flex   flex-col font-medium text-white"
        href={`/${name.trim().toLowerCase().replace(" ", "-")}`}
      >
        <div className="relative flex h-[250px] w-[327px] flex-col items-center justify-center rounded-[15px] bg-[#000]">
          <Image
            src={imageUrl}
            layout="fill"
            alt={alt}
            quality={100}
            className="rounded-[15px] opacity-[0.49] "
          />

          <h1 className="z-30 mb-[11.97px] text-[28px] leading-[36px] tracking-[1.4px]">
            {name}
          </h1>
          <div className="z-30 flex flex-row items-center justify-center gap-[16px]">
            <h2 className="text-[15px] uppercase tracking-[5px] ">
              View Projects
            </h2>

            <IconRightArrow className="h-[10px] w-[7px] " />
          </div>
        </div>
      </Link>
    </>
  );
};

export default MobileCardLink;
