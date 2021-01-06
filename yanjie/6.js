function duplicateCount(text){
    //sort()  排序  join() 合起来
    var str =text.toLowerCase().split('').sort().join('')
    //得到所有的数字
    var word ='123-4560-666'
    console.log(/\d+/.test(word));//true
    console.log(word.match(/\d+/g)); //加g  全局匹配
    //相邻的字符是一样的，
    //[a-zA-Z])\1   相同的字符
    //[a-zA-Z])\1+  两个以上的字符 
    var arr = str.match(/([.])\1+/g);
    // console.log(str);
    return arr.length
}
console.log(duplicateCount('aadsdjfwuhh')); 