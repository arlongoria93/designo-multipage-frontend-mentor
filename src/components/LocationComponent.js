"use client";
import React from "react";
import dynamic from "next/dynamic";
const LocationGPS = dynamic(() => import("./LocationGPS"), {
  ssr: false,
});

const LocationComponent = ({
  loc,
  name,
  locTag,
  address1,
  address2,
  email,
  contact,
  reverse,
}) => {
  if (reverse === true) {
    return (
      <div className="mx-auto flex w-full flex-col items-center lg:flex-row-reverse  lg:gap-[30px]">
        <LocationGPS loc={loc} />
        <div className="mx-auto flex h-[320px] w-full   flex-col  items-center justify-center overflow-hidden bg-[#fdf3f0]  bg-[linear-gradient(#fdf3f0,_#fdf3f0)]  from-[#FDF3F0]  to-[#5D020200] md:rounded-t-[15px] lg:w-[730px]  lg:flex-row  lg:rounded-b-[15px] ">
          <div className="flex w-[327px] flex-col items-center justify-center gap-[24px] text-center  md:w-[540px]  ">
            <h1 className="w-full text-center text-[32px] font-medium leading-[36px] text-[#E7816B] md:text-start">
              {name}
            </h1>
            <div className="flex w-full flex-col items-center justify-center gap-[24px]  md:flex-row md:justify-start ">
              <div className="flex w-[255px] flex-col">
                <p className=" text-center text-[15px] font-bold leading-6 md:text-start">
                  Designo {locTag} Office{" "}
                </p>

                <p className=" text-center text-[15px] leading-6  md:text-start">
                  {address1}
                </p>
                <p className="text-center text-[15px] leading-6  md:text-start">
                  {address2}
                </p>
              </div>
              <div className="flex w-[255px] flex-col">
                <p className=" text-center text-[15px] font-bold leading-6 md:text-start">
                  Contact
                </p>
                <p className=" text-center text-[15px] leading-6  md:text-start">
                  P : {contact}
                </p>
                <p className=" text-center text-[15px] leading-6  md:text-start">
                  M :{" "}
                  <a href="mailto:contact@designo.co" className="">
                    {email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-auto flex w-full flex-col items-center lg:flex-row  lg:gap-[30px]">
        <LocationGPS loc={loc} />
        <div className="mx-auto flex h-[320px] w-full   flex-col  items-center justify-center overflow-hidden bg-[#fdf3f0]  bg-[linear-gradient(#fdf3f0,_#fdf3f0)]  from-[#FDF3F0]  to-[#5D020200] lg:w-[730px] lg:flex-row  lg:rounded-b-[15px]  lg:rounded-t-[15px] ">
          <div className="flex w-[327px] flex-col items-center justify-center gap-[24px] text-center  md:w-[540px]  ">
            <h1 className="w-full text-center text-[32px] font-medium leading-[36px] text-[#E7816B] md:text-start">
              {name}
            </h1>
            <div className="flex w-full flex-col items-center justify-center gap-[24px]  md:flex-row md:justify-start ">
              <div className="flex w-[255px] flex-col">
                <p className=" text-center text-[15px] font-bold leading-6 md:text-start">
                  Designo {locTag} Office{" "}
                </p>

                <p className=" text-center text-[15px] leading-6  md:text-start">
                  {address1}
                </p>
                <p className="text-center text-[15px] leading-6  md:text-start">
                  {address2}
                </p>
              </div>
              <div className="flex w-[255px] flex-col">
                <p className=" text-center text-[15px] font-bold leading-6 md:text-start">
                  Contact
                </p>
                <p className=" text-center text-[15px] leading-6  md:text-start">
                  P : {contact}
                </p>
                <p className=" text-center text-[15px] leading-6  md:text-start">
                  M :{" "}
                  <a href="mailto:contact@designo.co" className="">
                    {email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LocationComponent;
