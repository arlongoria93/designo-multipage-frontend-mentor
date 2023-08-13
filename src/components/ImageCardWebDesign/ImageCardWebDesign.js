import React from "react";
import Image from "next/image";

const ImageCardWebDesign = ({ imageUrl, alt, body }) => {
  return (
    <div className="flex mt-11 flex-col items-center justify-center bg-[#FDF3F0] h-[478px] w-[327px] rounded-[15px]">
      <div className="relative w-[327px] h-[320px]">
        <Image
          src={imageUrl}
          quality={100}
          fill
          style={{
            objectFit: "cover",
          }}
          alt={alt}
          className="rounded-[15px] object-cover translate-y-[-15%]"
        />
      </div>
      <div className="flex flex-col justify-center text-center align-center h-auto gap-4 w-[262px]">
        <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#E7816B]">
          {alt.toUpperCase()}
        </h1>
        <p className="text-[16px] leading-[26px] text-[#333136]">{body}</p>
      </div>
    </div>
  );
};

export default ImageCardWebDesign;
//  <Image
//         src="/assets/web-design/desktop/image-express.jpg"
//         width={1110}
//         height={450}
//         alt="Express"
//       />
//       <Image
//         src="/assets/web-design/desktop/image-transfer.jpg"
//         width={1110}
//         height={450}
//         alt="Transfer"
//       />
//       <Image
//         src="/assets/web-design/desktop/image-photon.jpg"
//         width={1110}
//         height={450}
//         alt="Photon"
//       />
//       <Image
//         src="/assets/web-design/desktop/image-builder.jpg"
//         width={1110}
//         height={450}
//         alt="Builder"
//       />
//       <Image
//         src="/assets/web-design/desktop/image-blogr.jpg"
//         width={1110}
//         height={450}
//         alt="Blogr"
//       />
//       <Image
//         src="/assets/web-design/desktop/image-camp.jpg"
//         width={1110}
//         height={450}
//         alt="Camp"
//       />
