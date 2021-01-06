var obj={
    a:1,
    b:2,
    c:3
}
with(obj){
    a=3,
    b=4,
    c=5
}
// console.log(obj.a);

function foo(obj){
    with(obj){
        a=2
    }
}
var o1={
    a:3
};
var o2={
    b:3
};
foo(o1);
console.log(o1.a);
foo(o2);
console.log(o2.a);
console.log(a); //2——不好，a被泄露到全局作用域上了