import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
  credentials: "",
});

export const apolloClient = new ApolloClient({
  cache,
  link: httpLink,
});
