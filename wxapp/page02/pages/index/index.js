Page({
  data:{
      userList:[]
  },
  navigatTo(){

  },
  getUserInfo(result) {
      // console.log(result.detail.userInfo);
      //一切的云开发未来都是从调用一个函数开始
      // 登录
      wx.cloud.callFunction({
        name: 'getOpenId',
        //回调函数
        complete: res => {
          //继续怎么做
        }
      })
    }
  
})