import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

const Profile = () => {
   return (
      <ProtectedRoute>
         <div className="flex flex-col gap-[47px]">
            <Link href="/profile/manage-subscription" className="w-full">
               <div className="bg-white/14 rounded-4xl pl-[52px] pr-[39px] py-[25px] flex justify-between items-center gap-2 w-full md:min-w-[703px] cursor-pointer">
                  <h3 className="text-white text-[24px] font-medium leading-[29px]">
                     Manage Subscription
                  </h3>
                  <ChevronRight size={28} color="#ffffff" />
               </div>
            </Link>

            <Link href="/profile/changed-password" className="w-full">
               <div className="bg-white/14 rounded-4xl pl-[52px] pr-[39px] py-[25px] flex justify-between items-center gap-2 w-full md:min-w-[703px] cursor-pointer">
                  <h3 className="text-white text-[24px] font-medium leading-[29px]">
                     Change Password
                  </h3>
                  <ChevronRight size={28} color="#ffffff" />
               </div>
            </Link>

            <Link href="/profile/account-details" className="w-full">
               <div className="bg-white/14 rounded-4xl pl-[52px] pr-[39px] py-[25px] flex justify-between items-center gap-2 w-full md:min-w-[703px] cursor-pointer">
                  <h3 className="text-white text-[24px] font-medium leading-[29px]">
                     Account Details
                  </h3>
                  <ChevronRight size={28} color="#ffffff" />
               </div>
            </Link>

            {/* Logout without link - maybe handle with onClick */}
            <div
               className="bg-white/14 rounded-4xl pl-[52px] pr-[39px] py-[25px] flex justify-between items-center gap-2 w-full md:min-w-[703px] cursor-pointer"
               //    onClick={handleLogout} // replace with your logout handler
            >
               <h3 className="text-white text-[24px] font-medium leading-[29px]">
                  Logout
               </h3>
               <ChevronRight size={28} color="#ffffff" />
            </div>
         </div>

         <div className="mt-[55px]">
            <p className="text-[22px] text-white/78 leading-[26px] text-center">
               <span className="pr-[14px]">Support</span>{" "}
               <span className="border-l-2 border-l-white/78 pl-[16px]">
                  Terms
               </span>
            </p>
         </div>
      </ProtectedRoute>
   );
};

export default Profile;
