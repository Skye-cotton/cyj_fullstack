//'use strict'
var obj = {//json object
    bar:1,
    foo: function(){// obj 属性
        console.log(this.bar);
    }
}

var foo = obj.foo;// foo  函数
var bar = 2
obj.foo()// this 会指向obj本身，函数调用的方式  . 作用域|运行环境
foo() //this 指向谁？ 普通函数