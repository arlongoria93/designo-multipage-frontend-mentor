import React from "react";
import LocationGPS from "../LocationGPSCard/LocationGPS";
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
        <div className="mx-auto flex h-[320px] w-full   flex-col  items-center justify-center overflow-hidden bg-[#fdf3f0]  bg-[linear-gradient(#fdf3f0,_#fdf3f0)]  from-[#FDF3F0]  to-[#5D020200] md:rounded-b-[15px] md:rounded-t-[15px]  lg:w-[730px]  lg:flex-row ">
          <div className="flex w-[327px] flex-col items-center justify-center gap-[24px] py-[80px] text-center lg:w-3/4 ">
            <h1 className="w-full text-center text-[32px] font-medium leading-[36px] text-[#E7816B] lg:w-[445px] lg:text-start">
              {name}
            </h1>
            <div className="flex flex-col  justify-start lg:flex-row lg:self-start">
              <div className="flex flex-col ">
                <p className="w-[327px] text-center text-[15px] font-bold leading-6 lg:text-start">
                  Designo {locTag} Office{" "}
                </p>

                <p className="w-[327px] text-center text-[15px] leading-6  lg:text-start">
                  {address1}
                </p>
                <p className="w-[327px] text-center text-[15px] leading-6  lg:text-start">
                  {address2}
                </p>
              </div>
              <div>
                <p className="w-[327px] text-center text-[15px] font-bold leading-6 lg:w-[445px] lg:text-start">
                  Contact
                </p>
                <p className="w-[327px] text-center text-[15px] leading-6 lg:w-[445px] lg:text-start">
                  P : {contact}
                </p>
                <p className="w-[327px] text-center text-[15px] leading-6 lg:w-[445px] lg:text-start">
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
      <div className="mx-auto flex w-full flex-col items-center justify-center lg:flex-row lg:gap-[30px] ">
        <LocationGPS loc={loc} />
        <div className="mx-auto flex h-[326px] w-full   flex-col  items-center justify-center overflow-hidden bg-[#fdf3f0]  bg-[linear-gradient(#fdf3f0,_#fdf3f0)]  from-[#FDF3F0]  to-[#5D020200] md:rounded-b-[15px] md:rounded-t-[15px]  lg:w-[730px]  lg:flex-row ">
          <div className="flex w-[327px] flex-col items-center justify-center gap-[24px] py-[80px] text-center lg:w-3/4 ">
            <h1 className="w-full text-center text-[32px] font-medium leading-[36px] text-[#E7816B] lg:w-[445px] lg:text-start">
              {name}
            </h1>
            <div className="flex flex-col">
              <p className="w-[327px] text-center text-[15px] font-bold leading-6 lg:w-[445px] lg:text-start">
                Designo {locTag} Office
              </p>
              <p className="w-[327px] text-center text-[15px] leading-6 lg:w-[445px] lg:text-start">
                {address1}
              </p>
              <p className="w-[327px] text-center text-[15px] leading-6 lg:w-[445px] lg:text-start">
                {address2}
              </p>
            </div>
            <div>
              <p className="w-[327px] text-center text-[15px] font-bold leading-6 lg:w-[445px] lg:text-start">
                Contact
              </p>
              <p className="w-[327px] text-center text-[15px] leading-6 lg:w-[445px] lg:text-start">
                P : {contact}
              </p>
              <p className="w-[327px] text-center text-[15px] leading-6 lg:w-[445px] lg:text-start">
                M :{" "}
                <a href="mailto:contact@designo.co" className="">
                  {email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LocationComponent;
