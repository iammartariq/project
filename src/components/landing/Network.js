import React from "react";
import Image from "next/image";

const Network = () => {
   return (
      <div>
         <div className="max-w-[1029px] mx-auto flex h-full flex-col gap-8 px-6 py-10 sm:py-[60px]">
            <span className="text-center font-['Gilroy'] text-base font-[400] text-[#3A3A3B] md:text-lg lg:text-xl">
               CEO of RenewMe, Dr. Lisa Palmer is seen on the following
               networks:
            </span>
            <div className="grid grid-cols-3 grid-rows-2 items-center justify-items-center gap-10 md:grid-cols-6 md:grid-rows-1 ">
               <div className="h-[27px] lg:h-[33px] xl:h-[40px]">
                  <img
                     src={"/assets/images/landing/svg/n-cbs.svg"}
                     alt="n-img"
                     className="h-full w-auto"
                  />
               </div>
               <div className="h-[18px] lg:h-[24px] xl:h-[30px]">
                  <img
                     src={"/assets/images/landing/svg/n-nbc.svg"}
                     alt="n-img" className="h-full w-auto"
                  />
               </div>
               <div className="h-[20px] lg:h-[26px] xl:h-[32px]">
                  <img
                     src={"/assets/images/landing/svg/n-fox.svg"}
                     alt="n-img" className="h-full w-auto"
                  />
               </div>
               <div className="h-[21px] lg:h-[27px] xl:h-[34px]">
                  <img
                     src={"/assets/images/landing/svg/n-cnn.svg"}
                     alt="n-img" className="h-full w-auto"
                  />
               </div>
               <div className="h-[31px] lg:h-[37px] xl:h-[41px]">
                  <img
                     src={"/assets/images/landing/svg/n-sky.svg"}
                     alt="n-img" className="h-full w-auto"
                  />
               </div>
               <div className="h-[29px] lg:h-[35px] xl:h-[42px]">
                  <img
                     src={"/assets/images/landing/svg/n-abc.svg"}
                     alt="n-img" className="h-full w-auto"
                  />
               </div>
            </div>
         </div>

      </div>
   );
};

export default Network;
