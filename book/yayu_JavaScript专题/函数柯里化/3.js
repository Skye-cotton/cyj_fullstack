//极简版的代码：
function sub_curry(fn){
    return function(){
        return fn()
    }
}
function curry(fn,length){
    length=length || 4
    return function(){
        if(length > 1){
            return curry(sub_curry(fn),--length)
        }else{
            return fn()
        }
    }
}

var fn0 =function(){
    console.log(1);
}
var fn1 = curry(fn0)

fn1()()()()//1
//当执行 fn1()()()() 时，因为此时 length > 2 为 false，所以执行 fn()：

