// pages/cate/index.js
var common = require('../common.js');
Page({
  viewtap:function(){
    this.setData({me : "你点击了就能看到我了，我可以满足你三个愿望"})
  },
  china:function(){
    common.saynihao('测试');
  },
  english:function(){
    common.sayhello('mina');
  },
  add_one:function(){
    this.setData({
      count : this.data.count+1
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    text : "没事干是吧",
    array : [{msg:1},{msg:2}],
    me : "click me",
    staffA : {firstName : "Nike", lastName : "Jason"},
    staffB: { firstName: "Echo", lastName: "Edit" },
    staffC: { firstName: "Add", lastName: "Porst" },
    count: 1,
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
    this.setData({first:"每次打开都会看到这句话"})
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