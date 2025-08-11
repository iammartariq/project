import React from "react";
import Image from "next/image";

const SleepEscape = () => {
   return (
      <div>
         <div className="py-[80px] relative bg-[url(/assets/images/landing/s6-bg.png)] bg-cover">
            <div className="max-w-[1120px] mx-auto">
               <div className="flex md:flex-row flex-col md:items-start items-center xl:justify-between justify-center md:gap-4 relative z-[1]">
                  <Image
                     className="mt-[220px] max-w-[230px] lg:max-w-[300px] xl:max-w-[326px] md:block hidden"
                     src={"/assets/images/landing/s4-phone-2.png"}
                     width={326}
                     height={665}
                     alt="s1-phone-2"
                  />
                  <div className="flex flex-col items-center">
                     <Image
                        src={"/assets/images/landing/s4-phone-1.png"}
                        width={326}
                        height={665}
                        alt="s3-phone-1"
                        className="max-w-[230px] lg:max-w-[300px] xl:max-w-[326px]"
                     />
                     <div className="flex flex-col items-center w-[270px] md:w-[200px] lg:mt-[90px] mt-[40px] lg:w-[250px] xl:w-[314px]">
                        <Image
                           src={"/assets/images/landing/svg/s4-info.svg"}
                           alt="s5-info"
                           width={50}
                           height={50}
                        />
                        <p className="text-center !font-['Gilroy'] max-w-[220px] text-2xl font-medium text-white md:text-xl lg:pt-[8px] lg:text-3xl mt-5">
                           Sleep Escape
                        </p>
                        <p className="text-justify !font-['Gilroy'] text-sm font-[400] text-white md:text-base lg:text-[20px] mt-2">
                           Embark on serene bedtime journeys crafted to nurture
                           your well-being, fostering relaxation, imagination,
                           and positive beliefs as you peacefully rest your
                           mind.
                        </p>
                     </div>
                  </div>
                  <Image
                     className="mt-[120px] max-w-[230px] lg:max-w-[300px] xl:max-w-[326px] md:block hidden"
                     src={"/assets/images/landing/s4-phone-3.png"}
                     width={326}
                     height={665}
                     alt="s3-phone-3"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default SleepEscape;
