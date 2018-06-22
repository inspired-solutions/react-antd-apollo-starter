import React, { Component } from 'react'
import { Layout } from 'antd'
import './App.scss'

class App extends Component {
  render() {
    return (
      <Layout style={{height: '150px', padding: '20px', textAlign: 'center'}}>
        <Layout.Content>
          <h1>
            Wellcome to React Ant Design Starter
          </h1>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Powered by <a href="http://inspiredsolutions.pe">Inspired Solutions</a>
          </p>
        </Layout.Content>
      </Layout>
    )
  }
}

export default App
