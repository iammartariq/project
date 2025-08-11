import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'http://localhost:5000/graphql',
    // uri: 'https://api.myrenewme.com/graphql',
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
});

export default client;
