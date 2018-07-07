import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from 'apollo-boost'

import { AUTH_TOKEN, TOKEN_KEY } from '../config/auth'

const httpLink = new HttpLink({ uri: "https://w5xlvm3vzz.lp.gql.zone/graphql" })

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const authToken = localStorage.getItem(AUTH_TOKEN)
  const authorizationHeader = authToken ? `${TOKEN_KEY} ${authToken}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader,
    },
  })
  return forward(operation)
})

const link = middlewareAuthLink.concat(httpLink)

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache
})

export default client
