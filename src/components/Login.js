import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

import AppLayout from './Layout'
import { isAuth } from '../utils/auth'

const FormItem = Form.Item

class Login extends Component {
  constructor(props) {
    super(props)

    if (isAuth()) {
      props.history.push('/')
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render () {
    // console.log(this.props);

    const { getFieldDecorator } = this.props.form

    return (
      <AppLayout>
        <div className="login-content">
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Enter your username' }],
              })(
                <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Enter your password' }],
              })(
                <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: false,
              })(
                <Checkbox className="login-form__remember">Remember me</Checkbox>
              )}
              <a className="login-form__forgot" href="">Forgot my password</a>
            </FormItem>
            <FormItem>
              <Button size="large" type="primary" htmlType="submit" className="login-form__button">
                Login
              </Button>
            </FormItem>
          </Form>
        </div>
      </AppLayout>

    )
  }
}

export default Form.create()(Login)
