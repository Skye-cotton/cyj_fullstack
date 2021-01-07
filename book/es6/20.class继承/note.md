- Class的继承
    1. extends 关键字继承；在子类调用this关键字之前要调用super
    2. Object.getPrototypeOf() 从子类上获取父类
    判断一个类是否继承了另一个类，可以用该方法：
    Object.getPrototypeOf(Cat)===Animal    //true
    3. super关键字，在1.中说过子类构造函数要调用一次super
    super 既可以当做函数使用又可以当做对象
    - 第一种情况：super函数调用时作为父类的构造函数。   super()只能用在子类的构造函数中
    B继承A；A是父，B是子 
    super内部的this指的是B，所以  super() 在这里相当于A.prototype.constructor.call(this)
    - 第二种情况：super作为对象，普通方法中指向父类的原型对象（A.prototype）；静态方法指向父类
    4. 类的prototype属性和__proto__属性
    什么是__proto__属性？每一个对象都有__proto__属性，指向对应的构造函数的prototype属性
    Class作为构造函数的语法糖，它同时有prototype和__proto__，因此存在两条继承链
    代码：
    class A{
    }
    class B extends A{
    }
    console.log(B.__proto__===A); // true 子类的__proto__属性表示构造函数的继承，总是指向父类
    console.log( B.prototype.__proto__===A.prototype);//true 子类prototype属性的__proto__属性表示方法的继承，总是指向父类的Prototype属性
    可以这么理解：
    作为对象 (这个时候B的原型是__proto__属性)：B.__proto__===A
    作为构造函数(这个时候B的原型是prototype属性)：B.prototype是父类的实例
    4.1 extends的继承目标
    class A{
    }
    class B extends A{
    }
    A只要有一个prototype属性就能被继承，而一般的函数（除了Function.prototype函数）都有,所以A可以是任何函数
    三种特殊情况：
        - 子类继承Object类
        - 不存在任何继承
        - 子类继承null
    4.2 实例的__proto__属性
        子类的原型的原型是父类的原型，即：
        B.__proto__.__proto__=A.__proto__