import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { Share2 } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[url(/assets/images/landing/h-bg.png)] bg-no-repeat bg-cover pb-[80px]">
      <Navbar />
      <div className="container isolate mx-auto px-6 pt-10">
        <div className="flex h-full flex-col items-center">
          <span className="border-white text-white p-[8px_15px] border rounded-full text-sm font-medium !font-['Gilroy'] flex justify-center items-center sm:mb-[70px] mb-[40px]">
            Coming Soon!
          </span>
          <h2 className="text-white !font-['Gilroy'] font-medium md:text-[70px] text-5xl mb-[20px] text-center">
            A World of Balance{" "}
          </h2>
          <p className="text-white lg:text-[20px] text-base !font-['Gilroy'] font-medium text-center max-w-[517px] mx-auto">
            A new and refreshing wellness brand inspiring you to lead a happier
            and more balanced life.
          </p>
          <button className="bg-white rounded-[70px] md:my-[77px] my-[56px] md:max-w-[309px] max-w-[260px] w-full font-medium md:h-[72px] h-[60px] md:text-2xl text-lg cursor-pointer mx-auto sm:block hidden">
            Get Started Now
          </button>
          <div className="sm:hidden block mt-6">
            <div className="grid grid-cols-2 items-center gap-[20px]">
              <div className="border-r-2 border-r-white pr-[20px]">
                <h2 className="text-[16px] font-medium !font-['Gilroy'] text-white text-center">
                  Use code
                </h2>
                <button className="mt-[10px] rounded-full bg-[#3A3A3B] px-[13px] pt-[6px] pb-[4px] text-[16px] font-medium !font-['Gilroy'] text-white">
                  PEACE369
                </button>
              </div>
              <div className="">
                <h2 className="text-[16px] font-medium !font-['Gilroy'] text-white text-center w-full max-w-[100px]">
                  Download
                </h2>
                <button className="mt-[10px]  border border-[#3A3A3B] rounded-[4.08px] px-[8.25px] py-[4.08px]  !font-['Gilroy'] flex items-center gap-[7px]">
                  <Image
                    src={"/assets/images/landing/svg/Apple.svg"}
                    alt="app"
                    width={15.05}
                    height={18.49}
                  />
                  <div>
                    <p className="font-medium text-[8.17px] leading-[10px] mb-[0.82px]">
                      Download in the
                    </p>
                    <h2 className="text-[11.43px] font-semibold leading-[10px]">
                      App Store
                    </h2>
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-[30px] flex items-center gap-[5px] justify-center">
              <Share2
                strokeWidth={2.75}
                className="text-[#3A3A3B] size-[15px] "
              />

              <p className="text-[16px] font-medium !font-['Gilroy'] text-[#3A3A3B]">
                Share with friends
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:mt-20 mt-10 flex h-[500px] w-full justify-center overflow-hidden lg:h-[650px] xl:h-[700px]">
        <div className="flex justify-center items-center absolute gap-[20px] lg:gap-[20px] xl:gap-[70px]">
          <Image
            src={"/assets/images/landing/h-phone-1.png"}
            alt="h-phone-1"
            width={326}
            height={665}
            className="h-auto w-full max-w-[230px] lg:max-w-[300px] xl:max-w-[326px]"
          />
          <Image
            src={"/assets/images/landing/h-phone-2.png"}
            alt="h-phone-2"
            width={326}
            height={665}
            className="h-auto w-full max-w-[230px] lg:max-w-[300px] xl:max-w-[326px]"
          />
          <Image
            src={"/assets/images/landing/h-phone-3.png"}
            alt="h-phone-3"
            width={326}
            height={665}
            className="h-auto w-full max-w-[230px] lg:max-w-[300px] xl:max-w-[326px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
