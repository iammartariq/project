import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";
import Image from "next/image";
const EmailContinueModal = ({
   isContinueModalOpen,
   setIsContinueModalOpen,
   form
}) => {
   return (
      <Dialog
         open={isContinueModalOpen}
         onClose={setIsContinueModalOpen}
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
                     onClick={() => setIsContinueModalOpen(false)}
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
                        <div className="w-[64px] h-[64px] border-[3px] border-white rounded-full flex items-center justify-center mx-auto mb-[18px] mt-[36px]">
                           <Image
                              src="/assets/images/renewme-home/svg/mail2.svg"
                              alt="mail"
                              className="w-[35px] h-[35px]"
                              width={35}
                              height={35}
                           />
                        </div>

                        {/* Title */}
                        <h2 className="text-xl md:text-[24px] text-white font-semibold text-center">
                           Check Your Email
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-[20px] mt-[43px] font-medium mb-6 text-center w-full max-w-[452px] mx-auto text-white">
                           Please check the email address {form.email} for instructions to reset your password.
                        </p>

                        {/* Back Button */}
                        <button
                           onClick={() => {
                              setIsContinueModalOpen(false)
                           }}
                           className="w-full border border-white text-white py-[14px] rounded-full text-base md:text-[20px] font-medium cursor-pointer"
                        >
                           Back
                        </button>
                     </div>
                  </div>
               </DialogPanel>
            </div>
         </div>
      </Dialog>
   );
};

export default EmailContinueModal;
