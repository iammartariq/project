import React, { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, } from '@headlessui/react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import UpdatePaymentMethodForm from './UpdatePaymentMethodForm'

interface UpdatePaymentModalProps {
    isPaymentModalOpen: boolean;
    setIsPaymentModalOpen: (boolean) => void;
    clientSecret: string | null;
}

const UpdatePaymentModal = ({ isPaymentModalOpen, setIsPaymentModalOpen, clientSecret }: UpdatePaymentModalProps) => {
    const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

    if (!clientSecret) {
        return null;
    }

    const options = {
        clientSecret: clientSecret || undefined,
        appearance: {
          theme: 'stripe' as const,
          variables: {
            colorPrimary: '#6772e5',
          }
        }
      }

    return (
        <>
            <Dialog open={isPaymentModalOpen} onClose={setIsPaymentModalOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-[35px] bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-[646px] data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div className='bg-white  sm:px-[55px] px-[14px] py-[55px]'>
                                <button
                                    onClick={() => setIsPaymentModalOpen(false)}

                                    className="absolute top-[17px] lg:top-[24px] right-[17px] lg:right-[29px] bg-[#D9D9D9] rounded-full size-[24px] lg:size-[30px] xl:size-[50px] flex justify-center items-center cursor-pointer"
                                >
                                    <X className="text-black size-[15px] lg:size-[18px] xl:size-auto" />
                                </button>
                                <Elements stripe={stripePromise} options={options}>
                                   <UpdatePaymentMethodForm setIsPaymentModalOpen={setIsPaymentModalOpen}/>
                                 </Elements>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
};

export default UpdatePaymentModal;