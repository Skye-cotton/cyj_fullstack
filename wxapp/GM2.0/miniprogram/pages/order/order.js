
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    groups:["人气推荐","冬季限定","果茶系列","奶芙系列","抹茶可可","芝士系列","奶茶家族"],
    currentSecName:"人气推荐"
  },
  
  /**
   * 用户点击左侧菜单的事件
   */
  onTap:function(e){
    this.setData({
      currentSecName:e.currentTarget.dataset.current,
      // currentSection:cate[e.currentTarget.dataset.current]
    })
    console.log(e.currentTarget.dataset.current)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    productsCollection.get().then(res =>{
      this.setData({
        products:res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      msgList: [
        { url: "url", title: "请确认门店后再下单，饮品为定制产品" },
        { url: "url", title: "出餐后概不退换，敬请谅解" }]
    });
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