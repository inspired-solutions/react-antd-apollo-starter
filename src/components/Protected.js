import React, { Component } from 'react'

import AppLayout from './Layout'
import { isAuth } from '../utils/auth'

const Forbidden = () => (
  <AppLayout>
    <div className="not-found">403 Forbidden</div>
  </AppLayout>
)

const Protected = (props) => isAuth() ? (
    props.children
  ) : (
    <Forbidden />
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
