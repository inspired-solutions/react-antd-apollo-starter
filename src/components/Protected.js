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

export default Protected
