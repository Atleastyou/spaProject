
const devApiUrl = ''
const proApiUrl = ''
const nodeDevEnv = process.env.NODE_ENV === 'development'

export default {
  apiUrl: nodeDevEnv ? devApiUrl : proApiUrl, // 请求地址
  apiPrefix: '',
  imgDomain: 'https://static.chaodp.com/chao_portal5.0/',
  timeout: 6000 // 请求超时时间
}
