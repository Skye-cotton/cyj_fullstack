# 向樱空学习， 技术实力

1. 框架
  weui 让小程序更像原生微信的框架，比vant小一些
2. 导航的自定义  navigationStyle
例子：https://juejin.cn/post/6866963549823238151
3. 全局引入组件
  app.js app.wxss app.json
4. 全局启用了下拉更新 onPulldownRefresh
  耗时操作，stop 模仿APP中下拉刷新
  有点鲁莽，应该在页面启动，列表式的启动一下
5. 图片都放在images会让程序变大，放到cdn下云存储，云中的地址，减小了代码包的体积
6. colur-ui  随心随性大法
  flex justify-center padding
  字体颜色 text-white text-blue
  margin-tb-sm lg text-xl

