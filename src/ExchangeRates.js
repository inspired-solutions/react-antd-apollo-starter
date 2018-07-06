import React, { Component } from 'react'
import { Query } from 'react-apollo'
import ratesUSD from './queries/rates'
import { Select, Spin, Icon, Alert } from 'antd'

const Option = Select.Option


class ExchangeRates extends Component {
  render(){

    return(
      <Query
        query={ratesUSD}
      >
        {({ loading, error, data }) => {
          const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
          if (loading) return (
            <Spin indicator={antIcon}/>
          )

          if (error) return (
            <Alert message="Error" type="error" showIcon />
          )

          const rates = data.rates.map(({ currency, rate }) => <Option key={`${currency}: ${rate}`}>{`${currency}: ${rate}`}</Option>)

          //Function onChange option
          function handleChange(value) {
            console.log(`Selected: ${value}`)
          }

          return (
            <Select
              size='default'
              defaultValue="Select your currency"
              onChange={handleChange}
              style={{ width: 200 }}
            >
              {rates}
            </Select>
          )
        }}
      </Query>
    )
  }
}

export default ExchangeRates
