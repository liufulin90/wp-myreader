import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'
import { API_HOST } from './constant'

const API_SECRET_KEY = 'wpreader.linxins.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = (params = {},url) => {
  tip.loading();
  let data = params.query || {};
  wx.request({
    url: API_HOST + url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': 'application/json' },
    success: function(res) {
      typeof params.success === 'function' && params.success(res)
      tip.loaded();
    },
    fail: function(res) {
      typeof params.fail === 'function' && params.fail(res)
      tip.loaded();
    }
  })
}

module.exports = {
  wxRequest
}
