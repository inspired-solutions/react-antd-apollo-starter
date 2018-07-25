import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, message as antdMessage } from 'antd'
import { Mutation } from 'react-apollo'

import AppLayout from './Layout'
import { isAuth, login } from '../utils/auth'
import { LOGIN } from '../mutations/auth'

const FormItem = Form.Item

class Login extends Component {
  constructor(props) {
    super(props)

    if (isAuth()) {
      props.history.push('/')
    }
  }

  handleSubmit = (e, doLogin) => {
    e.preventDefault();

    const { username, password } = e.target

    doLogin({
      variables: {
        username: username.value,
        password: password.value,
      }
    })
  }

  onCompleted(data) {
    login(data.login)
    this.props.history.push('/')
  }

  onError(error) {
    error.graphQLErrors && error.graphQLErrors.map(({ message }, i) => antdMessage.error(message))
  }

  render () {
    return (
      <AppLayout>
        <div className="login-content">
          <Mutation
            mutation={LOGIN}
            onCompleted={(data) => this.onCompleted(data)}
            onError={(error) => this.onError(error)}
          >
            {(doLogin, { loading, error, data }) => (
              <Form onSubmit={(e) => this.handleSubmit(e, doLogin)}>
                <h2>Login</h2>
                <FormItem>
                  <Input size="large" name="username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                </FormItem>
                <FormItem>
                  <Input size="large" name="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                </FormItem>
                <FormItem>
                  <Checkbox className="login-form__remember">Remember me</Checkbox>
                  <a className="login-form__forgot" href="">Forgot my password</a>
                </FormItem>
                <FormItem>
                  <Button size="large" type="primary" htmlType="submit" className="login-form__button" disabled={loading}>
                    Login
                  </Button>
                </FormItem>
              </Form>
            )}
          </Mutation>
        </div>
      </AppLayout>
    )
  }
}

export default Login
