- WeakMap
    - WeakMap 和Map的区别
    1. WeakMap只接受对象作为键名（NULL除外） 不接受其他类型的值作为键名
    2. WeakMap 的键名指向的对象不计入垃圾回收机制   这也是使用WeakMap的重要原因
    应用场景：在网页上的DOM元素上添加数据时就可以使用WeakMap结构
    总结：WeakMap的专用场景就是它的对象可能会在将来消失的场景，WeakMap结构有助于防止内存泄露