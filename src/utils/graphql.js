import store from 'store'
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from 'apollo-boost'
import { onError } from '../../node_modules/apollo-link-error'

import { AUTH_TOKEN, TOKEN_KEY, URI } from '../config/auth'

const httpLink = new HttpLink({ uri: URI })

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const authToken = store.get(AUTH_TOKEN)
  const authorizationHeader = authToken ? `${TOKEN_KEY} ${authToken}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
})

const logoutLink = onError(networkError => {
  if (networkError.statusCode === 401) {
    logout()
  }
})

const link = logoutLink.concat(middlewareAuthLink.concat(httpLink))

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache
})

export default client
