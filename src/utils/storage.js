const getStorage = function (key, isDeep = false) {
  wx.getStorageSync(key)
}

module.exports = {
  getStorage
}
