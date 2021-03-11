function longestValidParentheses(s){
    //最长有效匹配括号长度  LeetCode32
    //有效括号的升级版 + 长度
    var max =0//最大长度
    if(s.length == 0||s.length==1){return max}//没得匹配
    var stack=[]  //使用了栈 来实现匹配   空间复杂度O(n)
    //嵌套循环  比较一下
    // 每位括号它的有效括号匹配长度是可以跟之前的有效匹配是一样的、
    for(var i=0;i<s.length;i++){
        var tmpMax =0;//当前位括号的匹配长度  重新开始
        for(var j=i;j<s.length;j++){
            
        }
    }

    return max;
}