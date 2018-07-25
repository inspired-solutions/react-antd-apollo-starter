import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import { isAuth, getUser, logout } from '../utils/auth'

class Header extends Component {

  logout() {
    logout()
    this.props.history.push('/')
  }

  render() {
    const { match, location } = this.props

    console.log(match, location)

    return (
      <Layout.Header>
        <div className="logo">
          Inspired
        </div>
        {isAuth() &&
          <div className="user">
            {getUser().username}
          </div>
        }
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          style={{lineHeight: '64px'}}
        >
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/app/dashboard">
            <Link to="/app/dashboard">Dashboard</Link>
          </Menu.Item>
          {
            isAuth() ? (
              <Menu.Item className="ant-menu-item" key="/logout">
                <a onClick={() => this.logout()}>Logout</a>
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
}

export default withRouter(Header)
