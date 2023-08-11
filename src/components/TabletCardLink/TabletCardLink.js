import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconRightArrow } from "@/components/svgs";

const TabletCardLink = ({ name, imageUrl, alt }) => {
  return (
    <div className="bg-[#000] w-[689px] flex flex-col items-center rounded-[15px] h-[250px] relative justify-center">
      <Image
        src={imageUrl}
        layout="fill"
        alt={alt}
        quality={100}
        className="opacity-[0.49] rounded-[15px] "
      />
      <Link
        className="text-white font-medium   flex flex-col z-20"
        href={`/projects/${name}`}
      >
        <h1 className="leading-[48px] mb-[11.97px] tracking-[2px] text-[40px]">
          {name}
        </h1>
        <div className="flex flex-row items-center justify-center gap-[16px] ">
          <h2 className="text-[15px] tracking-[5px] uppercase ">
            View Projects
          </h2>

          <IconRightArrow className="w-[7px] h-[10px] " />
        </div>
      </Link>
    </div>
  );
};

export default TabletCardLink;
