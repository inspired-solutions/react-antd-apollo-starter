import React, { Component } from 'react'
import { Layout } from 'antd'

import Header from './Header'
import Footer from './Footer'

const AppLayout = ({ children }) => (
  <Layout className="app-layout">
    <Header/>
    <Layout.Content className="app-content">
      {children}
    </Layout.Content>
    <Footer/>
  </Layout>
)

export default AppLayout
