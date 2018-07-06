import React, { Component } from 'react'
import { Layout } from 'antd'
import client from './graphql'
import { ApolloProvider } from 'react-apollo'
import ExchangeRates from './ExchangeRates'

class App extends Component {
  render() {
    return (
      <Layout style={{height: 'auto', padding: '20px', textAlign: 'center'}}>
        <Layout.Content>
          <h1>
            Wellcome to React Ant Design Apollo Starter
          </h1>
          <ApolloProvider client={client}>
            <ExchangeRates />
          </ApolloProvider>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Powered by <a href="http://inspiredsolutions.pe" target="_blank">Inspired Solutions</a>
          </p>
        </Layout.Content>
      </Layout>
    )
  }
}

export default App
