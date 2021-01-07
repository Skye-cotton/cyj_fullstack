- Map 实例的属性和操作方法
    - size属性
    - set(key,value) 设置key所对应的值，并返回整个Map结构
    - get(key)
    - has(key)
    - delete(key)
    - clear()
- 遍历方法
    Map原生提供了三个遍历器生成函数和一个遍历方法
    - keys()：返回键名的遍历器
    - values()：返回键值的遍历器
    - entries()：返回所有成员的遍历器
    Map结构的默认遍历器接口(Symbol.iterator属性)就是entries方法
    map[Symbol.iterator] === map.entries//true
    - forEach():遍历Map的所有成员
    friends.forEach((val,key) =>console.log((val,key)))

    - 结合扩展运算符(...)
    Map结构转为数组结构的比较快速的方法是结合扩展运算符
- 与其他数据结构的互相转换
    - Map转为数组  扩展运算符(...)
    - 数组转Map  将数组传入Map构造函数
    new Map([
        [true,7],
        [{foo:3},['abc']]
    ])
    - Map 转对象  所有键是字符串，可以转对象
    - 对象转Map
    - Map 转为JSON
    - JSON转为Map
    