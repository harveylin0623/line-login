import baseConfig from './config'

const baseAxios = (payload) => {
  return baseConfig({ ...payload }).then(res => res.data)
}

export default baseAxios