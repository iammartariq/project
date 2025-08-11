import { UPDATE_USER, RESET_PASSWORD } from '../graphql/mutations';
import { PROFILE_DETAILS } from '../graphql/queries';
import client from '../lib/apollo-client';

interface User {
  id: string;
  fullName: string;
  email: string;
  authToken?: string;
  about?: string;
  companies?: string;
  createdAt?: string;
  currentPeriodEnd?: string;
  currentPeriodStart?: string;
  customUrl?: string;
  firstName?: string;
  imdbUrl?: string;
  instagramUrl?: string;
  lastName?: string;
  linkedinUrl?: string;
  phone?: string;
  planName?: string;
  planPrice?: string;
  planInterval?: string;
  primaryGoal?: string;
  profilePhoto?: string;
  subscriptionStatus?: string;
  supportEmail?: string;
  twitterUrl?: string;
  updatedAt?: string;
  websiteUrl?: string;
  stripeId?: string;
}

interface UpdateUserData {
  email: string;
  firstName: string;
  lastName: string;
}

interface UpdateUserResponse {
  user?: User;
  errors?: string;
}

interface ForgotPasswordData {
  email: string;
}

interface ForgotPasswordResponse {
  link?: string;
  emailSent?: boolean;
}

export const fetchProfileDetails = async () => {
  const authToken = localStorage.getItem('authToken');

  try {
    const response = await client.query({
      query: PROFILE_DETAILS,
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
      fetchPolicy: 'network-only',
    });

    return response.data.profileDetails;
  } catch (error) {
    return { errors: 'Failed to fetch profile details' };
  }
};

export const updateUser = async (data: UpdateUserData): Promise<UpdateUserResponse> => {
  try {
    const authToken = localStorage.getItem('authToken');
    const response = await client.mutate({
      mutation: UPDATE_USER,
      variables: data,
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    });

    return response.data.updateUser;
  } catch (error) {
    return { errors: 'UPDATE_USER failed' };
  }
};

export const forgotPassword = async (data: ForgotPasswordData): Promise<ForgotPasswordResponse> => {
  try {
    const response = await client.mutate({
      mutation: RESET_PASSWORD,
      variables: data,
    });

    return response.data.forgotPassword;
  } catch (error) {
    return { errors: 'RESET_PASSWORD failed' };
  }
};
