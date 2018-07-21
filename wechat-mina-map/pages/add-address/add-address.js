// pages/add-address/add-address.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var location = app.location;
    console.log("[address] location=", location)
    if (location != undefined) {
      this.setData({
        location: location
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  choosePosition: function() {
    var location = this.data.location;
    if (location == null) {
      wx.navigateTo({
        url: '../base-map/base-map',
      })
    }else{
      console.log("=====", location)
      wx.navigateTo({
        url: '../base-map/base-map?location=' + location 
        + '&title=' + location.title 
        + '&address=' + location.address
        + '&lat=' + location.lat
        + '&lng='+ location.lng,
      })
    }
  }
})