// pages/search/search.js
// 自己封装的工具函数
let tool = require('../../utils/tool');

// 导入 list数据
import list from '../../utils/list'
// console.log(list);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 列表数据
    list,
    // 搜索结果列表
    movieList:[]
  },
  // 搜索电影
  search(event) {
    // console.log(event);
    // 搜索的内容
    let searchName = event.detail.value;

    // 调用接口获取数据
    tool.myPro({
      url: tool.baseUrl + `/movie/search?q=${searchName}`
    }).then(result => {
      // 计算星星
      result.data.subjects.forEach(v=>{
        v.starArr = tool.makeStar(v.rating.average);
      })


      this.setData({
        movieList:result.data.subjects
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // // 获取数据模拟的.json数据 配置在花姐的电脑上 你会回家就没有用了
    // tool.myPro({
    //   url: 'http://192.168.26.253/data/list.json'
    // }).then(result => {
    //   // console.log(result);
    //   this.setData({
    //     list:result.data
    //   })
    // })
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