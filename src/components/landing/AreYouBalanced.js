import React from "react";
import Image from "next/image";

const AreYouBalanced = () => {
   return (
      <div className="md:py-[80px] relative ">
         <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(238,161,90,0.5)0%,rgba(243,243,243,0)80.42%)] xl:max-w-[1000px] md:max-w-[700px] max-w-[500px] xl:max-h-[1000px] md:max-h-[700px] max-h-[500px] w-full h-full absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"></div>
         <div className="max-w-[1120px] mx-auto relative z-[1]">
            <div className="flex md:flex-row flex-col md:items-start items-center xl:justify-between justify-center md:gap-4">
               <Image
                  className="mt-[180px] md:block hidden max-w-[230px] lg:max-w-[300px] xl:max-w-[326px]"
                  src={"/assets/images/landing/s1-phone-1.png"}
                  width={326}
                  height={665}
                  alt="s1-phone-1"
               />
               <Image
                  className="md:mt-[90px] mt-[40px] max-w-[230px] lg:max-w-[300px] xl:max-w-[326px]"
                  src={"/assets/images/landing/s1-phone-2.png"}
                  width={326}
                  height={665}
                  alt="s1-phone-2"
               />
               <div className="flex flex-col items-center">
                  <Image
                     src={"/assets/images/landing/s1-phone-3.png"}
                     width={326}
                     height={665}
                     alt="s1-phone-3"
                     className="md:block hidden max-w-[230px] lg:max-w-[300px] xl:max-w-[326px]"
                  />
                  <div className="flex flex-col items-center w-[270px] md:w-[200px] md:mt-[90px] mt-[40px] lg:w-[250px] xl:w-[314px]">
                     <Image
                        src={"/assets/images/landing/svg/s1-info.svg"}
                        alt="s1-info-3"
                        width={50}
                        height={50}
                        className="h-[33px] w-[auto] lg:h-[48px]"
                     />
                     <p className="text-center !font-['Gilroy'] text-2xl font-medium text-[#3A3A3B] md:text-xl lg:pt-[8px] lg:text-3xl md:mt-5 mt-2">
                        Are You Balanced?
                     </p>
                     <p className="text-justify !font-['Gilroy'] text-sm font-[400] text-[#3A3A3B] md:text-base lg:text-[20px] mt-2">
                        Discover a simple and enjoyable test to evaluate your
                        goals and gauge your life balance. Identify your
                        strengths and weaknesses, and embark on the path to a
                        more fulfilling and joyous life!
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AreYouBalanced;
