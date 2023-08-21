import React from "react";
import Image from "next/image";
import MobileCardLink from "@/components/MobileCardLink";
import TabletCardLink from "./TabletCardLink";
import DesktopCardLink from "./DesktopCardLink";
import Link from "next/link";
import { IconRightArrow } from "@/components/svgs";
import {
  BackgroundPatternSmallCircle,
  IllustrationFriendly,
  IllustrationPassionate,
  IllustrationResourceful,
} from "@/components/svgs";
import Footer from "./Footer";
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
      <div className="flex flex-col items-center gap-[24px]">
        <div className="flex flex-col items-center gap-[24px] md:hidden">
          {mobileCardLinks.map((image) => (
            <MobileCardLink
              alt={image[2]}
              name={image[0]}
              imageUrl={image[1]}
            />
          ))}
        </div>
        <div className="hidden flex-col items-center gap-[24px] md:flex lg:hidden">
          {tabletCardLinks.map((image) => (
            <TabletCardLink
              alt={image[2]}
              name={image[0]}
              imageUrl={image[1]}
            />
          ))}
        </div>
        <div className="hidden gap-[30px] lg:flex lg:flex-row">
          <Link
            className="z-20 flex   flex-col font-medium text-white"
            href="/web-design"
          >
            {" "}
            <div className="relative flex h-[640px] w-[541px] flex-col items-center justify-center  rounded-[15px] bg-[#000] hover:bg-[#FFAD9B]">
              <Image
                src={desktopCardLinks[0][1]}
                layout="fill"
                alt={desktopCardLinks[0][2]}
                quality={100}
                className="rounded-[15px] opacity-[0.49] "
              />
              <h1 className="z-20 mb-[11.97px] text-[40px] leading-[48px] tracking-[2px]">
                {desktopCardLinks[0][0]}
              </h1>
              <div className="z-20 flex flex-row items-center justify-center gap-[16px]">
                <h2 className="text-[15px] uppercase tracking-[5px] ">
                  View Projects
                </h2>

                <IconRightArrow className="h-[10px] w-[7px] " />
              </div>{" "}
            </div>
          </Link>

          <div className="flex flex-col justify-between gap-[24px]">
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
        <div className="mt-[96px] flex flex-col items-center justify-center gap-[80px] overflow-hidden lg:mt-[160px] lg:w-[1111px] lg:flex-row lg:gap-[30px]">
          <div className="flex flex-col  items-center justify-center  md:flex-row  md:gap-[48px] lg:flex-col lg:gap-[32px]">
            <div className="relative h-[202px] w-[202px]">
              <BackgroundPatternSmallCircle className="absolute -z-10 h-[202px]  w-[202px] object-center" />
              <IllustrationPassionate className="z-10 h-full w-full" />
            </div>
            <div className="flex w-[327px] flex-col items-center md:w-[439px] md:items-start md:text-start lg:w-[350px] lg:items-center lg:text-center">
              <h1 className="mb-[32px] text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136]">
                PASSIONATE
              </h1>
              <p className="text-center text-[16px] leading-[26px] md:text-start lg:items-center lg:text-center">
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center  md:flex-row  md:gap-[48px] lg:flex-col lg:gap-[32px]">
            <div className="relative h-[202px] w-[202px]">
              <BackgroundPatternSmallCircle className="absolute -z-10 h-[202px]  w-[202px] object-center" />
              <IllustrationResourceful className="z-10 h-full w-full" />
            </div>
            <div className="flex w-[327px] flex-col items-center md:w-[439px] md:items-start md:text-start lg:w-[350px] lg:items-center lg:text-center">
              <h1 className="mb-[32px] text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] ">
                RESOURCEFUL
              </h1>
              <p className="text-center text-[16px] leading-[26px] md:text-start lg:items-center lg:text-center">
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row  md:gap-[48px] lg:flex-col lg:gap-[32px]">
            <div className="relative h-[202px] w-[202px]">
              <BackgroundPatternSmallCircle className="absolute -z-10 h-[202px]  w-[202px] object-center" />
              <IllustrationFriendly className="z-10 h-full w-full" />
            </div>
            <div className="flex w-[327px] flex-col items-center md:w-[439px] md:items-start md:text-start lg:w-[350px] lg:items-center lg:text-center">
              <h1 className="mb-[32px] text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] lg:h-[26px]">
                FRIENDLY
              </h1>
              <p className="text-center text-[16px] leading-[26px] md:text-start lg:h-[104px] lg:w-[304px] lg:items-center lg:text-center">
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
