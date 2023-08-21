import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Jost } from "next/font/google";
import {
  BackgroundPatternIntroAbout,
  BackgroundPatternIntroWeb,
} from "@/components/svgs";
import HeroAbout from "@/components/HeroAbout";
import AboutLocationCard from "@/components/AboutLocationCard";

const jost = Jost({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});
const About = () => {
  return (
    <div className="items-cetner flex flex-col">
      <HeroAbout />

      <Image
        src="/assets/about/mobile/image-about-hero.jpg"
        alt="about hero"
        width={375}
        height={375}
        quality={100}
        className="w-full self-center object-contain p-0 md:hidden lg:hidden"
      />

      <div className="mx-auto mt-[120px] hidden w-[689px] rounded-t-[15px] md:block lg:hidden">
        <Image
          src="/assets/about/tablet/image-about-hero.jpg"
          alt="about hero"
          width={768}
          height={375}
          quality={100}
          className="  hidden w-full self-center rounded-t-[15px] object-contain p-0 md:block lg:hidden"
        />
      </div>

      <main
        className={`${jost.className} z-10 mx-auto flex   h-[413px] w-full flex-col  items-center overflow-clip bg-[#E7816B] md:h-[352px] md:w-[689px] md:rounded-b-[15px] lg:hidden   lg:flex-row`}
      >
        <div className="relative">
          <BackgroundPatternIntroAbout className=" absolute  h-[584px] w-[876px]   translate-x-[-78.5%] items-center  justify-center overflow-hidden object-contain  md:translate-x-[-43%] lg:translate-x-[26.5%] " />
        </div>
        <div className="z-20 flex  h-full w-[327px] flex-col items-center  justify-center  gap-[24px] md:w-[573px] md:items-center lg:mt-0  lg:h-[350px] lg:w-full  lg:justify-center ">
          <h1 className="text-center text-[32px] font-medium  leading-[36px] text-white md:text-[48px] md:leading-[48px] lg:w-full">
            About Us
          </h1>
          <p className="w-[327px]   text-center text-[15px] leading-[25px] text-white md:w-[573px] md:text-[16px] md:leading-[26px]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </main>

      <div className="mx-auto flex w-full  flex-col  items-center justify-center  overflow-hidden  bg-gradient-to-t  from-[#FDF3F0] to-[#5D020200] md:mt-[120px] md:w-[689px] md:rounded-b-[15px] md:rounded-t-[15px] lg:mt-[160px] lg:w-[1111px] lg:flex-row">
        <Image
          src="/assets/about/mobile/image-world-class-talent.jpg"
          alt="about hero"
          width={375}
          height={375}
          quality={100}
          className="w-full self-center object-contain p-0 md:hidden lg:hidden"
        />
        <Image
          src="/assets/about/tablet/image-world-class-talent.jpg"
          alt="about hero"
          width={768}
          height={375}
          quality={100}
          className="  hidden w-full self-center rounded-t-[15px] object-contain p-0 md:block lg:hidden"
        />
        <Image
          src="/assets/about/desktop/image-world-class-talent.jpg"
          alt="about hero"
          width={476}
          height={640}
          quality={100}
          className="hidden  object-contain p-0 lg:block "
        />
        <div className="flex w-[327px] flex-col items-center justify-center gap-[24px] py-[80px] text-center lg:w-3/4 ">
          <h1 className="w-full text-center text-[32px] font-medium leading-[36px] text-[#E7816B] lg:w-[445px] lg:text-start">
            World-class talent
          </h1>
          <p className="w-[327px] text-center text-[15px] leading-6 lg:w-[445px] lg:text-start">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="w-full text-center text-[15px]  leading-6 lg:w-[445px] lg:text-start">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-[120px] flex flex-col items-center justify-center gap-[48px] text-center lg:w-[1110px] lg:flex-row lg:gap-[30px]">
        <AboutLocationCard location="Canada" />
        <AboutLocationCard location="Australia" />
        <AboutLocationCard location="United Kingdom" />
      </div>
      <div className="mx-auto flex w-full  flex-col  items-center justify-center  overflow-hidden  bg-gradient-to-t  from-[#FDF3F0] to-[#5D020200] md:mt-[120px] md:w-[689px] md:rounded-b-[15px] md:rounded-t-[15px] lg:mt-[160px] lg:w-[1111px] lg:flex-row-reverse">
        <Image
          src="/assets/about/mobile/image-real-deal.jpg"
          alt="about hero"
          width={375}
          height={375}
          quality={100}
          className="w-full self-center object-contain p-0 md:hidden lg:hidden"
        />
        <Image
          src="/assets/about/tablet/image-real-deal.jpg"
          alt="about hero"
          width={768}
          height={375}
          quality={100}
          className="  hidden w-full self-center rounded-t-[15px] object-contain p-0 md:block lg:hidden"
        />
        <Image
          src="/assets/about/desktop/image-real-deal.jpg"
          alt="about hero"
          width={476}
          height={640}
          quality={100}
          className="hidden  object-contain p-0 lg:block "
        />
        <div className="flex w-[327px] flex-col items-center justify-center gap-[24px] py-[80px] text-center lg:w-3/4 ">
          <h1 className="w-full text-center text-[32px] font-medium leading-[36px] text-[#E7816B] lg:w-[445px] lg:text-start">
            The real deal
          </h1>
          <p className="w-full text-center text-[15px]  leading-6 lg:w-[445px] lg:text-start">
            As strategic partners in our clients businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="w-full text-center text-[15px]  leading-6 lg:w-[445px] lg:text-start">
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
