import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_CONTENT_API,
  headers: {
    Authorization: `BEARER ${import.meta.env.VITE_HYGRAPH_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
