import React from "react";
import MobileCardLink from "@/components/MobileCardLink";
import TabletCardLink from "./TabletCardLink";
import DesktopCardLink from "./DesktopCardLink";
import ImageCardWebDesign from "./ImageCardWebDesign";
import Footer from "./Footer";
const mobileCardLinks = [
  ["APP DESIGN", "/assets/home/mobile/image-app-design.jpg", "App Design"],
  [
    "GRAPHIC DESIGN",
    "/assets/home/mobile/image-graphic-design.jpg",
    "Graphic Design",
  ],
];
const tabletCardLinks = [
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
    <div className="  mx-auto  mt-[120px]">
      <div className="flex flex-col items-center gap-[24px] ">
        <div className="flex flex-col items-center justify-center gap-8 lg:grid lg:grid-cols-3">
          {WebDesignImages.map((image) => (
            <ImageCardWebDesign
              imageUrl={image[0]}
              alt={image[1]}
              body={image[2]}
              key={image[1]}
            />
          ))}
        </div>
        <div className="mt-[96px] flex flex-col items-center gap-[24px] md:hidden">
          {mobileCardLinks.map((image) => (
            <MobileCardLink
              alt={image[2]}
              name={image[0]}
              imageUrl={image[1]}
              key={image[1]}
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
          <div className="flex flex-row justify-between gap-[24px]">
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
        <Footer />
      </div>
    </div>
  );
};

export default WebDesignContent;
