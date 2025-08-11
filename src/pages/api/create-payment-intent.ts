// pages/api/create-payment-intent.ts
import Stripe from 'stripe';
import type { NextApiRequest, NextApiResponse } from 'next'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface PaymentIntentRequest {
  amount: number;
}

interface PaymentIntentResponse {
  clientSecret?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaymentIntentResponse>
) {
  try {
    const { amount }: PaymentIntentRequest = req.body; // Amount in smallest currency unit
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret! });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}