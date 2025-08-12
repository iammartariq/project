import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

console.log('🔧 Apollo Client Configuration:');
console.log('📍 GraphQL URL:', process.env.NEXT_PUBLIC_GRAPHQL_URL);

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `📋 GraphQL Error: ${message}`, 
        { locations, path, operation: operation.operationName }
      )
    );
  }
  
  if (networkError) {
    console.error(`🌐 Network Error: ${networkError.message}`);
    console.error('🔍 Network error details:', {
      name: networkError.name,
      message: networkError.message,
      statusCode: (networkError as any).statusCode,
      result: (networkError as any).result
    });
  }
});

// Auth link to add token to headers
const authLink = setContext((_, { headers }) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
  
  return {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    }
  };
});
// HTTP link
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://api.myrenewme.com/graphql',
  credentials: 'include',
  fetchOptions: {
    mode: 'cors',
  }
});

console.log('✅ Apollo Client initialized with URL:', httpLink.options.uri);

// Combine links
const link = from([errorLink, authLink, httpLink]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
      notifyOnNetworkStatusChange: true,
    },
    query: {
      errorPolicy: 'all',
      notifyOnNetworkStatusChange: true,
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

export default client;
