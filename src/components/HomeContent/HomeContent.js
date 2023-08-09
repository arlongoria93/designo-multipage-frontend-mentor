import React from "react";
import Image from "next/image";
import MobileCardLink from "@/components/MobileCardLink/MobileCardLink";
import TabletCardLink from "../TabletCardLink/TabletCardLink";
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
const mobileCardLinks = [
  ["WEB DESIGN", "/assets/home/mobile/image-web-design.jpg", "Web Design"],
  ["APP DESIGN", "/assets/home/mobile/image-app-design.jpg", "App Design"],
  [
    "GRAPHIC DESIGN",
    "/assets/home/mobile/image-graphic-design.jpg",
    "Graphic Design",
  ],
];
const TabletCardLinks = [
  ["WEB DESIGN", "/assets/home/tablet/image-web-design.jpg", "Web Design"],
  ["APP DESIGN", "/assets/home/tablet/image-app-design.jpg", "App Design"],
  [
    "GRAPHIC DESIGN",
    "/assets/home/tablet/image-graphic-design.jpg",
    "Graphic Design",
  ],
];

const HomeContent = () => {
  return (
    <div className="  mt-[120px] ">
      <div className="flex flex-col gap-[24px] items-center">
        <div className="md:hidden flex flex-col gap-[24px] items-center">
          {mobileCardLinks.map((image) => (
            <MobileCardLink
              alt={image[2]}
              name={image[0]}
              imageUrl={image[1]}
            />
          ))}
        </div>
        <div className="hidden md:flex flex-col gap-[24px] items-center">
          {TabletCardLinks.map((image) => (
            <TabletCardLink
              alt={image[2]}
              name={image[0]}
              imageUrl={image[1]}
            />
          ))}
        </div>
        <div className="flex flex-col mt-[96px] items-center justify-center gap-[80px]">
          <div className="flex flex-col md:flex-row  justify-center  items-center md:gap-[48px]">
            <div className="relative w-[202px] h-[202px]">
              <BackgroundPatternSmallCircle className="-z-10 w-[202px] h-[202px]  absolute object-center" />
              <IllustrationPassionate className="w-full h-full z-10" />
            </div>
            <div className="flex flex-col items-center md:items-start md:text-start w-[327px] md:w-[439px]">
              <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] mb-[32px]">
                PASSIONATE
              </h1>
              <p className="text-[16px] leading-[26px] text-center md:text-start">
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  justify-center  items-center md:gap-[48px]">
            <div className="relative w-[202px] h-[202px]">
              <BackgroundPatternSmallCircle className="-z-10 w-[202px] h-[202px]  absolute object-center" />
              <IllustrationResourceful className="w-full h-full z-10" />
            </div>
            <div className="flex flex-col items-center md:items-start md:text-start w-[327px] md:w-[439px]">
              <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] mb-[32px]">
                RESOURCEFUL
              </h1>
              <p className="text-[16px] leading-[26px] text-center md:text-start">
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  justify-center  items-center md:gap-[48px]">
            <div className="relative w-[202px] h-[202px]">
              <BackgroundPatternSmallCircle className="-z-10 w-[202px] h-[202px]  absolute object-center" />
              <IllustrationFriendly className="w-full h-full z-10" />
            </div>
            <div className="flex flex-col items-center md:items-start md:text-start w-[327px] md:w-[439px]">
              <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] mb-[32px]">
                FRIENDLY
              </h1>
              <p className="text-[16px] leading-[26px] text-center md:text-start">
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-[311px] flex flex-col items-center w-full bg-[#1D1C1E] h-[815px] md:h-[423px]">
          <div className="mt-[-189px] md:mt-[-280px] gap-[49px]  bg-[#E7816B] h-[379px] md:h-[350px] w-[327px] md:w-[690px] items-center justify-center rounded-[15px] flex flex-col overflow-hidden absolute">
            <BackgroundPatternDesignPagesIntroMobile className="w-[876px] -translate-x-[260px] h-[584px]   absolute" />
            <div className="flex flex-col text-center items-center justify-center  gap-[6px]">
              <h1 className="text-[32px] w-[279px] md:text-[40px] font-medium leading-9 md:leading-10 text-white">
                Let's talk about your project
              </h1>
              <p className="text-white leading-[25px] text-[15px] md:text-[16px] md:leading-[26px] w-[279px] md:w-[573px]">
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <button className="w-[156px] h-[56px] rounded-[8px] bg-white text-[15px] font-medium tracking-[1px]">
              GET IN TOUCH
            </button>
          </div>
          <div className="mt-[253px] md:mt-[150px] md:w-[690px] flex flex-col w-full items-center gap-[32px]">
            <div className="flex flex-col md:w-full items-center   md:justify-between gap-[32px] md:flex-row">
              <Image
                src="/assets/shared/desktop/logo-light.png"
                width={202}
                height={27}
                alt="logo"
              />
              <div className="w-[327px] h-[1px] bg-[#fff] md:hidden opacity-10"></div>

              <div className="flex flex-col md:flex-row items-center gap-[32px] text-white leading-[14px] tracking-[2px]">
                <h1>OUR COMPANY</h1>
                <h1>LOCATIONS</h1>
                <h1>CONTACT</h1>
              </div>
            </div>
            <div className="hidden md:block w-[690px] h-[1px] bg-[#fff] opacity-10 mt-[40px]"></div>
            <div className="flex flex-col md:flex-row md:w-[690px] md:justify-between  gap-[40px] md:gap-[10px]">
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
                <IconFacebook className="w-[24px] h-[24px] " />
                <IconYoutube className="w-[24px] h-[24px] " />
                <IconTwitter className="w-[24px] h-[24px]" />
                <IconPinterest className="w-[24px] h-[24px] " />
                <IconInstagram className="w-[24px] h-[24px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
