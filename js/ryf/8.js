//prototype 模式

function Animal(){
    this.species='动物'
}
function Cat(name,color){
    this.name=name;
    this.color=color
}

//cat1->Cat->new Animal(){species:}
//一心只想species
Cat.prototype = new Animal();//副作用，会抹掉constructor属性
Cat.prototype.constructor=Cat;//要加上这一句
var cat1 = new Cat('大毛','黄色')
console.log(cat1.species);//动物
console.log(Cat.prototype.constructor);//[Function: Animal]