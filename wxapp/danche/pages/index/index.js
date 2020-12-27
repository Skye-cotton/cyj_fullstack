//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    longitude:116.401889,
    latitude:39.914023,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  //  console.log('地图组件加载完成了，');
  wx.getLocation({
    type:'gcj02',
    success:(res)=>{
      let longitude = res.longitude;
      let latitude = res.latitude;
      // 在wxml 模板里，{{latitude}} 坑
      this.setData({
        longitude:longitude,
        latitude: latitude
      })
    }
  })
  },
  toScan(){
    // console.log('toScan');
    return wx.scanCode({
      success:(res) => {
        // wx.showModal({
        //   title:'二维码',
        //   content:JSON.stringify(res)
        // })
        let id =res.result;
        wx.navigateTo({
          url: '/pages/unlock/unlock?id=${id}'
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
