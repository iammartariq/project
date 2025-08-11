import { REGISTER, SIGN_IN } from '../graphql/mutations';
import { CHECK_AUTH } from '../graphql/queries';
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

interface AuthResponse {
  errors?: string;
  user?: User;
}

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await client.mutate({
      mutation: REGISTER,
      variables: data,
    });
    return response.data.register;
  } catch (error) {
    return { errors: 'Registration failed' };
  }
};

export const signInUser = async (data: SignInData): Promise<AuthResponse> => {
  try {
    const response = await client.mutate({
      mutation: SIGN_IN,
      variables: data,
    });

    const authToken = response.data.signIn.user?.authToken;
    
    if (authToken) {
      // Store token in localStorage
      localStorage.setItem('authToken', authToken);
    }

    return response.data.signIn;
  } catch (error) {
    return { errors: 'Login failed' };
  }
};

export const signOutUser = async (): Promise<void> => {
  try {
    localStorage.removeItem('authToken');
    await client.clearStore();
    window.location.href = '/';
  } catch (error) {
    console.error('Logout error:', error);
    localStorage.removeItem('authToken');
    window.location.href = '/';
  }
};

export const checkAuth = async (): Promise<AuthResponse> => {
  const authToken = localStorage.getItem('authToken');
  
  if (!authToken) {
    return { errors: 'No authentication token found' };
  }

  try {
    const response = await client.query({
      query: CHECK_AUTH,
      variables: {authToken: authToken},
      fetchPolicy: 'network-only',
    });

    return response.data.checkAuth;
  } catch (error) {
    console.log('checkAuth', error)
    // Clear invalid token and cache
    localStorage.removeItem('authToken');
    await client.clearStore();
    return { errors: 'Session expired. Please log in again.' };
  }
};