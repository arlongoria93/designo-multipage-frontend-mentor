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
      <div className="flex flex-col lg:flex-row-reverse lg:gap-[30px] items-center justify-center mx-auto">
        <LocationGPS loc={loc} />
        <div className="flex flex-col lg:flex-row lg:w-[730px]   h-[326px]  from-[#FDF3F0] to-[#5D020200] bg-[#fdf3f0] bg-[linear-gradient(#fdf3f0,_#fdf3f0)]  items-center  justify-center  mx-auto md:rounded-b-[15px] w-full  md:rounded-t-[15px]  overflow-hidden ">
          <div className="flex flex-col w-[327px] gap-[24px] lg:w-3/4 text-center items-center justify-center py-[80px] ">
            <h1 className="text-[32px] leading-[36px] font-medium text-center text-[#E7816B] w-full lg:w-[445px] lg:text-start">
              {name}
            </h1>
            <div className="flex flex-col  lg:flex-row lg:self-start justify-start">
              <div className="flex flex-col ">
                <p className="w-[327px] text-[15px] leading-6 text-center lg:text-start font-bold">
                  Designo {locTag} Office{" "}
                </p>

                <p className="w-[327px] text-[15px] leading-6 text-center  lg:text-start">
                  {address1}
                </p>
                <p className="w-[327px] text-[15px] leading-6 text-center  lg:text-start">
                  {address2}
                </p>
              </div>
              <div>
                <p className="w-[327px] text-[15px] leading-6 text-center lg:w-[445px] lg:text-start font-bold">
                  Contact
                </p>
                <p className="w-[327px] text-[15px] leading-6 text-center lg:w-[445px] lg:text-start">
                  P : {contact}
                </p>
                <p className="w-[327px] text-[15px] leading-6 text-center lg:w-[445px] lg:text-start">
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
      <div className="flex flex-col lg:flex-row lg:gap-[30px] items-center justify-center mx-auto">
        <LocationGPS loc={loc} />
        <div className="flex flex-col lg:flex-row lg:w-[730px]  bg-gradient-to-t h-[326px]  from-[#FDF3F0] to-[#5D020200]  items-center  justify-center  mx-auto md:rounded-b-[15px] w-full  md:rounded-t-[15px]  overflow-hidden ">
          <div className="flex flex-col w-[327px] gap-[24px] lg:w-3/4 text-center items-center justify-center py-[80px] ">
            <h1 className="text-[32px] leading-[36px] font-medium text-center text-[#E7816B] w-full lg:w-[445px] lg:text-start">
              {name}
            </h1>
            <div className="flex flex-col">
              <p className="w-[327px] text-[15px] leading-6 text-center lg:w-[445px] lg:text-start font-bold">
                Designo {locTag} Office
              </p>
              <p className="w-[327px] text-[15px] leading-6 text-center lg:w-[445px] lg:text-start">
                {address1}
              </p>
              <p className="w-[327px] text-[15px] leading-6 text-center lg:w-[445px] lg:text-start">
                {address2}
              </p>
            </div>
            <div>
              <p className="w-[327px] text-[15px] leading-6 text-center lg:w-[445px] lg:text-start font-bold">
                Contact
              </p>
              <p className="w-[327px] text-[15px] leading-6 text-center lg:w-[445px] lg:text-start">
                P : {contact}
              </p>
              <p className="w-[327px] text-[15px] leading-6 text-center lg:w-[445px] lg:text-start">
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
