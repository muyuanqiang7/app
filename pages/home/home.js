// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: '沈芳屹',
    uploadText: '上传照片',
    systemInfo: {},
    change: false,
    buttonText: '获取系统信息',
    latitude: 30.67,
    longitude: 104.07,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
  },
  /**
  * 用户点击修改文字
  */
  changeText: function (e) {
    var name = this.data.info;
    wx.showToast({
      title: name + ',我爱你!',
      icon: 'none'
    })
  },
  /**
   * 获取系统信息接口
   */
  getSystemInfo: function () {
    var me = this;
    if (Object.keys(me.data.systemInfo).length > 0) {
      me.setData({ systemInfo: {}, buttonText: '获取系统信息' });
    } else {
      wx.getSystemInfo({
        success: function (res) {
          me.setData({ systemInfo: res, buttonText: '隐藏系统信息' });
        },
      })
    }
  },
  /**
   * 选择并上传图片
   */
  chooseAndUpload: function () {
    wx.chooseImage({
      count: 1,
      sizeType: this.data.sizeType,
      sourceType: this.data.sourceType,
      success: function (res) { 
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
      },
      fail: function (res) {
      },
      complete: function (res) {
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var me = this;
    wx.getLocation({
      success: function (res) {
        console.log(res);
        me.setData({ latitude: res.latitude, longitude: res.longitude })
      },
      fail: function (res) {
        wx.showToast({
          title: '获取位置失败,请授权!',
          icon: 'none'
        })
        console.log(res);
      }
    })
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