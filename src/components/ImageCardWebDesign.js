import React from "react";
import Image from "next/image";

const ImageCardWebDesign = ({ imageUrl, alt, body }) => {
  return (
    <div className="mt-11 flex h-[478px] w-[327px] flex-col items-center justify-center rounded-[15px]  bg-[#FDF3F0] md:h-[310px] md:w-[689px] md:flex-row lg:h-[478px] lg:w-[339px] lg:flex-col">
      <div className="relative h-[310px] w-[339px]">
        <Image
          src={imageUrl}
          quality={100}
          fill
          alt={alt}
          className="translate-y-[-15%] rounded-t-[15px] object-cover md:translate-x-[-13.4%] md:translate-y-0 md:rounded-l-2xl md:rounded-r-none md:object-contain lg:translate-x-0 lg:translate-y-[-15%] lg:rounded-l-none lg:rounded-t-[15px] lg:object-cover"
        />
      </div>
      <div className="align-center flex h-auto w-[262px] flex-col justify-center gap-4 text-center">
        <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#E7816B]">
          {alt.toUpperCase()}
        </h1>
        <p className="text-[16px] leading-[26px] text-[#333136]">{body}</p>
      </div>
    </div>
  );
};

export default ImageCardWebDesign;
