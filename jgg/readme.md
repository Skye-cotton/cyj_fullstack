# grid 布局

- 在哪里见过? 微信支付页面下面的
- 考题中，有多少让元素在屏幕居中的方法？
    - flex  body display:flex  justify-content:center align-items:center;  一代
    - grid  二代 二维的时候  justify-content:center （出来行居中，行内文字也居中）
    - 定位
    - margin 赋值
    - .....
- grid-template-row|colums
    布局可以直接对二维名声面
- 9个元素，给一个方案，每个格子不一样的颜色
    - js 是王者 ele.style
    - css方案 .box:nth-child
    ? 每一个都不一样
    .box:nth-child(1|odd|event) :last-child
- 别的方案？不止九个格子，更多格子？选择器写的有点累
    用styl

- 弹性布局在解决现代移动端甚至未来物联网，不好解决或者解决麻烦的九宫格 多加每一行的父元素
    grid 的二维布局方案来了

- 在垂直方向做主元素分配高度
    display:grid+ grid-template-rows: 1fr auto;
    更优秀
- firstChild
