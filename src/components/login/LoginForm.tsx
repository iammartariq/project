import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ForgotPasswordModal from "../forgot-password/ForgotPasswordModal";

const LoginForm = ({
   isLoginModalOpen,
   setIsLoginModalOpen,
   isForgotModalOpen,
   setIsForgotModalOpen,
   isContinueModalOpen,
   setIsContinueModalOpen,
   setAuth,
   setOpen,
   handleLogin,
   handleResetPassword,
   handleChange,
   form,
   errors,
   loading,
   termsIsChecked,
   setTermsIsChecked,
   setIsSignupModalOpen,
   setIsAuthModalOpen,
}) => {

   return (
      <>
         <Dialog
            open={isLoginModalOpen}
            onClose={setIsLoginModalOpen}
            className="relative z-10"
         >
            <DialogBackdrop
               transition
               className="fixed inset-0 bg-[rgba(0,0,0,0.5)] transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
               <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <DialogPanel
                     transition
                     className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                  >
                     <button
                        onClick={() => setIsLoginModalOpen(false)}
                        className="absolute top-4 right-[24px] z-20 bg-white hover:bg-gray-200 transition rounded-full w-8 h-8  flex items-center justify-center shadow-md"
                        aria-label="Close"
                     >
                        <X className="text-black w-4 h-4 " />
                     </button>
                     <div className="bg-[linear-gradient(180deg,#963EA0_0%,_#4D1753_100%)] md:max-w-[737px] md:w-full  ">
                        <div className="bg-[#00000070] md:px-[29px] px-[24px] md:pt-[52px] pt-[62px] pb-[97px] max-w-[372px] md:max-w-[469px] shadow-xl mx-auto">
                           <Image
                              src={
                                 "/assets/images/renewme-home/svg/logo-white2.svg"
                              }
                              alt="whitelogo"
                              className="mx-auto md:h-[35px] h-[23px]"
                              width={182}
                              height={35}
                           />
                           <div className="flex flex-col gap-[14px] md:mt-[47.11px] mt-[27px]">
                              <p className="text-white text-center text-lg md:text-[24px] font-medium">
                                 Log in to your Renewme account
                              </p>
                              <p className="text-white text-center md:text-[20px] text-base">
                                 Continue below
                              </p>
                           </div>

                           <form onSubmit={handleLogin}>
                              <div className="flex flex-col gap-[27px] md:pt-[48px] pt-[27px]">
                                 <div className="relative">
                                    <input
                                       type="email"
                                       id="email"
                                       name="email"
                                       placeholder="Enter your e-mail"
                                       value={form.email}
                                       onChange={handleChange}
                                       className="w-full py-3 px-4 md:pl-[58px] pl-[50px] md:h-[70px] h-[50px] rounded-full bg-[#00000033] border border-[#ffffff33] text-white placeholder-[#C0C0C0] focus:outline-none md:text-[22px] text-lg font-medium"
                                    />
                                    <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                       <Image
                                          src={
                                             "/assets/images/renewme-home/svg/mail2.svg"
                                          }
                                          alt="mail2"
                                          width={24}
                                          height={24}
                                          className="md:w-[24px] w-4"
                                       />
                                    </span>
                                 </div>

                                 <div className="relative">
                                    <input
                                       type="password"
                                       id="password"
                                       name="password"
                                       placeholder="Enter password..."
                                       value={form.password}
                                       onChange={handleChange}
                                       className="w-full py-3 px-4 md:pl-[58px] pl-[50px] md:h-[70px] h-[50px] rounded-full bg-[#00000033] border border-[#ffffff33] text-white placeholder-[#C0C0C0] focus:outline-none md:text-[22px] text-lg font-medium"
                                    />
                                    <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                       <Image
                                          src={
                                             "/assets/images/renewme-home/svg/lock.svg"
                                          }
                                          alt="lock"
                                          width={24}
                                          height={24}
                                          className="md:w-[24px] w-4"
                                       />
                                    </span>
                                 </div>
                              </div>
                              <div className="mt-[27px]">
                                 <button
                                    onClick={() => {
                                       setIsForgotModalOpen(true);
                                       setIsLoginModalOpen(false);
                                    }}
                                    className="text-[18px] font-medium text-white underline pl-[20px]"
                                 >
                                    Forgot Password?
                                 </button>
                              </div>
                              <button className="w-full mt-[27px] py-3 bg-white rounded-full md:text-[22px] text-lg font-semibold hover:opacity-90 transition md:h-[69px] h-[46px] flex items-center justify-center cursor-pointer">
                                 Continue
                              </button>
                           </form>
                           <p className="text-white text-[18px] font-medium text-center mt-[27px]">
                              Don’t have a Renewme account?{" "}
                              <button
                                 className="underline font-bold"
                                 onClick={() => {
                                    setIsLoginModalOpen(false);
                                    setIsAuthModalOpen(false);
                                    setAuth(true);
                                    setIsSignupModalOpen(true);
                                    setTermsIsChecked(true);
                                 }}
                              >
                                 Sign Up
                              </button>
                           </p>
                        </div>
                     </div>
                  </DialogPanel>
               </div>
            </div>
         </Dialog>
         <ForgotPasswordModal
            isForgotModalOpen={isForgotModalOpen}
            setIsForgotModalOpen={setIsForgotModalOpen}
            handleResetPassword={handleResetPassword}
            isContinueModalOpen={isContinueModalOpen}
            setIsContinueModalOpen={setIsContinueModalOpen}
            handleChange={handleChange}
            form={form}
         />
         {/* <SubscriptionModal
            isSubscriptionModalOpen={isSubscriptionModalOpen}
            setIsSubscriptionModalOpen={setIsSubscriptionModalOpen} /> */}
      </>
   );
};

export default LoginForm;
