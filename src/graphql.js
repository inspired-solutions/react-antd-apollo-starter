import {
  ApolloClient,
  HttpLink,
  InMemoryCache
} from 'apollo-boost'

const link = new HttpLink({uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache
})

export default client
