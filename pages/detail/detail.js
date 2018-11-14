// pages/detail/detail.js
// 导入工具函数
let tool = require('../../utils/tool');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 电影id
    id: '',
    // 电影数据
    movieInfo: {},
    // 简短的影评
    cutSummary: ''
  },
  // 显示更多
  more() {
    // 修改显示的文本即可
    // 微信小程序 早期 this.xxx = xx
    // 后期 this.data.xx = xxx
    // 现在 只能 this.setData
    // this.data.cutSummary = this.data.summary;
    this.setData({
      cutSummary: this.data.movieInfo.summary
    })
  },
  // 缩短内容
  cut() {
    // 缩短即可
    this.setData({
      cutSummary: this.data.movieInfo.summary.substr(0, 65) + '...'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接收数据
    // console.log(options);
    this.setData({
      id: options.id
    })
    // 调用接口 获取数据
    tool.myPro({
      url: tool.baseUrl + `/movie/subject/${this.data.id}`
    }).then(result => {
      // 计算星星 调用自己抽取的星星算法
      result.data.starArr = tool.makeStar(result.data.rating.average);
      // 截取文本 准备一个简短的 剧情简介
      // result.data.cutSummary = result.data.summary.substr(0, 65) + '...';
      this.setData({
        movieInfo: result.data,
        // 简短的影评 直接新增一个字段即可
        cutSummary: result.data.summary.substr(0, 65) + '...'
      })
    })
    // 渲染页面
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