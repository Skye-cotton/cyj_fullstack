function Cat(name,color){
    // new 会执行执行Cat
    this.name=name;// this 指向它的实例
    this.color=color;
    //return this
    
    // prototype 要生成的原因
    
}
//原型对象
Cat.prototype.eat = function(){
    console.log("老鼠");
}//也会指向this
Cat.prototype.type="猫科动物";


// 实例化
// new 的执行过程
var cat1 = new Cat("大毛","黄色");
var cat2 = new Cat("二毛","黑色");
console.log(cat1.constructor == cat2.constructor);// 构造函数
console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);
cat1.eat();