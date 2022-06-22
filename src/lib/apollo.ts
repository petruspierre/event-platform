import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o31rmt0bkf01z2d1p5hwfi/master',
  cache: new InMemoryCache()
})