var isValid = function(s) {
    if(!s || s.length <1) return true;
    var n=s.length;
    const stack=[]
    //stack 栈的意思  push pop 只在数组的尾顶部插入或删除元素 栈 FILO(先进先出)
    // 在数组的尾部位置插入push，数组的头部移除 shift()
    for(var i=0;i<n;i++){//复杂度O(n)
        var c=s[i]
        if(c=='('){
            stack.push(c)
        }else{
            // )
            if(stack.length <1){//第一个就是)
                return false;
            }
            stack.pop()//出栈
        }
    }
    return stack.length >0? false:true
}
console.log(isValid('()'));