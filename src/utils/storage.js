/**
 * 从storage中获得数据
 * @param key
 * @param isDeep
 * @returns {*}
 */
const getStorage = function (key, isDeep = false) {
  let data = wx.getStorageSync(key)
  return data
}

/**
 * 将数据保存到storage中
 * @param key
 * @param data
 * @param isMerge
 */
const setStorage = function (key, data, isMerge = true) {
  if (isMerge) {
    let getData = wx.getStorageSync(key)
    if (getData && typeof getData == 'object') {
      data = Object.assign(getData, data)
    }
  }
  wx.setStorageSync(key, data)
}

module.exports = {
  getStorage,
  setStorage
}
