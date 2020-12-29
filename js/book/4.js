 console.log( Object.assign({},{
    a:1,
    b:2,
    say(){
        console.log(this.a +this.b);
    }
}));

//Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。