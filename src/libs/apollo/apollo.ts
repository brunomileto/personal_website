import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API,
  headers: {
    Authorization: `BEARER ${process.env.NEXT_PUBLIC_HYGRAPH_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
