// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id :"0",
        name: "持斧奥夫",
      },
      {
        id : "1",
        name: "风中有朵雨做的云",
      },
      {
        id : "2",
        name: "海的牙齿，神的骨头",
      },

    ]
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

  },
  handleimageclick(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: "/pages/detail/detail?productId=" + id
    })
  }
})