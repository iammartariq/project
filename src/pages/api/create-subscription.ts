import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { planId, customerId, trialDays } = req.body;
  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId, // Get from your user system
      items: [{ price: planId }],
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.confirmation_secret', 'pending_setup_intent'],
    });

    if (subscription.pending_setup_intent !== null) {
      if (typeof subscription.pending_setup_intent !== 'string') {
        res.send({
          type: 'setup',
          clientSecret: subscription.pending_setup_intent.client_secret,
        });
      }
    } else {
      if (typeof(subscription.latest_invoice) !== 'string' && typeof(subscription.latest_invoice.confirmation_secret) !== 'string') {
        res.send({
          type: 'payment',
          clientSecret: subscription.latest_invoice.confirmation_secret.client_secret,
        });
      }
    }
  } catch (error) {
    console.log(error)
    return res.status(400).send({ error: { message: error.message } });
  }
}