import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";
import CanceledModal from "./CanceledModal";
import { cancelStripeSubscription } from '../../../services/subscription-service';

const Subscription = ({
    isSubscriptionModalOpen,
    setIsSubscriptionModalOpen,
}) => {
    const [isCanceledModalOpen, setIsCanceledModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCancelSubscription = async () => {
        setLoading(true);
        const result = await cancelStripeSubscription();
        setLoading(false);
        if (result.success) {
            setIsCanceledModalOpen(true);
            setIsSubscriptionModalOpen(false);
        } else if (result.errors) {
            setError(result.errors);
        }
    };
    return (
        <div>
            {" "}
            <Dialog
                open={isSubscriptionModalOpen}
                onClose={setIsSubscriptionModalOpen}
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
                            <div className="bg-white  sm:px-[55px] px-[42px] py-[55px]">
                                <button
                                    onClick={() => setIsSubscriptionModalOpen(false)}
                                    className="absolute top-[17px] lg:top-[24px] right-[17px] lg:right-[29px]  flex justify-center items-center cursor-pointer"
                                >
                                    <X className="text-black size-[15px] lg:size-[18px] xl:size-[31px]" />
                                </button>
                                <p className="text-[32px] leading-[42px] font-semibold text-black w-full max-w-[602px] sm:text-left text-center">
                                    No problem. We hope you’ve enjoyed your time with RenewMe.
                                </p>
                                <p className="mt-[24px] text-[20px] text-black leading-[24px] sm:text-left text-center">
                                    Just confirm your cancellation below.
                                </p>
                                <div className="sm:mt-[74px] mt-[25px] flex flex-wrap items-center sm:justify-start justify-center gap-[24px]">
                                    <button
                                        onClick={()=>{
                                            setIsCanceledModalOpen(false);
                                            setIsSubscriptionModalOpen(false);
                                        }}
                                        className="text-white font-bold text-[24px] leading-[29px] bg-[#A850B2] rounded-full py-[17px] px-[42px]">
                                        Keep Subscription
                                    </button>
                                    <button
                                        onClick={handleCancelSubscription}
                                        className="underline font-semibold text-[24px] text-[#C00F0C] leading-[29px]"
                                        disabled={loading}
                                    >
                                        Confirm Cancellation
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
            <CanceledModal
                isCanceledModalOpen={isCanceledModalOpen}
                setIsCanceledModalOpen={setIsCanceledModalOpen}
            />
        </div>
    );
};

export default Subscription;
