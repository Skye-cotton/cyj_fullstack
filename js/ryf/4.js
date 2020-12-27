// 函数是天生可以复用的
// var Cat={
//     name:'',
//     color:''
// }
function Cat(name,color){
    return{
        name,
        color
    }
}
var cat1=Cat("大毛","黄色");
console.log(cat1);