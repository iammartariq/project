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
  } catch (error: any) {
    console.error('Registration error:', error);
    
    if (error.networkError) {
      return { errors: `Network error: ${error.networkError.message}` };
    }
    
    if (error.graphQLErrors && error.graphQLErrors.length > 0) {
      return { errors: error.graphQLErrors[0].message };
    }
    
    return { errors: 'Registration failed' };
  }
};

export const signInUser = async (data: SignInData): Promise<AuthResponse> => {
  try {
    console.log('🔐 Starting authentication process...');
    console.log('📧 Email:', data.email);
    console.log('🌐 GraphQL URL:', process.env.NEXT_PUBLIC_GRAPHQL_URL);
    
    // Validate environment
    if (!process.env.NEXT_PUBLIC_GRAPHQL_URL) {
      console.error('❌ CRITICAL: GraphQL URL is not defined in environment variables');
      return { errors: 'Configuration error: GraphQL endpoint not found' };
    }
    
    // Validate input data
    if (!data.email || !data.password) {
      console.error('❌ CRITICAL: Missing email or password');
      return { errors: 'Email and password are required' };
    }
    
    console.log('✅ Validation passed, making GraphQL request...');
    
    const response = await client.mutate({
      mutation: SIGN_IN,
      variables: data,
      errorPolicy: 'all', // This captures both network and GraphQL errors
      fetchPolicy: 'no-cache', // Don't use cache for authentication
    });

    console.log('📨 GraphQL response received');
    console.log('📊 Has data:', !!response.data);
    console.log('⚠️ Has errors:', !!response.errors);
    
    // Check for network/GraphQL level errors first
    if (response.errors && response.errors.length > 0) {
      console.error('❌ GraphQL level errors:', response.errors);
      const firstError = response.errors[0];
      const errorMessage = firstError.message || 'GraphQL error occurred';
      return { errors: errorMessage };
    }
    
    // Check if response data exists
    if (!response.data) {
      console.error('❌ CRITICAL: No data in GraphQL response');
      return { errors: 'No response data from server' };
    }
    
    // Check if signIn field exists in response
    if (!response.data.signIn) {
      console.error('❌ CRITICAL: No signIn field in response');
      console.error('Available fields:', Object.keys(response.data || {}));
      return { errors: 'Invalid response structure from server' };
    }
    
    const signInResult = response.data.signIn;
    console.log('🔍 SignIn result structure:', {
      hasErrors: !!signInResult.errors,
      hasUser: !!signInResult.user,
      userEmail: signInResult.user?.email
    });
    
    // Check for application-level errors
    if (signInResult.errors) {
      console.error('❌ Authentication failed:', signInResult.errors);
      return { errors: signInResult.errors };
    }
    
    // Check if user data exists
    if (!signInResult.user) {
      console.error('❌ CRITICAL: No user data returned');
      return { errors: 'Authentication failed - invalid credentials' };
    }
    
    const user = signInResult.user;
    console.log('✅ Authentication successful!', {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      subscriptionStatus: user.subscriptionStatus,
      hasAuthToken: !!user.authToken
    });
    
    // Handle auth token
    if (user.authToken) {
      try {
        localStorage.setItem('authToken', user.authToken);
        console.log('💾 Auth token stored successfully');
      } catch (storageError) {
        console.warn('⚠️ Failed to store auth token:', storageError);
        // Don't fail the login just because we can't store the token
      }
    } else {
      console.warn('⚠️ WARNING: No auth token provided by server');
    }

    console.log('🎉 Login process completed successfully');
    return signInResult;

  } catch (error: any) {
    console.error('💥 AUTHENTICATION ERROR CAUGHT');
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      type: typeof error
    });
    
    // Handle different types of errors
    if (error.networkError) {
      console.error('🌐 Network Error:', {
        name: error.networkError.name,
        message: error.networkError.message,
        statusCode: error.networkError.statusCode,
      });
      
      // Specific network error handling
      if (error.networkError.statusCode === 404) {
        return { errors: 'API endpoint not found (404). Please verify the GraphQL URL.' };
      }
      if (error.networkError.statusCode === 500) {
        return { errors: 'Internal server error (500). Please contact support.' };
      }
      if (error.networkError.statusCode === 0) {
        return { errors: 'Unable to connect to server. Check your internet connection.' };
      }
      
      return { 
        errors: `Network error: ${error.networkError.message}` 
      };
    }
    
    // Handle GraphQL errors
    if (error.graphQLErrors && error.graphQLErrors.length > 0) {
      console.error('📋 GraphQL Errors:', error.graphQLErrors);
      const firstGraphQLError = error.graphQLErrors[0];
      return { 
        errors: firstGraphQLError.message || 'GraphQL error occurred' 
      };
    }
    
    // Handle generic Apollo errors
    if (error.message) {
      console.error('🔧 Apollo Client Error:', error.message);
      
      // Check for common error patterns
      if (error.message.includes('CORS')) {
        return { errors: 'CORS error - server configuration issue' };
      }
      if (error.message.includes('fetch')) {
        return { errors: 'Network fetch error - unable to reach server' };
      }
      
      return { errors: `Error: ${error.message}` };
    }
    
    return { errors: 'An unexpected error occurred during login' };
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
    console.log('checkAuth error:', error);
    // Clear invalid token and cache
    localStorage.removeItem('authToken');
    await client.clearStore();
    return { errors: 'Session expired. Please log in again.' };
  }
};
