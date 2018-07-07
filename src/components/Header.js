import React from 'react'
import { Layout, Menu } from 'antd'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import { isAuth } from '../utils/auth'

const Header = ({ match, location }) => {
  console.log(match, location)

  return (
    <Layout.Header>
      <div className="logo">
        Inspired
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/app/dashboard">
          <Link to="/app/dashboard">Dashboard</Link>
        </Menu.Item>
        {
          isAuth() ? (
              <Menu.Item key="/logout">
                <Link to="/logout">Logout</Link>
              </Menu.Item>
            ) : (
              <Menu.Item key="/login">
                <Link to="/login">Login</Link>
              </Menu.Item>
            )
        }
      </Menu>
    </Layout.Header>
  )
}

export default withRouter(Header)
