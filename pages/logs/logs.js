//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    total: 0,
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  incrementTotal(e) {    // 定义父组件的
    // 通过e.detail获取点击的那个对象
    var num = e.detail.num
    this.setData({
      total: this.data.total + e.detail.num
    })
  },
})
