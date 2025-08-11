import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import Subscribed from "./Subscribed";
import Wellness from "./Wellness";
import CheckoutForm from "./CheckoutForm";
// import Wellness from "./wellness";
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

interface SubscriptionModalProps {
  isSubscriptionModalOpen: boolean;
  setIsSubscriptionModalOpen: (open: boolean) => void;
}

// loadStripe.setLoadParameters({advancedFraudSignals: false});

const SubscriptionModal = ({ isSubscriptionModalOpen, setIsSubscriptionModalOpen }: SubscriptionModalProps) => {
   const YEARLY_PLAN = process.env.YEARLY_MEDITATION_PLAN;
   const MONTHLY_PLAN = process.env.MONTHLY_MEDITATION_PLAN;
   const YEARLY_PRICE = '83.88';
   const MONTHY_PRICE = '9.99';

   const [isSubscribedModalOpen, setIsSubscribedModalOpen] = useState(false);
   const [plan, setPlan] = useState(YEARLY_PLAN);
   const [price, setPrice] = useState(YEARLY_PRICE);
   const stripePromise = useMemo(() => 
      loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!), 
      []
   );

   const options: StripeElementsOptions = {
        mode: 'subscription' as const,
        currency: 'usd',
        amount: 123,
        paymentMethodCreation: 'manual',
        appearance: {
          theme: 'stripe' as const,
          variables: {
            colorPrimary: '#6772e5',
          }
        }
      }

   const handleSelectedPlan = (plan: string) => {
      console.log(plan);
      setPlan(plan);
      if(plan === YEARLY_PLAN){
         setPrice(YEARLY_PRICE);
      }else{
         setPrice(MONTHY_PRICE);
      }
   }

   return (
      <>
         <Dialog open={isSubscriptionModalOpen} onClose={setIsSubscriptionModalOpen} className="relative z-10">
            <DialogBackdrop
               transition
               className="fixed inset-0 bg-[rgba(0,0,0,0.5)] transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
               <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 !px-3">
                  <DialogPanel
                     transition
                     className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:max-w-[90%] md:max-w-[75%] lg:max-w-[70%] xl:max-w-[1563px] w-full max-w-[100%] mx-auto"
                  >
                     <div className="bg-[#F8F8F8] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
                        <div className="flex flex-col xl:flex-row items-start justify-between gap-[25px] lg:gap-[20px] 2xl:gap-[32.5px] py-[66px] lg:py-[0px] px-[23px] 2xl:px-[0px] 2xl:pl-[92px] 2xl:pr-[98px] h-full 2xl:h-auto">
                           <button
                              onClick={() => setIsSubscriptionModalOpen(false)}
                              className="absolute top-[17px] lg:top-[24px] right-[17px] lg:right-[29px] bg-[#D9D9D9] rounded-full size-[24px] lg:size-[30px] xl:size-[50px] flex justify-center items-center cursor-pointer"
                           >
                              <X className="text-black size-[14px] lg:size-[18px] xl:size-auto" />
                           </button>
                           <Wellness />
                           <div className="order-1 xl:order-2 flex items-center xl:w-1/2 w-full lg:pt-[106px]">
                              <div className=" flex flex-col gap-[30px] sm:gap-[41px] justify-center items-center">
                                 <div className="bg-[#ffffff] rounded-[35px] w-full max-w-[646px] sm:px-[55px] px-[26px] pt-[66px] pb-[31px]">
                                    <h2 className="text-[24px] font-semibold leading-[29px] mb-[39px]">1. Confirm Your Plan</h2>
                                    <p className="text-[24px] leading-[24px]">Don’t worry, you can cancel at any time.</p>
                                    <div className="grid xl:grid-cols-2 grid-cols-1 gap-[20px] pt-[40px] mb-[32px]">
                                       <button className="relative inline-block" onClick={() => {
                                                  handleSelectedPlan(YEARLY_PLAN);
                                               }}>
                                          <div className="absolute top-0 right-[-44px] transform -translate-x-1/2 -translate-y-1/2 bg-[#A850B2] text-white text-[15px] font-semibold rounded-[5px] px-3 py-[5px]">
                                             3-Day Free Trial
                                          </div>

                                          <div className={`${ plan === YEARLY_PLAN ? "border-black" : "border-[#D7D7D7]"} border-2 rounded-[14px] px-[17px] py-[13px] flex items-center justify-between`}>
                                             <div className="flex flex-col">
                                                <span className="text-[20px] font-semibold text-black leading-[24px]">Yearly</span>
                                                <span className="text-[15px] leading-[18px] font-semibold text-black mt-[11px]">${YEARLY_PRICE}/yr</span>
                                             </div>

                                             <div>
                                                <span className="text-[18px] font-bold text-black leading-[22px]">$5.83/mo</span>
                                             </div>
                                          </div>
                                       </button>
                                       <button className={`${ plan === MONTHLY_PLAN ? "border-black" : "border-[#D7D7D7]"} border-2 rounded-[14px] px-[17px] py-[13px] flex items-center justify-between`} onClick={() => {
                                                  handleSelectedPlan(MONTHLY_PLAN);
                                               }}>
                                          <div className="flex !justify-between items-center gap-11">
                                             <h2 className="text-[20px] font-semibold text-black leading-[24px]">Monthly</h2>
                                             <h2 className="text-[18px] leading-[22px] font-bold text-black">${MONTHY_PRICE}/mo</h2>
                                          </div>
                                       </button>
                                    </div>
                                    <div className="flex justify-between items-center border-t border-t-[#000000] pt-[26px]">
                                       <p className="text-[20px] font-semibold leading-[24px]">Total due today</p>
                                       <p className="text-[20px] font-semibold leading-[24px]">${price}</p>
                                    </div>

                                    <p className="text-[14px] leading-[23px] font-semibold text-[#989898] w-full max-w-[523px] mt-[21px]">
                                       If your total is $0.00, credit, discount, or coupon code was applied automatically. Some taxes may apply.
                                    </p>
                                 </div>
                                 { stripePromise && plan && <Elements stripe={stripePromise} options={options}>
                                   <CheckoutForm plan={plan} setIsSubscribedModalOpen={setIsSubscribedModalOpen}/>
                                 </Elements> }
                              </div>
                           </div>

                        </div>
                     </div>
                  </DialogPanel>
               </div>
            </div>
         </Dialog>

         <Subscribed
            isSubscribedModalOpen={isSubscribedModalOpen}
            setIsSubscribedModalOpen={setIsSubscribedModalOpen}
         />
      </>
   );
};

export default SubscriptionModal;
