import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { X } from "lucide-react";
import ConnectAudience from "../signup/ConnectAudience";
import LoginForm from "./LoginForm";
import TermsModal from "../terms/TermsModal";
import PrivacyModal from "../privacy/PrivacyModal";

const LoginAuth = ({
   isAuthModalOpen,
   setIsAuthModalOpen,
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
   isForgotModalOpen,
   setIsForgotModalOpen,
   isContinueModalOpen,
   setIsContinueModalOpen,
   isLoginModalOpen,
   setIsLoginModalOpen,
}) => {
   const [isTermsOpen, setIsTermsOpen] = useState(false);
   const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

   return (
      <div>
         {/* Main Auth Modal */}
         <Transition appear show={isAuthModalOpen} as={Fragment}>
            <Dialog
               as="div"
               className="relative z-10"
               onClose={setIsAuthModalOpen}
            >
               <div className="fixed inset-0 bg-black/50" />

               <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                     <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[1563px] bg-[#F8F8F8]">
                        <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
                           <div className="flex flex-col lg:flex-row items-center justify-between gap-[25px] lg:gap-[20px] 2xl:gap-[32.5px] py-[66px] lg:py-[0px] px-[23px] 2xl:px-[0px] 2xl:pl-[92px] 2xl:pr-[98px] h-full 2xl:h-auto">
                              <button
                                 onClick={() => {
                                    setIsAuthModalOpen(false);
                                    setOpen(false);
                                 }}
                                 className="absolute top-[17px] lg:top-[24px] right-[17px] lg:right-[29px] bg-[#D9D9D9] rounded-full size-[24px] lg:size-[30px] xl:size-[50px] flex justify-center items-center cursor-pointer"
                              >
                                 <X className="text-black size-[14px] lg:size-[18px] xl:size-auto" />
                              </button>

                              <ConnectAudience />

                              <div className="order-1 lg:order-2 flex items-center lg:w-1/2 2xl:w-auto">
                                 <div className="bg-white rounded-[28px] pt-[50px] pb-[23px] xl:py-[60px] 2xl:py-[126px] px-[23px] xl:px-[30px] 2xl:px-[47px] flex flex-col gap-[30px] sm:gap-[41px]">
                                    <div className="flex flex-col items-center gap-[5px] sm:gap-[12px] xl:gap-[17px]">
                                       <div className="text-[20px] sm:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold leading-[28px] text-center">
                                          Create a free account to save your
                                          preferences
                                       </div>
                                       <div className="sm:text-[20px] xl:leading-[28px]">
                                          Don’t have a Renewme account?{" "}
                                          <span
                                             onClick={() => {
                                                setAuth(true);
                                                setIsAuthModalOpen(false);
                                                setTermsIsChecked(true);
                                             }}
                                             className="text-[#0066FF] cursor-pointer underline"
                                          >
                                             Sign up
                                          </span>
                                       </div>
                                    </div>

                                    <button
                                       onClick={() => {
                                          setIsLoginModalOpen(true);
                                          setTermsIsChecked(true);
                                       }}
                                       className="bg-[#A850B2] rounded-full text-white py-[13px] xl:py-[16px] 2xl:py-[21.5px] flex items-center justify-center gap-[20px] cursor-pointer"
                                    >
                                       <Image
                                          src="/assets/images/renewme-home/svg/mail.svg"
                                          alt="mail"
                                          width={24}
                                          height={24}
                                       />
                                       <span className="text-[15px] sm:text-[20px] xl:text-[22px] font-semibold xl:leading-[26px]">
                                          Sign In with Email
                                       </span>
                                    </button>

                                    <div className="text-[15px] xl:text-[17px] xl:leading-[24px] text-center">
                                       By clicking Continue, you agree to our{" "}
                                       <span
                                          className="text-[#0066FF] cursor-pointer underline"
                                          onClick={() => setIsTermsOpen(true)}
                                       >
                                          Terms
                                       </span>{" "}
                                       and acknowledge that you have read our{" "}
                                       <span
                                          className="text-[#0066FF] cursor-pointer underline"
                                          onClick={() => setIsPrivacyOpen(true)}
                                       >
                                          Privacy Policy
                                       </span>
                                       , which explains how to opt out of offers
                                       and promos
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Dialog.Panel>
                  </div>
               </div>
            </Dialog>
         </Transition>

         {/* Login Form Modal */}
         <LoginForm
            isLoginModalOpen={isLoginModalOpen}
            setIsLoginModalOpen={setIsLoginModalOpen}
            setIsSignupModalOpen={setIsSignupModalOpen}
            setIsAuthModalOpen={setIsAuthModalOpen}
            isForgotModalOpen={isForgotModalOpen}
            setIsForgotModalOpen={setIsForgotModalOpen}
            isContinueModalOpen={isContinueModalOpen}
            setIsContinueModalOpen={setIsContinueModalOpen}
            setAuth={setAuth}
            setOpen={setOpen}
            handleLogin={handleLogin}
            handleResetPassword={handleResetPassword}
            handleChange={handleChange}
            form={form}
            errors={errors}
            loading={loading}
            termsIsChecked={termsIsChecked}
            setTermsIsChecked={setTermsIsChecked}
         />

         {/* Terms Modal */}
         {/* <Transition appear show={isTermsOpen} as={Fragment}>
            <Dialog
               as="div"
               className="relative z-50"
               onClose={() => setIsTermsOpen(false)}
            >
               <div className="fixed inset-0 bg-black/50" />
               <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                  <Dialog.Panel className="bg-white rounded-xl p-6 relative w-full max-w-lg max-h-[80vh] overflow-y-auto">
                     <button
                        onClick={() => setIsTermsOpen(false)}
                        className="absolute top-3 right-3 text-gray-700 hover:text-black"
                     >
                        <X size={20} />
                     </button>
                     <h2 className="text-xl font-bold mb-4">
                        Terms & Conditions
                     </h2>
                     <p className="text-sm text-gray-700">
                        These are your platform’s terms and conditions. Please
                        read carefully.
                     </p>
                  </Dialog.Panel>
               </div>
            </Dialog>
         </Transition> */}

         {/* Privacy Policy Modal
         <Transition appear show={isPrivacyOpen} as={Fragment}>
            <Dialog
               as="div"
               className="relative z-50"
               onClose={() => setIsPrivacyOpen(false)}
            >
               <div className="fixed inset-0 bg-black/50" />
               <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                  <Dialog.Panel className="bg-white rounded-xl p-6 relative w-full max-w-lg max-h-[80vh] overflow-y-auto">
                     <button
                        onClick={() => setIsPrivacyOpen(false)}
                        className="absolute top-3 right-3 text-gray-700 hover:text-black"
                     >
                        <X size={20} />
                     </button>
                     <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
                     <p className="text-sm text-gray-700">
                        This privacy policy explains how your information is
                        used, stored, and protected.
                     </p>
                  </Dialog.Panel>
               </div>
            </Dialog>
         </Transition> */}
         <TermsModal
            isOpen={isTermsOpen}
            onClose={() => setIsTermsOpen(false)}
         />
         <PrivacyModal
            isOpen={isPrivacyOpen}
            onClose={() => setIsPrivacyOpen(false)}
         />
      </div>
   );
};

export default LoginAuth;
