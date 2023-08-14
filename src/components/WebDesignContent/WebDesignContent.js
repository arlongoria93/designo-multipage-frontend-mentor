import React from "react";
import MobileCardLink from "@/components/MobileCardLink/MobileCardLink";
import TabletCardLink from "../TabletCardLink/TabletCardLink";
import DesktopCardLink from "../DesktopCardLink/DesktopCardLink";
import ImageCardWebDesign from "../ImageCardWebDesign/ImageCardWebDesign";
import Footer from "../Footer/Footer";
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
    <div className="  mt-[120px]  mx-auto">
      <div className="flex flex-col gap-[24px] items-center ">
        <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-3 gap-8">
          {WebDesignImages.map((image) => (
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
