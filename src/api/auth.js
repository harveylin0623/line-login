import baseAxios from './baseAxios.js'

export const authApi = {
  login(payload = {}) {
    return baseAxios({
      url: '/third_party_auth/login',
      method: 'post',
      ...payload
    })
  },
}