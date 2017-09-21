import axios from 'axios'

export default {

  request (method, url, params) {
    var promise = null
    url = process.env.API_URL + url

    if (method === 'get') {
      promise = axios.get(url, { params: params })
    } else if (method === 'post') {
      promise = axios.post(url, params)
    }
    promise.catch(function () {
      return alert('エラーが発生しました')
    })
    return promise
  },

  get (url, params) {
    return this.request('get', url, params)
  },

  post (url, params) {
    return this.request('post', url, params)
  }
}
