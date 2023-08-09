import Navbar from "@/components/Navbar/navbar";
import Hero from "@/components/Hero/Hero";
import MobileCardLink from "@/components/MobileCardLink/MobileCardLink";
import {
  BackgroundPatternSmallCircle,
  IllustrationFriendly,
  IllustrationPassionate,
  IllustrationResourceful,
  BackgroundPatternThreeCircles,
  BackgroundPatternDesignPagesIntroMobile,
} from "@/components/svgs";

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
      <div className="w-[375px] h- mt-[120px]">
        <div className="flex flex-col gap-[24px] items-center">
          {mobileCardLinks.map((image) => (
            <MobileCardLink
              alt={image[2]}
              name={image[0]}
              imageUrl={image[1]}
            />
          ))}
          <div className="flex flex-col mt-[96px] items-center justify-center gap-[80px]">
            <div className="flex flex-col w-[327px] justify-center  items-center">
              <div className="relative w-[202px] h-[202px]">
                <BackgroundPatternSmallCircle className="-z-10 w-[202px] h-[202px]  absolute object-center" />
                <IllustrationPassionate className="w-full h-full z-10" />
              </div>
              <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] mb-[32px]">
                PASSIONATE
              </h1>
              <p className="text-[16px] leading-[26px] text-center">
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
            <div className="flex flex-col w-[327px] justify-center  items-center">
              <div className="relative w-[202px] h-[202px]">
                <BackgroundPatternSmallCircle className="-z-10 w-[202px] h-[202px]  absolute object-center" />
                <IllustrationResourceful className="w-full h-full z-10" />
              </div>
              <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] mb-[32px]">
                RESOURCEFUL
              </h1>
              <p className="text-[16px] leading-[26px] text-center">
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
            <div className="flex flex-col w-[327px] justify-center  items-center">
              <div className="relative w-[202px] h-[202px]">
                <BackgroundPatternSmallCircle className="-z-10 w-[202px] h-[202px]  absolute object-center" />
                <IllustrationFriendly className="w-full h-full z-10" />
              </div>
              <h1 className="text-[20px] font-medium leading-[26px] tracking-[5px] text-[#333136] mb-[32px]">
                FRIENDLY
              </h1>
              <p className="text-[16px] leading-[26px] text-center">
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
            <div className="mt-[119px] gap-[49px]  bg-[#E7816B] h-[379px] w-[327px] items-center justify-center rounded-[15px] flex flex-col overflow-hidden relative">
              {/* flip image horizontaly  */}
              <BackgroundPatternDesignPagesIntroMobile className="w-[876px] -translate-x-[260px] h-[584px]   absolute" />
              <div className="flex flex-col text-center w-[279px] gap-[6px]">
                <h1 className="text-[32px] font-medium leading-9 text-white">
                  Let's talk about your project
                </h1>
                <p className="text-white leading-[25px] text-[15px]">
                  Ready to take it to the next level? Contact us today and find
                  out how our expertise can help your business grow.
                </p>
              </div>
              <button className="w-[156px] h-[56px] rounded-[8px] bg-white text-[15px] font-medium tracking-[1px]">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
