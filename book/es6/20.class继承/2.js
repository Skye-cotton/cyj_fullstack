class Animal{

}
class cat extends Animal{
    constructor(x,y,color){
        super(x,y)
        this.color=color
    }
    toString(){
        return this.color + ' ' + super.toString()
    }
}
var c=new cat(2,3)
console.log(c);