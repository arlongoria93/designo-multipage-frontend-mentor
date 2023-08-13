import React from "react";
import Image from "next/image";
import MobileCardLink from "@/components/MobileCardLink/MobileCardLink";
import TabletCardLink from "../TabletCardLink/TabletCardLink";
import DesktopCardLink from "../DesktopCardLink/DesktopCardLink";
import Link from "next/link";
import { IconRightArrow } from "@/components/svgs";
import {
  BackgroundPatternSmallCircle,
  IllustrationFriendly,
  IllustrationPassionate,
  IllustrationResourceful,
  BackgroundPatternDesignPagesIntroMobile,
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconPinterest,
  IconYoutube,
} from "@/components/svgs";
import ImageCardWebDesign from "../ImageCardWebDesign/ImageCardWebDesign";
const mobileCardLinks = [
  ["WEB DESIGN", "/assets/home/mobile/image-web-design.jpg", "Web Design"],
  ["APP DESIGN", "/assets/home/mobile/image-app-design.jpg", "App Design"],
  [
    "GRAPHIC DESIGN",
    "/assets/home/mobile/image-graphic-design.jpg",
    "Graphic Design",
  ],
];
const tabletCardLinks = [
  ["WEB DESIGN", "/assets/home/tablet/image-web-design.jpg", "Web Design"],
  ["APP DESIGN", "/assets/home/tablet/image-app-design.jpg", "App Design"],
  [
    "GRAPHIC DESIGN",
    "/assets/home/tablet/image-graphic-design.jpg",
    "Graphic Design",
  ],
];

const desktopCardLinks = [
  [
    "WEB DESIGN",
    "/assets/home/desktop/image-web-design-large.jpg",
    "Web Design",
  ],
  ["APP DESIGN", "/assets/home/desktop/image-app-design.jpg", "App Design"],
  [
    "GRAPHIC DESIGN",
    "/assets/home/desktop/image-graphic-design.jpg",
    "Graphic Design",
  ],
];

const WebDesignImages = [
  [
    "/assets/web-design/desktop/image-express.jpg",
    "Express",
    "A multi-carrier shipping website for ecommerce businesses",
  ],
  [
    "/assets/web-design/desktop/image-transfer.jpg",
    "Transfer",
    "Site for low-cost money transfers and sending money within seconds",
  ],
  [
    "/assets/web-design/desktop/image-photon.jpg",
    "Photon",
    "A state-of-the-art music player with high-resolution audio and DSP effects",
  ],
  [
    "/assets/web-design/desktop/image-builder.jpg",
    "Builder",
    "Connects users with local contractors based on their location",
  ],
  [
    "/assets/web-design/desktop/image-blogr.jpg",
    "Blogr",
    "Blogr is a platform for creating an online blog or publication",
  ],
  [
    "/assets/web-design/desktop/image-camp.jpg",
    "Camp",
    "Get expert training in coding, data, design, and digital marketing",
  ],
];
const WebDesignContent = () => {
  return (
    <div className="  mt-[120px] ">
      <div className="flex flex-col gap-[24px] items-center ">
        {WebDesignImages.map((image) => (
          <ImageCardWebDesign
            imageUrl={image[0]}
            alt={image[1]}
            body={image[2]}
          />
        ))}
        <div className="md:hidden flex flex-col gap-[24px] items-center">
          {mobileCardLinks.map((image) => (
            <MobileCardLink
              alt={image[2]}
              name={image[0]}
              imageUrl={image[1]}
            />
          ))}
        </div>
        <div className="hidden lg:hidden md:flex flex-col gap-[24px] items-center">
          {tabletCardLinks.map((image) => (
            <TabletCardLink
              alt={image[2]}
              name={image[0]}
              imageUrl={image[1]}
            />
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-row gap-[30px]">
          <Link
            className="text-white font-medium   flex flex-col z-20"
            href="/web-design"
          >
            {" "}
            <div className="bg-[#000] w-[541px] h-[640px] flex flex-col items-center rounded-[15px]  relative justify-center hover:bg-[#FFAD9B]">
              <Image
                src={desktopCardLinks[0][1]}
                layout="fill"
                alt={desktopCardLinks[0][2]}
                quality={100}
                className="opacity-[0.49] rounded-[15px] "
              />
              <h1 className="leading-[48px] mb-[11.97px] tracking-[2px] text-[40px] z-20">
                {desktopCardLinks[0][0]}
              </h1>
              <div className="flex flex-row items-center justify-center gap-[16px] z-20">
                <h2 className="text-[15px] tracking-[5px] uppercase ">
                  View Projects
                </h2>

                <IconRightArrow className="w-[7px] h-[10px] " />
              </div>{" "}
            </div>
          </Link>

          <div className="flex flex-col gap-[24px] justify-between">
            <DesktopCardLink
              imageUrl={desktopCardLinks[1][1]}
              alt={desktopCardLinks[1][2]}
              name={desktopCardLinks[1][0]}
            />
            <DesktopCardLink
              imageUrl={desktopCardLinks[2][1]}
              alt={desktopCardLinks[2][2]}
              name={desktopCardLinks[2][0]}
            />
          </div>
        </div>

        {/* Fooooooot3r */}
        <div className=" mt-[311px] flex flex-col items-center w-full bg-[#1D1C1E] h-[815px] md:h-[423px]">
          <div className="mt-[-189px] md:mt-[-280px] gap-[49px]  bg-[#E7816B] h-[379px] md:h-[350px] w-[327px] md:w-[690px] lg:w-[1111px] items-center justify-center rounded-[15px] flex flex-col lg:flex-row lg:justify-around overflow-hidden absolute">
            <BackgroundPatternDesignPagesIntroMobile className="w-[876px] -translate-x-[260px] h-[584px]   absolute z-0" />
            <div className="flex flex-col text-center lg:text-start items-center lg:items-start justify-center  gap-[6px] z-20">
              <h1 className="text-[32px] w-[279px] md:text-[40px] font-medium leading-9 md:leading-10 text-white lg:w-[268px] lg:h-[98px] lg:leading-10">
                Let's talk about your project
              </h1>
              <p className="text-white leading-[25px] text-[15px] md:text-[16px] md:leading-[26px] w-[279px] md:w-[573px] lg:w-[459px] lg:h-[78px]">
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <button className="w-[156px] h-[56px] rounded-[8px] bg-white text-[15px] font-medium tracking-[1px] hover:bg-[#FFAD9B] hover:text-white">
              GET IN TOUCH
            </button>
          </div>
          <div className="mt-[253px] md:mt-[150px] md:w-[690px] lg:w-[1111px] flex flex-col w-full items-center gap-[32px]">
            <div className="flex flex-col md:w-full items-center   md:justify-between gap-[32px] md:flex-row">
              <Link href="/">
                <Image
                  src="/assets/shared/desktop/logo-light.png"
                  width={202}
                  height={27}
                  alt="logo"
                />
              </Link>
              <div className="w-[327px] h-[1px] bg-[#fff] md:hidden opacity-10"></div>

              <div className="flex flex-col md:flex-row items-center gap-[32px] text-white leading-[14px] tracking-[2px]">
                <Link href="/company">
                  <h1>OUR COMPANY</h1>
                </Link>
                <Link href="/locations">
                  <h1>LOCATIONS</h1>
                </Link>
                <Link href="/contact">
                  <h1>CONTACT</h1>
                </Link>
              </div>
            </div>
            <div className="hidden md:block w-[690px] lg:w-[1111px] h-[1px] bg-[#fff] opacity-10 mt-[40px]"></div>
            <div className="flex flex-col md:flex-row md:w-[690px] lg:w-[1111px] md:justify-between  gap-[40px] md:gap-[10px]">
              <div className="flex flex-col items-center md:text-[16px] leading-[26px]  text-white opacity-[0.5]">
                <h1 className="font-bold">Designo Central Office</h1>
                <h1>3886 Wellington Street</h1>
                <h1>Toronto, Ontario M9C 3J5</h1>
              </div>
              <div className="flex flex-col md:text-[16px]  items-center md:items-start md:w-[223px] leading-[26px] text-white opacity-[0.5]">
                <h1 className="font-bold">Contact Us (Central Office)</h1>
                <h1>P : +1 253-863-8967</h1>
                <h1>M : contact@designo.co</h1>
              </div>

              <div className=" md:w-[223px] w-full flex flex-row justify-center items-center md:items-end gap-[24px]">
                <IconFacebook className="w-[24px] h-[24px] fill-[#E7816B] hover:fill-[#FFAD9B] cursor-pointer" />
                <IconYoutube className="w-[24px] h-[24px] fill-[#E7816B] hover:fill-[#FFAD9B] cursor-pointer" />
                <IconTwitter className="w-[24px] h-[24px] fill-[#E7816B] hover:fill-[#FFAD9B] cursor-pointer" />
                <IconPinterest className="w-[24px] h-[24px] fill-[#E7816B] hover:fill-[#FFAD9B] cursor-pointer" />
                <IconInstagram className="w-[24px] h-[24px] fill-[#E7816B] hover:fill-[#FFAD9B] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignContent;
