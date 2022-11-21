import Axios from 'axios'
import Config from '../config/app.js'
import qs from 'qs'

const service = Axios.create({
  baseURL: `${Config.apiUrl}/${Config.apiPrefix}`,
  timeout: Config.timeout,
  transformRequest: [function (data) {
    if (data && data.content) data.content = encodeURIComponent(JSON.stringify(data.content))
    else data['content'] = encodeURIComponent(JSON.stringify({}))
    if (data && data.isUpload) return data.formData
    else return data ? qs.stringify(data) : JSON.stringify({})
  }],

  paramsSerializer: function (params) {
    return qs.stringify(params)
  }
})

// 请求拦截器
service.interceptors.request.use(config => {
  config.headers.Accept = 'application/json'
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(
  (response) => {
    const { data } = response
    if (response.status !== 200 || data.ResultSet.status !== 0) {
      return Promise.reject(data)
    }
    return data
  },
  (error) => {
    if (error.message === `timeout of ${Config.timeout}ms exceeded`) {
      return Promise.reject({ msg: '请求超时 请重试' })
    } else {
      return Promise.reject(error)
    }
  }
)

export default service
