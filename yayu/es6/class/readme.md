- es6 class  与  es5  构造函数+prototype 有什么关系？
    语法糖 哪些？

- babel babel 的使命就来了
    es6 class 不停地更新，每个版本，意义。
    版本不一样
    运行的环境就不一样
    babel 负责代码转义器
    js 的运行环境太复杂了，不是单纯的Chrome，
    IE 10,360，QQ， 支持不同的版本，node的不同版本，怎么办？
    babel 解决这些，写出来的

- 一线公司问？
    请问es6 class 关键字实现除了刚刚讲的，有什么不一样的地方吗？
    - ES6 class  构造函数在constructor只能被new，不能作为普通函数执行
        - 如果要你去设计的话？怎么实现呢？
    - Person.prototype 不可枚举
        Object.keys()//可枚举
        Object.getOwnPropertyNames() 可调用
    - ES6 还有比ES5实现丰富的地方
        es6里声明属性的时候有个高级的写法
    - 手写一个

1. babel js 转义  帮助es6 class->es6 function
