"use client";

// import Tab from "@/components/Commen/Tab";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import UpdatePaymentModal from "./UpdatePaymentModal";
import { useAuthStore } from "@/stores/authStore";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
   paymentSetupIntent,
   retrievePaymentMethod,
   PaymentMethodResponse,
} from "@/services/subscription-service";
import { capitalize, getDay, standardDateFormat } from "@/lib/utils";
import Subscription from "./Subscription";
import SubscriptionModal from "@/components/subscription/SubscriptionModal";

const ManageSubscription = () => {
   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
   const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
   const [isCreateSubscriptionModalOpen, setIsCreateSubscriptionModalOpen] = useState(false);
   const [clientSecret, setClientSecret] = useState("");
   const [paymentMethod, setPaymentMethod] = useState<PaymentMethodResponse>();
   const { user } = useAuthStore();

   const handlePaymentSetupIntent = async () => {
      await paymentSetupIntent().then((result) => {
         if (result.clientSecret) {
            setClientSecret(result.clientSecret);
            setIsPaymentModalOpen(true);
         } else {
            setClientSecret("");
            setIsPaymentModalOpen(false);
         }
      });
   };

   useEffect(() => {
      async function fetchPaymentMethod() {
         await retrievePaymentMethod().then((result) => {
            setPaymentMethod(result);
         });
      }
      fetchPaymentMethod();
   }, []);

   return (
      <ProtectedRoute>
         <div>
            <div className="mt-[41px] flex flex-col gap-[20px]">
               {/* First Subscription Option */}
               <div className="bg-black/19 rounded-[30px] sm:px-[55px] px-[24px] sm:py-[45px] py-[39px]">
                  <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start gap-2">
                     <h2 className="text-white leading-[42px] text-[35px] font-bold">
                        Elevate & Meditate (monthly)
                     </h2>
                     <p className="text-white leading-[42px] text-[35px] font-bold">
                        $9.99/mo
                     </p>
                  </div>
                  <button className="mt-[32px] py-[22px] px-[41px] bg-white text-black rounded-full text-[24px] leading-[29px] font-medium">
                     Subscribe now
                  </button>
               </div>

               {/* Current Subscription Status */}
               <div className="bg-black/19 rounded-[30px] sm:px-[55px] px-[24px] sm:py-[45px] py-[39px]">
                  <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start gap-2">
                     <h2 className="text-white leading-[42px] text-[35px] font-bold">
                        Elevate & Meditate (monthly)
                     </h2>
                     <p className="text-white leading-[42px] text-[35px] font-bold">
                        $9.99/mo
                     </p>
                  </div>
                  <p className="pt-[32px] text-white text-[22px] leading-[24px]">
                     Your subscription renewal has been canceled.
                  </p>
                  <p className="pt-[32px] text-white text-[22px] leading-[24px]">
                     You purchased a yearly subscription on April 14, 2025. Your Premium access lasts until April 28, 2025
                  </p>
                  <div className="mt-[32px] rounded-[20px] border border-white/48 bg-white/16 py-[23px] px-[21px]">
                     <p className="text-[20px] leading-[26px] font-medium text-white">
                        Your Renewme Premium subscription expires in 14 days! Renew now to continue enjoying all that Renewme has to offer.
                     </p>
                     <button className="mt-[20px] py-[14px] px-[30px] bg-white text-black rounded-full text-[24px] leading-[29px] font-medium">
                        Renew
                     </button>
                  </div>
                  <button className="mt-[32px] py-[21px] px-[28px] bg-white/20 text-white text-[24px] font-semibold leading-[28px] rounded-full">
                     Questions? Visit Help Center
                  </button>
               </div>

               {/* Yearly Subscription Option */}
               <div className="bg-black/19 rounded-[30px] sm:px-[55px] px-[24px] sm:py-[45px] py-[39px]">
                  <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start gap-2">
                     <h2 className="text-white leading-[42px] text-[35px] font-bold">
                        Elevate & Meditate (yearly 20% off)
                     </h2>
                     <p className="text-white leading-[42px] text-[35px] font-bold">
                        $6.99/mo
                     </p>
                  </div>
                  <p className="pt-[32px] text-white text-[22px] leading-[35px]">
                     Elevate your wellness journey with RenewMe. Discover hundreds of exclusive audio tracks designed to relax, motivate, 
                     and inspire you. From mindfulness meditations to coping skill boosters, our powerful library helps you manage stress, 
                     build emotional resilience, and live a more balanced, skillful life. Whether you need a moment of calm or a burst of 
                     motivation, RenewMe is here to guide you every step of the way. Start listening now and transform the way you think, 
                     feel, and live.
                  </p>
                  <button className="mt-[32px] py-[22px] px-[41px] bg-white text-black rounded-full text-[24px] leading-[29px] font-medium">
                     Subscribe now
                  </button>
               </div>
            </div>

            <Subscription
               isSubscriptionModalOpen={isSubscriptionModalOpen}
               setIsSubscriptionModalOpen={setIsSubscriptionModalOpen}
            />
            <SubscriptionModal
               isSubscriptionModalOpen={isCreateSubscriptionModalOpen}
               setIsSubscriptionModalOpen={setIsCreateSubscriptionModalOpen}
            />
            
            {/* Footer Links */}
            <div className="mt-[40px] mb-[20px] text-center">
               <span className="text-white/70 text-[16px]">
                  <a href="/support" className="hover:text-white">Support</a>
                  <span className="mx-2">|</span>
                  <a href="/terms" className="hover:text-white">Terms</a>
               </span>
            </div>
         </div>
      </ProtectedRoute>
   );
};

export default ManageSubscription;
