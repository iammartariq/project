import React, { useState } from "react";
import Image from "next/image";
// import Loading from "./Loading";
import SignUpForm from "./SignUpForm";

const CreateFree = () => {
   const [isSignupModelOpen, setIsSignupModelOpen] = useState(false);
   return (
      <div className="order-1 lg:order-2 flex items-center lg:w-1/2 2xl:w-auto">
         <div className="bg-[#ffffff] rounded-[28px] pt-[50px] pb-[23px] xl:py-[60px] 2xl:py-[126px] px-[23px] xl:px-[30px] 2xl:px-[47px] flex flex-col gap-[30px] sm:gap-[41px]">
            <div className="flex flex-col items-center gap-[5px] sm:gap-[12px] xl:gap-[17px]">
               <div className="text-[20px] sm:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold leading-[28px] text-center">
                  Create a free account to save your preferences
               </div>   
               <div className="sm:text-[20px] xl:leading-[28px]">
                  Have a Renewme account?{" "}
                  <span className="text-[#0066FF] cursor-pointer underline">
                     Log in
                  </span>
               </div>
            </div>
            <div
               // onClick={() => setIsSignupModelOpen(true)}
               className="bg-[#A850B2] rounded-full text-[#ffffff] py-[13px] xl:py-[16px] 2xl:py-[21.5px] flex items-center justify-center gap-[20px] cursor-pointer"
            >
               <div className="">
                  <Image
                     src={"/assets/images/renewme-home/svg/mail.svg"}
                     alt="mail"
                     width={24}
                     height={24}
                  />
               </div>
               <div className="text-[15px] sm:text-[20px] xl:text-[22px] font-semibold xl:leading-[26px]">
                  Continue with Email
               </div>
            </div>
            <div className="text-[15px] xl:text-[17px] xl:leading-[24px] text-center">
               By clicking Continue, you agree to our{" "}
               <span className="text-[#0066FF] cursor-pointer underline">
                  Terms
               </span>{" "}
               and acknowledge that you have read our{" "}
               <span className="text-[#0066FF] cursor-pointer underline">
                  Privacy Policy
               </span>
               , which explains how to opt out of offers and promos
            </div>
         </div>
         {isSignupModelOpen && (
            <SignUpForm setIsSignupModelOpen={setIsSignupModelOpen} />
         )}
      </div>
   );
};

export default CreateFree;

// <Loading setIsSignupModelOpen={setIsSignupModelOpen} />
