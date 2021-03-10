//更易懂的实现
function curry(fn,args){
    length = fn.length

    args =args || []
    console.log(args);//有几个括号输出几次，fn("a", "b")("c") 
    return function(){

        var _args = args.slice(0),arg,i;//定义_args,arg,i
        for(i=0;i<arguments.length;i++){
            arg = arguments[i]

            _args.push(arg)
        }
        if(_args.length <length){
            return curry.call(this,fn,_args)
        }else{
            return fn.apply(this,_args)
        }

    }
}
var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
});

//fn("a", "b", "c") // ["a", "b", "c"]
 fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]

