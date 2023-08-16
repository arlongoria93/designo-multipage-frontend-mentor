import React from "react";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { Jost } from "next/font/google";
import {
  BackgroundPatternIntroAbout,
  BackgroundPatternIntroWeb,
} from "@/components/svgs";
import HeroAbout from "@/components/HeroAbout/HeroAbout";
import AboutLocationCard from "@/components/AboutLocationCard/AboutLocationCard";

const jost = Jost({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});
const About = () => {
  return (
    <div className="flex flex-col items-cetner">
      <HeroAbout />

      <Image
        src="/assets/about/mobile/image-about-hero.jpg"
        alt="about hero"
        width={375}
        height={375}
        quality={100}
        className="self-center object-contain w-full p-0 md:hidden lg:hidden"
      />

      <div className="w-[689px] mx-auto rounded-t-[15px] hidden md:block lg:hidden mt-[120px]">
        <Image
          src="/assets/about/tablet/image-about-hero.jpg"
          alt="about hero"
          width={768}
          height={375}
          quality={100}
          className="  self-center object-contain w-full p-0 hidden md:block lg:hidden rounded-t-[15px]"
        />
      </div>

      <main
        className={`${jost.className} w-full md:w-[689px] mx-auto   md:rounded-b-[15px] h-[413px] md:h-[352px]  bg-[#E7816B] flex flex-col lg:flex-row z-10 overflow-clip items-center   lg:hidden`}
      >
        <div className="relative">
          <BackgroundPatternIntroAbout className=" translate-x-[-78.5%]  md:translate-x-[-43%] lg:translate-x-[26.5%]   object-contain items-center  justify-center h-[584px] w-[876px]  absolute overflow-hidden " />
        </div>
        <div className="flex flex-col  gap-[24px] h-full items-center justify-center  w-[327px]  md:w-[573px] lg:w-full lg:justify-center lg:h-[350px]  z-20 md:items-center  lg:mt-0 ">
          <h1 className="text-white text-center font-medium  text-[32px] md:text-[48px] lg:w-full leading-[36px] md:leading-[48px]">
            About Us
          </h1>
          <p className="text-center   text-[15px] md:text-[16px] leading-[25px] md:leading-[26px] text-white w-[327px] md:w-[573px]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </main>

      <div className="flex flex-col lg:flex-row  bg-gradient-to-t  from-[#FDF3F0] to-[#5D020200]  items-center  justify-center  mx-auto md:rounded-b-[15px] w-full md:w-[689px] md:rounded-t-[15px] md:mt-[120px] lg:w-[1111px] overflow-hidden lg:mt-[160px]">
        <Image
          src="/assets/about/mobile/image-world-class-talent.jpg"
          alt="about hero"
          width={375}
          height={375}
          quality={100}
          className="self-center object-contain w-full p-0 md:hidden lg:hidden"
        />
        <Image
          src="/assets/about/tablet/image-world-class-talent.jpg"
          alt="about hero"
          width={768}
          height={375}
          quality={100}
          className="  self-center object-contain w-full p-0 rounded-t-[15px] hidden md:block lg:hidden"
        />
        <Image
          src="/assets/about/desktop/image-world-class-talent.jpg"
          alt="about hero"
          width={476}
          height={640}
          quality={100}
          className="object-contain  p-0 hidden lg:block "
        />
        <div className="flex flex-col w-[327px] gap-[24px] lg:w-3/4 text-center items-center justify-center py-[80px] ">
          <h1 className="text-[32px] leading-[36px] font-medium text-center text-[#E7816B] w-full lg:w-[445px] lg:text-start">
            World-class talent
          </h1>
          <p className="w-[327px] text-[15px] leading-6 text-center lg:w-[445px] lg:text-start">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="w-full text-[15px] leading-6  text-center lg:w-[445px] lg:text-start">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[48px] items-center lg:flex-row justify-center text-center mt-[120px] lg:w-[1110px] lg:gap-[30px] mx-auto">
        <AboutLocationCard location="Canada" />
        <AboutLocationCard location="Australia" />
        <AboutLocationCard location="United Kingdom" />
      </div>
      <div className="flex flex-col lg:flex-row-reverse  bg-gradient-to-t  from-[#FDF3F0] to-[#5D020200]  items-center  justify-center  mx-auto md:rounded-b-[15px] w-full md:w-[689px] md:rounded-t-[15px] md:mt-[120px] lg:w-[1111px] overflow-hidden lg:mt-[160px]">
        <Image
          src="/assets/about/mobile/image-real-deal.jpg"
          alt="about hero"
          width={375}
          height={375}
          quality={100}
          className="self-center object-contain w-full p-0 md:hidden lg:hidden"
        />
        <Image
          src="/assets/about/tablet/image-real-deal.jpg"
          alt="about hero"
          width={768}
          height={375}
          quality={100}
          className="  self-center object-contain w-full p-0 hidden md:block lg:hidden rounded-t-[15px]"
        />
        <Image
          src="/assets/about/desktop/image-real-deal.jpg"
          alt="about hero"
          width={476}
          height={640}
          quality={100}
          className="object-contain  p-0 hidden lg:block "
        />
        <div className="flex flex-col w-[327px] gap-[24px] lg:w-3/4 text-center items-center justify-center py-[80px] ">
          <h1 className="text-[32px] leading-[36px] font-medium text-center text-[#E7816B] w-full lg:w-[445px] lg:text-start">
            The real deal
          </h1>
          <p className="w-full text-[15px] leading-6  text-center lg:w-[445px] lg:text-start">
            As strategic partners in our clients businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="w-full text-[15px] leading-6  text-center lg:w-[445px] lg:text-start">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center "></div>
      <Footer />
    </div>
  );
};

export default About;
