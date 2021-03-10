// 云数据库
const db = wx.cloud.database()
// userIfon表
const userInfo = db.collection('userInfo')
Page({
  data:{
    userList:[]
  },
  navigatTo(){

  },
  getUserInfo(result){
    // console.log(result.detail.userInfo);
    // 一次上云事件
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        console.log(res)
        //在哪里  mysql where  条件查询
        userInfo.where({
          // 去云端就是为了拿openid   openid==身份证
          //用户的openId是唯一的！
          _openid:res.result.openId
        }).count().then(res=>{
          // console.log(res);
          if (res.total==0)//说明新用户
          {//插入用户
            // Insert 
            userInfo.add({
              //一定要有一个data  一个JSON
              data:result.detail.userInfo
            }).then(res=>{
              wx.navigateTo({
                url: '../add/add',
              })
            }).catch(err=>{
              console.log(err)
            })
          }else{
            wx.navigateTo({
              url: '../add/add',
            })
          }
        })

      }
    })
  }
})

