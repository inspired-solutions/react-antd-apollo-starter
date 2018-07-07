import { AUTH_TOKEN } from '../config/auth'

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN)
}

export const isAuth = () => {
  return !!getToken()
}
