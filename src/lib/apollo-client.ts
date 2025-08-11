import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

console.log('GraphQL URL from env:', process.env.NEXT_PUBLIC_GRAPHQL_URL);

const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'http://localhost:5000/graphql',
    // uri: 'https://api.myrenewme.com/graphql',
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    credentials: 'include',
    onError: ({ networkError, graphQLErrors }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.error(
            `GraphQL error: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }
      if (networkError) {
        console.error(`Network error: ${networkError}`);
      }
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
