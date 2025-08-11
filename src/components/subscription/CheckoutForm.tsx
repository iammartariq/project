// https://docs.stripe.com/billing/subscriptions/designing-integration
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Image from "next/image";
import { toast } from 'react-toastify';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { useAuthStore } from '../../stores/authStore';
import { createStripeCustomer } from '../../services/subscription-service';

const CheckoutForm = ({ plan, setIsSubscribedModalOpen }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const { user } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      // handleError(submitError);
      return;
    }

    let customerId = user.stripeId
    if(!customerId){
      const result = await createStripeCustomer();
      customerId = result.customerId
    }

    if(!customerId){
      toast.error('No Customer Found!');
      return
    }

    // Create the subscription
    const res = await fetch('/api/create-subscription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        planId: plan,
        customerId: customerId,
        trialDays: 3
      }),
    })
    const {type, clientSecret} = await res.json();
    const confirmIntent = type === "setup" ? stripe.confirmSetup : stripe.confirmPayment;

    // Confirm the Intent using the details collected by the Payment Element
    const {error} = await confirmIntent({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
      redirect: 'if_required'
    });

    if (error) {
      // This point is only reached if there's an immediate error when confirming the Intent.
      // Show the error to your customer (for example, "payment details incomplete").
      // handleError(error);
    } else {
      setIsSubscribedModalOpen(true);
      // Your customer is redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer is redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#ffffff] rounded-[35px] w-full max-w-[646px] sm:px-[55px] px-[26px] pt-[66px] pb-[66px]">
      {/*<div className="bg-[#ffffff] rounded-[35px] w-full max-w-[646px] sm:px-[55px] px-[26px] pt-[66px] pb-[66px]">*/}
        <h2 className="text-[24px] font-semibold leading-[29px] mb-[33px]">2. Choose your payment method</h2>
        <button className="bg-black w-full rounded-full flex justify-center items-center gap-[25px]"  type="button">
           <Image src={"/assets/images/renewme-home/gpay.png"} alt="gpay" width={118} height={36} />
           <p className="text-white text-[24px] font-semibold">.... 5889</p>
        </button>
        <button className="bg-[#F4C657] mt-[17px] w-full rounded-full flex justify-center items-center gap-[25px] py-3" type="button">
           <Image src={"/assets/images/renewme-home/paypal.png"} alt="paypal" width={110} height={36} />
        </button>
        <div className="max-w-md mx-auto space-y-4">
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
              className="w-full bg-[#a84fb2] text-white py-[20px] rounded-full text-[20px] font-bold"
              disabled={!stripe || !elements}
           >
              Start Your Trial
           </button>
        </div>
      {/*</div>*/}
    </form>
  );
};

export default CheckoutForm;