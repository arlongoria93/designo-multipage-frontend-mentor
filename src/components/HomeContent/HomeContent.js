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
import Footer from "../Footer/Footer";
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

        {/* PASSIONATE _ RESOURCEFUL _ FRIENDLY BLOCKS */}
        <div className="flex flex-col lg:flex-row lg:w-[1111px] mt-[96px] lg:mt-[160px] items-center justify-center gap-[80px] lg:gap-[30px] overflow-hidden">
          <div className="flex flex-col  md:flex-row lg:flex-col  justify-center  items-center md:gap-[48px] lg:gap-[32px]">
            <div className="relative w-[202px] h-[202px]">
              <BackgroundPatternSmallCircle className="-z-10 w-[202px] h-[202px]  absolute object-center" />
              <IllustrationPassionate className="w-full h-full z-10" />
            </div>
            <div className="flex flex-col items-center md:items-start md:text-start w-[327px] md:w-[439px] lg:w-[350px] lg:items-center lg:text-center">
              <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] mb-[32px]">
                PASSIONATE
              </h1>
              <p className="text-[16px] leading-[26px] text-center md:text-start lg:items-center lg:text-center">
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col  justify-center  items-center md:gap-[48px] lg:gap-[32px]">
            <div className="relative w-[202px] h-[202px]">
              <BackgroundPatternSmallCircle className="-z-10 w-[202px] h-[202px]  absolute object-center" />
              <IllustrationResourceful className="w-full h-full z-10" />
            </div>
            <div className="flex flex-col items-center md:items-start md:text-start w-[327px] md:w-[439px] lg:w-[350px] lg:items-center lg:text-center">
              <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] mb-[32px] ">
                RESOURCEFUL
              </h1>
              <p className="text-[16px] leading-[26px] text-center md:text-start lg:items-center lg:text-center">
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col justify-center  items-center md:gap-[48px] lg:gap-[32px]">
            <div className="relative w-[202px] h-[202px]">
              <BackgroundPatternSmallCircle className="-z-10 w-[202px] h-[202px]  absolute object-center" />
              <IllustrationFriendly className="w-full h-full z-10" />
            </div>
            <div className="flex flex-col items-center md:items-start md:text-start lg:items-center lg:text-center w-[327px] md:w-[439px] lg:w-[350px]">
              <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] mb-[32px] lg:h-[26px]">
                FRIENDLY
              </h1>
              <p className="text-[16px] leading-[26px] text-center md:text-start lg:items-center lg:text-center lg:h-[104px] lg:w-[304px]">
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </div>
        </div>
        {/* Fooooooot3r */}
        <Footer />
      </div>
    </div>
  );
};

export default HomeContent;
