
Page({

  /**
   * 页面的初始数据
   */
  data: {
    size:[
      "5", "6", "7", "8", "9"
    ],
    type:[
      " 恐怖 ", " 欢乐 "," 阵营 "," 硬核 "," 沉浸 "," 家国 "
    ],
    publiser:[
      " 城市限定 "," 独家 "," 盒装 "
    ],
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
      {
        id : "3",
        name: "市井狂人",
      },
      {
        id : "4",
        name: "死者在幻夜中醒来",
      },
      {
        id : "5",
        name: "一点半",
      },
      {
        id : "6",
        name: "漓川怪谈簿",
      },
      {
        id : "7",
        name: "病娇男孩的精分日记",
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