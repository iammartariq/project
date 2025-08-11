import { CANCEL_STRIPE_SUBSCRIPTION, CREATE_STRIPE_SUBSCRIPTION, CREATE_STRIPE_CUSTOMER, PAYMENT_SETUP_INTENT } from '../graphql/mutations';
import { RETRIEVE_PAYMENT_METHOD } from '../graphql/queries';
import client from '../lib/apollo-client';

interface StripeSubscriptionResponse {
  errors?: string;
  sessionUrl?: string;
}

interface CancelStripeSubscriptionResponse {
  errors?: string;
  success?: string;
}

interface CreateStripeCustomerResponse {
  errors?: string;
  customerId?: string;
}

interface PaymentSetupIntentResponse {
  errors?: string;
  clientSecret?: string;
}

export interface PaymentMethodResponse {
  brand?: string;
  checks?: object;
  country?: string;
  displayBrand?: string;
  expMonth?: number;
  expYear?: number;
  fingerprint?: string;
  funding?: string;
  generatedFrom?: object;
  last4?: string;
  networks?: object;
  regulatedStatus?: string;
  threeDSecureUsage?: object;
  wallet?: object;
  errors?: string;
}

export const createStripeSubscription = async (data: {
  planId: number;
}): Promise<StripeSubscriptionResponse> => {
  const authToken = localStorage.getItem('authToken');
  try {
    const response = await client.mutate({
      mutation: CREATE_STRIPE_SUBSCRIPTION,
      variables: data,
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    });

    return response.data.createStripeSubscription;
  } catch (error) {
    return { errors: 'Subscription failed' };
  }
};

export const cancelStripeSubscription = async (): Promise<CancelStripeSubscriptionResponse> => {
  const authToken = localStorage.getItem('authToken');
  try {
    const response = await client.mutate({
      mutation: CANCEL_STRIPE_SUBSCRIPTION,
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    });
    return response.data.cancelStripeSubscription;
  } catch (error) {
    return { errors: 'Cancellation failed' };
  }
};

export const createStripeCustomer = async (): Promise<CreateStripeCustomerResponse> => {
  const authToken = localStorage.getItem('authToken');
  try {
    const response = await client.mutate({
      mutation: CREATE_STRIPE_CUSTOMER,
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    });
    return response.data.createStripeCustomer;
  } catch (error) {
    return { errors: 'Customer creation failed' };
  }
};

export const paymentSetupIntent = async (): Promise<PaymentSetupIntentResponse> => {
  const authToken = localStorage.getItem('authToken');
  try {
    const response = await client.mutate({
      mutation: PAYMENT_SETUP_INTENT,
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    });
    return response.data.paymentSetupIntent;
  } catch (error) {
    return { errors: 'Payment Setup Intent failed' };
  }
};


export const retrievePaymentMethod = async (): Promise<PaymentMethodResponse> => {
  const authToken = localStorage.getItem('authToken');
  
  if (!authToken) {
    return { errors: 'No authentication token found' };
  }

  try {
    const response = await client.query({
      query: RETRIEVE_PAYMENT_METHOD,
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
      fetchPolicy: 'network-only',
    });

    return response.data.retrievePaymentMethod;
  } catch (error) {
    // Clear invalid token and cache
    return { errors: 'RETRIEVE_PAYMENT_METHOD Failed' };
  }
};