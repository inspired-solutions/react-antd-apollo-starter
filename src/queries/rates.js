import gql from 'graphql-tag'

const ratesUSD = gql`
{
  rates(currency: "USD") {
    currency
    rate
  }
}
`
export default ratesUSD
