import store from 'store'
import { AUTH_TOKEN } from '../config/auth'

export const getToken = () => {
  return store.get(AUTH_TOKEN)
}

export const isAuth = () => {
  return !!getToken()
}
