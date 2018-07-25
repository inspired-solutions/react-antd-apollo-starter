import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from 'apollo-boost'
import { onError } from '../../node_modules/apollo-link-error'

import { URI } from '../config/app'
import { AUTH_TOKEN, TOKEN_KEY } from '../config/auth'
import { logout } from './auth'

const httpLink = new HttpLink({ uri: URI })

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

const logoutLink = onError(({ graphQLErrors, networkError }) => {

  console.log(graphQLErrors, networkError)
  console.log(networkError ? networkError.statusCode : 'None')

  if (graphQLErrors && graphQLErrors.length) {
    const [error] = graphQLErrors

    if (error.code === 401) {
      // console.log('foo')
      logout()
    }
  }
})

const link = logoutLink.concat(middlewareAuthLink.concat(httpLink))

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache
})

export default client
