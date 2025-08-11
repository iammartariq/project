import React from "react";
import Image from "next/image";

const SetGoals = () => {
   return (
      <div className="md:py-[80px] py-[40px] relative">
         <div className="max-w-[1120px] mx-auto">
            <div className="flex justify-center">
               <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(238,161,90,0.5)0%,rgba(243,243,243,0)80.42%)] max-w-[927px] max-h-[927px] w-full h-full absolute mx-auto"></div>
            </div>
            <div className="flex md:flex-row flex-col md:items-start items-center xl:justify-between justify-center md:gap-4 relative z-[1]">
               <Image
                  className="mt-[220px] max-w-[230px] lg:max-w-[300px] xl:max-w-[326px] md:block hidden"
                  src={"/assets/images/landing/s5-phone-2.png"}
                  width={326}
                  height={665}
                  alt="s1-phone-2"
               />
               <div className="flex flex-col items-center">
                  <Image
                     src={"/assets/images/landing/s5-phone-1.png"}
                     width={326}
                     height={665}
                     alt="s3-phone-1"
                     className="max-w-[230px] lg:max-w-[300px] xl:max-w-[326px]"
                  />
                  <div className="flex flex-col items-center w-[270px] md:w-[200px] lg:mt-[90px] mt-[40px] lg:w-[250px] xl:w-[314px]">
                     <Image
                        src={"/assets/images/landing/svg/s5-info.svg"}
                        alt="s5-info"
                        width={50}
                        height={50}
                     />
                     <p className="text-center !font-['Gilroy'] max-w-[220px] text-2xl font-medium text-[#3A3A3B] md:text-xl lg:pt-[8px] lg:text-3xl mt-5">
                        Set Goals & Track Progress
                     </p>
                     <p className="text-justify !font-['Gilroy'] text-sm font-[400] text-[#3A3A3B] md:text-base lg:text-[20px] mt-2">
                        Spend a minute each day tracking small yet meaningful
                        steps on your wellness journey. Earn sparkles and unlock
                        rewards and wisdom to inspire continual progress towards
                        a state of peace and greater life balance.
                     </p>
                  </div>
               </div>
               <Image
                  className="mt-[120px] max-w-[230px] lg:max-w-[300px] xl:max-w-[326px] md:block hidden"
                  src={"/assets/images/landing/s5-phone-3.png"}
                  width={326}
                  height={665}
                  alt="s3-phone-3"
               />
            </div>
         </div>
      </div>
   );
};

export default SetGoals;
