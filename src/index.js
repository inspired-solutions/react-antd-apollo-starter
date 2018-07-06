import './App.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import App from './App'
import { AUTH_TOKEN, TOKEN_KEY } from './config/auth'
import client from './graphql'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
