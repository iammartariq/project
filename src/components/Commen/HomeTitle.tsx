import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const HomeTitle = ({ text, link = "/", swiperRef }) => {
   return (
      <div className="flex flex-wrap justify-between items-center">
         <div className="text-[28px] font-semibold">{text}</div>
         <div className="flex items-center gap-[27px]">
            <div className=" md:block hidden">
               <div className="flex items-center space-x-4">
                  <button
                     onClick={() => swiperRef?.current?.slidePrev()}
                     className="p-2 rounded-full bg-[#042638] transition ease-in-out duration-300"
                  >
                     <ChevronLeft className="text-white text-[16px]" />
                  </button>
                  <button
                     onClick={() => swiperRef?.current?.slideNext()}
                     className="p-2 rounded-full bg-[#042638] transition ease-in-out duration-300"
                  >
                     <ChevronRight className="text-white text-[16px]" />
                  </button>
               </div>
            </div>

            <div className="flex items-center justify-center  gap-[8px]">
               <div className="text-[24px] font-medium">See All</div>
               <Link href={link}>
                  <ChevronRight size={20} />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default HomeTitle;
