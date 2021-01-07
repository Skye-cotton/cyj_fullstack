//函数 对象
//js 类型 
const arr = [1,2,3];// 对象类型，没有数组类型
console.log(typeof arr); 
arr.push(4);//不报错，const 同类型的可以改变
let a;//声明一个变量 undefined=>类型未定义
console.log(typeof a);
a = [1,2,3];
console.log(typeof a);

function cat(){
    this.type="泽尔"
}
cat.prototype.sayHello = function(){
    console.log("喵喵");
}