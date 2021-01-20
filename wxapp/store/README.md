# 水果电商小程序
1. 首页设计店营业/打烊的需要？
2. 页面功能
  搜索，swiper、列表组件化
3. isShow?
isShow true false 
4. 搜索
5. 轮播图
大项目页面比较长，用组件封装出去，没有那么长了提高复用性
application <- pages<- components<- 原子的组标
6. tab 切换？
  1. 设备数据 tab 状态相关 activeTypeId 
  2. 多个type  放到数据里 
  3. 写css
  - css flex  1/4
    位置怎么做？
7. 数据库设计
  - fruit-board
    支持where 操作
    myClass  0 1  2 3
    onShow  是否上架
    详情页  swiper

  - 封装云开发数据操作的能力
    1. app.js 是天然的公用js 方法的地方 
      const app=getApp()  //微信的定义
      app.get
    2. 抽象了某个表，某个排序方式，得到结果后做某种操作
      高效 
- flex 里怎么让元素下去
- 设计一下购物车？ 数组  某项商品， 数量
  首页，要加入购物车 加入后要改数量
  购物车  展示出来
  详情页时，加入购物
  关于购物车的数据，是不是要超出页面化，来到哪？
  比页面级别更大的是谁？

  view|image 标签  -> component -> page（有生命周期函数等）->application
  globalData  promise  是否有重复放入判断