import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'
import { API_HOST } from './constant'

const API_SECRET_KEY = 'wpreader.linxins.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = (params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  let loaded = params.loading === true ? false : true
  return new Promise((resolve, reject) => {
    wx.request({
      url: API_HOST + url,
      method: params.method || 'GET',
      data: data,
      header: { 'Content-Type': 'application/json' },
      success: function(res) {
        resolve(res)
        loaded && tip.loaded()
      },
      fail: function(res) {
        reject(res)
        loaded && tip.loaded()
      }
    })
  })
}

module.exports = {
  wxRequest
}
