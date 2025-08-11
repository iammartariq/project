import React from "react";
import Image from "next/image";

const Explainer = () => {
   return (
      <div>
         <div className="mx-auto flex h-full max-w-[340px] flex-col items-center gap-4 md:max-w-[550px] lg:max-w-[860px] xl:max-w-[900px] xl:gap-10 md:py-[60px] py-[40px_0]">
            <div className="flex flex-col items-center justify-center gap-5">
               <Image
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
                  src={"/assets/images/landing/svg/play.svg"}
                  alt="play"
                  width={54}
                  height={54}
               />
               <h1 className="text-[#3A3A3B] !font-['Gilroy'] text-3xl font-[600] md:text-4xl lg:text-5xl xl:text-6xl">
                  Renew<span className="text-[#3b3a3acc]">Me</span> Explainer
               </h1>
            </div>
            <Image
               className="cursor-pointer transition-all duration-150 ease-in-out hover:brightness-90 shadow-2xl rounded-[30px] md:rounded-[65px]"
               src={"/assets/images/landing/renewme-explainer-thumbnail.png"}
               alt="RenewMe Explainer Thumbnail"
               width={1120}
               height={473}
               priority
            />
         </div>
      </div>
   );
};

export default Explainer;
