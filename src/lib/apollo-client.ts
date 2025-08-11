import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

console.log('GraphQL URL from env:', process.env.NEXT_PUBLIC_GRAPHQL_URL);

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
    console.error('Network error details:', {
      name: networkError.name,
      message: networkError.message,
      statusCode: (networkError as any).statusCode,
    });
  }
});

// HTTP link
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://api.myrenewme.com/graphql',
  credentials: 'include',
});

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
