function Animal(name){
    this.name=name;
    this.species = "动物";
}

// console.log(Animal.__proto__.__proto__);
function Cat(name,color){
    Animal.call(this,name,color);
    this.name=name;
    this.color=color;
}
var cat1 = new Cat("大毛","黄色")
console.log(cat1.species);