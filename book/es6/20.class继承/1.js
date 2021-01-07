class A{
}
class B extends A{
}
console.log(B.__proto__===A); 
console.log( B.prototype.__proto__===A.prototype);