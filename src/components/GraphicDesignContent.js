import React from "react";
import MobileCardLink from "@/components/MobileCardLink";
import TabletCardLink from "./TabletCardLink";
import DesktopCardLink from "./DesktopCardLink";
import ImageCardWebDesign from "./ImageCardWebDesign";
import Footer from "./Footer";

const mobileCardLinks = [
  ["APP DESIGN", "/assets/home/mobile/image-app-design.jpg", "App Design"],
  ["WEB DESIGN", "/assets/home/mobile/image-web-design.jpg", "Web Design"],
];
const tabletCardLinks = [
  ["APP DESIGN", "/assets/home/tablet/image-app-design.jpg", "App Design"],
  ["WEB DESIGN", "/assets/home/tablet/image-web-design.jpg", "Web Design"],
];

const desktopCardLinks = [
  ["APP DESIGN", "/assets/home/desktop/image-app-design.jpg", "App Design"],
  [
    "WEB DESIGN",
    "/assets/home/desktop/image-web-design-small.jpg",
    "Web Design",
  ],
];

const GraphicDesignImageLinks = [
  ["/assets/graphic-design/desktop/image-change.jpg", "Change", "Change"],
  [
    "/assets/graphic-design/desktop/image-boxed-water.jpg",
    "Boxed Water",
    "Boxed Water",
  ],
  ["/assets/graphic-design/desktop/image-science.jpg", "Science", "Science"],
];

const GraphicDesignContent = () => {
  return (
    <div className="  mx-auto  mt-[120px]">
      <div className="flex flex-col items-center gap-[24px] ">
        <div className="flex flex-col items-center justify-center gap-8 lg:grid lg:grid-cols-3">
          {GraphicDesignImageLinks.map((image) => (
            <ImageCardWebDesign
              imageUrl={image[0]}
              alt={image[1]}
              body={image[2]}
            />
          ))}
        </div>
        <div className="mt-[96px] flex flex-col items-center gap-[24px] md:hidden">
          {mobileCardLinks.map((image) => (
            <MobileCardLink
              alt={image[2]}
              name={image[0]}
              imageUrl={image[1]}
            />
          ))}
        </div>
        <div className="mt-[96px] hidden flex-col items-center gap-[24px] md:flex lg:hidden">
          {tabletCardLinks.map((image) => (
            <TabletCardLink
              alt={image[2]}
              name={image[0]}
              imageUrl={image[1]}
            />
          ))}
        </div>
        <div className="mt-[96px] hidden gap-[30px] lg:flex lg:flex-row">
          <div className="flex flex-row justify-between gap-[24px]">
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

export default GraphicDesignContent;
