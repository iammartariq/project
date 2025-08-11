// https://docs.stripe.com/billing/subscriptions/designing-integration
import React, { useState } from 'react';
import Image from "next/image";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Stripe from 'stripe';

// import { useAuthStore } from '@/stores/authStore';
// import { createStripeCustomer } from '@/services/subscription-service';

// const stripeApi = new Stripe(process.env.STRIPE_SECRET_KEY);

const UpdatePaymentMethodForm = ({ setIsPaymentModalOpen }:any) => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event:any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return null;
    }

    const {error} = await stripe.confirmSetup({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: 'https://example.com/account/payments/setup-complete',
      },
      redirect: 'if_required'
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setError(error.message);
    } else {
      setIsPaymentModalOpen(false);
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2 className="sm:text-[32px] text-[16px] font-semibold leading-[29px] sm:mb-[33px] mb-[14px] text-center">Update payment details</h2>
        <button className="bg-black w-full rounded-full flex justify-center items-center gap-[25px] h-[57px]">
            <Image src={"/assets/images/renewme-home/gpay.png"} alt="gpay" width={118} height={36} />
            <p className="text-white text-[24px] font-semibold">.... 5889</p>
        </button>
        <button className="bg-[#F4C657] mt-[17px] w-full rounded-full flex justify-center items-center gap-[25px] h-[57px]">
            <Image src={"/assets/images/renewme-home/paypal.png"} alt="paypal" width={110} height={36} />
        </button>
        <div className="space-y-4">
           <p className="text-[16px] leading-[19px] text-[#878787] text-center mt-6">Or</p>
        <PaymentElement options={{
          layout: {
            type: 'tabs',
            defaultCollapsed: false,
          }
        }} />
        {/* Show error message to your customers */}
        {error && <div>{error}</div>}
          <p className="text-[15px] font-medium text-[#9F9F9F] leading-[28px] w-full max-w-[526px]">
              By providing your card information, you allow Renewme to charge your card for future payments in accordance with their terms.
          </p>

           <button
              className="w-full bg-gray-300 text-white py-[20px] rounded-full text-[20px] font-bold"
              disabled={!stripe || !elements}
           >
              Update Credit Card
           </button>
        </div>
      {/*</div>*/}
    </form>
  );
};

export default UpdatePaymentMethodForm;