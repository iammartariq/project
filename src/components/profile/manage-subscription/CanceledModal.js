import React from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";
const CanceledModal = ({ isCanceledModalOpen, setIsCanceledModalOpen }) => {
    return (
        <div>
            {" "}
            <Dialog
                open={isCanceledModalOpen}
                onClose={setIsCanceledModalOpen}
                className="relative z-10"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 !px-[20px]">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-[35px] bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-[803px] data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div className="bg-white  px-[55px] py-[55px]">
                                <button
                                    onClick={() => setIsCanceledModalOpen(false)}
                                    className="absolute top-[17px] lg:top-[24px] right-[17px] lg:right-[29px]  flex justify-center items-center cursor-pointer"
                                >
                                    <X className="text-black size-[14px] lg:size-[18px] xl:size-[31px]" />
                                </button>
                                <p className="text-[32px] leading-[42px] font-semibold text-black w-full max-w-[602px] sm:mt-[46px] mt-[30px] sm:text-left text-center">
                                    Your subscription is canceled.
                                </p>
                                <p className="mt-[24px] text-[20px] text-black leading-[24px] sm:text-left text-center">
                                    Your access to RenewMe will continue April 28th, 2025. We’ll always be here if you ever need more RenewMe in your life.
                                </p>
                                <div className="mt-[65px]">
                                    <button
                                        onClick={() => setIsCanceledModalOpen(false)}
                                        className="text-white font-bold text-[24px] leading-[29px] bg-[#A850B2] rounded-full py-[20px] px-[37px]">
                                        Back to RenewMe
                                    </button>

                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default CanceledModal