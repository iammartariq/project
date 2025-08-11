import React from "react";
import Image from "next/image";

const SkillfulLiving = () => {
   return (
      <div>
         <div className="md:py-[80px] py-[40px] relative">
            <div className="max-w-[1120px] mx-auto">
               <div className="flex justify-center">
                  <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(238,161,90,0.2)0%,rgba(243,243,243,0)80.42%)] max-w-[927px] max-h-[927px] w-full h-full absolute mx-auto"></div>
               </div>
               <div className="flex md:flex-row flex-col md:items-start items-center xl:justify-between justify-center md:gap-4 relative z-[1]">
                  <Image
                     className="mt-[180px] max-w-[230px] lg:max-w-[300px] xl:max-w-[326px] md:block hidden"
                     src={"/assets/images/landing/s2-phone-1.png"}
                     width={326}
                     height={665}
                     alt="s1-phone-1"
                  />
                  <Image
                     className="md:mt-[90px] max-w-[230px] lg:max-w-[300px] xl:max-w-[326px]"
                     src={"/assets/images/landing/s2-phone-2.png"}
                     width={326}
                     height={665}
                     alt="s1-phone-2"
                  />
                  <div className="flex flex-col items-center">
                     <Image
                        className="max-w-[230px] lg:max-w-[300px] xl:max-w-[326px] md:block hidden"
                        src={"/assets/images/landing/s2-phone-3.png"}
                        width={326}
                        height={665}
                        alt="s1-phone-3"
                     />
                     <div className="flex flex-col items-center w-[270px] md:w-[200px] md:mt-[90px] mt-[40px] lg:w-[250px] xl:w-[314px]">
                        <Image
                           src={"/assets/images/landing/svg/s2-info.svg"}
                           alt="s2-info"
                           width={50}
                           height={50}
                           className="h-[33px] w-[auto] lg:h-[48px]"
                        />
                        <p className="text-center !font-['Gilroy'] text-2xl font-medium text-[#3A3A3B] md:text-xl lg:pt-[8px] lg:text-3xl md:mt-5 mt-2">
                           Skillful Living
                        </p>
                        <p className="text-justify !font-['Gilroy'] text-sm font-[400] text-[#3A3A3B] md:text-base lg:text-[20px] mt-2">
                           Uncover the perfect coping skills and daily habits
                           tailored to meet your unique balance needs, guiding
                           you toward becoming the best version of yourself!
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SkillfulLiving;
