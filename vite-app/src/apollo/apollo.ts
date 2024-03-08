import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

const createApolloClient = () => {
  return new ApolloClient({
    link: from([httpLink]),
    cache,
  });
};

export function getApolloClient(): ApolloClient<NormalizedCacheObject> {
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }
  return apolloClient;
}
