# 小程序之左滑

- 目录的意义
  1. pages/  是最简单的页面架构
    四大天王   wxml wxss js json
  2. utils/  
    工具目录
    各个页面公用的js 工具函数  日期格式化函数
  3. components/
    组件化
  4. wxs  类js的复用 ，为什么不放在utils？
  直接就被模板利用
  utils->js文件中引入 +wxml里去复用
  新的语言wxs
- 你我他
  用户（隐私）-->开发者 -->   小程序微信（服务器） 
- flex 等比例分配
  父元素上设置display:flex;
  子元素上设置flex:1 等比例分配  