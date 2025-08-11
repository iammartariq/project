import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
   return (
     <div className="bg-[#00000054]  h-screen overflow-auto lg:block hidden">
       <div className="py-[47px] px-8.5">
         <Image
           src={"/assets/images/renewme-home/svg/logo.svg"}
           alt="logo"
           width={193}
           height={36}
         />
       </div>
       <div>
         <Link
           href={"/renewme-home"}
           className="p-[21px_46px] flex items-center gap-5.5"
         >
           <Image
             src={"/assets/images/renewme-home/svg/home.svg"}
             alt="home"
             width={54}
             height={54}
           />
           <span className="text-[24px] text-white font-normal">Home</span>
         </Link>
         <Link
           href={"/balance"}
           className="p-[21px_46px] flex items-center gap-5.5"
         >
           <Image
             src={"/assets/images/renewme-home/svg/side-menu.svg"}
             alt="home"
             width={54}
             height={54}
           />
           <span className="text-[24px] text-white font-normal"> Balance</span>
         </Link>
         <Link
           href={"/sleep"}
           className="p-[21px_46px] flex items-center gap-5.5"
         >
           <Image
             src={"/assets/images/renewme-home/svg/side-menu.svg"}
             alt="home"
             width={54}
             height={54}
           />
           <span className="text-[24px] text-white font-normal">Sleep</span>
         </Link>
         <Link
           href={"/meditation"}
           className="p-[21px_46px] flex items-center gap-5.5"
         >
           <Image
             src={"/assets/images/renewme-home/svg/side-menu.svg"}
             alt="home"
             width={54}
             height={54}
           />
           <span className="text-[24px] text-white font-normal">
             Meditation
           </span>
         </Link>
         <Link
           href={"/affirmations"}
           className="p-[21px_46px] flex items-center gap-5.5"
         >
           <Image
             src={"/assets/images/renewme-home/svg/side-menu.svg"}
             alt="home"
             width={54}
             height={54}
           />
           <span className="text-[24px] text-white font-normal">
             Affirmations
           </span>
         </Link>
         <Link
           href={"/confidence"}
           className="p-[21px_46px] flex items-center gap-5.5"
         >
           <Image
             src={"/assets/images/renewme-home/svg/side-menu.svg"}
             alt="home"
             width={54}
             height={54}
           />
           <span className="text-[24px] text-white font-normal">
             Confidence
           </span>
         </Link>
         <Link
           href={"/soulscape"}
           className="p-[21px_46px] flex items-center gap-5.5"
         >
           <Image
             src={"/assets/images/renewme-home/svg/side-menu.svg"}
             alt="home"
             width={54}
             height={54}
           />
           <span className="text-[24px] text-white font-normal">Soulscape</span>
         </Link>
         <Link
           href={"/music"}
           className="p-[21px_46px] flex items-center gap-5.5"
         >
           <Image
             src={"/assets/images/renewme-home/svg/side-menu.svg"}
             alt="home"
             width={54}
             height={54}
           />
           <span className="text-[24px] text-white font-normal">Music</span>
         </Link>
         <Link
           href={"/profile"}
           className="p-[21px_46px] flex items-center gap-5.5"
         >
           <Image
             src={"/assets/images/renewme-home/svg/profile.svg"}
             alt="home"
             width={54}
             height={54}
           />
           <span className="text-[24px] text-white font-normal">Profile</span>
         </Link>
         <Link
           href={"/logout"}
           className="p-[21px_46px] flex items-center gap-5.5"
         >
           <Image
             src={"/assets/images/renewme-home/svg/logout.svg"}
             alt="home"
             width={54}
             height={54}
           />
           <span className="text-[24px] text-white font-normal">Logout</span>
         </Link>
       </div>
     </div>
   );
};

export default Sidebar;
