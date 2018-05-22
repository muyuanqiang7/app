// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      info:'沈芳屹',
      systemInfo:{},
      change:false
  },
  /**
  * 用户点击修改文字
  */
  changeText: function (e) {
    if(this.data.change){
      this.setData({ info: '我爱你', change:           !this.data.change});
    }else{
      this.setData({ info: '沈芳屹', change: !this.data.change});
    }
  },
  /**
   * 获取系统信息接口
   */
  getSystemInfo: function(){
    var me = this;
    wx.getSystemInfo({
      success: function(res) {
        me.setData({ systemInfo: res});
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})