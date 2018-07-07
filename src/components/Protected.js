import React, { Component } from 'react'

import AppLayout from './Layout'
import { isAuth } from '../utils/auth'

const Unauthorized = () => (
  <AppLayout>
    <div className="not-found">401 Unauthorized</div>
  </AppLayout>
)

const Protected = (props) => isAuth() ? (
    props.children
  ) : (
    <Unauthorized />
  )

class _Protected extends Component {
  render () {
    console.log(this.props)
    console.log(this.props.children)

    return (
      <div>Foo</div>
    )
  }
}

export default Protected
