import { AUTH_TOKEN } from '../config/auth'

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN)
}

export const isAuth = () => {
  return !!getToken()
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user')) || {}
}

export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN)
  return true
}

export const login = (data) => {
  localStorage.setItem(AUTH_TOKEN, data.key)
  localStorage.setItem('user', JSON.stringify(data.user))
}

export const post = (LOGIN_URL, data) => {
  return fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
