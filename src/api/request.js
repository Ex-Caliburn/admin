import Api from '@/js/api'
import Router from '@/router/'
import Axios from 'axios'
import { Message } from 'element-ui'

const baseRequest = Axios.create({})
baseRequest.defaults.withCredentials = true

// 对所有的数据响应检查是否登录
baseRequest.interceptors.response.use(function (res) {
  if (res.data.code === 0) {
    return Promise.resolve(res.data.data)
  } else {
    return Promise.reject(res.data.msg)
  }
}, function (error) {
  console.log(error)
  if (!error.response) {
    Router.replace('/Login')
  }
  Message.error(error)
  return Promise.reject(error)
})

class Request {
  get (name, params) {
    return baseRequest.get(Api.getApi(name), {params: params})
      .then(function (res) {
        return Promise.resolve(res)
      })
      .catch(function (err) {
        return Promise.reject(err)
      })
  }

  post (name, data) {
    return baseRequest.post(Api.getApi(name), data)
      .then(function (res) {
        return Promise.resolve(res)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }
}

export default new Request()
