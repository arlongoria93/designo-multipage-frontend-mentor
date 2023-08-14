import React from "react";
import MobileCardLink from "@/components/MobileCardLink/MobileCardLink";
import TabletCardLink from "../TabletCardLink/TabletCardLink";
import DesktopCardLink from "../DesktopCardLink/DesktopCardLink";
import ImageCardWebDesign from "../ImageCardWebDesign/ImageCardWebDesign";
import Footer from "../Footer/Footer";

const mobileCardLinks = [
  ["WEB DESIGN", "/assets/home/mobile/image-web-design.jpg", "Web Design"],
  [
    "GRAPHIC DESIGN",
    "/assets/home/mobile/image-graphic-design.jpg",
    "Graphic Design",
  ],
];
const tabletCardLinks = [
  ["WEB DESIGN", "/assets/home/tablet/image-web-design.jpg", "Web Design"],

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

  [
    "GRAPHIC DESIGN",
    "/assets/home/desktop/image-graphic-design.jpg",
    "Graphic Design",
  ],
];

const AppDesignImageLinks = [
  [
    "/assets/app-design/desktop/image-airfilter.jpg",
    "Airfilter",
    "Solving the problem of poor indoor air quality by filtering the air",
  ],
  [
    "/assets/app-design/desktop/image-eyecam.jpg",
    "Eyecam",
    "Product that lets you edit your favorite photos and videos at any time",
  ],
  [
    "/assets/app-design/desktop/image-faceit.jpg",
    "Faceit",
    "Get to meet your favorite internet superstar with the faceit app",
  ],
  [
    "/assets/app-design/desktop/image-todo.jpg",
    "Todo",
    "A todo app that features cloud sync with light and dark mode",
  ],
  [
    "/assets/app-design/desktop/image-loopstudios.jpg",
    "Loopstudios",
    "A VR experience app made for Loopstudios",
  ],
];

const AppDesignContent = () => {
  return (
    <div className="  mt-[120px]  mx-auto">
      <div className="flex flex-col gap-[24px] items-center ">
        <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-3 gap-8">
          {AppDesignImageLinks.map((image) => (
            <ImageCardWebDesign
              imageUrl={image[0]}
              alt={image[1]}
              body={image[2]}
            />
          ))}
        </div>
        <div className="md:hidden flex flex-col gap-[24px] items-center mt-[96px]">
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
          <div className="flex flex-row gap-[24px] justify-between">
            <DesktopCardLink
              imageUrl={desktopCardLinks[0][1]}
              alt={desktopCardLinks[0][2]}
              name={desktopCardLinks[0][0]}
            />
            <DesktopCardLink
              imageUrl={desktopCardLinks[1][1]}
              alt={desktopCardLinks[1][2]}
              name={desktopCardLinks[1][0]}
            />
          </div>
        </div>

        {/* Fooooooot3r */}
        <Footer />
      </div>
    </div>
  );
};

export default AppDesignContent;
