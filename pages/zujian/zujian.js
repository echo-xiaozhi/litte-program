// pages/zujian/zujian.js
var order = ['red','yellow','blue','green','red']
var initData = 'this is first line \n this is second line'
var extraline = []
Page({
  /**
   * 页面的初始数据
   */
  data: {
    text : initData,
    x : 0,
    y : 0,
    toView : 'red',
    scrollTop : 100,
    image_urls : [
      '../../images/1.jpg',
      '../../images/2.jpg',
    ],
    indicator_dots : true,
    autoplay : true,
    interval : 5000,
    duration : 1000,
    icon_size :  [15,20,25,30,35,40,45,50],
    icon_type : ['success','success_no_circle','info','warn','waiting','cancel','download','search','clear'],
    icon_color : ['red','blue','yellow','black','green']
  },
  add: function(e){
    extraline.push('add line')
    this.setData({
      text: initData + '\n' + extraline.join('\n')
    })
  },
  remove: function(e){
    if(extraline.length > 0){
      extraline.pop()
      this.setData({
        text: initData + '\n' + extraline.join('\n')
      })
    }
  },
  taps: function(e){
    this.setData({
      x: this.data.x+30,
      y: this.data.y+30
    })
  },
  on_change: function(e){
    console.log(e)
  },
  on_scale: function(e){
    console.log(e);
  },
  change_indicator_dots: function(e){
    this.setData({
      indicator_dots : !this.data.indicator_dots
    })
  },
  change_autoplay: function(e){
    this.setData({
      autoplay: !this.data.autoplay
    })
  }, 
  interval_change: function(e){
    this.setData({
      interval: e.detail.value
    })
  },
  duration_change:function(e){
    this.setData({
      duration: e.detail.value
    })
  },
  upper: function(e){
    console.log(e)
  },
  lower: function(e){
    console.log(e)
  },
  scroll: function(e){
    console.log(e)
  },
  tap: function(e){
    for(var i = 0; i <order.length; ++i ){
      if (order[i] === this.data.toView){
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e){
    this.setData({
      scrollTop: this.data.scrollTop + 10
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
  onReady: function (e) {
    this.videoCtx = wx.createVideoContext("my_video")
  },
  play(){
    this.videoCtx.play()
  },
  pause(){
    this.videoCtx.pause()
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

  },
  
})