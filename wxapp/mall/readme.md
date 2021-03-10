# 电商小程序

  - 前端框架 vant 
    1. npm i @vant/weapp -s --production
    来自有赞，微信生态得为长
    2. npm init -y
    安装第三方插件 
    3. 构建
    miniprogram_npm 第三方包
    @vant/weapp/button/index  

    API在哪里？
    商品列表 
    apifm-wxapi  提供数据


- 电商项目的感觉
  搜索栏 
  导航栏
  banners
  商品推荐
  商品列表

- 总结一下搜索体验 把自己当小白
  placeholder + padding-left + bindinput + bindConfirm


- 业务
  1. 搜索
  2. tabbar(前端) 条件筛选业务（后端查询参数？order=price）
  3. 列表业务 wx:for
  data:{
    goods:[]
  }
  apifm
  /goods?order=&page=${n}&size=20&keyword=addidas

- 页面的生命周期
  谁先发生，适合做什么？
  onload  加载wxml，wxss js  最少
  onshow  wxml + wxss  渲染  js还没有执行完 还不能交互的
  onReady 