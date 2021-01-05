- stylus 模块化
    import 引入
- vertical-align:top
    兄弟元素的对齐方式，有图片的时候
    inline-block +font-size 0 既不换行也不inline

- brand 图标 60*36
代码：30*18  手机大部分是retina屏
    三倍retina 屏 iPhone12 Max  90*54
    注意：图片的大小设置
    css像素 物理像素 30*18
    retina  60*36
    3倍retina   90*54
    媒体选择器
    @media (-webkit-min-device-pixel-ratio: 3)
- bg-image($url) 函数  mixin 混合
函数运行后有一个返回值
mixin 是所有的代码都混合到调用它的位置去
完成这部分代码的复用

- stylus 让css 变成了编程语言
    1. 嵌套 tab 缩进 let  {}代码块  可以折叠   方便管理 
    集体下线， 很干净 好管理  代码的组织能力有了
    2. 函数能力  代码的复用
    3. 变量
