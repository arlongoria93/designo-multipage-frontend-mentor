import Navbar from "@/components/Navbar/navbar";
import Hero from "@/components/Hero/Hero";
import MobileCardLink from "@/components/MobileCardLink/MobileCardLink";

export default function Home() {
  const mobileCardLinks = [
    ["WEB DESIGN", "/assets/home/mobile/image-web-design.jpg", "Web Design"],
    ["APP DESIGN", "/assets/home/mobile/image-app-design.jpg", "App Design"],
    [
      "GRAPHIC DESIGN",
      "/assets/home/mobile/image-graphic-design.jpg",
      "Graphic Design",
    ],
  ];
  return (
    <>
      <Navbar /> <Hero />
      <div className="w-[375px] mt-[120px]">
        <div className="flex flex-col gap-[24px] items-center">
          {mobileCardLinks.map((image) => (
            <MobileCardLink
              alt={image[2]}
              name={image[0]}
              imageUrl={image[1]}
            />
          ))}
          <div></div>
        </div>
      </div>
    </>
  );
}
