function toCamelCase(str) {
    
    var a =/-(\w)/g
    // 形参$0表示正则的整体-(\w)，$1表示正则的第一个子项(\w)
    var b= str.replace(a,function ($0,$1) {
        return $1.toUpperCase();
    })
   
}
console.log(toCamelCase('border-left-color'));