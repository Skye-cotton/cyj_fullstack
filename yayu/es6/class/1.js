//es6 提供了class 关键字
//语法糖，其实还是原型式继承
//像大型语言，传统面向对象的写法
// 接几招
class Person{
    // 新写法
    state={
        count:0
    }
    constructor(name){
        this.name=name;
    }
    sayHello(){
        return 'Hello,I am'+this.name
    }
}

const kevin = new Person('Kevin')
console.log(kevin.__proto__,Person.prototype);
// Person()

//Object.keys 是什么？
//Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，
//数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 
// es6 里可枚举怎么实现？
console.log(Object.keys(Person.prototype));//可枚举属性
console.log(Object.getOwnPropertyNames(Person.prototype));