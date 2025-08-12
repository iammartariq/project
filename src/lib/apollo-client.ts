import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

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

// HTTP link
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://api.myrenewme.com/graphql',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    ...(typeof window !== 'undefined' && localStorage.getItem('authToken') && {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    })
  }
});

console.log('✅ Apollo Client initialized with URL:', httpLink.options.uri);

// Combine links
const link = from([errorLink, httpLink]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});

export default client;
