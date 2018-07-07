import React, { Component } from 'react'

import AppLayout from './Layout'
import ExchangeRates from './ExchangeRates'

const Home = (props) => null /*console.log(props)*/ || (
  <AppLayout>
    <div className="home-content">
      <ExchangeRates />
    </div>
  </AppLayout>
)

export default Home
